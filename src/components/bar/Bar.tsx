'use client'
import { formatBarChartData } from '@/components/bar/data'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function BarChartMixed({ kablansData }) {
  const chartData = formatBarChartData(kablansData)

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'שכר קבלנים' },
    },
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  } as any

  return <Bar data={chartData} options={options} />
}
