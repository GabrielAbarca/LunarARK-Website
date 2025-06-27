import ServersMain from "../components/ServersMain/ServersMain.jsx";
import ServersCards from "../components/ServersCards/ServersCards.jsx";
import ServerData from "../consts/serverData.js";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner.jsx";

export default function Servers() {
  const { servers, loading, error } = ServerData();

  if (error) return console.log("error on retreiving server data.");

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
