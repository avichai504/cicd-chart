'use client'
import { formatBarChartData } from './data'
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function BarChart({ kablansData }) {
  const chartData = formatBarChartData(kablansData)

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'השוואת שכר כל הקבלנים' },
      datalabels: { display: false }, // Disable data labels
    },
    scales: {
      y: { beginAtZero: true },
    },
  } as any

  return <Bar data={chartData} options={options} />
}
