"use client"

import { useState } from "react"
import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { Mail, Phone, MapPin, QrCode } from "lucide-react"

const contactInfo: {
  icon: LucideIcon
  label: string
  value?: string
  qrImage?: string
  color: string
  iconBg: string
  iconColor: string
}[] = [
  {
    icon: Mail,
    label: "邮箱",
    value: "1847211050@qq.com",
    color: "border-[#10b981]",
    iconBg: "bg-[#10b981]/10",
    iconColor: "text-[#10b981]",
  },
  {
    icon: Phone,
    label: "电话",
    value: "131-4656-6431",
    color: "border-[#3b82f6]",
    iconBg: "bg-[#3b82f6]/10",
    iconColor: "text-[#3b82f6]",
  },
  {
    icon: MapPin,
    label: "地址",
    value: "上海市闵行区梅陇镇",
    color: "border-[#10b981]",
    iconBg: "bg-[#10b981]/10",
    iconColor: "text-[#10b981]",
  },
  {
    icon: QrCode,
    label: "微信",
    qrImage: "/images/wechat-qr.jpg",
    color: "border-[#07C160]",
    iconBg: "bg-[#07C160]/10",
    iconColor: "text-[#07C160]",
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("消息已发送！我会尽快回复您。")
  }

  return (
    <section className="py-12 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Contact Info */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">联系方式</h2>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${info.iconBg} border ${info.color} flex items-center justify-center shrink-0`}
                  >
                    <info.icon size={20} className={info.iconColor} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-white font-medium">{info.label}</p>
                    {info.qrImage ? (
                      <div className="mt-1 inline-block rounded-lg overflow-hidden border border-[#2a2a3a] bg-[#1a1a24]">
                        <Image
                          src={info.qrImage}
                          alt="微信二维码"
                          width={120}
                          height={120}
                          className="block h-[120px] w-[120px] object-cover"
                        />
                      </div>
                    ) : (
                      <p className="text-gray-400 whitespace-pre-line">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">发送消息</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-white mb-2">
                  姓名 <span className="text-[#d946ef]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="请输入你的姓名"
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a24] border border-[#2a2a3a] text-white placeholder-gray-500 focus:outline-none focus:border-[#d946ef] transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm text-white mb-2">
                  邮箱 <span className="text-[#d946ef]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a24] border border-[#2a2a3a] text-white placeholder-gray-500 focus:outline-none focus:border-[#d946ef] transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm text-white mb-2">
                  留言 <span className="text-[#d946ef]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="请输入你想说的话..."
                  className="w-full px-4 py-3 rounded-xl bg-[#1a1a24] border border-[#2a2a3a] text-white placeholder-gray-500 focus:outline-none focus:border-[#d946ef] transition-colors"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#d946ef] to-[#ec4899] text-white font-medium hover:opacity-90 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[#d946ef]/25"
              >
                发送消息
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
