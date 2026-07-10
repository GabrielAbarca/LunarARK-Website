import { cn } from "../../lib/utils";

// Hero-scoped segmented control for switching the visible server cluster.
// Presentational/controlled: the active id and setter are owned by HeroSection.
// Labels come from each cluster's payload `label` (e.g. "2MAN" / "4MAN").
export default function HeroClusterToggle({ clusters, activeId, onSelect }) {
  return (
    <div
      role="group"
      aria-label="Select server cluster"
      className="mx-auto mb-6 flex w-max gap-1 rounded-lg border border-white/10 bg-card-bg p-1"
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
              "rounded-md px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon-blue focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg",
              isActive
                ? "bg-neon-blue/10 text-neon-blue"
                : "text-gray-400 hover:text-white"
            )}
          >
            {cluster.label}
          </button>
        );
      })}
    </div>
  );
}
