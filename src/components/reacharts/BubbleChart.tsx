'use client'

import React from 'react'
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export default function BubbleChart() {
  const bubbleData = [
    { x: 127, y: 60894, z: 5, name: 'Completed Tasks' },
    { x: 74, y: 45205, z: 3, name: 'Skipped Tasks' },
    { x: 3, y: 2102, z: 2, name: 'Waiting Tasks' },
  ]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart>
        <CartesianGrid />
        <XAxis dataKey="x" name="Tasks" unit="tasks" />
        <YAxis dataKey="y" name="Total Price" unit="$" />
        <ZAxis dataKey="z" name="Problems" range={[100, 400]} />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="Tasks" data={bubbleData} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  )
}
