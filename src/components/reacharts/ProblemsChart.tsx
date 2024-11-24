// components/reacharts/ProblemsChart.tsx
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

export default function ProblemsChart() {
  const probsData = [
    { category: 'Open Problems', value: 5 },
    { category: 'Solved Problems', value: 71 },
    { category: 'Solved Today', value: 0 },
    { category: 'Open Today', value: 0 },
  ]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={probsData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#ff6f61" />
      </BarChart>
    </ResponsiveContainer>
  )
}
