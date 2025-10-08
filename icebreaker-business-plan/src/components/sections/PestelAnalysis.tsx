import { Section } from '@/components/ui/Section'

export function PestelAnalysis() {
  const factors = [
    {
      title: 'Political',
      content: 'Stable food-export policy; zero popsicle import tariff',
      color: 'blue',
      icon: '🏛️',
    },
    {
      title: 'Economic',
      content: 'EGP float raises import parity, favours local producer',
      color: 'green',
      icon: '💰',
    },
    {
      title: 'Social',
      content: '60% population under 30; demand for on-the-go treats',
      color: 'purple',
      icon: '👥',
    },
    {
      title: 'Technological',
      content: 'High-speed sleeve wrappers & eco sticks available locally',
      color: 'indigo',
      icon: '⚙️',
    },
    {
      title: 'Environmental',
      content: 'RPET sleeves + wooden sticks align with Red-Sea single-use-plastic ban',
      color: 'teal',
      icon: '🌱',
    },
    {
      title: 'Legal',
      content: 'EOS 2624/2022 ice-confection standard already met by IBE lab',
      color: 'red',
      icon: '⚖️',
    },
  ]

  return (
    <Section title="7. PESTEL Analysis (EGYPT)">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {factors.map((factor) => (
          <div
            key={factor.title}
            className={`bg-${factor.color}-50 p-6 rounded-lg transform transition-transform hover:scale-105`}
          >
            <h3 className={`text-xl font-semibold text-${factor.color}-900 mb-4 flex items-center`}>
              <span className="text-2xl mr-2">{factor.icon}</span>
              {factor.title}
            </h3>
            <p className="text-gray-700">{factor.content}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
