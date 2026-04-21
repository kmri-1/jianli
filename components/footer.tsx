import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#0a0a10] border-t border-[#1a1a24]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-[#d946ef] to-[#ec4899] bg-clip-text text-transparent">
              步凡
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">
              首页
            </Link>
            <Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">
              关于我
            </Link>
            <Link href="/portfolio" className="text-sm text-gray-400 hover:text-white transition-colors">
              作品集
            </Link>
            <Link href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">
              联系我
            </Link>
          </div>
          
          <div className="text-sm text-gray-500">
            © 2026 步凡. 保留所有权利。
          </div>
        </div>
      </div>
    </footer>
  )
}
