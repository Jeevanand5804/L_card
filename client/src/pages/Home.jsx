import { useEffect, useState } from "react";
import BalanceCard from "../components/BalanceCard";
import RewardCard from "../components/RewardCard";
import { NavLink } from "react-router-dom";
import { CreditCard, Sparkles, Coffee, Sandwich, Cake } from "lucide-react";
import { getHomeData } from "../services/homeService";

const iconMap = {
  CreditCard,
  Sparkles,
  Coffee,
  Sandwich,
  Cake,
};

const colorMap = {
  yellow: "bg-yellow-400",
  green: "bg-green-400",
};

export default function Home() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    let mounted = true;

    getHomeData().then((data) => {
      if (mounted) {
        setHomeData(data);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  if (!homeData) {
    return <div className="py-10 text-white/70">Loading dashboard...</div>;
  }

  const { user, balance, nextReward, quickActions, recentActivity } = homeData;

  return (
    <div>
      {/* Header */}
      <p className="text-xs tracking-widest opacity-60">WELCOME BACK</p>
      <h1 className="text-3xl font-semibold mt-1">
        Hello, <span className="text-green-400">{user.name}</span>
      </h1>

      {/* Streak */}
      <div className="mt-4 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-yellow-400/10 text-yellow-300 text-sm">
        🔥 {user.streakDays}-day streak · keep it going!
      </div>

      {/* Cards */}
      <BalanceCard points={balance.points} targetPoints={balance.targetPoints} />
      <RewardCard
        pointsNeeded={nextReward.pointsNeeded}
        rewardName={nextReward.rewardName}
      />

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        {quickActions.map((action) => {
          const Icon = iconMap[action.icon] ?? Sparkles;
          const colorClass = colorMap[action.color] ?? "bg-green-400";

          return (
            <button
              key={action.id}
              className="flex-1 flex items-center gap-3 px-4 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <div className={`${colorClass} p-2 rounded-full`}>
                <Icon size={18} className="text-black" />
              </div>
              <div className="text-left">
                <p className="font-medium">{action.title}</p>
                <p className="text-xs opacity-60">{action.subtitle}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-sm tracking-widest opacity-60">
            RECENT ACTIVITY
          </h2>
          <NavLink to="/history">
            <span className="text-green-400 text-sm cursor-pointer">
              See all
            </span>
          </NavLink>
        </div>

        <div className="mt-4 space-y-4">
          {recentActivity.map((activity) => {
            const Icon = iconMap[activity.icon] ?? Sparkles;
            const positive = activity.points > 0;

            return (
              <div
                key={activity.id}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-purple-700/40 p-3 rounded-full">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-xs opacity-60">{activity.time}</p>
                  </div>
                </div>
                <p className={`font-medium ${positive ? "text-green-400" : "text-yellow-400"}`}>
                  {positive ? `+${activity.points}` : activity.points}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
