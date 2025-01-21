import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Unqualified Advice Podcast",
  description: "Join us for insightful conversations and engaging stories on Unqualified Advice",
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

