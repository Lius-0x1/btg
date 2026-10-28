import Link from "next/link";
import Image from "next/image";
import contributors from "@/data/contributors";
import COHORT from "@/data/cohort";

export const metadata = {
  title: "Campus Contributors | Before They Graduate",
  description:
    "Contributor for Each campus. Text first. Video when the story earns it. Become a BTG Campus Contributor and put your university on the record.",
};

const WHAT_THIS_IS = [
  "Before They Graduate documents the stories, projects, and journeys of Nigerian undergraduates before they graduate. Every story that goes into the archive has to be found, verified, and written by someone who is actually on that campus. That someone is you.",
  "A BTG Campus Contributor is a student reporter. You find the stories at your university, interview the people behind them, and write them up for the archive.",
  "You are not submitting your own story. You are the person who makes sure your campus is on the record. This is an unpaid role. It is also a real one: your work gets published, credited, and kept.",
];

const STEPS = [
  { title: "Find stories.", body: "Keep your ears open on campus. A final year student or any student building something. A research project nobody outside the department will ever see. Someone with a journey worth writing down. You bring the story, not the other way round." },
  { title: "Pitch it to us.", body: "Short pitch: who they are, what they're doing, why it belongs in the archive. Two paragraphs. We approve it or send it back." },
  { title: "Interview and write.", body: "You sit with the person, ask the questions, and write the story. You work from the BTG story template so every piece in the archive reads as one body of work, not twelve different blogs." },
  { title: "Send photos and links.", body: "Where it applies: their project, their work, a photo of them. Real material, not stock." },
  { title: "Host us when we come.", body: "If your story is strong enough for video, we travel to your campus. You introduce us to the subject, brief us on the ground, and sit in on the shoot. You already know the story better than we do." },
  { title: "Do it again.", body: "One story is a contribution. Three or four across a semester is a body of work with your name on it." },
];

const BENEFITS = [
  { title: "A permanent, linkable record.", body: "Your name on every piece you write, on a page that stays up. Something to point at from a CV, a scholarship application, or a portfolio." },
  { title: "A credential.", body: "BTG Campus Contributor, Cohort 1. Named, dated, verifiable." },
  { title: "Published work.", body: "Not an internship where you fetch coffee. Real bylines on real stories, edited and live." },
  { title: "Video credit.", body: "If your story becomes an episode, you're credited and you're part of it." },
  { title: "First refusal on what comes next.", body: "Priority for future cohorts, paid work as the archive grows, and first access to any partnership or opportunity that comes through BTG." },
  { title: "A network.", body: "Other contributors across Nigerian universities, doing the same work you are. Plus everyone you interview, which is often the more useful list." },
];

const EXPECTATIONS = [
  { lead: "Writing that holds up.", body: "This is the real filter. You'll be writing, not just reporting." },
  { lead: "Reliability.", body: "A pitched story means a deadline. If something falls through, say so early." },
  { lead: "Accuracy.", body: "Names, departments, claims, quotes. If you can't verify it, it doesn't go in." },
  { lead: "A few hours a week.", body: "Roughly one story every three to four weeks, plus the interview time. It fits alongside a normal course load." },
  { lead: "Honesty about what you don't know.", body: "Better a gap than an invention." },
];

const LOOKING_FOR_INTRO =
  "Any Nigerian undergraduate, any university, any department, any year. You do not need to be a journalism student. You do need to write clearly and care about getting it right. Strong applicants usually have at least one of these:";

const LOOKING_FOR = [
  "You already write, somewhere. A blog, a newsletter, student press, a page nobody reads yet.",
  "You know your campus well enough to hear about things before they're public.",
  "You're curious about people and ask follow-up questions instead of accepting the first answer.",
  "You finish things. You do not need previous bylines, a big following, or a media background.",
];

const NOT_THIS = [
  { lead: "Not a fellowship.", body: "There is no stipend. We are being straight with you about that because the value here is the record, not the money." },
  { lead: "Not your own story.", body: "If you want BTG to document you, submit your story through the archive like everyone else. This role is for documenting other people.", link: { href: "/submit", label: "Submit a story instead →" } },
  { lead: "Not a full-time commitment.", body: "It is a role you can hold alongside your degree." },
  { lead: "Not a guarantee of a video episode.", body: "Video goes to the strongest stories. Every approved story gets archived in text." },
];

const HOW_IT_WORKS = [
  { lead: "Cohort model.", body: "Contributors join in cohorts, twice a year. Applications open, close, and we select." },
  { lead: "One contributor per campus.", body: "Your university, your patch." },
  { lead: "Text first.", body: "Everything approved gets published as a written story. Video is the tier above." },
  { lead: "We edit.", body: "You write, we shape it with you before it goes live. Your byline stays on it." },
  { lead: "You can leave.", body: "Finish a semester, hand over to someone else, come back later. The role is designed to pass on." },
];

const APPLY_ASKS = [
  "Your university, department, and year.",
  "A short pitch for a story on your campus you'd want to write first.",
  "A writing sample. This matters more than anything else on the form.",
];

const cardStyle = {
  background: "var(--card)",
  border: "1px solid var(--border)",
  borderRadius: "8px",
  padding: "1.4rem",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "1rem",
};

const bodyText = { color: "var(--muted2)", fontWeight: 300, lineHeight: 1.7, fontSize: ".9rem" };
const blockGap = { marginTop: "3.5rem" };

function Heading({ children, sub }) {
  return (
    <div style={{ marginBottom: "1.5rem" }}>
      <div className="sec-title">{children}</div>
      {sub && <div className="sec-sub">{sub}</div>}
    </div>
  );
}

function LeadList({ items }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: ".9rem" }}>
      {items.map((item) => (
        <li key={item.lead} style={{ ...bodyText, paddingLeft: "1rem", borderLeft: "2px solid var(--orange)" }}>
          <strong style={{ color: "var(--text)", fontWeight: 500 }}>{item.lead}</strong> {item.body}
          {item.link && (
            <>
              {" "}
              <Link href={item.link.href} style={{ color: "var(--orange)", fontSize: ".78rem" }}>
                {item.link.label}
              </Link>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");
}

export default function ContributorsPage() {
  const applicationsOpen = Boolean(COHORT.applyUrl);

  return (
    <>
      <div className="page-hero">
        <div className="eyebrow">Campus Correspondent Programme</div>
        <div className="page-title">
          Become a <span>Campus Contributor.</span>
        </div>
        <p className="page-desc" style={{ marginTop: "1rem" }}>
          Contributor for Each campus. Text first. Video when the story earns it.
        </p>
      </div>

      <div className="season-banner">
        <div className="banner-text">
          {applicationsOpen ? (
            <>
              <strong>{COHORT.name} applications are open.</strong>
              {COHORT.closes ? ` Applications close ${COHORT.closes}.` : ""}
            </>
          ) : (
            <>
              <strong>{COHORT.name} applications open soon.</strong>
              {COHORT.opens ? ` Applications open ${COHORT.opens}.` : " Check back here for the date."}
            </>
          )}
        </div>
        {applicationsOpen && (
          <a href={COHORT.applyUrl} target="_blank" rel="noopener noreferrer" className="banner-action">
            Apply Now →
          </a>
        )}
      </div>

      <div className="section" style={{ paddingTop: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
        {contributors.length > 0 && (
          <div style={{ marginBottom: "3.5rem" }}>
            <Heading sub="The students putting their campuses on the record">
              Our <span>Contributors</span>
            </Heading>
            <div style={gridStyle}>
              {contributors.map((c) => (
                <div key={c.slug} style={{ ...cardStyle, display: "flex", alignItems: "center", gap: "1rem" }}>
                  {c.image ? (
                    <Image src={c.image} alt={c.name} width={56} height={56} style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
                  ) : (
                    <div
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background: "var(--off)",
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--orange)",
                        flexShrink: 0,
                      }}
                    >
                      {initials(c.name)}
                    </div>
                  )}
                  <div>
                    <div style={{ color: "var(--text)", fontWeight: 500 }}>{c.name}</div>
                    <div style={{ ...bodyText, fontSize: ".8rem", lineHeight: 1.4 }}>
                      {c.university}
                      {c.department ? ` · ${c.department}` : ""}
                    </div>
                    <div style={{ color: "var(--orange)", fontSize: ".7rem", textTransform: "uppercase", letterSpacing: ".08em", marginTop: ".25rem" }}>
                      {c.cohort || COHORT.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <Heading>
            What this <span>is</span>
          </Heading>
          <div style={{ maxWidth: "820px", display: "grid", gap: "1rem" }}>
            {WHAT_THIS_IS.map((p, i) => (
              <p key={i} style={{ ...bodyText, margin: 0, fontSize: "1rem" }}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <div style={blockGap}>
          <Heading>
            What you <span>actually do</span>
          </Heading>
          <div style={gridStyle}>
            {STEPS.map((s, i) => (
              <div key={s.title} style={cardStyle}>
                <div style={{ fontFamily: "var(--display)", fontSize: "1.8rem", color: "var(--orange)", marginBottom: ".4rem" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div style={{ color: "var(--text)", fontWeight: 500, marginBottom: ".4rem" }}>{s.title}</div>
                <div style={bodyText}>{s.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={blockGap}>
          <Heading>
            What you <span>get</span>
          </Heading>
          <div style={gridStyle}>
            {BENEFITS.map((b) => (
              <div key={b.title} style={cardStyle}>
                <div style={{ color: "var(--text)", fontWeight: 500, marginBottom: ".4rem" }}>{b.title}</div>
                <div style={bodyText}>{b.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ ...blockGap, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
          <div>
            <Heading>
              What we <span>expect</span>
            </Heading>
            <LeadList items={EXPECTATIONS} />
          </div>
          <div>
            <Heading>
              Who we're <span>looking for</span>
            </Heading>
            <p style={{ ...bodyText, marginTop: 0 }}>{LOOKING_FOR_INTRO}</p>
            <ul style={{ ...bodyText, paddingLeft: "1.2rem", display: "grid", gap: ".6rem" }}>
              {LOOKING_FOR.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div style={blockGap}>
          <Heading>
            What this is <span>not</span>
          </Heading>
          <div style={{ maxWidth: "820px" }}>
            <LeadList items={NOT_THIS} />
          </div>
        </div>

        <div style={blockGap}>
          <Heading>
            How it <span>works</span>
          </Heading>
          <div style={{ maxWidth: "820px" }}>
            <LeadList items={HOW_IT_WORKS} />
          </div>
        </div>

        <div style={{ ...blockGap, paddingBottom: "5rem" }}>
          <Heading>
            How to <span>apply</span>
          </Heading>
          <div style={{ ...cardStyle, maxWidth: "820px" }}>
            <p style={{ ...bodyText, marginTop: 0 }}>
              Applications for {COHORT.name} {COHORT.opens ? `open ${COHORT.opens}` : "open soon"}. You'll be asked for:
            </p>
            <ul style={{ ...bodyText, paddingLeft: "1.2rem", display: "grid", gap: ".6rem" }}>
              {APPLY_ASKS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p style={bodyText}>
              {COHORT.closes ? `Applications close ${COHORT.closes}. ` : ""}We review every one.
            </p>
            {applicationsOpen ? (
              <a href={COHORT.applyUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Apply Now →
              </a>
            ) : (
              <div style={{ color: "var(--orange)", fontSize: ".75rem", textTransform: "uppercase", letterSpacing: ".1em" }}>
                Applications open soon
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}