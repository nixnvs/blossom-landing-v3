"use client"

import { useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export default function Header() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    return scrollY.on("change", (v) => setScrolled(v > 80))
  }, [scrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-all duration-300 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between relative">
        {/* Hamburger */}
        <button className="flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-0">
          <span className={`block w-6 h-px transition-all duration-300 ${scrolled ? "bg-[#48473F]" : "bg-white"}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${scrolled ? "bg-[#48473F]" : "bg-white"}`} />
          <span className={`block w-6 h-px transition-all duration-300 ${scrolled ? "bg-[#48473F]" : "bg-white"}`} />
        </button>

        {/* Logo — centrado absoluto */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <img
            src={scrolled ? "/Blossom-reduccion-positivo.svg" : "/Blossom-reduccion-negativo.svg"}
            alt="Blossom"
            height="56"
            width="38"
            style={{ objectFit: "contain" }}
            className="transition-all duration-300"
          />
        </div>

        {/* CTA */}
        <button
          className={`uppercase text-xs tracking-widest cursor-pointer bg-transparent border-none p-0 transition-all duration-300 ${
            scrolled ? "text-[#48473F]" : "text-white"
          }`}
        >
          RESERVAR UNA MESA
        </button>
      </div>
    </header>
  )
}
