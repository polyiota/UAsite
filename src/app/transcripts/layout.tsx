import { type Metadata } from "next"

export const metadata: Metadata = {
  title: "Transcripts | Unqualified Advice",
  description: "Browse all episode transcripts from the Unqualified Advice podcast",
}

export default function TranscriptsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      {children}
    </div>
  )
} 