import { Header } from '@/components/Header'
import Hero from '@/components/Hero'

export default function MainPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="container py-12 space-y-24">
                <Hero />
            </main>
        </div>
    )
}