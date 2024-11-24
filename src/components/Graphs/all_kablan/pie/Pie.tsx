'use client'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { formatPieChartData } from './formatData'

ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels)

export default function PieChartComponent({ data }) {
  const chartData = formatPieChartData(data)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'כמות משימות שכל קבלן ביצע',
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        color: '#000',
        font: {
          size: 11,
          weight: 'bold',
        },
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex]
          return `${label}: ${value}`
        },
        anchor: 'center',
        align: 'center',
      },
    },
  } as any

  return <Pie data={chartData} options={options} />
}
