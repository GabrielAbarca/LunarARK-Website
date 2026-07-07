import { useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import SpotlightCard from "../../SpotlightCard/SpotlightCard.jsx";
import { cn } from "../../lib/utils";
import { FEATURES } from "./featuresData.js";
import FeaturedPanel from "./FeaturedPanel.jsx";

export default function Features() {
  const reduceMotion = useReducedMotion();
  const cardRefs = useRef([]);
  const originIndexRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [originIndex, setOriginIndex] = useState(null);

  const openCard = (i) => {
    originIndexRef.current = i;
    setOriginIndex(i);
    setActiveIndex(i);
  };

  const closeCard = () => {
    const origin = originIndexRef.current;
    setActiveIndex(null);
    setOriginIndex(null);
    if (origin !== null) {
      const el = cardRefs.current[origin];
      // Return focus to the card that opened the panel.
      requestAnimationFrame(() => el?.focus());
    }
  };

  const navigate = (dir) =>
    setActiveIndex((i) => (i + dir + FEATURES.length) % FEATURES.length);

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
          {FEATURES.map(({ id, Icon, title, blurb, cardClassName }, i) => (
            <motion.button
              key={id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              type="button"
              layoutId={reduceMotion ? undefined : `feature-${id}`}
              onClick={() => openCard(i)}
              aria-haspopup="dialog"
              aria-label={`${title} — view details`}
              className={cn(
                "block h-full w-full cursor-pointer rounded-xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg",
                cardClassName
              )}
            >
              <SpotlightCard
                className="h-full bg-card-bg/50 border border-white/5 rounded-xl p-6 md:p-8 flex flex-col gap-4 hover:border-neon-blue/50 transition-colors duration-300"
                spotlightColor="rgba(0, 255, 213, 0.15)"
              >
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-neon-blue" />
                <p className="text-xl font-bold text-white font-gugi tracking-wide">{title}</p>
                <span className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {blurb}
                </span>
              </SpotlightCard>
            </motion.button>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {activeIndex !== null && originIndex !== null && (
          <FeaturedPanel
            key="featured-panel"
            feature={FEATURES[activeIndex]}
            index={activeIndex}
            count={FEATURES.length}
            originId={FEATURES[originIndex].id}
            onClose={closeCard}
            onNavigate={navigate}
          />
        )}
      </AnimatePresence>
    </>
  );
}
