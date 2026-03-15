'use client'

import { useCallback, useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('asyncowl-theme')
    const dark = stored !== 'light'
    setIsDark(dark)
  }, [])

  const toggle = useCallback(() => {
    const next = !isDark
    setIsDark(next)
    const root = document.documentElement
    if (next) {
      root.classList.add('dark')
      root.classList.remove('light')
      localStorage.setItem('asyncowl-theme', 'dark')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
      localStorage.setItem('asyncowl-theme', 'light')
    }
  }, [isDark])

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 px-3 py-1.5 rounded-md font-mono text-sm
        border border-theme-subtle hover:border-brand-yellow-electric
        transition-all duration-300
        text-theme-primary
        bg-theme-surface
        hover:shadow-[0_0_12px_rgba(255,212,0,0.3)]"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <>
          <Sun size={16} />
          <span className="hidden sm:inline">LIGHT</span>
        </>
      ) : (
        <>
          <Moon size={16} />
          <span className="hidden sm:inline">DARK</span>
        </>
      )}
    </button>
  )
}
