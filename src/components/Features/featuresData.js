import SparklesIcon from "../Icons/SparklesIcon.jsx";
import MapIcon from "../Icons/MapIcon.jsx";
import ConfigIcon from "../Icons/ConfigIcon.jsx";
import LockIcon from "../Icons/LockIcon.jsx";
import TrophyIcon from "../Icons/Trophy.jsx";
import RocketIcon from "../Icons/RocketIcon.jsx";

// Card data for the Features grid. `blurb` strings are copied verbatim from the
// original inline JSX so the rendered grid stays pixel-identical.
// `cardClassName` carries per-card grid overrides (only the 5th card uses one).
export const FEATURES = [
  {
    id: "active-events",
    Icon: SparklesIcon,
    title: "Active Events",
    blurb:
      "We run weekly events that keep the server fresh, fun, and full of surprises.",
  },
  {
    id: "custom-caves",
    Icon: MapIcon,
    title: "Custom Caves",
    blurb:
      "Explore reworked cave layouts made for better PvP and smoother exploration.",
  },
  {
    id: "perfectly-balanced",
    Icon: ConfigIcon,
    title: "Perfectly Balanced",
    blurb:
      "Every setting is tuned for fair gameplay, competitive fights, and fun progression.",
  },
  {
    id: "anti-cheat-system",
    Icon: LockIcon,
    title: "Anti-Cheat System",
    blurb:
      "Strong anti-cheat tools keep the server clean and the experience fair for everyone.",
  },
  {
    id: "leaderboard-rewards",
    Icon: TrophyIcon,
    title: "Leaderboard & Rewards",
    blurb:
      "Climb the ranks and earn rewards for top performance in PvP and server events.",
    cardClassName: "lg:col-start-2",
  },
  {
    id: "high-performance",
    Icon: RocketIcon,
    title: "High Performance",
    blurb:
      "Fast, optimized servers with low ping and no lag—built for the best experience.",
  },
];
