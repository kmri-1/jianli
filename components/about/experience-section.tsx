"use client"

import Image from "next/image"
import { EXPERIENCE_ITEMS } from "@/lib/experience-data"

export function ExperienceSection() {
  return (
    <section className="py-20 bg-[#0d0d14]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 md:mb-14">工作经历</h2>

        <div className="space-y-12 md:space-y-14">
          {EXPERIENCE_ITEMS.map((exp, index) => (
            <div
              key={exp.company + exp.period}
              className="group relative pl-8 md:pl-10 pb-12 md:pb-14 border-l-2 border-[#2a2a3a] last:pb-0 hover:border-[#d946ef]/60 transition-colors duration-300"
            >
              <div
                className={`absolute left-0 top-1 w-4 h-4 -translate-x-[9px] rounded-full border-2 border-[#0d0d14] transition-all duration-300 ${
                  index === 0
                    ? "bg-gradient-to-r from-[#d946ef] to-[#ec4899]"
                    : "bg-[#2a2a3a] group-hover:bg-gradient-to-r group-hover:from-[#d946ef] group-hover:to-[#ec4899]"
                }`}
                aria-hidden
              />

              <header className="space-y-3 mb-5">
                <p className="text-sm md:text-base font-semibold text-[#d946ef] tracking-wide">
                  {exp.period}
                </p>
                <div className="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 md:gap-x-4">
                  <h3 className="flex items-center gap-2 text-lg md:text-xl font-semibold text-white leading-snug">
                    {exp.prefixLogo && (
                      <span
                        className={`relative shrink-0 ${
                          index === 0 ? "h-[92px] w-[92px]" : "h-12 w-12"
                        }`}
                      >
                        <Image
                          src={exp.prefixLogo}
                          alt={`${exp.company} prefix logo`}
                          fill
                          className="rounded-[4px] object-contain"
                        />
                      </span>
                    )}
                    <span
                      className={`relative shrink-0 ${
                        index === 0 ? "h-[72px] w-[72px]" : index === 1 ? "h-[67px] w-[67px]" : "h-12 w-12"
                      }`}
                    >
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        className="rounded-[4px] object-contain"
                      />
                    </span>
                    <span className={index <= 2 ? "ml-8" : ""}>{exp.company}</span>
                  </h3>
                  <span
                    className={`text-sm md:text-base font-medium text-gray-400 shrink-0 ${
                      index <= 2 ? "ml-8" : ""
                    }`}
                  >
                    {exp.role}
                  </span>
                </div>
              </header>

              <ul className="space-y-3.5 md:space-y-4 text-[15px] md:text-base text-gray-400 leading-relaxed list-none m-0 p-0">
                {exp.bullets.map((item, i) => (
                  <li key={`${exp.period}-${i}`} className="flex gap-3">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-[#d946ef]/80 to-[#8b5cf6]/80"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
