import builders from "@/data/builders";
import BuilderProfile from "@/components/BuilderProfile";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return builders.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const builder = builders.find((b) => b.slug === slug);
  if (!builder) return {};
  return {
    title: `${builder.name} | Before They Graduate`,
    description: `The story, lessons, and journey of ${builder.name} before graduation.`,
  };
}

export default async function BuilderPage({ params }) {
  const { slug } = await params;
  const builder = builders.find((b) => b.slug === slug);
  if (!builder) notFound();
  return <BuilderProfile builder={builder} />;
}