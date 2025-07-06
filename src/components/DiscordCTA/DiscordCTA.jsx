import "./DiscordCTA.css";
import ShinyText from "../../TextAnimations/ShinyText/ShinyText";
import DiscordIcon from "../Icons/DiscordIcon";
import ParticlesBackground from "../ParticlesBackground/ParticlesBackground.jsx";

export default function DiscordCTA() {
  return (
    <>
      <ParticlesBackground />
      <section className="discord-cta-section">
        <h2 className="discord-cta_title">Join our Discord!</h2>
        <div className="discord-cta_description">
          <ShinyText
            text="Connect with survivors, get support, and stay updated!"
            disabled={false}
            speed={3}
            className="discord-cta__subtitle"
          />
        </div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://discordapp.com/channels/1180286860476555265/1180288468488814743"
          className="discord-button"
        >
          <DiscordIcon className="discord-icon" />
          Join Now
        </a>
      </section>
    </>
  );
}
