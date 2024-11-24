'use client'
import { formatEventData } from './formatData'
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

export default function BarChartEvents({ tasks }) {
  const chartData = formatEventData(tasks)

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'משימות לפי סוגי אירועים לכל קבלן',
      },
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`, // Event count
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'קבלנים',
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
