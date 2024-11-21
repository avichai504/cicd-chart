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

const getMoneyStatusData = [
  { category: 'משימות שהושלמו', totalPrice: 60894 },
  { category: 'משימות בהמתנה', totalPrice: 2102 },
  { category: 'משימות שדולגו', totalPrice: 45205 },
]

export default function BarChartComponent() {
  return (
    <ResponsiveContainer width={800} height={400}>
      <BarChart data={getMoneyStatusData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalPrice" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  )
}
