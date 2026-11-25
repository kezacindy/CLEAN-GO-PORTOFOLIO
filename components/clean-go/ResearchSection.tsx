import Section from '@/components/clean-go/Section'

export default function ResearchSection() {
  return (
    <Section
      id="research"
      eyebrow="1. Research & insights"
      title="From uncertainty to system visibility"
      subtitle="This section articulates the research stance, working assumptions, and synthesized insights that inform the design challenge."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h3 className="text-base font-semibold tracking-tight">Research stance (assumptions)</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Visibility is a service quality signal.</span>{' '}
                When schedules and service status are opaque, residents interpret missed pickups as neglect—even
                when root causes are operational constraints.
              </li>
              <li>
                <span className="font-medium text-foreground">Feedback loops reduce emotional load.</span>{' '}
                A simple confirmation and ticket trail can reduce repeated reporting and uncertainty after service failures.
              </li>
              <li>
                <span className="font-medium text-foreground">System-level accountability requires multi-role design.</span>{' '}
                A resident-only interface cannot resolve coordination gaps without corresponding operator and municipal touchpoints.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h3 className="text-base font-semibold tracking-tight">Key synthesized insights</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border/60 bg-background p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Insight 1
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  The most critical information is not “where the truck is,” but whether a pickup is still expected
                  for a specific address today.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Insight 2
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Residents need a low-effort reporting path that does not require phone calls or repeated follow-up.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Insight 3
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Operators benefit from structured issue categorization and location metadata to prioritize routes and resolve disputes.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Insight 4
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Trust is shaped by timing and acknowledgment: early notifications and “receipt of report” messages change perceived reliability.
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h3 className="text-base font-semibold tracking-tight">Design challenge</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground italic">
              “How might we design a scalable digital system that improves transparency, predictability, and trust in
              urban waste collection services?”
            </p>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h3 className="text-base font-semibold tracking-tight">Method note</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              The case study is presented as an HCI reasoning artifact: a structured argument linking observed
              coordination breakdowns to interaction patterns (status, feedback, control) and to system roles.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  )
}

