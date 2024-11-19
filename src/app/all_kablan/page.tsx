//pages.tsx
// component
import Box from '@/components/Box'
// Graph
import BarChartMixed from '@/components/barChartStatus/BarMixed'
import LineChartMoney from '@/components/lineChartMoneyData/LineChart'
import LineChartTask from '@/components/lineChartTaskComplete/LineChartTask'
import PieChartTask from '@/components/pieChartTaskAll/pieChartTask'

// Data
import { getKablansData } from '@/components/barChartStatus/Data'
import { getMoneyData } from '@/components/lineChartMoneyData/Data'
import { getTaskData } from '@/components/lineChartTaskComplete/Data'
import { getPieData } from '@/components/pieChartTaskAll/Data'

export default function AllKablan() {
  const kablansData = getKablansData
  const moneyData = getMoneyData
  const taskData = getTaskData
  const pieData = getPieData

  return (
    <div className="my-7 space-y-9">
      <Box title="Bar Chart">
        <BarChartMixed kablansData={kablansData} />
      </Box>
      <Box title="Line Chart Money">
        <LineChartMoney kablansData={moneyData} />
      </Box>
      <Box title="Line Chart Task">
        <LineChartTask kablansData={taskData} />
      </Box>
      <Box title="Pie Chart Task">
        <PieChartTask kablansData={pieData} />
      </Box>
    </div>
  )
}
