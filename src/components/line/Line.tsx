'use client'
import { Line } from 'react-chartjs-2'
import { formatLineChartData } from '@/components/line/formatData'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend)

export default function LineChart({ data }) {
  const chartData = formatLineChartData(data)

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'כמות משימות של קבלן לאורך זמן' },
      datalabels: { display: false }, // Disable data labels
    },
    scales: {
      x: { title: { display: true, text: 'Month' } },
      y: { beginAtZero: true, title: { display: true, text: 'Completed Tasks' } },
    },
  } as any

  return <Line data={chartData} options={options} />
}
