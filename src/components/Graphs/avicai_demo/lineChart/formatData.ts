export const formatData = (data) => {
  const labels = data.map((d) => d.date)
  const tasksCompleted = data.map((d) => d.tasksCompleted)
  const totalPrice = data.map((d) => d.totalPrice)

  return {
    labels,
    datasets: [
      {
        label: 'Tasks Completed',
        data: tasksCompleted,
        backgroundColor: 'rgba(75, 0, 130, 0.2)',
        borderColor: 'rgba(75, 0, 130, 1)', // Purple line
        borderWidth: 2,
        yAxisID: 'y',
        fill: true,
      },
      {
        label: 'Total Price (₪)',
        data: totalPrice,
        borderColor: 'rgba(255, 99, 132, 1)', // Red line
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
        yAxisID: 'y1',
        fill: true,
      },
    ],
  }
}
