import { FileTextIcon, MapIcon } from 'lucide-react'

export default function UserJourney() {
  const journeyStages = [
    {
      stage: 'Check Status',
      action: 'Opens app to check next pickup date',
      emotion: 'Curious',
      painPoint: 'Worried schedule may have changed',
      response: 'Dashboard displays confirmed next pickup in 48 hours'
    },
    {
      stage: 'Wait for Pickup',
      action: 'Monitors time approaching pickup window',
      emotion: 'Anticipatory',
      painPoint: 'Unsure if collector will actually arrive',
      response: 'Receives notification 1 hour before scheduled pickup'
    },
    {
      stage: 'Discover Issue',
      action: 'Collector does not arrive at scheduled time',
      emotion: 'Frustrated',
      painPoint: 'No way to report problem',
      response: 'Issue reporting feature visible on dashboard'
    },
    {
      stage: 'Report Issue',
      action: 'Fills out structured complaint form',
      emotion: 'Empowered',
      painPoint: 'Fears report will be ignored',
      response: 'Receives confirmation and ticket number immediately'
    },
    {
      stage: 'Track Resolution',
      action: 'Checks issue history to see status updates',
      emotion: 'Reassured',
      painPoint: 'Uncertain if issue is being addressed',
      response: 'Views operator notes and estimated resolution date'
    }
  ]

  return (
    <section id="journey" className="py-32 md:py-40 px-6 md:px-12 bg-background border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">3. User Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pretty leading-tight">
            Missed Pickup Scenario
          </h2>
          <p className="text-lg text-muted-foreground">
            Following a resident through the critical moment of discovering and reporting a missed collection.
          </p>
        </div>

        {/* Journey Table */}
        <div className="overflow-x-auto mb-16 rounded-xl border border-border bg-background">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/50">
                <th className="px-6 py-4 font-bold text-foreground text-xs uppercase tracking-wider">Stage</th>
                <th className="px-6 py-4 font-bold text-foreground text-xs uppercase tracking-wider">User Action</th>
                <th className="px-6 py-4 font-bold text-foreground text-xs uppercase tracking-wider">Emotion</th>
                <th className="px-6 py-4 font-bold text-foreground text-xs uppercase tracking-wider">Pain Point</th>
                <th className="px-6 py-4 font-bold text-accent text-xs uppercase tracking-wider">System Response</th>
              </tr>
            </thead>
            <tbody>
              {journeyStages.map((item, i) => (
                <tr
                  key={i}
                  className="border-b border-border hover:bg-accent/5 transition-colors group"
                >
                  <td className="px-6 py-5 font-semibold text-foreground group-hover:text-accent transition-colors">{item.stage}</td>
                  <td className="px-6 py-5 text-foreground">{item.action}</td>
                  <td className="px-6 py-5 text-muted-foreground font-medium">{item.emotion}</td>
                  <td className="px-6 py-5 text-red-600/70 text-sm">{item.painPoint}</td>
                  <td className="px-6 py-5 text-accent font-medium">{item.response}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-xl p-8 md:p-10 mb-16">
          <p className="text-lg text-foreground leading-relaxed italic">
            "A structured interaction model reduces uncertainty at critical moments, providing reassurance that the service system acknowledges and addresses resident concerns."
          </p>
        </div>

        {/* Screen Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Tracking Map Screen</h4>
            <div className="bg-gradient-to-br from-secondary/50 to-secondary/20 border border-border rounded-xl p-10 min-h-72 flex flex-col items-center justify-center text-muted-foreground group-hover:border-border/80 group-hover:bg-secondary/30 transition-all duration-300">
              <div className="text-center space-y-3">
                <div className="mx-auto size-12 rounded-xl border border-border/60 bg-background/60 flex items-center justify-center">
                  <MapIcon className="size-6" />
                </div>
                <div className="text-sm font-medium">Live Truck Tracking</div>
                <div className="text-xs text-muted-foreground/70">Real-time location & ETA</div>
              </div>
            </div>
          </div>
          <div className="group">
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">Complaint Submission</h4>
            <div className="bg-gradient-to-br from-accent/15 to-accent/5 border border-accent/30 rounded-xl p-10 min-h-72 flex flex-col items-center justify-center text-accent group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
              <div className="text-center space-y-3">
                <div className="mx-auto size-12 rounded-xl border border-accent/30 bg-background/40 flex items-center justify-center">
                  <FileTextIcon className="size-6" />
                </div>
                <div className="text-sm font-medium text-foreground">Issue Report Form</div>
                <div className="text-xs text-accent/70">Auto-location attached</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
