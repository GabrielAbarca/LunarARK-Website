import './Features.css';
import SpotlightCard from '../../SpotlightCard/SpotlightCard.jsx';
import SparklesIcon from '../Icons/SparklesIcon.jsx';
import MapIcon from '../Icons/MapIcon.jsx';
import ConfigIcon from '../Icons/ConfigIcon.jsx';
import LockIcon from '../Icons/LockIcon.jsx';
import TrophyIcon from '../Icons/Trophy.jsx';
import RocketIcon from '../Icons/RocketIcon.jsx';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground.jsx'

export default function Features() {
  return (
    <>
      <ParticlesBackground/>
      <section className="features-section">
        <h2 className="features-title">Our Features</h2>
        <div className="card-container">
          <SpotlightCard
            className="spotlight-card"
            spotlightColor="rgba(0, 247, 253, 0.2)"
          >
            <SparklesIcon className="sparkles-icon card-icon" />
            <p>Active Events</p>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              repudiandae magni nihil accusantium,{" "}
            </span>
          </SpotlightCard>

          <SpotlightCard
            className="spotlight-card"
            spotlightColor="rgba(0, 247, 253, 0.2)"
          >
            <MapIcon className="map-icon card-icon" />
            <p>Custom Caves</p>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              repudiandae magni nihil accusantium,{" "}
            </span>
          </SpotlightCard>

          <SpotlightCard
            className="spotlight-card"
            spotlightColor="rgba(0, 247, 253, 0.2)"
          >
            <ConfigIcon className="config-icon card-icon" />
            <p>Perfectly Balanced</p>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              repudiandae magni nihil accusantium,{" "}
            </span>
          </SpotlightCard>
          <SpotlightCard
            className="spotlight-card"
            spotlightColor="rgba(0, 247, 253, 0.2)"
          >
            <LockIcon className="lock-icon card-icon" />
            <p>Anti-Cheat System</p>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              repudiandae magni nihil accusantium,{" "}
            </span>
          </SpotlightCard>
          <SpotlightCard
            className="spotlight-card"
            spotlightColor="rgba(0, 247, 253, 0.2)"
          >
            <TrophyIcon className="trophy-icon card-icon" />
            <p>Leadboard & Rewards</p>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              repudiandae magni nihil accusantium,{" "}
            </span>
          </SpotlightCard>
          <SpotlightCard
            className="spotlight-card"
            spotlightColor="rgba(0, 247, 253, 0.2)"
          >
            <RocketIcon className="rocket-icon card-icon" />
            <p>High Performance</p>
            <span>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              repudiandae magni nihil accusantium,{" "}
            </span>
          </SpotlightCard>
        </div>
      </section>
    </>
  );
}
