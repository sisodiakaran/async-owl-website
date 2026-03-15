export interface CareerRole {
  hash: string
  title: string
  company: string
  location: string
  startDate: string
  endDate: string
  description: string[]
  era: 'freelance' | 'junior' | 'senior' | 'lead'
}

export interface SkillCategory {
  name: string
  icon: string
  skills: Skill[]
}

export interface Skill {
  name: string
  yearsOfExperience: number
  relatedProjects: string[]
}

export interface Project {
  name: string
  repo: string
  description: string
  language: string
  languageColor: string
  url: string
}

export interface GitHubRepo {
  name: string
  full_name: string
  description: string | null
  html_url: string
  stargazers_count: number
  language: string | null
  topics: string[]
  fork: boolean
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: number
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface RateLimitInfo {
  remaining: number
  total: number
  warning: boolean
  blocked: boolean
}
