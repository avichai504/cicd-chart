import Box from '@/components/Box'

import BarChartMixed from '@/components/barMixed/BarMixed'
import PieChartComponent from '@/components/pie/Pie'
import BarChart from '@/components/bar/Bar'
import DoughnutChart from '@/components/doughnut/Doughnut'
import LineChart from '@/components/line/Line'
import GroupedBarChart from '@/components/groupedBar/GroupedBar'
import PolarChartComponent from '@/components/polar/Polar'
import StackedBarChartComponent from '@/components/stackBar/StackBar'
import LineChart2 from '@/components/lineChart/LineChart2'

import kablansData from '../mock_data/kablans.json'
import kablansTasksData from '../mock_data/kablanTasks.json'
import kablanPerformance from '../mock_data/kablanPerformance.json'
import tasks from '../mock_data/tasks.json'
import taskComplexity from '../mock_data/taskComplexity.json'
import bgtReq from '../mock_data/bgtReq.json'
import totalPerDay from '../mock_data/totalPerDay.json'

export default function Home() {
  return (
    <div className='my-7 space-y-9'>
      <h1 className='text-xl my-5 font-bold text-center text-white'>
        <p>Chart Examples with `react-chartjs-2` and `chart.js`</p>
      </h1>
      <Box title='Bar Chart'>
        <BarChart kablansData={kablansData} />
      </Box>

      <Box title='Pie'>
        <PieChartComponent data={kablansTasksData} />
      </Box>

      <Box title='Bar Chart With Two variables'>
        <BarChartMixed kablansData={kablansData} />
      </Box>

      <Box title='Doughnut Chart'>
        <DoughnutChart data={kablansTasksData} />
      </Box>

      <Box title='Line Chart'>
        <LineChart data={kablanPerformance} />
      </Box>

      <Box title='Stack Bar Chart'>
        <StackedBarChartComponent data={bgtReq} />
      </Box>

      <Box title='Grouped Bar Chart'>
        <GroupedBarChart data={tasks} />
      </Box>

      <Box title='Polar Chart'>
        <PolarChartComponent data={taskComplexity} />
      </Box>

      <Box title='Line Char 2'>
        <LineChart2 data={totalPerDay} />
      </Box>
    </div>
  )
}
