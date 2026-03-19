"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap"
import type { PortfolioContent } from "@/lib/portfolio-content"

type HeroProps = {
  content: PortfolioContent["hero"]
}

export default function Hero({ content }: HeroProps) {
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
          {content.titleIntro}
          <span className="block text-[#3b82f6]">{content.titleHighlight}</span>
        </h1>
        <p data-animate="hero-text" className="text-xl text-[#94a3b8]">
          {content.description}
        </p>
        <div data-animate="hero-text" className="flex gap-4">
          <Button asChild>
            <Link href="#contact">{content.contactCta}</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              {content.resumeCta}
            </Link>
          </Button>
        </div>
      </div>
      <div
        data-animate="hero-image"
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#3b82f6]/20"
      >
        <Image
          src="/pfp-3.jpg"
          alt={content.imageAlt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}
