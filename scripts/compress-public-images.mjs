/**
 * 批量压缩 public/images：在尽量不明显损失观感的前提下减小体积。
 * JPEG：quality 92 + mozjpeg；PNG：最高 zlib 压缩（不改变分辨率与色彩类型）。
 */
import fs from "fs/promises"
import path from "path"
import sharp from "sharp"

const ROOT = path.join(process.cwd(), "public", "images")

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const full = path.join(dir, e.name)
    if (e.isDirectory()) yield* walk(full)
    else yield full
  }
}

async function compressOne(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (![".jpg", ".jpeg", ".png", ".webp"].includes(ext)) return null

  const before = (await fs.stat(filePath)).size
  if (before < 80_000) return null

  const input = await fs.readFile(filePath)
  let outBuf

  if (ext === ".jpg" || ext === ".jpeg") {
    outBuf = await sharp(input)
      .rotate()
      .jpeg({ quality: 92, mozjpeg: true, chromaSubsampling: "4:4:4" })
      .toBuffer()
  } else if (ext === ".png") {
    outBuf = await sharp(input)
      .rotate()
      .png({ compressionLevel: 9, effort: 10, adaptiveFiltering: true })
      .toBuffer()
  } else if (ext === ".webp") {
    outBuf = await sharp(input).rotate().webp({ quality: 90, effort: 6 }).toBuffer()
  }

  if (!outBuf || outBuf.length >= before * 0.97) return null
  await fs.writeFile(filePath, outBuf)
  return { filePath, before, after: outBuf.length }
}

async function main() {
  const results = []
  for await (const file of walk(ROOT)) {
    try {
      const r = await compressOne(file)
      if (r) results.push(r)
    } catch (err) {
      console.error("跳过（错误）:", file, err.message)
    }
  }
  let saved = 0
  for (const r of results) {
    saved += r.before - r.after
    console.log(
      path.relative(process.cwd(), r.filePath),
      `${(r.before / 1024).toFixed(0)}KB -> ${(r.after / 1024).toFixed(0)}KB`,
    )
  }
  console.log(`\n共处理 ${results.length} 个文件，约节省 ${(saved / 1024 / 1024).toFixed(2)} MB`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
