import { Lock, Sparkles } from "lucide-react";
import coffeeImage from "../assets/images/Coffee.jpg";
import sandwichImage from "../assets/images/Artisan Sandwich.jpg";
import cakeImage from "../assets/images/Chocolate Cake.jpeg";
import tumblerImage from "../assets/images/Tumbler.webp";

const rewards = [
  {
    id: 1,
    title: "Free Coffee",
    subtitle: "Any size, any blend",
    points: 2000,
    image: coffeeImage,
  },
  {
    id: 2,
    title: "Artisan Sandwich",
    subtitle: "Fresh and made to order",
    points: 2500,
    image: sandwichImage,
  },
  {
    id: 3,
    title: "Chocolate Cake",
    subtitle: "Single slice",
    points: 1800,
    image: cakeImage,
  },
  {
    id: 4,
    title: "L-Card Tumbler",
    subtitle: "Limited edition",
    points: 4000,
    image: tumblerImage,
  },
];

export default function Rewards() {
  const userPoints = 1250; // 🔥 Replace with backend data later

  return (
    <section className="max-w-6xl mx-auto px-4 pt-2 pb-8">
      <p className="text-xs tracking-[0.25em] uppercase text-white/60">
        Catalog
      </p>

      <h1 className="mt-2 text-4xl font-semibold leading-none">
        Rewards
      </h1>

      {/* Points Badge */}
      <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-400/10 px-4 py-2 text-emerald-300">
        <Sparkles size={16} />
        <span className="font-semibold">
          {userPoints.toLocaleString()} points available
        </span>
      </div>

      {/* Responsive Grid */}
      <div className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {rewards.map((reward) => {
          const isUnlocked = userPoints >= reward.points;

          return (
            <article
              key={reward.id}
              className="rounded-[2rem] border border-white/10 bg-[#170835]/90 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] transition hover:scale-105 hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden rounded-[1.75rem] bg-black/70">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-fuchsia-700/35" />

                <img
                  src={reward.image}
                  alt={reward.title}
                  className="h-40 w-full object-cover blur-[1.6px]"
                  loading="lazy"
                />

                {/* Lock Overlay */}
                {!isUnlocked && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                      <Lock size={20} className="text-white/85" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="mt-4">
                <h2 className="text-lg md:text-xl font-semibold leading-tight">
                  {reward.title}
                </h2>

                <p className="mt-1 text-sm text-white/65">
                  {reward.subtitle}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 text-yellow-300">
                    <Sparkles size={14} />
                    <span className="font-semibold">
                      {reward.points.toLocaleString()}
                    </span>
                  </div>

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      isUnlocked
                        ? "bg-green-600 text-white"
                        : "bg-[#2a1652] text-white/70"
                    }`}
                  >
                    {isUnlocked ? "Redeem" : "Locked"}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}