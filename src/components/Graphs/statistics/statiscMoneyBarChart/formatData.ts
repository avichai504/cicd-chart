import { ChartDataset } from 'chart.js'

export function formatBarChartData(data) {
  const categories = [
    {
      label: 'משימות שהושלמו',
      color: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
    },
    {
      label: 'משימות בהמתנה',
      color: 'rgba(75, 192, 192, 0.6)',
      borderColor: 'rgba(75, 192, 192, 1)',
    },
    {
      label: 'משימות שדולגו',
      color: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)',
    },
  ]

  const datasets = categories.map(({ label, color, borderColor }) => {
    const categoryData = data.find((item) => item.category === label)
    return {
      label,
      data: [categoryData?.totalPrice || 0],
      backgroundColor: color,
      borderColor,
      borderWidth: 2,
      datalabels: {
        display: true,
        color: 'black',
        formatter: (value) => `₪${value.toLocaleString()}`,
        font: { weight: 'bold', size: 14 },
        align: 'center', // Explicitly use a valid alignment
        anchor: 'center',
      },
    }
  })

  return {
    labels: ['משימות'],
    datasets,
  }
}
