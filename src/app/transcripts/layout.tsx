'use client'

import React from 'react'

interface TranscriptsLayoutProps {
  children: React.ReactNode
}

export default function TranscriptsLayout({ children }: TranscriptsLayoutProps) {
  return (
    <section className="min-h-screen">
      {children}
    </section>
  )
} 