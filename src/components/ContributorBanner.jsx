import Link from "next/link";
import COHORT from "@/data/cohort";

const INK = "#0b0b0b"; // near-black text on the orange band, for strong contrast

const FACTS = ["Contributor for Each campus", "Any Nigerian university", "A few hours a week", "Unpaid · real byline"];

export default function ContributorBanner() {
  const open = Boolean(COHORT.applyUrl);

  const status = open
    ? `${COHORT.name} applications are open${COHORT.closes ? ` · Closes ${COHORT.closes}` : ""}`
    : `${COHORT.name} · Applications open ${COHORT.opens ? COHORT.opens : "soon"}`;

  return (
    <section style={{ padding: "2rem clamp(1rem, 4vw, 2.5rem) 0", maxWidth: "1200px", margin: "0 auto" }}>
      <div
        style={{
          background: "var(--orange)",
          color: INK,
          borderRadius: "12px",
          padding: "clamp(1.5rem, 4vw, 2.5rem)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.75rem",
        }}
      >
        <div style={{ flex: "1 1 420px", minWidth: 0 }}>
          <div style={{ fontSize: ".7rem", textTransform: "uppercase", letterSpacing: ".14em", fontWeight: 600, opacity: 0.8 }}>
            Campus Correspondent Programme
          </div>

          <div
            style={{
              fontFamily: "var(--display)",
              fontSize: "clamp(1.9rem, 4.5vw, 3rem)",
              lineHeight: 1.05,
              margin: ".45rem 0 .75rem",
            }}
          >
            Put your campus on the record.
          </div>

          <p style={{ margin: 0, maxWidth: "560px", fontSize: ".95rem", lineHeight: 1.6, fontWeight: 500 }}>
            Become a BTG Campus Contributor. Find the stories at your university, interview the people behind them, and get published with your name on every piece.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginTop: "1.1rem" }}>
            {FACTS.map((fact) => (
              <span
                key={fact}
                style={{
                  background: "rgba(11, 11, 11, 0.14)",
                  borderRadius: "999px",
                  padding: ".3rem .8rem",
                  fontSize: ".72rem",
                  fontWeight: 600,
                }}
              >
                {fact}
              </span>
            ))}
          </div>
        </div>

        <div style={{ flex: "0 1 auto", display: "flex", flexDirection: "column", alignItems: "flex-start", gap: ".8rem" }}>
          <div
            style={{
              background: INK,
              color: "#fff",
              borderRadius: "999px",
              padding: ".35rem .9rem",
              fontSize: ".72rem",
              fontWeight: 600,
              letterSpacing: ".04em",
            }}
          >
            {status}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: ".7rem" }}>
            {open && (
              <a
                href={COHORT.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: INK, color: "#fff", padding: ".8rem 1.5rem", borderRadius: "6px", fontWeight: 600, fontSize: ".85rem" }}
              >
                Apply Now →
              </a>
            )}
            <Link
              href="/contributors"
              style={{
                background: open ? "transparent" : INK,
                color: open ? INK : "#fff",
                border: `2px solid ${INK}`,
                padding: ".7rem 1.4rem",
                borderRadius: "6px",
                fontWeight: 600,
                fontSize: ".85rem",
              }}
            >
              {open ? "Learn more" : "Learn more →"}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}