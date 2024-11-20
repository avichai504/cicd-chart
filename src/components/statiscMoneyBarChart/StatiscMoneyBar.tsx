'use client'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataset,
} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { formatBarChartData } from './formatData'

// Register ChartJS components and plugins
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
)

export default function StatiscMoneyBar({ kablansData }) {
  // Format the data for the chart
  const chartData: any = formatBarChartData(kablansData)

  // Calculate the total sum of all totalPrice values
  const totalSum = kablansData.reduce((sum, item) => sum + item.totalPrice, 0)
  const formattedTotal = `₪${totalSum.toLocaleString()}` // Format the total sum with currency symbol

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: `סטטטוס מחירי משימות לפי סוג משימה - סך הכל: ${formattedTotal}`, // Display the sum in the title
      },
    },
    scales: {
      y: { beginAtZero: true, type: 'linear', position: 'left' },
    },
  } as any

  // Explicitly type the chart data
  return <Bar data={chartData} options={options} />
}
