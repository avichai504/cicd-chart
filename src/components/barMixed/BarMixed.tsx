'use client'
import { formatBarChartData } from '@/components/barMixed/data'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function BarChartMixed({ kablansData }) {
  const chartData = formatBarChartData(kablansData)

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'שכר קבלנים וכמות מתקינים' },
    },
    scales: {
      x: { beginAtZero: true,  },
      y: {
        beginAtZero: true,
        type: 'linear',
        position: 'left',
        title: { display: true, text: 'Total Price' },
      },
      y1: {
        beginAtZero: true,
        type: 'linear',
        position: 'right',
        title: { display: true, text: 'Installers' },
      },
    },
  } as any

  return <Bar data={chartData} options={options} />
}
