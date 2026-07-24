import Link from "next/link";

export const metadata = {
  title: "Stories | Before They Graduate",
  description: "Undergraduate stories from Nigerian universities submitted, reviewed, and preserved permanently.",
};

export default function StoriesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-title">The <span>Archive.</span></div>
        <p className="page-desc" style={{ marginTop: "1rem" }}>
          Undergraduate stories from Nigerian universities submitted, reviewed, and preserved permanently. Any school. Any department. Any experience worth documenting.
        </p>
      </div>

      <div className="section" style={{ paddingTop: "1rem" }}>
        <div className="sec-header">
          <div>
            <div className="sec-title">All <span>Stories</span></div>
            <div className="sec-sub">Growing as submissions come in</div>
          </div>
          <Link href="/submit" className="btn-primary" style={{ fontSize: ".75rem", padding: ".6rem 1.3rem" }}>Submit Your Story →</Link>
        </div>

        <div className="stories-list">
          <div className="story-row">
            <div className="story-row-num">01</div>
            <div>
              <div className="story-row-tag">✦ Origin Story · By Ayinde · October 2025</div>
              <div className="story-row-title">How "Before They Graduate" Started</div>
              <div className="story-row-excerpt">
                Funny thing is, Before They Graduate wasn't even planned. It started when Akorede, a 500-level student from the same department, saw a YouTube video Ayinde made with his father and dropped a comment. That comment became a conversation. That conversation became the first episode. No plan, no big idea, no proper setup just a mic, a borrowed camera, and a friend who said yes. This is the origin story of the series, in the creator's own words.
              </div>
              <div className="story-row-meta" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <span>Ayinde (Creator) · FUTA · October 2025</span>
                <Link href="/stories/how-it-started" style={{ color: "var(--orange)", fontSize: ".71rem", textTransform: "uppercase", letterSpacing: ".08em" }}>Read Full Story →</Link>
                <Link href="https://soburayinde.substack.com/p/how-before-they-graduate-started" target="_blank" rel="noopener noreferrer" style={{ color: "var(--muted)", fontSize: ".71rem", textTransform: "uppercase", letterSpacing: ".08em" }}>or read on Substack</Link>
              </div>
            </div>
          </div>

          <div className="story-row" style={{ opacity: 0.55, pointerEvents: "none" }}>
            <div className="story-row-num">02</div>
            <div>
              <div className="story-row-tag">Waiting for submissions</div>
              <div className="story-row-title">The next story in this archive is yours</div>
              <div className="story-row-excerpt">
                Stories from undergraduate students across Nigeria will appear here as submissions are reviewed and approved. Any university. Any department. Any experience that deserves to be remembered.
              </div>
              <div className="story-row-meta">Open to all Nigerian universities</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "3rem" }}>
          <div className="cta-inner" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px" }}>
            <div>
              <div style={{ fontFamily: "var(--display)", fontSize: "1.8rem", color: "var(--text)", marginBottom: ".5rem" }}>Have a story worth telling?</div>
              <div style={{ fontSize: ".85rem", color: "var(--muted2)", fontWeight: 300, maxWidth: "480px", lineHeight: 1.7 }}>Submit your final year experience, achievement, or journey. We review every submission and publish it permanently in this archive.</div>
            </div>
            <div className="cta-actions">
              <Link href="/submit" className="btn-primary">Submit Your Story →</Link>
              <div style={{ fontSize: ".73rem", color: "var(--muted)", textAlign: "right" }}>Reviewed before publishing.<br />Open to all Nigerian universities.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}