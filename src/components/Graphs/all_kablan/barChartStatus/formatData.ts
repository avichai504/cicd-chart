// formatData.ts
export function formatBarChartData(kablan) {
  const labels = kablan.map((k) => k.kablanName)
  const taskWaiting = kablan.map((k) => k.taskWaiting)
  const taskCompleted = kablan.map((k) => k.taskCompleted)
  const taskSkip = kablan.map((k) => k.taskSkip)

  return {
    labels,
    datasets: [
      {
        label: 'task Waiting',
        data: taskWaiting,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        yAxisID: 'y',
      },
      {
        label: 'task Completed',
        data: taskCompleted,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        yAxisID: 'y1',
      },
      {
        label: 'task Skip',
        data: taskSkip,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        yAxisID: 'y2',
      },
    ],
  }
}
