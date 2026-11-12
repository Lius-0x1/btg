import Link from "next/link";
import stories from "@/data/stories";
import StoryArchive from "@/components/StoryArchive";

export const metadata = {
  title: "Story Archive | Before They Graduate",
  description: "Explore the stories, journeys and experiences of Nigerian undergraduates before graduation.",
};

export default function StoriesPage() {
  const publishedStories = stories;
  const campuses = new Set(publishedStories.flatMap((story) => [story.meta, story.tag].filter(Boolean).flatMap((value) => value.split("·").map((part) => part.trim()))).filter((value) => /university|\bFUTA\b|\bLASU\b/i.test(value)));

  return (
    <main className="archive-page">
      <section className="archive-hero">
        <div className="archive-eyebrow"><span /> THE PERMANENT RECORD OF NIGERIAN UNDERGRADUATES</div>
        <div className="archive-hero-grid">
          <div>
            <h1>Every story<br />has a <em>place here.</em></h1>
            <p>Projects, turning points, hard lessons and defining moments from students across Nigerian universities — documented before graduation.</p>
            <div className="archive-hero-actions">
              <a href="#archive">Explore the archive <span>↓</span></a>
              <Link href="/submit">Submit a story <span>↗</span></Link>
            </div>
          </div>
          <aside className="archive-stat-card">
            <div className="archive-stat-large">{String(publishedStories.length).padStart(2, "0")}</div>
            <div className="archive-stat-label">STORIES PRESERVED</div>
            <div className="archive-stat-rule" />
            <div className="archive-stat-pair"><strong>{String(campuses.size).padStart(2, "0")}</strong><span>CAMPUSES REPRESENTED*</span></div>
            <small>*Based on university details currently recorded in published story metadata.</small>
          </aside>
        </div>
      </section>

      <section className="archive-main" id="archive">
        <div className="archive-section-heading">
          <div>
            <span className="archive-section-label">THE COLLECTION</span>
            <h2>The Story <em>Archive</em></h2>
          </div>
          <p>Search the people, places and experiences that make up the undergraduate journey.</p>
        </div>
        <StoryArchive stories={publishedStories} />
      </section>

      <section className="archive-submit-band">
        <div><span>YOUR EXPERIENCE BELONGS HERE</span><h2>Make the record outlive<br />your graduation.</h2></div>
        <Link href="/submit">Submit your story <span>↗</span></Link>
      </section>
    </main>
  );
}
