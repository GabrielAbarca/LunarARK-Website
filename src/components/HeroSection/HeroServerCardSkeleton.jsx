// Placeholder shown while server status loads. Mirrors HeroServerCard's outer
// box, status accent bar, and internal block heights so swapping to the real
// card causes no layout shift.
export default function HeroServerCardSkeleton() {
  return (
    <div
      aria-hidden="true"
      className="flex-shrink-0 w-64 overflow-hidden bg-card-bg border border-white/10 rounded-xl animate-pulse"
    >
      {/* Status accent bar */}
      <div className="h-1 w-full bg-white/10" />

      <div className="flex flex-col gap-4 p-5">
        {/* Header: name + status */}
        <div className="flex items-center justify-between gap-2">
          <div className="h-7 w-32 rounded bg-white/10" />
          <div className="h-4 w-14 rounded bg-white/10" />
        </div>

        {/* Map caption */}
        <div className="h-5 w-24 rounded bg-white/10" />

        {/* Player count */}
        <div className="flex items-center gap-2.5">
          <div className="h-6 w-6 rounded bg-white/10" />
          <div className="h-7 w-28 rounded bg-white/10" />
        </div>

        {/* Join */}
        <div className="h-[42px] w-full rounded-lg bg-white/10" />
      </div>
    </div>
  );
}
