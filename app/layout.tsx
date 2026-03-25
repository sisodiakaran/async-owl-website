import type { Metadata } from 'next'
import { Space_Mono, DM_Sans } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { JsonLd } from '@/components/seo/JsonLd'
import ThemeInit from '@/components/ThemeInit'
import VantaBackground from '@/components/ui/VantaBackground'

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
  metadataBase: new URL('https://asyncowl.com'),
  title: {
    default: 'Karan Singh Sisodia (@AsyncOwl) — AI & Software Engineering',
    template: '%s | Karan Singh Sisodia',
  },
  description:
    'Personal portfolio of Karan Singh Sisodia (@AsyncOwl) — Technical Lead with 16+ years bridging AI, IoT, and full-stack engineering. Based in Chandigarh, India.',
  keywords: [
    'Karan Singh Sisodia',
    'AsyncOwl',
    'AI software engineer',
    'IoT developer India',
    'Technical Lead Chandigarh',
    'Node-RED developer',
    'ESP32 firmware engineer',
    'software architect India',
    'sisodiakaran',
  ],
  authors: [{ name: 'Karan Singh Sisodia', url: 'https://asyncowl.com' }],
  creator: 'Karan Singh Sisodia',
  publisher: 'Karan Singh Sisodia',
  category: 'Technology',
  alternates: {
    canonical: 'https://asyncowl.com',
    languages: {
      'en-IN': 'https://asyncowl.com',
      'en-US': 'https://asyncowl.com',
    },
  },
  openGraph: {
    type: 'profile',
    url: 'https://asyncowl.com',
    title: 'Karan Singh Sisodia (@AsyncOwl) — AI & Software Engineering',
    description:
      'Technical Lead with 16+ years bridging AI, IoT, and full-stack engineering. Open source contributor. Based in Chandigarh, India.',
    siteName: 'Karan Singh Sisodia — AsyncOwl',
    locale: 'en_IN',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Karan Singh Sisodia — @AsyncOwl — AI & Software Engineer',
        type: 'image/png',
      },
    ],
    firstName: 'Karan',
    lastName: 'Singh Sisodia',
    username: 'AsyncOwl',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sisodiakaran',
    creator: '@sisodiakaran',
    title: 'Karan Singh Sisodia (@AsyncOwl) — AI & Software Engineer',
    description:
      'Technical Lead • 16+ yrs • AI, IoT, Full-Stack • Chandigarh, India',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  // Set GOOGLE_SITE_VERIFICATION in your deployment environment for Google Search Console verification.
  // When unset, the verification meta tag is omitted.
  ...(process.env.GOOGLE_SITE_VERIFICATION && {
    verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
  }),
  applicationName: 'AsyncOwl Portfolio',
  // PWA capability via <meta name="mobile-web-app-capable"> in layout (modern replacement for deprecated apple-mobile-web-app-capable)
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BQETQJHYWT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BQETQJHYWT');
          `}
        </Script>
      </head>
      <body
        className={`${spaceMono.variable} ${dmSans.variable} font-sans antialiased min-h-screen`}
        suppressHydrationWarning
      >
        <VantaBackground />
        <div className="relative z-10">
          <ThemeInit />
          <JsonLd />
          {children}
        </div>
      </body>
    </html>
  )
}
