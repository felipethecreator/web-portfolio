import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-[#0b0f1a]/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="font-bold text-xl">
          <Link href="/">Felipe Rodrigues</Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
            Sobre
          </Link>
          <Link href="#skills" className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
            Projetos
          </Link>
          <Link href="#contact" className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors">
            Contato
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="https://github.com/felipethecreator" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://www.linkedin.com/in/felipe-rodrigues-queiroz-564377171/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}