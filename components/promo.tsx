"use client"

import Image from "next/image"
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export default function Section() {
  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"])

  return (
    <>
      <div
        ref={container}
        className="relative flex items-center justify-center h-screen overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <Image src="/images/dish-design.jpg" fill alt="Abstract spiral circles" style={{ objectFit: "cover" }} />
          </motion.div>
        </div>
      </div>

      <div className="w-full bg-white px-8 py-6">
        <div className="flex items-center justify-between">
          <p className="text-black text-base font-normal max-w-2xl">
            Every section is a frame for your story. Shape it, remix it, and let your content spill into unexpected
            patterns that keep people scrolling.
          </p>
          <button className="bg-black text-white uppercase text-xs tracking-widest px-6 py-3">
          DESCUBRE EL MENÚ
          </button>
        </div>
      </div>
    </>
  )
}
