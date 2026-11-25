import {
  AlertTriangleIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  LayoutDashboardIcon,
  MapIcon,
  MapPinIcon,
  WalletIcon,
} from 'lucide-react'

import Section from '@/components/clean-go/Section'

export default function FeaturesSection() {
  const features = [
    {
      title: 'Pickup Visibility',
      Icon: CalendarDaysIcon,
      description:
        'Residents view confirmed weekly schedules with exact dates and time windows for their address.',
    },
    {
      title: 'Live Tracking',
      Icon: MapPinIcon,
      description:
        'Real-time truck location and estimated arrival time reduce uncertainty during collection windows.',
    },
    {
      title: 'Issue Reporting',
      Icon: AlertTriangleIcon,
      description:
        'Structured complaint form with auto-attached location data and immediate confirmation ticket.',
    },
    {
      title: 'Payment Transparency',
      Icon: CreditCardIcon,
      description:
        'Clear billing history showing completed collections and any service credits or adjustments.',
    },
  ]

  const modules = [
    { name: 'Dashboard', Icon: LayoutDashboardIcon },
    { name: 'Schedule', Icon: CalendarDaysIcon },
    { name: 'Tracking', Icon: MapIcon },
    { name: 'Issues', Icon: AlertTriangleIcon },
    { name: 'Payments', Icon: WalletIcon },
  ]

  return (
    <Section
      id="features"
      eyebrow="7. Features"
      title="Modular architecture (resident ↔ operator transparency)"
      subtitle="CLEAN GO is structured around five modules that support predictability, reporting, and accountability across the service lifecycle."
      tone="subtle"
    >
      <div className="space-y-10">
        <div className="rounded-xl border border-border/70 bg-card p-6 md:p-8">
          <p className="text-base md:text-lg leading-relaxed">
            CLEAN GO is structured around <span className="font-semibold">five modular components</span> that work
            together to create a transparent, scalable waste collection ecosystem. Each module serves a specific
            function in the resident-to-operator workflow: <span className="font-semibold">Dashboard</span> for
            schedule overview, <span className="font-semibold">Schedule</span> for detailed weekly planning,{' '}
            <span className="font-semibold">Tracking</span> for live service visibility,{' '}
            <span className="font-semibold">Issue Reporting</span> for structured feedback, and{' '}
            <span className="font-semibold">Payments</span> for transparent billing. These modules can be deployed
            individually or as a complete platform.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Core modules
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {modules.map((module) => (
              <div
                key={module.name}
                className="rounded-xl border border-border/70 bg-card p-6 flex flex-col items-center justify-center text-center"
              >
                <div className="size-11 rounded-xl border border-border/70 bg-background flex items-center justify-center text-muted-foreground">
                  <module.Icon className="size-5" />
                </div>
                <div className="mt-3 text-sm font-semibold">{module.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Feature set
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-border/70 bg-card p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-xl border border-border/70 bg-background flex items-center justify-center text-muted-foreground">
                    <feature.Icon className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold tracking-tight">{feature.title}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-border/70 bg-card p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Upcoming pickups (sample)
            </div>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <div>Monday 8:00 AM</div>
              <div>Wednesday 9:30 AM</div>
              <div>Friday 8:00 AM</div>
            </div>
          </div>
          <div className="rounded-xl border border-border/70 bg-card p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Truck status (sample)
            </div>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <div>
                <span className="font-medium text-foreground">Truck ID:</span> CG-043
              </div>
              <div>
                <span className="font-medium text-foreground">Location:</span> 2.5 km away
              </div>
              <div>
                <span className="font-medium text-foreground">ETA:</span> 12 minutes
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-border/70 bg-card p-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Active issues (sample)
            </div>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <div>Missed pickup (1/15)</div>
              <div>
                <span className="font-medium text-foreground">Status:</span> In progress
              </div>
              <div>
                <span className="font-medium text-foreground">Ticket:</span> #CG-489
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

