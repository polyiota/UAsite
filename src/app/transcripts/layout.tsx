'use client'

import React from 'react'
import { type Metadata } from "next"

interface TranscriptsLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Transcripts | Unqualified Advice",
  description: "Browse all episode transcripts from the Unqualified Advice podcast",
}

export default function TranscriptsLayout({ children }: TranscriptsLayoutProps) {
  return (
    <section className="min-h-screen">
      {children}
    </section>
  )
} 