'use client'

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
import { formatEventTypeData } from './formatData'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function BarChartEventTypes({ tasks }) {
  const chartData = formatEventTypeData(tasks)

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'כמות משימות לפי סוגי אירועים',
      },
      legend: { position: 'top' },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'סוגי אירועים',
        },
      },
      y: {
        title: {
          display: true,
          text: 'כמות משימות',
        },
        beginAtZero: true,
      },
    },
  } as any

  return <Bar data={chartData} options={options} />
}
