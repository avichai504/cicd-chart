export const formatGroupedBarChartData = (data) => {
  const labels = data.map((d) => d.taskType)
  const contractorWorkerData = data.map((d) => d.contractorWorker)
  const mainContractorData = data.map((d) => d.mainContractor)

  return {
    labels,
    datasets: [
      {
        label: 'עובד קבלן',
        data: contractorWorkerData,
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Blue
      },
      {
        label: 'קבלן ראשי',
        data: mainContractorData,
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Red
      },
    ],
  }
}
