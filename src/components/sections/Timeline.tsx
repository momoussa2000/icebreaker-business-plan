import { Section } from '@/components/ui/Section'

export function Timeline() {
  const timelineItems = [
    {
      time: 'Now',
      action: 'Secure 1.5M EGP factoring line (signed POs as collateral)',
      status: 'current',
    },
    {
      time: 'Month 1',
      action: '10k pcs/day trial, 50 key accounts, POSM roll-out',
      status: 'upcoming',
    },
    {
      time: 'Month 3',
      action: '20k pcs/day, 150 outlets, beach-club branding',
      status: 'upcoming',
    },
    {
      time: 'Month 12',
      action: '60k pcs/day (50% utilisation) → 11.8M EGP yearly EBITDA',
      status: 'upcoming',
    },
  ]

  return (
    <Section title="13. Implementation Timeline">
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200" />
        
        <div className="space-y-8">
          {timelineItems.map((item) => (
            <div key={item.time} className="relative pl-12">
              <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center
                ${item.status === 'current' ? 'bg-blue-500' : 'bg-blue-200'}`}>
                <div className={`w-3 h-3 rounded-full
                  ${item.status === 'current' ? 'bg-white' : 'bg-blue-500'}`} />
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className={`text-lg font-semibold mb-2
                  ${item.status === 'current' ? 'text-blue-600' : 'text-gray-900'}`}>
                  {item.time}
                </h3>
                <p className="text-gray-700">{item.action}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">Key Milestones</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-blue-700">1.5M</p>
            <p className="text-sm text-gray-600">Initial Funding (EGP)</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-700">150+</p>
            <p className="text-sm text-gray-600">Outlets by Month 3</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-700">60k</p>
            <p className="text-sm text-gray-600">Daily Production Target</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-700">11.8M</p>
            <p className="text-sm text-gray-600">Year 1 EBITDA (EGP)</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
