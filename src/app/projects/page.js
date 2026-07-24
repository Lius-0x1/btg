import Link from "next/link";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata = {
  title: "Projects | Before They Graduate",
  description: "Final year research, student startups, apps, and tools built by Nigerian undergraduates preserved here permanently.",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-title">Project <span>Repository.</span></div>
        <p className="page-desc" style={{ marginTop: "1rem" }}>Final year research, student startups, apps, and tools built by Nigerian undergraduates preserved here permanently. No more projects disappearing after submission.</p>
      </div>

      <div className="section" style={{ paddingTop: "1rem" }}>
        <div className="sec-header">
          <div>
            <div className="sec-title">All <span>Projects</span></div>
            <div className="sec-sub">Research · Startups · Apps · Tools · Initiatives</div>
          </div>
          <Link href="/submit" className="btn-primary" style={{ fontSize: ".75rem", padding: ".6rem 1.3rem" }}>Submit a Project →</Link>
        </div>

        <ProjectsGrid />

        <div style={{ marginTop: "3rem" }}>
          <div style={{ background: "var(--off)", border: "1px solid var(--border)", borderRadius: "8px", padding: "2rem", textAlign: "center" }}>
            <div style={{ fontSize: ".7rem", textTransform: "uppercase", letterSpacing: ".12em", color: "var(--orange)", marginBottom: ".75rem" }}>How the Repository Works</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem", maxWidth: "700px", margin: "0 auto" }}>
              <div><div style={{ fontFamily: "var(--display)", fontSize: "1.8rem", color: "var(--orange)", marginBottom: ".4rem" }}>01</div><div style={{ fontSize: ".82rem", color: "var(--muted2)", fontWeight: 300, lineHeight: 1.6 }}>You submit your project title, description, your name, university, and a link (Google Drive, GitHub, website, anywhere).</div></div>
              <div><div style={{ fontFamily: "var(--display)", fontSize: "1.8rem", color: "var(--orange)", marginBottom: ".4rem" }}>02</div><div style={{ fontSize: ".82rem", color: "var(--muted2)", fontWeight: 300, lineHeight: 1.6 }}>We review it. If it's a genuine undergraduate project or student-built product, it gets approved and published.</div></div>
              <div><div style={{ fontFamily: "var(--display)", fontSize: "1.8rem", color: "var(--orange)", marginBottom: ".4rem" }}>03</div><div style={{ fontSize: ".82rem", color: "var(--muted2)", fontWeight: 300, lineHeight: 1.6 }}>Your project lives here permanently credited to you, searchable, shareable, and visible to anyone who visits BTG.</div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}