import Link from "next/link";
import stories from "@/data/stories";

export const metadata = {
  title: "Stories | Before They Graduate",
  description: "Undergraduate stories from Nigerian universities submitted, reviewed, and preserved permanently.",
};

const smallLink = {
  fontSize: ".71rem",
  textTransform: "uppercase",
  letterSpacing: ".08em",
};

export default function StoriesPage() {
  const nextNumber = String(stories.length + 1).padStart(2, "0");

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
          {stories.map((s) => (
            <div className="story-row" key={s.slug}>
              <div className="story-row-num">{s.number}</div>
              <div>
                <div className="story-row-tag">{s.tag}</div>
                <div className="story-row-title">{s.title}</div>
                <div className="story-row-excerpt">{s.excerpt}</div>
                <div className="story-row-meta" style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <span>{s.meta}</span>
                  <Link href={s.href} style={{ ...smallLink, color: "var(--orange)" }}>Read Full Story →</Link>
                  {s.builderSlug && (
                    <Link href={`/builders/${s.builderSlug}`} style={{ ...smallLink, color: "var(--muted)" }}>View profile</Link>
                  )}
                  {s.externalUrl && (
                    <Link href={s.externalUrl} target="_blank" rel="noopener noreferrer" style={{ ...smallLink, color: "var(--muted)" }}>
                      {s.externalLabel}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}

          <div className="story-row" style={{ opacity: 0.55, pointerEvents: "none" }}>
            <div className="story-row-num">{nextNumber}</div>
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