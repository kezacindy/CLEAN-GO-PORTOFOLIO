import type { LucideIcon } from 'lucide-react'
import {
  AtomIcon,
  BellRingIcon,
  DatabaseIcon,
  LayersIcon,
  MapPinIcon,
  ServerIcon,
} from 'lucide-react'

export default function TechnicalImplementation() {
  const stackItems: { category: string; Icon: LucideIcon; items: string[] }[] = [
    {
      category: 'Frontend',
      Icon: AtomIcon,
      items: ['React.js', 'TypeScript', 'Tailwind CSS', 'Real-time Maps']
    },
    {
      category: 'Backend',
      Icon: ServerIcon,
      items: ['Node.js/Python', 'PostgreSQL', 'Geolocation API', 'WebSocket']
    },
    {
      category: 'Data',
      Icon: DatabaseIcon,
      items: ['Time-series DB', 'Complaint Logs', 'User Sessions', 'Analytics']
    }
  ]

  const highlights: { Icon: LucideIcon; title: string; description: string }[] = [
    {
      Icon: LayersIcon,
      title: 'Modular Components',
      description: 'Each feature is self-contained with independent state management, API integration, and UI layer for seamless iteration.'
    },
    {
      Icon: MapPinIcon,
      title: 'Location-Based Scheduling',
      description: 'Geolocation APIs enable precise truck positioning and automatic neighborhood-based schedule assignment.'
    },
    {
      Icon: DatabaseIcon,
      title: 'Structured Logging',
      description: 'Complaint data captured with metadata enables analytics and pattern detection for continuous service improvements.'
    },
    {
      Icon: BellRingIcon,
      title: 'Real-time Events',
      description: 'WebSocket-based system allows push notifications for pickups, schedule changes, and status updates.'
    }
  ]

  return (
    <section id="implementation" className="py-32 md:py-40 px-6 md:px-12 bg-secondary/30 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">6. Technical Implementation</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pretty leading-tight">
            Bridging Design & Development
          </h2>
          <p className="text-lg text-muted-foreground">
            A modular React architecture built for production-ready scalability.
          </p>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 md:p-10 mb-16">
          <p className="text-lg leading-relaxed text-foreground">
            CLEAN GO is implemented as a <span className="font-semibold">modular React.js application</span> designed for scalability and maintainability. The architecture separates concerns into feature-based components allowing each to be developed, tested, and deployed independently. The system integrates with geolocation APIs, time-series databases, and structured logging. This <span className="font-bold">backend-ready design</span> ensures that the prototype extends into production with minimal refactoring.
          </p>
        </div>

        {/* Technical Stack */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stackItems.map((stack, i) => (
            <div
              key={i}
              className="group bg-background border border-border rounded-xl p-8 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <stack.Icon className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{stack.category}</h3>
              </div>
              <ul className="space-y-3">
                {stack.items.map((item, j) => (
                  <li key={j} className="text-sm text-foreground/80 flex items-center gap-2">
                    <span className="w-1 h-1 bg-accent rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Architecture Diagram Placeholder */}
        <div className="mb-16">
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">System Architecture</h3>
          <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-accent/10 border border-accent/30 rounded-xl p-16 flex items-center justify-center min-h-72 hover:from-accent/15 hover:to-accent/15 transition-all duration-300">
            <div className="text-center space-y-4 max-w-2xl">
              <div className="size-14 rounded-2xl bg-background/45 border border-accent/25 flex items-center justify-center text-accent mx-auto">
                <LayersIcon className="size-7" />
              </div>
              <div className="text-lg font-bold text-foreground">Resident ↔ CLEAN GO System ↔ Operator</div>
              <div className="text-sm text-muted-foreground">Seamless data flow with real-time synchronization across all user roles</div>
            </div>
          </div>
        </div>

        {/* Implementation Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((highlight, i) => (
            <div
              key={i}
              className="group bg-background border border-border rounded-xl p-8 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                <div className="size-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/15 transition-colors">
                  <highlight.Icon className="size-6" />
                </div>
              </div>
              <h4 className="font-bold text-foreground mb-3 group-hover:text-accent transition-colors">{highlight.title}</h4>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
