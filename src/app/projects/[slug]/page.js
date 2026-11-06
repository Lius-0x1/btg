import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ShareButton from "@/components/ShareButtons";
import projects from "@/data/projects";

const TYPE_LABELS = {
  startup: "Startup",
  research: "Research",
  app: "App / Tool",
  tool: "App / Tool",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | Before They Graduate`,
    description: project.description,
  };
}

const tileStyle = {
  width: 96,
  height: 96,
  borderRadius: "16px",
  background: "var(--off)",
  border: "1px solid var(--border)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "var(--display)",
  fontSize: "2.6rem",
  color: "var(--orange)",
  margin: "0 auto 1.25rem",
};

const statGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "1rem",
};

const statCard = {
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: "8px",
  padding: "1.25rem",
};

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const links = project.links || [];
  const meta = [TYPE_LABELS[project.type] || project.type, project.stage, project.university]
    .filter(Boolean)
    .join(" · ");

  return (
    <div className="profile-container">
      <Link href="/projects" className="profile-back-link">← Back to Projects</Link>

      <div className="profile-hero">
    {project.logo ? (
  <Image
    src={project.logo}
    alt={`${project.title} logo`}
    width={187}
    height={54}
    style={{
      display: "block",
      width: "110px",
      height: "auto",
      maxHeight: "50px",
      margin: "0 auto 1.25rem",
      objectFit: "contain",
      borderRadius: 0,
    }}
  />
) : (
  <div style={tileStyle}>{project.title.charAt(0)}</div>
)}
        <h1 className="profile-name">{project.title}</h1>
        <div className="profile-meta">{meta}</div>
        {project.tagline && <div className="profile-quote-highlight">{project.tagline}</div>}
      </div>

      <div className="profile-section">
        <ShareButton title={`Check out ${project.title} on Before They Graduate!`} />
        <h2 className="profile-section-title">About</h2>
        <p>{project.description}</p>
        {project.about?.map((p, i) => <p key={i}>{p}</p>)}
      </div>

      {links.length > 0 && (
        <div className="profile-section">
          <h2 className="profile-section-title">Try It</h2>
          <a href={links[0].href} target="_blank" rel="noopener noreferrer" className="profile-watch-btn">
            {links[0].label} →
          </a>
          {links.length > 1 && (
            <div className="profile-links" style={{ marginTop: "1rem" }}>
              {links.slice(1).map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="profile-link-pill">
                  {l.label} →
                </a>
              ))}
            </div>
          )}
        </div>
      )}

      {project.stats?.length > 0 && (
        <div className="profile-section">
          <h2 className="profile-section-title">The Numbers</h2>
          <div style={statGrid}>
            {project.stats.map((s) => (
              <div key={s.label} style={statCard}>
                <div style={{ fontFamily: "var(--display)", fontSize: "2rem", color: "var(--orange)", lineHeight: 1.1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: ".82rem", color: "var(--muted2)", marginTop: ".4rem" }}>{s.label}</div>
              </div>
            ))}
          </div>
          {project.statsNote && (
            <p style={{ fontSize: ".78rem", color: "var(--muted)", marginTop: "1rem" }}>{project.statsNote}</p>
          )}
        </div>
      )}

      {project.founders?.length > 0 && (
        <div className="profile-section">
          <h2 className="profile-section-title">{project.founders.length > 1 ? "The Founders" : "The Founder"}</h2>
          {project.founders.map((f, i) => (
            <div key={i} className="profile-card">
              <div style={{ color: "var(--text)", fontWeight: 500 }}>
                  {f.profileSlug ? (
     <Link href={`/builders/${f.profileSlug}`} style={{ color: "var(--text)" }}>{f.name} →</Link>
   ) : (
     f.name || f.role
   )}
                </div>
              {f.name && f.role && <div style={{ color: "var(--orange)", fontSize: ".78rem", marginTop: ".2rem" }}>{f.role}</div>}
              {f.detail && <div style={{ color: "var(--muted2)", fontSize: ".85rem", marginTop: ".35rem" }}>{f.detail}</div>}
            </div>
          ))}
        </div>
      )}

      {project.quotes?.length > 0 && (
        <div className="profile-section">
          <h2 className="profile-section-title">{project.quotesHeading || "In the founder's words"}</h2>
          {project.quotes.map((q, i) => (
            <div key={i} className="profile-pull-quote">“{q.text}”</div>
          ))}
        </div>
      )}

      {project.learned?.length > 0 && (
        <div className="profile-section">
          <h2 className="profile-section-title">{project.learnedHeading || "What the founder learned"}</h2>
          {project.learned.map((item, i) => (
            <div key={i} className="profile-card">{item}</div>
          ))}
        </div>
      )}

      {project.interviewSlug && (
        <div className="profile-section">
          <h2 className="profile-section-title">The Full Interview</h2>
          <Link href={`/stories/${project.interviewSlug}`} className="profile-watch-btn">Read the full interview →</Link>
        </div>
      )}

      <div className="profile-section">
        <ShareButton title={`Check out ${project.title} on Before They Graduate!`} />
      </div>

      <div className="profile-footer-note">Part of the Project Repository · Before They Graduate</div>
    </div>
  );
}