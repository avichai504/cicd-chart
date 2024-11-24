import BarChartComponent from '../../components/reacharts/BarChart'
import Chart from '../../components/reacharts/Chart'
import Box from '../../components/Box'

export default function Reacharts() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-6">
      <Box title="Pie Chart">
        <Chart />
      </Box>

      <Box title="Money Status Bar Chart">
        <BarChartComponent />
      </Box>
    </div>
  )
}
