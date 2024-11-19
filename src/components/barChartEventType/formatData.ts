export const formatEventTypeData = (tasks) => {
  const eventTypes = [
    'משימה שהושלמה',
    'בעיות ביצוע',
    'בקשת חריגים',
    'ממתין לאישור',
    'משימה שדולגה',
  ]

  // Count the tasks for each event type
  const eventCounts = tasks.reduce((acc, { eventTypes: type }) => {
    acc[type] = (acc[type] || 0) + 1
    return acc
  }, {})

  // Define a set of colors for each event type
  const colors = [
    'rgba(54, 162, 235, 0.6)', // Blue
    'rgba(255, 99, 132, 0.6)', // Red
    'rgba(75, 192, 192, 0.6)', // Green
    'rgba(153, 102, 255, 0.6)', // Purple
    'rgba(255, 159, 64, 0.6)', // Orange
  ]

  return {
    labels: eventTypes,
    datasets: [
      {
        label: 'Task Count',
        data: eventTypes.map((type) => eventCounts[type] || 0), // Ensure default count is 0
        backgroundColor: eventTypes.map((_, index) => colors[index]), // Map colors to event types
        borderColor: eventTypes.map((_, index) =>
          colors[index].replace('0.6', '1')
        ), // Darker border color
        borderWidth: 2,
      },
    ],
  }
}
