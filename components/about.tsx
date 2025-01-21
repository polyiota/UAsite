import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-green-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-900">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Podcast Hosts"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg mb-4">
              Unqualified Advice is hosted by two passionate individuals who love to explore fascinating topics and
              share insightful conversations with our listeners.
            </p>
            <p className="text-lg mb-4">
              Imagine us sitting on a dark green velvety couch, surrounded by leather-bound books, as we dive deep into
              thought-provoking discussions and entertaining stories.
            </p>
            <p className="text-lg">Join us on this journey of discovery and enlightenment with Unqualified Advice!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

