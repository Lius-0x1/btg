import builders from "@/data/builders";

export default function sitemap() {
  const base = "https://beforetheygraduate.app";

  const staticRoutes = ["", "/episodes", "/stories", "/stories/how-it-started", "/projects", "/builders", "/submit", "/about"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const builderRoutes = builders.map((b) => ({
    url: `${base}/builders/${b.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...builderRoutes];
}