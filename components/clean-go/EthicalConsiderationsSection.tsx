import Section from '@/components/clean-go/Section'

export default function EthicalConsiderationsSection() {
  return (
    <Section
      id="ethics"
      eyebrow="10. Ethical & accessibility considerations"
      title="Designing for transparency without surveillance"
      subtitle="The platform handles sensitive location and service data. The design must create accountability while limiting harm, exclusion, and unintended monitoring."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-xl border border-border/70 bg-card p-6 md:p-8">
            <h3 className="text-base font-semibold tracking-tight">Data privacy</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Data minimization:</span> collect only what is required
                to coordinate service (address-level schedule, issue type, coarse location for reports).
              </li>
              <li>
                <span className="font-medium text-foreground">Purpose limitation:</span> location metadata is used for
                routing and validation, not for tracking individuals.
              </li>
              <li>
                <span className="font-medium text-foreground">Retention and deletion:</span> issue logs have defined
                retention windows with user-visible policies.
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-6 md:p-8">
            <h3 className="text-base font-semibold tracking-tight">Transparency and governance</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Explain the system state:</span> “confirmed” vs “planned”
                vs “delayed” must be defined and consistently applied.
              </li>
              <li>
                <span className="font-medium text-foreground">Auditability:</span> ticket history shows what was
                reported, when it was received, and how it was resolved—without exposing personal details publicly.
              </li>
              <li>
                <span className="font-medium text-foreground">Dispute handling:</span> include a clear escalation path
                when residents contest resolution outcomes.
              </li>
            </ul>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h3 className="text-base font-semibold tracking-tight">Accessibility</h3>
            <ul className="mt-3 text-sm leading-relaxed text-muted-foreground space-y-2">
              <li>Large touch targets and clear contrast for outdoor use.</li>
              <li>Plain language labels (avoid technical jargon in status messaging).</li>
              <li>Support for elderly users: simplified modes and reduced cognitive load.</li>
              <li>Multi-language pathway and icon + text redundancy.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h3 className="text-base font-semibold tracking-tight">Risk note</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              “More visibility” can become “more surveillance” if mis-scoped. The system should prioritize service
              state visibility over person-level monitoring.
            </p>
          </div>
        </aside>
      </div>
    </Section>
  )
}

