import { Section } from '@/components/ui/Section'
import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export function MarketingStrategy() {
  const channelMixData = {
    labels: [
      'Modern Trade',
      'Hotels & Cafés',
      'Schools/Kiosks',
      'Seasonal Events'
    ],
    datasets: [
      {
        data: [45, 30, 15, 10],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Channel Mix (Year-1 Volume)',
      },
    },
  }

  return (
    <Section title="5. Marketing & Sales Strategy">
      <div className="space-y-8">
        <div className="h-[400px]">
          <Doughnut data={channelMixData} options={options} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-900 mb-4">Channel Details</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Modern trade: Freezer-placement deal with Carrefour, Hyper-One</li>
              <li>• Hotels & cafés: Leverage existing IBE accounts</li>
              <li>• Schools/kiosks: Afternoon van-sales route</li>
              <li>• Seasonal events: Weekend pop-ups</li>
            </ul>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-orange-900 mb-4">Promotional Calendar</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Month 1: POSM + tasting booths + BOGO first 50 outlets</li>
              <li>• Month 2: Beach-club umbrella branding</li>
              <li>• Month 3: Back-to-school combo with 3 kg ice cubes</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-green-900 mb-4">Promotional Budget</h3>
          <p className="text-gray-700">
            2 EGP per sleeve sold → 800k EGP/year (included in operating overhead)
          </p>
        </div>
      </div>
    </Section>
  )
}
