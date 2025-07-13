import ServersMain from "../components/ServersMain/ServersMain.jsx";
import ServersCards from "../components/ServersCards/ServersCards.jsx";
import useServerDataContext from "../context/useServerDataContext.js";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner.jsx";
import NotFound from "../components/NotFound/NotFound.jsx";

export default function Servers() {
  const { servers, loading, error } = useServerDataContext();

  if (error) return <NotFound />;

  return (
    <>
      <ServersMain />
      {loading ? (
        <LoadingSpinner />
      ) : (
        servers.map((server) => (
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
        ))
      )}
    </>
  );
}
