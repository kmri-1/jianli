import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: '步凡 - 设计经理作品集',
  description: '设计经理步凡的个人作品集，专注于创造直观、优雅且富有影响力的数字产品。',
  keywords: ['UI设计', 'UX设计', '作品集', '用户体验'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="bg-[#0d0d14]">
      <body className={`${inter.variable} font-sans antialiased bg-[#0d0d14] text-white`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
