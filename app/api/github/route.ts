export const revalidate = 3600

import { fetchGitHubRepos } from '@/lib/github'

export async function GET() {
  try {
    const repos = await fetchGitHubRepos('sisodiakaran')

    return Response.json(repos, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    })
  } catch (error) {
    console.error('GitHub API route error:', error)
    return Response.json(
      { error: 'Failed to fetch repositories' },
      { status: 500 }
    )
  }
}
