import ShareButton from "./ShareButtons";
import Image from "next/image";
import Link from "next/link";
export default function BuilderProfile({ builder }) {
  return (
    <div className="profile-container">
      <Link href="/builders" className="profile-back-link">← Back to The Founding 12</Link>

      <div className="profile-hero">
        <Image src={builder.image} alt={builder.name} width={120} height={120} className="profile-photo" />
        <h1 className="profile-name">{builder.name}</h1>
        <div className="profile-meta">{builder.department} · {builder.university} · {builder.season} {builder.episode}</div>
        <div className="profile-quote-highlight"> "{builder.quote}" </div>
      </div>

      <div className="profile-section">
        <ShareButton title={`Check out ${builder.name}'s profile on The Founding 12 Archive!`} />
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

      <div className="profile-section">
        <h2 className="profile-section-title">Watch Episode</h2>
        <p>{builder.season} · {builder.episode}</p>
        <a href={builder.episodeUrl} target="_blank" rel="noopener noreferrer" className="profile-watch-btn">Watch Episode →</a>
      </div>
      <div className="profile-section">
        <ShareButton title={`Check out ${builder.name}'s profile on The Founding 12 Archive!`} />
      </div>
      <div className="profile-footer-note">Part of The Founding 12 Archive · Before They Graduate</div>
    </div>
  );
}