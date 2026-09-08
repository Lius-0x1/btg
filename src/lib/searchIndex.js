import builders from "@/data/builders";

// Origin story content, broken into searchable paragraphs.
// Add more entries here as new stories get approved and published.
const stories = [
  {
    slug: "how-it-started",
    title: 'How "Before They Graduate" Started',
    href: "/stories/how-it-started",
    author: "Ayinde",
    paragraphs: [
      "Funny thing is, Before They Graduate wasn't even planned. It all started when Akorede, a 500-level student from my department, saw my YouTube video with my father. That day, he just dropped a comment telling me to stay strong, joking that I should come back and tell them what daddy had to say about being resilient.",
      "Gbam that was it. I replied immediately and told him that when I got back to school, he was going to share with us all the wahala FUTA had put him through since 100 level. At that moment, I honestly didn't mean anything serious. It was just random talk. But during their final year week, I remembered that chat and asked if he'd be available for a proper conversation. He said \"no problem.\" That's how it happened.",
      "After that first one, I started messaging other final-year students, telling them I was working on a YouTube series and I'd love to have them on board. That's literally how Before They Graduate began. Unplanned. Unexpected. But it just felt right.",
      "Ayinde created the series after a single YouTube comment turned into a real conversation.",
      "Looking back, if Akorede had said no that first day, there's likely no Before They Graduate at all.",
      'Anthony ("Thoniee") shot the entire first episode on his own phone.',
      "Samson designed the graphics announcing the series for free.",
    ],
  },
];

// Add project data here once projects exist:
// import projects from "@/data/projects";
const projects = [];

const staticPages = [
  { title: "Episodes", type: "Page", href: "/episodes", keywords: "season 1 videos youtube episodes founding 12" },
  { title: "Projects Repository", type: "Page", href: "/projects", keywords: "research startups apps tools submit repository" },
  { title: "Submit Your Story or Project", type: "Page", href: "/submit", keywords: "tally nominate season 2 apply submission" },
  { title: "About Before They Graduate", type: "Page", href: "/about", keywords: "mission archive futa creator ayinde" },
  { title: "FAQ", type: "Page", href: "/faq", keywords: "frequently asked questions review timeline notification cost free" },
];

const MAX_MATCHES_PER_ITEM = 3;

function getSnippet(text, q, radius = 55) {
  const lower = text.toLowerCase();
  const idx = lower.indexOf(q);
  if (idx === -1) return null;
  const start = Math.max(0, idx - radius);
  const end = Math.min(text.length, idx + q.length + radius);
  let snippet = text.slice(start, end).trim();
  if (start > 0) snippet = "…" + snippet;
  if (end < text.length) snippet = snippet + "…";
  return snippet;
}

// Splits a builder field (string or array of strings) into individually
// searchable units, so a match points at one paragraph/bullet, not a blob.
function toUnits(field) {
  if (!field) return [];
  return Array.isArray(field) ? field : [field];
}

function searchBuilders(q) {
  const results = [];
  for (const b of builders) {
    const fieldGroups = [
      { label: "Quote", units: toUnits(b.quote) },
      { label: "Memorable Quote", units: toUnits(b.memorableQuote) },
      { label: "About", units: toUnits(b.about) },
      { label: "What Shaped Them", units: toUnits(b.whatShapedThem) },
      { label: "Lessons", units: toUnits(b.lessons) },
      { label: "Advice", units: toUnits(b.advice) },
      { label: "Why We Remember Them", units: toUnits(b.whyWeRememberThem) },
      { label: "Department", units: toUnits(b.department) },
    ];

    const matches = [];
    for (const group of fieldGroups) {
      for (const unit of group.units) {
        if (unit.toLowerCase().includes(q)) {
          matches.push({ label: group.label, snippet: getSnippet(unit, q) });
        }
      }
    }

    if (matches.length > 0) {
      results.push({
        type: "Builder",
        title: b.name,
        image: b.image,
        href: `/builders/${b.slug}`,
        department: b.department,
        matches: matches.slice(0, MAX_MATCHES_PER_ITEM),
        extraMatchCount: Math.max(0, matches.length - MAX_MATCHES_PER_ITEM),
      });
    }
  }
  return results;
}

function searchStories(q) {
  const results = [];
  for (const s of stories) {
    const matches = [];
    for (const p of s.paragraphs) {
      if (p.toLowerCase().includes(q)) {
        matches.push({ label: "Story", snippet: getSnippet(p, q) });
      }
    }
    if (matches.length > 0) {
      results.push({
        type: "Story",
        title: s.title,
        href: s.href,
        matches: matches.slice(0, MAX_MATCHES_PER_ITEM),
        extraMatchCount: Math.max(0, matches.length - MAX_MATCHES_PER_ITEM),
      });
    }
  }
  return results;
}

function searchProjects(q) {
  const results = [];
  for (const p of projects) {
    const fieldGroups = [
      { label: "Title", units: toUnits(p.title) },
      { label: "Description", units: toUnits(p.description) },
    ];
    const matches = [];
    for (const group of fieldGroups) {
      for (const unit of group.units) {
        if (unit.toLowerCase().includes(q)) {
          matches.push({ label: group.label, snippet: getSnippet(unit, q) });
        }
      }
    }
    if (matches.length > 0) {
      results.push({
        type: "Project",
        title: p.title,
        href: p.href || "/projects",
        matches: matches.slice(0, MAX_MATCHES_PER_ITEM),
        extraMatchCount: Math.max(0, matches.length - MAX_MATCHES_PER_ITEM),
      });
    }
  }
  return results;
}

function searchPages(q) {
  return staticPages
    .filter((p) => p.title.toLowerCase().includes(q) || p.keywords.toLowerCase().includes(q))
    .map((p) => ({ type: "Page", title: p.title, href: p.href, matches: [], extraMatchCount: 0 }));
}

export function searchAll(rawQuery) {
  const q = rawQuery.toLowerCase().trim();
  if (!q) return { builders: [], stories: [], projects: [], pages: [], total: 0 };

  const builderResults = searchBuilders(q);
  const storyResults = searchStories(q);
  const projectResults = searchProjects(q);
  const pageResults = searchPages(q);

  return {
    builders: builderResults,
    stories: storyResults,
    projects: projectResults,
    pages: pageResults,
    total: builderResults.length + storyResults.length + projectResults.length + pageResults.length,
  };
}