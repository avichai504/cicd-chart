export type KablanPricingData = {
  kablanName: string; // Name of the contractor
  totalPrice: number; // Total price for the kablan
  installers: number; // Number of installers
};

// Function to generate data dynamically
export const getKablanPricingData = (): KablanPricingData[] => [
  { kablanName: 'ירון ירוני', totalPrice: 3907, installers: 8 },
  { kablanName: 'אריאל אריאלי', totalPrice: 6080, installers: 6 },
  { kablanName: 'כפיר כפירי', totalPrice: 1455, installers: 3 },
  { kablanName: 'עידו עידו', totalPrice: 3122, installers: 11 },
  { kablanName: 'אלעד אלעדי', totalPrice: 1880, installers: 10 },
  { kablanName: 'אלון אלוני', totalPrice: 4000, installers: 8 },
  { kablanName: 'אורי אורי', totalPrice: 8700, installers: 7 },
  { kablanName: 'אורן אורני', totalPrice: 3000, installers: 9 },
];
