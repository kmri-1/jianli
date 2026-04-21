"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const categories = ["全部", "数据大屏", "后台", "网页", "设计规范"]

type WorkMedia = {
  type: "image" | "video"
  src: string
  alt?: string
}

type Work = {
  id: number
  title: string
  category: string
  image: string
  description: string
  media?: WorkMedia[]
}

const works: Work[] = [
  {
    id: 1,
    title: "上海地铁生产管理中心大屏",
    category: "数据大屏",
    image: "/images/work-1-new.png",
    description: "动效+多个不同版本",
    media: [
      { type: "image", src: "/images/work-1-new.png", alt: "生产管理中心大屏-首页" },
      { type: "video", src: "https://tc2aaq9ubv9eza6p.public.blob.vercel-storage.com/production-center-1.mp4", alt: "生产管理中心大屏-动效视频" },
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
      { type: "video", src: "https://tc2aaq9ubv9eza6p.public.blob.vercel-storage.com/schedule-10.0.0.mp4", alt: "智慧调度大屏-路网监视视频" },
      { type: "video", src: "https://tc2aaq9ubv9eza6p.public.blob.vercel-storage.com/schedule-key-control.mp4", alt: "智慧调度大屏-运营重点管控视频" },
      { type: "video", src: "https://tc2aaq9ubv9eza6p.public.blob.vercel-storage.com/schedule-network-monitor.mp4", alt: "智慧调度大屏-10.0.0动效视频" },
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
  {
    id: 4,
    title: "地铁安检项目",
    category: "后台",
    image: "/images/work-subway-security-admin.png",
    description: "组件库高效完成，日间模式+夜间模式一键切换",
    media: [
      { type: "image", src: "/images/work-subway-security-admin.png", alt: "地铁安检项目-首页" },
      { type: "video", src: "https://tc2aaq9ubv9eza6p.public.blob.vercel-storage.com/security-switch.mp4", alt: "地铁安检项目-一键切换视频" },
      { type: "image", src: "/images/security-network-light-1.2.png", alt: "地铁安检项目-线网可视化浅色1.2" },
      { type: "image", src: "/images/security-network-light-1.0.png", alt: "地铁安检项目-线网可视化浅色1.0" },
      { type: "image", src: "/images/security-home-simple.png", alt: "地铁安检项目-首页简化版" },
      { type: "image", src: "/images/security-assets.png", alt: "地铁安检项目-设备资产" },
      { type: "image", src: "/images/security-visual-resource-3.png", alt: "地铁安检项目-可视化资源3" },
      { type: "image", src: "/images/security-package-query-3-backup2.png", alt: "地铁安检项目-包裹数据查询3备份2" },
      { type: "image", src: "/images/security-package-query.png", alt: "地铁安检项目-包裹数据查询" },
    ],
  },
  {
    id: 5,
    title: "大数据中心看板",
    category: "网页",
    image: "/images/work-bigdata-web-dashboard.png",
    description: "复杂网站作品示例",
    media: [
      { type: "image", src: "/images/work-bigdata-web-dashboard.png", alt: "大数据中心看板-封面" },
      { type: "video", src: "https://tc2aaq9ubv9eza6p.public.blob.vercel-storage.com/schedule-key-control.mp4", alt: "大数据中心看板-科技动效" },
      { type: "image", src: "/images/bigdata-market-indicator.png", alt: "大数据中心看板-集团市场经营指标看板" },
      { type: "image", src: "/images/bigdata-operation-cost.jpg", alt: "大数据中心看板-集团运营成本收支看板" },
      { type: "image", src: "/images/bigdata-power-strategy-dark.jpg", alt: "大数据中心看板-供电分公司战略指标深蓝" },
      { type: "image", src: "/images/bigdata-device-power-assessment.jpg", alt: "大数据中心看板-设施设备看板供电状态评估" },
      { type: "image", src: "/images/bigdata-operation-cost.jpg", alt: "大数据中心看板-集团运营成本收支看板-重复页" },
      { type: "image", src: "/images/bigdata-major-operation-guarantee-2.0.jpg", alt: "大数据中心看板-重大运营保障2.0" },
      { type: "image", src: "/images/bigdata-passenger-change-2.0.jpg", alt: "大数据中心看板-客运量变化特点2.0" },
      { type: "image", src: "/images/bigdata-network-quality-event-2.1.jpg", alt: "大数据中心看板-线网质量事件2.1" },
      { type: "image", src: "/images/bigdata-operation-overview.jpg", alt: "大数据中心看板-运营管理工作情况" },
      { type: "image", src: "/images/bigdata-operation-tip-2.0.jpg", alt: "大数据中心看板-运营生产工作提示2.0" },
    ],
  },
  {
    id: 6,
    title: "上海地铁建设集团",
    category: "网页",
    image: "/images/work-shmetro-construction.png",
    description: "图表数据统计类网站",
    media: [
      { type: "image", src: "/images/work-shmetro-construction.png", alt: "上海地铁建设集团-综合看板" },
      { type: "image", src: "/images/construction-progress-2.png", alt: "上海地铁建设集团-指标看板进度2" },
      { type: "image", src: "/images/construction-progress.png", alt: "上海地铁建设集团-指标看板进度" },
      { type: "image", src: "/images/construction-invest-backup-2x.png", alt: "上海地铁建设集团-指标看板投资备份" },
      { type: "image", src: "/images/construction-invest-popup-2x.png", alt: "上海地铁建设集团-指标看板投资弹窗" },
    ],
  },
  {
    id: 7,
    title: "项目管理后台",
    category: "后台",
    image: "/images/work-project-admin.png",
    description: "一个产品多个项目复用，节约项目成本",
    media: [
      { type: "image", src: "/images/work-project-admin.png", alt: "项目管理后台-首页" },
      { type: "image", src: "/images/project-admin-data-maintain.png", alt: "项目管理后台-数据维护新增基本信息" },
      { type: "image", src: "/images/project-admin-device-visual.png", alt: "项目管理后台-设备项目可视化" },
      { type: "image", src: "/images/project-admin-home-backup.png", alt: "项目管理后台-首页备份" },
      { type: "image", src: "/images/project-admin-flow-query.png", alt: "项目管理后台-验工计价流程查询" },
      { type: "image", src: "/images/project-admin-data-query.png", alt: "项目管理后台-验工计价数据查询" },
      { type: "image", src: "/images/project-admin-ledger-procurement.png", alt: "项目管理后台-项目台账详情采购情况" },
      { type: "image", src: "/images/project-admin-ledger-progress-return.png", alt: "项目管理后台-项目台账详情进度回款" },
      { type: "image", src: "/images/project-admin-ledger-weekly-plan.png", alt: "项目管理后台-项目台账详情周度计划" },
      { type: "image", src: "/images/project-admin-ledger-budget-popup.png", alt: "项目管理后台-项目台账详情预算执行弹窗" },
    ],
  },
  {
    id: 8,
    title: "维保在线学习平台",
    category: "网页",
    image: "/images/work-weibao-learning.png",
    description: "课程平台网站及后台管理",
    media: [
      { type: "image", src: "/images/work-weibao-learning.png", alt: "维保在线学习平台-课程页" },
      { type: "image", src: "/images/weibao-learning-login.png", alt: "维保在线学习平台-登录页" },
      { type: "image", src: "/images/weibao-learning-home.png", alt: "维保在线学习平台-首页" },
      { type: "image", src: "/images/weibao-learning-requirement-list.png", alt: "维保在线学习平台-需求管理数据列表" },
    ],
  },
  {
    id: 9,
    title: "UI设计规范文件",
    category: "设计规范",
    image: "/images/work-ui-spec-cover.png",
    description: "把项目做成产品，\n把一次性的设计图转化为公司的设计资产。",
  },
  {
    id: 10,
    title: "地铁车联网",
    category: "后台",
    image: "/images/work-metro-iot.png",
    description: "深色+浅色+炫酷动效",
  },
  {
    id: 11,
    title: "维保首页看板",
    category: "后台",
    image: "/images/work-weibao-dashboard.png",
    description: "高保真交互演示，3种颜色以供备选",
  },
  {
    id: 12,
    title: "运维看板",
    category: "后台",
    image: "/images/work-ops-dashboard-v2.png",
    description: "高保真交互演示，3种颜色以供备选深色+浅色+炫酷动效",
    media: [
      { type: "image", src: "/images/work-ops-dashboard-v2.png", alt: "运维看板-首页" },
      { type: "video", src: "/videos/opsv2-home.mp4", alt: "运维看板-首页动效视频" },
      { type: "image", src: "/images/opsv2-shou-light.png", alt: "运维看板-收浅色" },
      { type: "image", src: "/images/opsv2-yong-light.png", alt: "运维看板-用浅色" },
      { type: "image", src: "/images/opsv2-zhi-light.png", alt: "运维看板-治浅色" },
      { type: "image", src: "/images/opsv2-shou.png", alt: "运维看板-收" },
      { type: "image", src: "/images/opsv2-yong-note.png", alt: "运维看板-用备注" },
      { type: "image", src: "/images/opsv2-zhi.png", alt: "运维看板-治" },
      { type: "image", src: "/images/opsv2-guan.png", alt: "运维看板-管" },
      { type: "image", src: "/images/opsv2-cun.png", alt: "运维看板-存" },
      { type: "image", src: "/images/opsv2-image1.png", alt: "运维看板-图片1" },
    ],
  },
  {
    id: 13,
    title: "智慧运维管理平台-科研项目",
    category: "后台",
    image: "/images/work-smart-ops-research.png",
    description: "运维后台项目+项目LOGO设计思路",
    media: [
      { type: "image", src: "/images/work-smart-ops-research.png", alt: "智慧运维管理平台-首页总览" },
      { type: "image", src: "/images/smartops-business-monitoring.png", alt: "智慧运维管理平台-业务监控系统" },
      { type: "image", src: "/images/smartops-business-observe.png", alt: "智慧运维管理平台-业务监视系统" },
      { type: "image", src: "/images/smartops-cloud-overview-2.0.png", alt: "智慧运维管理平台-云资源总览2.0" },
      { type: "image", src: "/images/smartops-logo.png", alt: "智慧运维平台logo" },
    ],
  },
]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("全部")
  const [viewerState, setViewerState] = useState<{ workId: number; mediaIndex: number } | null>(null)
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const filteredWorks = activeCategory === "全部"
    ? works
    : works.filter((work) => work.category === activeCategory)

  const activeWork = useMemo(
    () => (viewerState ? works.find((work) => work.id === viewerState.workId) ?? null : null),
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
    <section className="py-12 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 pb-8 border-b border-[#1a1a24]">
          {categories.map((category) => (
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work) => (
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
