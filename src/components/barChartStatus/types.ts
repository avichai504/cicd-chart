// src/components/barChartStatus/types.ts

export type KablanData = {
  kablanName: string; // The name of the contractor (kablan)
  taskWaiting: number; // The number of tasks currently waiting
  taskCompleted: number; // The number of tasks completed
  taskSkip: number; // The number of tasks skipped
};
