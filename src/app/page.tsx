import { Header } from '@/components/Header'
import { ExecutiveSummary } from '@/components/sections/ExecutiveSummary'
import { ProductPrice } from '@/components/sections/ProductPrice'
import { UnitEconomics } from '@/components/sections/UnitEconomics'
import { ProductionModel } from '@/components/sections/ProductionModel'
import { MarketingStrategy } from '@/components/sections/MarketingStrategy'
import { SwotAnalysis } from '@/components/sections/SwotAnalysis'
import { PestelAnalysis } from '@/components/sections/PestelAnalysis'
import { WorkingCapital } from '@/components/sections/WorkingCapital'
import { RiskRegister } from '@/components/sections/RiskRegister'
import { FinancialPlan } from '@/components/sections/FinancialPlan'
import { Sustainability } from '@/components/sections/Sustainability'
import { ExitOptions } from '@/components/sections/ExitOptions'
import { Timeline } from '@/components/sections/Timeline'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Header />
      <div className="space-y-16">
        <ExecutiveSummary />
        <ProductPrice />
        <UnitEconomics />
        <ProductionModel />
        <MarketingStrategy />
        <SwotAnalysis />
        <PestelAnalysis />
        <WorkingCapital />
        <RiskRegister />
        <FinancialPlan />
        <Sustainability />
        <ExitOptions />
        <Timeline />
      </div>
    </div>
  )
}
