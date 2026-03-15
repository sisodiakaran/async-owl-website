'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, MessageSquare } from 'lucide-react'
import OwlLogo from '@/components/ui/OwlLogo'
import { BOOT_SEQUENCE_LINES } from '@/lib/content'

export default function HeroTerminal() {
  const prefersReducedMotion = useReducedMotion()
  const [mounted, setMounted] = useState(false)
  const [bootComplete, setBootComplete] = useState(false)
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    if (prefersReducedMotion) {
      setDisplayedLines(BOOT_SEQUENCE_LINES)
      setBootComplete(true)
      return
    }

    if (currentLine >= BOOT_SEQUENCE_LINES.length) {
      setTimeout(() => setBootComplete(true), 400)
      return
    }

    const line = BOOT_SEQUENCE_LINES[currentLine]
    if (currentChar < line.length) {
      const speed = line.includes('████') ? 5 : 25 + Math.random() * 20
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev]
          updated[currentLine] = line.substring(0, currentChar + 1)
          return updated
        })
        setCurrentChar((c) => c + 1)
      }, speed)
      return () => clearTimeout(timer)
    } else {
      const timer = setTimeout(() => {
        setCurrentLine((l) => l + 1)
        setCurrentChar(0)
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [mounted, currentLine, currentChar, prefersReducedMotion])

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = useCallback(
    (id: string) => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
    },
    [prefersReducedMotion]
  )

  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 md:pt-24"
      aria-label="Hero section"
    >
      {/* Scanline overlay */}
      <div className="scanline-overlay" aria-hidden="true" />

      {mounted ? (
      <div className="relative z-20 w-full max-w-3xl">
        {/* Terminal boot sequence */}
        <div
          ref={terminalRef}
          className="rounded-lg border border-theme-subtle bg-theme-surface
            shadow-[0_0_60px_rgba(84,19,136,0.2)] p-6 md:p-8"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-brand-pink-hot/80" />
            <div className="w-3 h-3 rounded-full bg-brand-yellow-electric/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 text-xs font-mono text-theme-secondary">
              asyncowl@boot
            </span>
          </div>

          <div className="space-y-1 font-mono text-sm md:text-base">
            {displayedLines.map((line, i) => (
              <div key={i} className="text-theme-primary">
                <span
                  className={
                    line.includes('Ready')
                      ? 'text-brand-yellow-electric'
                      : line.includes('████')
                        ? 'text-brand-pink-hot'
                        : ''
                  }
                >
                  {line}
                </span>
              </div>
            ))}
            {!bootComplete && (
              <span
                className="inline-block w-2.5 h-5 bg-brand-yellow-electric align-text-bottom"
                style={{ opacity: showCursor ? 1 : 0 }}
                aria-hidden="true"
              />
            )}
          </div>
        </div>

        {/* Post-boot reveal */}
        {bootComplete && (
          <motion.div
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mt-8 text-center"
          >
            <div className="flex justify-center mb-4">
              <OwlLogo size={72} animated={!prefersReducedMotion} alt="AsyncOwl — Karan Singh Sisodia's developer avatar" />
            </div>

            <h1 className="font-mono text-3xl md:text-5xl font-bold text-theme-primary mb-2">
              Karan Singh Sisodia
            </h1>
            <p className="font-sans text-lg md:text-xl text-theme-secondary mb-1">
              @AsyncOwl · Technical Lead · AI & Software Engineering
            </p>
            <p className="font-mono text-sm text-brand-pink-hot mb-6">
              16+ years bridging software and hardware. Building intelligent systems, leading teams, and shipping IoT solutions from Chandigarh, India.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm
                  bg-brand-purple-deep text-brand-cream-light
                  border border-brand-purple-deep hover:border-brand-yellow-electric
                  hover:shadow-[0_0_20px_rgba(255,212,0,0.3)]
                  transition-all duration-300"
                aria-label="Explore work section"
              >
                <ArrowDown size={16} />
                {'>'} Explore Work
              </button>
              <button
                onClick={() => scrollToSection('ask-ai')}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-mono text-sm
                  bg-brand-pink-hot/10 text-brand-pink-hot
                  border border-brand-pink-hot/50 hover:border-brand-pink-hot
                  hover:shadow-[0_0_20px_rgba(217,3,104,0.3)]
                  transition-all duration-300"
                aria-label="Talk to AsyncOwl AI"
              >
                <MessageSquare size={16} />
                {'>'} Talk to AsyncOwl AI
              </button>
            </div>
          </motion.div>
        )}
      </div>
      ) : (
        <div className="relative z-20 w-full max-w-3xl" />
      )}
    </header>
  )
}
