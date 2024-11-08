import BarChartMixed from '@/components/barMixed/BarMixed'
import Box from '@/components/Box'

import PieChartComponent from '@/components/pie'
import ScatterChart from '@/components/scatter/Scatter'
import BarChart from '@/components/bar/Bar'

import kablansData from '../../mock_data/kablans.json'

export default function Home() {
  return (
    <div className='my-7 space-y-9'>
      <h1 className='text-xl my-5 font-bold text-center text-gray-700'>
        <p>Chart Examples with `react-chartjs-2` and `chart.js`</p>
      </h1>
      <Box title='Bar'>
        <BarChart kablansData={kablansData} />
      </Box>

      <Box title='Bar with tow scales'>
        <BarChartMixed kablansData={kablansData} />
      </Box>
      
      <Box title='Pie'>
        <PieChartComponent />
      </Box>
      <Box title='Scatter'>
        <ScatterChart />
      </Box>
    </div>
  )
}
