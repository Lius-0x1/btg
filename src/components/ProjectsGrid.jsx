"use client";
import { useState } from "react";
import Link from "next/link";
import projects from "@/data/projects";

const TYPE_LABELS = {
  startup: "Startup",
  research: "Research",
  app: "App / Tool",
  tool: "App / Tool",
  project: "Final Year Project",
};

const typeLabel = (t) => TYPE_LABELS[t] || t;
const typeClass = (t) => (t === "tool" ? "type-app" : t === "project" ? "type-research" : `type-${t}`);
// "app" and "tool" share one filter pill.
const filterKey = (t) => (t === "tool" ? "app" : t);

function byline(p) {
  const lead = p.founders?.find((f) => f.name)?.name;
  const school = p.universityShort || p.university;
  return [lead, school].filter(Boolean).join(" · ");
}

// Feeds the cursor-following spotlight in grids.css.
function trackCursor(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

// The "submit yours" invitation cards from the original grid. They stay so visitors
// always have a prompt to contribute, whether or not a real project of that type exists yet.
const invites = [
  {
    types: ["startup"],
    badge: "Startup",
    badgeClass: "type-startup",
    title: "Is your startup next?",
    desc: "If you've built a product, app, or startup during your time as a Nigerian undergraduate this is where it gets documented permanently. Submit it and it will appear here.",
    author: "Open to all Nigerian universities",
    linkText: "Submit yours →",
  },
  {
    // Research invitation also answers the "Final Year Projects" filter.
    types: ["research", "project"],
    badge: "Research",
    badgeClass: "type-research",
    title: "Final Year Research Repository",
    desc: "Every final year project submitted to a Nigerian university department deserves to be seen beyond the shelf it gets filed on. Submit yours with a Google Drive link.",
    author: "Any department · Any university",
    linkText: "Add research →",
  },
  {
    types: ["app"],
    badge: "App / Tool",
    badgeClass: "type-app",
    title: "Student-Built Apps & Tools",
    desc: "Built something during university? A mobile app, a web tool, a hardware prototype, a community platform? Submit it here and get it in front of people who care.",
    author: "GitHub, APK, website any format",
    linkText: "Submit app →",
  },
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
  const all = activeFilter === "all";

  const realProjects = projects.filter((p) => all || filterKey(p.type) === activeFilter);
  const visibleInvites = invites.filter((i) => all || i.types.includes(activeFilter));

  // Real projects first, then the invitations. The first card on "All" is featured.
  const cards = [
    ...realProjects.map((p) => ({ kind: "project", key: p.slug, data: p })),
    ...visibleInvites.map((i) => ({ kind: "invite", key: i.title, data: i })),
  ];

  return (
    <>
      <div className="proj-filters">
        {filters.map((f) => (
          <span
            key={f.value}
            className={`filter-pill ${activeFilter === f.value ? "active" : ""}`}
            onClick={() => setActiveFilter(f.value)}
          >
            {f.label}
          </span>
        ))}
      </div>

      <div className="proj-grid proj-grid--bento">
        {cards.map((card, i) => {
          const featured = i === 0 && all ? "featured" : "";

          if (card.kind === "project") {
            const p = card.data;
            return (
              <Link
                key={card.key}
                href={p.href}
                className={`proj-card ${featured}`}
                onMouseMove={trackCursor}
              >
                <span className={`proj-type-badge ${typeClass(p.type)}`}>{typeLabel(p.type)}</span>
                {p.stage && (
                  <span className={`proj-stage ${p.stage === "Launched" ? "proj-stage--live" : ""}`}>{p.stage}</span>
                )}
                <div className="proj-title">{p.title}</div>
                <div className="proj-desc">{p.tagline || p.description}</div>
                <div className="proj-foot">
                  <span className="proj-author">{byline(p)}</span>
                  <span className="proj-link">View project →</span>
                </div>
              </Link>
            );
          }

          const inv = card.data;
          return (
            <div
              key={card.key}
              className={`proj-card proj-card--invite ${featured}`}
              onMouseMove={trackCursor}
            >
              <span className={`proj-type-badge ${inv.badgeClass}`}>{inv.badge}</span>
              <div className="proj-title">{inv.title}</div>
              <div className="proj-desc">{inv.desc}</div>
              <div className="proj-foot">
                <span className="proj-author">{inv.author}</span>
                <Link href="/submit" className="proj-link">{inv.linkText}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}