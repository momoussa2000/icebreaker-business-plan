import { Section } from '@/components/ui/Section'

export function Sustainability() {
  const initiatives = [
    {
      title: 'Sustainable Materials',
      description: 'Wooden sticks FSC-certified',
      icon: '🌳',
    },
    {
      title: 'Recyclable Packaging',
      description: 'RPET recyclable sleeves (30% post-consumer)',
      icon: '♻️',
    },
    {
      title: 'Water Conservation',
      description: 'Closed-loop water system – zero additional effluent',
      icon: '💧',
    },
    {
      title: 'Renewable Energy',
      description: 'Existing solar panels on IBE roof offset 15% electricity',
      icon: '☀️',
    },
  ]

  return (
    <Section title="11. ESG & Sustainability">
      <div className="grid md:grid-cols-2 gap-6">
        {initiatives.map((initiative) => (
          <div
            key={initiative.title}
            className="bg-green-50 p-6 rounded-lg transform transition-transform hover:scale-105"
          >
            <div className="flex items-start space-x-4">
              <span className="text-4xl">{initiative.icon}</span>
              <div>
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                  {initiative.title}
                </h3>
                <p className="text-gray-700">{initiative.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-900 mb-4">Environmental Impact</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-700">30%</p>
            <p className="text-sm text-gray-600">Post-Consumer Materials</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-blue-700">15%</p>
            <p className="text-sm text-gray-600">Solar Energy Offset</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
