// components/reacharts/TaskDistributionPieChart.tsx
'use client'

import React from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export default function TaskDistributionPieChart() {
  const taskData = [
    { name: 'Completed Tasks', value: 127 },
    { name: 'Skipped Tasks', value: 74 },
    { name: 'Waiting Tasks', value: 3 },
  ]

  const COLORS = ['#82ca9d', '#ff6f61', '#8884d8']

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={taskData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {taskData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}
