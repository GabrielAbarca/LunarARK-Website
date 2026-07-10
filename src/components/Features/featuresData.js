import SparklesIcon from "../Icons/SparklesIcon.jsx";
import MapIcon from "../Icons/MapIcon.jsx";
import ConfigIcon from "../Icons/ConfigIcon.jsx";
import LockIcon from "../Icons/LockIcon.jsx";
import TrophyIcon from "../Icons/Trophy.jsx";
import RocketIcon from "../Icons/RocketIcon.jsx";

// Card data for the Features grid.
//
// `blurb` strings are copied verbatim from the original inline JSX so the
// rendered grid stays pixel-identical.
//
// `cardClassName` carries per-card grid overrides (only the 5th card uses one).
//
// `description` is DRAFT COPY — expanded from each card's blurb for the expanded
// panel. It only elaborates on claims already present in the blurb and invents
// no new specifics. Pending client review/replacement.
//
// `media` is the expanded panel's showcase asset. Leave it `null` to render the
// "preview coming soon" placeholder. To ship real media, import an asset from
// src/assets and set media to { type: "video" | "image", src, alt } — "image"
// covers GIFs. No component changes are needed.
export const FEATURES = [
  {
    id: "active-events",
    Icon: SparklesIcon,
    title: "Active Events",
    blurb:
      "We run weekly events that keep the server fresh, fun, and full of surprises.",
    description:
      "A steady rotation of weekly events keeps the world feeling alive week after week. Each one is built to shake up your routine and give the whole community something new to rally around. Expect variety, surprises, and plenty of reasons to log back in.",
    media: null,
  },
  {
    id: "custom-caves",
    Icon: MapIcon,
    title: "Custom Caves",
    blurb:
      "Explore reworked cave layouts made for better PvP and smoother exploration.",
    description:
      "Every cave has been reworked for cleaner sightlines and fairer fights. The new layouts reward smart positioning in PvP while staying easy to navigate on the way in and out. Whether you are raiding or just exploring, movement feels smoother and more deliberate.",
    media: null,
  },
  {
    id: "perfectly-balanced",
    Icon: ConfigIcon,
    title: "Perfectly Balanced",
    blurb:
      "Every setting is tuned for fair gameplay, competitive fights, and fun progression.",
    description:
      "Nothing here is left on defaults — every setting is deliberately tuned for a fair, competitive experience. Fights come down to skill and preparation rather than lopsided numbers. Progression stays rewarding without ever tipping into a grind.",
    media: null,
  },
  {
    id: "anti-cheat-system",
    Icon: LockIcon,
    title: "Anti-Cheat System",
    blurb:
      "Strong anti-cheat tools keep the server clean and the experience fair for everyone.",
    description:
      "A dedicated anti-cheat layer works to keep the server clean around the clock. Suspicious behavior is caught early so honest players never have to compete against exploits. The result is a level playing field where your results are your own.",
    media: null,
  },
  {
    id: "leaderboard-rewards",
    Icon: TrophyIcon,
    title: "Leaderboard & Rewards",
    blurb:
      "Climb the ranks and earn rewards for top performance in PvP and server events.",
    description:
      "Your best performances are tracked and ranked for everyone to see. Climb the leaderboard through PvP and event standings, and earn rewards as you rise. There is always a next rank worth chasing.",
    media: null,
    cardClassName: "lg:col-start-2",
  },
  {
    id: "high-performance",
    Icon: RocketIcon,
    title: "High Performance",
    blurb:
      "Fast, optimized servers with low ping and no lag—built for the best experience.",
    description:
      "The servers are optimized to stay fast and responsive even when the action heats up. Low ping and stable performance mean fights are decided by skill, not stutter. It is built to feel smooth from your first login to your longest sessions.",
    media: null,
  },
];
