export const formatBarChartData = (k) => {
  const labels = k.map((k) => k.kablanName)
  const totalPrices = k.map((k) => k.totalPrice)
  const installers = k.map((k) => k.installers)

  return {
    labels,
    datasets: [
      {
        label: 'Total Price',
        data: totalPrices,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        yAxisID: 'y',
      },

      {
        label: 'Installers',
        data: installers,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        yAxisID: 'y1',
      },
    ],
  }
}

