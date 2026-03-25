import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProjectsGrid from '@/components/sections/ProjectsGrid'
import { fetchGitHubRepos } from '@/lib/github'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Projects — AsyncOwl AI & IoT Portfolio',
  description:
    'Featured open-source and product engineering projects by Karan Singh Sisodia, including Node-RED, ESP32, and full-stack AI systems.',
  alternates: {
    canonical: 'https://asyncowl.com/projects',
  },
  openGraph: {
    url: 'https://asyncowl.com/projects',
  },
}

export default async function ProjectsPage() {
  const repos = await fetchGitHubRepos('sisodiakaran')

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden min-w-0">
        <ProjectsGrid repos={repos} />
        <section className="pb-20 px-4" aria-label="Related pages">
          <div className="max-w-4xl mx-auto rounded-lg border border-theme-subtle bg-theme-surface p-6">
            <h2 className="font-mono text-lg font-bold text-theme-primary mb-2">Related pages</h2>
            <div className="flex flex-wrap gap-4 font-mono text-sm">
              <Link href="/skills" className="text-brand-pink-hot hover:text-brand-yellow-electric">
                {'> '}Review the technical stack
              </Link>
              <Link href="/contact" className="text-brand-pink-hot hover:text-brand-yellow-electric">
                {'> '}Discuss collaboration
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
