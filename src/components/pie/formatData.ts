export const formatPieChartData = (data) => {
  const labels = data.map((d) => d.name)
  const tasksCompleted = data.map((d) => d.tasksCompleted)

  return {
    labels,
    datasets: [
      {
        label: 'Tasks Completed',
        data: tasksCompleted,
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(201, 203, 207, 0.6)',
          'rgba(255, 205, 86, 0.6)',
        ],
      },
    ],
  }
}
