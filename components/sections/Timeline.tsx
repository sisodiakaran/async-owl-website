'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import CommitCard from '@/components/ui/CommitCard'
import { CAREER_TIMELINE } from '@/lib/content'

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="timeline"
      className="py-20 md:py-32 px-4"
      aria-label="Career timeline"
    >
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-2xl md:text-3xl font-bold text-theme-primary mb-4 text-center"
        >
          Career Timeline
        </motion.h2>
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-sm text-theme-secondary text-center mb-12"
        >
          <span className="text-brand-yellow-electric">$</span> git log --oneline · 16+ years of commits to the craft
        </motion.p>

        {/* Git-style branch line */}
        <div className="relative w-full">
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-theme-subtle dark:bg-brand-cream-light/30 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-6">
            {CAREER_TIMELINE.map((role, index) => (
              <motion.div
                key={role.hash}
                initial={
                  prefersReducedMotion
                    ? {}
                    : {
                        opacity: 0,
                        x: index % 2 === 0 ? -60 : 60,
                      }
                }
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="relative w-full"
              >
                {/* Branch node — centered on the timeline line (50% of container) */}
                <div
                  className="absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-brand-purple-deep dark:border-brand-cream-light/60 bg-theme-surface dark:bg-brand-navy-dark z-10"
                  aria-hidden="true"
                />
                {/* Card content — left or right half */}
                <div
                  className={`w-full md:w-[calc(50%-1.5rem)] pl-12 md:pl-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-6' : 'md:ml-auto md:pl-6'
                  }`}
                >
                  <CommitCard role={role} index={index} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
