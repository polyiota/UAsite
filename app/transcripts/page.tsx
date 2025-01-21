"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for transcripts
const transcripts = [
  { id: 1, title: "Episode 1: Getting Started", date: "2025-01-01" },
  { id: 2, title: "Episode 2: The Art of Giving Bad Advice", date: "2025-01-08" },
  { id: 3, title: "Episode 3: When Advice Goes Wrong", date: "2025-01-15" },
  { id: 4, title: "Episode 4: Unqualified Success Stories", date: "2025-01-22" },
  { id: 5, title: "Episode 5: The Do's and Don'ts of Not Knowing", date: "2025-01-29" },
]

export default function Transcripts() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("desc")

  const filteredAndSortedTranscripts = transcripts
    .filter((transcript) => transcript.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      } else {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
    })

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-green-900">Show Transcripts</h1>

        <div className="mb-8">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Unqualified Advice Podcast Cover"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0 md:space-x-4">
          <Input
            type="text"
            placeholder="Search transcripts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-64"
          />
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Sort by date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">Newest First</SelectItem>
              <SelectItem value="asc">Oldest First</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <ul className="space-y-4">
          {filteredAndSortedTranscripts.map((transcript) => (
            <li key={transcript.id} className="border p-4 rounded-lg hover:bg-green-50 transition-colors">
              <Link href={`/transcripts/${transcript.id}`} className="block">
                <h2 className="text-xl font-semibold text-green-800">{transcript.title}</h2>
                <p className="text-gray-600">{new Date(transcript.date).toLocaleDateString()}</p>
              </Link>
            </li>
          ))}
        </ul>

        {filteredAndSortedTranscripts.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No transcripts found.</p>
        )}
      </main>
      <Footer />
    </div>
  )
}

