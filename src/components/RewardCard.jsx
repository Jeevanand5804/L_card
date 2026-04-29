export default function RewardCard() {
  return (
    <div className="mt-6 p-5 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10">

      <p className="text-sm opacity-70">ALMOST THERE</p>

      <h3 className="mt-2 text-lg">
        You are <span className="text-green-400 font-semibold">750 points</span> away from a{" "}
        <span className="text-yellow-400 font-semibold">Free Coffee</span>
      </h3>

    </div>
  );
}