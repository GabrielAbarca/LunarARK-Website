import { cn } from "../../lib/utils";
import UsersIcon from "../Icons/UsersIcon.jsx";
import PlayIcon from "../Icons/PlayIcon.jsx";

// Compact hero variant of the servers-page card. Styling mirrors
// ServersCards for consistency; the Join link uses the same Steam
// connect format (steam://run/346110//+connect <ip:port>).
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
    <div className="flex-shrink-0 w-64 flex flex-col gap-4 bg-card-bg border border-white/10 rounded-xl p-5 hover:border-neon-blue/50 transition-all duration-300">
      {/* Header: name + status */}
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-lg font-gugi text-white tracking-wide truncate">
          {serverName}
        </h3>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className={cn("text-xs font-medium", isServerOnline ? "text-green-400" : "text-red-400")}>
            {status}
          </span>
          <div className={cn("w-2 h-2 rounded-full animate-pulse", isServerOnline ? "bg-green-500 shadow-[0_0_8px_#22c55e]" : "bg-red-500")} />
        </div>
      </div>

      {/* Map + player count */}
      <div className="flex flex-col gap-2">
        <span className="text-gray-400 text-sm font-montserrat truncate">{mapName}</span>
        <div className="flex items-center gap-2 text-gray-300">
          <UsersIcon className={cn("w-5 h-5", isPlayerCountEmpty ? "text-gray-600" : "text-neon-blue")} />
          <span className={cn("font-mono text-base", isPlayerCountEmpty && "text-gray-600")}>
            {playerCount} <span className="text-gray-500">/</span> {maxPlayers}
          </span>
        </div>
      </div>

      {/* Join */}
      <a
        href={`steam://run/346110//+connect ${ipAddress}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-neon-green/10 border border-neon-green/30 text-neon-green rounded-lg px-4 py-2.5 hover:bg-neon-green/20 hover:shadow-[0_0_15px_rgba(0,254,140,0.3)] transition-all duration-300 font-bold uppercase tracking-wider text-sm"
      >
        <PlayIcon />
        Join
      </a>
    </div>
  );
}
