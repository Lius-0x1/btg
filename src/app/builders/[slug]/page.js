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

  const title = `${builder.name} | Before They Graduate`;
  const description = `Discover ${builder.name}'s story, experiences, lessons, and journey before graduation.`;
  const url = `https://beforetheygraduate.app/builders/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Before They Graduate",
      type: "profile",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
export default async function BuilderPage({ params }) {
  const { slug } = await params;
  const builder = builders.find((b) => b.slug === slug);
  if (!builder) notFound();
  return <BuilderProfile builder={builder} />;
}