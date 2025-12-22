import TheIslandMap from "../../assets/maps/TheIslandMap.jpg";
import TheCenterMap from "../../assets/maps/TheCenterMap.jpg";
import ScorchedEarthMap from "../../assets/maps/ScorchedEarthMap.webp";
import AberrationMap from "../../assets/maps/AberrationMap.jpg";
import ExtinctionMap from "../../assets/maps/ExtinctionMap.jpg";
import GenesisPart1Map from "../../assets/maps/GenesisPart1Map.jpg";
import GenesisPart2Map from "../../assets/maps/GenesisPart2Map.jpg";
import CrystalIslesMap from "../../assets/maps/CrystalIslesMap.jpg";
import LostIslandMap from "../../assets/maps/LostIslandMap.jpg";
import RagnarokMap from "../../assets/maps/RagnarokMap.webp";
import ValgueroMap from "../../assets/maps/ValgueroMap.jpg";
import FjordurMap from "../../assets/maps/FjordurMap.jpg";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground.jsx";
import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { FaTools } from "react-icons/fa";

const mapNames = {
  theIsland: "The Island",
  theCenter: "The Center",
  scorchedEarth: "Scorched Earth",
  aberration: "Aberration",
  extinction: "Extinction",
  genesisPart1: "Genesis Part 1",
  genesisPart2: "Genesis Part 2",
  crystalIsles: "Crystal Isles",
  lostIsland: "Lost Island",
  ragnarok: "Ragnarok",
  valguero: "Valguero",
  fjordur: "Fjordur",
};

const caveButtonsByMap = {
  theIsland: [
    { class: "top-[14.17%] left-[10.14%]", url: "https://example.com/theIsland/cave1" },
    { class: "top-[71.00%] left-[40.57%]", url: "https://example.com/theIsland/cave2" },
  ],
  theCenter: [
    { class: "top-[19.00%] left-[44.57%]", url: "https://example.com/theCenter/cave1" },
    { class: "top-[71.00%] left-[30.43%]", url: "https://example.com/theCenter/cave2" },
  ],
  scorchedEarth: [
    { class: "top-[25.67%] left-[14.71%]", url: "https://example.com/scorchedEarth/cave1" },
    { class: "top-[62.17%] left-[41.86%]", url: "https://example.com/scorchedEarth/cave2" },
  ],
  aberration: [
    { class: "top-[12.83%] left-[34.14%]", url: "https://example.com/aberration/cave1" },
    { class: "top-[55.50%] left-[17.14%]", url: "https://example.com/aberration/cave2" },
  ],
  extinction: [
    { class: "top-[31.17%] left-[11.43%]", url: "https://example.com/extinction/cave1" },
    { class: "top-[71.17%] left-[40.00%]", url: "https://example.com/extinction/cave2" },
  ],
  genesisPart1: [
    { class: "top-[20.17%] left-[30.43%]", url: "https://example.com/genesisPart1/cave1" },
    { class: "top-[60.33%] left-[23.00%]", url: "https://example.com/genesisPart1/cave2" },
  ],
  genesisPart2: [
    { class: "top-[23.83%] left-[38.14%]", url: "https://example.com/genesisPart2/cave1" },
    { class: "top-[71.17%] left-[11.43%]", url: "https://example.com/genesisPart2/cave2" },
  ],
  crystalIsles: [
    { class: "top-[15.17%] left-[26.71%]", url: "https://example.com/crystalIsles/cave1" },
    { class: "top-[57.67%] left-[34.14%]", url: "https://example.com/crystalIsles/cave2" },
  ],
  lostIsland: [
    { class: "top-[28.33%] left-[19.14%]", url: "https://example.com/lostIsland/cave1" },
    { class: "top-[69.00%] left-[43.57%]", url: "https://example.com/lostIsland/cave2" },
  ],
  ragnarok: [
    { class: "top-[17.17%] left-[38.14%]", url: "https://example.com/ragnarok/cave1" },
    { class: "top-[64.50%] left-[11.43%]", url: "https://example.com/ragnarok/cave2" },
  ],
  valguero: [
    { class: "top-[22.33%] left-[32.57%]", url: "https://example.com/valguero/cave1" },
    { class: "top-[60.33%] left-[20.43%]", url: "https://example.com/valguero/cave2" },
  ],
  fjordur: [
    { class: "top-[25.67%] left-[17.14%]", url: "https://example.com/fjordur/cave1" },
    { class: "top-[71.17%] left-[38.14%]", url: "https://example.com/fjordur/cave2" },
  ],
};

const mapImages = {
  theIsland: TheIslandMap,
  theCenter: TheCenterMap,
  scorchedEarth: ScorchedEarthMap,
  aberration: AberrationMap,
  extinction: ExtinctionMap,
  genesisPart1: GenesisPart1Map,
  genesisPart2: GenesisPart2Map,
  crystalIsles: CrystalIslesMap,
  lostIsland: LostIslandMap,
  ragnarok: RagnarokMap,
  valguero: ValgueroMap,
  fjordur: FjordurMap,
};

const caveData = {
  theIsland: [
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
  ],
  theCenter: [
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
  ],
  scorchedEarth: [
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
  ],
  aberration: [
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
  ],
  extinction: [
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
  ],
  genesisPart1: [
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
  ],
  genesisPart2: [
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
  ],
  crystalIsles: [
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
  ],
  lostIsland: [
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
  ],
  ragnarok: [
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
  ],
  valguero: [
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
  ],
  fjordur: [
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
    { longitude: 0, latitude: 0, size: "Inactive", entranceType: "Inactive", underwater: false, videoId: "" },
  ],
};

export default function MapSection() {
  const [currentMap, setCurrentMap] = useState(mapNames.theIsland);
  const isDesktop = useMediaQuery("(min-width: 1900px)");
  const [selectedCaveIdx, setSelectedCaveIdx] = useState(0);

  function handleDropdownClick(newMapName) {
    setCurrentMap(newMapName);
    setSelectedCaveIdx(0);
  }

  const currentMapKey = Object.keys(mapNames).find(
    (key) => mapNames[key] === currentMap
  );

  return (
    <section className="w-full mt-72 mb-20 relative">
      <ParticlesBackground />
      <h2 className="text-4xl md:text-6xl font-gugi text-neon-blue text-center mb-12 drop-shadow-[0_0_10px_rgba(0,255,213,0.5)]">
        Lunar Caves
      </h2>
      
      <div className="w-full grid grid-cols-1 xl:grid-cols-[1fr_auto_1fr] items-center gap-12 px-4 max-w-[1920px] mx-auto">
        {/* Map Menu - Left Column */}
        <div className="w-full flex flex-col items-center xl:items-end order-1">
          <div className="w-full max-w-md xl:max-w-xs flex flex-col items-center">
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-2">
              {Object.entries(mapNames).map(([key, mapName]) => {
                const isActive = currentMap === mapName;
                return (
                  <motion.div
                    key={key}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "flex items-center justify-center p-3 rounded-lg cursor-pointer transition-all duration-200 border border-transparent",
                      isActive 
                        ? "bg-black/80 text-neon-blue border-neon-blue/50 shadow-[0_0_10px_rgba(0,255,213,0.2)]" 
                        : "bg-card-bg text-gray-400 hover:bg-card-bg/80 hover:text-white"
                    )}
                    onClick={() => handleDropdownClick(mapName)}
                  >
                    <h4 className="text-sm font-medium text-center">{mapName}</h4>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Map Content - Center Column */}
        <div className="order-2 flex justify-center w-full">
          <div className="relative w-full max-w-2xl xl:w-[700px] aspect-[7/6] rounded-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentMapKey}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full"
              >
                <img
                  src={mapImages[currentMapKey]}
                  className="w-full h-full object-contain"
                  alt={`Map of ${currentMap}`}
                />
                
                {caveButtonsByMap[currentMapKey]?.map(({ class: positionClass }, idx) => (
                  <div
                    key={idx}
                    className={cn("absolute z-10", positionClass)}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedCaveIdx(idx);
                    }}
                  >
                    <div
                      className={cn(
                        "w-4 h-4 rounded-full cursor-pointer transition-all duration-300",
                        idx === selectedCaveIdx 
                          ? "bg-neon-blue shadow-[0_0_20px_#00ffd5] scale-125" 
                          : "bg-neon-blue shadow-[0_0_10px_#00ffd5] animate-pulse hover:scale-110"
                      )}
                    ></div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Info Panel - Right Column */}
        <div className="w-full flex flex-col items-center xl:items-start order-3 xl:h-[600px] justify-center">
          {isDesktop && (
            <div className="w-full max-w-md h-full bg-card-bg border border-white/10 rounded-2xl p-6 shadow-xl overflow-y-auto custom-scrollbar">
              {caveData[currentMapKey]?.[selectedCaveIdx] && (
                <div className="flex flex-col gap-6 text-gray-300">
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="text-xl font-bold text-white mb-4">Location Information</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/40 p-3 rounded-lg">
                        <p className="text-sm text-gray-400">Longitude</p>
                        <p className="text-lg font-mono text-neon-blue">{caveData[currentMapKey][selectedCaveIdx].longitude}</p>
                      </div>
                      <div className="bg-black/40 p-3 rounded-lg">
                        <p className="text-sm text-gray-400">Latitude</p>
                        <p className="text-lg font-mono text-neon-blue">{caveData[currentMapKey][selectedCaveIdx].latitude}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-white/10 pb-4">
                    <h3 className="text-xl font-bold text-white mb-4">Cave Information</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Size</span>
                        <span className="text-white">{caveData[currentMapKey][selectedCaveIdx].size}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Entrance Type</span>
                        <span className="text-white">{caveData[currentMapKey][selectedCaveIdx].entranceType}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">Underwater</span>
                        <span className={cn("font-medium", caveData[currentMapKey][selectedCaveIdx].underwater ? "text-blue-400" : "text-gray-500")}>
                          {caveData[currentMapKey][selectedCaveIdx].underwater ? "Yes" : "No"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full aspect-video rounded-lg overflow-hidden border border-neon-blue/30 shadow-[0_0_15px_rgba(0,255,213,0.1)] bg-black/40 flex flex-col justify-center items-center gap-4 group hover:border-neon-blue/50 transition-all duration-300">
                    <FaTools className="text-4xl text-neon-blue/50 group-hover:text-neon-blue group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-neon-blue/70 text-lg font-medium tracking-wide group-hover:text-neon-blue transition-colors duration-300">Video currently under development</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
