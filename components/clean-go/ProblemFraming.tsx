import { ClipboardListIcon, SparklesIcon } from 'lucide-react'

import Section from '@/components/clean-go/Section'

export default function ProblemFraming() {
  return (
    <Section
      id="problem"
      eyebrow="2. Problem framing"
      title="The coordination gap in urban waste collection"
      subtitle="In Kigali, collection depends on informal and manual coordination. The central design problem is not only missed pickups, but the absence of shared, reliable system state."
    >
      <div className="space-y-10">
        <div className="rounded-xl border border-border/70 bg-card p-6 md:p-8">
          <div className="space-y-4">
            <p className="text-base md:text-lg leading-relaxed">
              In Kigali, Rwanda, waste collection operates through informal manual coordination. Residents must
              remember collection schedules from memory, and communication between households and waste collectors
              happens through word-of-mouth or sporadic text messages. When pickups are missed, there is no
              structured way to report issues, leaving residents uncertain about next steps and collectors without
              critical feedback.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              This fragmented system creates uncertainty, inconsistency, and difficulty scaling to serve growing
              urban populations. The lack of visibility across the service ecosystem—for both residents and
              operators—results in trust issues and operational inefficiency.
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-border/70 bg-secondary/30 p-6 md:p-8">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Design challenge
          </h3>
          <p className="mt-3 text-lg md:text-xl leading-relaxed italic">
            How might we design a scalable digital system that improves transparency, predictability, and trust in
            urban waste collection services?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border/70 bg-card p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-xl border border-border/70 bg-background flex items-center justify-center text-muted-foreground">
                <ClipboardListIcon className="size-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-semibold tracking-tight">Current state</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Manual schedules, inconsistent feedback, and unclear accountability. Residents cannot verify whether
                  a pickup is still expected; operators receive unstructured reports without actionable metadata.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="size-10 rounded-xl border border-accent/25 bg-accent/10 flex items-center justify-center text-foreground">
                <SparklesIcon className="size-5" />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-semibold tracking-tight">Proposed direction</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A shared service state: confirmed schedules per address, status updates during collection windows,
                  and structured issue reporting with confirmation and traceability for resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

