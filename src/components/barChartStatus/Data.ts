// Data.ts
export type KablanData = {
  kablanName: string;
  missionWaiting: number;
  missionCompleted: number;
  missionCanceled: number;
};

// Function to generate data dynamically
export const getKablansData = (): KablanData[] => [
  {
    kablanName: 'ירון ירוני',
    missionWaiting: 5,
    missionCompleted: 3,
    missionCanceled: 0,
  },
  {
    kablanName: 'אריאל אריאלי',
    missionWaiting: 4,
    missionCompleted: 2,
    missionCanceled: 1,
  },
  {
    kablanName: 'כפיר כפירי',
    missionWaiting: 2,
    missionCompleted: 1,
    missionCanceled: 1,
  },
  {
    kablanName: 'עידו עידו',
    missionWaiting: 7,
    missionCompleted: 3,
    missionCanceled: 1,
  },
  {
    kablanName: 'אלעד אלעדי',
    missionWaiting: 6,
    missionCompleted: 2,
    missionCanceled: 1,
  },
  {
    kablanName: 'אלון אלוני',
    missionWaiting: 5,
    missionCompleted: 3,
    missionCanceled: 0,
  },
];
