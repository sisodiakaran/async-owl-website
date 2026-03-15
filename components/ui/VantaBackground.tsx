'use client'

import { useRef, useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const MOBILE_BREAKPOINT = 768

// Topology: mesh/flow effect – visible but still subtle brand colors
const darkTopologyOptions = {
  backgroundColor: 0x2e294e,
  color: 0x541388, // purple mesh lines (visible on navy)
}

const lightTopologyOptions = {
  backgroundColor: 0xf1e9da,
  color: 0x541388,
}

function getTopologyOptions(isLight: boolean) {
  return isLight ? lightTopologyOptions : darkTopologyOptions
}

function isLightTheme(): boolean {
  if (typeof document === 'undefined') return false
  return document.documentElement.classList.contains('light')
}

export default function VantaBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const effectRef = useRef<{ destroy: () => void } | null>(null)
  const [initFailed, setInitFailed] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const initTopology = async (el: HTMLDivElement, isLight: boolean) => {
    try {
      const [p5Module, TOPOLOGY] = await Promise.all([
        import('p5'),
        import('vanta/dist/vanta.topology.min').then((m) => m.default),
      ])
      const p5 = p5Module.default
      // Vanta topology may reference window.p5 internally (e.g. p5.Vector in sketch)
      if (typeof window !== 'undefined') (window as unknown as { p5: unknown }).p5 = p5
      const options = getTopologyOptions(isLight)
      const effect = TOPOLOGY({
        el,
        p5,
        ...options,
      })
      effectRef.current = effect
      setInitFailed(false)
    } catch {
      setInitFailed(true)
    }
  }

  const destroyEffect = () => {
    if (effectRef.current) {
      effectRef.current.destroy()
      effectRef.current = null
    }
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const reducedMotion = prefersReducedMotion === true
    const mobile =
      typeof window !== 'undefined' &&
      window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches
    const shouldRun = !reducedMotion && !mobile && !initFailed

    if (!shouldRun) return

    // Defer init so the fixed container has layout dimensions (avoids 0x0 or min 200x200 canvas)
    const raf = requestAnimationFrame(() => {
      initTopology(el, isLightTheme())
    })

    const observer = new MutationObserver(() => {
      destroyEffect()
      initTopology(el, isLightTheme())
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    const mediaQuery = window.matchMedia(
      `(max-width: ${MOBILE_BREAKPOINT}px)`
    )
    const onResize = (e: MediaQueryListEvent) => {
      if (e.matches) {
        destroyEffect()
      } else if (!effectRef.current) {
        initTopology(el, isLightTheme())
      }
    }
    mediaQuery.addEventListener('change', onResize)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      mediaQuery.removeEventListener('change', onResize)
      destroyEffect()
    }
  }, [prefersReducedMotion, initFailed])

  return (
    <div
      ref={containerRef}
      className="vanta-background fixed inset-0 z-0"
      style={{ background: 'var(--bg-page)' }}
      aria-hidden
    />
  )
}
