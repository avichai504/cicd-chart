export type TaskCompletionData = {
  date: string; // The date the tasks were completed
  tasksCompleted: number; // Number of tasks completed on the specific date
  totalPrice: number; // Total price for the tasks completed on the specific date
};

// Function to generate data dynamically
export const getTaskCompletionData = (): TaskCompletionData[] => [
  { date: '2024-11-01', tasksCompleted: 5, totalPrice: 250 },
  { date: '2024-11-02', tasksCompleted: 3, totalPrice: 350 },
  { date: '2024-11-03', tasksCompleted: 8, totalPrice: 450 },
  { date: '2024-11-04', tasksCompleted: 6, totalPrice: 240 },
  { date: '2024-11-05', tasksCompleted: 7, totalPrice: 350 },
  { date: '2024-11-06', tasksCompleted: 4, totalPrice: 320 },
  { date: '2024-11-07', tasksCompleted: 9, totalPrice: 450 },
];
