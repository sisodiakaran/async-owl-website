export const dynamic = 'force-dynamic'

import { getOpenAIClient, SYSTEM_PROMPT } from '@/lib/openai'
import { checkRateLimit, getClientIP } from '@/lib/rateLimit'
import { sanitizeInput, detectInjection } from '@/lib/sanitize'

export async function POST(request: Request) {
  try {
    const ip = getClientIP(request)
    const { allowed, remaining } = checkRateLimit(ip)

    if (!allowed) {
      return new Response(
        JSON.stringify({
          error:
            'Rate limit exceeded. Please reach out at karansinghsisodia@gmail.com for more questions.',
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'X-RateLimit-Remaining': '0',
          },
        }
      )
    }

    const body = await request.json()
    const messages = body.messages

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Messages array is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const lastMessage = messages[messages.length - 1]
    if (!lastMessage || typeof lastMessage.content !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Invalid message format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const sanitizedContent = sanitizeInput(lastMessage.content)

    if (detectInjection(sanitizedContent)) {
      return new Response(
        JSON.stringify({
          error:
            "I'm AsyncOwl — I'm here to help you learn about Karan's work. What would you like to know?",
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const sanitizedMessages = messages.slice(-10).map(
      (msg: { role: string; content: string }) => ({
        role: msg.role as 'user' | 'assistant',
        content: sanitizeInput(msg.content),
      })
    )

    const openai = getOpenAIClient()
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      stream: true,
      max_tokens: 500,
      temperature: 0.7,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...sanitizedMessages,
      ],
    })

    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder()
        try {
          for await (const chunk of completion) {
            const text = chunk.choices[0]?.delta?.content
            if (text) {
              controller.enqueue(encoder.encode(text))
            }
          }
        } catch {
          controller.enqueue(
            new TextEncoder().encode(
              '\n\n[Connection interrupted. Please try again.]'
            )
          )
        } finally {
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'X-RateLimit-Remaining': remaining.toString(),
      },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
