export function formatPieChartData(kablans) {
  const kablanStats = kablans.map((kablan) => {
    const totalTasks = kablan.tasks.length
    const completedTasks = kablan.tasks.filter(
      (task) => task.status === 'taskCompleted'
    ).length
    return { totalTasks, completedTasks }
  })

  const chartData = {
    labels: kablans.map((kablan) => kablan.kablanName),
    datasets: [
      {
        data: kablanStats.map((stat) => stat.completedTasks),
        backgroundColor: kablans.map(
          (_, index) => colors[index % colors.length]
        ),
      },
    ],
  }

  const totalTasks = kablanStats.reduce((sum, stat) => sum + stat.totalTasks, 0)
  const totalCompleted = kablanStats.reduce(
    (sum, stat) => sum + stat.completedTasks,
    0
  )

  return { chartData, totalTasks, totalCompleted }
}

const colors = [
  'rgba(54, 162, 235, 0.6)', // Blue
  'rgba(75, 192, 192, 0.6)', // Green
  'rgba(255, 99, 132, 0.6)', // Red
  'rgba(153, 102, 255, 0.6)', // Purple
  'rgba(255, 159, 64, 0.6)', // Orange
]
