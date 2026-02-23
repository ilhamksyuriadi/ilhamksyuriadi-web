'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GithubIcon from '@/assets/icons/github.svg'
import LinkedinIcon from '@/assets/icons/linkedin.svg'
import MediumIcon from '@/assets/icons/medium.svg'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'ABOUT', href: '/about' },
    { name: 'PROJECT', href: '/projects' },
    { name: 'ACHIEVEMENT', href: '/achievements' },
    { name: 'BLOG', href: '/blog' },
  ]

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com', icon: GithubIcon },
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
    { name: 'Medium', href: 'https://medium.com', icon: MediumIcon },
  ]

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white ${isScrolled && 'backdrop-blur-md shadow-sm'}`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Desktop Navigation - Left aligned */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src="/images/avatar.jpg"
                    alt="Ilham Kurnia Syuriadi"
                    fill
                    className="object-cover"
                    sizes="40px"
                    priority
                  />
                </div>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-bold uppercase"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Avatar - only visible on mobile */}
            <Link href="/" className="md:hidden">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image
                  src="/images/avatar.jpg"
                  alt="Ilham Kurnia Syuriadi"
                  fill
                  className="object-cover"
                  sizes="32px"
                  priority
                />
              </div>
            </Link>

            {/* Social Media Icons - Right aligned */}
            <div className="hidden md:flex md:space-x-6 items-center">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon width={20} height={20} />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="text-2xl">☰</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-navy z-50 md:hidden flex flex-col px-6 pt-4 pb-8 rounded-l-xl transition-transform duration-200 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Close Button */}
        <button
          className="self-end text-white text-2xl mb-20"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Nav Items */}
        <nav className="flex flex-col space-y-6 flex-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-light text-lg font-semibold uppercase border-b border-gray-dark pb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons at bottom */}
        <div>
          <p className="text-gray-light text-sm mb-4">Follow me on:</p>
          <div className="flex items-center space-x-5">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-white"
              >
                <social.icon width={22} height={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}