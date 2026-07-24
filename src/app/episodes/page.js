import Link from "next/link";
import Image from "next/image";

const episodes = [
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
  description: "12 final year students at FUTA. Unscripted. Honest. Their campus experience on record before they left.",
};

export default function EpisodesPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-title">
          Season <span>One.</span>
          <br />
          12 Conversations.
        </div>
        <p className="page-desc" style={{ marginTop: "1rem" }}>
          12 final year students at FUTA. Unscripted. Honest. Their campus
          experience on record before they left.
        </p>
      </div>

      <div className="season-banner">
        <div className="banner-text">
          <strong>Season 2 is coming.</strong> Open to final year students
          from any Nigerian university. Applications are open now.
        </div>
        <Link href="/submit" className="banner-action">
          Apply for Season 2 →
        </Link>
      </div>

      <div
        className="ep-grid"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem 5rem" }}
      >
        {episodes.map((ep) => (
        <a
          key = { ep.youtubeId }
         className = "ep-card" 
            href = {`https://youtu.be/${ep.youtubeId}`}
          target="_blank"
            rel="noopener noreferrer"
         >
          
        <div className="ep-thumb">
          <Image
            src={`https://img.youtube.com/vi/${ep.youtubeId}/mqdefault.jpg`}
            alt={ep.title}
            fill
            style={{ objectFit: "cover" }}
          />
          <span className="ep-thumb-num">{ep.num}</span>
          <div className="ep-overlay"></div>
          <span className="ep-badge">S1·E{ep.num}</span>
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
        ))}
    </div >
    </>
  );
}