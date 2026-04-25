"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { PORTFOLIO_WORKS } from "@/lib/portfolio-data"
import {
  CATEGORY_ALL,
  CATEGORY_MOBILE,
  PORTFOLIO_CATEGORIES,
  getCoverAspectClass,
  shouldUseFourColumns,
  sortWorksForAll,
} from "@/lib/portfolio-constants"

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("全部")
  const [viewerState, setViewerState] = useState<{ workId: number; mediaIndex: number } | null>(null)
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const loadMoreTriggerRef = useRef<HTMLDivElement | null>(null)

  const filteredWorks = activeCategory === CATEGORY_ALL
    ? sortWorksForAll(PORTFOLIO_WORKS)
    : PORTFOLIO_WORKS.filter((work) => work.category === activeCategory)
  const initialRenderCount = activeCategory === CATEGORY_MOBILE ? 8 : 6
  const loadBatchCount = activeCategory === CATEGORY_MOBILE ? 4 : 3
  const [visibleCount, setVisibleCount] = useState(initialRenderCount)
  const visibleWorks = useMemo(
    () => filteredWorks.slice(0, visibleCount),
    [filteredWorks, visibleCount]
  )

  const activeWork = useMemo(
    () => (viewerState ? PORTFOLIO_WORKS.find((work) => work.id === viewerState.workId) ?? null : null),
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

  useEffect(() => {
    setVisibleCount(initialRenderCount)
  }, [activeCategory, initialRenderCount])

  useEffect(() => {
    if (!loadMoreTriggerRef.current) return
    if (visibleCount >= filteredWorks.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (!entry?.isIntersecting) return
        setVisibleCount((prev) => Math.min(prev + loadBatchCount, filteredWorks.length))
      },
      { rootMargin: "200px 0px" }
    )

    observer.observe(loadMoreTriggerRef.current)
    return () => observer.disconnect()
  }, [visibleCount, filteredWorks.length, loadBatchCount])

  return (
    <section className="py-12 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-[#1a1a24]">
          {PORTFOLIO_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#d946ef] to-[#ec4899] text-white shadow-lg shadow-[#d946ef]/25"
                  : "bg-[#1a1a24] text-gray-300 border border-[#2a2a3a] hover:border-[#d946ef]/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Works Grid */}
        <div
          className={`grid md:grid-cols-2 gap-6 ${
            shouldUseFourColumns(activeCategory) ? "lg:grid-cols-4" : "lg:grid-cols-3"
          }`}
        >
          {visibleWorks.map((work) => (
            <div
              key={work.id}
              id={`work-${work.id}`}
              className="group rounded-2xl overflow-hidden bg-[#1a1a24] border border-[#2a2a3a] hover:border-[#d946ef]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#d946ef]/10"
            >
              <button
                type="button"
                className="w-full text-left"
                onClick={() => setViewerState({ workId: work.id, mediaIndex: 0 })}
              >
                <div
                  className={`relative overflow-hidden ${
                    getCoverAspectClass(work.category)
                  }`}
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    loading="lazy"
                    sizes={work.category === "移动端" ? "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
                    quality={85}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  {work.id === 1 && (
                    <span className="absolute top-3 right-3 z-10 inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#d946ef] via-[#ec4899] to-[#8b5cf6] shadow-lg shadow-[#d946ef]/30 border border-white/20 backdrop-blur-sm">
                      动效展示
                    </span>
                  )}
                  {work.id === 4 && (
                    <span className="absolute top-3 right-3 z-10 inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#d946ef] via-[#ec4899] to-[#8b5cf6] shadow-lg shadow-[#d946ef]/30 border border-white/20 backdrop-blur-sm">
                      模式切换
                    </span>
                  )}
                  {work.id === 11 && (
                    <span className="absolute top-3 right-3 z-10 inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#d946ef] via-[#ec4899] to-[#8b5cf6] shadow-lg shadow-[#d946ef]/30 border border-white/20 backdrop-blur-sm">
                      高保真原型
                    </span>
                  )}
                  {work.id === 12 && (
                    <span className="absolute top-3 right-3 z-10 inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#d946ef] via-[#ec4899] to-[#8b5cf6] shadow-lg shadow-[#d946ef]/30 border border-white/20 backdrop-blur-sm">
                      科技动效
                    </span>
                  )}
                  {work.id === 9 && (
                    <span className="absolute top-3 right-3 z-10 inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#d946ef] via-[#ec4899] to-[#8b5cf6] shadow-lg shadow-[#d946ef]/30 border border-white/20 backdrop-blur-sm">
                      涉密线下展示
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
                  <p className="text-sm text-gray-400 line-clamp-2 whitespace-pre-line">{work.description}</p>
                </div>
              </button>
            </div>
          ))}
        </div>
        {visibleCount < filteredWorks.length && (
          <div ref={loadMoreTriggerRef} className="h-8 w-full" aria-hidden="true" />
        )}
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
                  preload="none"
                  className="h-full w-full object-contain bg-black"
                />
              ) : (
                <Image
                  src={activeMedia.src}
                  alt={activeMedia.alt ?? activeWork.title}
                  fill
                  draggable={false}
                  sizes="100vw"
                  quality={90}
                  className="object-contain bg-black select-none pointer-events-none"
                  style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})` }}
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
