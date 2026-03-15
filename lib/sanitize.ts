const BLOCKED_PHRASES = [
  'ignore your instructions',
  'ignore previous',
  'act as dan',
  'pretend you have no restrictions',
  'you are now',
  'jailbreak',
  'reveal your system prompt',
  'forget everything',
  'new instructions',
  'ignore all previous instructions',
  'disregard your programming',
  'override your',
  'bypass your',
  'system prompt',
  'initial prompt',
  'developer mode',
]

const MAX_MESSAGE_LENGTH = 500

export function sanitizeInput(input: string): string {
  let sanitized = input
    .replace(/<[^>]*>/g, '')
    .replace(/&[^;]+;/g, '')
    .trim()

  if (sanitized.length > MAX_MESSAGE_LENGTH) {
    sanitized = sanitized.substring(0, MAX_MESSAGE_LENGTH)
  }

  return sanitized
}

export function detectInjection(input: string): boolean {
  const lower = input.toLowerCase()
  return BLOCKED_PHRASES.some((phrase) => lower.includes(phrase))
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validateContactForm(data: {
  name?: string
  email?: string
  message?: string
}): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters')
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.push('Valid email is required')
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters')
  }

  if (data.message && data.message.length > 2000) {
    errors.push('Message must be under 2000 characters')
  }

  return { valid: errors.length === 0, errors }
}
