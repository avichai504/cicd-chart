export function formatBarChartData(kablan) {
  const labels = kablan.map((k) => k.kablanName);
  const missionWaiting = kablan.map((k) => k.missionWaiting);
  const missionCompleted = kablan.map((k) => k.missionCompleted);
  const missionCanceled = kablan.map((k) => k.missionCanceled);

  return {
    labels,
    datasets: [
      {
        label: 'Mission Waiting',
        data: missionWaiting,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        yAxisID: 'y',
      },
      {
        label: 'Mission Completed',
        data: missionCompleted,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        yAxisID: 'y1',
      },
      {
        label: 'Mission Canceled',
        data: missionCanceled,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        yAxisID: 'y2',
      },
    ],
  };
}
