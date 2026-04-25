export const CATEGORY_ALL = "全部"
export const CATEGORY_DASHBOARD = "数据大屏"
export const CATEGORY_ADMIN = "后台"
export const CATEGORY_WEB = "网页"
export const CATEGORY_MOBILE = "移动端"
export const CATEGORY_SPEC = "设计规范"

export const PORTFOLIO_CATEGORIES = [
  CATEGORY_ALL,
  CATEGORY_DASHBOARD,
  CATEGORY_ADMIN,
  CATEGORY_WEB,
  CATEGORY_MOBILE,
  CATEGORY_SPEC,
] as const

type WorkLike = {
  category: string
}

export function sortWorksForAll<T extends WorkLike>(works: T[]): T[] {
  return [...works].sort(
    (a, b) => Number(a.category === CATEGORY_MOBILE) - Number(b.category === CATEGORY_MOBILE)
  )
}

export function shouldUseFourColumns(activeCategory: string): boolean {
  return activeCategory === CATEGORY_MOBILE
}

export function getCoverAspectClass(category: string): string {
  return category === CATEGORY_MOBILE ? "aspect-[375/820]" : "aspect-video"
}
