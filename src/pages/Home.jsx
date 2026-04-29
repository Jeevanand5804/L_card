import BalanceCard from "../components/BalanceCard";
import RewardCard from "../components/RewardCard";
import { NavLink } from "react-router-dom";
import History from "../pages/History";
import { CreditCard, Sparkles, Coffee, Sandwich, Cake } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0033] to-black text-white px-5 py-6 pb-28">
      {/* Header */}
      <p className="text-xs tracking-widest opacity-60">WELCOME BACK</p>
      <h1 className="text-3xl font-semibold mt-1">
        Hello, <span className="text-green-400">Alex</span>
      </h1>

      {/* Streak */}
      <div className="mt-4 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-yellow-400/10 text-yellow-300 text-sm">
        🔥 7-day streak · keep it going!
      </div>

      {/* Cards */}
      <BalanceCard />
      <RewardCard />

      {/* Action Buttons */}
      <div className="flex gap-4 mt-6">
        <button className="flex-1 flex items-center gap-3 px-4 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
          <div className="bg-yellow-400 p-2 rounded-full">
            <CreditCard size={18} className="text-black" />
          </div>
          <div className="text-left">
            <p className="font-medium">L-Card</p>
            <p className="text-xs opacity-60">Show & scan</p>
          </div>
        </button>

        <button className="flex-1 flex items-center gap-3 px-4 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
          <div className="bg-green-400 p-2 rounded-full">
            <Sparkles size={18} className="text-black" />
          </div>
          <div className="text-left">
            <p className="font-medium">Rewards</p>
            <p className="text-xs opacity-60">Browse all</p>
          </div>
        </button>
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
          {/* Item 1 */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="flex items-center gap-3">
              <div className="bg-purple-700/40 p-3 rounded-full">
                <Coffee size={18} />
              </div>
              <div>
                <p className="font-medium">Bought Latte</p>
                <p className="text-xs opacity-60">Today · 09:14</p>
              </div>
            </div>
            <p className="text-green-400 font-medium">+20</p>
          </div>

          {/* Item 2 */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="flex items-center gap-3">
              <div className="bg-purple-700/40 p-3 rounded-full">
                <Sandwich size={18} />
              </div>
              <div>
                <p className="font-medium">Bought Sandwich</p>
                <p className="text-xs opacity-60">Today · 12:42</p>
              </div>
            </div>
            <p className="text-green-400 font-medium">+30</p>
          </div>

          {/* Item 3 */}
          <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <div className="flex items-center gap-3">
              <div className="bg-purple-700/40 p-3 rounded-full">
                <Cake size={18} />
              </div>
              <div>
                <p className="font-medium">Redeemed Cake</p>
                <p className="text-xs opacity-60">Yesterday · 16:20</p>
              </div>
            </div>
            <p className="text-yellow-400 font-medium">-1800</p>
          </div>
        </div>
      </div>
    </div>
  );
}
