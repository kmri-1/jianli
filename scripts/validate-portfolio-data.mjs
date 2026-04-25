import fs from "fs/promises"
import path from "path"

const projectRoot = process.cwd()
const dataFile = path.join(projectRoot, "lib", "portfolio-data.ts")
const publicDir = path.join(projectRoot, "public")

function collectBlocks(content) {
  const blocks = []
  const regex = /\{\s*id:\s*(\d+),[\s\S]*?title:\s*"([^"]+)",[\s\S]*?media:\s*\[([\s\S]*?)\],\s*\}/g
  let match
  while ((match = regex.exec(content))) {
    blocks.push({
      id: Number(match[1]),
      title: match[2],
      media: match[3],
    })
  }
  return blocks
}

function collectIds(content) {
  return [...content.matchAll(/id:\s*(\d+)/g)].map((m) => Number(m[1]))
}

function collectMediaSrc(mediaContent) {
  return [...mediaContent.matchAll(/src:\s*"([^"]+)"/g)].map((m) => m[1])
}

async function exists(fullPath) {
  try {
    await fs.access(fullPath)
    return true
  } catch {
    return false
  }
}

async function main() {
  const content = await fs.readFile(dataFile, "utf8")
  const ids = collectIds(content)
  const idSet = new Set()
  const duplicatedIds = []
  for (const id of ids) {
    if (idSet.has(id)) duplicatedIds.push(id)
    idSet.add(id)
  }

  const blocks = collectBlocks(content)
  const missingFiles = []
  const emptyMediaWorks = []

  for (const block of blocks) {
    const srcList = collectMediaSrc(block.media)
    if (srcList.length === 0) {
      emptyMediaWorks.push(`${block.id}-${block.title}`)
      continue
    }

    for (const src of srcList) {
      if (!src.startsWith("/")) continue
      if (/^https?:\/\//.test(src)) continue

      const localPath = path.join(publicDir, src.replace(/^\//, ""))
      // eslint-disable-next-line no-await-in-loop
      if (!(await exists(localPath))) {
        missingFiles.push(`${block.id}-${block.title}: ${src}`)
      }
    }
  }

  const errors = []
  if (duplicatedIds.length > 0) {
    errors.push(`重复项目ID: ${[...new Set(duplicatedIds)].join(", ")}`)
  }
  if (emptyMediaWorks.length > 0) {
    errors.push(`缺少媒体列表: ${emptyMediaWorks.join(" | ")}`)
  }
  if (missingFiles.length > 0) {
    errors.push(`媒体文件不存在:\n- ${missingFiles.join("\n- ")}`)
  }

  if (errors.length > 0) {
    console.error("作品数据校验失败：\n")
    for (const err of errors) {
      console.error(err)
      console.error("")
    }
    process.exit(1)
  }

  console.log(`作品数据校验通过：共检查 ${blocks.length} 个项目。`)
}

main().catch((error) => {
  console.error("校验脚本执行失败：", error)
  process.exit(1)
})
