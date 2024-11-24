'use client'
import { Doughnut } from 'react-chartjs-2'
import { formatDoughnutChartData } from './formatData'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default function DoughnutChart({ data }) {
  const chartData = formatDoughnutChartData(data)

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'חילוק משימות שהתבצעו לפי קבלנים' },
      tooltip: { enabled: true },
    },
  } as any

  return <Doughnut data={chartData} options={options} />
}
