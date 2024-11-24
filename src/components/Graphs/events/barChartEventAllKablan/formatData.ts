export const formatEventData = (tasks) => {
  const eventTypes = [
    'משימה שהושלמה',
    'בעיות ביצוע',
    'בקשת חריגים',
    'ממתין לאישור',
    'משימה שדולגה',
  ]

  const kablanData: { [key: string]: { [key: string]: number } } = tasks.reduce(
    (acc, { eventTypes: type, kablanName }) => {
      if (!acc[kablanName])
        acc[kablanName] = eventTypes.reduce(
          (obj, event) => ({ ...obj, [event]: 0 }),
          {}
        )
      acc[kablanName][type] += 1
      return acc
    },
    {}
  )

  return {
    labels: Object.keys(kablanData),
    datasets: eventTypes.map((eventType) => ({
      label: eventType,
      data: Object.values(kablanData).map((kablan) => kablan[eventType]),
      backgroundColor: colorForEvent(eventType),
      borderColor: colorForEvent(eventType),
      borderWidth: 1,
    })),
  }
}

const colorForEvent = (eventType) =>
  ({
    'משימה שהושלמה': 'rgba(54, 162, 235, 1)',
    'בעיות ביצוע': 'rgba(255, 99, 132, 1)',
    'בקשת חריגים': 'rgba(75, 192, 192, 1)',
    'ממתין לאישור': 'rgba(153, 102, 255, 1)',
    'משימה שדולגה': 'rgba(255, 159, 64, 1)',
  }[eventType] || 'rgba(0, 0, 0, 1)') // Default color
