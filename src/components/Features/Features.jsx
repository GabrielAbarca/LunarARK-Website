import SpotlightCard from "../../SpotlightCard/SpotlightCard.jsx";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { FEATURES } from "./featuresData.js";

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
          {FEATURES.map(({ id, Icon, title, blurb, cardClassName }) => (
            <SpotlightCard
              key={id}
              className={cn(
                "bg-card-bg/50 border border-white/5 rounded-xl p-6 md:p-8 flex flex-col gap-4 hover:border-neon-blue/50 transition-colors duration-300",
                cardClassName
              )}
              spotlightColor="rgba(0, 255, 213, 0.15)"
            >
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-neon-blue" />
              <p className="text-xl font-bold text-white font-gugi tracking-wide">{title}</p>
              <span className="text-gray-400 text-sm md:text-base leading-relaxed">
                {blurb}
              </span>
            </SpotlightCard>
          ))}
        </div>
      </section>
    </>
  );
}
