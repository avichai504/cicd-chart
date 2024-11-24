export const eventData = {
  completedTasks: {
    data: {
      totalPrice: 60894, // מחיר כולל של כל המשימות שהושלמו
      tasksLen: 127, // מספר המשימות שהושלמו
    },
    cls: 'bg-green-100 text-green-700',
    icon: { name: 'check-double', clr: 'bg-green-700' },
  },
  probs: {
    data: {
      openProblems: 5, // מספר בעיות פתוחות
      solvedProblems: 71, // מספר בעיות שנפתרו
      solvedToday: 0, // מספר בעיות שנפתרו היום
      openToday: 0, // מספר בעיות שנפתחו היום
    },
    cls: 'bg-red-100 text-red-700',
    icon: { name: 'triangle-exclamation', clr: 'bg-red-700' },
  },
  bgtReqs: {
    data: {
      grantedReq: 22, // מספר בקשות תקציב שאושרו
      deniedReq: 24, // מספר בקשות תקציב שנדחו
      waitingReq: 3, // מספר בקשות תקציב שממתינות לאישור
      grantedToday: 0, // מספר בקשות תקציב שאושרו היום
      deniedToday: 0, // מספר בקשות תקציב שנדחו היום
      createdToday: 0, // מספר בקשות תקציב שנוצרו היום
    },
    cls: 'bg-yellow-100',
    icon: { name: 'hand-holding-dollar', clr: 'bg-yellow-800' },
  },
  waitingTasks: {
    data: {
      totalPrice: 2102, // מחיר כולל של משימות בהמתנה
      tasksLen: 3, // מספר המשימות בהמתנה
    },
    cls: 'bg-blue-100 text-blue-700',
    icon: { name: 'hourglass-half', clr: 'bg-blue-700' },
  },
  skippedTasks: {
    data: {
      totalPrice: 45205, // מחיר כולל של משימות שדולגו
      skippedToday: 0, // מספר משימות שדולגו היום
      totalSkipped: 74, // סך הכל משימות שדולגו
    },
    cls: 'bg-gray-100 text-gray-700',
    icon: { name: 'arrow-rotate-left', clr: 'bg-gray-700' },
  },
}
