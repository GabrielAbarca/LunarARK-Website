import { useSearchParams } from "react-router-dom";
import ServersMain from "../components/ServersMain/ServersMain.jsx";
import ServersCards from "../components/ServersCards/ServersCards.jsx";
import ServersClusterFilter from "../components/ServersClusterFilter/ServersClusterFilter.jsx";
import useServerData from "../hooks/useServerData.js";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner.jsx";
import ServersCountdown from "../components/ServersCountdown/ServersCountdown.jsx";

export default function Servers() {
  const { clusters, loading, error, lastUpdated } = useServerData();
  const [searchParams, setSearchParams] = useSearchParams();

  // The selected cluster lives in the URL (?cluster=<id>) so views are
  // shareable and back/forward steps between filter states. An invalid or
  // missing param falls back to 2MAN (then to the first cluster) without
  // rewriting the URL — it stays clean until the visitor interacts.
  const clusterParam = searchParams.get("cluster");
  const activeCluster =
    clusters.find((cluster) => cluster.id === clusterParam) ??
    clusters.find((cluster) => cluster.id === "2man") ??
    clusters[0];

  return (
    <>
      <ServersMain />
      {error ? (
        <div className="w-full flex flex-col items-center gap-3 px-4 pt-12 pb-20 text-center">
          <h2 className="text-2xl md:text-3xl font-gugi text-red-400 drop-shadow-[0_0_10px_rgba(248,113,113,0.4)]">
            Servers Unavailable
          </h2>
          <p className="text-gray-400 max-w-md">
            We couldn&apos;t load the server list right now. Please refresh the
            page or try again in a moment.
          </p>
        </div>
      ) : loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {/* Client-side filter — both clusters are already in the payload, so
              switching never refetches. Hidden when there's nothing to switch. */}
          {clusters.length > 1 && (
            <ServersClusterFilter
              clusters={clusters}
              activeId={activeCluster.id}
              onSelect={(id) => setSearchParams({ cluster: id })}
            />
          )}
          <ServersCountdown lastUpdated={lastUpdated} />
          {activeCluster && activeCluster.servers.length > 0 ? (
            <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
              {activeCluster.servers.map((server) => (
                <ServersCards
                  key={server.key}
                  serverName={server.serverName}
                  ipAddress={server.ipAddress}
                  mapName={server.mapName}
                  status={server.status}
                  playerCount={server.playerCount}
                  maxPlayers={server.playerMax}
                />
              ))}
            </div>
          ) : (
            // One cluster failed to poll / has no servers — degrade only this
            // view; the filter above stays usable so the other cluster still
            // displays.
            <p className="w-full text-center text-sm text-gray-500 font-montserrat px-4 pb-20">
              No live servers in this cluster right now.
            </p>
          )}
        </>
      )}
    </>
  );
}
