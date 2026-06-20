import React from "react";
import { Outlet } from "react-router-dom";

import BottomNavbar from "../components/BottomNavbar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0033] to-black text-white px-4 py-8 pb-30 sm:px-6 md:px-8 lg:px-10">

      <Outlet />

      <BottomNavbar />

    </div>
  );
}