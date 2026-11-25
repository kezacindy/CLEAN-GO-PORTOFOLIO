import Section from '@/components/clean-go/Section'

export default function EvaluationSection() {
  return (
    <Section
      id="evaluation"
      eyebrow="9. Evaluation & testing"
      title="How the design would be validated"
      subtitle="Even as a portfolio prototype, CLEAN GO is framed with an evaluation plan: what to test, with whom, and how success is measured."
      tone="subtle"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-border/70 bg-card p-6 md:p-8">
            <h3 className="text-base font-semibold tracking-tight">Conceptual usability study</h3>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
              The core evaluation question is whether the platform reduces uncertainty at critical moments: before a
              pickup (anticipation), during the pickup window (status), and after a breakdown (reporting and
              reassurance).
            </p>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border/60 bg-background p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Participants</div>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>6–8 residents (mixed digital literacy)</li>
                  <li>3–5 operators / supervisors</li>
                  <li>Optional: municipal representative (governance view)</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-background p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tasks</div>
                <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                  <li>Check next pickup + interpret confidence</li>
                  <li>Report missed pickup + verify confirmation</li>
                  <li>Track ticket status + understand operator notes</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-6 md:p-8">
            <h3 className="text-base font-semibold tracking-tight">Measures (what “better” means)</h3>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border border-border/60 bg-background p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Comprehension
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Can participants correctly explain the next expected service state for their address?
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Efficiency
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Time-on-task and error rate for reporting and locating ticket status.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-background p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Trust proxy
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Perceived reliability and “feeling acknowledged” after submitting a report.
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h3 className="text-base font-semibold tracking-tight">Future testing directions</h3>
            <ul className="mt-3 text-sm leading-relaxed text-muted-foreground space-y-2">
              <li>Field pilot to compare reported vs. actual pickup outcomes (ground truth).</li>
              <li>Longitudinal diary study to capture changing trust over multiple weeks.</li>
              <li>Operator workflow evaluation (triage, routing, response notes).</li>
              <li>Accessibility review for elderly users and low-literacy contexts.</li>
            </ul>
          </div>
        </aside>
      </div>
    </Section>
  )
}

