import "./ServersCards.css";
import UsersIcon from "../Icons/UsersIcon.jsx";
import CopyIcon from "../Icons/ClipboardIcon.jsx";
import PlayIcon from "../Icons/PlayIcon.jsx";
import { useState } from "react";

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

  const clusterInfo = {
    name: serverName,
    ip: ipAddress,
    map: mapName,
    status: status,
    playerCount: playerCount,
    maxPlayers: maxPlayers,
  };

  const isPlayerCountEmpty = clusterInfo.playerCount === 0;
  const isServerOnline = clusterInfo.status === "Online";

  return (
    <div className="server-card_container">
      <div className="server-card">
        <div className="card-header">
          <h3 className="server-title">{clusterInfo.name}</h3>
          <div className="status-container">
            <span className="status-text">{clusterInfo.status}</span>
            <div
              className={`status-circle ${
                isServerOnline ? "online" : "offline"
              }`}
            ></div>
          </div>
        </div>
        <div className="card-info_container">
          <div className="card-info">
            <div className="card-player-count_container">
              <UsersIcon
                className={`users-icon ${isPlayerCountEmpty ? "empty" : ""}`}
              />
              <span
                className={`player-count ${isPlayerCountEmpty ? "empty" : ""}`}
              >
                {clusterInfo.playerCount}/{clusterInfo.maxPlayers}
              </span>
            </div>
          </div>
          <div className="map-info">
            <span className="card-map">{clusterInfo.map}</span>
            <div className="card-ip-container">
              <span
                className="card-ip"
                onClick={handleCopy}
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
              >
                {copied ? (
                  <span className="copied-text">Copied!</span>
                ) : hovering ? (
                  <CopyIcon className="clipboard-icon" />
                ) : (
                  clusterInfo.ip
                )}
              </span>
              <a
                className="play-button"
                rel="noopener noreferrer"
                target="_blank"
                href={`steam://run/346110//+connect ${clusterInfo.ip}`}
              >
                <PlayIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
