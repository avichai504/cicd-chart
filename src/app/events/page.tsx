// Page.tsx
import BarChartEvents from '@/components/barChartEventAllKablan/BarChartEvents' // Update to BarChartEvents
import { getEvent } from '../../components/barChartEventAllKablan/Data'
import Box from '@/components/Box'
import BarChartEventTypes from '@/components/barChartEventType/BarChartEventType'

export default function Events() {
  const kablansData = getEvent

  return (
    <div className="my-7 space-y-9">
      <Box title="Bar Chart Events all Kablan">
        <BarChartEvents tasks={kablansData} /> {/* Pass tasks directly */}
      </Box>
      <Box title="Bar Chart Events Status">
        <BarChartEventTypes tasks={kablansData} /> {/* Pass tasks directly */}
      </Box>
    </div>
  )
}
