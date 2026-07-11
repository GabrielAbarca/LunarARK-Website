import { useEffect, useState } from "react";

const REFRESH_INTERVAL_MS = 30000;
const REQUEST_TIMEOUT_MS = 30000;
const WARMUP_RETRY_MS = 2000;
const WARMUP_MAX_RETRIES = 10;

// Normalize one raw server record from the API into the shape the cards consume.
// Every field is defensively defaulted so a server polled with partial data still
// renders safely instead of throwing. A server the backend couldn't reach arrives
// as an { id, error } shape with no status/name/players — it renders as an
// "Unavailable" card in place. `clusterId` scopes the React key so keys stay
// unique even across errored entries that share the same "unknown" ip:port.
function mapServer(s, clusterId) {
  const ipAddress = `${s.ip ?? "unknown"}:${s.port ?? "unknown"}`;
  return {
    serverName: s.name?.split("[")[0]?.trim() ?? "Unknown Server",
    ipAddress,
    mapName: s.map?.replace(/([a-z])([A-Z])/g, "$1 $2") ?? "Unknown Map",
    status:
      s.error || !s.status
        ? "Unavailable"
        : s.status
            .replace("dead", "Offline")
            .replace(/^./, (c) => c.toUpperCase()),
    playerCount: s.players ?? 0,
    playerMax: s.maxPlayers ?? 0,
    key: `${clusterId}:${s.id ?? ipAddress}`,
  };
}

// Fetches and polls a single cluster's server list. Pass the active cluster id;
// the hook refetches whenever it changes, aborting any in-flight request for the
// previous cluster.
export default function useServerData(clusterId) {
  const [servers, setServers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  // True once any cluster has loaded successfully this session. Never reset on a
  // cluster switch, so the "first response may be slow" hint only shows on the
  // very first page load — not on every switch.
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    let mounted = true;
    let firstLoad = true;
    let warmupRetries = 0;
    let controller;
    let retryTimeoutId;

    // Reset the view for the newly selected cluster.
    setServers([]);
    setLoading(true);
    setError(null);
    setLastUpdated(null);

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
        const res = await fetch(`${apiUrl}/api/server-status/${clusterId}`, {
          signal: activeController.signal,
        });

        // 503 = backend cache still warming right after a restart (~1-5s). Keep
        // the spinner up and retry shortly instead of surfacing an error. Only on
        // the first load, and capped so a wedged backend eventually errors out.
        if (res.status === 503 && firstLoad) {
          if (mounted && warmupRetries < WARMUP_MAX_RETRIES) {
            warmupRetries += 1;
            retryTimeoutId = setTimeout(load, WARMUP_RETRY_MS);
            return;
          }
          throw new Error("Failed to fetch server status");
        }

        if (!res.ok) throw new Error("Failed to fetch server status");

        const json = await res.json();

        // Per-cluster shape: { cluster, label, lastUpdated, servers: [...] }.
        const mapped = Array.isArray(json.servers)
          ? json.servers.map((s) => mapServer(s, clusterId))
          : [];

        if (mounted) {
          setServers(mapped);
          setError(null);
          setLastUpdated(Date.now());
          setHasLoadedOnce(true);
          setLoading(false);
        }
        firstLoad = false;
      } catch (err) {
        // Only surface an error on the first load. A failed background refresh
        // keeps the last good data on screen instead of replacing it with the
        // error state; the "last updated" age keeps climbing, which signals the
        // data is going stale.
        if (mounted && firstLoad) {
          setError(
            err.name === "AbortError"
              ? "The server took too long to respond. Please try again."
              : err.message
          );
          setLoading(false);
        }
        firstLoad = false;
      } finally {
        clearTimeout(timeoutId);
      }
    }

    load();
    const intervalId = setInterval(load, REFRESH_INTERVAL_MS);

    return () => {
      mounted = false;
      clearInterval(intervalId);
      clearTimeout(retryTimeoutId);
      if (controller) controller.abort();
    };
  }, [apiUrl, clusterId]);

  return { servers, loading, error, lastUpdated, hasLoadedOnce };
}
