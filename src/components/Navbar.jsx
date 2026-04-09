// "use client";
import React from "react";
import { useState, useEffect } from "react";

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "services", "gallery", "contact"];
    const observers = [];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section is in the middle of the screen
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMobileMenuOpen(false);
    // Smooth scroll is handled by CSS / browser default for href="#id"
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-black/5 dark:border-white/5 shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#0779e4] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/20">
            D
          </div>
          <h2 className={`text-2xl font-extrabold tracking-tight ${scrolled ? "text-slate-900 dark:text-white" : "text-white"}`}>
            Damyoung
          </h2>
        </div>

        {/* Desktop Navigation & Actions */}
        <div className="hidden md:flex items-center gap-10">
          <nav>
            <ul className="flex items-center gap-8">
              {["home", "about", "services", "gallery", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item === "home" ? "" : item}`}
                    className={`text-sm font-semibold uppercase tracking-wider smooth-transition relative group ${
                      activeLink === item 
                        ? "text-[#0779e4]" 
                        : (scrolled ? "text-slate-600 dark:text-slate-300 hover:text-[#0779e4]" : "text-white hover:text-white/80")
                    }`}
                    onClick={() => handleLinkClick(item)}
                  >
                    {item}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#0779e4] transition-all duration-300 ${
                      activeLink === item ? "w-full" : "w-0 group-hover:w-full"
                    }`}></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle Button */}
          <div className="flex items-center gap-3">
            <span className={`text-xs font-bold uppercase tracking-widest ${scrolled ? "text-slate-500 dark:text-slate-400" : "text-white/70"}`}>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </span>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-xl transition-all duration-300 ${
                scrolled 
                  ? "bg-slate-100 dark:bg-slate-800 !text-slate-300 dark:text-slate-300" 
                  : "bg-white/10 !text-white backdrop-blur-md"
              } hover:scale-110 active:scale-95 group relative`}
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
              {/* Pulsing indicator for first-time visibility */}
              {!scrolled && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${scrolled ? "text-slate-900 dark:text-white" : "text-white"}`}
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          <button
            className={`p-2 focus:outline-none ${scrolled ? "text-slate-900 dark:text-white" : "text-white"}`}
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`md:hidden fixed inset-0 top-[72px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl z-[999] transition-all duration-500 ease-in-out ${
        mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      }`}>
        <ul className="flex flex-col items-center justify-center h-full gap-10">
          {["home", "about", "services", "gallery", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item === "home" ? "" : item}`}
                className={`text-2xl font-bold uppercase tracking-widest ${
                  activeLink === item ? "text-[#0779e4]" : "text-slate-500 dark:text-slate-400"
                }`}
                onClick={() => handleLinkClick(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
