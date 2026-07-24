import BuildersGrid from "@/components/BuildersGrid";

export const metadata = {
  title: "The Founding 12 | Before They Graduate",
  description: "The first twelve students documented by Before They Graduate.",
};

export default function BuildersPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-title">The Founding <span>12.</span></div>
        <p className="page-desc" style={{ marginTop: "1rem" }}>The first twelve students documented by Before They Graduate. Their stories became the foundation of the archive.</p>
      </div>
      <div className="section" style={{ paddingTop: "1rem" }}>
        <BuildersGrid />
      </div>
    </>
  );
}