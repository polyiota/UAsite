'use client'

import { TwitterIcon, GithubIcon, Music2Icon, YoutubeIcon } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const socialLinks = [
    {
      name: 'Twitter',
      href: 'https://twitter.com/unqualifiedadvice',
      icon: TwitterIcon,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/unqualifiedadvice',
      icon: GithubIcon,
    },
    {
      name: 'Spotify',
      href: 'https://open.spotify.com/show/unqualifiedadvice',
      icon: Music2Icon,
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@unqualifiedadvice',
      icon: YoutubeIcon,
    },
  ]

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:justify-between md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with Next.js and Tailwind CSS.
          </p>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
                <span className="sr-only">{link.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
