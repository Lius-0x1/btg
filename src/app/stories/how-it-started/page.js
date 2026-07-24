import Link from "next/link";
import Image from "next/image";
import ShareButton from "@/components/ShareButtons";

export const metadata = {
  title: "How \"Before They Graduate\" Started | Before They Graduate",
  description: "The unplanned origin story of Before They Graduate how a single YouTube comment turned into a documentary series.",
};

const photoStyle = { width: "100%", maxHeight: "420px", objectFit: "cover", borderRadius: "12px", border: "1px solid var(--border)", marginBottom: "1.5rem" };
const galleryStyle = { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "2rem" };
const galleryItemStyle = { display: "flex", flexDirection: "column", gap: ".5rem" };
const galleryPhotoStyle = { width: "100%", aspectRatio: "1", objectFit: "cover", borderRadius: "10px", border: "1px solid var(--border)" };
const galleryCaptionStyle = { fontSize: ".78rem", color: "var(--muted2)", textAlign: "center" };
export default function HowItStartedPage() {
  return (
    <div className="profile-container">
      <Link href="/stories" className="profile-back-link">← Back to All Stories</Link>

      <div className="profile-hero">
        <Image src="/assets/stories/image.png" alt="Ayinde interviewing Akorede for the first episode" style={photoStyle} width={800} height={420} />
        <h1 className="profile-name" style={{ fontSize: "2.6rem" }}>How "Before They Graduate" Started</h1>
        <div className="profile-meta">Origin Story · By Ayinde · FUTA · October 2025</div>
        <div className="profile-quote-highlight">"No plan, no idea, no setup. I just picked up my mic and camera and started anyhow."</div>
      </div>

      <div className="profile-section">
        <h2 className="profile-section-title">The Story</h2>
        <p>Funny thing is, Before They Graduate wasn't even planned. It all started when Akorede, a 500-level student from my department, saw my YouTube video with my father. That day, he just dropped a comment telling me to stay strong, joking that I should come back and tell them what daddy had to say about being resilient.</p>
        <p>Gbam that was it. I replied immediately and told him that when I got back to school, he was going to share with us all the wahala FUTA had put him through since 100 level. At that moment, I honestly didn't mean anything serious. It was just random talk. But during their final year week, I remembered that chat and asked if he'd be available for a proper conversation. He said "no problem." That's how it happened.</p>
        <p>After that first one, I started messaging other final-year students, telling them I was working on a YouTube series and I'd love to have them on board. That's literally how Before They Graduate began. Unplanned. Unexpected. But it just felt right.</p>
      </div>

      <div className="profile-section">
        <h2 className="profile-section-title">Behind The Scenes</h2>
       <div className="profile-section">

        <div style={galleryStyle}>
          <div style={galleryItemStyle}>
            <Image src="/assets/stories/host.jpeg" alt="Ayinde, host and creator" style={galleryPhotoStyle} width={400} height={300} />
            <div style={galleryCaptionStyle}>Ayinde, host and creator</div>
          </div>
          <div style={galleryItemStyle}>
            <Image src="/assets/stories/akorede.jpeg" alt="Akorede, the first guest" style={galleryPhotoStyle} width={400} height={300} />
            <div style={galleryCaptionStyle}>Akorede, the first guest</div>
          </div>
          <div style={galleryItemStyle}>
            <Image src="/assets/stories/thoniee.jpeg" alt="Anthony, who shot the first episode" style={galleryPhotoStyle} width={400} height={300} />
            <div style={galleryCaptionStyle}>Anthony ("Thoniee"),the guy behind the camera</div>
          </div>
        </div>

        <div className="profile-card">Ayinde created the series after a single YouTube comment turned into a real conversation.</div>
        <div className="profile-card">Looking back, if Akorede had said no that first day, there's likely no Before They Graduate at all.</div>
        <div className="profile-card">Anthony ("Thoniee") shot the entire first episode on his own phone.</div>
        <div className="profile-card">Samson designed the graphics announcing the series for free.</div>
      </div>
      </div>

      <div className="profile-section">
        <h2 className="profile-section-title">Why It Matters</h2>
        <div className="profile-pull-quote">Sometimes you don't need a perfect plan. You just need a moment, a friend who believes in you, and a little faith to start.</div>
      </div>

      <div className="profile-section">
        <h2 className="profile-section-title">Watch Episode</h2>
        <p>Episode One · An Interview With My Father</p>
        <a href="https://youtu.be/6FoUBrzI4nw?si=e6fYPEWCtqb0-w38" target="_blank" rel="noopener noreferrer" className="profile-watch-btn">Watch Episode →</a>
      </div>

      <div className="profile-section">
        <h2 className="profile-section-title">Prefer Substack?</h2>
        <div className="profile-links">
          <a href="https://soburayinde.substack.com/p/how-before-they-graduate-started" target="_blank" rel="noopener noreferrer" className="profile-link-pill">Read on Substack (optional) →</a>
        </div>
      </div>

      <div className="profile-section">
        <ShareButton title={`Check out the origin story of Before They Graduate!`} />
      </div>

      <div className="profile-footer-note">Story 01 · The Archive · Before They Graduate</div>
    </div>
  );
}