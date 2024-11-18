//pages.tsx
// component
import Box from '@/components/Box'
// Graph
import BarChartMixed from '@/components/barChartStatus/BarMixed'
import LineChart from '@/components/lineChartMoneyData/LineChart'

// Data
import { getKablansData } from '@/components/barChartStatus/Data'
import { getMoneyData } from '@/components/lineChartMoneyData/Data'

export default function AllKablan() {
  const kablansData = getKablansData
  const moneyData = getMoneyData

  return (
    <div className="my-7 space-y-9">
      <Box title="Bar Chart">
        <BarChartMixed kablansData={kablansData} />
      </Box>
      <Box title="Line Chart">
        <LineChart kablansData={moneyData} />
      </Box>
    </div>
  )
}
