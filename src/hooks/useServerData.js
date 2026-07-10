import { useEffect, useState } from "react";

const REFRESH_INTERVAL_MS = 30000;
const REQUEST_TIMEOUT_MS = 30000;

// Normalize one raw server record from the API into the shape the cards consume.
// Every field is defensively defaulted so a server polled with partial data still
// renders safely instead of throwing. `clusterId` scopes the React key so keys
// stay unique even if two clusters ever report the same ip:port.
function mapServer(s, clusterId) {
  const ipAddress = `${s.ip ?? "unknown"}:${s.port ?? "unknown"}`;
  return {
    serverName: s.name?.split("[")[0]?.trim() ?? "Unknown Server",
    ipAddress,
    mapName: s.map?.replace(/([a-z])([A-Z])/g, "$1 $2") ?? "Unknown Map",
    status: s.status
      ? s.status.replace("dead", "Offline").replace(/^./, (c) => c.toUpperCase())
      : "Unknown",
    playerCount: s.players ?? 0,
    playerMax: s.maxPlayers ?? 0,
    key: `${clusterId}:${ipAddress}`,
  };
}

export default function useServerData() {
  // Ordered array of clusters: [{ id, label, servers: mapped[] }]. A cluster that
  // failed to poll arrives as { id, label, servers: [] } — present but empty — so it
  // never breaks a sibling cluster's display.
  const [clusters, setClusters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    let mounted = true;
    let firstLoad = true;
    let controller;

    if (!apiUrl) {
      setError("Server data is temporarily unavailable.");
      setLoading(false);
      return;
    }

    async function load() {
      controller = new AbortController();
      const activeController = controller;
      const timeoutId = setTimeout(() => activeController.abort(), REQUEST_TIMEOUT_MS);

      try {
        const res = await fetch(`${apiUrl}/api/server-status`, {
          signal: activeController.signal,
        });
        if (!res.ok) throw new Error("Failed to fetch server status");

        const json = await res.json();

        // New clustered shape: { lastUpdated, clusters: { <id>: { label, servers } } }.
        // The legacy flat `json.data` array is deprecated and no longer consumed.
        const rawClusters =
          json.clusters && typeof json.clusters === "object" ? json.clusters : {};

        const mappedClusters = Object.entries(rawClusters).map(([id, cluster]) => ({
          id,
          label: cluster?.label ?? id.toUpperCase(),
          servers: Array.isArray(cluster?.servers)
            ? cluster.servers.map((s) => mapServer(s, id))
            : [],
        }));

        if (mounted) {
          setClusters(mappedClusters);
          setError(null);
          setLastUpdated(Date.now());
        }
      } catch (err) {
        // Only surface an error on the first load. A failed background
        // refresh keeps the last good data on screen instead of replacing
        // it with the error state; the "last updated" age keeps climbing,
        // which signals the data is going stale.
        if (mounted && firstLoad) {
          setError(
            err.name === "AbortError"
              ? "The server took too long to respond. Please try again."
              : err.message
          );
        }
      } finally {
        clearTimeout(timeoutId);
        if (mounted) setLoading(false);
        firstLoad = false;
      }
    }

    load();
    const intervalId = setInterval(load, REFRESH_INTERVAL_MS);

    return () => {
      mounted = false;
      clearInterval(intervalId);
      if (controller) controller.abort();
    };
  }, [apiUrl]);

  return { clusters, loading, error, lastUpdated };
}
