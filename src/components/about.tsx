'use client'

import * as React from 'react'
import Image from "next/image"
// ... rest of the file 

export function About() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#418aa0] mb-6">
            About the Show
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join us for insightful conversations and engaging stories that challenge conventional wisdom. 
            Each episode brings you unique perspectives and unqualified advice on topics ranging from 
            technology to life decisions.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#418aa0] mb-4">
                What We Cover
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Technology and Innovation</li>
                <li>• Career Development</li>
                <li>• Personal Growth</li>
                <li>• Life's Big Questions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#418aa0] mb-4">
                Why Listen
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Fresh Perspectives</li>
                <li>• Engaging Discussions</li>
                <li>• Real Stories</li>
                <li>• Actionable Insights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 