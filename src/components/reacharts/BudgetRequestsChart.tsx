// components/reacharts/BudgetRequestsChart.tsx
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

export default function BudgetRequestsChart() {
  const bgtReqsData = [
    { category: 'Granted Requests', value: 22 },
    { category: 'Denied Requests', value: 24 },
    { category: 'Waiting Requests', value: 3 },
    { category: 'Granted Today', value: 0 },
    { category: 'Denied Today', value: 0 },
    { category: 'Created Today', value: 0 },
  ]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={bgtReqsData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#f0ad4e" />
      </BarChart>
    </ResponsiveContainer>
  )
}
