'use client'

import React, { PureComponent } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

// נתונים מותאמים אישית על כמות משימות וסטטוסים
const data = [
  { name: 'משימות שהושלמו', value: 127 },
  { name: 'משימות בהמתנה', value: 3 },
  { name: 'משימות שדולגו', value: 74 },
  { name: 'בעיות ביצוע שנפתרו', value: 71 },
  { name: 'בעיות ביצוע שלא נפתרו', value: 5 },
  { name: 'בקשות תקציב שאושרו', value: 22 },
  { name: 'בקשות תקציב שנדחו', value: 24 },
  { name: 'בקשות תקציב שממתינות לאישור', value: 3 },
]

// צבעים מותאמים אישית לכל קטגוריה
const COLORS = [
  '#34D399', // משימות שהושלמו
  '#3B82F6', // משימות בהמתנה
  '#9CA3AF', // משימות שדולגו
  '#F87171', // בעיות ביצוע שנפתרו
  '#EF4444', // בעיות ביצוע שלא נפתרו
  '#FACC15', // בקשות תקציב שאושרו
  '#EAB308', // בקשות תקציב שנדחו
  '#FBBF24', // בקשות תקציב שממתינות לאישור
]

// מיפוי של כל צבע לפי שם הקטגוריה
const categoryColorMap = data.map((entry, index) => ({
  category: entry.name,
  color: COLORS[index],
}))

export default class PieChartWithCustomizedLabel extends PureComponent {
  render() {
    return (
      <div className="w-full h-[600px] flex justify-center items-center bg-white shadow-lg rounded-lg p-6 text-black">
        {/* גרף פאי */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={800} height={800}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              label={true}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        {/* תצוגת מיפוי של קטגוריות וצבעים */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Category Colors:</h3>
          <ul className="space-y-2">
            {categoryColorMap.map((item, index) => (
              <li key={index} className="flex items-center">
                <div
                  className="w-6 h-6 mr-3"
                  style={{ backgroundColor: item.color }}
                ></div>
                <span>{item.category}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
