'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const roles = [
  { text: 'Software Developer', emoji: '💻', color: 'text-navy' },
  { text: 'Thinker', emoji: '🧠', color: 'text-red' },
  { text: 'Dreamer', emoji: '📘', color: 'text-blue' },
  { text: 'Explorer', emoji: '🔍', color: 'text-green' },
]

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const interval = setInterval(() => {
      setIsVisible(false)

      timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length)
        setIsVisible(true)
      }, 500)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  const current = roles[currentIndex]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-16">

      {/* Greeting */}
      <p className="text-sm md:text-xl font-bold text-gray-dark mb-2">
        Hello. I am <span className="text-black">Ilham</span>
      </p>

      {/* Headline */}
      <h1 className="text-xl md:text-5xl lg:text-6xl text-black leading-tight mb-4">
        I am a Fulltime{' '}
        <br className="block xl:hidden" />
        <span
          className={`inline-flex items-center gap-2 transition-all duration-500 ease-in-out ${current.color} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
            }`}
        >
          <span className="italic font-bold">{current.text}</span> {current.emoji}
        </span>
        <br />
        Based in Indonesia
      </h1>

      {/* Description */}
      <p className="text-sm md:text-base text-gray-dark font-bold max-w-sm md:max-w-md leading-relaxed mb-6">
        Interested in technology, especially in Software Engineering.
        Love to solve problems & collaborate with the team to deliver
        high-performance product.
      </p>

      {/* Currently working badge */}
      <div className="flex items-center gap-2">
        <Image
          src="/images/company-logo.png"
          alt="CSG International"
          width={40}
          height={40}
          className="object-contain"
          priority
        />
        <span className="text-sm text-black">
          Currently working at <span className="font-bold">CSG International</span>
        </span>
      </div>

    </section>
  )
}