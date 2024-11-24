// LineChart2.tsx
'use client'
import { Line } from 'react-chartjs-2'
import { formatData } from './formatData'
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

export default function LineChart2({ data }) {
  const chartData = formatData(data)

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'משימות שבוצעו מול שכר לקבלנים' },
      tooltip: { enabled: true },
    },
    scales: {
      x: { title: { display: true, text: 'Date' } },
      y: {
        type: 'linear',
        position: 'left',
        title: { display: true, text: 'Tasks Completed' },
        beginAtZero: true,
      },
      y1: {
        type: 'linear',
        position: 'right',
        title: { display: true, text: 'Total Price (₪)' },
        beginAtZero: true,
        grid: { drawOnChartArea: false }, // Prevents grid lines overlap
      },
    },
  } as any

  return <Line data={chartData} options={options} />
}
