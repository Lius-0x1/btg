import Link from "next/link";

export const metadata = {
  title: "About | Before They Graduate",
  description: "Before They Graduate is a documentary series and digital archive dedicated to preserving the stories, projects, and experiences of Nigerian undergraduate students.",
};

export default function AboutPage() {
  return (
    <main className="collection-page about-page">
      <header className="collection-hero">
        <div className="collection-kicker"><span /> WHY THIS ARCHIVE EXISTS</div>
        <div className="collection-hero-grid about-hero-grid">
          <div>
            <h1>Before They <em>Graduate.</em></h1>
            <p>Documenting the stories, projects and experiences of Nigerian undergraduates before they leave university. A record of what they made, what they learned and who they became.</p>
            <div className="collection-actions"><Link href="/stories">Explore the archive ↓</Link><Link href="/submit">Add to the record ↗</Link></div>
          </div>
          <aside className="about-manifesto-card"><span>THE BELIEF</span><strong>Make the record outlive the moment.</strong><small>Not just the trophy. The journey behind it.</small></aside>
        </div>
      </header>
      <section className="collection-main about-content">
        <div className="about-grid">
        <div>
          <div className="eyebrow" style={{ marginBottom: "1.2rem" }}>The Mission</div>
          <div className="page-title" style={{ marginBottom: "1.4rem" }}>Before They <span>Graduate.</span></div>
          <p className="about-mission">Nigerian undergraduates are doing <strong>remarkable things</strong> building, researching, creating, leading. Most of it disappears the moment they graduate.</p>
          <div className="about-body">
            <p>Before They Graduate is a documentary series and digital archive dedicated to preserving the stories, projects, and experiences of Nigerian undergraduate students before they leave university.</p>
            <p>It started as a YouTube series at FUTA 12 honest conversations with final year students. It's now evolving into a permanent archive open to any Nigerian undergraduate from any university.</p>
            <p>The archive has three parts: the episode library, the story archive, and the project repository. Together they answer one question: what were Nigerian undergraduates doing in the 2020s?</p>
            <p>Most final year projects are submitted, graded, and filed away forever. Most student experiences are forgotten. BTG exists to make sure that doesn't happen.</p>
          </div>
        </div>
        <div>
          <div className="value-card"><div className="value-title">The journey, not the trophy</div><div className="value-body">We don't document achievements. We document what it actually felt like the uncertainty, the growth, and the clarity that only comes at the end of something significant.</div></div>
          <div className="value-card"><div className="value-title">Every project deserves to be found</div><div className="value-body">Thousands of final year research papers disappear after submission every year. The Project Repository gives every student-built thing a permanent, searchable home.</div></div>
          <div className="value-card"><div className="value-title">Any university. Any department.</div><div className="value-body">Season 1 started at FUTA. The archive is open to any undergraduate from any Nigerian university.</div></div>
          <div className="value-card"><div className="value-title">The archive is the product</div><div className="value-body">In 10 years, when someone asks what Nigerian undergraduates were doing in the 2020s Before They Graduate should be the most complete answer available.</div></div>
        </div>
      </div>

      </section>
      <div className="cta-band" style={{ paddingBottom: "5rem" }}>
        <div className="cta-inner">
          <div className="cta-title">Your Story Belongs <em>in This Archive.</em></div>
          <div className="cta-actions">
            <Link href="/submit" className="btn-white">Submit Your Story or Project →</Link>
            <div className="cta-sub">Free. Open to all Nigerian universities.</div>
          </div>
        </div>
      </div>
    </main>
  );
}