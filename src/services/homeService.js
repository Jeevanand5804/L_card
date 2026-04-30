// Temporary service layer. Replace this with a real API call later.
export async function getHomeData() {
  return {
    user: {
      name: "Alex",
      streakDays: 7,
    },
    balance: {
      points: 1250,
      targetPoints: 2000,
    },
    nextReward: {
      pointsNeeded: 750,
      rewardName: "Free Coffee",
    },
    quickActions: [
      {
        id: "card",
        title: "L-Card",
        subtitle: "Show and scan",
        icon: "CreditCard",
        color: "yellow",
      },
      {
        id: "rewards",
        title: "Rewards",
        subtitle: "Browse all",
        icon: "Sparkles",
        color: "green",
      },
    ],
    recentActivity: [
      {
        id: 1,
        title: "Bought Latte",
        time: "Today · 09:14",
        points: 20,
        icon: "Coffee",
      },
      {
        id: 2,
        title: "Bought Sandwich",
        time: "Today · 12:42",
        points: 30,
        icon: "Sandwich",
      },
      {
        id: 3,
        title: "Redeemed Cake",
        time: "Yesterday · 16:20",
        points: -1800,
        icon: "Cake",
      },
    ],
  };
}
