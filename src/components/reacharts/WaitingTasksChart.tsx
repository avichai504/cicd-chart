// components/reacharts/WaitingTasksChart.tsx
'use client'

import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export default function WaitingTasksChart() {
  const waitingTasksData = [{ category: 'Waiting Tasks', value: 3 }]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={waitingTasksData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#5bc0de" />
      </BarChart>
    </ResponsiveContainer>
  )
}
