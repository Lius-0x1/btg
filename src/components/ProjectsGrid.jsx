"use client";
import { useState } from "react";
import Link from "next/link";

const projects = [
  { type: "startup", badge: "Startup", badgeClass: "type-startup", title: "Be the first startup in this repository", desc: "If you've built a product, app, or startup during your time as a Nigerian undergraduate this is where it gets documented permanently. Submit it and it will appear here.", author: "Open to all Nigerian universities", linkText: "Submit yours →" },
  { type: "research", badge: "Research", badgeClass: "type-research", title: "Final Year Research Repository", desc: "Every final year project submitted to a Nigerian university department deserves to be seen beyond the shelf it gets filed on. Submit yours with a Google Drive link.", author: "Any department · Any university", linkText: "Add research →" },
  { type: "app", badge: "App / Tool", badgeClass: "type-app", title: "Student-Built Apps & Tools", desc: "Built something during university? A mobile app, a web tool, a hardware prototype, a community platform? Submit it here and get it in front of people who care.", author: "GitHub, APK, website any format", linkText: "Submit app →" },
];

const filters = [
  { value: "all", label: "All" },
  { value: "research", label: "Research" },
  { value: "startup", label: "Startups" },
  { value: "app", label: "Apps & Tools" },
  { value: "project", label: "Final Year Projects" },
];

export default function ProjectsGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const visible = activeFilter === "all" ? projects : projects.filter((p) => p.type === activeFilter);

  return (
    <>
      <div className="proj-filters">
        {filters.map((f) => (
          <span key={f.value} className={`filter-pill ${activeFilter === f.value ? "active" : ""}`} onClick={() => setActiveFilter(f.value)}>{f.label}</span>
        ))}
      </div>

      <div className="proj-grid">
        {visible.map((p, i) => (
          <div key={i} className={`proj-card ${i === 0 && activeFilter === "all" ? "featured" : ""}`}>
            <span className={`proj-type-badge ${p.badgeClass}`}>{p.badge}</span>
            <div className="proj-title">{p.title}</div>
            <div className="proj-desc">{p.desc}</div>
            <div className="proj-foot">
              <span className="proj-author">{p.author}</span>
              <Link href="/submit" className="proj-link">{p.linkText}</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}