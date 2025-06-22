import { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';

export default function Navbar() {
  const [activeSubMenu, setActiveSubMenu] = useState('');

  function handleSubMenu(subMenu) {
    setActiveSubMenu((prev) => (prev === subMenu ? '' : subMenu));
  }

  return (
    <nav className="navbar">
      <div className="links">
        <div className="nav-item">
          <button
            className={activeSubMenu === 'servers' ? 'active-button' : ''}
            onClick={() => handleSubMenu('servers')}
          >
            Servers
          </button>
          <div
            className={`dropdown ${
              activeSubMenu === 'servers' ? 'active' : ''
            }`}
          >
            <a href="#">Lunar 50X Cluster</a>
          </div>
        </div>

        <div className="nav-item">
          <button
            className={activeSubMenu === 'shop' ? 'active-button' : ''}
            onClick={() => handleSubMenu('shop')}
          >
            Shop
          </button>
          <div
            className={`dropdown ${activeSubMenu === 'shop' ? 'active' : ''}`}
          >
            <a href="#">Bundles VIP</a>
          </div>
        </div>
        <div className="navbar-logo">
          <img src={logo} alt="Navbar logo" />
        </div>

        <div className="nav-item">
          <button
            className={activeSubMenu === 'support' ? 'active-button' : ''}
            onClick={() => handleSubMenu('support')}
          >
            Support
          </button>
          <div
            className={`dropdown ${
              activeSubMenu === 'support' ? 'active' : ''
            }`}
          >
            <a href="#">Submit a ticket</a>
            <a href="#">Live chat</a>
          </div>
        </div>

        <div className="nav-item">
          <button
            className={activeSubMenu === 'info' ? 'active-button' : ''}
            onClick={() => handleSubMenu('info')}
          >
            Info
          </button>
          <div
            className={`dropdown ${activeSubMenu === 'info' ? 'active' : ''}`}
          >
            <a href="#">Rules</a>
            <a href="#">Discord</a>
            <a href="#">Features</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
