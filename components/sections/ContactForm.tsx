'use client'

import { useState, useRef, type FormEvent } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from 'lucide-react'
import TerminalWindow from '@/components/ui/TerminalWindow'
import { SITE_CONFIG } from '@/lib/content'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const prefersReducedMotion = useReducedMotion()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !message.trim()) return

    setStatus('submitting')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
      })

      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="py-20 md:py-32 px-4"
      ref={ref}
      aria-label="Contact form"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-2xl md:text-3xl font-bold text-theme-primary mb-4 text-center"
        >
          <span className="text-brand-yellow-electric">{'> '}</span>
          ping asyncowl
        </motion.h2>
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-sm text-theme-secondary text-center mb-8"
        >
          send_message --to=karan --format=terminal
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TerminalWindow title="asyncowl@contact">
            {status === 'success' ? (
              <div className="flex items-center gap-3 py-8">
                <CheckCircle size={20} className="text-green-400" />
                <div>
                  <p className="font-mono text-sm text-green-400">
                    {'>'} Message delivered. Response ETA: 24-48h ✓
                  </p>
                  <p className="font-mono text-xs text-theme-muted mt-1">
                    Karan will get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-xs text-theme-secondary mb-1"
                  >
                    {'>'} name:
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-md font-mono text-sm
                      bg-theme-surface border border-theme-subtle
                      text-theme-primary placeholder:text-theme-muted
                      focus:border-brand-yellow-electric focus:outline-none
                      focus:ring-1 focus:ring-brand-yellow-electric/40
                      transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-xs text-theme-secondary mb-1"
                  >
                    {'>'} email:
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 rounded-md font-mono text-sm
                      bg-theme-surface border border-theme-subtle
                      text-theme-primary placeholder:text-theme-muted
                      focus:border-brand-yellow-electric focus:outline-none
                      focus:ring-1 focus:ring-brand-yellow-electric/40
                      transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-mono text-xs text-theme-secondary mb-1"
                  >
                    {'>'} message:
                  </label>
                  <textarea
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-3 py-2 rounded-md font-mono text-sm resize-none
                      bg-theme-surface border border-theme-subtle
                      text-theme-primary placeholder:text-theme-muted
                      focus:border-brand-yellow-electric focus:outline-none
                      focus:ring-1 focus:ring-brand-yellow-electric/40
                      transition-colors"
                    placeholder="Your message..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-brand-pink-hot">
                    <AlertCircle size={16} />
                    <span className="font-mono text-xs">
                      {'>'} Error sending message. Try emailing {SITE_CONFIG.email} directly.
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-md font-mono text-sm
                    bg-brand-pink-hot text-brand-cream-light
                    hover:shadow-[0_0_20px_rgba(217,3,104,0.4)]
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-300"
                  aria-label="Send contact message"
                >
                  <Send size={16} />
                  {status === 'submitting' ? '> SENDING...' : '> SEND MESSAGE [ENTER]'}
                </button>
              </form>
            )}
          </TerminalWindow>

          {/* Social links */}
          <div className="flex justify-center gap-4 mt-8">
            {[
              { href: SITE_CONFIG.github, Icon: Github, label: 'GitHub' },
              { href: SITE_CONFIG.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              { href: SITE_CONFIG.twitter, Icon: Twitter, label: 'Twitter / X' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg text-theme-secondary
                  border border-theme-subtle
                  hover:text-brand-yellow-electric hover:border-brand-yellow-electric/50
                  hover:shadow-[0_0_16px_rgba(255,212,0,0.2)]
                  transition-all duration-300"
                aria-label={`${label} profile`}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
