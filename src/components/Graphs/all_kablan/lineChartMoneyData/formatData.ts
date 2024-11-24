// formatData.ts
export function formatLineChartData(kablans) {
  // Filter the dates to ensure each date appears only once
  const labels = [
    ...new Set(
      kablans[0].tasks.map((task) =>
        task.date.toLocaleDateString('en-US', {
          month: '2-digit',
          day: '2-digit',
        })
      )
    ),
  ]

  return {
    labels,
    datasets: kablans.map((k, index) => ({
      label: k.kablanName,
      data: labels.map((date) => {
        // For each date, find the corresponding price for each task
        const task = k.tasks.find(
          (task) =>
            task.date.toLocaleDateString('en-US', {
              month: '2-digit',
              day: '2-digit',
            }) === date
        )
        return task ? task.price : 0 // If no task for the date, return 0
      }),
      fill: false,
      borderColor: colors[index % colors.length], // Fixed color based on index
      tension: 0.1,
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
