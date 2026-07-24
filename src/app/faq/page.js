import Link from "next/link";

export const metadata = {
  title: "FAQ | Before They Graduate",
  description: "Answers to common questions about submitting your story or project to Before They Graduate.",
};

const faqs = [
  {
    q: "How long does review take?",
    a: "Review timelines depend on the type of project or story you submit — some are reviewed and published quickly, others may take a little longer depending on complexity.",
  },
  {
    q: "What if my final year project isn't finished yet?",
    a: "You can still submit. If you need any assistance while you continue building, the BTG team is available to help along the way.",
  },
  {
    q: "Will I be notified after I submit?",
    a: "Yes. After submission, you'll hear from the BTG team, usually by email, and sometimes with a follow-up call.",
  },
  {
    q: "Is there a cost to submit?",
    a: "No, submitting to Before They Graduate is completely free.",
  },
  {
    q: "Can students from any Nigerian university submit, or only FUTA?",
    a: "Any Nigerian university, any department. Season 1 started at FUTA, but the archive itself is open to everyone.",
  },
];

export default function FAQPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-title">Frequently Asked <span>Questions.</span></div>
        <p className="page-desc" style={{ marginTop: "1rem" }}>Answers to the questions we get most before someone submits their story or project.</p>
      </div>

      <div className="section" style={{ paddingTop: "1rem" }}>
        {faqs.map((item, i) => (
          <div key={i} className="value-card" style={{ marginBottom: "1.2rem" }}>
            <div className="value-title" style={{ fontSize: "1rem" }}>{item.q}</div>
            <div className="value-body">{item.a}</div>
          </div>
        ))}

        <div style={{ marginTop: "3rem" }}>
          <div className="cta-inner" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: "8px" }}>
            <div>
              <div style={{ fontFamily: "var(--display)", fontSize: "1.8rem", color: "var(--text)", marginBottom: ".5rem" }}>Still have a question?</div>
              <div style={{ fontSize: ".85rem", color: "var(--muted2)", fontWeight: 300, maxWidth: "480px", lineHeight: 1.7 }}>Reach out directly and the BTG team will get back to you.</div>
            </div>
            <div className="cta-actions">
              <Link href="/submit" className="btn-primary">Go to Submit →</Link>
            </div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <Link href="/faq" style={{ color: "var(--orange)", fontSize: ".8rem", textTransform: "uppercase", letterSpacing: ".08em" }}>Read the FAQ →</Link>
        </div>
    </>
  );
}