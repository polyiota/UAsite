import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="bg-green-100 py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-green-900">Subscribe to Unqualified Advice Newsletter</h2>
        <p className="mb-8 text-green-800">Stay updated with our latest episodes and behind-the-scenes content!</p>
        <form className="max-w-md mx-auto flex gap-2">
          <Input type="email" placeholder="Enter your email" className="flex-grow" />
          <Button type="submit" className="bg-green-700 text-white hover:bg-green-600">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}

