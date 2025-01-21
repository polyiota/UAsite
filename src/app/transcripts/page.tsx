import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Episode Transcripts | Unqualified Advice",
  description: "Browse and search through all our episode transcripts",
}

export default function TranscriptsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Episode Transcripts</h1>
      <div className="grid gap-6">
        {/* Episode list will go here */}
        <p className="text-gray-600">Coming soon: Browse through all our episode transcripts.</p>
      </div>
    </div>
  )
}
