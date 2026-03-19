"use client"

import { useEffect, useState } from "react"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Experience from "@/components/Experience"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projetcs"
import Skills from "@/components/Skills"
import {
  DEFAULT_LANGUAGE,
  getNextLanguage,
  portfolioContent,
  type Language,
} from "@/lib/portfolio-content"

export default function Home() {
  const [language, setLanguage] = useState<Language>(DEFAULT_LANGUAGE)

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const content = portfolioContent[language]

  return (
    <div className="min-h-screen bg-background">
      <Header
        language={language}
        name={content.header.name}
        navigation={content.header.navigation}
        languageToggleLabel={content.header.languageToggleLabel}
        socialLabels={content.header.socialLabels}
        onToggleLanguage={() =>
          setLanguage((currentLanguage) => getNextLanguage(currentLanguage))
        }
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <Hero content={content.hero} />
        <About content={content.about} />
        <Skills content={content.skills} />
        <Projects content={content.projects} />
        <Experience content={content.experience} />
        <Contact content={content.contact} />
      </main>
    </div>
  )
}
