// src/data/TaskWorkerData.ts

export type TaskWorkerData = {
  taskType: string; // Type or description of the task
  contractorWorker: number; // Number of contractor workers for the task
  mainContractor: number; // Number of main contractors for the task
};

// Function to generate data dynamically
export const getTaskWorkerData = (): TaskWorkerData[] => [
  { taskType: 'משימה 1', contractorWorker: 10, mainContractor: 5 },
  { taskType: 'משימה 2', contractorWorker: 8, mainContractor: 7 },
  { taskType: 'התקנת חלון', contractorWorker: 12, mainContractor: 4 },
  { taskType: 'איטום חלון', contractorWorker: 6, mainContractor: 10 },
  { taskType: 'משימה 3', contractorWorker: 9, mainContractor: 8 },
  { taskType: 'משימה 4', contractorWorker: 7, mainContractor: 11 },
];
