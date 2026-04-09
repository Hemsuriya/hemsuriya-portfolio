import { useState, useEffect } from "react";
import { trackEvent } from "../utils/analytics";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>
      <div className="nav-container">
        <h2
          className="logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            closeMenu();
          }}
        >
          Hemsuriya M
        </h2>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a
            href="/Hemsuriya_M%20Final%20Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-resume"
            onClick={() => {
              trackEvent("resume_click", { source: "navbar" });
              closeMenu();
            }}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
