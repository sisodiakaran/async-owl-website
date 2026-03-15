interface GlowBadgeProps {
  children: React.ReactNode
  color?: 'pink' | 'yellow' | 'purple' | 'default'
  className?: string
}

const colorMap = {
  pink: 'border-brand-pink-hot text-brand-pink-hot hover:shadow-[0_0_12px_rgba(217,3,104,0.4)]',
  yellow: 'border-brand-yellow-electric text-brand-yellow-electric hover:shadow-[0_0_12px_rgba(255,212,0,0.4)]',
  purple:
    'border-brand-purple-deep text-brand-purple-deep dark:border-brand-cream-light/70 dark:text-brand-cream-light hover:shadow-[0_0_12px_rgba(84,19,136,0.4)] dark:hover:shadow-[0_0_12px_rgba(241,233,218,0.25)]',
  default:
    'border-theme-subtle text-theme-primary dark:border-brand-cream-light/50 dark:text-brand-cream-light hover:shadow-[0_0_12px_rgba(84,19,136,0.2)]',
}

export default function GlowBadge({ children, color = 'default', className = '' }: GlowBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono
        border transition-all duration-300 shrink-0
        bg-theme-surface
        ${colorMap[color]}
        ${className}`}
    >
      {children}
    </span>
  )
}
