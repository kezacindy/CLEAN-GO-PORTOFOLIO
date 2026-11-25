export default function Reflection() {
  const insights = [
    'Structured information reduces friction. Clear, consistent presentation of schedules and system status transforms confusion into confidence.',
    'Emotional reassurance matters. Immediate feedback on submitted complaints and visible progress tracking address the psychological burden of uncertainty.',
    'Geographic standardization scales services. A unified digital platform enables waste operators to serve growing urban areas consistently.',
    'Ecosystem thinking drives adoption. Designing for multiple roles—residents, collectors, supervisors—creates a system stronger than any single user perspective.'
  ]

  const futureImprovements = [
    'Usability testing with residents and operators in Kigali to validate assumptions and refine workflows.',
    'Operator dashboard with route optimization, performance analytics, and resident feedback visualization.',
    'Advanced route optimization algorithms to reduce fuel costs and environmental impact.',
    'Accessibility evaluation and multi-language support for broader adoption across linguistic communities.'
  ]

  return (
    <section id="reflection" className="py-32 md:py-40 px-6 md:px-12 bg-background border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">7. Reflection</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-pretty leading-tight">
            Key Learnings & Future Vision
          </h2>
        </div>

        {/* Key Learnings */}
        <div className="mb-20">
          <h3 className="text-lg font-bold text-foreground mb-10 uppercase tracking-wide">Design Learnings</h3>
          <div className="space-y-6">
            {insights.map((insight, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-accent/15 border border-accent/30 rounded-lg group-hover:bg-accent/25 transition-colors duration-300 font-bold text-accent text-sm">
                  {i + 1}
                </div>
                <p className="text-lg leading-relaxed text-foreground pt-1">
                  <span className="font-semibold text-accent">{insight.split('.')[0]}.</span>
                  {insight.substring(insight.indexOf('.') + 1)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Future Improvements */}
        <div className="mb-20 bg-secondary/50 border border-border/50 rounded-xl p-10 md:p-12">
          <h3 className="text-lg font-bold text-foreground mb-10 uppercase tracking-wide">Next Steps & Future Improvements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {futureImprovements.map((improvement, i) => (
              <div key={i} className="group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-accent rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <h4 className="font-bold text-foreground">
                    {improvement.split(' ').slice(0, 3).join(' ')}
                  </h4>
                </div>
                <p className="text-foreground/80 text-sm ml-6 leading-relaxed">
                  {improvement}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-r from-accent/15 via-accent/10 to-accent/5 border border-accent/30 rounded-xl p-10 md:p-12 mb-16 hover:from-accent/20 hover:via-accent/15 transition-all duration-300">
          <p className="text-lg leading-relaxed text-foreground italic">
            "This case study reflects a belief that <span className="font-semibold">thoughtfully designed digital systems can address real friction in essential urban services</span>. The journey from informal coordination to transparent, data-driven waste management illustrates how HCI principles—clarity, feedback, control, and system visibility—translate into meaningful change. I am particularly interested in continuing to work at the intersection of <span className="font-semibold">civic digital systems and urban infrastructure</span>, exploring how technology can rebuild trust and resilience in cities."
          </p>
        </div>

        {/* CTA or Contact Info */}
        <div className="text-center pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-sm font-medium">
            CLEAN GO — UX/HCI Case Study · React Implementation · 2024
          </p>
        </div>
      </div>
    </section>
  )
}
