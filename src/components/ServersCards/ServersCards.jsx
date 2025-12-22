import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import UsersIcon from "../Icons/UsersIcon.jsx";
import CopyIcon from "../Icons/ClipboardIcon.jsx";
import PlayIcon from "../Icons/PlayIcon.jsx";

// Import backgrounds
import theIsland from "../../assets/backgrounds/website_mapbanner_theisland.png";
import genesis2 from "../../assets/backgrounds/website_mapbanner__genesis2.png";
import extinction from "../../assets/backgrounds/website_mapbanner__extinction.png";
import scorchedEarth from "../../assets/backgrounds/website_mapbanner_scorchedearth.png";
import aberration from "../../assets/backgrounds/website_mapbanner_aberration.png";
import ragnarok from "../../assets/backgrounds/website_mapbanner_ragnarok.png";
import valguero from "../../assets/backgrounds/website_mapbanner_valguero.png";
import crystalIsles from "../../assets/backgrounds/website_mapbanner_crystalisles.png";
import fjordur from "../../assets/backgrounds/website_mapbanner_fjordur.png";
import lostIsland from "../../assets/backgrounds/website_mapbanner_lostisland.png";
import genesis1 from "../../assets/backgrounds/website_mapbanner_genesis1.png";
import theCenter from "../../assets/backgrounds/website_mapbanner_thecenter.png";

const mapBackgrounds = {
  "The Island": theIsland,
  "Genesis 2": genesis2,
  "Extinction": extinction,
  "Scorched Earth": scorchedEarth,
  "Aberration": aberration,
  "Ragnarok": ragnarok,
  "Valguero": valguero,
  "Crystal Isles": crystalIsles,
  "Fjordur": fjordur,
  "Lost Island": lostIsland,
  "Genesis Part 1": genesis1, // Adjust key if needed based on actual data
  "Genesis 1": genesis1,
  "The Center": theCenter,
};

export default function ServersCards({
  serverName,
  ipAddress,
  mapName,
  status,
  playerCount,
  maxPlayers,
}) {
  const [copied, setCopied] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(ipAddress).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const isPlayerCountEmpty = playerCount === 0;
  const isServerOnline = status === "Online";
  const backgroundImage = mapBackgrounds[mapName] || theIsland; // Fallback

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center p-4"
    >
      <div 
        className="relative w-full max-w-4xl rounded-xl overflow-hidden border border-white/10 bg-card-bg shadow-lg group hover:border-neon-blue/50 transition-all duration-300"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 50%, rgba(10,10,10,0.4) 100%), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="p-6 md:p-8 flex flex-col gap-6 relative z-10">
          {/* Header */}
          <div className="flex justify-between items-start md:items-center">
            <h3 className="text-xl md:text-2xl font-gugi text-white tracking-wide group-hover:text-neon-blue transition-colors duration-300">
              {serverName}
            </h3>
            <div className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full border border-white/10">
              <span className={cn("text-sm font-medium", isServerOnline ? "text-green-400" : "text-red-400")}>
                {status}
              </span>
              <div className={cn("w-2 h-2 rounded-full animate-pulse", isServerOnline ? "bg-green-500 shadow-[0_0_8px_#22c55e]" : "bg-red-500")} />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-gray-300">
                <UsersIcon className={cn("w-5 h-5", isPlayerCountEmpty ? "text-gray-600" : "text-neon-blue")} />
                <span className={cn("font-mono text-lg", isPlayerCountEmpty && "text-gray-600")}>
                  {playerCount} <span className="text-gray-500">/</span> {maxPlayers}
                </span>
              </div>
              <span className="text-gray-400 text-sm font-montserrat">{mapName}</span>
            </div>

            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
              <div 
                className="flex items-center justify-between md:justify-center gap-3 bg-black/60 border border-white/10 rounded-lg px-4 h-[60px] cursor-pointer hover:border-neon-blue/50 hover:bg-black/80 transition-all duration-300 w-full md:w-[240px]"
                onClick={handleCopy}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                <span className="font-mono text-sm text-gray-300 truncate text-center w-full">
                  {copied ? <span className="text-green-400 font-bold">IP Copied!</span> : (hovering ? "Click to Copy IP" : ipAddress)}
                </span>
                {!copied && <CopyIcon className="w-4 h-4 text-neon-blue flex-shrink-0" />}
              </div>

              <a
                href={`steam://run/346110//+connect ${ipAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-neon-green/10 border border-neon-green/30 text-neon-green rounded-lg px-6 py-3 hover:bg-neon-green/20 hover:shadow-[0_0_15px_rgba(0,254,140,0.3)] transition-all duration-300 font-bold uppercase tracking-wider text-sm text-center"
              >
                <PlayIcon className="w-4 h-4" />
                Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
