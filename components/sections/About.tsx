'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import OwlLogo from '@/components/ui/OwlLogo'
import GlowBadge from '@/components/ui/GlowBadge'
import { BIO_TEXT, LANGUAGES, SITE_CONFIG } from '@/lib/content'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const prefersReducedMotion = useReducedMotion()

  const bioLines = BIO_TEXT.split('\n\n')

  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4"
      aria-label="About Karan Singh Sisodia"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-2xl md:text-3xl font-bold text-theme-primary mb-12 text-center">
            <span className="text-brand-pink-hot">{'// '}</span>
            About — The Owl&apos;s Philosophy
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left — Owl illustration */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full bg-brand-purple-deep/20 blur-3xl"
                  aria-hidden="true"
                />
                <OwlLogo
                  size={240}
                  animated={!prefersReducedMotion}
                  className="relative z-10"
                />
              </div>
            </motion.div>

            {/* Right — Bio */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 min-w-0 overflow-hidden"
            >
              {bioLines.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-mono text-sm leading-relaxed text-theme-secondary break-words"
                >
                  <span className="text-theme-muted">{'// '}</span>
                  {paragraph}
                </p>
              ))}

              {/* Philosophy quote — wraps and has theme contrast */}
              <div className="mt-6 p-4 rounded-lg border border-brand-yellow-electric/50 bg-brand-yellow-electric/10 min-w-0 overflow-hidden">
                <p className="font-mono text-sm break-words">
                  <span className="text-theme-muted">{'> '}</span>
                  <span className="text-brand-purple-deep dark:text-brand-yellow-electric">
                    console.log(&quot;{SITE_CONFIG.philosophy}&quot;)
                  </span>
                </p>
              </div>

              {/* Language badges — wrap on narrow screens */}
              <div className="flex flex-wrap gap-2 mt-4 min-w-0">
                {LANGUAGES.map((lang) => (
                  <GlowBadge key={lang.name} color="purple">
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </GlowBadge>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
