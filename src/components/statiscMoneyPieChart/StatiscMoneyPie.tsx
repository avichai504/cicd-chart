'use client'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { formatPieChartData } from './formatData'

// Register ChartJS components and plugins
ChartJS.register(ArcElement, Title, Tooltip, Legend, ChartDataLabels)

export default function StatiscMoneyPieChart({ kablansData }) {
  // Format the data for the pie chart
  const chartData = formatPieChartData(kablansData)

  // Calculate the total sum of all totalPrice values
  const totalSum = kablansData.reduce((sum, item) => sum + item.totalPrice, 0)
  const formattedTotal = `₪${totalSum.toLocaleString()}` // Format the total sum with currency symbol

  // Pie chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: `סטטטוס מחירי משימות לפי סוג משימה - סך הכל: ${formattedTotal}`, // Title with the total sum
      },
      datalabels: {
        display: true,
        color: 'black', // Text color for the data labels
        formatter: (value) => `₪${value.toLocaleString()}`, // Format as price
        font: {
          weight: 'bold',
          size: 14,
        },
        align: 'center', // Position the label inside the slice
        anchor: 'center', // Center the label inside the slice
      },
    },
  } as any

  return <Pie data={chartData} options={options} />
}
