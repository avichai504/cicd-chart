// PolarChartComponent.tsx
'use client'
import { PolarArea } from 'react-chartjs-2'
import { formatData } from './formatData'
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, Title)

export default function PolarChartComponent({ data }) {
  const chartData = formatData(data)

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'כמות בעיות לכל משימה' },
      tooltip: { enabled: true },
    },
    scales: {
      r: {
        beginAtZero: true,
        title: { display: true, text: 'כמות הבעיות למשימה' },
      },
    },
  } as any

  return <PolarArea data={chartData} options={options} />
}
