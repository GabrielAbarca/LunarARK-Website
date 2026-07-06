import { useEffect, useState } from "react";

export default function useServerData() {
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    let mounted = true;

    if (!apiUrl) {
      setError("Server data is temporarily unavailable.");
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    async function load() {
      try {
        const res = await fetch(`${apiUrl}/api/server-status`, {
          signal: controller.signal,
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
        }
      } catch (err) {
        if (mounted) {
          setError(
            err.name === "AbortError"
              ? "The server took too long to respond. Please try again."
              : err.message
          );
        }
      } finally {
        clearTimeout(timeoutId);
        if (mounted) setLoading(false);
      }
    }

    load();

    return () => {
      mounted = false;
      clearTimeout(timeoutId);
      controller.abort();
    };
  }, [apiUrl]);

  return { servers, loading, error };
}
