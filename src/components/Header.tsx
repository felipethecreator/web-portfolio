"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  LANGUAGE_FLAGS,
  type Language,
  type PortfolioContent,
} from "@/lib/portfolio-content"

type HeaderProps = {
  language: Language
  name: string
  navigation: PortfolioContent["header"]["navigation"]
  languageToggleLabel: string
  socialLabels: PortfolioContent["header"]["socialLabels"]
  onToggleLanguage: () => void
}

export default function Header({
  language,
  name,
  navigation,
  languageToggleLabel,
  socialLabels,
  onToggleLanguage,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-[#0b0f1a]/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="font-bold text-xl">
          <Link href="/">{name}</Link>
        </div>
        <nav className="hidden md:flex gap-6">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#94a3b8] hover:text-[#f8fafc] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            size="icon"
            type="button"
            onClick={onToggleLanguage}
            aria-label={languageToggleLabel}
            title={languageToggleLabel}
            className="text-xl"
          >
            <span aria-hidden="true">{LANGUAGE_FLAGS[language]}</span>
          </Button>
          <Link
            href="https://github.com/felipethecreator"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">{socialLabels.github}</span>
            </Button>
          </Link>
          <Link
            href="https://www.linkedin.com/in/felipe-rodrigues-queiroz-564377171/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">{socialLabels.linkedin}</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
