// components/reacharts/PerformanceRadarChart.tsx
'use client'

import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

export default function PerformanceRadarChart() {
  const performanceData = [
    { metric: 'Completed', value: 127 },
    { metric: 'Problems Solved', value: 71 },
    { metric: 'Granted Requests', value: 22 },
    { metric: 'Waiting Tasks', value: 3 },
    { metric: 'Skipped Tasks', value: 74 },
  ]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart data={performanceData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="metric" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar
          name="Performance"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}
