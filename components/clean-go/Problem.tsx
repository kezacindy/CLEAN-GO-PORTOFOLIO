import { ClipboardListIcon, SparklesIcon } from 'lucide-react'

export default function Problem() {
  return (
    <section id="problem" className="py-32 md:py-40 px-6 md:px-12 bg-background border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">1. The Challenge</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-pretty leading-tight">
            The Coordination Gap in Urban Waste Collection
          </h2>
        </div>

        <div className="space-y-6 mb-16 border-l-2 border-accent/30 pl-8">
          <p className="text-lg leading-relaxed text-foreground">
            In Kigali, Rwanda, waste collection operates through informal manual coordination. Residents must remember collection schedules from memory, and communication between households and waste collectors happens through word-of-mouth or sporadic text messages. When pickups are missed, there is no structured way to report issues, leaving residents uncertain about next steps and collectors without critical feedback.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            This fragmented system creates uncertainty, inconsistency, and difficulty scaling to serve growing urban populations. The lack of visibility across the service ecosystem—for both residents and operators—results in trust issues and operational inefficiency.
          </p>
        </div>

        {/* Design Challenge */}
        <div className="mb-16 bg-accent/5 border border-accent/20 rounded-xl p-8 md:p-10">
          <h3 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">Design Challenge</h3>
          <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic">
            How might we design a scalable digital system that improves transparency, predictability, and trust in urban waste collection services?
          </p>
        </div>

        {/* System Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="group">
            <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Current State</h4>
            <div className="bg-secondary/50 border border-border rounded-xl p-10 min-h-56 flex flex-col items-center justify-center text-muted-foreground group-hover:border-border/80 group-hover:bg-secondary/70 transition-all duration-300">
              <div className="text-center space-y-3">
                <div className="mx-auto size-12 rounded-xl border border-border/60 bg-background/60 flex items-center justify-center">
                  <ClipboardListIcon className="size-6" />
                </div>
                <div className="text-sm font-medium">Current Manual System</div>
                <div className="text-xs text-muted-foreground/70">Word-of-mouth, inconsistent feedback</div>
              </div>
            </div>
          </div>
          <div className="group">
            <h4 className="text-sm font-bold uppercase tracking-wider text-accent mb-4">Proposed Solution</h4>
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-10 min-h-56 flex flex-col items-center justify-center text-accent group-hover:border-accent/50 group-hover:bg-accent/15 transition-all duration-300">
              <div className="text-center space-y-3">
                <div className="mx-auto size-12 rounded-xl border border-accent/30 bg-background/40 flex items-center justify-center">
                  <SparklesIcon className="size-6" />
                </div>
                <div className="text-sm font-medium text-foreground">CLEAN GO Digital System</div>
                <div className="text-xs text-accent/70">Transparent, real-time, accountable</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
