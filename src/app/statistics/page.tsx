// page.tsx
import Box from '@/components/Box'
// chart
import StatiscMoneyBar from '../../components/statiscMoneyBarChart/StatiscMoneyBar'
import StatiscMoneyPieChart from '@/components/statiscMoneyPieChart/StatiscMoneyPie'
import StatiscProbs from '@/components/statiscProbs/StatiscProbs'
import StatiscBgtReqs from '@/components/StatiscBgtReqs/StatiscBgtReqs'

// data
import { getMoneyStatusData } from '../../components/statiscMoneyBarChart/Data'
import { probData } from '../../components/statiscProbs/Data'
import { BgtReqsData } from '@/components/StatiscBgtReqs/Data'

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
