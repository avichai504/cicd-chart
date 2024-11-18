'use client'

import { formatLineChartData } from '@/components/lineChartMoneyData/formatData'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement, // Add this line
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement, // Register PointElement for point rendering
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
      title: { display: true, text: 'סטטוס מחיר משימות ליום לכל קבלן' },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Price',
        },
      },
    },
  } as any

  return <Line data={chartData} options={options} />
}
