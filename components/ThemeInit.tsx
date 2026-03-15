'use client'

import { useEffect } from 'react'

/**
 * Applies saved theme (dark/light) after mount so server and client render
 * the same initial HTML and hydration does not mismatch.
 */
export default function ThemeInit() {
  useEffect(() => {
    try {
      const theme = localStorage.getItem('asyncowl-theme')
      const root = document.documentElement
      if (theme === 'light') {
        root.classList.add('light')
        root.classList.remove('dark')
      } else {
        root.classList.add('dark')
        root.classList.remove('light')
      }
    } catch {
      document.documentElement.classList.add('dark')
    }
  }, [])
  return null
}
