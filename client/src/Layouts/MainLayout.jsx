import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import BottomNavbar from "../components/BottomNavbar";

export default function MainLayout() {

  const location = useLocation();

  // Hide navbar on auth pages
  const hideNavbar = location.pathname === "/";
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0033] to-black text-white px-4 py-8 pb-30 sm:px-6 md:px-8 lg:px-10">

      <Outlet />

      {!hideNavbar && <BottomNavbar />}

    </div>
  );
}