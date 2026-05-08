import { Routes, Route } from "react-router-dom";
import Auth from "../pages/Login";
import Home from "../pages/Home";
import Rewards from "../pages/Rewards";
import Profile from "../pages/Profile";
import History from "../pages/History";
import MainLayout from "../Layouts/MainLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}