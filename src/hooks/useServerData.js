import { useEffect, useState } from "react";

const REFRESH_INTERVAL_MS = 30000;
const REQUEST_TIMEOUT_MS = 30000;

export default function useServerData() {
  const [servers, setServers] = useState([]);
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

        const payload = Array.isArray(json.data) ? json.data : [];

        const mapped = payload.map((s, index) => ({
          serverName: s.name?.split("[")[0]?.trim() ?? "Unknown Server",
          ipAddress: `${s.ip ?? "unknown"}:${s.port ?? "unknown"}`,
          mapName: s.map?.replace(/([a-z])([A-Z])/g, "$1 $2") ?? "Unknown Map",
          status: s.status
            ? s.status.replace("dead", "Offline").replace(/^./, c => c.toUpperCase())
            : "Unknown",
          playerCount: s.players ?? 0,
          playerMax: s.maxPlayers ?? 0,
          key: index,
        }));

        if (mounted) {
          setServers(mapped);
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

  return { servers, loading, error, lastUpdated };
}
