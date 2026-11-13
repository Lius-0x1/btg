"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchOverlay from "./SearchOverlay";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("btg-theme");
    const initialTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : "light";
    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;
    document.documentElement.style.colorScheme = initialTheme;
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem("btg-theme", nextTheme);
  };

  const closeMenu = () => setMenuOpen(false);

  const links = [
    ["Episodes", "/episodes"],
    ["Stories", "/stories"],
    ["Builders", "/builders"],
    ["Projects", "/projects"],
    ["About", "/about"],
  ];

  return (
    <>
      <nav className="btg-nav">
        <Link href="/" className="nav-logo" aria-label="Before They Graduate home">
          <span className="nav-dot" />
          <span className="nav-wordmark">Before They <b>Graduate</b></span>
        </Link>
        <div className="nav-links">
          {pathname !== "/" && <Link href="/" className="nav-home-link">← Home</Link>}
          {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          <button type="button" className="nav-search" onClick={() => setSearchOpen(true)}>⌕ <span>Search</span></button>
          <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}>
            <span aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span>
            <span className="theme-toggle-label">{theme === "dark" ? "Light" : "Dark"}</span>
          </button>
        </div>
        <Link href="/submit" className="nav-cta">Submit a story <span>↗</span></Link>
        <button type="button" className={`hamburger ${menuOpen ? "is-open" : ""}`} aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {pathname !== "/" && <Link href="/" onClick={closeMenu} className="mobile-home-link">← Back to homepage</Link>}
        {links.map(([label, href]) => <Link key={href} href={href} onClick={closeMenu}>{label}</Link>)}
        <button type="button" onClick={() => { setSearchOpen(true); closeMenu(); }}>⌕ Search the archive</button>
        <button type="button" className="mobile-theme-toggle" onClick={toggleTheme}>{theme === "dark" ? "☼  Light mode" : "◐ Switch to dark mode"}</button>
        <Link href="/submit" onClick={closeMenu} className="mobile-submit">Submit a story ↗</Link>
      </div>
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}
