// components/reacharts/SkippedTasksChart.tsx
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

export default function SkippedTasksChart() {
  const skippedTasksData = [{ category: 'Skipped Tasks', value: 74 }]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={skippedTasksData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#6c757d" />
      </BarChart>
    </ResponsiveContainer>
  )
}
