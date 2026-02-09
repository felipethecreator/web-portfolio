"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap"

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || prefersReducedMotion()) return

    const gsap = ensureGsap()
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section)
      gsap.from(q("[data-animate='skill-card']"), {
        y: 16,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          once: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="skills" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Habilidades e Tecnologias</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <Card data-animate="skill-card">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#3b82f6]/10 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-[#3b82f6]"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">Frontend</h3>
            <p className="text-[#94a3b8] mt-2">Angular, Svelte, React, Next.js, TypeScript, JavaScript, Tailwind CSS, Bootstrap, Sass</p>
          </CardContent>
        </Card>
        <Card data-animate="skill-card">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#3b82f6]/10 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-[#3b82f6]"
              >
                <path d="M18 10h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">Backend</h3>
            <p className="text-[#94a3b8] mt-2">Java, Spring Boot, Maven, Swagger (OpenAPI), Nest.js, Node.js, Express, Prisma ORM, PostgreSQL, MongoDB</p>
          </CardContent>
        </Card>
        <Card data-animate="skill-card">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#3b82f6]/10 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-[#3b82f6]"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">DevOps</h3>
            <p className="text-[#94a3b8] mt-2">Git, Linux, Docker, Google Cloud Platform (GCP), Deploy de aplicações backend/frontend, CI/CD, Vercel</p>
          </CardContent>
        </Card>
        <Card data-animate="skill-card">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#3b82f6]/10 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-[#3b82f6]"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h3 className="font-semibold text-lg">Design</h3>
            <p className="text-[#94a3b8] mt-2">Figma, UI/UX, Design Responsivo</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
