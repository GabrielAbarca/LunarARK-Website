import useFetchServerData from "./useFetchServerData.js";

export default function useServerData() {
  const { serverFetchData, loading, error } =
    useFetchServerData("/api/server-status");

  const payload = Array.isArray(serverFetchData)
    ? serverFetchData
    : serverFetchData?.data ?? null;

  if (serverFetchData && serverFetchData.slow && serverFetchData.slow.length) {
    console.warn("[useServerData] slow servers:", serverFetchData.slow);
  }

  if (loading || error || !payload || payload.length === 0) {
    return { servers: [], loading, error };
  }

  const isDataValid = payload.every(
    (server) => server && server.ip && server.port && server.name
  );
  if (!isDataValid) {
    return { servers: [], loading, error };
  }

  const servers = payload.map((serverData, index) => {
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
      key: index,
    };
  });

  return { servers, loading: false, error: null };
}