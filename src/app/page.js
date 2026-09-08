import Link from "next/link";
import Image from "next/image";
import StopPropLink from "@/components/StopPropLink";

export default function HomePage() {
  return (
    <>
      <div className="hero">
        <div className="hero-inner">
          <div>
            <div className="eyebrow hero-eyebrow-anim">Season 2 · Episode 3 Coming Soon</div>
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
              <Image src="https://img.youtube.com/vi/hG-vauNujn0/hqdefault.jpg" alt="Latest Episode" width={400} height={225} />
              <div className="hero-thumb-overlay"></div>
              <span className="ep-pill">Season 2 · Ep 02 · Latest</span>
              <a className="play-ring" href="https://youtu.be/hG-vauNujn0" target="_blank" rel="noopener noreferrer">
                <div className="play-icon"></div>
              </a>
            </div>
            <div className="hero-card-body">
              <div className="hero-card-title">Oluwaferanmi Oladepo Season 2, Episode 2</div>
              <div className="hero-card-meta">Software Engineer · Founder, Kaanta AI · FUTA · 2026</div>
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
            <div className="sec-sub">New conversations, new builders. Episode 3 coming soon.</div>
          </div>
          <Link href="/episodes" className="see-all">All episodes →</Link>
        </div>
        <div className="ep-grid">
          <a className="ep-card" href="https://youtu.be/PEIC6GcqwCo" target="_blank" rel="noopener noreferrer">
            <div className="ep-thumb">
              <Image src="https://img.youtube.com/vi/PEIC6GcqwCo/mqdefault.jpg" alt="S2 Ep 1" fill style={{ objectFit: "cover" }} />
              <span className="ep-thumb-num">01</span>
              <div className="ep-overlay"></div>
              <span className="ep-badge">S2·E01</span>
              <div className="ep-play-btn"><div className="tri"></div></div>
            </div>
            <div className="ep-body">
              <div className="ep-num">Episode 01</div>
              <div className="ep-title">Similoluwa Taiwo</div>
              <div className="ep-meta">Architecture · FUTA</div>
            </div>
          </a>
          <a className="ep-card" href="https://youtu.be/hG-vauNujn0" target="_blank" rel="noopener noreferrer">
            <div className="ep-thumb">
              <Image src="https://img.youtube.com/vi/hG-vauNujn0/mqdefault.jpg" alt="S2 Ep 2" width={400} height={225} />
              <span className="ep-thumb-num">02</span>
              <div className="ep-overlay"></div>
              <span className="ep-badge">S2·E02</span>
              <div className="ep-play-btn"><div className="tri"></div></div>
            </div>
            <div className="ep-body">
              <div className="ep-num">Episode 02</div>
              <div className="ep-title">Oluwaferanmi Oladepo</div>
              <div className="ep-meta">Software Engineer · Founder, Kaanta AI</div>
            </div>
          </a>
          <div className="ep-card" style={{ opacity: 0.55, pointerEvents: "none", cursor: "default" }}>
            <div className="ep-thumb" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "var(--card)" }}>
              <span className="ep-thumb-num">03</span>
              <span className="ep-badge">S2·E03</span>
              <div style={{ fontSize: ".75rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".08em" }}>Coming Soon</div>
            </div>
            <div className="ep-body">
              <div className="ep-num">Episode 03</div>
              <div className="ep-title">Coming Soon</div>
              <div className="ep-meta">Stay tuned</div>
            </div>
          </div>
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