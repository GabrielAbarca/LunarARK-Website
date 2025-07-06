import "./Features.css";
import SpotlightCard from "../../SpotlightCard/SpotlightCard.jsx";
import SparklesIcon from "../Icons/SparklesIcon.jsx";
import MapIcon from "../Icons/MapIcon.jsx";
import ConfigIcon from "../Icons/ConfigIcon.jsx";
import LockIcon from "../Icons/LockIcon.jsx";
import TrophyIcon from "../Icons/Trophy.jsx";
import RocketIcon from "../Icons/RocketIcon.jsx";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground.jsx";

export default function Features() {
  return (
    <>
      <ParticlesBackground />
      <section className="features-section">
        <h2 className="features-title" id="features-link">
          Our Features
        </h2>
        <div className="card-container">
          <SpotlightCard
            className="spotlight-card"
            spotlightColor="rgba(0, 247, 253, 0.2)"
          >
            <SparklesIcon className="sparkles-icon card-icon" />
            <p>Active Events</p>
            <span>
              We run weekly events that keep the server fresh, fun, and full of
              surprises.
            </span>
          </SpotlightCard>

          <SpotlightCard
            className="spotlight-card"
            spotlightColor="rgba(0, 247, 253, 0.2)"
          >
            <MapIcon className="map-icon card-icon" />
            <p>Custom Caves</p>
            <span>
              Explore reworked cave layouts made for better PvP and smoother
              exploration.
            </span>
          </SpotlightCard>

          <SpotlightCard
            className="spotlight-card"
            spotlightColor="rgba(0, 247, 253, 0.2)"
          >
            <ConfigIcon className="config-icon card-icon" />
            <p>Perfectly Balanced</p>
            <span>
              Every setting is tuned for fair gameplay, competitive fights, and
              fun progression.
            </span>
          </SpotlightCard>
          <SpotlightCard
            className="spotlight-card"
            spotlightColor="rgba(0, 247, 253, 0.2)"
          >
            <LockIcon className="lock-icon card-icon" />
            <p>Anti-Cheat System</p>
            <span>
              Strong anti-cheat tools keep the server clean and the experience
              fair for everyone.
            </span>
          </SpotlightCard>
          <SpotlightCard
            className="spotlight-card"
            spotlightColor="rgba(0, 247, 253, 0.2)"
          >
            <TrophyIcon className="trophy-icon card-icon" />
            <p>Leaderboard & Rewards</p>
            <span>
              Climb the ranks and earn rewards for top performance in PvP and
              server events.
            </span>
          </SpotlightCard>
          <SpotlightCard
            className="spotlight-card"
            spotlightColor="rgba(0, 247, 253, 0.2)"
          >
            <RocketIcon className="rocket-icon card-icon" />
            <p>High Performance</p>
            <span>
              Fast, optimized servers with low ping and no lag—built for the
              best experience.
            </span>
          </SpotlightCard>
        </div>
      </section>
    </>
  );
}
