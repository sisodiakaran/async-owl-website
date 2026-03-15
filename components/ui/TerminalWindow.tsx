interface TerminalWindowProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export default function TerminalWindow({
  title = 'asyncowl@terminal',
  children,
  className = '',
}: TerminalWindowProps) {
  return (
    <div
      className={`rounded-lg border border-theme-subtle overflow-hidden
        bg-theme-surface
        shadow-[0_0_30px_rgba(84,19,136,0.15)]
        ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-theme-subtle bg-theme-surface">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-brand-pink-hot" />
          <div className="w-3 h-3 rounded-full bg-brand-yellow-electric" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="ml-2 text-xs font-mono text-theme-secondary">
          {title}
        </span>
      </div>
      <div className="p-4 md:p-6 font-mono text-sm leading-relaxed text-theme-primary">
        {children}
      </div>
    </div>
  )
}
