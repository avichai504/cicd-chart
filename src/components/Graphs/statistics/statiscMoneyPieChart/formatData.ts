export function formatPieChartData(data) {
  // Categories with their respective properties
  const categories = [
    { label: 'משימות שהושלמו', color: 'rgba(54, 162, 235, 0.6)' },
    { label: 'משימות בהמתנה', color: 'rgba(75, 192, 192, 0.6)' },
    { label: 'משימות שדולגו', color: 'rgba(255, 99, 132, 0.6)' },
  ]

  // Prepare the dataset for the pie chart
  const dataset = categories.map((category) => {
    const categoryData = data.find((item) => item.category === category.label)
    return categoryData ? categoryData.totalPrice : 0
  })

  return {
    labels: categories.map((category) => category.label), // Labels for pie slices
    datasets: [
      {
        data: dataset, // Values for each slice
        backgroundColor: categories.map((category) => category.color), // Colors for the slices
        borderColor: 'rgba(255, 255, 255, 1)', // Border color for each slice
        borderWidth: 2,
      },
    ],
  }
}
