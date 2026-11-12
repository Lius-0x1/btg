import Link from "next/link";
import Image from "next/image";
import StopPropLink from "@/components/StopPropLink";
import builders from "@/data/builders";
import { getFullEpisodes, findBuilderByVideoId, extractVideoId, episodeNumber } from "@/lib/youtube";
import HeroCarousel from "@/components/HeroCarousel";
import stories from "@/data/stories";
import ContributorBanner from "@/components/ContributorBanner";

export default async function HomePage() {
  const fullEpisodes = await getFullEpisodes();
  const latestEpisode = fullEpisodes[0] || null;
  const matchedBuilder = latestEpisode ? findBuilderByVideoId(latestEpisode.videoId, builders) : null;

  // Hero fallback chain: matched builder > raw YouTube data > hardcoded last-known-good
  const heroVideoId = latestEpisode?.videoId || "hG-vauNujn0";
  const heroThumbnail = latestEpisode?.thumbnail || "https://img.youtube.com/vi/hG-vauNujn0/hqdefault.jpg";
  const heroTitle = matchedBuilder
    ? `${matchedBuilder.name} — ${matchedBuilder.season}, ${matchedBuilder.episode}`
    : latestEpisode?.title || "Oluwaferanmi Oladepo — Season 2, Episode 2";
  const heroMeta = matchedBuilder
    ? `${matchedBuilder.department} · FUTA · ${matchedBuilder.season === "Season 2" ? "2026" : "2025"}`
    : latestEpisode
    ? "Full profile coming soon"
    : "Software Engineer · Founder, Kaanta AI · FUTA · 2026";
  const heroPill = matchedBuilder
    ? `${matchedBuilder.season} · ${matchedBuilder.episode} · Latest`
    : latestEpisode
    ? "Latest Episode"
    : "Season 2 · Ep 02 · Latest";

    const latestStory = [...stories].reverse().find((s) => s.image);

const heroSlides = [
  {
    kind: "episode",
    image: heroThumbnail,
    imageAlt: "Latest Episode",
    pill: heroPill,
    title: heroTitle,
    meta: heroMeta,
    href: `https://youtu.be/${heroVideoId}`,
    unoptimized: true,
  },
  ...(latestStory
    ? [{
        kind: "story",
        image: latestStory.heroImage || latestStory.image,
        imageAlt: latestStory.imageAlt,
        pill: "Latest Story",
        title: latestStory.title,
        meta: latestStory.meta,
        href: latestStory.href,
        objectPosition: latestStory.heroImagePosition || "50% 20%",
      }]
    : []),
];
  // Season 2 grid: profiled builders come from builders.js.
  const season2Builders = builders
    .filter((b) => b.season === "Season 2")
    .sort((a, b) => episodeNumber(a.episode) - episodeNumber(b.episode));

  // EVERY recent full episode without a matching builder profile gets its
  // own pending card — not just the single newest one. This is the fix:
  // previously only the latest unmatched episode was tracked, so a second
  // one arriving would silently replace the first instead of joining it.
  const pendingEpisodes = fullEpisodes
    .filter((ep) => !findBuilderByVideoId(ep.videoId, builders))
    .sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)); // oldest-unprofiled first

  const lastKnownEpisodeNum = Math.max(0, ...season2Builders.map((b) => episodeNumber(b.episode)));

  const season2Preview = [
    ...season2Builders.map((b) => ({ key: b.slug, href: b.episodeUrl, videoId: extractVideoId(b.episodeUrl), name: b.name, department: b.department, number: episodeNumber(b.episode), pending: false })),
    ...pendingEpisodes.map((ep, idx) => ({ key: `pending-${ep.videoId}`, href: `https://youtu.be/${ep.videoId}`, videoId: ep.videoId, name: ep.title, department: "Full profile coming soon", number: lastKnownEpisodeNum + idx + 1, pending: true, thumbnail: ep.thumbnail })),
  ].sort((a, b) => b.number - a.number).slice(0, 3);
  const featuredBuilders = builders.filter((b) => b.image && b.name).slice(0, 4);
  const universityCount = new Set(builders.map((b) => b.university || b.school).filter(Boolean)).size;

  return (
    <>
      <div className="hero">
        <div className="hero-inner">
          <div>
            <div className="eyebrow hero-eyebrow-anim">Season 2 · New Episodes</div>
            <h1 className="hero-title hero-title-anim">
              What Are You <span className="accent">Building</span> Before You Graduate?
            </h1>
            <p className="hero-body hero-body-anim">
              A living archive of Nigerian undergraduates: their stories, projects, research, setbacks and breakthroughs — documented before graduation, preserved long after it.
            </p>
            <div className="hero-actions hero-actions-anim">
              <Link href="/episodes" className="btn-primary">Watch Episodes</Link>
              <Link href="/submit" className="btn-ghost">Share your story <span>→</span></Link>
            </div>
          </div>
          <HeroCarousel slides={heroSlides} />
        </div>
      </div>
       <ContributorBanner />
    
      <div className="stats-wrap">
        <div className="stats-inner">
          <div className="stat-item"><div className="stat-num">24</div><div className="stat-label">Stories archived</div></div>
          <div className="stat-item"><div className="stat-num">24</div><div className="stat-label">Builders featured</div></div>
          <div className="stat-item"><div className="stat-num">4</div><div className="stat-label">Universities represented</div></div>
          <div className="stat-item"><div className="stat-num">∞</div><div className="stat-label">Stories to Archive</div></div>
        </div>
      </div>

      <div className="section">
        <div className="sec-header">
          <div>
            <div className="sec-title">Season <span>Two</span></div>
            <div className="sec-sub">New conversations, new builders</div>
          </div>
          <Link href="/episodes" className="see-all">Explore all Season 2 →</Link>
        </div>
        <div className="ep-grid home-episode-grid">
          {season2Preview.map((ep) => (
            <a key={ep.key} className="ep-card home-episode-card" href={ep.href} target="_blank" rel="noopener noreferrer">
              <div className="ep-thumb">
                <Image src={ep.pending ? ep.thumbnail : `https://img.youtube.com/vi/${ep.videoId}/mqdefault.jpg`} alt={ep.name} fill unoptimized style={{ objectFit: "cover" }} />
                <span className="ep-thumb-num">{String(ep.number).padStart(2, "0")}</span>
                <div className="ep-overlay"></div>
                <span className="ep-badge">S2 · E{String(ep.number).padStart(2, "0")}</span>
                <div className="ep-play-btn"><div className="tri"></div></div>
              </div>
              <div className="ep-body">
                <div className="ep-num">SEASON 2 · EPISODE {String(ep.number).padStart(2, "0")}</div>
                <div className="ep-title">{ep.name}</div>
                <div className="ep-meta">{ep.department}</div>
              </div>
            </a>
          ))}
          {season2Preview.length === 0 && <div className="home-episodes-empty">New Season 2 conversations are being added to the archive.</div>}
        </div>
      </div>

      <div className="section">
        <div className="sec-header">
          <div>
            <div className="sec-title">Season One <span>· Archive</span></div>
            <div className="sec-sub">12 honest conversations with final year students</div>
          </div>
          <Link href="/episodes" className="see-all">All episodes →</Link>
        </div>
        <div className="ep-grid home-season-one-grid">
          <a className="ep-card" href="https://youtu.be/hX5kTs5MPtw" target="_blank" rel="noopener noreferrer">
            <div className="ep-thumb">
              <Image src="https://img.youtube.com/vi/hX5kTs5MPtw/mqdefault.jpg" alt="Ep 1" fill style={{ objectFit: "cover" }} />
              <span className="ep-thumb-num">01</span>
              <div className="ep-overlay"></div>
              <span className="ep-badge">S1·E01</span>
              <div className="ep-play-btn"><div className="tri"></div></div>
            </div>
            <div className="ep-body">
              <div className="ep-num">Episode 01</div>
              <div className="ep-title">Akorede Adebowale</div>
              <div className="ep-meta">Surveying & Geoinformatics · FUTA</div>
            </div>
          </a>
          <a className="ep-card" href="https://youtu.be/QXsDJCwBccI" target="_blank" rel="noopener noreferrer">
            <div className="ep-thumb">
              <Image src="https://img.youtube.com/vi/QXsDJCwBccI/mqdefault.jpg" alt="Ep 2" width={400} height={225} />
              <span className="ep-thumb-num">02</span>
              <div className="ep-overlay"></div>
              <span className="ep-badge">S1·E02</span>
              <div className="ep-play-btn"><div className="tri"></div></div>
            </div>
            <div className="ep-body">
              <div className="ep-num">Episode 02</div>
              <div className="ep-title">Awoleye Kolawole</div>
              <div className="ep-meta">Surveying & Geoinformatics · FUTA</div>
            </div>
          </a>
          <a className="ep-card" href="https://youtu.be/xL2eP8R0p_s" target="_blank" rel="noopener noreferrer">
            <div className="ep-thumb">
              <Image src="https://img.youtube.com/vi/xL2eP8R0p_s/mqdefault.jpg" alt="Ep 3" width={400} height={225} />
              <span className="ep-thumb-num">03</span>
              <div className="ep-overlay"></div>
              <span className="ep-badge">S1·E03</span>
              <div className="ep-play-btn"><div className="tri"></div></div>
            </div>
            <div className="ep-body">
              <div className="ep-num">Episode 03</div>
              <div className="ep-title">Jimoh Ibrahim</div>
              <div className="ep-meta">Surveying & Geoinformatics · FUTA</div>
            </div>
          </a>
        </div>
      </div>

      <section className="home-builders-section">
        <div className="home-section-topline">
          <span className="home-kicker">The people behind the work</span>
          <span className="home-section-index">01 / BUILDERS DIRECTORY</span>
        </div>
        <div className="home-builders-heading">
          <div><h2>Meet the <em>builders.</em></h2><p>Students doing meaningful work before graduation. Discover the people, their ideas and the paths they are creating.</p></div>
          <Link href="/builders" className="home-text-link">Explore all builders <span>↗</span></Link>
        </div>
        <div className="home-featured-builders">
          {featuredBuilders.map((b, index) => (
            <Link href={`/builders/${b.slug}`} className="home-builder-card" key={b.slug}>
              <div className="home-builder-image-wrap">
                <Image src={b.image} alt={b.name} fill sizes="(max-width: 700px) 50vw, 25vw" style={{ objectFit: "cover" }} />
                <span className="home-builder-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="home-builder-info"><span className="home-builder-dept">{b.department || "Student builder"}</span><h3>{b.name}</h3><span className="home-builder-school">{b.university || b.school || "Nigeria"}</span></div>
              <span className="home-builder-arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="sec-header">
          <div>
            <div className="sec-title">Story <span>Archive</span></div>
            <div className="sec-sub">Undergraduate experiences from Nigerian universities documented</div>
          </div>
          <Link href="/stories" className="see-all">All stories →</Link>
        </div>
        <div className="stories-grid">
          <Link href="/stories" className="story-card feat">
            <div className="story-tag">✦ Archive Mission</div>
            <div className="story-title">Every Nigerian undergraduate has a story worth preserving. This is where they live.</div>
            <div className="story-excerpt">The BTG Story Archive is open to any undergraduate from any Nigerian university. Submit your experience, your achievement, your journey we review and publish it here permanently.</div>
            <div className="story-byline">
              <div className="byline-av">BTG</div>
              <div className="byline-name">Before They Graduate · Nigeria</div>
            </div>
          </Link>
          <Link href="/submit" className="story-card">
            <div className="story-tag">Submit</div>
            <div className="story-title">Share your final year story with the archive</div>
            <div className="story-excerpt">Any Nigerian university. Any department. Any experience worth documenting.</div>
            <div className="story-byline">
              <div className="byline-av" style={{ background: "var(--muted)" }}>+</div>
              <div className="byline-name">Open submissions reviewed before publishing</div>
            </div>
          </Link>
          <Link href="/episodes" className="story-card">
            <div className="story-tag">Season 1 · FUTA</div>
            <div className="story-title">12 students. One campus. Their final year on record.</div>
            <div className="story-excerpt">Watch all 12 Season 1 episodes the starting point of the archive.</div>
            <div className="story-byline">
              <div className="byline-av">S1</div>
              <div className="byline-name">Federal University of Technology Akure · 2025</div>
            </div>
          </Link>
        </div>
      </div>

      <div className="section" style={{ paddingTop: 0 }}>
        <div className="sec-header">
          <div>
            <div className="sec-title">Project <span>Repository</span></div>
            <div className="sec-sub">Final year projects, startups, and student-built products preserved permanently</div>
          </div>
          <Link href="/projects" className="see-all">Full repository →</Link>
        </div>
        <div className="proj-grid">
          <Link href="/projects" className="proj-card featured">
            <span className="proj-type-badge type-startup">Startup</span>
            <div className="proj-title">Your startup or project could be featured here</div>
            <div className="proj-desc">The BTG Project Repository is open to any Nigerian undergraduate. Final year research, apps, startups, tools, initiatives if you built it during university, it belongs here.</div>
            <div className="proj-foot">
              <span className="proj-author">Open to all Nigerian universities</span>
              <StopPropLink href="/submit" className="proj-link">Submit yours →</StopPropLink>
            </div>
          </Link>
          <Link href="/projects" className="proj-card">
            <span className="proj-type-badge type-research">Research</span>
            <div className="proj-title">Final Year Research Repository</div>
            <div className="proj-desc">Most undergraduate final year projects are submitted, graded, and never seen again. BTG preserves them publicly linked, searchable, credited to their authors.</div>
            <div className="proj-foot"><span className="proj-author">Coming as submissions arrive</span></div>
          </Link>
          <Link href="/projects" className="proj-card">
            <span className="proj-type-badge type-app">App / Tool</span>
            <div className="proj-title">Student-Built Products</div>
            <div className="proj-desc">Apps, platforms, tools, and systems built by Nigerian undergraduates. From hackathon projects to deployed products all documented here.</div>
            <div className="proj-foot">
              <span className="proj-author">Submit your product</span>
              <StopPropLink href="/submit" className="proj-link">Add yours →</StopPropLink>
            </div>
          </Link>
        </div>
      </div>

      <div className="cta-band" style={{ paddingBottom: "5rem" }}>
        <div className="cta-inner">
          <div className="cta-title">Student? <em>Your Story Belongs in This Archive.</em></div>
          <div className="cta-actions">
            <Link href="/submit" className="btn-white">Submit Your Story or Project →</Link>
            <div className="cta-sub">Free. Open to all Nigerian universities. Reviewed before publishing.</div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-inner">
          <div>
            <Link href="/" className="footer-logo">Before They <span>Graduate</span></Link>
            <div className="footer-tagline">Archiving the stories, projects, and experiences of Nigerian undergraduate students before they graduate.</div>
          </div>
          <div>
            <div className="footer-col-title">Explore</div>
            <div className="footer-links">
              <Link href="/episodes">Episodes</Link>
              <Link href="/stories">Stories</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/builders">Builders</Link>
              <Link href="/about">About</Link>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Contribute</div>
            <div className="footer-links">
              <Link href="/submit">Submit a Story</Link>
              <Link href="/submit">Submit a Project</Link>
              <Link href="/submit">Apply for Season 2</Link>
              <Link href="/submit">Nominate a Student</Link>
              <Link href="/contributors">Become a Campus Contributor</Link>
            </div>
          </div>
          <div>
            <div className="footer-col-title">Follow</div>
            <div className="footer-links">
              <a href="https://youtube.com/@ayinde.thecreator?si=r-Muh2t-Mi5eUoz6" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="https://www.instagram.com/beforetheygraduate?igsh=MXZieXRoMjQ4Y3V6ZQ==" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.tiktok.com/@beforetheygraduate?_r=1&_t=ZS-97CZMLwwKpw" target="_blank" rel="noopener noreferrer">Tiktok</a>
              <a href="https://www.linkedin.com/company/beforetheygraduate/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Before They Graduate. All rights reserved.</span>
          <span>Built to preserve the stories that matter.</span>
        </div>
      </footer>
    </>
  );
}