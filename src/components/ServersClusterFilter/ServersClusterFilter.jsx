import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

// Page-scale segmented control for filtering the /servers grid by cluster.
// Controlled and presentational: the active id and setter are owned by the
// Servers page (which syncs the selection to the ?cluster= URL param).
// Labels come from each cluster's payload `label` (e.g. "2MAN" / "4MAN").
export default function ServersClusterFilter({ clusters, activeId, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      role="group"
      aria-label="Filter servers by cluster"
      className="mx-auto flex w-max gap-1 rounded-lg border border-white/10 bg-card-bg p-1"
    >
      {clusters.map((cluster) => {
        const isActive = cluster.id === activeId;
        return (
          <button
            key={cluster.id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSelect(cluster.id)}
            className={cn(
              "rounded-md px-6 md:px-8 py-2.5 text-sm md:text-base font-bold uppercase tracking-wider transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg",
              isActive
                ? "bg-neon-blue/10 text-neon-blue shadow-[0_0_15px_rgba(0,255,213,0.15)]"
                : "text-gray-400 hover:text-white"
            )}
          >
            {cluster.label}
          </button>
        );
      })}
    </motion.div>
  );
}
