export const formatBarChartData = (k) => {
  const labels = k.map((d) => d.kablanName)
  const totalPrices = k.map((d) => d.totalPrice)

  return {
    labels,
    datasets: [
      {
        label: 'Total Price',
        data: totalPrices,
        backgroundColor: 'rgba(12, 12, 215, 0.6)',
      },
    ],
  }
}

