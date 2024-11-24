import BarChartComponent from '../../components/reacharts/BarChart'
import Chart from '../../components/reacharts/Chart'

export default function Reacharts() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <h1>Chart</h1>
      <Chart />
      <h1>Money Status Bar Chart</h1>
      <BarChartComponent />

      <h1>Line Chart</h1>
      {/* <LineChart /> */}
    </div>
  )
}
