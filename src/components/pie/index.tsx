'use client'

import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'
import { data, options } from './data'

ChartJS.register(ArcElement, Tooltip, Legend, Title)

export default function PieChartComponent() {
  return <Pie data={data} options={options} />
}

