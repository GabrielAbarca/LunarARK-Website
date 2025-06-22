import DiscordCTA from "../components/DiscordCTA/DiscordCTA.jsx";
import Features from "../components/Features/Features.jsx";
import HeroSection from "../components/HeroSection/HeroSection.jsx";
import Navbar from "../components/Navbar/navbar.jsx";
import ParticlesBackground from "../components/ParticlesBackground/ParticlesBackground.jsx";

export default function Home() {
    return (
        <>
        <Navbar />
        <ParticlesBackground />
        <HeroSection />
        <Features />
        <DiscordCTA />
        </>
    );
}