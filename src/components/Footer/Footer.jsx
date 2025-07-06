import "./Footer.css";
import { Link } from "react-router-dom";
import { FaGithub, FaDiscord, FaEnvelope } from "react-icons/fa";
import lunarLogo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={lunarLogo} alt="Lunar Ark Logo" />
          <p>Ark Survival Evolved Cluster</p>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <Link to="/shop">Shop</Link>
            <Link to="/servers">Servers</Link>
          </div>
          <div className="footer-column">
            <a href="mailto:info@lunar-ark-servers.net">Contact</a>
            <a
              href="https://discord.com/channels/1180286860476555265/1180288468488814743"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-bottom">
        <div className="footer-social">
          <a
            href="https://discord.com/channels/1180286860476555265/1180288468488814743"
            target="_blank"
            rel="noopener noreferrer"
            title="Join Discord"
          >
            <FaDiscord />
          </a>
          <a
            href="https://github.com/GabrielAbarca"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        <p className="footer-madeby">
          Website made by{" "}
          <a
            href="https://github.com/GabrielAbarca"
            target="_blank"
            rel="noopener noreferrer"
          >
            GabrielAbarca
          </a>{" "}
          •{" "}
          <span className="plain-email">
            <FaEnvelope className="inline-icon" /> info@lunar-ark-servers.net
          </span>
        </p>
      </div>
    </footer>
  );
}
