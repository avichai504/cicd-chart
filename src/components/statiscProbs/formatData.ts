// formatData.js
export const formatData = (data) => {
  // Labels corresponding to different categories (open problems, solved problems, etc.)
  const labels = [
    'בעיות פתוחות', // Open Problems
    'בעיות שנפתרו', // Solved Problems
    'בעיות פתוחות היום', // Open Problems Today
    'בעיות שנפתרו היום', // Solved Problems Today
  ]

  // Values corresponding to the problem counts
  const dataValues = [
    data.probs.openProblems, // Open Problems
    data.probs.solvedProblems, // Solved Problems
    data.probs.openToday, // Open Problems Today
    data.probs.solvedToday, // Solved Problems Today
  ]

  return {
    labels,
    datasets: [
      {
        label: 'סטטיסטיקת בעיות', // Problem Statistics
        data: dataValues,
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)', // Green
          'rgba(255, 99, 132, 0.6)', // Red
          'rgba(54, 162, 235, 0.6)', // Blue
          'rgba(153, 102, 255, 0.6)', // Purple
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)', // Green
          'rgba(255, 99, 132, 1)', // Red
          'rgba(54, 162, 235, 1)', // Blue
          'rgba(153, 102, 255, 1)', // Purple
        ],
        borderWidth: 2,
      },
    ],
  }
}
