import Link from "next/link";
import Image from "next/image";
import builders from "@/data/builders";
import { getFullEpisodes, findBuilderByVideoId, extractVideoId, episodeNumber } from "@/lib/youtube";

const season1Episodes = [
  { num: "01", title: "Akorede Adebowale", meta: "Surveying & Geoinformatics · FUTA", youtubeId: "hX5kTs5MPtw" },
  { num: "02", title: "Awoleye Kolawole", meta: "Surveying & Geoinformatics · FUTA", youtubeId: "QXsDJCwBccI" },
  { num: "03", title: "Jimoh Ibrahim", meta: "Surveying & Geoinformatics · FUTA", youtubeId: "xL2eP8R0p_s" },
  { num: "04", title: "Ajayi Johnson", meta: "Surveying & Geoinformatics · FUTA", youtubeId: "3oTj8fUZuQo" },
  { num: "05", title: "Sodiq Bashir", meta: "Information & Communication Engineering · FUTA", youtubeId: "3Lz3VOVyYzI" },
  { num: "06", title: "Adebayo Ilias", meta: "Surveying & Geoinformatics · FUTA", youtubeId: "HCTaoca1ZgM" },
  { num: "07", title: "Ajibi Mubarak", meta: "Surveying & Geoinformatics · FUTA", youtubeId: "UllDhkCmaqA" },
  { num: "08", title: "Alabi Eniibukunoluwa", meta: "Surveying & Geoinformatics · FUTA", youtubeId: "9oVQvBXUo_k" },
  { num: "09", title: "Eko Rejoice", meta: "Surveying & Geoinformatics · FUTA", youtubeId: "WmR6DCa3Oi8" },
  { num: "10", title: "Oluwasoromidayo Olayemi", meta: "Statistics · FUTA", youtubeId: "QRBbDRQJn4w" },
  { num: "11", title: "Grace Doyinsola Olasupo", meta: "Computer Engineering · FUTA", youtubeId: "9AxJjNKGcC0" },
  { num: "12", title: "Agbange Doobee", meta: "Surveying & Geoinformatics · FUTA", youtubeId: "6-ZZVUSMgmY" },
];

export const metadata = {
  title: "Episodes | Before They Graduate",
  description: "Final year students on record before they graduate. Season 2 is live, Season 1's 12 episodes remain archived here.",
};

function EpisodeCard({ num, title, meta, youtubeId, thumbnailOverride, seasonLabel }) {
  if (!youtubeId) {
    return (
      <div className="ep-card" style={{ opacity: 0.55, pointerEvents: "none", cursor: "default" }}>
        <div className="ep-thumb" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "var(--card)" }}>
          <span className="ep-thumb-num">{num}</span>
          <span className="ep-badge">{seasonLabel}·E{num}</span>
          <div style={{ fontSize: ".75rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".08em" }}>Coming Soon</div>
        </div>
        <div className="ep-body">
          <div className="ep-num">Episode {num}</div>
          <div className="ep-title">{title}</div>
          <div className="ep-meta">{meta}</div>
        </div>
      </div>
    );
  }

  const thumbSrc = thumbnailOverride || `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;

  return (
    <a className="ep-card" href={`https://youtu.be/${youtubeId}`} target="_blank" rel="noopener noreferrer">
      <div className="ep-thumb">
        <Image src={thumbSrc} alt={title} fill style={{ objectFit: "cover" }} unoptimized={!!thumbnailOverride} />
        <span className="ep-thumb-num">{num}</span>
        <div className="ep-overlay"></div>
        <span className="ep-badge">{seasonLabel}·E{num}</span>
        <div className="ep-play-btn">
          <div className="tri"></div>
        </div>
      </div>
      <div className="ep-body">
        <div className="ep-num">Episode {num}</div>
        <div className="ep-title">{title}</div>
        <div className="ep-meta">{meta}</div>
      </div>
    </a>
  );
}

export default async function EpisodesPage() {
  const fullEpisodes = await getFullEpisodes();

  const season2Builders = builders
    .filter((b) => b.season === "Season 2")
    .sort((a, b) => episodeNumber(a.episode) - episodeNumber(b.episode));

  // Every recent full episode without a matching builder profile gets its
  // own pending card — fixes the earlier bug where a second unprofiled
  // episode silently replaced the first instead of both showing.
  const pendingEpisodes = fullEpisodes
    .filter((ep) => !findBuilderByVideoId(ep.videoId, builders))
    .sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt));

  const lastKnownEpisodeNum = Math.max(0, ...season2Builders.map((b) => episodeNumber(b.episode)));

  return (
    <main className="collection-page episodes-page">
      <header className="collection-hero">
        <div className="collection-kicker"><span /> THE CONVERSATIONS</div>
        <div className="collection-hero-grid">
          <div>
            <h1>Voices worth <em>keeping.</em></h1>
            <p>Honest conversations with Nigerian undergraduates about the work, choices, setbacks and experiences shaping their lives before graduation.</p>
            <div className="collection-actions"><a href="#season-two">Watch the latest season ↓</a><Link href="/submit">Nominate a student ↗</Link></div>
          </div>
          <aside className="collection-count-card">
            <strong>{String(season1Episodes.length + season2Builders.length + pendingEpisodes.length).padStart(2, "0")}</strong>
            <span>EPISODES IN THE ARCHIVE</span>
            <div className="collection-count-rule" />
            <div className="collection-count-pair"><b>02</b><span>SEASONS DOCUMENTED</span></div>
            <small>Season One preserved. Season Two continues to grow.</small>
          </aside>
        </div>
      </header>

      <div className="season-banner season-banner-editorial">
        <div className="banner-text">
          <strong>Season 2 is live.</strong> New episodes drop regularly. Nominations for
          future seasons are open to final year students from any Nigerian university.
        </div>
        <Link href="/submit" className="banner-action">
          Apply or Nominate →
        </Link>
      </div>

      <section className="collection-main episode-season" id="season-two">
        <div className="sec-header">
          <div>
            <div className="sec-title">Season <span>Two</span></div>
            <div className="sec-sub">New conversations, new builders</div>
          </div>
        </div>
        <div className="ep-grid episode-grid-editorial">
          {season2Builders.map((b) => {
            const num = episodeNumber(b.episode).toString().padStart(2, "0");
            return (
              <EpisodeCard
                key={`s2-${b.slug}`}
                num={num}
                title={b.name}
                meta={b.department}
                youtubeId={extractVideoId(b.episodeUrl)}
                seasonLabel="S2"
              />
            );
          })}

          {pendingEpisodes.map((ep, idx) => (
            <EpisodeCard
              key={`pending-${ep.videoId}`}
              num={(lastKnownEpisodeNum + idx + 1).toString().padStart(2, "0")}
              title={ep.title}
              meta="Full profile coming soon"
              youtubeId={ep.videoId}
              thumbnailOverride={ep.thumbnail}
              seasonLabel="S2"
            />
          ))}
        </div>
      </section>

      <section className="collection-main episode-season episode-season-archive" id="season-one">
        <div className="sec-header">
          <div>
            <div className="sec-title">Season One <span>· Archive</span></div>
            <div className="sec-sub">12 honest conversations with final year students</div>
          </div>
        </div>
        <div className="ep-grid episode-grid-editorial">
          {season1Episodes.map((ep) => (
            <EpisodeCard
              key={`s1-${ep.num}`}
              num={ep.num}
              title={ep.title}
              meta={ep.meta}
              youtubeId={ep.youtubeId}
              seasonLabel="S1"
            />
          ))}
        </div>
      </section>
      <section className="collection-submit-band">
        <div><span>SEASON THREE STARTS WITH A STORY</span><h2>Know a voice<br/>we should hear?</h2></div>
        <Link href="/submit">Nominate a student <span>↗</span></Link>
      </section>
    </main>
  );
}