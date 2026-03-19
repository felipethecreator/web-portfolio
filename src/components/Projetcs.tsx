"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap"
import type { PortfolioContent } from "@/lib/portfolio-content"

type ProjectsProps = {
  content: PortfolioContent["projects"]
}

export default function Projects({ content }: ProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || prefersReducedMotion()) return

    const gsap = ensureGsap()
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section)
      gsap.from(q("[data-animate='project-card']"), {
        y: 18,
        opacity: 0,
        duration: 0.55,
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
    <section ref={sectionRef} id="projects" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">{content.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {content.items.map((project, index) => (
          <Card key={`${project.title}-${index}`} data-animate="project-card" className="overflow-hidden">
            <div className="relative h-64">
              <a href={project.image || "/projects/placeholder.png"} target="_blank" rel="noopener noreferrer">
                <Image src={project.image || "/projects/placeholder.png"} alt={project.title} fill className="object-contain" priority />
              </a>
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">{content.githubLabel}</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">{content.liveDemoLabel}</span>
                    </Link>
                  </Button>
                </div>
              </div>
              <p className="text-[#94a3b8] mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex}>{tech}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
