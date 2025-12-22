import { useRef } from "react";
import { cn } from "../lib/utils";

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" }) => {
  const divRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = divRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty("--mouse-x", `${x}px`);
    divRef.current.style.setProperty("--mouse-y", `${y}px`);
    divRef.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative rounded-3xl border border-white/10 bg-card-bg p-8 overflow-hidden",
        "before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0",
        "before:bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),var(--spotlight-color),transparent_80%)]",
        "before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:pointer-events-none",
        className
      )}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
