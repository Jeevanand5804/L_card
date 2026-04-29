import { NavLink } from "react-router-dom";
import { Home, Gift, History, User } from "lucide-react";

export default function BottomNavbar() {
  const base = "flex flex-col items-center text-xs transition-all";

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] max-w-md 
    bg-purple-900/60 backdrop-blur-xl rounded-3xl py-3 px-2 
    flex justify-around shadow-2xl border border-white/10">

      <NavLink to="/" className={({ isActive }) =>
        `${base} ${isActive ? "text-black bg-green-400 px-3 py-2 rounded-xl scale-110" : "text-gray-400"}`
      }>
        <Home size={20} />
        <span>Home</span>
      </NavLink>

      <NavLink to="/rewards" className={({ isActive }) =>
        `${base} ${isActive ? "text-black bg-green-400 px-3 py-2 rounded-xl scale-110" : "text-gray-400"}`
      }>
        <Gift size={20} />
        <span>Rewards</span>
      </NavLink>

      <NavLink to="/history" className={({ isActive }) =>
        `${base} ${isActive ? "text-black bg-green-400 px-3 py-2 rounded-xl scale-110" : "text-gray-400"}`
      }>
        <History size={20} />
        <span>History</span>
      </NavLink>

      <NavLink to="/profile" className={({ isActive }) =>
        `${base} ${isActive ? "text-black bg-green-400 px-3 py-2 rounded-xl scale-110" : "text-gray-400"}`
      }>
        <User size={20} />
        <span>Profile</span>
      </NavLink>

    </div>
  );
}