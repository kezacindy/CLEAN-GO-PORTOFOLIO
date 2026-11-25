import Section from '@/components/clean-go/Section'

export default function ReflectionSection() {
  const learnings = [
    {
      title: 'Structured information reduces friction',
      body: 'Clear, consistent presentation of schedules and service status can transform confusion into confidence—particularly when residents must coordinate around narrow collection windows.',
    },
    {
      title: 'Acknowledgment is a design material',
      body: 'Immediate confirmation of a report (and visible progress thereafter) reduces the psychological burden of uncertainty and discourages repeated, unstructured escalation.',
    },
    {
      title: 'System boundaries define what users can trust',
      body: 'A platform can only improve trust if it makes commitments explicit: what is confirmed, what is delayed, and what will happen next for a specific address.',
    },
    {
      title: 'Multi-role design is not optional in civic systems',
      body: 'Designing for residents alone risks creating a “reporting sink.” Operator workflows and municipal oversight are necessary for resolution, governance, and adoption.',
    },
  ]

  const futureDirections = [
    'Usability testing with residents and operators in Kigali to validate assumptions and refine workflows.',
    'Operator dashboard with route optimization, performance analytics, and resident feedback visualization.',
    'Advanced route optimization algorithms to reduce fuel costs and environmental impact.',
    'Accessibility evaluation and multi-language support for broader adoption across linguistic communities.',
  ]

  return (
    <Section
      id="reflection"
      eyebrow="11. Reflection"
      title="Lessons learned and future research directions"
      subtitle="The case study is a design argument: where uncertainty emerges, how it is experienced, and which interaction patterns can meaningfully shift service coordination."
      tone="subtle"
    >
      <div className="space-y-10">
        <div className="rounded-xl border border-border/70 bg-card p-6 md:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Key learnings
          </h3>
          <div className="mt-5 space-y-5">
            {learnings.map((item, i) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex-shrink-0 size-9 rounded-lg border border-border/70 bg-background flex items-center justify-center text-xs font-semibold text-muted-foreground">
                  {i + 1}
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold tracking-tight">{item.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border/70 bg-card p-6 md:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Next steps
          </h3>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
            {futureDirections.map((text) => (
              <div key={text} className="rounded-xl border border-border/60 bg-background p-5">
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border/70 bg-card p-6 md:p-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Closing statement
          </h3>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-muted-foreground italic">
            “This case study reflects a belief that thoughtfully designed digital systems can reduce friction in
            essential urban services. The shift from informal coordination to transparent, data-driven waste
            management illustrates how HCI principles—clarity, feedback, control, and system visibility—translate
            into meaningful change. I am interested in continuing work at the intersection of civic digital systems
            and urban infrastructure, focusing on how technology can rebuild trust and resilience in cities.”
          </p>
        </div>

        <div className="text-center pt-8 border-t border-border/60">
          <p className="text-muted-foreground text-sm font-medium">
            CLEAN GO — UX/HCI Case Study · React Implementation · 2024
          </p>
        </div>
      </div>
    </Section>
  )
}

