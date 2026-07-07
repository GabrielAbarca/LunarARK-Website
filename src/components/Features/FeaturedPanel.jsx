import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { cn } from "../../lib/utils";
import FeatureMedia from "./FeatureMedia.jsx";
import useFocusTrap from "../../hooks/useFocusTrap.js";

// Expanded "featured panel" overlay for a single feature card.
//
// `originId` is the card the panel was opened from; it stays constant for the
// whole open session so the shared-element flight collapses back to that card
// on close and the panel frame never re-flies while navigating between features.
// `feature` is whichever feature is currently shown and swaps on prev/next.
export default function FeaturedPanel({
  feature,
  index,
  count,
  originId,
  onClose,
  onNavigate,
}) {
  const panelRef = useRef(null);
  const closeButtonRef = useRef(null);
  // Direction of the last navigation (1 = next, -1 = prev) for the slide.
  const directionRef = useRef(0);
  const reduceMotion = useReducedMotion();

  const { Icon } = feature;
  const layoutId = `feature-${originId}`;
  const titleId = `featured-panel-title-${feature.id}`;

  useFocusTrap(panelRef, true);

  const goNext = () => {
    directionRef.current = 1;
    onNavigate(1);
  };
  const goPrev = () => {
    directionRef.current = -1;
    onNavigate(-1);
  };

  // Move focus into the panel on open.
  useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  // Escape closes; Left/Right arrows navigate. Active only while mounted.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
    // onNavigate / onClose are stable enough for this handler's lifetime.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Lock body scroll while open, compensating for the removed scrollbar so the
  // full-bleed layout doesn't shift horizontally.
  useEffect(() => {
    const { body } = document;
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;

    body.style.overflow = "hidden";
    if (scrollBarWidth > 0) {
      body.style.paddingRight = `${scrollBarWidth}px`;
    }

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPaddingRight;
    };
  }, []);

  const contentVariants = {
    enter: (dir) => ({ opacity: 0, x: reduceMotion ? 0 : dir * 24 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: reduceMotion ? 0 : dir * -24 }),
  };

  const overlay = (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6">
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: reduceMotion ? 0.15 : 0.3 }}
        onClick={onClose}
      />

      <motion.div
        ref={panelRef}
        layoutId={reduceMotion ? undefined : layoutId}
        initial={reduceMotion ? { opacity: 0 } : false}
        animate={reduceMotion ? { opacity: 1 } : undefined}
        exit={reduceMotion ? { opacity: 0 } : undefined}
        transition={reduceMotion ? { duration: 0.15 } : undefined}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-[61] w-full max-w-4xl max-h-[calc(100vh-2rem)] overflow-y-auto bg-card-bg border border-neon-blue/30 rounded-xl shadow-[0_0_40px_rgba(0,255,213,0.15)]"
      >
        <div className="flex items-start justify-between gap-4 p-6 md:p-8 pb-0">
          <div className="flex items-center gap-3">
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-neon-blue shrink-0" />
            <h2
              id={titleId}
              className="text-2xl md:text-3xl font-bold text-white font-gugi tracking-wide"
            >
              {feature.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded-full p-2 text-gray-400 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        <AnimatePresence mode="popLayout" custom={directionRef.current} initial={false}>
          <motion.div
            key={feature.id}
            custom={directionRef.current}
            variants={contentVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: reduceMotion ? 0.15 : 0.25 }}
            className="p-6 md:p-8 grid gap-6 md:grid-cols-2 md:items-center"
          >
            <p className="order-2 md:order-1 text-gray-300 text-sm md:text-base leading-relaxed">
              {feature.description}
            </p>
            <div className="order-1 md:order-2">
              <FeatureMedia
                media={feature.media}
                Icon={Icon}
                title={feature.title}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex items-center justify-between gap-4 p-6 md:p-8 pt-0">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous feature"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue"
          >
            <FaChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Prev</span>
          </button>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2" aria-hidden="true">
              {Array.from({ length: count }).map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-2 w-2 rounded-full transition-colors duration-300",
                    i === index ? "bg-neon-blue" : "bg-white/20"
                  )}
                />
              ))}
            </div>
            <span
              className="text-xs text-gray-400 tabular-nums"
              aria-live="polite"
            >
              {index + 1} / {count}
            </span>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next feature"
            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue"
          >
            <span className="hidden sm:inline">Next</span>
            <FaChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );

  return createPortal(overlay, document.body);
}
