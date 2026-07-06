import ServersMain from "../components/ServersMain/ServersMain.jsx";
import ServersCards from "../components/ServersCards/ServersCards.jsx";
import useServerData from "../hooks/useServerData.js";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner.jsx";
import ServersCountdown from "../components/ServersCountdown/ServersCountdown.jsx";

export default function Servers() {
  const { servers, loading, error, lastUpdated } = useServerData();

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
          <ServersCountdown lastUpdated={lastUpdated} />
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
        </>
      )}
    </>
  );
}
