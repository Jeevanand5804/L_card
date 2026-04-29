import { Outlet } from "react-router-dom";
import BottomNavbar from "../components/BottomNavbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0033] to-black text-white">
      
      <main className="px-5 py-6 pb-28 max-w-5xl mx-auto">
        <Outlet />
      </main>

      <BottomNavbar />
    </div>
  );
}