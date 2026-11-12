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
    <main className="collection-page faq-page">
      <header className="collection-hero">
        <div className="collection-kicker"><span /> A FEW THINGS TO KNOW</div>
        <div className="collection-hero-grid">
          <div>
            <h1>Questions, <em>answered.</em></h1>
            <p>Everything you need to know before sharing a story, submitting a project or getting involved with Before They Graduate.</p>
            <div className="collection-actions"><a href="#faq-list">Browse the answers ↓</a><Link href="/submit">Ready to submit? ↗</Link></div>
          </div>
          <aside className="collection-count-card"><strong>05</strong><span>COMMON QUESTIONS</span><div className="collection-count-rule"/><small>Can't find what you're looking for? Get in touch through the submission page.</small></aside>
        </div>
      </header>
      <section className="collection-main faq-content" id="faq-list">
        <div className="collection-section-heading"><div><span>BEFORE YOU SUBMIT</span><h2>Good to <em>know.</em></h2></div><p>Clear answers about the process, eligibility and what happens after you send something in.</p></div>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <details key={i} className="faq-item" open={i === 0}>
              <summary><span className="faq-number">{String(i + 1).padStart(2, "0")}</span><span>{item.q}</span><b>＋</b></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
        <div className="faq-contact-band"><div><span>STILL UNSURE?</span><h2>Ask us directly.</h2><p>Reach out to the BTG team and we'll help you figure out the right next step.</p></div><Link href="/submit">Go to Submit <span>↗</span></Link></div>
      </section>
    </main>
  );
}