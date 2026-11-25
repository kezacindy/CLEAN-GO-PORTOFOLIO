import type { ReactNode } from 'react'

type SectionTone = 'default' | 'subtle'

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  tone = 'default',
  children,
}: {
  id: string
  eyebrow?: string
  title: string
  subtitle?: string
  tone?: SectionTone
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={[
        'scroll-mt-24 border-t border-border/60',
        tone === 'subtle' ? 'bg-secondary/30' : 'bg-background',
      ].join(' ')}
    >
      <div className="mx-auto max-w-5xl px-6 md:px-12 py-20 md:py-28">
        <header className="mb-12 md:mb-14">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={`${id}-title`}
            className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-pretty"
          >
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 max-w-3xl text-base md:text-lg leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          ) : null}
        </header>

        {children}
      </div>
    </section>
  )
}

