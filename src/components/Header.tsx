import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="font-bold text-xl">
          <Link href="/">Felipe Rodrigues</Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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