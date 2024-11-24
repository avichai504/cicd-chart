// page.tsx
import Box from '../../components/Box'
import CompletedVsSkippedTasksChart from '../../components/reacharts/CompletedVsSkippedTasksChart'
import ProblemsChart from '../../components/reacharts/ProblemsChart'
import BudgetRequestsChart from '../../components/reacharts/BudgetRequestsChart'
import WaitingTasksChart from '../../components/reacharts/WaitingTasksChart'
import SkippedTasksChart from '../../components/reacharts/SkippedTasksChart'
import StackedProblemsChart from '../../components/reacharts/StackedProblemsChart'
import BudgetRequestsTrendChart from '../../components/reacharts/BudgetRequestsTrendChart'
import TaskDistributionPieChart from '../../components/reacharts/TaskDistributionPieChart'
import PerformanceRadarChart from '../../components/reacharts/PerformanceRadarChart'
import BubbleChart from '../../components/reacharts/BubbleChart'
import PriceDistributionChart from '@/components/reacharts/PriceDistributionChart'
import PriceBarChart from '@/components/reacharts/PriceBarChart'
import TasksQuantitiesBarChart from '@/components/reacharts/TasksQuantitiesBarChart'
import PieChartWithCustomizedLabel from '@/components/reacharts/PieChartWithCustomizedLabel'

export default function Reacharts() {
  return (
    <div className="flex flex-wrap justify-center min-h-screen bg-gray-100 p-8">
      {/* Completed vs Skipped Tasks */}
      <Box title="Completed vs Skipped Tasks">
        <CompletedVsSkippedTasksChart />
      </Box>

      {/* Problems */}
      <Box title="Problems Overview">
        <ProblemsChart />
      </Box>

      {/* Budget Requests */}
      <Box title="Budget Requests">
        <BudgetRequestsChart />
      </Box>

      {/* Waiting Tasks */}
      <Box title="Waiting Tasks">
        <WaitingTasksChart />
      </Box>

      {/* Skipped Tasks */}
      <Box title="Skipped Tasks">
        <SkippedTasksChart />
      </Box>

      <Box title="StackedProblemsChart">
        <StackedProblemsChart />
      </Box>

      <Box title="BudgetRequestsTrendChart">
        <BudgetRequestsTrendChart />
      </Box>

      <Box title="TaskDistributionPieChart">
        <TaskDistributionPieChart />
      </Box>

      <Box title="PerformanceRadarChart">
        <PerformanceRadarChart />
      </Box>

      <Box title="BubbleChart">
        <BubbleChart />
      </Box>

      <Box title="PriceData Pie">
        <PriceDistributionChart />
      </Box>

      <Box title="PriceData Bar">
        <PriceBarChart />
      </Box>

      <Box title="TasksQuantitiesBarChart ">
        <TasksQuantitiesBarChart />
      </Box>

      <Box title="PieChartWithCustomizedLabel ">
        <PieChartWithCustomizedLabel />
      </Box>
    </div>
  )
}
