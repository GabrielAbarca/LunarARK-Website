import ServersMain from "../components/ServersMain/ServersMain.jsx";
import ServersCards from "../components/ServersCards/ServersCards.jsx";
import useServerData from "../hooks/useServerData.js";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner.jsx";
import NotFound from "../components/NotFound/NotFound.jsx";
import ServersCountdown from "../components/ServersCountdown/ServersCountdown.jsx";

export default function Servers() {
  const { servers, loading, error } = useServerData();

  if (error) return <NotFound />;

  return (
    <>
      <ServersMain />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <ServersCountdown />
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
                lastWipe={server.lastWipe}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}
