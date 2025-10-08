import { Section } from '@/components/ui/Section'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export function FinancialPlan() {
  const monthlyData = {
    labels: ['Revenue', 'RM + Overhead', 'Factoring Cost', 'EBITDA'],
    datasets: [
      {
        label: 'Monthly Steady-State (400k pcs) in EGP',
        data: [5262800, 2342800, 125000, 2795000],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Financial Breakdown',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'EGP',
        },
      },
    },
  }

  return (
    <Section title="10. Financial Plan">
      <div className="space-y-8">
        <div className="h-[400px]">
          <Bar data={monthlyData} options={options} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-900 mb-4">Monthly Steady-State</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Net revenue: 5,262,800 EGP</li>
              <li>• RM + overhead: 2,342,800 EGP</li>
              <li>• Factoring cost (60d @ 2.4%): 125,000 EGP</li>
              <li className="font-semibold">• EBITDA: 2,795,000 EGP (53% margin)</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Pay-back & Sensitivity</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Pay-back period: 7 weeks</li>
              <li>• +1,000 pcs/day → +188k EGP yearly cash</li>
              <li>• Price 16 EGP inc. VAT → +345k EGP yearly cash</li>
              <li>• Break-even ≈ 61k pcs/day</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-purple-900 mb-4">Key Financial Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-700">53%</p>
              <p className="text-sm text-gray-600">EBITDA Margin</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-700">7wk</p>
              <p className="text-sm text-gray-600">Pay-back Period</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-700">61k</p>
              <p className="text-sm text-gray-600">Break-even (pcs/day)</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-700">2.8M</p>
              <p className="text-sm text-gray-600">Monthly EBITDA (EGP)</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
