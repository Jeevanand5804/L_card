import { Sparkles } from "lucide-react";

export default function BalanceCard({ points = 1250, targetPoints = 2000 }) {
  const safeTarget = targetPoints > 0 ? targetPoints : 1;
  const progress = Math.min(Math.round((points / safeTarget) * 100), 100);

  return (
    <div className="mt-6 p-6 rounded-3xl bg-gradient-to-br from-purple-800 to-indigo-900 shadow-xl">

      <p className="text-sm opacity-70">YOUR BALANCE</p>

      <h1 className="text-4xl font-bold mt-2"><Sparkles size={24} className="inline-block text-yellow-400 mr-2" />
        {points.toLocaleString()} <span className="text-lg font-normal">points</span>
      </h1>

      {/* Progress */}
      <div className="mt-4">
        <div className="w-full h-2 bg-gray-700 rounded-full">
          <div className="h-2 rounded-full bg-gradient-to-r from-green-400 to-green-600" style={{ width: `${progress}%` }}></div>
        </div>

        <div className="flex justify-between text-sm mt-2 opacity-70">
          <span>{points.toLocaleString()} / {targetPoints.toLocaleString()}</span>
          <span>{progress}%</span>
        </div>
      </div>

    </div>
  );
}