import { Metadata } from 'next'
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Newsletter } from "@/components/newsletter"

export const metadata: Metadata = {
  title: "Unqualified Advice Podcast",
  description: "Join us for insightful conversations and engaging stories on Unqualified Advice",
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Newsletter />
    </>
  )
}
