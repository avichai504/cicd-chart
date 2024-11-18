// component
import Box from '@/components/Box'
// Graph
import BarChartMixed from '@/components/barChartStatus/BarMixed'
// Data
import { getKablansData } from '@/components/barChartStatus/Data'

export default function Chart() {
  const kablansData = getKablansData

  return (
    <div className="my-7 space-y-9">
      <Box title="Bar Chart">
        <BarChartMixed kablansData={kablansData} />
      </Box>
    </div>
  )
}
