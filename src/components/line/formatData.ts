export const formatLineChartData = (data) => {
  const labels = data.map((d) => d.month)
  const taskCounts = data.map((d) => d.completedTasks)

  return {
    labels,
    datasets: [
      {
        label: 'Completed Tasks',
        data: taskCounts,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderWidth: 3,
        tension: 0.3, // Adds some curve to the line
        fill: true,
      },
    ],
  }
}
