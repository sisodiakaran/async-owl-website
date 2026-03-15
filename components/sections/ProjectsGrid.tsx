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
          Projects
        </motion.h2>
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-sm text-theme-secondary text-center mb-12"
        >
          <span className="text-brand-yellow-electric">~/</span>repos · Open source contributions & featured work
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6">
          {FEATURED_PROJECTS.map((project, index) => {
            const stars = getStarCount(project.name)
            return (
              <motion.article
                key={project.name}
                itemScope
                itemType="https://schema.org/SoftwareSourceCode"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="group rounded-lg border border-theme-subtle
                  bg-theme-surface dark:bg-[#3d3758] dark:border-brand-cream-light/25 dark:shadow-[0_0_0_1px_rgba(241,233,218,0.08)]
                  p-5 md:p-6
                  hover:border-brand-purple-deep/50 dark:hover:border-brand-cream-light/40
                  hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(84,19,136,0.2)]
                  transition-all duration-300"
              >
                <meta itemProp="programmingLanguage" content={project.language} />
                <meta itemProp="author" content="Karan Singh Sisodia" />
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <GitFork size={16} className="text-theme-muted dark:text-brand-cream-light/70" aria-hidden="true" />
                    <h3 className="font-mono text-sm font-bold text-theme-primary dark:text-brand-cream-light group-hover:text-brand-yellow-electric transition-colors" itemProp="name">
                      {project.name}
                    </h3>
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-theme-muted dark:text-brand-cream-light/70 hover:text-brand-pink-hot transition-colors"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>

                <p className="font-sans text-sm text-theme-secondary dark:text-brand-cream-light/90 mb-4 leading-relaxed" itemProp="description">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: project.languageColor }}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-xs text-theme-muted dark:text-brand-cream-light/80">
                      {project.language}
                    </span>
                  </div>
                  {stars > 0 && (
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-brand-yellow-electric" aria-hidden="true" />
                      <span className="font-mono text-xs text-theme-muted dark:text-brand-cream-light/80">
                        {stars}
                      </span>
                    </div>
                  )}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    itemProp="codeRepository"
                    className="font-mono text-xs text-brand-pink-hot hover:text-brand-yellow-electric transition-colors"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    View {project.name} on GitHub
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
