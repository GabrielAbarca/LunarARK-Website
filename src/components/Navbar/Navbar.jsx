import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { cn } from "../../lib/utils";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keep the mobile menu from lingering when resizing up to the desktop layout.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    {
      id: "servers",
      label: "Servers",
      dropdown: [
        { label: "Lunar 20X Cluster", to: "/servers" }
      ]
    },
    {
      id: "shop",
      label: "Shop",
      dropdown: [
        { label: "Bundles VIP", to: "/shop" }
      ]
    },
    {
      id: "logo",
      type: "logo"
    },
    {
      id: "support",
      label: "Support",
      dropdown: [
        { label: "Submit a ticket", href: "https://discordapp.com/channels/1180286860476555265/1185349483190558871", external: true }
      ]
    },
    {
      id: "info",
      label: "Info",
      dropdown: [
        { label: "Discord", href: "https://discord.gg/FmKVFdnYs8", external: true },
        { label: "Events", href: "https://discordapp.com/channels/1180286860476555265/1370072768095326408", external: true },
        { label: "Staff", to: "/shop" },
        { label: "Features", to: "/#features-link" }
      ]
    }
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled || menuOpen ? "bg-dark-bg/80 backdrop-blur-md border-white/10 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-center gap-8 w-full">
          {navItems.map((item) => {
            if (item.type === "logo") {
              return (
                <Link key="logo" to="/" className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                  <img src={logo} alt="LunarARK Logo" className="w-12 md:w-20 drop-shadow-[0_0_15px_rgba(0,255,213,0.5)]" />
                </Link>
              );
            }

            return (
              <div
                key={item.id}
                className="relative group"
                onMouseEnter={() => setActiveSubMenu(item.id)}
                onMouseLeave={() => setActiveSubMenu("")}
              >
                <span
                  className={cn(
                    "relative px-4 py-2 text-sm md:text-base font-medium uppercase tracking-wide transition-colors duration-300",
                    activeSubMenu === item.id ? "text-neon-blue" : "text-gray-300 hover:text-white"
                  )}
                >
                  {item.label}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-neon-blue transform scale-x-0 transition-transform duration-300 origin-left",
                    activeSubMenu === item.id && "scale-x-100"
                  )} />
                </span>

                <AnimatePresence>
                  {activeSubMenu === item.id && item.dropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-card-bg border border-white/10 rounded-md shadow-xl overflow-hidden backdrop-blur-md"
                    >
                      <div className="py-1">
                        {item.dropdown.map((subItem, index) => (
                          subItem.to ? (
                            <Link
                              key={index}
                              to={subItem.to}
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-neon-blue transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ) : (
                            <a
                              key={index}
                              href={subItem.href}
                              target={subItem.external ? "_blank" : undefined}
                              rel={subItem.external ? "noopener noreferrer" : undefined}
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-neon-blue transition-colors"
                            >
                              {subItem.label}
                            </a>
                          )
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Mobile bar */}
        <div className="flex md:hidden items-center justify-between">
          <Link
            to="/"
            onClick={closeMenu}
            className="relative z-10 transform hover:scale-105 transition-transform duration-300"
          >
            <img src={logo} alt="LunarARK Logo" className="w-12 drop-shadow-[0_0_15px_rgba(0,255,213,0.5)]" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="p-2 text-2xl text-gray-300 hover:text-neon-blue transition-colors duration-300"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-dark-bg/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navItems
                .filter((item) => item.type !== "logo")
                .map((item) => (
                  <div key={item.id} className="flex flex-col gap-1">
                    <span className="text-sm font-medium uppercase tracking-wide text-neon-blue/80">
                      {item.label}
                    </span>
                    {item.dropdown && (
                      <div className="flex flex-col pl-3 border-l border-white/10">
                        {item.dropdown.map((subItem, index) => (
                          subItem.to ? (
                            <Link
                              key={index}
                              to={subItem.to}
                              onClick={closeMenu}
                              className="py-1.5 text-sm text-gray-400 hover:text-neon-blue transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ) : (
                            <a
                              key={index}
                              href={subItem.href}
                              target={subItem.external ? "_blank" : undefined}
                              rel={subItem.external ? "noopener noreferrer" : undefined}
                              onClick={closeMenu}
                              className="py-1.5 text-sm text-gray-400 hover:text-neon-blue transition-colors"
                            >
                              {subItem.label}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
