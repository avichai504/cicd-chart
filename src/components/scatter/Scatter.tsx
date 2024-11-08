'use client'

import { Scatter } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend)

export default function ScatterChart() {
  const data = {
    datasets: [
      {
        label: 'Dataset 1',
        data: [
          { x: 10, y: 20 },
          { x: 15, y: 10 },
          { x: 25, y: 30 },
          { x: 35, y: 40 },
        ],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
      {
        label: 'Dataset 2',
        data: [
          { x: 20, y: 25 },
          { x: 30, y: 15 },
          { x: 40, y: 35 },
          { x: 50, y: 50 },
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Scatter Chart Showcase' },
    },
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  } as any

  return <Scatter data={data} options={options} />
}
