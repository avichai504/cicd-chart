// Page.tsx
// graph
import BarChartEvents from '../../components/Graphs/events/barChartEventAllKablan/BarChartEvents' // Update to BarChartEvents
import BarChartEventTypes from '../../components/Graphs/events/barChartEventType/BarChartEventType'
// data
import { getEvent } from '../../components/Graphs/events/barChartEventAllKablan/Data'
// component
import Box from '@/components/Box'

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
