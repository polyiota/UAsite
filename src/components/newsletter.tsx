'use client'

import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
// ... rest of the file 

export function Newsletter() {
  const [email, setEmail] = React.useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Add newsletter signup logic here
    console.log('Newsletter signup:', email)
  }

  return (
    <section className="bg-[#418aa0] py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-white/90 mb-8">
            Subscribe to our newsletter for the latest episodes and behind-the-scenes content.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 text-white placeholder:text-white/70 border-white/20"
              required
            />
            <Button 
              type="submit"
              className="bg-white text-[#418aa0] hover:bg-white/90"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
} 