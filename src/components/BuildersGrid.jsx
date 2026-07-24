"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import builders from "@/data/builders";

const deptFilters = [
  { value: "all", label: "All" },
  { value: "Surveying & Geoinformatics", label: "Surveying & Geoinformatics" },
  { value: "Information & Communication Engineering", label: "ICE" },
  { value: "Statistics", label: "Statistics" },
  { value: "Computer Engineering", label: "Computer Engineering" },
];

export default function BuildersGrid() {
  const [search, setSearch] = useState("");
  const [dept, setDept] = useState("all");

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
                <div className="builder-school">{b.department} · FUTA · 2025</div>
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