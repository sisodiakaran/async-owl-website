'use client'

import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import type { CareerRole } from '@/types'

const eraColors: Record<CareerRole['era'], string> = {
  freelance: 'border-l-brand-cream-light',
  junior: 'border-l-brand-purple-deep',
  senior: 'border-l-brand-pink-hot',
  lead: 'border-l-brand-yellow-electric',
}

const eraGlows: Record<CareerRole['era'], string> = {
  freelance: 'hover:shadow-[0_0_20px_rgba(241,233,218,0.1)]',
  junior: 'hover:shadow-[0_0_20px_rgba(84,19,136,0.2)]',
  senior: 'hover:shadow-[0_0_20px_rgba(217,3,104,0.2)]',
  lead: 'hover:shadow-[0_0_20px_rgba(255,212,0,0.2)]',
}

interface CommitCardProps {
  role: CareerRole
  index: number
}

export default function CommitCard({ role }: CommitCardProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <button
      onClick={() => setExpanded(!expanded)}
      className={`w-full max-w-full text-left rounded-lg border-l-4 ${eraColors[role.era]} ${eraGlows[role.era]}
        bg-theme-surface
        dark:bg-[#3d3758] dark:border-brand-cream-light/25 dark:shadow-[0_0_0_1px_rgba(241,233,218,0.08)]
        border border-theme-subtle
        p-4 md:p-5 transition-all duration-300
        hover:border-brand-purple-deep/50 dark:hover:border-brand-cream-light/40 overflow-hidden`}
      aria-expanded={expanded}
      aria-label={`${role.title} at ${role.company}, ${role.startDate} to ${role.endDate}`}
    >
      <div className="font-mono text-xs text-theme-muted dark:text-brand-cream-light/80 mb-2">
        <span className="text-brand-yellow-electric">commit</span> {role.hash}
      </div>
      <div className="font-mono text-xs text-theme-secondary dark:text-brand-cream-light/90 mb-1 break-words">
        Author: Karan Singh Sisodia &lt;karansinghsisodia@gmail.com&gt;
      </div>
      <div className="font-mono text-xs text-theme-secondary dark:text-brand-cream-light/90 mb-3">
        Date: &nbsp; {role.startDate} — {role.endDate}
      </div>
      <div className="flex items-start gap-2">
        <span className="mt-0.5 flex-shrink-0">
          {expanded ? (
            <ChevronDown size={16} className="text-brand-pink-hot" />
          ) : (
            <ChevronRight size={16} className="text-brand-pink-hot" />
          )}
        </span>
        <div className="min-w-0">
          <div className="font-mono text-sm text-theme-primary dark:text-brand-cream-light font-bold">
            {role.title}{' '}
            <span className="text-brand-pink-hot">@</span>{' '}
            {role.company}
          </div>
          <div className="font-mono text-xs text-theme-muted dark:text-brand-cream-light/80 mt-0.5">
            ↳ {role.location}
          </div>
        </div>
      </div>
      {expanded && (
        <div className="mt-3 pl-6 space-y-1">
          {role.description.map((line, i) => (
            <div
              key={i}
              className="font-mono text-xs text-theme-secondary dark:text-brand-cream-light/90"
            >
              ↳ {line}
            </div>
          ))}
        </div>
      )}
    </button>
  )
}
