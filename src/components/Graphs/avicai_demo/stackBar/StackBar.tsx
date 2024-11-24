'use client'
import { Bar } from 'react-chartjs-2'
import { formatData } from './formatData'
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

export default function StackedBarChartComponent({ data }) {
  const chartData = formatData(data)

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'בקשות תקציב ומחיר' },
      tooltip: { enabled: true },
    },
    scales: {
      x: { stacked: true, beginAtZero: true },
      y: {
        stacked: true,
        beginAtZero: true,
        title: { display: true, text: 'Number of Requests' },
      },
    },
  } as any

  return <Bar data={chartData} options={options} />
}
