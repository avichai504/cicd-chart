export const formatData = (data) => {
  const labels = data.map((d) => d.kablanName)
  const materialsData = data.map((d) => d.materialsCost)
  const laborData = data.map((d) => d.laborCost)
  const miscellaneousData = data.map((d) => d.miscellaneousCost)

  return {
    labels,
    datasets: [
      {
        label: 'Materials Cost',
        data: materialsData,
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Labor Cost',
        data: laborData,
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Red
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Miscellaneous Cost',
        data: miscellaneousData,
        backgroundColor: 'rgba(255, 205, 86, 0.6)', // Yellow
        borderColor: 'rgba(255, 205, 86, 1)',
        borderWidth: 1,
      },
    ],
  }
}
