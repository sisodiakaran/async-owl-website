'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import {
  Brain,
  Cpu,
  Globe,
  GitBranch,
  Smartphone,
  Users,
} from 'lucide-react'
import { SKILL_CATEGORIES } from '@/lib/content'
import type { Skill } from '@/types'

const iconMap: Record<string, React.ElementType> = {
  Brain,
  Cpu,
  Globe,
  GitBranch,
  Smartphone,
  Users,
}

export default function SkillsMatrix() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null)

  return (
    <section
      id="skills"
      className="py-20 md:py-32 px-4"
      aria-label="Technical skills"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-2xl md:text-3xl font-bold text-theme-primary mb-4 text-center"
        >
          <span className="text-brand-pink-hot">{'> '}</span>
          stack --matrix
        </motion.h2>
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-sm text-theme-secondary text-center mb-12"
        >
          Hover to explore experience details
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, catIndex) => {
            const IconComponent = iconMap[category.icon] || Brain
            return (
              <motion.div
                key={category.name}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * catIndex }}
                className="rounded-lg border border-theme-subtle bg-theme-surface
                  dark:bg-[#3d3758] dark:border-brand-cream-light/25 dark:shadow-[0_0_0_1px_rgba(241,233,218,0.08)]
                  p-5 hover:border-brand-purple-deep/50 dark:hover:border-brand-cream-light/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <IconComponent size={20} className="text-brand-pink-hot" />
                  <h3 className="font-mono text-sm font-bold text-theme-primary dark:text-brand-cream-light">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.button
                      key={skill.name}
                      initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.1 * catIndex + 0.05 * skillIndex,
                      }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      onFocus={() => setHoveredSkill(skill)}
                      onBlur={() => setHoveredSkill(null)}
                      className="relative px-3 py-1.5 rounded-md text-xs font-mono
                        border border-theme-subtle text-theme-secondary
                        dark:border-brand-cream-light/30 dark:text-brand-cream-light/90
                        bg-theme-surface dark:bg-brand-navy-dark/60
                        hover:border-brand-yellow-electric hover:text-brand-yellow-electric
                        hover:shadow-[0_0_12px_rgba(255,212,0,0.15)]
                        focus:border-brand-yellow-electric/50 focus:text-brand-yellow-electric
                        focus:outline-none focus:ring-1 focus:ring-brand-yellow-electric/30
                        transition-all duration-200"
                      aria-label={`${skill.name}: ${skill.yearsOfExperience} years experience`}
                    >
                      {skill.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Hover tooltip */}
        {hoveredSkill && (
          <div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[calc(100vw-2rem)]
              px-4 py-3 rounded-lg border border-brand-yellow-electric/50
              dark:border-brand-cream-light/30
              bg-theme-surface dark:bg-[#3d3758] backdrop-blur-sm
              shadow-[0_0_20px_rgba(255,212,0,0.15)]
              font-mono text-xs text-theme-primary dark:text-brand-cream-light
              pointer-events-none"
            role="tooltip"
          >
            <span className="text-brand-yellow-electric font-bold">{hoveredSkill.name}</span>
            <span className="text-theme-muted dark:text-brand-cream-light/60 mx-2">|</span>
            <span>{hoveredSkill.yearsOfExperience}+ years</span>
            <span className="text-theme-muted dark:text-brand-cream-light/60 mx-2">|</span>
            <span className="text-theme-secondary dark:text-brand-cream-light/90">
              {hoveredSkill.relatedProjects.join(', ')}
            </span>
          </div>
        )}
      </div>
    </section>
  )
}
