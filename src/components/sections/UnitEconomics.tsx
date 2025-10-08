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

export function UnitEconomics() {
  const costData = {
    labels: ['Juice mix (70 ml)', 'Sleeve + print', 'Wooden stick', 'Master carton'],
    datasets: [
      {
        label: 'Cost (EGP)',
        data: [7.000, 0.262, 0.100, 0.120],
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
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Cost Breakdown per Piece (EGP)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return (
    <Section title="3. Unit Economics (EGP per piece)">
      <div className="space-y-8">
        <div className="h-[300px]">
          <Bar data={costData} options={options} />
        </div>
        <div className="space-y-2">
          <p className="text-gray-700">
            <span className="font-semibold">TOTAL COGS:</span> 7.48 EGP
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Gross margin:</span> 5.68 EGP (43%)
          </p>
        </div>
      </div>
    </Section>
  )
}
