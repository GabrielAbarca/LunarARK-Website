import ShinyText from "../../TextAnimations/ShinyText/ShinyText";
import DiscordIcon from "../Icons/DiscordIcon";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground.jsx";
import { motion } from "framer-motion";

export default function DiscordCTA() {
  return (
    <div className="relative w-full">
      <ParticlesBackground />
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center py-40 px-4 bg-dark-bg/50"
      >
        <h2 className="text-4xl md:text-6xl font-gugi text-neon-blue text-center mb-6 drop-shadow-[0_0_10px_rgba(0,255,213,0.5)]">
          Join our Discord!
        </h2>
        <div className="text-center mb-10">
          <ShinyText
            text="Connect with survivors, get support, and stay updated!"
            disabled={false}
            speed={3}
            className="text-sm md:text-base text-gray-300"
          />
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://discordapp.com/channels/1180286860476555265/1180288468488814743"
          className="flex items-center gap-3 px-8 py-3 rounded-lg border border-neon-blue text-neon-blue hover:bg-neon-blue/10 hover:shadow-[0_0_20px_rgba(0,255,213,0.3)] transition-all duration-300 group"
        >
          <DiscordIcon className="w-5 h-5 transition-colors duration-300" />
          <span className="font-bold tracking-wide">Join Now</span>
        </a>
      </motion.section>
    </div>
  );
}
