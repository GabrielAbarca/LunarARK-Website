import { cn } from "../../lib/utils.js";

// Break a millisecond delta into day/hour/minute/second parts, clamped at zero
// so an expired timer can never render negative digits.
function getCountdownParts(deltaMs) {
  const totalSeconds = Math.max(0, Math.floor(deltaMs / 1000));
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

const pad = (value) => String(value).padStart(2, "0");

function CountdownSegment({ value, caption }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-mono text-3xl md:text-4xl text-neon-blue leading-none">
        {pad(value)}
      </span>
      <span className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-1">
        {caption}
      </span>
    </div>
  );
}

function Colon() {
  return <span className="font-mono text-2xl text-gray-600 leading-none">:</span>;
}

export default function WipeCountdownCard({ label, target, now, wipeAtLocal }) {
  const isExpired = target <= now;
  const parts = getCountdownParts(target - now);

  return (
    <div
      className={cn(
        "flex-1 md:max-w-sm flex flex-col items-center gap-3 p-6 bg-card-bg rounded-xl border transition-colors duration-300",
        isExpired
          ? "border-neon-green/30 shadow-[0_0_40px_rgba(0,254,140,0.15)]"
          : "border-white/10 shadow-[0_0_40px_rgba(0,255,213,0.15)]"
      )}
    >
      <h3 className="text-sm font-gugi text-gray-300 uppercase tracking-widest">
        {label}
      </h3>

      {/* Fixed-height middle slot so the ticking → expired swap never shifts
          the card's layout. */}
      <div className="min-h-16 flex items-center justify-center">
        {isExpired ? (
          <div role="status" className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse" />
            <span className="font-gugi text-xl text-neon-green uppercase tracking-wider">
              Wipe in progress
            </span>
          </div>
        ) : (
          // Digits mutate every second — hide them from screen readers, which
          // read the static "Wipes at ..." line below instead.
          <div aria-hidden="true" className="flex items-center gap-2">
            <CountdownSegment value={parts.days} caption="Days" />
            <Colon />
            <CountdownSegment value={parts.hours} caption="Hrs" />
            <Colon />
            <CountdownSegment value={parts.minutes} caption="Min" />
            <Colon />
            <CountdownSegment value={parts.seconds} caption="Sec" />
          </div>
        )}
      </div>

      <p className="text-xs text-gray-400 font-montserrat text-center">
        {isExpired
          ? "Fresh start live now — next date coming soon"
          : `Wipes at ${wipeAtLocal}`}
      </p>
    </div>
  );
}
