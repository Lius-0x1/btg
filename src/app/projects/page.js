import Link from "next/link";
import ProjectsGrid from "@/components/ProjectsGrid";
import projects from "@/data/projects";

export const metadata = {
  title: "Projects | Before They Graduate",
  description: "A permanent repository of research, student startups, apps and tools built by Nigerian undergraduates.",
};

export default function ProjectsPage() {
  const categories = new Set(projects.map((project) => project.type).filter(Boolean));
  return (
    <main className="collection-page projects-page">
      <header className="collection-hero">
        <div className="collection-kicker"><span /> THE WORK THEY LEAVE BEHIND</div>
        <div className="collection-hero-grid">
          <div>
            <h1>Ideas made <em>real.</em></h1>
            <p>A living repository of undergraduate research, startups, apps, tools and initiatives. Good work should not disappear after a final-year presentation.</p>
            <div className="collection-actions"><a href="#project-directory">Explore projects ↓</a><Link href="/submit">Submit a project ↗</Link></div>
          </div>
          <aside className="collection-count-card">
            <strong>{String(projects.length).padStart(2, "0")}</strong>
            <span>PROJECTS DOCUMENTED</span>
            <div className="collection-count-rule" />
            <div className="collection-count-pair"><b>{String(categories.size).padStart(2, "0")}</b><span>PROJECT TYPES</span></div>
            <small>Research, products and student-built solutions in one place.</small>
          </aside>
        </div>
      </header>
      <section className="collection-main" id="project-directory">
        <div className="collection-section-heading">
          <div><span>THE REPOSITORY</span><h2>Built before <em>graduation.</em></h2></div>
          <p>Browse the work, meet the people behind it, and follow the links to explore what they have made.</p>
        </div>
        <div className="collection-toolbar-note"><span>FILTER THE REPOSITORY</span><Link href="/submit">Have something to add? Submit it ↗</Link></div>
        <ProjectsGrid />
        <div className="project-process">
          <div className="project-process-heading"><span>FROM SUBMISSION TO ARCHIVE</span><h2>How the repository <em>works.</em></h2></div>
          <div className="project-process-grid">
            <article><b>01</b><h3>Submit</h3><p>Share the project, its story, the people behind it and a link where it can be explored.</p></article>
            <article><b>02</b><h3>Editorial review</h3><p>Our team reviews submissions to make sure the work and its context are represented clearly.</p></article>
            <article><b>03</b><h3>Preserve</h3><p>Approved work joins the repository: credited, searchable and available beyond graduation.</p></article>
          </div>
        </div>
      </section>
    </main>
  );
}
