import BuildersGrid from "@/components/BuildersGrid";
import builders from "@/data/builders";

export const metadata = {
  title: "Builders | Before They Graduate",
  description: "Meet the Nigerian undergraduates whose work, ideas and experiences are part of the Before They Graduate archive.",
};

export default function BuildersPage() {
  const universities = new Set(builders.map((builder) => builder.university).filter(Boolean));
  return (
    <main className="collection-page builders-page">
      <header className="collection-hero">
        <div className="collection-kicker"><span /> THE PEOPLE BEHIND THE WORK</div>
        <div className="collection-hero-grid">
          <div>
            <h1>Meet the <em>builders.</em></h1>
            <p>Students turning ideas into projects, communities, research and real-world work. These are the people whose stories deserve to outlive graduation.</p>
            <div className="collection-actions"><a href="#builder-directory">Explore the directory ↓</a><a href="/submit">Nominate a builder ↗</a></div>
          </div>
          <aside className="collection-count-card">
            <strong>{String(builders.length).padStart(2, "0")}</strong>
            <span>PEOPLE IN THE ARCHIVE</span>
            <div className="collection-count-rule" />
            <div className="collection-count-pair"><b>{String(universities.size).padStart(2, "0")}</b><span>UNIVERSITIES REPRESENTED</span></div>
            <small>A growing record of undergraduate ambition and work.</small>
          </aside>
        </div>
      </header>
      <section className="collection-main" id="builder-directory">
        <div className="collection-section-heading">
          <div><span>THE DIRECTORY</span><h2>People on <em>record.</em></h2></div>
          <p>Search by name or department to find a builder and explore their journey.</p>
        </div>
        <BuildersGrid />
      </section>
      <section className="collection-submit-band">
        <div><span>KNOW SOMEONE WE SHOULD DOCUMENT?</span><h2>Put their work<br/>on the record.</h2></div>
        <a href="/submit">Nominate a builder <span>↗</span></a>
      </section>
    </main>
  );
}
