import Link from "next/link";
import Image from "next/image";
import builders from "@/data/builders";
import { getLatestEpisode, findBuilderByVideoId, extractVideoId, episodeNumber } from "@/lib/youtube";

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
  const latestEpisode = await getLatestEpisode();
  const matchedBuilder = latestEpisode ? findBuilderByVideoId(latestEpisode.videoId, builders) : null;

  // Season 2 list is derived from builders.js, not hardcoded — add a
  // builder with season: "Season 2" and it appears here automatically.
  const season2Builders = builders
    .filter((b) => b.season === "Season 2")
    .sort((a, b) => episodeNumber(a.episode) - episodeNumber(b.episode));

  // A new full episode with no builder profile yet shows as a real,
  // clickable pending card using its actual YouTube title/thumbnail,
  // rather than a hardcoded "Coming Soon" placeholder.
  const hasPendingEpisode = latestEpisode && !matchedBuilder;
  const pendingEpisodeNumber =
    Math.max(0, ...season2Builders.map((b) => episodeNumber(b.episode))) + 1;

  return (
    <>
      <div className="page-hero">
        <div className="page-title">
          Every <span>Episode.</span>
        </div>
        <p className="page-desc" style={{ marginTop: "1rem" }}>
          Final year students at FUTA, unscripted and honest, their campus experience on record before they graduate. Season 2 is live; Season 1's 12 conversations remain archived below.
        </p>
      </div>

      <div className="season-banner">
        <div className="banner-text">
          <strong>Season 2 is live.</strong> New episodes drop regularly. Nominations for
          future seasons are open to final year students from any Nigerian university.
        </div>
        <Link href="/submit" className="banner-action">
          Apply or Nominate →
        </Link>
      </div>

      <div className="section" style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 2.5rem 0" }}>
        <div className="sec-header">
          <div>
            <div className="sec-title">Season <span>Two</span></div>
            <div className="sec-sub">New conversations, new builders</div>
          </div>
        </div>
      </div>
      <div className="ep-grid" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem 3rem" }}>
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

        {hasPendingEpisode && (
          <EpisodeCard
            key="s2-pending"
            num={pendingEpisodeNumber.toString().padStart(2, "0")}
            title={latestEpisode.title}
            meta="Full profile coming soon"
            youtubeId={latestEpisode.videoId}
            thumbnailOverride={latestEpisode.thumbnail}
            seasonLabel="S2"
          />
        )}
      </div>

      <div className="section" style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem 2.5rem 0" }}>
        <div className="sec-header">
          <div>
            <div className="sec-title">Season One <span>· Archive</span></div>
            <div className="sec-sub">12 honest conversations with final year students</div>
          </div>
        </div>
      </div>
      <div className="ep-grid" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem 5rem" }}>
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
    </>
  );
}