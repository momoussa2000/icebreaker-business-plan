import { Section } from '@/components/ui/Section'

export function SwotAnalysis() {
  return (
    <Section title="6. SWOT Analysis">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">✓</span> Strengths
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Ready customer base & cold-chain fleet – zero new vehicles</li>
            <li>• Low entry capex (600k) vs. 2-3M green-field</li>
            <li>• 43% gross margin absorbs trade spend & finance cost</li>
          </ul>
        </div>

        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">✗</span> Weaknesses
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Single line – downtime risk</li>
            <li>• 60-day receivables require external financing</li>
            <li>• New brand – heavy sampling needed first season</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">✓</span> Opportunities
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Import parity 18-22 EGP creates price umbrella</li>
            <li>• Off-season Nov-Mar competitors shut; we supply hotels</li>
            <li>• Cross-sell with IBE ice cubes → higher drop size</li>
          </ul>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-yellow-900 mb-4 flex items-center">
            <span className="text-2xl mr-2">✗</span> Threats
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Sugar/fruit price inflation</li>
            <li>• Big players (Froneri, Al-Marai) enter with deeper pockets</li>
            <li>• Possible extension of sugar tax to ice confectionery</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
