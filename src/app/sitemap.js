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

  return [...staticRoutes, ...storyRoutes, ...builderRoutes, ...projectRoutes];
}