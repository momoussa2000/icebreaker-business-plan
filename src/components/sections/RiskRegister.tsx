import { Section } from '@/components/ui/Section'

export function RiskRegister() {
  const risks = [
    {
      risk: 'Liquidity squeeze',
      mitigation: 'Confirmed 1.5M EGP factoring line',
      severity: 'high',
    },
    {
      risk: 'Machine breakdown',
      mitigation: '24-hr service contract + manual mould back-up',
      severity: 'medium',
    },
    {
      risk: 'Seasonality dip',
      mitigation: 'Produce ice-cubes in off-months, retain labour',
      severity: 'medium',
    },
    {
      risk: 'FX/commodity spike',
      mitigation: 'Price concentrate in EGP; forward-buy sugar 3 months',
      severity: 'high',
    },
  ]

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-green-100 text-green-800'
    }
  }

  return (
    <Section title="9. Risk Register">
      <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                Risk
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Mitigation Strategy
              </th>
              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Severity
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {risks.map((item) => (
              <tr key={item.risk}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                  {item.risk}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                  {item.mitigation}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm">
                  <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getSeverityColor(item.severity)}`}>
                    {item.severity.charAt(0).toUpperCase() + item.severity.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  )
}
