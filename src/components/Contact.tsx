"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"
import emailjs from "@emailjs/browser"
import { useEffect, useRef, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap"

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section || prefersReducedMotion()) return;

        const gsap = ensureGsap();
        const ctx = gsap.context(() => {
            const q = gsap.utils.selector(section);
            gsap.from(q("[data-animate='contact-block']"), {
                y: 16,
                opacity: 0,
                duration: 0.55,
                stagger: 0.12,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    once: true,
                },
            });
        }, section);

        return () => ctx.revert();
    }, []);

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                "service_4r88xfr",
                "template_ym8o97g",
                form.current!,
                "1SVlhqfXy27mkhO59"
            );
            toast("Email enviado com sucesso!");
            form.current?.reset();
        } catch {
            toast("Ocorreu um erro ao enviar o email.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section ref={sectionRef} id="contact" className="scroll-mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div data-animate="contact-block" className="space-y-6">
                    <p className="text-lg">
                        Mesmo trabalhando atualmente, estou sempre curioso para conhecer novos projetos e desafios. Se você busca um desenvolvedor que possa agregar valor ao seu time ou projeto, vamos conversar!
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b82f6]/10 text-[#3b82f6]">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Email</h3>
                                <p className="text-[#94a3b8]">
                                    <Link href="mailto:felipinhodev@gmail.com" className="hover:text-[#3b82f6]">
                                        felipinhodev@gmail.com
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b82f6]/10 text-[#3b82f6]">
                                <Linkedin className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">LinkedIn</h3>
                                <p className="text-[#94a3b8]">
                                    <Link href="https://www.linkedin.com/in/felipe-rodrigues-queiroz-564377171/" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b82f6]">
                                        https://www.linkedin.com/in/felipe-rodrigues-queiroz-564377171/
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b82f6]/10 text-[#3b82f6]">
                                <Github className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">GitHub</h3>
                                <p className="text-[#94a3b8]">
                                    <Link href="https://github.com/felipethecreator" target="_blank" rel="noopener noreferrer" className="hover:text-[#3b82f6]">
                                        https://github.com/felipethecreator
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Card data-animate="contact-block">
                    <CardContent className="p-6">
                        <form ref={form} onSubmit={sendEmail} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Nome
                                    </label>
                                    <input name="name" id="name" type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" placeholder="De que posso te chamar?" required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <input name="email" id="email" type="email" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" placeholder="Onde posso te responder?" required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">
                                    Assunto
                                </label>
                                <input name="subject" id="subject" type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" placeholder="Qual é o tema da mensagem?" required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Mensagem
                                </label>
                                <textarea name="message" id="message" className="w-full p-2 border rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" placeholder="Compartilhe comigo o que deseja" required></textarea>
                            </div>
                            <Button type="submit" className="w-full border-2 bg-[#3b82f6] text-black cursor-pointer">
                                {loading ? "Enviando..." : "Enviar Email"}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
            <ToastContainer theme="dark"/>
        </section>
    )
}
