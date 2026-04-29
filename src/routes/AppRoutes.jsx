import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Rewards from "../pages/Rewards";
import Profile from "../pages/Profile";
import History from "../pages/History";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rewards" element={<Rewards />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}