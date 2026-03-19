import type { PortfolioContent } from "@/lib/portfolio-content"

type AboutProps = {
  content: PortfolioContent["about"]
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">{content.title}</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center sm:grid-cols-1">
        <div className="space-y-4">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-lg">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b82f6]/10 text-[#3b82f6]">
              <span className="font-bold">{content.education.badge}</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">{content.education.title}</h3>
              <p className="text-muted-foreground">{content.education.description}</p>
            </div>
          </div>
            <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b82f6]/10 text-[#3b82f6]">
              <span className="font-bold">{content.softSkills.badge}</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">{content.softSkills.title}</h3>
              <p className="text-muted-foreground">{content.softSkills.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
