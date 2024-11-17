export type MonthlyTaskData = {
  month: string; // The name of the month
  completedTasks: number; // The number of completed tasks for the month
};

// Function to generate data dynamically
export const getMonthlyTasksData = (): MonthlyTaskData[] => [
  { month: 'January', completedTasks: 5 },
  { month: 'February', completedTasks: 12 },
  { month: 'March', completedTasks: 18 },
  { month: 'April', completedTasks: 10 },
  { month: 'May', completedTasks: 20 },
  { month: 'June', completedTasks: 25 },
  { month: 'July', completedTasks: 1 },
  { month: 'August', completedTasks: 22 },
  { month: 'September', completedTasks: 19 },
  { month: 'October', completedTasks: 23 },
  { month: 'November', completedTasks: 16 },
  { month: 'December', completedTasks: 21 },
];
