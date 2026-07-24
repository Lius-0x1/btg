"use client";
import { useState } from "react";
import Link from "next/link";
import SearchOverlay from "./SearchOverlay";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav>
        <Link href="/" className="nav-logo"><span className="nav-dot"></span>Before They <span style={{ color: "var(--orange)" }}>Graduate</span></Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/episodes">Episodes</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/builders">Builders</Link>
          <Link href="/about">About</Link>
          <Link href="/faq">FAQ</Link>
          <span onClick={() => setSearchOpen(true)} style={{ cursor: "pointer" }}>⌕ Search</span>
        </div>
        <Link href="/submit" className="nav-cta">Submit</Link>
        <div className="hamburger" onClick={() => setMenuOpen((open) => !open)}>
          <span></span><span></span><span></span>
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link href="/" onClick={closeMenu}>Home</Link>
        <Link href="/episodes" onClick={closeMenu}>Episodes</Link>
        <Link href="/stories" onClick={closeMenu}>Stories</Link>
        <Link href="/projects" onClick={closeMenu}>Projects</Link>
        <Link href="/builders" onClick={closeMenu}>Builders</Link>
        <Link href="/about" onClick={closeMenu}>About</Link>
        <Link href="/faq" onClick={closeMenu}>FAQ</Link>
        <span onClick={() => { setSearchOpen(true); closeMenu(); }} style={{ color: "var(--orange)", cursor: "pointer" }}>⌕ Search</span>
        <Link href="/submit" onClick={closeMenu} style={{ color: "var(--orange)" }}>Submit Your Story / Project →</Link>
      </div>

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </>
  );
}