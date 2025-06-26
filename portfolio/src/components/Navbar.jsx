// "use client";
import React from "react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`header ${
        scrolled ? "navbar-colored" : "navbar-transparent"
      } w-full fixed top-0 z-3 transition-300 ease`}
    >
      <div className="px-6 md:px-16 md:py-4 lg:px-16 lg:py-8">
        <div className="flex justify-between items-center">
          <h2 className="text-[1.5rem] md:text-xl lg:text-2xl font-bold">
            Samuel Ayodeji
          </h2>

          {/* Mobile menu button */}
          <button
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            style={{
              background: "none",
              border: "none",
              color: "white",
              display: "none",
              cursor: "pointer",
              fontSize: "24px",
            }}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>

          {/* Desktop navigation */}
          <ul className="nav-links flex gap-8">
            {["home", "about", "services", "Gallery", "contact"].map((item) => (
              <li key={item} style={{ listStyle: "none" }}>
                <a
                  href={`#${item === "home" ? "" : item}`}
                  className={`nav-link ${activeLink === item ? "active" : ""}`}
                  onClick={() => handleLinkClick(item)}
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    transition: "color 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color =
                      activeLink === item
                        ? "white"
                        : "rgba(255, 255, 255, 0.7)";
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div
            className="mobile-nav"
            style={{
              marginTop: "20px",
              backgroundColor: "#0779e4",
              borderRadius: "5px",
              padding: "15px",
            }}
          >
            <ul
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              {["home", "about", "services", "portfolio", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item === "home" ? "" : item}`}
                      className={`nav-link ${
                        activeLink === item ? "active" : ""
                      }`}
                      onClick={() => handleLinkClick(item)}
                      style={{
                        color:
                          activeLink === item
                            ? "white"
                            : "rgba(255, 255, 255, 0.7)",
                        fontWeight: activeLink === item ? "bold" : "normal",
                      }}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
