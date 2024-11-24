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

export default function PriceDistributionChart() {
  return (
    <div className="w-full h-[400px] flex justify-center items-center bg-white shadow-lg rounded-lg p-6">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/* הצגת הנתונים בגרף */}
          <Pie
            data={priceData}
            dataKey="price"
            nameKey="category"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={5}
          >
            {priceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} ₪`} />
          <Legend
            align="center"
            verticalAlign="bottom"
            formatter={(value, entry) => (
              <span style={{ color: entry.color, fontWeight: 'bold' }}>
                {value}
              </span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
