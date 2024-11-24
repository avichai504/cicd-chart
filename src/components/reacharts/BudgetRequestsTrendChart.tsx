// components/reacharts/BudgetRequestsTrendChart.tsx
'use client'

import React from 'react'
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export default function BudgetRequestsTrendChart() {
  const bgtReqsData = [
    { day: 'Mon', granted: 3, denied: 2, created: 5 },
    { day: 'Tue', granted: 5, denied: 1, created: 6 },
    { day: 'Wed', granted: 2, denied: 3, created: 5 },
    { day: 'Thu', granted: 4, denied: 2, created: 6 },
    { day: 'Fri', granted: 6, denied: 1, created: 7 },
  ]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={bgtReqsData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="granted" fill="#82ca9d" name="Granted Requests" />
        <Bar dataKey="denied" fill="#ff6f61" name="Denied Requests" />
        <Line
          type="monotone"
          dataKey="created"
          stroke="#8884d8"
          name="Created Requests"
        />
      </ComposedChart>
    </ResponsiveContainer>
  )
}
