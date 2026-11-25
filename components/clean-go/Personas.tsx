import { AlertTriangleIcon, CheckCircle2Icon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function Personas() {
  const personas = [
    {
      name: 'Aline',
      role: 'Urban Professional',
      goals: [
        'Know exact pickup times to plan her week',
        'Receive notifications when pickup is approaching',
        'Resolve missed pickups quickly without calling'
      ],
      painPoints: [
        'Forgets collection schedule, often misses pickups',
        'No way to know if collector arrived while she was away',
        'Frustrated by lack of communication when issues occur'
      ]
    },
    {
      name: 'Jeanette',
      role: 'Household Caregiver',
      goals: [
        'Clear, simple way to track weekly collections',
        'Ability to report problems and get confirmation',
        'Reassurance that her household is being served'
      ],
      painPoints: [
        'Struggles to remember changing schedules',
        'No feedback when she reports a missed pickup',
        'Unsure if issues are being addressed or ignored'
      ]
    }
  ]

  return (
    <section id="users" className="py-32 md:py-40 px-6 md:px-12 bg-secondary/30 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">2. Understanding Users</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pretty leading-tight">
            Two Key Personas
          </h2>
          <p className="text-lg text-muted-foreground">
            Research revealed distinct user groups with different needs and frustrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personas.map((persona) => (
            <div
              key={persona.name}
              className="group bg-background rounded-2xl border border-border overflow-hidden hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              {/* Photo Placeholder */}
              <div className="bg-gradient-to-br from-primary/10 via-background to-accent/10 h-48 flex items-center justify-center border-b border-border group-hover:from-primary/15 group-hover:to-accent/15 transition-all duration-300">
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="size-20 border border-border/70 bg-background/70 shadow-sm">
                    <AvatarFallback className="font-semibold text-primary">
                      {persona.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .slice(0, 2)
                        .toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Persona snapshot
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-1">{persona.name}</h3>
                  <p className="text-accent font-medium text-sm uppercase tracking-wide">{persona.role}</p>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                      <CheckCircle2Icon className="size-4 text-accent" /> Goals
                    </h4>
                    <ul className="space-y-3">
                      {persona.goals.map((goal, i) => (
                        <li key={i} className="text-foreground text-sm leading-relaxed flex gap-3">
                          <span className="text-accent/60 flex-shrink-0">•</span>
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-border pt-6">
                    <h4 className="font-bold text-xs uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                      <AlertTriangleIcon className="size-4 text-red-500/70" /> Pain Points
                    </h4>
                    <ul className="space-y-3">
                      {persona.painPoints.map((point, i) => (
                        <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-3">
                          <span className="text-red-500/40 flex-shrink-0">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
