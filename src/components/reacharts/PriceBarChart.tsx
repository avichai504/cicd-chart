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
  LabelList,
  Cell,
} from 'recharts'

const priceData = [
  {
    category: 'משימות שהושלמו',
    price: 60894,
    color: '#34D399', // ירוק
  },
  {
    category: 'משימות בהמתנה',
    price: 2102,
    color: '#3B82F6', // כחול
  },
  {
    category: 'משימות שדולגו',
    price: 45205,
    color: '#9CA3AF', // אפור
  },
]

export default function PriceBarChart() {
  return (
    <div className="text-black w-full h-[400px] flex justify-center items-center bg-white shadow-lg rounded-lg p-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={priceData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="category"
            tick={{ fontSize: 14, fontWeight: 'bold' }}
          />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value) => `${value} ₪`} />
          <Legend
            verticalAlign="top"
            formatter={(value) => (
              <span style={{ fontWeight: 'bold' }}>{value}</span>
            )}
          />
          <Bar dataKey="price" barSize={50}>
            {priceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            <LabelList
              dataKey="price"
              position="top"
              formatter={(value) => `${value} ₪`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
