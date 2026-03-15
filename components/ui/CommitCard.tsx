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

const MONTH_TO_ISO: Record<string, string> = {
  Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
  Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12',
}

/** Parses "Aug 2025" to "2025-08" for datetime attribute. */
function toISOMonth(dateStr: string): string | null {
  const parts = dateStr.trim().split(/\s+/)
  if (parts.length !== 2) return null
  const month = MONTH_TO_ISO[parts[0]]
  const year = parts[1]
  if (!month || !year) return null
  return `${year}-${month}`
}

interface CommitCardProps {
  role: CareerRole
  index: number
}

export default function CommitCard({ role }: CommitCardProps) {
  const [expanded, setExpanded] = useState(false)
  const startDateTime = toISOMonth(role.startDate)
  const endDateTime = role.endDate !== 'Present' ? toISOMonth(role.endDate) : null

  return (
    <article
      itemScope
      itemType="https://schema.org/Role"
      className={`rounded-lg border-l-4 border border-theme-subtle ${eraColors[role.era]} ${eraGlows[role.era]}
        bg-theme-surface
        dark:bg-[#3d3758] dark:border-brand-cream-light/25 dark:shadow-[0_0_0_1px_rgba(241,233,218,0.08)]
        p-4 md:p-5 transition-all duration-300
        hover:border-brand-purple-deep/50 dark:hover:border-brand-cream-light/40 overflow-hidden`}
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full max-w-full text-left"
        aria-expanded={expanded}
        aria-label={`Expand ${role.title} at ${role.company}`}
      >
        <div className="font-mono text-xs text-theme-muted dark:text-brand-cream-light/80 mb-2">
          <span className="text-brand-yellow-electric">commit</span> {role.hash}
        </div>
        <div className="font-mono text-xs text-theme-secondary dark:text-brand-cream-light/90 mb-1 break-words">
          Author: Karan Singh Sisodia &lt;karansinghsisodia@gmail.com&gt;
        </div>
        <div className="font-mono text-xs text-theme-secondary dark:text-brand-cream-light/90 mb-3">
          Date: &nbsp;
          {startDateTime ? (
            <time dateTime={startDateTime} itemProp="startDate">
              {role.startDate}
            </time>
          ) : (
            role.startDate
          )}
          {' — '}
          {endDateTime ? (
            <time dateTime={endDateTime} itemProp="endDate">
              {role.endDate}
            </time>
          ) : (
            role.endDate
          )}
        </div>
        <div className="flex items-start gap-2">
          <span className="mt-0.5 flex-shrink-0" aria-hidden="true">
            {expanded ? (
              <ChevronDown size={16} className="text-brand-pink-hot" />
            ) : (
              <ChevronRight size={16} className="text-brand-pink-hot" />
            )}
          </span>
          <div className="min-w-0">
            <h3 className="font-mono text-sm text-theme-primary dark:text-brand-cream-light font-bold" itemProp="jobTitle">
              {role.title}{' '}
              <span className="text-brand-pink-hot">@</span>{' '}
              <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
                <span itemProp="name">{role.company}</span>
              </span>
            </h3>
            <address className="font-mono text-xs text-theme-muted dark:text-brand-cream-light/80 mt-0.5 not-italic" itemProp="jobLocation">
              ↳ {role.location}
            </address>
          </div>
        </div>
      </button>
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
    </article>
  )
}
