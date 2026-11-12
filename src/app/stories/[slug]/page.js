import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ShareButton from "@/components/ShareButtons";
import stories from "@/data/stories";
import contributors from "@/data/contributors";
import { StoryVideo } from "@/components/StoryVideo";


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

  const imageUrl = story.image.startsWith("http")
    ? story.image
    : `https://beforetheygraduate.app${story.image}`;

  return {
    title: story.title,
    description: story.excerpt,

    alternates: {
      canonical: `https://beforetheygraduate.app/stories/${slug}`,
    },

    openGraph: {
     title: story.title,
      description: story.excerpt,
      url: `https://beforetheygraduate.app/stories/${slug}`,
      siteName: "Before They Graduate",
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: story.imageAlt || story.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${story.title} | Before They Graduate`,
      description: story.excerpt,
      images: [imageUrl],
    },
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

  const contributor = contributors.find(
  (c) => c.slug === story.contributorSlug
);

const contributorStoryCount = contributor
  ? stories.filter(
      (s) => s.contributorSlug === contributor.slug
    ).length
  : 0;

  const storyUrl = `https://beforetheygraduate.app/stories/${slug}`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: story.title,
  description: story.excerpt,
  image: story.image.startsWith("http")
    ? story.image
    : `https://beforetheygraduate.app${story.image}`,
  url: storyUrl,
  inLanguage: "en-NG",
  publisher: {
    "@type": "Organization",
    name: "Before They Graduate",
    url: "https://beforetheygraduate.app",
  },
};

  return (
    <main className="story-article-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="story-article-topline">
        <Link href="/stories" className="story-article-back">← The archive</Link>
        <span>BEFORE THEY GRADUATE <i> / </i> STORY {story.number}</span>
      </div>

      <header className="story-article-hero">
        <div className="story-article-heading">
          <div className="story-article-kicker">{story.tag || "BTG FULL INTERVIEW"}</div>
          <h1>{story.title}</h1>
          {story.subtitle && <p className="story-article-subtitle">{story.subtitle}</p>}
          <div className="story-article-byline"><span>{story.meta}</span><span>·</span><span>AN UNDERGRADUATE STORY</span></div>
          <blockquote className="story-article-quote">“{story.heroQuote}”</blockquote>
        </div>
        <div className="story-article-image-wrap">
          <Image src={story.image} alt={story.imageAlt} width={1024} height={1280} priority className="story-article-image" />
          <span className="story-article-image-caption">{story.imageAlt}</span>
        </div>
      </header>

      <div className="story-reading-layout">
        <aside className="story-chapter-nav" aria-label="In this conversation">
          <span className="story-chapter-nav-label">IN THIS STORY</span>
          <a href="#conversation-intro">The conversation</a>
          {story.qa.map((item, i) => item.heading ? (
            <a key={i} href={`#story-section-${i}`}>{item.heading}</a>
          ) : null)}
          <a href="#story-reflection">{story.takeawaysHeading || "A final reflection"}</a>
        </aside>

        <article className="story-article-body">
          <div className="story-article-intro" id="conversation-intro">
            <span className="story-article-body-label">THE CONVERSATION</span>
            {story.intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          {story.video?.youtubeId && (
            <div className="story-featured-video">
              <StoryVideo youtubeId={story.video.youtubeId} title={story.title} />
            </div>
          )}

          <div className="story-article-interview">
            {story.qa.map((item, i) => (
              <section className="story-conversation-block" id={`story-section-${i}`} key={i}>
                {item.heading && <h2 className="profile-section-title story-chapter-heading">{item.heading}</h2>}
                {item.pull && <blockquote className="profile-pull-quote story-pull-quote">{item.pull}</blockquote>}

                <div className="story-question">
                  <div className="story-speaker-label story-interviewer-label">{story.interviewer || "BTG ASKS"}</div>
                  <p className="story-question-text">{item.q}</p>
                </div>

                <div className="story-answer">
                  <div className="story-speaker-label">{story.interviewee || "THE BUILDER"}</div>
                  {item.a.map((line, j) => <p key={j}>{line}</p>)}
                </div>

                {item.video?.youtubeId && (
                  <StoryVideo youtubeId={item.video.youtubeId} title={item.video.title || story.title} />
                )}

                {item.reaction && (
                  <aside className="story-editorial-note">
                    <span>BTG NOTE</span>
                    <p>{item.reaction}</p>
                  </aside>
                )}
                {item.reply && <p className="story-follow-up">{item.reply}</p>}
              </section>
            ))}
          </div>

          <section className="story-article-takeaways" id="story-reflection">
            <span className="story-article-body-label">BEYOND THE CONVERSATION</span>
            <h2 className="profile-section-title">{story.takeawaysHeading}</h2>
            {story.takeaways.map((p, i) => <p key={i}>{p}</p>)}
            {story.takeawaysPull && <blockquote className="profile-pull-quote story-pull-quote">{story.takeawaysPull}</blockquote>}
            {story.outro.map((p, i) => <p key={i}>{p}</p>)}
          </section>
        </article>
      </div>
        {story.builderSlug && (
        <div className="profile-section story-article-related">
          <h2 className="profile-section-title">Builder's Profile</h2>
          <div className="profile-links">
            <Link href={`/builders/${story.builderSlug}`} className="profile-link-pill">
              View Builder Profile →
            </Link>
          </div>
        </div>
      )}

      <div className="profile-section story-article-share">
        <ShareButton title={story.shareText} />
      </div>
      
      {story.contributorSlug && (() => {
  const contributor = contributors.find(
    (c) => c.slug === story.contributorSlug
  );

  if (!contributor) return null;

  const storyCount = stories.filter(
    (s) => s.contributorSlug === contributor.slug
  ).length;

  return (
    <div className="profile-section story-credits">
      <div className="story-contributor-card">
        <div className="story-contributor-heading">
          STORY CONTRIBUTOR
        </div>

        <div className="story-contributor-info">
          {contributor.image && (
            <Image
              src={contributor.image}
              alt={contributor.name}
              width={64}
              height={64}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
          )}

          <div>
            <h3>{contributor.name}</h3>
            <p>{contributor.university}</p>

            {contributor.teamRole && (
              <p>{contributor.teamRole}</p>
            )}

            {contributor.handle && contributor.socialUrl && (
              <a
                href={contributor.socialUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {contributor.handle}
              </a>
            )}
          </div>
        </div>

        <div className="story-contributor-count">
          {storyCount} {storyCount === 1 ? "Story" : "Stories"} contributed to BTG
        </div>
      </div>
    </div>
  );
})()}

      <div className="profile-footer-note">{story.footerNote}</div>
    </main>
  );
}
