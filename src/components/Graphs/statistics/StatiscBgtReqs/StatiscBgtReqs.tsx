// StatiscBgtReqs.tsx
'use client'

import { Bar } from 'react-chartjs-2'
import { formatBgtReqsData } from './formatData' // Import the formatBgtReqsData function
import { BgtReqsData } from './Data' // Import the BgtReqsData

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// Register necessary chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function StatiscBgtReqs({ probData }) {
  const chartData = formatBgtReqsData(probData) // Format data for the stacked bar chart

  const totalRequests =
    probData.bgtReqs.grantedReq +
    probData.bgtReqs.deniedReq +
    probData.bgtReqs.waitingReq +
    probData.bgtReqs.grantedToday +
    probData.bgtReqs.deniedToday +
    probData.bgtReqs.createdToday
  // Total number of requests

  const grantedRequests =
    probData.bgtReqs.grantedReq + probData.bgtReqs.grantedToday // Granted Requests

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: {
        display: true,
        text: `בקשות חריגים - סה"כ בקשות (${totalRequests}) סה"כ בקשות מאושרות (${grantedRequests})`, // Updated title
      },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        stacked: true, // Enable stacking
        title: {
          display: true,
          text: 'סוג הבקשה',
        },
      },
      y: {
        stacked: true, // Enable stacking
        beginAtZero: true,
        title: {
          display: true,
          text: 'כמות בקשות',
        },
      },
    },
  } as any

  return <Bar data={chartData} options={options} />
}
