import Section from '@/components/clean-go/Section'

export default function UserJourneySection() {
  const journeyStages = [
    {
      stage: 'Check Status',
      action: 'Opens app to check next pickup date',
      emotion: 'Curious',
      painPoint: 'Worried schedule may have changed',
      response: 'Dashboard displays confirmed next pickup in 48 hours',
    },
    {
      stage: 'Wait for Pickup',
      action: 'Monitors time approaching pickup window',
      emotion: 'Anticipatory',
      painPoint: 'Unsure if collector will actually arrive',
      response: 'Receives notification 1 hour before scheduled pickup',
    },
    {
      stage: 'Discover Issue',
      action: 'Collector does not arrive at scheduled time',
      emotion: 'Frustrated',
      painPoint: 'No way to report problem',
      response: 'Issue reporting feature visible on dashboard',
    },
    {
      stage: 'Report Issue',
      action: 'Fills out structured complaint form',
      emotion: 'Empowered',
      painPoint: 'Fears report will be ignored',
      response: 'Receives confirmation and ticket number immediately',
    },
    {
      stage: 'Track Resolution',
      action: 'Checks issue history to see status updates',
      emotion: 'Reassured',
      painPoint: 'Uncertain if issue is being addressed',
      response: 'Views operator notes and estimated resolution date',
    },
  ]

  return (
    <Section
      id="journey"
      eyebrow="5. User journey"
      title="Missed pickup scenario (service breakdown)"
      subtitle="A scenario-based journey map focused on a critical breakdown moment: discovery of a missed pickup and the resident’s path to reporting and reassurance."
      tone="subtle"
    >
      <div className="rounded-xl border border-border/70 bg-card overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border/60 bg-secondary/40">
              <th className="px-6 py-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">
                Stage
              </th>
              <th className="px-6 py-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">
                User action
              </th>
              <th className="px-6 py-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">
                Emotion
              </th>
              <th className="px-6 py-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">
                Pain point
              </th>
              <th className="px-6 py-4 font-semibold text-muted-foreground text-xs uppercase tracking-wider">
                System response
              </th>
            </tr>
          </thead>
          <tbody>
            {journeyStages.map((item) => (
              <tr key={item.stage} className="border-b border-border/60 hover:bg-secondary/30">
                <td className="px-6 py-5 font-semibold text-foreground">{item.stage}</td>
                <td className="px-6 py-5 text-muted-foreground">{item.action}</td>
                <td className="px-6 py-5 text-muted-foreground">{item.emotion}</td>
                <td className="px-6 py-5 text-muted-foreground">{item.painPoint}</td>
                <td className="px-6 py-5 text-foreground">{item.response}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-10 rounded-xl border border-border/70 bg-card p-6 md:p-8">
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground italic">
          “A structured interaction model reduces uncertainty at critical moments, providing reassurance that the
          service system acknowledges and addresses resident concerns.”
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-border/70 bg-card p-6 md:p-8">
          <h3 className="text-sm font-semibold tracking-tight">Tracking map screen (placeholder)</h3>
          <div className="mt-4 h-44 rounded-lg border border-dashed border-border flex items-center justify-center text-xs text-muted-foreground">
            Live truck tracking (location & ETA)
          </div>
        </div>
        <div className="rounded-xl border border-border/70 bg-card p-6 md:p-8">
          <h3 className="text-sm font-semibold tracking-tight">Complaint submission (placeholder)</h3>
          <div className="mt-4 h-44 rounded-lg border border-dashed border-border flex items-center justify-center text-xs text-muted-foreground">
            Structured issue form (auto-location attached)
          </div>
        </div>
      </div>
    </Section>
  )
}

