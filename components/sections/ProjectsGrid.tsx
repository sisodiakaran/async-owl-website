'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { ExternalLink, Star, GitFork } from 'lucide-react'
import { FEATURED_PROJECTS } from '@/lib/content'
import type { GitHubRepo } from '@/types'

interface ProjectsGridProps {
  repos: GitHubRepo[]
}

export default function ProjectsGrid({ repos }: ProjectsGridProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  const getStarCount = (repoName: string): number => {
    const match = repos.find(
      (r) =>
        r.name.toLowerCase() === repoName.toLowerCase() ||
        r.full_name.toLowerCase().includes(repoName.toLowerCase())
    )
    return match?.stargazers_count ?? 0
  }

  return (
    <section
      id="projects"
      className="py-20 md:py-32 px-4"
      aria-label="Featured projects"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-2xl md:text-3xl font-bold text-theme-primary mb-4 text-center"
        >
          <span className="text-brand-yellow-electric">~/</span>repos
        </motion.h2>
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-sm text-theme-secondary text-center mb-12"
        >
          Open source contributions & featured work
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6">
          {FEATURED_PROJECTS.map((project, index) => {
            const stars = getStarCount(project.name)
            return (
              <motion.a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group block rounded-lg border border-theme-subtle
                  bg-theme-surface p-5 md:p-6
                  hover:border-brand-purple-deep/50
                  hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(84,19,136,0.2)]
                  transition-all duration-300"
                aria-label={`View ${project.name} on GitHub`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <GitFork size={16} className="text-theme-muted" />
                    <h3 className="font-mono text-sm font-bold text-theme-primary group-hover:text-brand-yellow-electric transition-colors">
                      {project.name}
                    </h3>
                  </div>
                  <ExternalLink
                    size={16}
                    className="text-theme-muted group-hover:text-brand-pink-hot transition-colors"
                  />
                </div>

                <p className="font-sans text-sm text-theme-secondary mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: project.languageColor }}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs text-theme-muted">
                      {project.language}
                    </span>
                  </div>
                  {stars > 0 && (
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-brand-yellow-electric" />
                      <span className="font-mono text-xs text-theme-muted">
                        {stars}
                      </span>
                    </div>
                  )}
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
