// GroupedBarChart.tsx
'use client'
import { Bar } from 'react-chartjs-2'
import { formatGroupedBarChartData } from '@/components/groupedBar/formatData'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function GroupedBarChart({ data }) {
  const chartData = formatGroupedBarChartData(data)

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'כמות ביצועים לכל משימה' },
      tooltip: { enabled: true },
    },
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true, title: { display: true, text: 'Number of Tasks' } },
    },
  } as any

  return <Bar data={chartData} options={options} />
}
