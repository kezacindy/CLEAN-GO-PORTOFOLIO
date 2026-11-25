import { AlertTriangleIcon, CheckCircle2Icon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import Section from '@/components/clean-go/Section'

export default function PersonasSection() {
  const personas = [
    {
      name: 'Aline',
      role: 'Urban Professional',
      goals: [
        'Know exact pickup times to plan her week',
        'Receive notifications when pickup is approaching',
        'Resolve missed pickups quickly without calling',
      ],
      painPoints: [
        'Forgets collection schedule, often misses pickups',
        'No way to know if collector arrived while she was away',
        'Frustrated by lack of communication when issues occur',
      ],
    },
    {
      name: 'Jeanette',
      role: 'Household Caregiver',
      goals: [
        'Clear, simple way to track weekly collections',
        'Ability to report problems and get confirmation',
        'Reassurance that her household is being served',
      ],
      painPoints: [
        'Struggles to remember changing schedules',
        'No feedback when she reports a missed pickup',
        'Unsure if issues are being addressed or ignored',
      ],
    },
  ]

  return (
    <Section
      id="personas"
      eyebrow="4. Users"
      title="Personas grounded in coordination needs"
      subtitle="Two representative personas illustrate how uncertainty is experienced and why interaction design must support both planning and recovery after failure."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {personas.map((persona) => (
          <article
            key={persona.name}
            className="rounded-2xl border border-border/70 bg-card overflow-hidden hover:border-border/90"
          >
            <div className="bg-secondary/40 border-b border-border/60 p-6 flex items-center gap-4">
              <Avatar className="size-12 border border-border/70 bg-background">
                <AvatarFallback className="font-semibold text-foreground">
                  {persona.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')
                    .slice(0, 2)
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold tracking-tight">{persona.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">
                  {persona.role}
                </p>
              </div>
            </div>

            <div className="p-6 md:p-7 space-y-7">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <CheckCircle2Icon className="size-4 text-accent" />
                  Goals
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {persona.goals.map((goal) => (
                    <li key={goal} className="flex gap-3">
                      <span className="mt-2 size-1.5 rounded-full bg-accent/70 flex-shrink-0" />
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border/60 pt-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                  <AlertTriangleIcon className="size-4 text-muted-foreground" />
                  Pain points
                </h4>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {persona.painPoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 size-1.5 rounded-full bg-border flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

