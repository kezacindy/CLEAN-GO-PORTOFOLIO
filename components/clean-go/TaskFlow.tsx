import type { LucideIcon } from 'lucide-react'
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

export default function TaskFlow() {
  const steps: { label: string; Icon: LucideIcon }[] = [
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
    <section id="taskflow" className="py-32 md:py-40 px-6 md:px-12 bg-secondary/30 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">4. Task Flow</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pretty leading-tight">
            Streamlined Issue Reporting
          </h2>
          <p className="text-lg text-muted-foreground">
            10 steps optimized for simplicity and friction reduction.
          </p>
        </div>

        {/* Vertical Flow Diagram */}
        <div className="flex flex-col items-center mb-16 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              {/* Step Circle */}
              <div className="w-20 h-20 rounded-full bg-background/70 backdrop-blur-sm border border-border/70 text-foreground flex flex-col items-center justify-center font-semibold mb-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative z-10">
                <div className="size-9 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-2">
                  <step.Icon className="size-5" />
                </div>
                <div className="text-[11px] text-muted-foreground font-semibold">{index + 1}</div>
              </div>

              {/* Step Label */}
              <p className="text-center font-semibold text-foreground mb-8 text-base">
                {step.label}
              </p>

              {/* Arrow to Next Step (except last) */}
              {index < steps.length - 1 && (
                <div className="w-px h-20 bg-gradient-to-b from-border via-border/60 to-transparent mb-6"></div>
              )}
            </div>
          ))}
        </div>

        {/* Explanation */}
        <div className="bg-background border border-border/50 rounded-xl p-10 md:p-12 mb-16">
          <p className="text-lg leading-relaxed text-foreground">
            This streamlined task flow <span className="font-semibold text-accent">reduces friction in issue reporting</span> by automating location attachment and providing immediate confirmation. Residents don't need to type their address or worry whether their report was received—the system acknowledges submission and logs it in their complaint history for future reference.
          </p>
        </div>

        {/* Visual Representation */}
        <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/20 rounded-xl p-12 flex items-center justify-center min-h-56 text-muted-foreground hover:from-accent/15 hover:to-accent/15 transition-all duration-300">
          <div className="text-center space-y-4">
            <div className="mx-auto size-14 rounded-2xl border border-accent/25 bg-background/40 flex items-center justify-center text-accent">
              <SendIcon className="size-6" />
            </div>
            <div className="text-lg font-medium text-foreground">Complete User Flow Visualization</div>
            <div className="text-sm text-muted-foreground">Interactive diagram with state transitions</div>
          </div>
        </div>
      </div>
    </section>
  )
}
