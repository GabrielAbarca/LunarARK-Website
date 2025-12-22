import SpotlightCard from "../../SpotlightCard/SpotlightCard.jsx";
import SparklesIcon from "../Icons/SparklesIcon.jsx";
import MapIcon from "../Icons/MapIcon.jsx";
import ConfigIcon from "../Icons/ConfigIcon.jsx";
import LockIcon from "../Icons/LockIcon.jsx";
import TrophyIcon from "../Icons/Trophy.jsx";
import RocketIcon from "../Icons/RocketIcon.jsx";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground.jsx";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <>
      <section className="relative w-full py-20 md:py-32 px-4 z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-gugi text-center text-neon-blue mb-16 drop-shadow-[0_0_10px_rgba(0,255,213,0.5)]" 
          id="features-link"
        >
          Our Features
        </motion.h2>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <SpotlightCard
            className="bg-card-bg/50 border border-white/5 rounded-xl p-6 md:p-8 flex flex-col gap-4 hover:border-neon-blue/50 transition-colors duration-300"
            spotlightColor="rgba(0, 255, 213, 0.15)"
          >
            <SparklesIcon className="w-8 h-8 md:w-10 md:h-10 text-neon-blue" />
            <p className="text-xl font-bold text-white font-gugi tracking-wide">Active Events</p>
            <span className="text-gray-400 text-sm md:text-base leading-relaxed">
              We run weekly events that keep the server fresh, fun, and full of
              surprises.
            </span>
          </SpotlightCard>

          <SpotlightCard
            className="bg-card-bg/50 border border-white/5 rounded-xl p-6 md:p-8 flex flex-col gap-4 hover:border-neon-blue/50 transition-colors duration-300"
            spotlightColor="rgba(0, 255, 213, 0.15)"
          >
            <MapIcon className="w-8 h-8 md:w-10 md:h-10 text-neon-blue" />
            <p className="text-xl font-bold text-white font-gugi tracking-wide">Custom Caves</p>
            <span className="text-gray-400 text-sm md:text-base leading-relaxed">
              Explore reworked cave layouts made for better PvP and smoother
              exploration.
            </span>
          </SpotlightCard>

          <SpotlightCard
            className="bg-card-bg/50 border border-white/5 rounded-xl p-6 md:p-8 flex flex-col gap-4 hover:border-neon-blue/50 transition-colors duration-300"
            spotlightColor="rgba(0, 255, 213, 0.15)"
          >
            <ConfigIcon className="w-8 h-8 md:w-10 md:h-10 text-neon-blue" />
            <p className="text-xl font-bold text-white font-gugi tracking-wide">Perfectly Balanced</p>
            <span className="text-gray-400 text-sm md:text-base leading-relaxed">
              Every setting is tuned for fair gameplay, competitive fights, and
              fun progression.
            </span>
          </SpotlightCard>

          <SpotlightCard
            className="bg-card-bg/50 border border-white/5 rounded-xl p-6 md:p-8 flex flex-col gap-4 hover:border-neon-blue/50 transition-colors duration-300"
            spotlightColor="rgba(0, 255, 213, 0.15)"
          >
            <LockIcon className="w-8 h-8 md:w-10 md:h-10 text-neon-blue" />
            <p className="text-xl font-bold text-white font-gugi tracking-wide">Anti-Cheat System</p>
            <span className="text-gray-400 text-sm md:text-base leading-relaxed">
              Strong anti-cheat tools keep the server clean and the experience
              fair for everyone.
            </span>
          </SpotlightCard>

          <SpotlightCard
            className="bg-card-bg/50 border border-white/5 rounded-xl p-6 md:p-8 flex flex-col gap-4 hover:border-neon-blue/50 transition-colors duration-300 lg:col-start-2"
            spotlightColor="rgba(0, 255, 213, 0.15)"
          >
            <TrophyIcon className="w-8 h-8 md:w-10 md:h-10 text-neon-blue" />
            <p className="text-xl font-bold text-white font-gugi tracking-wide">Leaderboard & Rewards</p>
            <span className="text-gray-400 text-sm md:text-base leading-relaxed">
              Climb the ranks and earn rewards for top performance in PvP and
              server events.
            </span>
          </SpotlightCard>

          <SpotlightCard
            className="bg-card-bg/50 border border-white/5 rounded-xl p-6 md:p-8 flex flex-col gap-4 hover:border-neon-blue/50 transition-colors duration-300"
            spotlightColor="rgba(0, 255, 213, 0.15)"
          >
            <RocketIcon className="w-8 h-8 md:w-10 md:h-10 text-neon-blue" />
            <p className="text-xl font-bold text-white font-gugi tracking-wide">High Performance</p>
            <span className="text-gray-400 text-sm md:text-base leading-relaxed">
              Fast, optimized servers with low ping and no lag—built for the
              best experience.
            </span>
          </SpotlightCard>
        </div>
      </section>
    </>
  );
}
