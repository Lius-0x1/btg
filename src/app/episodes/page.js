import Link from "next/link";
import Image from "next/image";

const season2Episodes = [
  { num: "01", title: "Similoluwa Taiwo", meta: "Architecture · FUTA", youtubeId: "PEIC6GcqwCo" },
  { num: "02", title: "Oluwaferanmi Oladepo", meta: "Software Engineer · Founder, Kaanta AI · FUTA", youtubeId: "hG-vauNujn0" },
  { num: "03", title: "Coming Soon", meta: "Stay tuned", youtubeId: null },
];

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

function EpisodeCard({ ep, seasonLabel }) {
  if (!ep.youtubeId) {
    return (
      <div className="ep-card" style={{ opacity: 0.55, pointerEvents: "none", cursor: "default" }}>
        <div className="ep-thumb" style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "var(--card)" }}>
          <span className="ep-thumb-num">{ep.num}</span>
          <span className="ep-badge">{seasonLabel}·E{ep.num}</span>
          <div style={{ fontSize: ".75rem", color: "var(--muted)", textTransform: "uppercase", letterSpacing: ".08em" }}>Coming Soon</div>
        </div>
        <div className="ep-body">
          <div className="ep-num">Episode {ep.num}</div>
          <div className="ep-title">{ep.title}</div>
          <div className="ep-meta">{ep.meta}</div>
        </div>
      </div>
    );
  }

  return (
    <a className="ep-card" href={`https://youtu.be/${ep.youtubeId}`} target="_blank" rel="noopener noreferrer">
      <div className="ep-thumb">
        <Image
          src={`https://img.youtube.com/vi/${ep.youtubeId}/mqdefault.jpg`}
          alt={ep.title}
          fill
          style={{ objectFit: "cover" }}
        />
        <span className="ep-thumb-num">{ep.num}</span>
        <div className="ep-overlay"></div>
        <span className="ep-badge">{seasonLabel}·E{ep.num}</span>
        <div className="ep-play-btn">
          <div className="tri"></div>
        </div>
      </div>
      <div className="ep-body">
        <div className="ep-num">Episode {ep.num}</div>
        <div className="ep-title">{ep.title}</div>
        <div className="ep-meta">{ep.meta}</div>
      </div>
    </a>
  );
}

export default function EpisodesPage() {
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
          <strong>Season 2 is live.</strong> Episode 3 drops soon. Nominations for future
          seasons are open to final year students from any Nigerian university.
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
        {season2Episodes.map((ep) => (
          <EpisodeCard key={`s2-${ep.num}`} ep={ep} seasonLabel="S2" />
        ))}
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
          <EpisodeCard key={`s1-${ep.num}`} ep={ep} seasonLabel="S1" />
        ))}
      </div>
    </>
  );
}