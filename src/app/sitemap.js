import builders from "@/data/builders";
import stories from "@/data/stories";
import projects from "@/data/projects";

export default function sitemap() {
  const projectRoutes = projects.map((p) => ({
    url: `https://beforetheygraduate.app/projects/${p.slug}`,
    lastModified: new Date(),
  }));
  const base = "https://beforetheygraduate.app";

  const staticRoutes = ["", "/episodes", "/stories", "/projects", "/builders", "/submit", "/about", "/faq", "/contributors"].map((route) => ({
    url: `${base}${route}`,
  }));

  const storyRoutes = stories.map((s) => ({
    url: `${base}${s.href}`,
  }));

  const builderRoutes = builders.map((b) => ({
    url: `${base}/builders/${b.slug}`,

  }));

  return [...staticRoutes, ...storyRoutes, ...builderRoutes, ...projectRoutes];
}