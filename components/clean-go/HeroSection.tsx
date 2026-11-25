import { Button } from '@/components/ui/button'

export default function HeroSection() {
  return (
    <section id="hero" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-6 md:px-12 pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            UX / HCI Case Study
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            CLEAN GO
          </h1>

          <p className="mt-5 text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl">
            Designing transparent digital coordination for urban waste services through
            resident–operator visibility in Kigali, Rwanda.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl border border-border/70 bg-card px-4 py-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Focus
              </div>
              <div className="mt-2 text-sm font-medium">Service transparency & trust</div>
            </div>
            <div className="rounded-xl border border-border/70 bg-card px-4 py-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Methods
              </div>
              <div className="mt-2 text-sm font-medium">
                Research synthesis · Task modeling · Prototype
              </div>
            </div>
            <div className="rounded-xl border border-border/70 bg-card px-4 py-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Output
              </div>
              <div className="mt-2 text-sm font-medium">
                Simulation prototype · React implementation
              </div>
            </div>
            <div className="rounded-xl border border-border/70 bg-card px-4 py-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Context
              </div>
              <div className="mt-2 text-sm font-medium">Master’s portfolio case study</div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Button asChild>
              <a href="#research">Read the case study</a>
            </Button>
            <Button asChild variant="outline">
              <a href="#implementation">Jump to implementation</a>
            </Button>
          </div>
        </div>

        <div className="mt-14 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h2 className="text-base font-semibold tracking-tight">Abstract</h2>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
              This project explores how a lightweight digital platform can make an essential
              urban service legible: what will happen, when it will happen, and what residents
              can do when it does not. The case study frames waste collection as a
              socio-technical system where uncertainty is not only operational, but also
              emotional—shaping trust, compliance, and perceived accountability.
            </p>
          </div>

          <div className="rounded-xl border border-border/70 bg-card p-6">
            <h2 className="text-base font-semibold tracking-tight">Prototype vignette</h2>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-muted-foreground">
              Below is a restrained visual placeholder representing the “next pickup” and
              “service status” pattern used throughout the proposed platform.
            </p>
            <div className="mt-5 rounded-2xl border border-border/70 bg-background p-5">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Next pickup
                </div>
                <div className="text-xs font-medium text-accent">Confirmed</div>
              </div>
              <div className="mt-3 text-2xl font-semibold">Tomorrow</div>
              <div className="mt-1 text-sm text-muted-foreground">8:30 AM · Window: 30 min</div>
              <div className="mt-5 rounded-xl border border-border/60 bg-secondary/40 p-4">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Service status
                </div>
                <div className="h-24 rounded-lg bg-background border border-border/60 flex items-center justify-center text-xs text-muted-foreground">
                  Dashboard preview placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

