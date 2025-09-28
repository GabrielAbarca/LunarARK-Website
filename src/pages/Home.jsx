import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DiscordCTA from "../components/DiscordCTA/DiscordCTA.jsx";
import Features from "../components/Features/Features.jsx";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import ParticlesBackground from "../components/ParticlesBackground/ParticlesBackground.jsx";
import MapSection from "../components/MapSection/MapSection.jsx";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#features-link") {
      const el = document.getElementById("features-link");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <ParticlesBackground />
      <HeroSection />
      <Features />
      <MapSection />
      <DiscordCTA />
    </>
  );
}
