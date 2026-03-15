import type { Metadata } from 'next'
import { Space_Mono, DM_Sans } from 'next/font/google'
import './globals.css'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AsyncOwl — Karan Singh Sisodia | AI & Software Engineering',
  description:
    'Portfolio of Karan Singh Sisodia (AsyncOwl) — 16+ year AI & Software Engineering Professional. Technical Lead specializing in AI, IoT, Firmware, and Cloud systems.',
  keywords: [
    'Karan Singh Sisodia',
    'AsyncOwl',
    'AI Engineer',
    'Software Architect',
    'IoT',
    'ESP32',
    'Node-RED',
    'Technical Lead',
    'Full Stack Developer',
  ],
  authors: [{ name: 'Karan Singh Sisodia', url: 'https://github.com/sisodiakaran' }],
  openGraph: {
    title: 'AsyncOwl — Karan Singh Sisodia',
    description:
      'AI & Software Engineering Professional | 16+ years transforming ideas into intelligent systems.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AsyncOwl — Karan Singh Sisodia',
    description:
      'AI & Software Engineering Professional | 16+ years transforming ideas into intelligent systems.',
    creator: '@sisodiakaran',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/logo.svg',
  },
}

const ThemeScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function() {
          try {
            var theme = localStorage.getItem('asyncowl-theme');
            if (theme === 'light') {
              document.documentElement.classList.add('light');
              document.documentElement.classList.remove('dark');
            } else {
              document.documentElement.classList.add('dark');
              document.documentElement.classList.remove('light');
            }
          } catch(e) {
            document.documentElement.classList.add('dark');
          }
        })();
      `,
    }}
  />
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body
        className={`${spaceMono.variable} ${dmSans.variable} font-sans antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  )
}
