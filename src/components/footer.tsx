'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Twitter, 
  Instagram, 
  Youtube as YoutubeIcon,
  Music as SpotifyIcon,
  Rss,
  Mail,
  Apple as AppleIcon
} from 'lucide-react'

export function Footer() {
  const podcastLinks = [
    { name: 'Apple Podcasts', icon: AppleIcon, href: '#' },
    { name: 'Spotify', icon: SpotifyIcon, href: '#' },
    { name: 'RSS Feed', icon: Rss, href: '#' },
  ]

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: YoutubeIcon, href: '#' },
  ]

  const siteLinks = [
    { name: 'About', href: '/about' },
    { name: 'Episodes', href: '/episodes' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ]

  return (
    <footer className="bg-[#f1b1a6] border-t border-[#418aa0]/10">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/logo-blue.png" 
                alt="Unqualified Advice Logo" 
                width={180}
                height={29}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-[#418aa0] mb-6 max-w-md">
              Join us for insightful conversations and engaging stories that challenge conventional wisdom.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center text-[#418aa0] hover:text-[#80b1c0] transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              <span>Get in touch</span>
            </Link>
          </div>

          {/* Listen */}
          <div>
            <h3 className="font-semibold text-[#418aa0] mb-4">Listen On</h3>
            <ul className="space-y-3">
              {podcastLinks.map(({ name, icon: Icon, href }) => (
                <li key={name}>
                  <a 
                    href={href}
                    className="flex items-center text-[#418aa0] hover:text-[#80b1c0] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    <span>{name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-[#418aa0] mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {siteLinks.map(({ name, href }) => (
                <li key={name}>
                  <Link 
                    href={href}
                    className="text-[#418aa0] hover:text-[#80b1c0] transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#418aa0]/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#418aa0] text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Unqualified Advice. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {socialLinks.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                className="text-[#418aa0] hover:text-[#80b1c0] transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 