import { Link } from "react-router-dom";
import { FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa";
import lunarLogo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full pt-10 pb-6 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24 mb-8">
        <div className="flex flex-col items-center">
          <img src={lunarLogo} alt="Lunar Ark Logo" className="w-32 mb-2" />
          <p className="text-gray-500 text-sm">Ark Survival Evolved Cluster</p>
        </div>

        <div className="flex gap-12 md:gap-24 text-center">
          <div className="flex flex-col gap-2">
            <Link to="/shop" className="text-neon-blue hover:text-white transition-all duration-300">Shop</Link>
            <Link to="/servers" className="text-neon-blue hover:text-white transition-all duration-300">Servers</Link>
          </div>
          <div className="flex flex-col gap-2">
            <a href="mailto:info@lunar-ark-servers.net" className="text-neon-blue hover:text-white transition-all duration-300">Contact</a>
            <a
              href="https://discord.com/channels/1180286860476555265/1180288468488814743"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-blue hover:text-white transition-all duration-300"
            >
              Discord
            </a>
          </div>
        </div>
      </div>

      <hr className="border-white/10 mb-6" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-6">
          <a
            href="https://discord.com/channels/1180286860476555265/1180288468488814743"
            target="_blank"
            rel="noopener noreferrer"
            title="Join Discord"
            className="text-xl text-gray-400 hover:text-neon-blue transition-colors duration-300"
          >
            <FaDiscord />
          </a>
          <a
            href="https://github.com/GabrielAbarca"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-xl text-gray-400 hover:text-neon-blue transition-colors duration-300"
          >
            <FaGithub />
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 text-xs text-gray-500">
          <span>
            Website made by{" "}
            <a
              href="https://github.com/GabrielAbarca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-blue hover:text-white transition-colors"
            >
              GabrielAbarca
            </a>
          </span>
          <span className="hidden md:inline">•</span>
          <span className="flex items-center gap-2">
            <FaEnvelope /> info@lunar-ark-servers.net
          </span>
        </div>
      </div>
    </footer>
  );
}
