"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, Github } from "lucide-react"
import emailjs from "@emailjs/browser"
import { useEffect, useRef, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { ensureGsap, prefersReducedMotion } from "@/lib/gsap"
import type { PortfolioContent } from "@/lib/portfolio-content"

type ContactProps = {
    content: PortfolioContent["contact"]
}

export default function Contact({ content }: ContactProps) {
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
            toast(content.form.successToast);
            form.current?.reset();
        } catch {
            toast(content.form.errorToast);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section ref={sectionRef} id="contact" className="scroll-mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">{content.title}</h2>
            <div className="grid md:grid-cols-2 gap-12">
                <div data-animate="contact-block" className="space-y-6">
                    <p className="text-lg">
                        {content.description}
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3b82f6]/10 text-[#3b82f6]">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">{content.emailLabel}</h3>
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
                                <h3 className="font-semibold text-lg">{content.linkedinLabel}</h3>
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
                                <h3 className="font-semibold text-lg">{content.githubLabel}</h3>
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
                                        {content.form.nameLabel}
                                    </label>
                                    <input name="name" id="name" type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" placeholder={content.form.namePlaceholder} required />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        {content.form.emailLabel}
                                    </label>
                                    <input name="email" id="email" type="email" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" placeholder={content.form.emailPlaceholder} required />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">
                                    {content.form.subjectLabel}
                                </label>
                                <input name="subject" id="subject" type="text" className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" placeholder={content.form.subjectPlaceholder} required />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">
                                    {content.form.messageLabel}
                                </label>
                                <textarea name="message" id="message" className="w-full p-2 border rounded-md h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#3b82f6]" placeholder={content.form.messagePlaceholder} required></textarea>
                            </div>
                            <Button type="submit" className="w-full border-2 bg-[#3b82f6] text-black cursor-pointer">
                                {loading ? content.form.submitting : content.form.submit}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
            <ToastContainer theme="dark"/>
        </section>
    )
}
