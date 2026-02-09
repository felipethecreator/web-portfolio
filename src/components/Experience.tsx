"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap"

export default function Experience() {
  const experiences = [
    {
      title: "Desenvolvedor Full-Stack",
      company: "Vicax - Soluções Tecnológicas",
      type: "Desenvolvedor Júnior - PJ",
      location: "Remoto, Brasília - DF",
      period: "Nov 2025 - O momento",
      description: [
        "Desenvolvimento de funcionalidades full-stack para uma plataforma de acompanhamento e gestão de doações, com foco em dashboards e visualização de dados.",
        "Implementação de filtros e melhorias de usabilidade para tornar a navegação e a análise de informações mais rápidas e intuitivas.",
        "Utilização de Svelte no frontend e NestJS no backend, integrando as camadas da aplicação e garantindo consistência nos dados exibidos.",
        "Criação de otimizações de queries e índices no PostgreSQL para reduzir tempo de resposta e melhorar o desempenho das consultas usadas nos dashboards.",
        "Utilização de metodologias ágeis (Scrum/Kanban) para organização das tarefas.",
      ],
      technologies: ["Svelte", "Typescript", "Nest.js", "Prisma ORM", "PostgreSQL"],
    },
    {
      title: "Desenvolvedor Full-Stack",
      company: "LightBase - Serviços e Consultoria em Software Público",
      type: "Estágio",
      location: "Remoto, Brasília - DF",
      period: "Ago 2025 - O momento",
      description: [
        "Desenvolvendo soluções full-stack utilizando Spring, Java e Angular",
        "Construção de interfaces responsivas em Angular, seguindo boas práticas de UX/UI.",
        "Utilização de metodologias ágeis (Scrum/Kanban) para organização das tarefas.",
        "Apoio a migração de sistemas legados para arquiteturas mais modernas.",
      ],
      technologies: ["Angular", "Typescript", "Spring", "Java", "PostgreSQL"],
    },
    {
      title: "Desenvolvedor Front-End",
      company: "IGUT Clínicas",
      type: "Estágio",
      location: "Híbrido, Brasília - DF",
      period: "Jun 2025 - Ago 2025",
      description: [
        "Desenvolvimento e otimização da interface de usuário para um aplicativo mobile destinado a médicos, com foco na entrega de uma experiência fluida e intuitiva.",
        "Implementação de funcionalidades interativas e dinâmicas utilizando JavaScript, abrangendo desde a validação de formulários até a conexão eficiente com APIs RESTful para gerenciamento e persistência de dados.",
        "Consumo de APIs seguras, implementando a autenticação via JWT (JSON Web Tokens) e utilizando o esquema Bearer Authentication.",
        "Implementação de um sistema de roteamento dinâmico com NavigoJS, otimizando a navegação interna e a organização do fluxo de trabalho do aplicativo.",
        "Gerenciamento e exibição de dados dinâmicos através da manipulação de templates com MustacheJS, possibilitando a criação de interfaces flexíveis e reativas.",
        "Aplicação de HTML para estruturação semântica, Tailwind CSS para estilização responsiva e ágil, e Capacitor para a integração com funcionalidades nativas do dispositivo móvel.",
        "Experiência fundamental para o aprimoramento de habilidades técnicas, resolução de desafios complexos em tempo real e colaboração eficaz em um ambiente de equipe, solidificando o conhecimento em desenvolvimento front-end."
      ],
      technologies: ["Javascript", "HTML", "TailwindCSS", "Capacitor", "MustacheJS", "Navigo"],
    },
    {
      title: "Desenvolvedor Full-Stack",
      company: "Instituição Realizando Sonhos",
      type: "Voluntário",
      location: "Remoto, Brasília - DF",
      period: "Abr 2025 - Jun 2025",
      description: [
        "Desenvolvimento de um sistema com Next.js, Node.js, TypeScript, TailwindCSS e shadcn/ui para gestão educacional para mais de 200 alunos usando Supabase como banco de dados principal utilizando Prisma ORM para modelagem e consulta dos dados.",
        "Implementei CRUDs completos, com interfaces reativas e experiência fluida para o usuário.",
        "Boas práticas com React Hooks e organização de contexts e utils reutilizáveis.",
        "Integração com APIs REST, incluindo operações de autenticação, atualização e exclusão de dados persistidos via Prisma e PostgreSQL.",
        "Autenticação e autorização OAuth2 do Google.",
        "Gerenciamento de conflitos e versionamento com Git e GitHub, incluindo resolução de merges complexos e organização de commits semânticos."
      ],
      technologies: ["Next.js", "Typescript", "Node.js", "TailwindCSS", "PostgreSQL", "Prisma ORM", "Supabase"],
    },
    {
      title: "Monitor de Desenvolvimento Front-End (React)",
      company: "Instituição Realizando Sonhos",
      type: "Voluntário",
      location: "Presencial, Brasília - DF",
      period: "Jul 2024 - Dez 2024",
      description: [
        "Atuei como Instrutor de Desenvolvimento Web na monitoria de TI do UniCEUB, onde lecionei aulas de React para grupos no período vespertino e noturno (das 17h às 19h). Minhas atribuições envolveram planejar e ministrar o curso, oferecer suporte técnico e acadêmico, além de guiar os alunos em projetos práticos.",
        "Essa oportunidade me permitiu aprimorar minhas habilidades em React, ensino e comunicação, ao mesmo tempo que contribuo para o desenvolvimento de novos talentos na área de tecnologia.",
      ],
      technologies: ["React", "Javascript", "HTML", "CSS"],
    },
  ]

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
      <h2 className="text-3xl font-bold mb-8 text-center">Experiência</h2>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
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
