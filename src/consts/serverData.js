import useFetchServerData from "../hooks/useFetchServerData.js";

export default function ServerData() {
  const { serverFetchData, loading, error } =
    useFetchServerData("/api/server-status");

  if (loading || error || !serverFetchData || serverFetchData.length === 0) {
    return { servers: [], loading, error };
  }
  const servers = serverFetchData.map((serverData, index) => {
    const cleanServerName =
      serverData.name?.split("[")[0]?.trim() || "Unknown Server";
    const joinedIp = `${serverData.ip || "unknown"}:${
      serverData.port || "unknown"
    }`;
    const cleanMap = serverData.map
      ? serverData.map.replace(/([a-z])([A-Z])/g, "$1 $2")
      : "Unknown Map";
    const cleanStatus = serverData.status
      ? serverData.status
          .replace("dead", "Offline")
          .replace(/^./, (char) => char.toUpperCase())
      : "Unknown";

    return {
      serverName: cleanServerName,
      ipAddress: joinedIp,
      mapName: cleanMap,
      status: cleanStatus,
      playerCount: serverData.players ?? 0,
      playerMax: serverData.maxPlayers ?? 0,
      lastWipe: "06/13",
      key: index,
    };
  });

  return { servers, loading: false, error: null };
}
