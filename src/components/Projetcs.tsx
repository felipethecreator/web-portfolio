"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap"

export default function Projects() {
  const projects = [
    {
      title: "Panchito",
      description:
        "Sistema full-stack desenvolvido para gerenciar operações de uma hamburgueria de forma prática e eficiente. O sistema foi criado como um projeto freelancer colaborativo, aplicando boas práticas de desenvolvimento, organização de código e integração entre frontend e backend, tornando o gerenciamento do negócio mais ágil e confiável.",
      image: "/projects/panchito.png",
      technologies: ["Go", "React", "MongoDB", "Vercel", "Railway"],
      github: "https://github.com/orgs/Javex-Inc/repositories",
      demo: "https://github.com/orgs/Javex-Inc/repositories",
    },
    {
      title: "Realizando Sonhos App",
      description:
        "Realizando Sonhos é um sistema full-stack open-source desenvolvido voluntariamente para a Associação Realizando Sonhos em Brasília. O projeto, sem fins lucrativos, permite que educadores gerenciem turmas, alunos e presença, contribuindo para o acompanhamento e desenvolvimento de crianças e adolescentes.",
      image: "/projects/realizando-sonhos.png",
      technologies: ["Next.js", "Node.js", "Prisma ORM", "PostgreSQL", "Supabase", "Vercel"],
      github: "https://github.com/guirra-byte/realizando-sonhos-app",
      demo: "https://realizando-sonhos-app.vercel.app/",
    },
    {
      title: "Nexa",
      description:
        "Aplicação full-stack desenvolvida como parte da disciplina Projeto Integrador I, com foco no gerenciamento financeiro pessoal. O sistema permite o controle de despesas e ganhos, geração de gráficos interativos e criação de orçamentos por categorias, oferecendo uma visão clara da saúde financeira do usuário.",
      image: "/projects/nexa.png",
      technologies: ["React", "Go", "Supabase", "Vercel"],
      github: "https://github.com/orgs/Nexa-Money/repositories",
      demo: "https://github.com/orgs/Nexa-Money/repositories",
    },
    {
      title: "Web Portfólio",
      description:
        "Aplicação front-end desenvolvida para apresentar meus projetos, habilidades e experiências de forma profissional e interativa. Construído com Next e TailwindCSS, ele reflete minha identidade como desenvolvedor, reunindo trabalhos práticos, projetos de impacto social e experimentos pessoais em um só lugar.",
      image: "/projects/web-portfolio.png",
      technologies: ["Next.js", "Tailwind CSS", "Vercel"],
      github: "https://github.com/felipethecreator/web-portfolio",
      demo: "https://web-portfolio-one-swart.vercel.app/",
    },
    {
      title: "MovieFlix",
      description:
        "Aplicação web desenvolvida como parte do processo seletivo de estágio front-end da CEVICOM. Inspirada no estilo da Netflix, a plataforma permite buscar filmes e séries, visualizar detalhes completos e navegar pelos resultados de forma totalmente responsiva. Além das funcionalidades principais, inclui dark mode, modal de detalhes e paginação, demonstrando domínio técnico e atenção a boas práticas de código e design.",
      image: "/projects/movieflix.png",
      technologies: ["HTML", "TailwindCSS", "Javascript", "OMDb API"],
      github: "https://github.com/felipethecreator/desafio-catalogo-filmes",
      demo: "https://github.com/felipethecreator/desafio-catalogo-filmes",
    },
    {
      title: "Product API",
      description:
        "Aplicação back-end desenvolvida em Java com Spring Boot, criada para treinar habilidades em construção de APIs REST usando Spring. O sistema implementa um CRUD completo de produtos, permitindo criar, listar, atualizar e excluir registros. O projeto teve como foco o aprendizado prático de conceitos fundamentais do ecossistema Spring, como controllers, DTOs, services, repositories e integração com banco de dados, além de boas práticas para organização de código e arquitetura de aplicações back-end.",
      image: "",
      technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "Vercel AI SDK"],
      github: "https://github.com/felipethecreator/product-api",
      demo: "https://github.com/felipethecreator/product-api",
    },
  ]

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
      <h2 className="text-3xl font-bold mb-8 text-center">Projetos</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} data-animate="project-card" className="overflow-hidden">
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
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-5 w-5" />
                      <span className="sr-only">Live Demo</span>
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
