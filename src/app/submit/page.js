
const submissions = [
  {
    number: "01",
    category: "PERSONAL STORIES",
    title: "Share Your Story",
    description:
      "Tell us about your undergraduate journey. It could be a challenge you overcame, a lesson that changed you, a memorable experience, or an achievement you're proud of.",
    action: "Submit Your Story",
    url: "https://tally.so/r/q4N5Q9",
    style: "story",
  },
  {
    number: "02",
    category: "RESEARCH & INNOVATION",
    title: "Submit a Project",
    description:
      "Share your final year project, research paper, startup, app, community initiative, or any work you built during university.",
    action: "Submit Your Project",
    url: "https://tally.so/r/Bz9q61",
    style: "project",
  },
  {
    number: "03",
    category: "PEOPLE WORTH DOCUMENTING",
    title: "Nominate a Student",
    description:
      "Know an undergraduate doing interesting work, leading a community, building a project, conducting research, or living a story worth preserving? Tell us about them.",
    action: "Nominate Someone",
    url: "https://tally.so/r/ODVZVp",
    style: "nomination",
  },
  {
    number: "04",
    category: "SEASON 02 · OPEN CASTING",
    title: "Be Featured on BTG",
    description:
      "Season 2 is live and casting for upcoming episodes. Have a journey worth documenting? Apply to share your story with future students.",
    action: "Apply for Season 2",
    url: "https://tally.so/r/NpOvkG",
    style: "season",
  },
];

export const metadata = {
  title: "Submit | Before They Graduate",
  description:
    "Every story, project, and conversation preserved here becomes part of a growing archive of Nigerian undergraduate life.",
};

export default function SubmitPage() {
  return (
    <main className="submit-page">
      <header className="submit-hero">
        <div className="submit-eyebrow">
          <span />
          OPEN SUBMISSIONS
          <span className="submit-eyebrow-note">YOUR CONTRIBUTION MATTERS</span>
        </div>

        <h1 className="submit-page-title">
          Every journey leaves a mark.
          <span> Put yours on record.</span>
        </h1>

        <div className="submit-hero-bottom">
          <p className="submit-page-desc">
            Before They Graduate is building a living archive of Nigerian
            undergraduate life. The stories, projects, ideas and people
            that deserve to be remembered belong here.
          </p>

          <a href="#submission-options" className="submit-explore-link">
            EXPLORE CONTRIBUTION OPTIONS <span>↓</span>
          </a>
        </div>
      </header>

      <section
        className="submit-content"
        id="submission-options"
        aria-labelledby="submit-options-title"
      >
        <div className="submit-section-heading">
          <div>
            <span>HOW TO CONTRIBUTE</span>
            <h2 id="submit-options-title">
              Choose your <em>place in the archive.</em>
            </h2>
          </div>
          <p>
            Whether it's your own journey or someone else's work, there's
            a place for it here.
          </p>
        </div>

        <div className="submit-grid">
          {submissions.map((item) => (
            <article
              className={`archive-card archive-card-${item.style}`}
              key={item.number}
            >
              <div className="archive-card-top">
                <span className="archive-number">{item.number}</span>
                <span className="archive-category">{item.category}</span>
              </div>

              <div className="archive-card-main">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {item.action} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="submit-note">
        <div className="submit-note-label">
          <span /> WHY THIS ARCHIVE EXISTS
        </div>

        <h2>
          Most student stories are forgotten.
          <span> Most student projects disappear.</span>
        </h2>

        <div className="submit-note-footer">
          <p>
            The work matters. The process matters. The people behind it matter.
          </p>
          <strong>BTG exists to preserve both.</strong>
        </div>
      </section>
    </main>
  );
}
