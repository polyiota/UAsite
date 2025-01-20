'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="bg-[#f1b1a6] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[#418aa0] rotate-12 transform scale-150 translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-12">
            <Image
              src="/logo-blue.png"
              alt="Unqualified Advice Logo"
              width={400}
              height={65}
              className="mx-auto w-auto max-w-[80%]"
              priority
            />
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 text-[#418aa0]">
            A podcast for curious people.
          </h1>
          
          <p className="text-lg md:text-xl mb-6 md:mb-8 text-[#418aa0]/80 max-w-2xl mx-auto px-4">
            Join us for insightful conversations and engaging stories that challenge conventional wisdom and explore the unexpected.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Button 
              variant="default" 
              className="bg-[#418aa0] hover:bg-[#80b1c0] text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full transition-colors w-full sm:w-auto"
            >
              Latest Episodes
            </Button>
            <Button 
              variant="outline"
              className="border-[#418aa0] text-[#418aa0] hover:bg-[#418aa0] hover:text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full transition-colors w-full sm:w-auto"
            >
              Subscribe Now
            </Button>
          </div>

          {/* Featured Platforms */}
          <div className="mt-12 md:mt-16">
            <p className="text-[#418aa0]/60 text-sm mb-4 md:mb-6">LISTEN ON</p>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 px-4">
              {['Spotify', 'Apple Podcasts', 'Google Podcasts'].map((platform) => (
                <span 
                  key={platform}
                  className="text-[#418aa0] font-medium hover:text-[#80b1c0] cursor-pointer transition-colors text-sm md:text-base"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path 
            d="M0 30L60 25C120 20 240 10 360 15C480 20 600 40 720 45C840 50 960 40 1080 35C1200 30 1320 30 1380 30L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V30Z" 
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  )
} 