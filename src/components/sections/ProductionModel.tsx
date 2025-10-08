"use client"

import { Section } from '@/components/ui/Section'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export function ProductionModel() {
  const productionData = {
    labels: ['Month 1', 'Month 2', 'Month 3'],
    datasets: [
      {
        label: 'Daily Production (pieces)',
        data: [10000, 15000, 20000],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.3,
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
        text: 'Production Ramp-Up Plan',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Pieces per Day',
        },
      },
    },
  }

  return (
    <Section title="4. Production Model">
      <div className="space-y-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Machine Specifications</h3>
          <p className="text-gray-700 mb-2">• Used rotary machine capacity: 200 pcs/min</p>
          <p className="text-gray-700 mb-2">• Operating hours: 10 hrs/day</p>
          <p className="text-gray-700">• Theoretical daily output: 120k pcs/day</p>
        </div>

        <div className="h-[300px]">
          <Line data={productionData} options={options} />
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-green-900 mb-4">Operational Highlights</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Ramp-up plan: 10k → 20k pcs/day in first 3 months</li>
            <li>Initial utilization rate: 17% of theoretical capacity</li>
            <li>Leveraging existing IBE freezer fleet for storage</li>
            <li>No additional vehicles required</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
