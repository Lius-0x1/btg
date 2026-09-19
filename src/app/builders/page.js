import BuildersGrid from "@/components/BuildersGrid";

export const metadata = {
  title: "Builders | Before They Graduate",
  description: "Every student documented by Before They Graduate, across every season, in one archive.",
};

export default function BuildersPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-title">The <span>Builders.</span></div>
        <p className="page-desc" style={{ marginTop: "1rem" }}>Every student documented by Before They Graduate, across every season. The Founding 12 started it. The archive keeps growing.</p>
      </div>
      <div className="section" style={{ paddingTop: "1rem" }}>
        <BuildersGrid />
      </div>
    </>
  );
}
