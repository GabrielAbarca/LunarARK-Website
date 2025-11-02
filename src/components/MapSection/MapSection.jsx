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
import useMediaQuery from "../../hooks/useMediaQuery";

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
    { class: "cave-theIsland-2", url: "https://example.com/theIsland/cave2" },
  ],
  theCenter: [
    { class: "cave-theCenter-1", url: "https://example.com/theCenter/cave1" },
    { class: "cave-theCenter-2", url: "https://example.com/theCenter/cave2" },
  ],
  scorchedEarth: [
    {
      class: "cave-scorchedEarth-1",
      url: "https://example.com/scorchedEarth/cave1",
    },
    {
      class: "cave-scorchedEarth-2",
      url: "https://example.com/scorchedEarth/cave2",
    },
  ],
  aberration: [
    { class: "cave-aberration-1", url: "https://example.com/aberration/cave1" },
    { class: "cave-aberration-2", url: "https://example.com/aberration/cave2" },
  ],
  extinction: [
    { class: "cave-extinction-1", url: "https://example.com/extinction/cave1" },
    { class: "cave-extinction-2", url: "https://example.com/extinction/cave2" },
  ],
  genesisPart1: [
    {
      class: "cave-genesisPart1-1",
      url: "https://example.com/genesisPart1/cave1",
    },
    {
      class: "cave-genesisPart1-2",
      url: "https://example.com/genesisPart1/cave2",
    },
  ],
  genesisPart2: [
    {
      class: "cave-genesisPart2-1",
      url: "https://example.com/genesisPart2/cave1",
    },
    {
      class: "cave-genesisPart2-2",
      url: "https://example.com/genesisPart2/cave2",
    },
  ],
  crystalIsles: [
    {
      class: "cave-crystalIsles-1",
      url: "https://example.com/crystalIsles/cave1",
    },
    {
      class: "cave-crystalIsles-2",
      url: "https://example.com/crystalIsles/cave2",
    },
  ],
  lostIsland: [
    { class: "cave-lostIsland-1", url: "https://example.com/lostIsland/cave1" },
    { class: "cave-lostIsland-2", url: "https://example.com/lostIsland/cave2" },
  ],
  ragnarok: [
    { class: "cave-ragnarok-1", url: "https://example.com/ragnarok/cave1" },
    { class: "cave-ragnarok-2", url: "https://example.com/ragnarok/cave2" },
  ],
  valguero: [
    { class: "cave-valguero-1", url: "https://example.com/valguero/cave1" },
    { class: "cave-valguero-2", url: "https://example.com/valguero/cave2" },
  ],
  fjordur: [
    { class: "cave-fjordur-1", url: "https://example.com/fjordur/cave1" },
    { class: "cave-fjordur-2", url: "https://example.com/fjordur/cave2" },
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
    {
      longitude: 12,
      latitude: 34,
      size: "Large",
      entranceType: "Natural",
      underwater: false,
      videoId: "FW9vsrPWujI",
    },
    {
      longitude: 56,
      latitude: 78,
      size: "Medium",
      entranceType: "Man-made",
      underwater: true,
      videoId: "dQw4w9WgXcQ",
    },
  ],
  theCenter: [
    {
      longitude: 23,
      latitude: 45,
      size: "Small",
      entranceType: "Natural",
      underwater: false,
      videoId: "kXYiU_JCYtU",
    },
    {
      longitude: 67,
      latitude: 89,
      size: "Large",
      entranceType: "Man-made",
      underwater: true,
      videoId: "3JZ_D3ELwOQ",
    },
  ],
  scorchedEarth: [
    {
      longitude: 34,
      latitude: 56,
      size: "Medium",
      entranceType: "Natural",
      underwater: false,
      videoId: "L_jWHffIx5E",
    },
    {
      longitude: 78,
      latitude: 12,
      size: "Small",
      entranceType: "Man-made",
      underwater: true,
      videoId: "Zi_XLOBDo_Y",
    },
  ],
  aberration: [
    {
      longitude: 45,
      latitude: 67,
      size: "Large",
      entranceType: "Natural",
      underwater: false,
      videoId: "RgKAFK5djSk",
    },
    {
      longitude: 89,
      latitude: 23,
      size: "Medium",
      entranceType: "Man-made",
      underwater: true,
      videoId: "OPf0YbXqDm0",
    },
  ],
  extinction: [
    {
      longitude: 56,
      latitude: 78,
      size: "Small",
      entranceType: "Natural",
      underwater: false,
      videoId: "YQHsXMglC9A",
    },
    {
      longitude: 12,
      latitude: 34,
      size: "Large",
      entranceType: "Man-made",
      underwater: true,
      videoId: "hT_nvWreIhg",
    },
  ],
  genesisPart1: [
    {
      longitude: 67,
      latitude: 89,
      size: "Medium",
      entranceType: "Natural",
      underwater: false,
      videoId: "ktvTqknDobU",
    },
    {
      longitude: 23,
      latitude: 45,
      size: "Small",
      entranceType: "Man-made",
      underwater: true,
      videoId: "fJ9rUzIMcZQ",
    },
  ],
  genesisPart2: [
    {
      longitude: 78,
      latitude: 12,
      size: "Large",
      entranceType: "Natural",
      underwater: false,
      videoId: "eVTXPUF4Oz4",
    },
    {
      longitude: 34,
      latitude: 56,
      size: "Medium",
      entranceType: "Man-made",
      underwater: true,
      videoId: "09R8_2nJtjg",
    },
  ],
  crystalIsles: [
    {
      longitude: 89,
      latitude: 23,
      size: "Small",
      entranceType: "Natural",
      underwater: false,
      videoId: "60ItHLz5WEA",
    },
    {
      longitude: 45,
      latitude: 67,
      size: "Large",
      entranceType: "Man-made",
      underwater: true,
      videoId: "pRpeEdMmmQ0",
    },
  ],
  lostIsland: [
    {
      longitude: 12,
      latitude: 78,
      size: "Medium",
      entranceType: "Natural",
      underwater: false,
      videoId: "CevxZvSJLk8",
    },
    {
      longitude: 56,
      latitude: 34,
      size: "Small",
      entranceType: "Man-made",
      underwater: true,
      videoId: "uelHwf8o7_U",
    },
  ],
  ragnarok: [
    {
      longitude: 23,
      latitude: 89,
      size: "Large",
      entranceType: "Natural",
      underwater: false,
      videoId: "YykjpeuMNEk",
    },
    {
      longitude: 67,
      latitude: 45,
      size: "Medium",
      entranceType: "Man-made",
      underwater: true,
      videoId: "lp-EO5I60KA",
    },
  ],
  valguero: [
    {
      longitude: 34,
      latitude: 12,
      size: "Small",
      entranceType: "Natural",
      underwater: false,
      videoId: "09R8_2nJtjg",
    },
    {
      longitude: 78,
      latitude: 56,
      size: "Large",
      entranceType: "Man-made",
      underwater: true,
      videoId: "hLQl3WQQoQ0",
    },
  ],
  fjordur: [
    {
      longitude: 45,
      latitude: 23,
      size: "Medium",
      entranceType: "Natural",
      underwater: false,
      videoId: "kJQP7kiw5Fk",
    },
    {
      longitude: 89,
      latitude: 67,
      size: "Small",
      entranceType: "Man-made",
      underwater: true,
      videoId: "2Vv-BfVoq4g",
    },
  ],
};

export default function MapSection() {
  const [currentMap, setCurrentMap] = useState(mapNames.theIsland);
  const [isDropdownOpen] = useState(true);
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
          {caveButtonsByMap[currentMapKey]?.map(({ class: caveClass }, idx) => (
            <div
              key={caveClass}
              className={`cave-link ${
                idx === selectedCaveIdx ? "button-active" : ""
              }`}
              style={{ position: "absolute" }}
              onClick={(e) => {
                e.preventDefault();
                setSelectedCaveIdx(idx);
              }}
            >
              <div
                className={`cave-button ${caveClass} ${
                  idx === selectedCaveIdx ? "button-active" : ""
                }`}
              ></div>
            </div>
          ))}
          <img
            src={mapImages[currentMapKey]}
            className="map-image"
            alt={`Map of ${currentMap}`}
          />
        </div>
        {isDesktop && (
          <div className="map-info-container">
            {caveData[currentMapKey]?.[selectedCaveIdx] && (
              <div className="info-outline">
                <div className="cave-info-block">
                  <div className="info-row location-header">
                    <p>Location Information</p>
                  </div>
                  <div className="info-row info-row-1">
                    <div className="info-col">
                      <p>
                        Longitude:{" "}
                        <span>
                          {caveData[currentMapKey][selectedCaveIdx].longitude}
                        </span>
                      </p>
                    </div>
                    <div className="info-col">
                      <p>
                        Latitude:{" "}
                        <span>
                          {caveData[currentMapKey][selectedCaveIdx].latitude}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="info-row cave-header">
                    <p>Cave information</p>
                  </div>
                  <div className="info-row">
                    <p>
                      Cave size:{" "}
                      <span>
                        {caveData[currentMapKey][selectedCaveIdx].size}
                      </span>
                    </p>
                  </div>
                  <div className="info-row">
                    <p>
                      Entrance type:{" "}
                      <span>
                        {caveData[currentMapKey][selectedCaveIdx].entranceType}
                      </span>
                    </p>
                  </div>
                  <div className="info-row">
                    <p>
                      Underwater:{" "}
                      <span>
                        {caveData[currentMapKey][selectedCaveIdx].underwater
                          ? "True"
                          : "False"}
                      </span>
                    </p>
                  </div>
                  <div className="info-row">
                    <div className="video-container">
                      <iframe
                        width="100%"
                        height="230"
                        src={`https://www.youtube.com/embed/${caveData[currentMapKey][selectedCaveIdx].videoId}`}
                        title="YouTube video preview"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
