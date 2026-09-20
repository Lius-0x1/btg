"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import builders from "@/data/builders";

export default function BuildersGrid() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Derived from builders.js — a new department shows up automatically,
  // same as before. Only the UI presentation is changing here.
  const deptFilters = useMemo(() => {
    const unique = [...new Set(builders.map((b) => b.department))].sort();
    return [{ value: "all", label: "All Departments" }, ...unique.map((d) => ({ value: d, label: d }))];
  }, []);

  const activeLabel = deptFilters.find((f) => f.value === dept)?.label || "All Departments";

  // Close the dropdown when clicking anywhere outside it.
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const visible = builders.filter((b) => {
    const matchesSearch = b.name.toLowerCase().includes(search.toLowerCase()) || b.department.toLowerCase().includes(search.toLowerCase());
    const matchesDept = dept === "all" || b.department === dept;
    return matchesSearch && matchesDept;
  });

  return (
    <>
      <div className="search-bar" style={{ display: "flex", alignItems: "center", gap: ".75rem" }}>
        <span style={{ color: "var(--muted)", fontSize: "1.1rem" }}>⌕</span>
        <input
          className="search-input"
          type="text"
          placeholder="Search by name or department..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1 }}
        />

        <div ref={dropdownRef} style={{ position: "relative", flexShrink: 0 }}>
          <button
            onClick={() => setDropdownOpen((o) => !o)}
            aria-label="Filter by department"
            aria-expanded={dropdownOpen}
            style={{
              display: "flex",
              alignItems: "center",
              gap: ".4rem",
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: "6px",
              padding: ".5rem .8rem",
              cursor: "pointer",
              color: dept === "all" ? "var(--muted)" : "var(--orange)",
              fontSize: ".78rem",
              whiteSpace: "nowrap",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            <span>{dept === "all" ? "Filter" : activeLabel}</span>
          </button>

          {dropdownOpen && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "calc(100% + 6px)",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                minWidth: "220px",
                zIndex: 20,
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
              }}
            >
              {deptFilters.map((f) => (
                <div
                  key={f.value}
                  onClick={() => {
                    setDept(f.value);
                    setDropdownOpen(false);
                  }}
                  style={{
                    padding: ".65rem 1rem",
                    fontSize: ".8rem",
                    cursor: "pointer",
                    color: dept === f.value ? "var(--orange)" : "var(--text)",
                    background: dept === f.value ? "var(--off)" : "transparent",
                  }}
                >
                  {f.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="builders-grid" style={{ marginTop: "1.5rem" }}>
        {visible.map((b) => (
          <Link key={b.slug} href={`/builders/${b.slug}`} className="builder-card">
            <div className="builder-top">
              <Image src={b.image} className="builder-photo" alt={b.name} width={60} height={60} />
              <div>
                <div className="builder-name">{b.name}</div>
                <div className="builder-school">{b.department} · FUTA · {b.season === "Season 2" ? "2026" : "2025"}</div>
                <span className="builder-status">Archive Profile →</span>
              </div>
            </div>
            <div className="builder-quote"> "{b.quote}" </div>
          </Link>
        ))}
      </div>
    </>
  );
}