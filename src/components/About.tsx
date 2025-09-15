export default function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Sobre mim</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <p className="text-lg">
            Tenho 20 anos e sou um desenvolvedor apaixonado por desafios e tecnologia, com uma base sólida em desenvolvimento web. Tenho aprendido e criado projetos com Angular, Java, React, Next.js e Node.js, sempre em busca de novas oportunidades como desenvolvedor.
          </p>
          <p className="text-lg">
            Dedico-me à criação de APIs e soluções elegantes e eficientes, sempre adotando as melhores práticas de desenvolvimento.
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b82f6]/10 text-[#3b82f6]">
              <span className="font-bold">BCc</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Educação</h3>
              <p className="text-muted-foreground">Bacharelado em Ciências da Computação - 6º semestre</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b82f6]/10 text-[#3b82f6]">
              <span className="font-bold">PIs</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Projetos de Impacto Social</h3>
              <p className="text-muted-foreground">Aplicação de habilidades de desenvolvimento em projetos voluntários</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
