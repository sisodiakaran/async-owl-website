'use client'

import { useState, useRef, useEffect, useCallback, type FormEvent } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Send } from 'lucide-react'
import TerminalWindow from '@/components/ui/TerminalWindow'
import type { ChatMessage, RateLimitInfo } from '@/types'

export default function AskAsyncOwl() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        "Hey! I'm AsyncOwl — Karan's digital twin. Ask me anything about his work, skills, career, or availability. 🦉",
      timestamp: Date.now(),
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [rateLimit, setRateLimit] = useState<RateLimitInfo | null>(null)

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'nearest',
    })
  }, [prefersReducedMotion])

  const prevMessagesLength = useRef(messages.length)
  useEffect(() => {
    // Only scroll when new messages are added (user sent or assistant replied), not on initial load
    if (messages.length > prevMessagesLength.current) {
      scrollToBottom()
      prevMessagesLength.current = messages.length
    }
  }, [messages, scrollToBottom])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    if (rateLimit?.blocked) return

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: trimmed,
      timestamp: Date.now(),
    }

    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsLoading(true)

    const assistantId = `assistant-${Date.now()}`

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => null)
        if (response.status === 429) {
          setRateLimit({
            remaining: 0,
            total: 10,
            warning: false,
            blocked: true,
          })
          setMessages((prev) => [
            ...prev,
            {
              id: assistantId,
              role: 'assistant',
              content:
                'Rate limit reached. Please reach out directly at karansinghsisodia@gmail.com for more questions. 🦉',
              timestamp: Date.now(),
            },
          ])
          setIsLoading(false)
          return
        }
        throw new Error(errorData?.error || 'Failed to get response')
      }

      const remaining = response.headers.get('X-RateLimit-Remaining')
      if (remaining) {
        const rem = parseInt(remaining, 10)
        setRateLimit({
          remaining: rem,
          total: 10,
          warning: rem <= 2,
          blocked: rem <= 0,
        })
      }

      if (!response.body) throw new Error('No response body')

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let content = ''

      setMessages((prev) => [
        ...prev,
        { id: assistantId, role: 'assistant', content: '', timestamp: Date.now() },
      ])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        content += decoder.decode(value, { stream: true })
        setMessages((prev) =>
          prev.map((m) => (m.id === assistantId ? { ...m, content } : m))
        )
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: assistantId,
          role: 'assistant',
          content:
            'Connection interrupted. Please try again or reach out at karansinghsisodia@gmail.com. 🦉',
          timestamp: Date.now(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="ask-ai"
      className="py-20 md:py-32 px-4"
      ref={sectionRef}
      aria-label="Ask AsyncOwl AI"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-2xl md:text-3xl font-bold text-theme-primary mb-4 text-center"
        >
          <span className="text-brand-pink-hot">{'> '}</span>
          ask_asyncowl
        </motion.h2>
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-sm text-theme-secondary text-center mb-8"
        >
          AI-powered assistant trained on Karan&apos;s profile
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TerminalWindow title="asyncowl@chat" className="max-h-[600px] flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-4 max-h-[400px] scrollbar-thin">
              {messages.map((msg) => (
                <div key={msg.id} className="font-mono text-sm">
                  {msg.role === 'user' ? (
                    <div>
                      <span className="text-brand-pink-hot">{'> '}</span>
                      <span className="text-theme-primary">{msg.content}</span>
                    </div>
                  ) : (
                    <div>
                      <span className="text-brand-yellow-electric">🦉 </span>
                      <span className="text-theme-secondary whitespace-pre-wrap">
                        {msg.content}
                      </span>
                    </div>
                  )}
                </div>
              ))}
              {isLoading && (
                <div className="font-mono text-sm">
                  <span className="text-brand-yellow-electric">🦉 </span>
                  <span className="terminal-cursor" aria-label="AsyncOwl is typing" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Rate limit warning */}
            {rateLimit?.warning && !rateLimit.blocked && (
              <div className="mb-3 px-3 py-2 rounded-md bg-brand-yellow-electric/10 border border-brand-yellow-electric/20">
                <p className="font-mono text-xs text-brand-yellow-electric">
                  {'>'} {rateLimit.remaining} queries remaining this hour
                </p>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-md
                border border-theme-subtle bg-theme-surface
                focus-within:border-brand-yellow-electric">
                <span className="text-brand-pink-hot font-mono text-sm">{'>'}</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={
                    rateLimit?.blocked
                      ? 'Rate limit reached — email karan directly'
                      : 'Ask about skills, career, projects...'
                  }
                  disabled={isLoading || rateLimit?.blocked}
                  className="flex-1 bg-transparent font-mono text-sm text-theme-primary
                    placeholder:text-theme-muted
                    focus:outline-none disabled:opacity-50"
                  aria-label="Type your message"
                  maxLength={500}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !input.trim() || rateLimit?.blocked}
                className="px-4 py-2 rounded-md font-mono text-sm
                  bg-brand-pink-hot text-brand-cream-light
                  hover:shadow-[0_0_16px_rgba(217,3,104,0.4)]
                  disabled:opacity-40 disabled:cursor-not-allowed
                  transition-all duration-200"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </form>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  )
}
