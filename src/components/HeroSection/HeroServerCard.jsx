import { cn } from "../../lib/utils";
import UsersIcon from "../Icons/UsersIcon.jsx";

// Hero-specific server card: compact and status-forward. Distinct from the
// servers-page card (ServersCards) — flat card-bg, no map art, player count as
// the focal point. The Join link uses the same Steam connect format
// (steam://run/346110//+connect <ip:port>) and is disabled when the server
// isn't Online.
export default function HeroServerCard({
  serverName,
  mapName,
  status,
  playerCount,
  maxPlayers,
  ipAddress,
}) {
  const isServerOnline = status === "Online";
  const isPlayerCountEmpty = playerCount === 0;

  return (
    <div className="flex-shrink-0 w-64 overflow-hidden bg-card-bg border border-white/10 rounded-xl hover:border-neon-blue/50 transition-all duration-300">
      {/* Status accent bar */}
      <div className={cn("h-1 w-full", isServerOnline ? "bg-neon-green" : "bg-red-500")} />

      <div className="flex flex-col gap-4 p-5">
        {/* Header: name + status pill */}
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-gugi text-white tracking-wide truncate">
            {serverName}
          </h3>
          <div className="flex items-center gap-1.5 flex-shrink-0">
            <span className={cn("text-xs font-medium", isServerOnline ? "text-green-400" : "text-red-400")}>
              {status}
            </span>
            <div className={cn("w-2 h-2 rounded-full", isServerOnline ? "bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse" : "bg-red-500")} />
          </div>
        </div>

        {/* Map caption */}
        <span className="text-gray-400 text-sm font-montserrat truncate">{mapName}</span>

        {/* Player count — focal point */}
        <div className="flex items-center gap-2.5">
          <UsersIcon className={cn("w-6 h-6 flex-shrink-0", isPlayerCountEmpty ? "text-gray-600" : "text-neon-blue")} />
          <div className="flex items-baseline gap-1.5">
            <span className={cn("font-mono text-2xl leading-none", isPlayerCountEmpty ? "text-gray-500" : "text-neon-blue")}>
              {playerCount}
            </span>
            <span className="font-mono text-base text-gray-500 leading-none">/ {maxPlayers}</span>
            <span className="text-xs text-gray-500 font-montserrat uppercase tracking-wider ml-0.5">players</span>
          </div>
        </div>

        {/* Join */}
        {isServerOnline ? (
          <a
            href={`steam://run/346110//+connect ${ipAddress}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-neon-green/10 border border-neon-green/30 text-neon-green rounded-lg px-4 py-2.5 hover:bg-neon-green/20 hover:shadow-[0_0_15px_rgba(0,254,140,0.3)] transition-all duration-300 font-bold uppercase tracking-wider text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
              aria-hidden="true"
            >
              <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
            Join
          </a>
        ) : (
          <span
            aria-disabled="true"
            className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-gray-500 rounded-lg px-4 py-2.5 cursor-not-allowed font-bold uppercase tracking-wider text-sm"
          >
            Offline
          </span>
        )}
      </div>
    </div>
  );
}
