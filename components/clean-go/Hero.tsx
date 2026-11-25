import { ArrowDownIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-28 md:px-12 pt-28"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold uppercase tracking-wider mb-6 hover:bg-accent/15 transition-colors">
            UX / HCI Case Study
          </div>
          
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-pretty">
            CLEAN GO
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-normal leading-relaxed">
            Designing transparent digital coordination for urban waste services
          </p>
        </div>

        <div className="mb-16 space-y-4 border-t border-border pt-8 mt-8">
          <p className="text-lg leading-relaxed text-foreground max-w-2xl mx-auto">
            A UX/HCI research and design project exploring how digital systems can rebuild trust and clarity in essential urban services through resident-operator transparency in Kigali, Rwanda.
          </p>
          <p className="text-sm md:text-base text-muted-foreground font-medium">
            Simulation Prototype · React Implementation · Master's Application
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
          <Button asChild>
            <a href="#problem" className="gap-2">
              Explore the case study <ArrowDownIcon className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href="#implementation">Technical implementation</a>
          </Button>
        </div>

        {/* Device Mock (visual anchor) */}
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-sm">
            <div className="rounded-[2.25rem] border border-border/70 bg-card shadow-xl overflow-hidden aspect-[9/16]">
              <div className="h-full p-6 bg-gradient-to-b from-primary/[0.06] via-background to-accent/[0.06]">
                <div className="h-full rounded-[1.75rem] border border-border/60 bg-background/70 backdrop-blur-sm p-6 flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                      Next pickup
                    </div>
                    <div className="text-xs font-medium text-accent">Confirmed</div>
                  </div>
                  <div className="mt-3 text-3xl font-semibold text-foreground">Tomorrow</div>
                  <div className="mt-1 text-sm text-muted-foreground">8:30 AM · Window: 30 min</div>

                  <div className="mt-6 rounded-2xl border border-border/60 bg-card p-5">
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                      Service status
                    </div>
                    <div className="h-32 rounded-xl bg-gradient-to-br from-secondary/80 to-secondary/30 border border-border/50 flex items-center justify-center text-xs text-muted-foreground">
                      Dashboard preview
                    </div>
                  </div>

                  <div className="mt-auto pt-6 text-[11px] text-muted-foreground">
                    Prototype concept — resident visibility & feedback loop
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
