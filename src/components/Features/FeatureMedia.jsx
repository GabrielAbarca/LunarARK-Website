// Renders the expanded panel's showcase media. When `media` is null it shows a
// clearly-labeled placeholder; set `media` on the feature in featuresData.js
// (via { type: "video" | "image", src, alt }) and real media renders in its
// place with no changes here. "image" also covers animated GIFs.
export default function FeatureMedia({ media, Icon, title }) {
  const frameClass =
    "w-full aspect-video rounded-lg object-cover border border-white/10";

  if (media?.type === "video") {
    return (
      <video
        src={media.src}
        autoPlay
        loop
        muted
        playsInline
        aria-label={media.alt}
        className={frameClass}
      />
    );
  }

  if (media?.type === "image") {
    return <img src={media.src} alt={media.alt} className={frameClass} />;
  }

  return (
    <div
      role="img"
      aria-label={`${title} preview coming soon`}
      className="w-full aspect-video rounded-lg border border-dashed border-white/15 bg-black/20 flex flex-col items-center justify-center gap-3 text-center px-4"
    >
      <Icon className="w-10 h-10 text-neon-blue/70" />
      <span className="text-gray-400 text-sm font-gugi tracking-wide">
        Preview coming soon
      </span>
    </div>
  );
}
