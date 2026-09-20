import Link from "next/link";
import Image from "next/image";
import StopPropLink from "@/components/StopPropLink";
import builders from "@/data/builders";
import { getLatestEpisode, findBuilderByVideoId, extractVideoId, episodeNumber } from "@/lib/youtube";

export default async function HomePage() {
  const latestEpisode = await getLatestEpisode();
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

  // Season 2 grid: derived from builders.js, not hardcoded JSX. Add a
  // builder with season: "Season 2" and this grid picks them up automatically.
  const season2Builders = builders
    .filter((b) => b.season === "Season 2")
    .sort((a, b) => episodeNumber(a.episode) - episodeNumber(b.episode));

  // If the latest full episode fetched from YouTube isn't in builders.js yet,
  // show it as a real, clickable "pending" card with its actual title and
  // thumbnail — instead of a generic hardcoded "Coming Soon" placeholder.
  const hasPendingEpisode = latestEpisode && !matchedBuilder;
  const pendingEpisodeNumber =
    Math.max(0, ...season2Builders.map((b) => episodeNumber(b.episode))) + 1;

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
              Real stories from Nigerian undergraduate students their experiences, their projects, their research, and everything they created before graduation. An archive built to last.
            </p>
            <div className="hero-actions hero-actions-anim">
              <Link href="/episodes" className="btn-primary">Watch Episodes</Link>
              <Link href="/submit" className="btn-ghost">Share your story <span>→</span></Link>
            </div>
          </div>
          <div className="hero-card">
            <div className="hero-thumb">
              <Image src={heroThumbnail} alt="Latest Episode" width={400} height={225} unoptimized />
              <div className="hero-thumb-overlay"></div>
              <span className="ep-pill">{heroPill}</span>
              <a className="play-ring" href={`https://youtu.be/${heroVideoId}`} target="_blank" rel="noopener noreferrer">
                <div className="play-icon"></div>
              </a>
            </div>
            <div className="hero-card-body">
              <div className="hero-card-title">{heroTitle}</div>
              <div className="hero-card-meta">{heroMeta}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-wrap">
        <div className="stats-inner">
          <div className="stat-item"><div className="stat-num">14</div><div className="stat-label">Episodes</div></div>
          <div className="stat-item"><div className="stat-num">14</div><div className="stat-label">Students Featured</div></div>
          <div className="stat-item"><div className="stat-num">1</div><div className="stat-label">University So Far</div></div>
          <div className="stat-item"><div className="stat-num">∞</div><div className="stat-label">Stories to Archive</div></div>
        </div>
      </div>

      <div className="section">
        <div className="sec-header">
          <div>
            <div className="sec-title">Season <span>Two</span></div>
            <div className="sec-sub">New conversations, new builders</div>
          </div>
          <Link href="/episodes" className="see-all">All episodes →</Link>
        </div>
        <div className="ep-grid">
          {season2Builders.map((b) => {
            const videoId = extractVideoId(b.episodeUrl);
            const num = episodeNumber(b.episode).toString().padStart(2, "0");
            return (
              <a key={b.slug} className="ep-card" href={b.episodeUrl} target="_blank" rel="noopener noreferrer">
                <div className="ep-thumb">
                  <Image src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`} alt={b.name} fill style={{ objectFit: "cover" }} />
                  <span className="ep-thumb-num">{num}</span>
                  <div className="ep-overlay"></div>
                  <span className="ep-badge">S2·E{num}</span>
                  <div className="ep-play-btn"><div className="tri"></div></div>
                </div>
                <div className="ep-body">
                  <div className="ep-num">Episode {num}</div>
                  <div className="ep-title">{b.name}</div>
                  <div className="ep-meta">{b.department}</div>
                </div>
              </a>
            );
          })}

          {hasPendingEpisode && (
            <a className="ep-card" href={`https://youtu.be/${latestEpisode.videoId}`} target="_blank" rel="noopener noreferrer">
              <div className="ep-thumb">
                <Image src={latestEpisode.thumbnail} alt={latestEpisode.title} fill style={{ objectFit: "cover" }} unoptimized />
                <span className="ep-thumb-num">{pendingEpisodeNumber.toString().padStart(2, "0")}</span>
                <div className="ep-overlay"></div>
                <span className="ep-badge">S2·E{pendingEpisodeNumber.toString().padStart(2, "0")}</span>
                <div className="ep-play-btn"><div className="tri"></div></div>
              </div>
              <div className="ep-body">
                <div className="ep-num">Episode {pendingEpisodeNumber}</div>
                <div className="ep-title">{latestEpisode.title}</div>
                <div className="ep-meta">Full profile coming soon</div>
              </div>
            </a>
          )}
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
        <div className="ep-grid">
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