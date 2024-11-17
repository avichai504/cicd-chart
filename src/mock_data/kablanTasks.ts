export type TasksCompletedData = {
  name: string; // Name of the individual
  tasksCompleted: number; // Number of tasks completed
};

// Function to generate data dynamically
export const getTasksCompletedData = (): TasksCompletedData[] => [
  { name: 'ישראל ישראלי', tasksCompleted: 10 },
  { name: 'ירון ירוני', tasksCompleted: 7 },
  { name: 'עבד אבוטאגי', tasksCompleted: 15 },
  { name: 'גלעד כהן', tasksCompleted: 12 },
  { name: 'אלעד אלעדי', tasksCompleted: 9 },
];
