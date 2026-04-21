"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react"

type WorkMedia = {
  type: "image" | "video"
  src: string
  alt?: string
}

type FeaturedWork = {
  id: number
  title: string
  category: string
  image: string
  description: string
  media?: WorkMedia[]
}

const featuredWorks: FeaturedWork[] = [
  {
    id: 1,
    title: "上海地铁生产管理中心大屏",
    category: "数据大屏",
    image: "/images/work-1-new.png",
    description: "动效+多个不同版本",
    media: [
      { type: "image", src: "/images/work-1-new.png", alt: "生产管理中心大屏-首页" },
      { type: "video", src: "/videos/production-center-1.mp4", alt: "生产管理中心大屏-动效视频" },
      { type: "image", src: "/images/production-center-menu-3.0.png", alt: "生产管理中心大屏-首页菜单3.0" },
      { type: "image", src: "/images/production-center-fix-rate.png", alt: "生产管理中心大屏-首页故障修复率优化" },
      { type: "image", src: "/images/production-center-abnormal-event.png", alt: "生产管理中心大屏-发车保障异常事件" },
      { type: "image", src: "/images/production-center-construction-backup.png", alt: "生产管理中心大屏-港城车场春节专项施工备份" },
    ],
  },
  {
    id: 2,
    title: "智慧调度大屏",
    category: "数据大屏",
    image: "/images/work-zhihui-schedule.png",
    description: '上海市第二届"数建杯"数字城市建设大赛特等奖项目',
    media: [
      { type: "image", src: "/images/work-zhihui-schedule.png", alt: "智慧调度大屏-运力运量匹配分析" },
      { type: "video", src: "/videos/schedule-network-monitor.mp4", alt: "智慧调度大屏-路网监视视频" },
      { type: "video", src: "/videos/schedule-key-control.mp4", alt: "智慧调度大屏-运营重点管控视频" },
      { type: "video", src: "/videos/schedule-10.0.0.mp4", alt: "智慧调度大屏-10.0.0动效视频" },
      { type: "image", src: "/images/schedule-network-warning.png", alt: "智慧调度大屏-3x3路网大客流预警" },
      { type: "image", src: "/images/schedule-network-monitor-11.0.png", alt: "智慧调度大屏-11.0线网监视+客流信息+事件处理2条ATS" },
      { type: "image", src: "/images/schedule-warning-11.2.6.png", alt: "智慧调度大屏-11.2.6大客流预警+运力运量+方案比选+应急抢修" },
    ],
  },
  {
    id: 3,
    title: "工务数字化运维管理中心大屏",
    category: "数据大屏",
    image: "/images/work-gongwu-screen.png",
    description: "用大屏展示施工情况的日常状态模式和施工状态模式",
    media: [
      { type: "image", src: "/images/work-gongwu-screen.png", alt: "工务数字化运维管理中心大屏-首页" },
      { type: "image", src: "/images/gongwu-daily-1.png", alt: "工务数字化运维管理中心大屏-日常生产大屏" },
      { type: "image", src: "/images/gongwu-daily-2.0.png", alt: "工务数字化运维管理中心大屏-日常生产大屏2.0" },
      { type: "image", src: "/images/gongwu-construction-status.png", alt: "工务数字化运维管理中心大屏-施工情况" },
    ],
  },
]

export function FeaturedWorksSection() {
  const [viewerState, setViewerState] = useState<{ workId: number; mediaIndex: number } | null>(null)
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const activeWork = useMemo(
    () =>
      viewerState
        ? featuredWorks.find((work) => work.id === viewerState.workId) ?? null
        : null,
    [viewerState]
  )

  const activeMediaList = useMemo(() => {
    if (!activeWork) return []
    if (activeWork.media && activeWork.media.length > 0) return activeWork.media
    return [{ type: "image" as const, src: activeWork.image, alt: activeWork.title }]
  }, [activeWork])

  const activeMedia = viewerState ? activeMediaList[viewerState.mediaIndex] : null

  const closeViewer = () => setViewerState(null)

  const resetTransform = () => {
    setZoom(1)
    setOffset({ x: 0, y: 0 })
    setIsDragging(false)
  }

  const showPrevMedia = () => {
    if (!viewerState || activeMediaList.length < 2) return
    setViewerState((prev) => {
      if (!prev) return prev
      return {
        ...prev,
        mediaIndex: (prev.mediaIndex - 1 + activeMediaList.length) % activeMediaList.length,
      }
    })
  }

  const showNextMedia = () => {
    if (!viewerState || activeMediaList.length < 2) return
    setViewerState((prev) => {
      if (!prev) return prev
      return {
        ...prev,
        mediaIndex: (prev.mediaIndex + 1) % activeMediaList.length,
      }
    })
  }

  const handleImageWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (activeMedia?.type !== "image") return
    event.preventDefault()

    const step = event.deltaY < 0 ? 0.2 : -0.2
    setZoom((prev) => {
      const next = Math.min(4, Math.max(1, Number((prev + step).toFixed(2))))
      if (next === 1) {
        setOffset({ x: 0, y: 0 })
        setIsDragging(false)
      }
      return next
    })
  }

  const handleImageMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (activeMedia?.type !== "image" || zoom <= 1) return
    event.preventDefault()
    setIsDragging(true)
    setDragStart({
      x: event.clientX - offset.x,
      y: event.clientY - offset.y,
    })
  }

  const handleImageMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || activeMedia?.type !== "image" || zoom <= 1) return
    setOffset({
      x: event.clientX - dragStart.x,
      y: event.clientY - dragStart.y,
    })
  }

  const handleImageMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (!viewerState) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeViewer()
      if (event.key === "ArrowLeft") showPrevMedia()
      if (event.key === "ArrowRight") showNextMedia()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [viewerState, activeMediaList.length])

  useEffect(() => {
    resetTransform()
  }, [viewerState?.workId, viewerState?.mediaIndex])

  return (
    <section className="py-20 bg-[#0a0a10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">精选作品</h2>
            <p className="text-gray-400 max-w-xl">
              展示我最近参与的部分设计项目，每个项目都代表了我对设计细节的追求。
            </p>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 mt-4 md:mt-0 text-[#d946ef] hover:text-[#ec4899] font-medium transition-colors"
          >
            查看全部作品
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWorks.map((work) => (
            <div
              key={work.id}
              className="group rounded-2xl overflow-hidden bg-[#1a1a24] border border-[#2a2a3a] hover:border-[#d946ef]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#d946ef]/10"
            >
              <button
                type="button"
                onClick={() => setViewerState({ workId: work.id, mediaIndex: 0 })}
                className="w-full text-left"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {work.id === 1 && (
                    <span className="absolute top-3 right-3 z-10 inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#d946ef] via-[#ec4899] to-[#8b5cf6] shadow-lg shadow-[#d946ef]/30 border border-white/20 backdrop-blur-sm">
                      动效展示
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-[#2a2a3a] text-xs text-gray-300">
                      {work.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#d946ef] transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{work.description}</p>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {viewerState && activeWork && activeMedia && (
        <div
          className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={closeViewer}
        >
          <button
            type="button"
            onClick={closeViewer}
            className="absolute top-4 right-4 z-[90] w-10 h-10 rounded-full bg-[#1a1a24]/90 border border-[#2a2a3a] text-white hover:border-[#d946ef]/60 transition-colors flex items-center justify-center"
            aria-label="关闭预览"
          >
            <X size={18} />
          </button>

          <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <div
              className={`relative aspect-video w-full overflow-hidden rounded-xl border border-[#2a2a3a] bg-black ${
                activeMedia.type === "image" && zoom > 1
                  ? isDragging
                    ? "cursor-grabbing"
                    : "cursor-grab"
                  : ""
              }`}
              onWheel={handleImageWheel}
              onMouseDown={handleImageMouseDown}
              onMouseMove={handleImageMouseMove}
              onMouseUp={handleImageMouseUp}
              onMouseLeave={handleImageMouseUp}
            >
              {activeMedia.type === "video" ? (
                <video
                  src={activeMedia.src}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-contain bg-black"
                />
              ) : (
                <Image
                  src={activeMedia.src}
                  alt={activeMedia.alt ?? activeWork.title}
                  fill
                  draggable={false}
                  className="object-contain bg-black select-none pointer-events-none"
                  style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})` }}
                  priority
                />
              )}
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-white text-lg font-semibold">{activeWork.title}</p>
                <p className="text-sm text-gray-400 mt-1">{activeWork.category}</p>
              </div>
              {activeMediaList.length > 1 && (
                <p className="text-sm text-gray-400">
                  {viewerState.mediaIndex + 1} / {activeMediaList.length}
                </p>
              )}
            </div>

            {activeMediaList.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrevMedia}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1a1a24]/90 border border-[#2a2a3a] text-white hover:border-[#d946ef]/60 transition-colors flex items-center justify-center"
                  aria-label="上一张"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={showNextMedia}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#1a1a24]/90 border border-[#2a2a3a] text-white hover:border-[#d946ef]/60 transition-colors flex items-center justify-center"
                  aria-label="下一张"
                >
                  <ChevronRight size={18} />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
