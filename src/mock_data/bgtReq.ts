export type KablanCostData = {
  kablanName: string; // The name of the contractor (kablan)
  materialsCost: number; // The cost of materials
  laborCost: number; // The cost of labor
  miscellaneousCost: number; // The cost of miscellaneous expenses
};

// Function to generate data dynamically
export const getKablansCostData = (): KablanCostData[] => [
  {
    kablanName: 'אבי ניסים',
    materialsCost: 15000,
    laborCost: 20000,
    miscellaneousCost: 5000,
  },
  {
    kablanName: 'ישראל ישראלי',
    materialsCost: 18000,
    laborCost: 25000,
    miscellaneousCost: 7000,
  },
  {
    kablanName: 'ירון ירוני',
    materialsCost: 12000,
    laborCost: 22000,
    miscellaneousCost: 8000,
  },
  {
    kablanName: 'עבד אבוטאגי',
    materialsCost: 10000,
    laborCost: 15000,
    miscellaneousCost: 3000,
  },
];
