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
      title: { display: true, text: 'השוואת שכר וכמות קבלנים לכל קבלן' },
      datalabels: { display: false }, // Disable data labels
    },
    scales: {
      y: {
        beginAtZero: true,
        type: 'linear',
        position: 'left',
      },
      y1: {
        beginAtZero: true,
        type: 'linear',
        position: 'right',
      },
    },
  } as any

  return <Bar data={chartData} options={options} />
}
