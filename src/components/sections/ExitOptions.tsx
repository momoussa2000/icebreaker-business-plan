import { Section } from '@/components/ui/Section'

export function ExitOptions() {
  return (
    <Section title="12. Exit Options (Year 3)">
      <div className="space-y-8">
        <div className="bg-blue-50 p-8 rounded-lg">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-blue-900">Projected Valuation</h3>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-700">12M+</p>
                <p className="text-sm text-gray-600">Annual EBITDA (EGP)</p>
              </div>
              <div className="text-4xl text-blue-400">×</div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-700">7×</p>
                <p className="text-sm text-gray-600">Multiple</p>
              </div>
              <div className="text-4xl text-blue-400">=</div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-700">84M</p>
                <p className="text-sm text-gray-600">Valuation (EGP)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-900 mb-4">Exit Strategy</h3>
            <p className="text-gray-700">
              Regional FMCG trade-sale targeting established players looking to expand their frozen treats portfolio.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Value Drivers</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Established market presence</li>
              <li>• Strong distribution network</li>
              <li>• Proven business model</li>
              <li>• Sustainable practices</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  )
}
