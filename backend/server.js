import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/server-status", async (req, res) => {
  try {
    const serverIds = [
      "32627988",
      "32640953",
      "32640057",
      "32641715",
      "32641714",
      "32641762",
      "32640103",
      "32626784",
      "32641745",
      "32640048",
      "32640082",
      "32640053",
    ];
    const promises = serverIds.map(async (id) => {
      const response = await fetch(
        `https://api.battlemetrics.com/servers/${id}`
      );
      if (!response.ok)
        return { error: `Error ${response.status} en servidor ${id}` };
      const json = await response.json();
      const attributes = json.data.attributes;
      return {
        name: attributes.name,
        status: attributes.status,
        players: attributes.players,
        maxPlayers: attributes.maxPlayers,
        ip: attributes.ip,
        port: attributes.port,
        map: attributes.details?.map || null,
      };
    });

    const data = await Promise.all(promises);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
