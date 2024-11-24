//pages.tsx
// component
import Box from '@/components/Box'
// Graph
import BarChartMixed from '@/components/Graphs/all_kablan/barChartStatus/BarMixed'
import LineChartMoney from '@/components/Graphs/all_kablan/lineChartMoneyData/LineChart'
import LineChartTask from '@/components/Graphs/all_kablan/lineChartTaskComplete/LineChartTask'
import PieChartTask from '@/components/Graphs/all_kablan/pieChartTaskAll/pieChartTask'

// Data
import { getKablansData } from '@/components/Graphs/all_kablan/barChartStatus/Data'
import { getMoneyData } from '@/components/Graphs/all_kablan/lineChartMoneyData/Data'
import { getTaskData } from '@/components/Graphs/all_kablan/lineChartTaskComplete/Data'
import { getPieData } from '@/components/Graphs/all_kablan/pieChartTaskAll/Data'

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
