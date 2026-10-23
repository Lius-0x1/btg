import builders from "@/data/builders";
import stories from "@/data/stories";

export default function sitemap() {
  const base = "https://beforetheygraduate.app";

  const staticRoutes = ["", "/episodes", "/stories", "/projects", "/builders", "/submit", "/about", "/faq"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  const storyRoutes = stories.map((s) => ({
    url: `${base}${s.href}`,
    lastModified: new Date(),
  }));

  const builderRoutes = builders.map((b) => ({
    url: `${base}/builders/${b.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...storyRoutes, ...builderRoutes];
}