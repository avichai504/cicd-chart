'use client'

import { formatLineChartData } from '@/components/Graphs/all_kablan/lineChartTaskComplete/formatData'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

export default function LineChart({ kablansData }) {
  const chartData = formatLineChartData(kablansData)

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'משימות שהושלמו לפי תאריך לכל קבלן' },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'תאריך', // Date
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'מספר משימות שהושלמו', // Number of Completed Tasks
        },
      },
    },
  } as any

  return <Line data={chartData} options={options} />
}
