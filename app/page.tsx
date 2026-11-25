import Navbar from '@/components/clean-go/Navbar'
import HeroSection from '@/components/clean-go/HeroSection'
import ResearchSection from '@/components/clean-go/ResearchSection'
import ProblemFraming from '@/components/clean-go/ProblemFraming'
import SystemOverview from '@/components/clean-go/SystemOverview'
import PersonasSection from '@/components/clean-go/PersonasSection'
import UserJourneySection from '@/components/clean-go/UserJourneySection'
import TaskFlowSection from '@/components/clean-go/TaskFlowSection'
import FeaturesSection from '@/components/clean-go/FeaturesSection'
import TechnicalImplementationSection from '@/components/clean-go/TechnicalImplementationSection'
import EvaluationSection from '@/components/clean-go/EvaluationSection'
import EthicalConsiderationsSection from '@/components/clean-go/EthicalConsiderationsSection'
import ReflectionSection from '@/components/clean-go/ReflectionSection'

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ResearchSection />
      <ProblemFraming />
      <SystemOverview />
      <PersonasSection />
      <UserJourneySection />
      <TaskFlowSection />
      <FeaturesSection />
      <TechnicalImplementationSection />
      <EvaluationSection />
      <EthicalConsiderationsSection />
      <ReflectionSection />
    </main>
  )
}
