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
  Cell,
  Legend,
} from 'recharts'

const quantitiesData = [
  { category: 'משימות שהושלמו', quantity: 127, color: '#34D399' }, // ירוק
  { category: 'משימות בהמתנה', quantity: 3, color: '#3B82F6' }, // כחול
  { category: 'משימות שדולגו', quantity: 74, color: '#9CA3AF' }, // אפור
  { category: 'בעיות ביצוע שנפתרו', quantity: 71, color: '#F87171' }, // אדום בהיר
  { category: 'בעיות ביצוע שלא נפתרו', quantity: 5, color: '#EF4444' }, // אדום כהה
  { category: 'בקשות תקציב שאושרו', quantity: 22, color: '#FACC15' }, // צהוב
  { category: 'בקשות תקציב שנדחו', quantity: 24, color: '#EAB308' }, // צהוב כהה
  { category: 'בקשות תקציב שממתינות לאישור', quantity: 3, color: '#FBBF24' }, // כתום
]

export default function TasksQuantitiesBarChart() {
  return (
    <div>
      <ResponsiveContainer width={1200} height={500}>
        <BarChart
          data={quantitiesData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="category"
            tick={{ fontSize: 12, fontWeight: 'bold' }}
            interval={0}
          />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value) => `${value} משימות`} />
          <Legend />
          <Bar dataKey="quantity" barSize={50}>
            {quantitiesData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
