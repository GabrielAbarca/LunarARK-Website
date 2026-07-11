import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { WIPES } from "./wipeData.js";
import WipeCountdownCard from "./WipeCountdownCard.jsx";

// Render the scheduled UTC wipe time in the visitor's own locale/timezone so
// it's unambiguous. Computed once per wipe (the timezone can't change while
// the page is open), never re-run on every tick.
function formatWipeAtLocal(target) {
  return new Date(target).toLocaleString(undefined, {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

// Parse the client-edited config exactly once at module load. Entries with no
// date (null) are dropped silently; entries with an unparseable date are
// dropped too and warned about in dev only — a bad edit must never crash the
// live site.
const scheduledWipes = WIPES.map((wipe) => {
  if (wipe.wipeAt == null) return null;

  const target = typeof wipe.wipeAt === "string" ? Date.parse(wipe.wipeAt) : NaN;
  if (Number.isNaN(target)) {
    if (import.meta.env.DEV) {
      console.warn(
        `[WipeCountdown] Ignoring invalid wipeAt for "${wipe.id}": ${wipe.wipeAt}`
      );
    }
    return null;
  }

  return {
    id: wipe.id,
    label: wipe.label,
    target,
    wipeAtLocal: formatWipeAtLocal(target),
  };
}).filter(Boolean);

export default function WipeCountdown() {
  // A single 1-second tick drives every card, so their seconds flip in sync.
  // Seeding from Date.now() means the first paint already shows the true
  // remaining time — no flash of 00:00:00:00.
  const [now, setNow] = useState(() => Date.now());
  const allExpired = scheduledWipes.every((wipe) => wipe.target <= now);

  useEffect(() => {
    // Nothing left to count down — don't spin an interval.
    if (scheduledWipes.length === 0 || allExpired) return;

    const intervalId = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(intervalId);
  }, [allExpired]);

  // No scheduled wipes at all — hide the section without leaving a gap.
  if (scheduledWipes.length === 0) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      aria-label="Server wipe countdowns"
      className="w-full max-w-3xl mb-12 flex flex-col md:flex-row justify-center gap-4"
    >
      {scheduledWipes.map((wipe) => (
        <WipeCountdownCard
          key={wipe.id}
          label={wipe.label}
          target={wipe.target}
          now={now}
          wipeAtLocal={wipe.wipeAtLocal}
        />
      ))}
    </motion.section>
  );
}
