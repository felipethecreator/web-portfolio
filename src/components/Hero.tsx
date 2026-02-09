"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || prefersReducedMotion()) return

    const gsap = ensureGsap()
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section)
      const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power2.out" } })

      tl.from(q("[data-animate='hero-text']"), {
        y: 12,
        opacity: 0,
        stagger: 0.08,
      }).from(
        q("[data-animate='hero-image']"),
        { scale: 0.96, opacity: 0 },
        "-=0.2"
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12"
    >
      <div className="space-y-6 max-w-xl">
        <h1 data-animate="hero-text" className="text-4xl md:text-5xl font-bold tracking-tight">
          Olá, me chamo Felipe
          <span className="block text-[#3b82f6]">Dev Full Stack</span>
        </h1>
        <p data-animate="hero-text" className="text-xl text-[#94a3b8]">
          Eu desenvolvo aplicações web acessíveis e fáceis de usar com tecnologias modernas.
        </p>
        <div data-animate="hero-text" className="flex gap-4">
          <Button asChild>
            <Link href="#contact">Entre em contato</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/cv.pdf" target="_blank">Baixar currículo</Link>
          </Button>
        </div>
      </div>
      <div
        data-animate="hero-image"
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#3b82f6]/20"
      >
        <Image src="/pfp-3.jpg" alt="Felipe Rodrigues" fill className="object-cover" priority />
      </div>
    </section>
  )
}
