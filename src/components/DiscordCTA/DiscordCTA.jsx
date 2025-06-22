import './DiscordCTA.css';
import ShinyText from '../../TextAnimations/ShinyText/ShinyText';
import DiscordIcon from '../Icons/DiscordIcon';

export default function DiscordCTA() {
  return (
    <section className="discord-cta-section">
      <h2 className='discord-cta_title'>Join our Discord!</h2>
      <div className="discord-cta_description">
        <ShinyText
          text="Connect with survivors, get support, and stay updated!"
          disabled={false}
          speed={3}
          className="discord-cta__subtitle"
        />
      </div>
      <a
        href="https://discord.gg/your-invite-link"
        className="discord-button"
      >
        <DiscordIcon className="discord-icon" />
        Join Now
      </a>
    </section>
  );
}
