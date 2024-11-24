// components/reacharts/CompletedVsSkippedTasksChart.tsx
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

export default function CompletedVsSkippedTasksChart() {
  const tasksData = [
    { category: 'Completed Tasks', value: 127 },
    { category: 'Skipped Tasks', value: 74 },
  ]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={tasksData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}
