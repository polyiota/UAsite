import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="bg-green-800 text-white py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Unqualified Advice</h1>
        <p className="text-xl mb-8">Join us for insightful conversations and engaging stories</p>
        <Button variant="outline" className="bg-white text-green-800 hover:bg-green-100">
          Listen Now
        </Button>
      </div>
    </div>
  )
}

