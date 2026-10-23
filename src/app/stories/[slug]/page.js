import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ShareButton from "@/components/ShareButtons";
import stories from "@/data/stories";

// Only interview-format stories are rendered here. The origin story keeps its
// own hand-built page at /stories/how-it-started, which takes precedence.
const interviewStories = stories.filter((s) => s.format === "interview");

export const dynamicParams = false;

export function generateStaticParams() {
  return interviewStories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const story = interviewStories.find((s) => s.slug === slug);
  if (!story) return {};
  return {
    title: `${story.title} | Before They Graduate`,
    description: story.excerpt,
  };
}

const labelStyle = {
  fontSize: ".68rem",
  textTransform: "uppercase",
  letterSpacing: ".1em",
  marginBottom: ".3rem",
};

export default async function StoryPage({ params }) {
  const { slug } = await params;
  const story = interviewStories.find((s) => s.slug === slug);
  if (!story) notFound();

  return (
    <div className="profile-container">
      <Link href="/stories" className="profile-back-link">← Back to All Stories</Link>

      <div className="profile-hero">
        <Image
          src={story.image}
          alt={story.imageAlt}
          width={1024}
          height={1280}
          priority
          style={{
            display: "block",
            width: "100%",
            maxWidth: "440px",
            height: "auto",
            margin: "0 auto 1.5rem",
            borderRadius: "12px",
            border: "1px solid var(--border)",
          }}
        />
        <h1 className="profile-name" style={{ fontSize: "2.2rem" }}>{story.title}</h1>
        <div className="profile-meta">{story.subtitle}</div>
        <div className="profile-quote-highlight">"{story.heroQuote}"</div>
      </div>

      <div className="profile-section">
        {story.intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="profile-section">
        {story.qa.map((item, i) => (
          <div key={i} style={{ marginBottom: "2.25rem" }}>
            {item.pull && <div className="profile-pull-quote">{item.pull}</div>}
            {item.heading && <h2 className="profile-section-title">{item.heading}</h2>}

            <div style={{ ...labelStyle, color: "var(--orange)" }}>BTG</div>
            <p style={{ fontWeight: 500, marginTop: 0 }}>{item.q}</p>

            <div style={{ ...labelStyle, color: "var(--muted)", marginTop: "1.1rem" }}>Temitope</div>
            {item.a.map((line, j) => (
              <p key={j} style={{ marginTop: 0 }}>{line}</p>
            ))}

            {item.reaction && (
              <p style={{ fontStyle: "italic", color: "var(--muted2)" }}>{item.reaction}</p>
            )}
            {item.reply && (
              <p style={{ marginTop: 0 }}>{item.reply}</p>
            )}
          </div>
        ))}
      </div>

      <div className="profile-section">
        <h2 className="profile-section-title">{story.takeawaysHeading}</h2>
        {story.takeaways.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {story.takeawaysPull && <div className="profile-pull-quote">{story.takeawaysPull}</div>}
        {story.outro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {story.builderSlug && (
        <div className="profile-section">
          <h2 className="profile-section-title">Her Profile</h2>
          <div className="profile-links">
            <Link href={`/builders/${story.builderSlug}`} className="profile-link-pill">
              View her BTG profile →
            </Link>
          </div>
        </div>
      )}

      <div className="profile-section">
        <ShareButton title={story.shareText} />
      </div>

      <div className="profile-footer-note">{story.footerNote}</div>
    </div>
  );
}