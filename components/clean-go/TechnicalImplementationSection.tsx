import {
  AtomIcon,
  BellRingIcon,
  DatabaseIcon,
  LayersIcon,
  MapPinIcon,
  ServerIcon,
} from 'lucide-react'

import Section from '@/components/clean-go/Section'

export default function TechnicalImplementationSection() {
  const stackItems = [
    {
      category: 'Frontend',
      Icon: AtomIcon,
      items: ['React.js', 'TypeScript', 'Tailwind CSS', 'Real-time Maps'],
    },
    {
      category: 'Backend (conceptual)',
      Icon: ServerIcon,
      items: ['Node.js/Python', 'PostgreSQL', 'Geolocation API', 'WebSocket'],
    },
    {
      category: 'Data',
      Icon: DatabaseIcon,
      items: ['Time-series DB', 'Complaint Logs', 'User Sessions', 'Analytics'],
    },
  ]

  const highlights = [
    {
      Icon: LayersIcon,
      title: 'Modular components',
      description:
        'Each feature is self-contained with independent UI layer and state boundaries to support iterative research-driven changes.',
    },
    {
      Icon: MapPinIcon,
      title: 'Location-based scheduling',
      description:
        'Geolocation metadata supports neighborhood-based assignment and reduces ambiguity in reporting.',
    },
    {
      Icon: DatabaseIcon,
      title: 'Structured logging',
      description:
        'Issue data captured with consistent metadata enables analysis of recurring failures and resolution timelines.',
    },
    {
      Icon: BellRingIcon,
      title: 'Real-time events (future)',
      description:
        'Notification patterns support anticipation and reduce repeated checking during pickup windows.',
    },
  ]

  return (
    <Section
      id="implementation"
      eyebrow="8. Technical implementation"
      title="From design reasoning to an implementable architecture"
      subtitle="The prototype is presented as an implementation-ready structure: clear module boundaries, consistent interaction patterns, and data shapes that map to a future backend."
    >
      <div className="space-y-10">
        <div className="rounded-xl border border-border/70 bg-card p-6 md:p-8">
          <p className="text-base md:text-lg leading-relaxed">
            CLEAN GO is implemented as a <span className="font-semibold">modular React.js application</span> designed
            for scalability and maintainability. The architecture separates concerns into feature-based components
            allowing each to be developed, tested, and iterated independently. The system integrates with
            geolocation APIs, time-series databases, and structured logging. This{' '}
            <span className="font-semibold">backend-ready design</span> aims to extend the prototype into production
            with minimal refactoring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stackItems.map((stack) => (
            <div key={stack.category} className="rounded-xl border border-border/70 bg-card p-6 md:p-7">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl border border-border/70 bg-background flex items-center justify-center text-muted-foreground">
                  <stack.Icon className="size-5" />
                </div>
                <h3 className="text-sm font-semibold tracking-tight">{stack.category}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {stack.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-border" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border/70 bg-card p-6 md:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            System architecture (placeholder)
          </h3>
          <div className="mt-4 rounded-xl border border-dashed border-border bg-background p-8 text-center">
            <div className="mx-auto size-12 rounded-2xl border border-border/70 bg-card flex items-center justify-center text-muted-foreground">
              <LayersIcon className="size-6" />
            </div>
            <div className="mt-4 text-base font-semibold">Resident ↔ CLEAN GO system ↔ Operator</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Data flow with role-based status updates and issue lifecycle tracking.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((highlight) => (
            <div key={highlight.title} className="rounded-xl border border-border/70 bg-card p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div className="size-10 rounded-xl border border-border/70 bg-background flex items-center justify-center text-muted-foreground">
                  <highlight.Icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold tracking-tight">{highlight.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

