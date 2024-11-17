export type TaskComplexityData = {
  taskType: string; // Type or description of the task
  complexityScore: number; // Score indicating the complexity of the task
};

// Function to generate data dynamically
export const getTaskComplexityData = (): TaskComplexityData[] => [
  { taskType: 'משימה 1', complexityScore: 7 },
  { taskType: 'משימה 2', complexityScore: 5 },
  { taskType: 'התקנת חלון', complexityScore: 8 },
  { taskType: 'איטום חלון', complexityScore: 9 },
  { taskType: 'משימה 3', complexityScore: 6 },
  { taskType: 'משימה 4', complexityScore: 4 },
];
