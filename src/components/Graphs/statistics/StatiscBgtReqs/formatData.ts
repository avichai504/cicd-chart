// formatData.ts
export const formatBgtReqsData = (data) => {
  const labels = ['Granted Requests', 'Denied Requests', 'Waiting Requests']
  const totalRequests = [
    data.bgtReqs.grantedReq,
    data.bgtReqs.deniedReq,
    data.bgtReqs.waitingReq,
  ]
  const todayRequests = [
    data.bgtReqs.grantedToday,
    data.bgtReqs.deniedToday,
    data.bgtReqs.createdToday,
  ]

  return {
    labels,
    datasets: [
      {
        label: 'Total Requests',
        data: totalRequests,
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)', // Green for granted
          'rgba(255, 99, 132, 0.6)', // Red for denied
          'rgba(54, 162, 235, 0.6)', // Blue for waiting
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
      {
        label: 'Requests Today',
        data: todayRequests,
        backgroundColor: [
          'rgba(75, 192, 192, 0.8)', // Darker green for granted today
          'rgba(255, 99, 132, 0.8)', // Darker red for denied today
          'rgba(54, 162, 235, 0.8)', // Darker blue for waiting today
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
}
