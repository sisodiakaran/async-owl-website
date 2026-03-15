import { Suspense } from 'react'
import { fetchGitHubRepos } from '@/lib/github'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroTerminal from '@/components/sections/HeroTerminal'
import About from '@/components/sections/About'
import Timeline from '@/components/sections/Timeline'
import SkillsMatrix from '@/components/sections/SkillsMatrix'
import ProjectsGrid from '@/components/sections/ProjectsGrid'
import AskAsyncOwl from '@/components/sections/AskAsyncOwl'
import ContactForm from '@/components/sections/ContactForm'

export const revalidate = 3600

function SectionLoader() {
  return (
    <div className="flex items-center justify-center py-20" aria-label="Loading section">
      <div className="font-mono text-sm text-theme-muted flex items-center gap-2">
        <span className="terminal-cursor" aria-hidden="true" />
        <span>Loading...</span>
      </div>
    </div>
  )
}

export default async function HomePage() {
  const repos = await fetchGitHubRepos('sisodiakaran')

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden min-w-0">
        <HeroTerminal />

        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Timeline />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <SkillsMatrix />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ProjectsGrid repos={repos} />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <AskAsyncOwl />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <ContactForm />
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
