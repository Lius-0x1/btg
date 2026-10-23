import ShareButton from "./ShareButtons";
import Image from "next/image";
import Link from "next/link";
import stories from "@/data/stories";

export default function BuilderProfile({ builder }) {
  // Story-only builders (no YouTube episode) point at a story in stories.js.
  // If storySlug doesn't match a real story, `story` is undefined and we fall
  // through to the episode block instead of rendering a broken link.
  const story = builder.storySlug ? stories.find((s) => s.slug === builder.storySlug) : null;

  const metaParts = [
    builder.department,
    builder.university,
    builder.season && builder.episode ? `${builder.season} ${builder.episode}` : null,
  ].filter(Boolean);

  const shareTitle = `Check out ${builder.name}'s profile on Before They Graduate!`;

  return (
    <div className="profile-container">
      <Link href="/builders" className="profile-back-link">← Back to All Builders</Link>

      <div className="profile-hero">
        <Image src={builder.image} alt={builder.name} width={120} height={120} className="profile-photo" />
        <h1 className="profile-name">{builder.name}</h1>
        <div className="profile-meta">{metaParts.join(" · ")}</div>
        <div className="profile-quote-highlight"> "{builder.quote}" </div>
      </div>

      <div className="profile-section">
        <ShareButton title={shareTitle} />
        <h2 className="profile-section-title">About</h2>
        {builder.about.map((p, i) => <p key={i}>{p}</p>)}
      </div>

      <div className="profile-section">
        <h2 className="profile-section-title">What Shaped Them</h2>
        <ul>{builder.whatShapedThem.map((item, i) => <li key={i}>{item}</li>)}</ul>
      </div>

      <div className="profile-section">
        <h2 className="profile-section-title">Lessons From Their Journey</h2>
        {builder.lessons.map((l, i) => <div key={i} className="profile-card">{l}</div>)}
      </div>

      <div className="profile-section">
        <h2 className="profile-section-title">Advice To Younger Students</h2>
        <div className="profile-pull-quote">{builder.advice}</div>
      </div>

      <div className="profile-section">
        <h2 className="profile-section-title">Memorable Quote</h2>
        <div className="profile-quote-highlight"> "{builder.memorableQuote}" </div>
      </div>

      <div className="profile-section">
        <h2 className="profile-section-title">Why We Remember Them</h2>
        {builder.whyWeRememberThem.map((p, i) => <p key={i}>{p}</p>)}
      </div>

      {story ? (
        <div className="profile-section">
          <h2 className="profile-section-title">The Full Story</h2>
          <p>{story.tag}</p>
          <Link href={story.href} className="profile-watch-btn">Read the Full Story →</Link>
        </div>
      ) : builder.episodeUrl ? (
        <div className="profile-section">
          <h2 className="profile-section-title">Watch Episode</h2>
          <p>{builder.season} · {builder.episode}</p>
          <a href={builder.episodeUrl} target="_blank" rel="noopener noreferrer" className="profile-watch-btn">Watch Episode →</a>
        </div>
      ) : null}

      <div className="profile-section">
        <ShareButton title={shareTitle} />
      </div>
      <div className="profile-footer-note">Part of the Before They Graduate Archive</div>
    </div>
  );
}