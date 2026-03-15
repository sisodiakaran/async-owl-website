interface RateLimitEntry {
  count: number
  resetAt: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()

const WINDOW_MS = 60 * 60 * 1000 // 1 hour
const MAX_REQUESTS = 10

export function checkRateLimit(ip: string): {
  allowed: boolean
  remaining: number
  warning: boolean
} {
  const now = Date.now()

  // Cleanup expired entries periodically
  if (Math.random() < 0.1) {
    rateLimitMap.forEach((entry, key) => {
      if (now > entry.resetAt) {
        rateLimitMap.delete(key)
      }
    })
  }

  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return { allowed: true, remaining: MAX_REQUESTS - 1, warning: false }
  }

  entry.count += 1
  const remaining = Math.max(0, MAX_REQUESTS - entry.count)

  if (entry.count > MAX_REQUESTS) {
    return { allowed: false, remaining: 0, warning: false }
  }

  return {
    allowed: true,
    remaining,
    warning: remaining <= 2,
  }
}

export function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  const real = request.headers.get('x-real-ip')
  if (real) return real
  return '127.0.0.1'
}
