import axios from "axios";

const iconMap = {
  Coffee: "Coffee",
  Gift: "Cake",
  Sandwich: "Sandwich",
  Sparkles: "Sparkles",
};

export async function getHomeData() {
  try {
    const token = localStorage.getItem("authToken");

    if (!token) {
      throw new Error("No auth token");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const [profileRes, historyRes] = await Promise.all([
      axios.get("http://localhost:5000/api/user/profile", { headers }),
      axios.get("http://localhost:5000/api/history", { headers }),
    ]);

    const profile = profileRes.data;
    const history = historyRes.data.slice(0, 3);

    return {
      user: {
        name: profile.name,
        streakDays: profile.streak,
      },
      balance: {
        points: profile.points,
        targetPoints: 2000,
      },
      nextReward: {
        pointsNeeded: 2000 - profile.points,
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
      recentActivity: history.map((item) => ({
        id: item._id,
        title: item.label,
        time: new Date(item.createdAt).toLocaleString([], {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        points: item.points,
        icon: iconMap[item.icon] || "Sparkles",
      })),
    };
  } catch (error) {
    console.error("Error fetching home data:", error);

    return {
      user: {
        name: "User",
        streakDays: 0,
      },
      balance: {
        points: 0,
        targetPoints: 2000,
      },
      nextReward: {
        pointsNeeded: 2000,
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
      recentActivity: [],
    };
  }
}
