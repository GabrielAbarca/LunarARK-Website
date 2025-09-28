import "./MapSection.css";
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
    { class: "cave-theIsland-1", url: "https://example.com/theIsland/cave1" },
    { class: "cave-theIsland-2", url: "https://example.com/theIsland/cave2" }
  ],
  theCenter: [
    { class: "cave-theCenter-1", url: "https://example.com/theCenter/cave1" },
    { class: "cave-theCenter-2", url: "https://example.com/theCenter/cave2" }
  ],
  scorchedEarth: [
    { class: "cave-scorchedEarth-1", url: "https://example.com/scorchedEarth/cave1" },
    { class: "cave-scorchedEarth-2", url: "https://example.com/scorchedEarth/cave2" }
  ],
  aberration: [
    { class: "cave-aberration-1", url: "https://example.com/aberration/cave1" },
    { class: "cave-aberration-2", url: "https://example.com/aberration/cave2" }
  ],
  extinction: [
    { class: "cave-extinction-1", url: "https://example.com/extinction/cave1" },
    { class: "cave-extinction-2", url: "https://example.com/extinction/cave2" }
  ],
  genesisPart1: [
    { class: "cave-genesisPart1-1", url: "https://example.com/genesisPart1/cave1" },
    { class: "cave-genesisPart1-2", url: "https://example.com/genesisPart1/cave2" }
  ],
  genesisPart2: [
    { class: "cave-genesisPart2-1", url: "https://example.com/genesisPart2/cave1" },
    { class: "cave-genesisPart2-2", url: "https://example.com/genesisPart2/cave2" }
  ],
  crystalIsles: [
    { class: "cave-crystalIsles-1", url: "https://example.com/crystalIsles/cave1" },
    { class: "cave-crystalIsles-2", url: "https://example.com/crystalIsles/cave2" }
  ],
  lostIsland: [
    { class: "cave-lostIsland-1", url: "https://example.com/lostIsland/cave1" },
    { class: "cave-lostIsland-2", url: "https://example.com/lostIsland/cave2" }
  ],
  ragnarok: [
    { class: "cave-ragnarok-1", url: "https://example.com/ragnarok/cave1" },
    { class: "cave-ragnarok-2", url: "https://example.com/ragnarok/cave2" }
  ],
  valguero: [
    { class: "cave-valguero-1", url: "https://example.com/valguero/cave1" },
    { class: "cave-valguero-2", url: "https://example.com/valguero/cave2" }
  ],
  fjordur: [
    { class: "cave-fjordur-1", url: "https://example.com/fjordur/cave1" },
    { class: "cave-fjordur-2", url: "https://example.com/fjordur/cave2" }
  ]
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
  fjordur: FjordurMap
};
export default function MapSection() {
  const [currentMap, setCurrentMap] = useState(mapNames.theIsland);
  const [isDropdownOpen] = useState(true);

  function handleDropdownClick(newMapName) {
    setCurrentMap(newMapName);
  }

  const currentMapKey = Object.keys(mapNames).find(
  key => mapNames[key] === currentMap
);

  return (
    <section className="map-section">
      <ParticlesBackground />
      <h2>Lunar Caves</h2>
      <div className="map-container">
        <div className="map-menu">
          {isDropdownOpen && (
            <div className="dropdown-container">
              {Object.entries(mapNames).map(([key, mapName]) => {
                const isActive = currentMap === mapName;
                return (
                  <div
                    key={key}
                    className={`dropdown-item ${isActive ? "active" : ""}`}
                    onClick={() => handleDropdownClick(mapName)}
                  >
                    <h4>{mapName}</h4>
                  </div>
                );
              })}
            </div>
          )}
        </div>
          <div className="map-content">
  {caveButtonsByMap[currentMapKey]?.map(({ class: caveClass, url }) => (
    <a
      key={caveClass}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`cave-link`}
      style={{ position: "absolute" }}
    >
      <div className={`cave-button ${caveClass}`}></div>
    </a>
  ))}
  <img
    src={mapImages[currentMapKey]}
    className="map-image"
    alt={`Map of ${currentMap}`}
  />
</div>
        </div>
    </section>
  );
}
