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
  Legend,
)

export function WorkingCapital() {
  const cashGapData = {
    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4'],
    datasets: [
      {
        label: 'Production (k pcs)',
        data: [100, 200, 300, 400],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Cash Gap (M EGP)',
        data: [0.82, 1.65, 2.47, 3.29],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y1',
      },
    ],
  }

  const options = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      title: {
        display: true,
        text: 'Production vs Cash Gap',
      },
    },
    scales: {
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Production (k pcs)',
        },
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Cash Gap (M EGP)',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  }

  return (
    <Section title="8. Working Capital & Cash Conversion">
      <div className="space-y-8">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Payment Terms</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Customer Collection</h4>
              <p className="text-gray-700">45-60 days</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Raw Material Payment</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Juice – cash on delivery</li>
                <li>• Sleeves – 70% cash / 30% 30d</li>
                <li>• Sticks – cash</li>
                <li>• Cartons – 30d</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-[400px]">
          <Line data={cashGapData} options={options} />
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-green-900 mb-4">Bridge Plan</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Month 1: 100k pcs 0.82M gap → 600k equity + 15-day juice credit</li>
            <li>• Month 2: 200k pcs 1.65M gap → retained cash + bank OD 1M</li>
            <li>• Month 3: 300k pcs 2.47M gap → rolling OD + receivables factoring</li>
            <li>• Month 4: 400k pcs 3.29M gap → 1.5M factoring line (cost 2.4% per 60d)</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
