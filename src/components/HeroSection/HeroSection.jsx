import './HeroSection.css';
import ShinyText from '../../TextAnimations/ShinyText/ShinyText.jsx';
import CartIcon from '../Icons/CartIcon.jsx';
import GlobeIcon from '../Icons/GlobeIcon.jsx';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => setIsLoaded(true), []);

  return (
    <main className='hero-section-main'>
      <div className="hero-section">
        <h1 className={`hero-section__title ${isLoaded ? 'loaded' : ''}`}>
          Become The Ultimate Survivor
        </h1>
        <div className="hero-section_shiny-container">
          <ShinyText
            text="A new era of ARK Survival Evolved servers, join us on our journey!"
            disabled={false}
            speed={3}
            className="hero-section__subtitle"
          />
        </div>
        <section className="cta-section">
          <a className="browse-btn">
            <GlobeIcon className="globe-icon" />
            <p>Browse Servers</p>
          </a>
          <a className="browse-btn">
            <CartIcon className="cart-icon" />
            <p>Visit Shop</p>
          </a>
        </section>
      </div>
    </main>
  );
}
