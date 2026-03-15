'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import OwlLogo from '@/components/ui/OwlLogo'
import ThemeToggle from '@/components/ui/ThemeToggle'
import { NAV_LINKS } from '@/lib/content'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )

    NAV_LINKS.forEach(({ href }) => {
      const id = href.replace('#', '')
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleNavClick = useCallback(
    (href: string) => {
      setMobileOpen(false)
      const el = document.querySelector(href)
      if (el) {
        el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
      }
    },
    [prefersReducedMotion]
  )

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled ? 'bg-theme-surface backdrop-blur-md shadow-lg shadow-brand-purple-deep/10' : 'bg-transparent'}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            className="flex items-center gap-2 group"
            aria-label="AsyncOwl — scroll to top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
            }}
          >
            <OwlLogo size={32} animated={false} />
            <span className="font-mono text-lg font-bold text-theme-primary group-hover:text-brand-yellow-electric transition-colors">
              AsyncOwl
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(href)
                }}
                className={`relative px-3 py-2 font-mono text-sm transition-colors duration-200
                  ${activeSection === href
                    ? 'text-brand-pink-hot'
                    : 'text-theme-secondary hover:text-theme-primary'
                  }`}
                aria-current={activeSection === href ? 'true' : undefined}
              >
                {label}
                {activeSection === href && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-pink-hot rounded-full" />
                )}
              </a>
            ))}
            <div className="ml-3">
              <ThemeToggle />
            </div>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-theme-primary"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-theme-surface backdrop-blur-md border-t border-theme-subtle">
          <div className="px-4 py-3 space-y-1">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(href)
                }}
                className={`block px-3 py-2 rounded-md font-mono text-sm transition-colors
                  ${activeSection === href
                    ? 'text-brand-pink-hot bg-brand-purple-deep/20'
                    : 'text-theme-secondary hover:text-theme-primary hover:bg-brand-purple-deep/10'
                  }`}
              >
                {'> '}{label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
