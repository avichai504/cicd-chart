'use client'

import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, Tooltip, Legend, ArcElement, Title } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { formatPieChartData } from './formatData'

ChartJS.register(Tooltip, Legend, ArcElement, Title, ChartDataLabels)

export default function PieChartTask({ kablansData }) {
  const { chartData, totalTasks, totalCompleted } =
    formatPieChartData(kablansData)

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: `משימות לכל קבלן - סה"כ משימות: ${totalTasks}, משימות שהושלמו: ${totalCompleted}`,
      },
      datalabels: {
        color: '#fff',
        font: { size: 14, weight: 'bold' },
        formatter: (value, context) => {
          const kablan = kablansData[context.dataIndex]
          return `${kablan.kablanName} - ${value}/${kablan.tasks.length}`
        },
      },
    },
  } as any

  return <Pie data={chartData} options={options} />
}
