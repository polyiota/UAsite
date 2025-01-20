'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Episode {
  id: string
  title: string
  date: string
  duration: string
  fileSize: string
  description: string
  image: string
}

const episodes: Episode[] = [
  {
    id: '1',
    title: 'The Art of Giving Bad Advice',
    date: 'January 20, 2025',
    duration: '00:54:09',
    fileSize: '49.59 MB',
    description: 'In this episode, we explore the hilarious consequences of following questionably sourced advice...',
    image: '/episode1.jpg'
  },
  // Add more episodes...
]

export default function EpisodesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Latest Episodes</h1>
      
      <div className="grid gap-8">
        {episodes.map((episode) => (
          <article 
            key={episode.id}
            className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-md p-6"
          >
            <Image
              src={episode.image}
              alt={episode.title}
              width={200}
              height={200}
              className="rounded-lg"
            />
            <div className="flex-1">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                <time>{episode.date}</time>
                <span>{episode.duration}</span>
                <span>{episode.fileSize}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3">
                <Link href={`/episodes/${episode.id}`} className="hover:text-purple-600">
                  {episode.title}
                </Link>
              </h2>
              <p className="text-gray-600">{episode.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
} 