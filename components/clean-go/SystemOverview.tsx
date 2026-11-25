import Section from '@/components/clean-go/Section'

export default function SystemOverview() {
  return (
    <Section
      id="system-overview"
      eyebrow="3. System overview"
      title="A multi-stakeholder service system"
      subtitle="CLEAN GO is framed as a socio-technical system: residents, operators, and municipal oversight rely on shared information to coordinate service delivery."
      tone="subtle"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 rounded-xl border border-border/70 bg-card p-6 md:p-8">
          <h3 className="text-base font-semibold tracking-tight">Stakeholders and relationships</h3>
          <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
            The design aims to make service state legible across roles. Residents need predictability and a credible
            escalation path; operators need structured input and route-level visibility; municipalities need
            aggregated signals for governance, service quality, and accountability.
          </p>

          <div className="mt-6 rounded-xl border border-border/60 bg-background p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
              <div className="rounded-xl border border-border/60 bg-card p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Residents
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>Schedule certainty</li>
                  <li>Status during pickup windows</li>
                  <li>Low-effort reporting & confirmation</li>
                </ul>
              </div>

              <div className="rounded-xl border border-accent/25 bg-accent/10 p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  CLEAN GO platform
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>Shared service state per address</li>
                  <li>Structured issue tickets</li>
                  <li>Role-based dashboards</li>
                </ul>
              </div>

              <div className="rounded-xl border border-border/60 bg-card p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Operators & municipality
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>Operational visibility</li>
                  <li>Issue triage & resolution notes</li>
                  <li>Service quality metrics</li>
                </ul>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl border border-border/60 bg-card p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Information flows (placeholder)
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Residents → issue report → platform → operator triage → status updates → residents. Municipality
                  receives aggregated indicators (missed pickups, resolution time) rather than personal data.
                </p>
              </div>
              <div className="rounded-xl border border-border/60 bg-card p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Accountability boundary
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  The platform makes commitments explicit (confirmed schedule, ticket receipt, resolution status),
                  reducing ambiguity about whether the system has “heard” the resident.
                </p>
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h3 className="text-base font-semibold tracking-tight">System diagram (structured placeholder)</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Replace this block with a stakeholder map or service blueprint. The intent is to present CLEAN GO as a
              governance and coordination layer, not merely a mobile UI.
            </p>
            <div className="mt-5 rounded-xl border border-border/60 bg-background p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Diagram placeholder
              </div>
              <div className="mt-3 h-40 rounded-lg border border-dashed border-border flex items-center justify-center text-xs text-muted-foreground">
                Residents ↔ Platform ↔ Operators ↔ Municipality
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  )
}

