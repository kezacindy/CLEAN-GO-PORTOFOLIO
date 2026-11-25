import type { LucideIcon } from 'lucide-react'
import {
  AlertTriangleIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  LayoutDashboardIcon,
  MapIcon,
  MapPinIcon,
  WalletIcon,
} from 'lucide-react'

export default function SystemDesign() {
  const features: { title: string; Icon: LucideIcon; description: string }[] = [
    {
      title: 'Pickup Visibility',
      Icon: CalendarDaysIcon,
      description: 'Residents view confirmed weekly schedules with exact dates and time windows for their address.'
    },
    {
      title: 'Live Tracking',
      Icon: MapPinIcon,
      description: 'Real-time truck location and estimated arrival time reduce uncertainty during collection windows.'
    },
    {
      title: 'Issue Reporting',
      Icon: AlertTriangleIcon,
      description: 'Structured complaint form with auto-attached location data and immediate confirmation ticket.'
    },
    {
      title: 'Payment Transparency',
      Icon: CreditCardIcon,
      description: 'Clear billing history showing completed collections and any service credits or adjustments.'
    }
  ]

  const modules: { name: string; Icon: LucideIcon }[] = [
    { name: 'Dashboard', Icon: LayoutDashboardIcon },
    { name: 'Schedule', Icon: CalendarDaysIcon },
    { name: 'Tracking', Icon: MapIcon },
    { name: 'Issues', Icon: AlertTriangleIcon },
    { name: 'Payments', Icon: WalletIcon },
  ]

  return (
    <section id="features" className="py-32 md:py-40 px-6 md:px-12 bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">5. System Design</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pretty leading-tight">
            Modular Architecture
          </h2>
          <p className="text-lg text-muted-foreground">
            Five interconnected modules creating a transparent, scalable waste ecosystem.
          </p>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 md:p-10 mb-20">
          <p className="text-lg leading-relaxed text-foreground">
            CLEAN GO is structured around <span className="font-semibold">five modular components</span> that work together to create a transparent, scalable waste collection ecosystem. Each module serves a specific function in the resident-to-operator workflow: <span className="font-bold">Dashboard</span> for schedule overview, <span className="font-bold">Schedule</span> for detailed weekly planning, <span className="font-bold">Tracking</span> for live service visibility, <span className="font-bold">Issue Reporting</span> for structured feedback, and <span className="font-bold">Payments</span> for transparent billing. These modules can be deployed individually or as a complete platform.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group bg-background border border-border rounded-xl p-8 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                <div className="size-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent/15 transition-colors">
                  <feature.Icon className="size-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">{feature.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* System Modules */}
        <div className="mb-20">
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-8">Core Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {modules.map((module) => (
              <div
                key={module.name}
                className="group bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/30 rounded-xl p-8 flex flex-col items-center justify-center text-center h-40 hover:from-accent/25 hover:to-accent/10 hover:border-accent/50 transition-all duration-300"
              >
                <div className="size-12 rounded-xl bg-background/45 border border-accent/25 flex items-center justify-center text-accent mb-3 group-hover:scale-105 transition-transform duration-300">
                  <module.Icon className="size-6" />
                </div>
                <div className="text-sm font-bold text-foreground">{module.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Data Visualization */}
        <div className="bg-secondary/50 border border-border/50 rounded-xl p-10 md:p-12 space-y-8 mb-16">
          <h3 className="text-lg font-bold text-foreground">Real-Time Data & Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-md transition-all duration-300">
              <div className="text-xs uppercase font-bold text-accent mb-4">Upcoming Pickups</div>
              <div className="space-y-3 text-sm text-foreground">
                <p className="flex items-center gap-2"><span>✓</span> Monday 8:00 AM</p>
                <p className="flex items-center gap-2"><span>→</span> Wednesday 9:30 AM</p>
                <p className="flex items-center gap-2"><span>→</span> Friday 8:00 AM</p>
              </div>
            </div>
            <div className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-md transition-all duration-300">
              <div className="text-xs uppercase font-bold text-accent mb-4">Truck Status</div>
              <div className="space-y-3 text-sm text-foreground">
                <p><span className="font-medium">Truck ID:</span> CG-043</p>
                <p><span className="font-medium">Location:</span> 2.5 km away</p>
                <p><span className="font-medium">ETA:</span> 12 minutes</p>
              </div>
            </div>
            <div className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 hover:shadow-md transition-all duration-300">
              <div className="text-xs uppercase font-bold text-accent mb-4">Active Issues</div>
              <div className="space-y-3 text-sm text-foreground">
                <p>Missed pickup (1/15)</p>
                <p><span className="font-medium text-accent">Status:</span> In Progress</p>
                <p><span className="font-medium">Ticket:</span> #CG-489</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/30 rounded-xl p-12 min-h-64 flex flex-col items-center justify-center text-center hover:from-accent/25 hover:to-accent/10 transition-all duration-300">
            <div className="size-14 rounded-2xl bg-background/45 border border-accent/25 flex items-center justify-center text-accent mb-4">
              <MapIcon className="size-7" />
            </div>
            <div className="text-lg font-bold text-foreground mb-2">Live Tracking Screen</div>
            <div className="text-sm text-muted-foreground">Real-time truck position & ETA</div>
          </div>
          <div className="group bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/30 rounded-xl p-12 min-h-64 flex flex-col items-center justify-center text-center hover:from-primary/25 hover:to-primary/10 transition-all duration-300">
            <div className="size-14 rounded-2xl bg-background/45 border border-primary/25 flex items-center justify-center text-primary mb-4">
              <CreditCardIcon className="size-7" />
            </div>
            <div className="text-lg font-bold text-foreground mb-2">Payment History</div>
            <div className="text-sm text-muted-foreground">Clear billing & service records</div>
          </div>
        </div>
      </div>
    </section>
  )
}
