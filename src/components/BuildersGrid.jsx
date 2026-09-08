"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import builders from "@/data/builders";

export default function BuildersGrid() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("all");

  // Derived directly from builders.js, so a new department shows up
  // automatically the moment someone new is added — no hardcoded list to
  // forget to update next season.
  const deptFilters = useMemo(() => {
    const unique = [...new Set(builders.map((b) => b.department))].sort();
    return [{ value: "all", label: "All" }, ...unique.map((d) => ({ value: d, label: d }))];
  }, []);

  const visible = builders.filter((b) => {
    const matchesSearch = b.name.toLowerCase().includes(search.toLowerCase()) || b.department.toLowerCase().includes(search.toLowerCase());
    const matchesDept = dept === "all" || b.department === dept;
    return matchesSearch && matchesDept;
  });

  return (
    <>
      <div className="search-bar">
        <span style={{ color: "var(--muted)", fontSize: "1.1rem" }}>⌕</span>
        <input className="search-input" type="text" placeholder="Search by name or department..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="proj-filters" style={{ marginTop: ".5rem" }}>
        {deptFilters.map((f) => (
          <span key={f.value} className={`filter-pill ${dept === f.value ? "active" : ""}`} onClick={() => setDept(f.value)}>{f.label}</span>
        ))}
      </div>

      <div className="builders-grid">
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