"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { searchAll } from "@/lib/searchIndex";

function highlight(text, q) {
  if (!text) return text;
  const idx = text.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark style={{ background: "var(--orange)", color: "#000", padding: "0 2px" }}>
        {text.slice(idx, idx + q.length)}
      </mark>
      {text.slice(idx + q.length)}
    </>
  );
}

function ResultGroup({ label, items, query, onGo, renderMeta }) {
  if (items.length === 0) return null;
  return (
    <div style={{ marginBottom: "1.25rem" }}>
      <div style={{ fontSize: ".7rem", textTransform: "uppercase", letterSpacing: ".1em", color: "var(--muted)", margin: "0 0 .5rem .25rem" }}>
        {label} ({items.length})
      </div>
      {items.map((item, i) => (
        <div key={`${item.href}-${i}`} onClick={() => onGo(item.href)} className="story-row" style={{ marginBottom: "1px", cursor: "pointer" }}>
          {item.image && (
            <img src={item.image} alt={item.title} style={{ width: "44px", height: "44px", borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
          )}
          <div>
            <div className="story-row-tag">{item.type}</div>
            <div className="story-row-title">{item.title}</div>
            {renderMeta && renderMeta(item)}
            {item.matches.map((m, j) => (
              <div key={j} style={{ marginTop: ".35rem" }}>
                <div style={{ fontSize: ".68rem", color: "var(--orange)", textTransform: "uppercase", letterSpacing: ".05em" }}>
                  in {m.label}
                </div>
                <div className="story-row-excerpt">{highlight(m.snippet, query)}</div>
              </div>
            ))}
            {item.extraMatchCount > 0 && (
              <div style={{ fontSize: ".7rem", color: "var(--muted)", marginTop: ".25rem" }}>
                +{item.extraMatchCount} more match{item.extraMatchCount > 1 ? "es" : ""} in this profile
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleEscape = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const q = query.trim();
  const results = searchAll(q);

  const goTo = (href) => {
    router.push(href);
    onClose();
  };

  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(8,8,8,0.85)", zIndex: 300, display: "flex", justifyContent: "center", paddingTop: "10vh" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: "min(600px, 90vw)", maxHeight: "70vh", display: "flex", flexDirection: "column" }}>
        <div className="search-bar" style={{ marginBottom: "1rem" }}>
          <span style={{ color: "var(--muted)", fontSize: "1.1rem" }}>⌕</span>
          <input
            autoFocus
            className="search-input"
            type="text"
            placeholder="Search builders, stories, projects, pages..."
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

          {q && results.total === 0 && (
            <div style={{ color: "var(--muted)", fontSize: ".85rem", textAlign: "center", padding: "2rem" }}>
              No matches for "{query}"
            </div>
          )}

          {q && results.total > 0 && (
            <>
              <ResultGroup
                label="Builders"
                items={results.builders}
                query={q}
                onGo={goTo}
                renderMeta={(item) => <div className="story-row-excerpt" style={{ marginBottom: ".25rem" }}>{item.department}</div>}
              />
              <ResultGroup label="Stories" items={results.stories} query={q} onGo={goTo} />
              <ResultGroup label="Projects" items={results.projects} query={q} onGo={goTo} />
              <ResultGroup label="Pages" items={results.pages} query={q} onGo={goTo} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}