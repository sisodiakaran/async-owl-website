import type { GitHubRepo } from '@/types'
import { FEATURED_PROJECTS } from '@/lib/content'

const GITHUB_API = 'https://api.github.com'

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const headers: Record<string, string> = {
      Accept: 'application/vnd.github.v3+json',
    }

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
    }

    const res = await fetch(`${GITHUB_API}/users/${username}/repos?per_page=100&sort=updated`, {
      headers,
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      console.error(`GitHub API returned ${res.status}`)
      return getFallbackRepos()
    }

    const repos: GitHubRepo[] = await res.json()
    return repos
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error)
    return getFallbackRepos()
  }
}

export function filterFeaturedRepos(repos: GitHubRepo[]): GitHubRepo[] {
  const featuredNames = FEATURED_PROJECTS.map((p) => p.name.toLowerCase())

  return repos.filter(
    (repo) =>
      featuredNames.includes(repo.name.toLowerCase()) ||
      FEATURED_PROJECTS.some((fp) =>
        repo.full_name.toLowerCase().includes(fp.repo.toLowerCase())
      )
  )
}

function getFallbackRepos(): GitHubRepo[] {
  return FEATURED_PROJECTS.map((p) => ({
    name: p.name,
    full_name: p.repo,
    description: p.description,
    html_url: p.url,
    stargazers_count: 0,
    language: p.language,
    topics: [],
    fork: false,
  }))
}
