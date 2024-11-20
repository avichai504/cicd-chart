'use client'

import { Doughnut } from 'react-chartjs-2' // Import Doughnut chart
import { formatData } from './formatData' // Import the formatData function
import { probData } from './Data' // Import the probData

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js'

// Register necessary chart components
ChartJS.register(ArcElement, Tooltip, Legend, Title)

export default function StatiscProbs({ probData }) {
  const chartData = formatData(probData) // Format data for the Doughnut chart

  const totalProblems =
    probData.probs.openProblems +
    probData.probs.solvedProblems +
    probData.probs.solvedToday +
    probData.probs.openToday
  // Total number of problems
  const solvedProblems =
    probData.probs.solvedProblems + probData.probs.solvedToday // Solved Problems Today
  // Number of solved problems

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: `סטטיסטיקת בעיות - סה"כ בעיות (${totalProblems}) סה"כ בעיות שנפתרו (${solvedProblems})`, // Updated title
      },
      tooltip: { enabled: true },
    },
  } as any

  return <Doughnut data={chartData} options={options} />
}
