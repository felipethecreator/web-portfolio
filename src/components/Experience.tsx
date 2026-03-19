"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap"
import type { PortfolioContent } from "@/lib/portfolio-content"

type ExperienceProps = {
  content: PortfolioContent["experience"]
}

export default function Experience({ content }: ExperienceProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section || prefersReducedMotion()) return

    const gsap = ensureGsap()
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(section)
      gsap.from(q("[data-animate='experience-card']"), {
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
    <section ref={sectionRef} id="experience" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">{content.title}</h2>
      <div className="space-y-6">
        {content.items.map((experience, index) => (
          <Card key={index} data-animate="experience-card" className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#f8fafc] mb-1">{experience.title}</h3>
                  <p className="text-lg font-semibold text-[#3b82f6] mb-2">{experience.company}</p>
                  <p className="text-md font-semibold text-[#94a3b8] mb-2">{experience.type}</p>
                </div>
                <div className="flex flex-col md:items-end gap-2 text-sm text-[#94a3b8]">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 mb-4">
                {experience.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-muted-foreground flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
