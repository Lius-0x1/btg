"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import builders from "@/data/builders";

const staticPages = [
  { title: "How \"Before They Graduate\" Started", type: "Story", href: "/stories/how-it-started", keywords: "origin story ayinde akorede substack" },
  { title: "Episodes", type: "Page", href: "/episodes", keywords: "season 1 videos youtube" },
  { title: "Projects Repository", type: "Page", href: "/projects", keywords: "research startups apps tools submit" },
  { title: "Submit Your Story or Project", type: "Page", href: "/submit", keywords: "tally nominate season 2 apply" },
  { title: "About Before They Graduate", type: "Page", href: "/about", keywords: "mission archive futa" },
  { title: "FAQ", type: "Page", href: "/faq", keywords: "frequently asked questions review timeline notification cost free" },
];
export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const q = query.toLowerCase().trim();

  const builderResults = q
    ? builders.filter((b) => b.name.toLowerCase().includes(q) || b.department.toLowerCase().includes(q) || b.quote.toLowerCase().includes(q))
    : [];

  const pageResults = q
    ? staticPages.filter((p) => p.title.toLowerCase().includes(q) || p.keywords.toLowerCase().includes(q))
    : [];

  const hasResults = builderResults.length > 0 || pageResults.length > 0;

  const goTo = (href) => {
    router.push(href);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(8,8,8,0.85)", zIndex: 300, display: "flex", justifyContent: "center", paddingTop: "10vh" }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: "min(600px, 90vw)", maxHeight: "70vh", display: "flex", flexDirection: "column" }}
      >
        <div className="search-bar" style={{ marginBottom: "1rem" }}>
          <span style={{ color: "var(--muted)", fontSize: "1.1rem" }}>⌕</span>
          <input
            autoFocus
            className="search-input"
            type="text"
            placeholder="Search builders, stories, pages..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div style={{ overflowY: "auto" }}>
          {!q && (
            <div style={{ color: "var(--muted)", fontSize: ".85rem", textAlign: "center", padding: "2rem" }}>
              Start typing to search the archive
            </div>
          )}

          {q && !hasResults && (
            <div style={{ color: "var(--muted)", fontSize: ".85rem", textAlign: "center", padding: "2rem" }}>
              No matches for "{query}"
            </div>
          )}

          {builderResults.map((b) => (
            <div
              key={b.slug}
              onClick={() => goTo(`/builders/${b.slug}`)}
              className="story-row"
              style={{ marginBottom: "1px" }}
            >
              <img src={b.image} alt={b.name} style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
              <div>
                <div className="story-row-tag">Builder</div>
                <div className="story-row-title">{b.name}</div>
                <div className="story-row-excerpt">{b.department}</div>
              </div>
            </div>
          ))}

          {pageResults.map((p) => (
            <div
              key={p.href}
              onClick={() => goTo(p.href)}
              className="story-row"
              style={{ marginBottom: "1px" }}
            >
              <div>
                <div className="story-row-tag">{p.type}</div>
                <div className="story-row-title">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}