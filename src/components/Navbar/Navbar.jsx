import { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [activeSubMenu, setActiveSubMenu] = useState("");

  function handleSubMenu(subMenu) {
    setActiveSubMenu((prev) => (prev === subMenu ? "" : subMenu));
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isClickInsideDropdown = event.target.closest(".nav-item");
      if (!isClickInsideDropdown) {
        setActiveSubMenu("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="links">
        <div className="nav-item">
          <button
            onClick={() => handleSubMenu("servers")}
            className={activeSubMenu === "servers" ? "active-button" : ""}
          >
            Servers
          </button>
          <div
            className={`dropdown ${
              activeSubMenu === "servers" ? "active" : ""
            }`}
          >
            <Link className="dropdown-link" to="/servers">
              Lunar 50X Cluster
            </Link>
          </div>
        </div>

        <div className="nav-item">
          <button
            className={activeSubMenu === "shop" ? "active-button" : ""}
            onClick={() => handleSubMenu("shop")}
          >
            Shop
          </button>
          <div
            className={`dropdown ${activeSubMenu === "shop" ? "active" : ""}`}
          >
            <Link className="dropdown-link" to="/shop">
              Bundles VIP
            </Link>
          </div>
        </div>

        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Navbar logo" />
        </Link>

        <div className="nav-item">
          <button
            className={activeSubMenu === "support" ? "active-button" : ""}
            onClick={() => handleSubMenu("support")}
          >
            Support
          </button>
          <div
            className={`dropdown ${
              activeSubMenu === "support" ? "active" : ""
            }`}
          >
            <a
              className="dropdown-link"
              href="https://discordapp.com/channels/1180286860476555265/1185349483190558871"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit a ticket
            </a>
          </div>
        </div>

        <div className="nav-item">
          <button
            className={activeSubMenu === "info" ? "active-button" : ""}
            onClick={() => handleSubMenu("info")}
          >
            Info
          </button>
          <div
            className={`dropdown ${activeSubMenu === "info" ? "active" : ""}`}
          >
            <a
              className="dropdown-link"
              href="https://discordapp.com/channels/1180286860476555265/1180288468488814743"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>

            <a
              className="dropdown-link"
              href="https://discordapp.com/channels/1180286860476555265/1370072768095326408"
              target="_blank"
              rel="noopener noreferrer"
            >
              Events
            </a>
            <Link className="dropdown-link" to="/#features-link">
              Features
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
