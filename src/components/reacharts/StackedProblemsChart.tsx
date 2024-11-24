// components/reacharts/StackedProblemsChart.tsx
'use client'

import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

export default function StackedProblemsChart() {
  const probsData = [
    { category: 'Open Problems', open: 5, solved: 71 },
    { category: 'Today’s Problems', open: 2, solved: 1 },
  ]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={probsData} layout="vertical" barGap={4}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="category" type="category" />
        <Tooltip />
        <Legend />
        <Bar dataKey="open" fill="#ff6f61" stackId="a" name="Open" />
        <Bar dataKey="solved" fill="#82ca9d" stackId="a" name="Solved" />
      </BarChart>
    </ResponsiveContainer>
  )
}
