export function formatLineChartData(kablans) {
  // Extract unique dates from all tasks across contractors
  const labels = [
    ...new Set(
      kablans.flatMap((k) =>
        k.tasks.map((task) =>
          task.date.toLocaleDateString('en-US', {
            month: '2-digit',
            day: '2-digit',
          })
        )
      )
    ),
  ].sort() // Sort the dates for chronological order

  return {
    labels, // Dates as X-axis labels
    datasets: kablans.map((k, index) => ({
      label: k.kablanName, // Contractor name as the dataset label
      data: labels.map((date) => {
        // Count the number of completed tasks for each date
        return k.tasks.filter(
          (task) =>
            task.status === 'taskCompleted' &&
            task.date.toLocaleDateString('en-US', {
              month: '2-digit',
              day: '2-digit',
            }) === date
        ).length
      }),
      fill: false,
      borderColor: colors[index % colors.length], // Assign a color to the contractor
      tension: 0.1, // Line smoothness
    })),
  }
}

const colors = [
  'rgba(54, 162, 235, 0.6)', // Blue
  'rgba(75, 192, 192, 0.6)', // Green
  'rgba(255, 99, 132, 0.6)', // Red
  'rgba(153, 102, 255, 0.6)', // Purple
  'rgba(255, 159, 64, 0.6)', // Orange
]
