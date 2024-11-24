// page.tsx
import Box from '@/components/Box'
// chart
import StatiscMoneyBar from '../../components/Graphs/statistics/statiscMoneyBarChart/StatiscMoneyBar'
import StatiscMoneyPieChart from '@/components/Graphs/statistics/statiscMoneyPieChart/StatiscMoneyPie'
import StatiscProbs from '@/components/Graphs/statistics/statiscProbs/StatiscProbs'
import StatiscBgtReqs from '@/components/Graphs/statistics/StatiscBgtReqs/StatiscBgtReqs'

// data
import { getMoneyStatusData } from '../../components/Graphs/statistics/statiscMoneyBarChart/Data'
import { probData } from '../../components/Graphs/statistics/statiscProbs/Data'
import { BgtReqsData } from '@/components/Graphs/statistics/StatiscBgtReqs/Data'

export default function Statistics() {
  const kablansData = getMoneyStatusData

  return (
    <div className="my-7 space-y-9">
      <Box title="Bar Chart">
        <StatiscMoneyBar kablansData={kablansData} />
      </Box>
      <Box title="Pie Chart">
        <StatiscMoneyPieChart kablansData={kablansData} />
      </Box>
      <Box title="Prob Chart ">
        <StatiscProbs probData={probData} />
      </Box>
      <Box title="BgtReqs Chart ">
        <StatiscBgtReqs probData={BgtReqsData} />
      </Box>
    </div>
  )
}
