"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import builders from "@/data/builders";

export default function BuildersGrid() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("all");
  const [university, setUniversity] = useState("all");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [universityOpen, setUniversityOpen] = useState(false);
  const dropdownRef = useRef(null);
  const universityRef = useRef(null);

  const deptFilters = useMemo(() => [
    { value: "all", label: "All disciplines" },
    ...[...new Set(builders.map((b) => b.department).filter(Boolean))].sort().map((d) => ({ value: d, label: d })),
  ], []);
  const universityFilters = useMemo(() => [
    { value: "all", label: "All universities" },
    ...[...new Set(builders.map((b) => b.university || b.school).filter(Boolean))].sort().map((u) => ({ value: u, label: u })),
  ], []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false);
      if (universityRef.current && !universityRef.current.contains(e.target)) setUniversityOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const visible = builders.filter((b) => {
    const term = search.trim().toLowerCase();
    const haystack = [b.name, b.department, b.university, b.school, b.quote].filter(Boolean).join(" ").toLowerCase();
    return (!term || haystack.includes(term))
      && (dept === "all" || b.department === dept)
      && (university === "all" || (b.university || b.school) === university);
  });

  const activeFilters = (dept !== "all" ? 1 : 0) + (university !== "all" ? 1 : 0);

  return (
    <div className="builders-directory">
      <div className="builders-toolbar">
        <label className="builders-search">
          <span aria-hidden="true">⌕</span>
          <input type="search" placeholder="Search people, skills, disciplines..." value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search builders" />
          {search && <button type="button" onClick={() => setSearch("")} aria-label="Clear search">×</button>}
        </label>

        <div className="builders-filter-wrap" ref={dropdownRef}>
          <button type="button" className={`builders-filter-button ${dept !== "all" ? "is-active" : ""}`} onClick={() => { setDropdownOpen((v) => !v); setUniversityOpen(false); }} aria-expanded={dropdownOpen}>
            <span>Discipline</span><strong>{dept === "all" ? "All" : "Selected"}</strong><span aria-hidden="true">⌄</span>
          </button>
          {dropdownOpen && <div className="builders-filter-menu">
            {deptFilters.map((f) => <button type="button" key={f.value} className={dept === f.value ? "selected" : ""} onClick={() => { setDept(f.value); setDropdownOpen(false); }}>{f.label}</button>)}
          </div>}
        </div>

        <div className="builders-filter-wrap" ref={universityRef}>
          <button type="button" className={`builders-filter-button ${university !== "all" ? "is-active" : ""}`} onClick={() => { setUniversityOpen((v) => !v); setDropdownOpen(false); }} aria-expanded={universityOpen}>
            <span>University</span><strong>{university === "all" ? "All" : "Selected"}</strong><span aria-hidden="true">⌄</span>
          </button>
          {universityOpen && <div className="builders-filter-menu">
            {universityFilters.map((f) => <button type="button" key={f.value} className={university === f.value ? "selected" : ""} onClick={() => { setUniversity(f.value); setUniversityOpen(false); }}>{f.label}</button>)}
          </div>}
        </div>
        {activeFilters > 0 && <button type="button" className="builders-clear" onClick={() => { setDept("all"); setUniversity("all"); }}>Clear filters</button>}
      </div>

      <div className="builders-results-line"><span>{visible.length} {visible.length === 1 ? "builder" : "builders"}</span><span>STORIES, IDEAS & WORK IN PROGRESS</span></div>

      {visible.length ? <div className="builders-grid builders-grid-editorial">
        {visible.map((b, index) => (
          <Link key={b.slug} href={`/builders/${b.slug}`} className="builder-card builder-card-editorial">
            <div className="builder-card-image">
              {b.image ? <Image src={b.image} className={`builder-photo-editorial ${String(b.image).split("/").pop().split(".")[0]}`} alt={b.name} fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" style={{ objectFit: "cover", objectPosition: "center 18%" }} /> : <div className="builder-image-fallback">{b.name?.charAt(0) || "B"}</div>}
              <span className="builder-card-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="builder-card-open">View profile ↗</span>
            </div>
            <div className="builder-card-content">
              <span className="builder-card-discipline">{b.department || "Student builder"}</span>
              <h3 className="builder-name">{b.name}</h3>
              <p className="builder-card-school">{b.university || b.school || "Nigeria"}{b.year ? ` · ${b.year}` : ""}</p>
              {b.quote && <blockquote className="builder-quote-editorial">“{b.quote}”</blockquote>}
              <div className="builder-card-bottom"><span>Read their story</span><span aria-hidden="true">↗</span></div>
            </div>
          </Link>
        ))}
      </div> : <div className="builders-empty"><strong>No builders found.</strong><span>Try another name, discipline or university.</span><button type="button" onClick={() => { setSearch(""); setDept("all"); setUniversity("all"); }}>Reset directory</button></div>}
    </div>
  );
}
