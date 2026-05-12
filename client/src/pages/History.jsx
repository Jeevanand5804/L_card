import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Coffee, Gift, Sandwich, Sparkles } from "lucide-react";

const iconMap = {
  Coffee,
  Gift,
  Sandwich,
  Sparkles,
};

const fallbackSections = [
  {
    id: "empty",
    title: "NO HISTORY",
    items: [],
  },
];

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      return;
    }

    axios
      .get("http://localhost:5000/api/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setHistory(response.data))
      .catch((error) => {
        console.error("Error fetching history:", error);
      });
  }, []);

  const timelineSections = useMemo(() => {
    if (!history.length) {
      return fallbackSections;
    }

    const grouped = history.reduce((acc, item) => {
      const date = new Date(item.createdAt);
      const key = date.toDateString();

      if (!acc[key]) {
        acc[key] = [];
      }

      acc[key].push({
        id: item._id,
        label: item.label,
        time: date.toLocaleString([], {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        points: item.points,
        Icon: iconMap[item.icon] ?? Sparkles,
        tone: item.type,
      });

      return acc;
    }, {});

    return Object.entries(grouped).map(([dateLabel, items]) => ({
      id: dateLabel,
      title: new Date(dateLabel).toLocaleDateString([], {
        weekday: "long",
        month: "short",
        day: "numeric",
      }).toUpperCase(),
      items,
    }));
  }, [history]);

  const totals = timelineSections
    .flatMap((section) => section.items)
    .reduce(
      (acc, item) => {
        if (item.points > 0) {
          acc.earned += item.points;
        } else {
          acc.redeemed += Math.abs(item.points);
        }
        return acc;
      },
      { earned: 0, redeemed: 0 },
    );

  return (
    <section className="mx-auto w-full max-w-5xl px-1 pb-36 pt-2 md:px-4 md:pb-10">
      <p className="text-xs uppercase tracking-[0.25em] text-white/60">Timeline</p>
      <h1 className="mt-2 text-4xl font-semibold leading-none">Activity</h1>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <article className="rounded-[2rem] border border-white/10 bg-[#1d103f]/80 p-6 shadow-[0_0_26px_rgba(34,197,94,0.12)_inset]">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">Earned</p>
          <p className="mt-3 text-4xl font-semibold leading-none text-emerald-400 md:text-5xl">
            +{totals.earned}
          </p>
        </article>

        <article className="rounded-[2rem] border border-white/10 bg-[#1d103f]/80 p-6 shadow-[0_0_26px_rgba(250,204,21,0.1)_inset]">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">Redeemed</p>
          <p className="mt-3 text-4xl font-semibold leading-none text-amber-400 md:text-5xl">
            -{totals.redeemed}
          </p>
        </article>
      </div>

      <div className="mt-9 space-y-8">
        {timelineSections.map((section) => (
          <div key={section.id}>
            <h2 className="text-xs uppercase tracking-[0.25em] text-white/60">
              {section.title}
            </h2>

            <div className="mt-4 space-y-4">
              {section.items.map((item) => {
                const Icon = item.Icon;
                const positive = item.points > 0;

                return (
                  <div key={item.id} className="relative pl-8 md:pl-10">
                    <span
                      className={`absolute left-0 top-2 z-10 h-3.5 w-3.5 rounded-full ${
                        item.tone === "redeem" ? "bg-amber-400" : "bg-emerald-400"
                      }`}
                    />

                    <span className="absolute left-[0.39rem] top-6 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-emerald-300/80 to-transparent" />

                    <article className="flex items-center justify-between rounded-[2rem] border border-white/10 bg-[#1a0f38]/90 px-4 py-4 shadow-[0_8px_24px_rgba(0,0,0,0.25)] md:px-5">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[#2a1752] p-3 text-white/90">
                          <Icon size={20} />
                        </div>

                        <div>
                          <p className="text-xl font-semibold leading-tight md:text-2xl">
                            {item.label}
                          </p>
                          <p className="mt-1 text-sm text-white/60 md:text-base">
                            {item.time}
                          </p>
                        </div>
                      </div>

                      <p
                        className={`text-2xl font-semibold md:text-3xl ${
                          positive ? "text-emerald-400" : "text-amber-400"
                        }`}
                      >
                        {positive ? `+${item.points}` : item.points}
                      </p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}