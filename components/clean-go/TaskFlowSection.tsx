import {
  BadgeCheckIcon,
  ClipboardListIcon,
  HistoryIcon,
  LayoutDashboardIcon,
  MapPinIcon,
  PencilLineIcon,
  SendIcon,
  SmartphoneIcon,
  TargetIcon,
  TriangleAlertIcon,
} from 'lucide-react'

import Section from '@/components/clean-go/Section'

export default function TaskFlowSection() {
  const steps = [
    { label: 'Start', Icon: TargetIcon },
    { label: 'Open App', Icon: SmartphoneIcon },
    { label: 'Dashboard', Icon: LayoutDashboardIcon },
    { label: 'Report Issue', Icon: TriangleAlertIcon },
    { label: 'Select Type', Icon: ClipboardListIcon },
    { label: 'Add Details', Icon: PencilLineIcon },
    { label: 'Auto Location', Icon: MapPinIcon },
    { label: 'Submit', Icon: SendIcon },
    { label: 'Confirmation', Icon: BadgeCheckIcon },
    { label: 'Track History', Icon: HistoryIcon },
  ]

  return (
    <Section
      id="taskflow"
      eyebrow="6. Task flow"
      title="Streamlined issue reporting"
      subtitle="A 10-step flow designed to minimize friction and reduce uncertainty through automation (location) and immediate acknowledgment (confirmation + ticket)."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 rounded-xl border border-border/70 bg-card p-6 md:p-8">
          <ol className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step, index) => (
              <li key={step.label} className="rounded-xl border border-border/60 bg-background p-4">
                <div className="flex items-start gap-3">
                  <div className="size-10 rounded-xl border border-border/70 bg-card flex items-center justify-center text-muted-foreground">
                    <step.Icon className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Step {index + 1}
                    </div>
                    <div className="mt-1 text-sm font-medium text-foreground">{step.label}</div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="rounded-xl border border-border/70 bg-card p-6 md:p-8">
          <h3 className="text-base font-semibold tracking-tight">Interaction rationale</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            This streamlined task flow reduces friction in issue reporting by automating location attachment and
            providing immediate confirmation. Residents do not need to type their address or wonder whether their
            report was received—the system acknowledges submission and logs it in complaint history for reference.
          </p>
          <div className="mt-5 rounded-xl border border-border/60 bg-background p-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Key principle
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Replace “guessing” with “state”: confirmed schedule, actionable report, visible resolution.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  )
}

