export const formatBarChartData = (k) => {
  const labels = k.map((k) => k.kablanName)
  const totalPrices = k.map((k) => k.totalPrice)

  return {
    labels,
    datasets: [
      {
        label: 'Total Price',
        data: totalPrices,
        backgroundColor: 'rgba(0, 0, 255, 0.6)',
        yAxisID: 'y',
      },
    ],
  }
}

