import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 py-12">
      <div className="space-y-6 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Olá, me chamo Felipe
          <span className="block text-[#3b82f6]">Dev Full Stack</span>
        </h1>
        <p className="text-xl text-[#94a3b8]">
            Eu desenvolvo aplicações web acessíveis e fáceis de usar com tecnologias modernas.
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href="#contact">Entre em contato</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="#projects">Veja meu trabalho</Link>
          </Button>
        </div>
      </div>
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#3b82f6]/20">
        <Image src="/profile-picture.jpg" alt="Felipe Rodrigues" fill className="object-cover" priority />
      </div>
    </section>
  )
}
