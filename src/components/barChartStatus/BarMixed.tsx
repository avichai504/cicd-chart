'use client'
import { formatBarChartData } from '@/components/barChartStatus/formatData'
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

export default function BarChartMixed({ kablansData }) {
  const chartData = formatBarChartData(kablansData)

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'סטטוס משימות קבלים לפי קבלן' },
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
        position: 'hide',
      },
      y2: {
        beginAtZero: true,
        type: 'linear',
        position: 'hide',
        grid: { drawOnChartArea: false }, // Disable grid lines for better clarity
      },
    },
  } as any

  return <Bar data={chartData} options={options} />
}
