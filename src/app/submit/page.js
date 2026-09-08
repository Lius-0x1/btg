import Link from "next/link";
export const metadata = {
  title: "Submit | Before They Graduate",
  description: "Every story, project, and conversation preserved here becomes part of a growing archive of Nigerian undergraduate life.",
};

export default function SubmitPage() {
  return (
    <>
      <div className="submit-hero">
        <div className="eyebrow">Open Submissions</div>
        <div className="page-title">Add to the <span>Archive.</span></div>
        <p className="page-desc" style={{ marginTop: "1rem" }}>Every story, project, and conversation preserved here becomes part of a growing archive of Nigerian undergraduate life.</p>
      </div>

      <div className="submit-grid" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem" }}>
        <div className="archive-card">
          <div className="archive-icon">📖</div>
          <h3>Share Your Story</h3>
          <p>Tell us about your undergraduate journey. It could be a challenge you overcame, a lesson that changed you, a memorable experience, or an achievement you're proud of.</p>
          <a href="https://tally.so/r/q4N5Q9" target="_blank" rel="noopener noreferrer" className="btn-primary">Submit Story →</a>
        </div>

        <div className="archive-card">
          <div className="archive-icon">🔬</div>
          <h3>Submit a Project</h3>
          <p>Share your final year project, research paper, startup, app, community initiative, or any work you built during university.</p>
          <a href="https://tally.so/r/Bz9q61" target="_blank" rel="noopener noreferrer" className="btn-primary">Submit Project →</a>
        </div>

        <div className="archive-card">
          <div className="archive-icon">🌟</div>
          <h3>Nominate a Student</h3>
          <p>Know an undergraduate doing interesting work, leading a community, building a project, conducting research, or living a story worth preserving? Nominate them for BTG.</p>
          <a href="https://tally.so/r/ODVZVp" target="_blank" rel="noopener noreferrer" className="btn-primary">Nominate →</a>
        </div>

        <div className="archive-card">
          <div className="archive-icon">🎥</div>
          <h3>Apply for Season 2</h3>
          <p>Season 2 is live and casting for upcoming episodes. Have a journey worth documenting? Apply to be featured on Before They Graduate and share your story with future students.</p>
          <a href="https://tally.so/r/NpOvkG" target="_blank" rel="noopener noreferrer" className="btn-primary">Apply Now →</a>
        </div>
      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem 5rem" }}>
        <div className="submit-note">
          <strong>Why contribute?</strong><br /><br />
          Most student stories are forgotten.<br />
          Most student projects disappear after submission.<br /><br />
          BTG exists to preserve both.
        </div>
      </div>
    </>
  );
}