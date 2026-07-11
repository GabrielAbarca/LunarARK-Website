import { useSearchParams } from "react-router-dom";
import ServersMain from "../components/ServersMain/ServersMain.jsx";
import ServersCards from "../components/ServersCards/ServersCards.jsx";
import ServersClusterFilter from "../components/ServersClusterFilter/ServersClusterFilter.jsx";
import { CLUSTERS } from "../components/ServersClusterFilter/clustersData.js";
import useServerData from "../hooks/useServerData.js";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner.jsx";
import ServersCountdown from "../components/ServersCountdown/ServersCountdown.jsx";

export default function Servers() {
  const [searchParams, setSearchParams] = useSearchParams();

  // The selected cluster lives in the URL (?cluster=<id>) so views are
  // shareable and back/forward steps between filter states. An invalid or
  // missing param falls back to 2MAN (then to the first cluster) without
  // rewriting the URL — it stays clean until the visitor interacts.
  const clusterParam = searchParams.get("cluster");
  const activeCluster =
    CLUSTERS.find((cluster) => cluster.id === clusterParam) ??
    CLUSTERS.find((cluster) => cluster.id === "2man") ??
    CLUSTERS[0];

  // Fetch only the selected cluster — switching clusters refetches its 12
  // servers rather than loading every cluster up front.
  const { servers, loading, error, lastUpdated, hasLoadedOnce } =
    useServerData(activeCluster.id);

  return (
    <>
      <ServersMain />
      {CLUSTERS.length > 1 && (
        <ServersClusterFilter
          clusters={CLUSTERS}
          activeId={activeCluster.id}
          onSelect={(id) => setSearchParams({ cluster: id })}
        />
      )}
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
        <LoadingSpinner showHint={!hasLoadedOnce} />
      ) : (
        <>
          <ServersCountdown lastUpdated={lastUpdated} />
          {servers.length > 0 ? (
            <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 pb-20">
              {servers.map((server) => (
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
            <p className="w-full text-center text-sm text-gray-500 font-montserrat px-4 pb-20">
              No live servers in this cluster right now.
            </p>
          )}
        </>
      )}
    </>
  );
}
