import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          'purple-deep': '#541388',
          'pink-hot': '#D90368',
          'cream-light': '#F1E9DA',
          'navy-dark': '#2E294E',
          'yellow-electric': '#FFD400',
        },
      },
      fontFamily: {
        mono: ['var(--font-space-mono)', 'monospace'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'cursor-blink': 'cursorBlink 1s step-end infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
      },
      keyframes: {
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px var(--glow-color, #FFD400)' },
          '50%': { boxShadow: '0 0 20px var(--glow-color, #FFD400), 0 0 40px var(--glow-color, #FFD400)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
