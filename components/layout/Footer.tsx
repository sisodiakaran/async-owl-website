import { Github, Linkedin, Twitter } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/content'
import OwlLogo from '@/components/ui/OwlLogo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-theme-subtle bg-theme-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <OwlLogo size={28} animated={false} />
            <div>
              <span className="font-mono text-sm font-bold text-theme-primary">
                AsyncOwl
              </span>
              <span className="font-mono text-xs text-theme-muted ml-2">
                {SITE_CONFIG.fullName}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-theme-secondary hover:text-brand-yellow-electric
                border border-transparent hover:border-brand-yellow-electric/50
                hover:shadow-[0_0_12px_rgba(255,212,0,0.2)]
                transition-all duration-300"
              aria-label="Karan Singh Sisodia on GitHub (@sisodiakaran)"
            >
              <Github size={20} aria-hidden="true" />
            </a>
            <a
              href={SITE_CONFIG.linkedin}
              target="_blank"
              rel="me noopener noreferrer"
              className="p-2 rounded-lg text-theme-secondary hover:text-brand-yellow-electric
                border border-transparent hover:border-brand-yellow-electric/50
                hover:shadow-[0_0_12px_rgba(255,212,0,0.2)]
                transition-all duration-300"
              aria-label="Karan Singh Sisodia on LinkedIn"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>
            <a
              href={SITE_CONFIG.twitter}
              target="_blank"
              rel="me noopener noreferrer"
              className="p-2 rounded-lg text-theme-secondary hover:text-brand-yellow-electric
                border border-transparent hover:border-brand-yellow-electric/50
                hover:shadow-[0_0_12px_rgba(255,212,0,0.2)]
                transition-all duration-300"
              aria-label="Karan Singh Sisodia on Twitter/X (@sisodiakaran)"
            >
              <Twitter size={20} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-theme-subtle text-center">
          <p className="font-mono text-xs text-theme-muted">
            &copy; {currentYear} {SITE_CONFIG.fullName}. Built with{' '}
            <span className="text-brand-pink-hot">{'<3'}</span> by{' '}
            <span className="text-brand-yellow-electric">@AsyncOwl</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
