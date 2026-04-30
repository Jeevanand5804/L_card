import { useState } from "react";
import {
  Bell,
  CakeSlice,
  Flame,
  FlameKindling,
  Coffee,
  Crown,
  Zap,
  LogOut,
  Settings,
  Shield,
  User
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const accountStats = [
  { id: "points", label: "Total Points", value: "1,250" },
  { id: "streak", label: "Current Streak", value: "7 days" },
  { id: "level", label: "Member Tier", value: "Gold" },
];

const achievements = [
  {
    id: 1,
    title: "Coffee Lover",
    subtitle: "10 coffees purchased",
    Icon: Coffee,
    unlocked: true,
  },
  {
    id: 2,
    title: "Frequent Buyer",
    subtitle: "50 transactions",
    Icon: Zap,
    unlocked: true,
  },
  {
    id: 3,
    title: "Streak Master",
    subtitle: "7-day streak",
    Icon: Flame,
    unlocked: true,
  },
  {
    id: 4,
    title: "Early Bird",
    subtitle: "Order before 8am, 10x",
    Icon: FlameKindling,
    unlocked: false,
  },
  {
    id: 5,
    title: "Sweet Tooth",
    subtitle: "Redeem 5 desserts",
    Icon: CakeSlice,
    unlocked: false,
  },
  {
    id: 6,
    title: "VIP",
    subtitle: "Reach Platinum",
    Icon: Crown,
    unlocked: false,
  },
];

export default function Profile() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <section className="relative mx-auto w-full max-w-5xl pb-36 md:pb-10 px-4">

      {/* 🔥 Top Right Settings Icon */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full bg-[#24124a] p-3 hover:bg-[#2b1758] transition"
        >
          <Settings size={20} />
        </button>

        {/* Dropdown */}
        {menuOpen && (
          <div className="absolute right-0 mt-3 w-44 rounded-2xl border border-white/10 bg-[#1a0d38]/95 shadow-xl p-2">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-2 rounded-xl px-4 py-2 text-red-400 hover:bg-red-500/10 transition"
            >
              <LogOut size={16} />
              Log Out
            </button>
          </div>
        )}
      </div>

      {/* Header */}
      <p className="text-xs uppercase tracking-[0.25em] text-white/60">
        ACCOUNT
      </p>
      <h1 className="mt-2 text-4xl font-semibold leading-none">
        Profile
      </h1>

      {/* Profile Card */}
      <article className="mt-7 rounded-[2rem] border border-white/10 bg-[#1a0f38]/90 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-300">
            <User size={30} />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Alex Morgan</h2>
            <p className="text-sm text-white/60">alex@example.com</p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {accountStats.map((stat) => (
            <div
              key={stat.id}
              className="rounded-2xl border border-white/10 bg-[#211147]/80 p-4"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-white/55">
                {stat.label}
              </p>
              <p className="mt-2 text-2xl font-semibold text-emerald-300">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </article>

      {/* Info Cards */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <article className="rounded-[2rem] border border-white/10 bg-[#1a0f38]/90 p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-violet-500/20 p-2 text-violet-200">
              <Bell size={18} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Notifications</h3>
              <p className="text-sm text-white/60">
                Email and push alerts are enabled.
              </p>
            </div>
          </div>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-[#1a0f38]/90 p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-sky-500/20 p-2 text-sky-200">
              <Shield size={18} />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Security</h3>
              <p className="text-sm text-white/60">
                2-factor protection is active.
              </p>
            </div>
          </div>
        </article>
      </div>

      <section className="mt-6">
        <h2 className="text-xs uppercase tracking-[0.25em] text-white/60">
          Achievements
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => {
            const Icon = achievement.Icon;

            return (
              <article
                key={achievement.id}
                className={`rounded-[2rem] border p-6 text-center shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition ${
                  achievement.unlocked
                    ? "border-white/10 bg-[#1a0f38]/90"
                    : "border-white/5 bg-[#120a28]/70 opacity-45"
                }`}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#2a1752] text-orange-300">
                  <Icon size={26} />
                </div>

                <h3 className="mt-4 text-lg font-semibold">{achievement.title}</h3>
                <p className="mt-1 text-sm text-white/60">{achievement.subtitle}</p>
              </article>
            );
          })}
        </div>
      </section>

    </section>
  );
}