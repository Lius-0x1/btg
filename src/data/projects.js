// Single source of truth for the Projects repository.
// Add a project by adding one entry. The projects grid, each project page,
// search and the sitemap all read from this file.
//
// Optional fields can be left out and the page simply skips that section:
//   logo, links, stats, statsNote, quotes, learned, interviewSlug, founders[].name
//
// type is one of: "startup" | "research" | "app" | "tool"

const projects = [
  {
    slug: "quant",
    title: "Quant",
    type: "startup",
    stage: "Launched",
    tagline: "A WhatsApp library for course materials.",
    description:
      "Quant is a student-built app that delivers academic materials to students through WhatsApp. It was built in response to how hard students find it to get materials: tracking down the right people, paying monthly subscriptions and navigating different apps.",
    university: "Lagos State University (LASU)",
    universityShort: "LASU",
    profileSlug: "malik", // the slug of the founder's profile in src/data/builders.js  
    logo: "/assets/projects/quant.png", // e.g. "/assets/projects/quant.png" once the founder sends one

    about: [
      "Early in university, Malik and his co-founder found it hard to talk to people and get class updates, and it affected their academics. Updates usually arrive through WhatsApp, but materials mean either knowing the right people or going to meet them.",
      "Other solutions already existed, but Malik says students often struggle to pay monthly subscriptions and to navigate different apps. The idea for Quant was older than the product. The team delayed building it, then saw gaps in what was out there and decided to do it better.",
      "Quant is the result: a library that lives in WhatsApp, where a student asks for what they need and gets it back. One junior student who uses it told Malik he was surprised that the material arrives immediately when he asks, without any friction.",
    ],

    founders: [
      {
        name: "Malik",
        role: "Founder · Brand designer and product manager",
        detail: "400 level, Electronics and Computer Engineering, LASU",
      },
    ],

    // Self-reported. Update with current figures and a date when the founder has them.
    stats: [
      { value: "500+", label: "Early signups" },
      { value: "200", label: "Students who have started using it" },
      { value: "None", label: "Spent on marketing so far" },
    ],
    statsNote: "Reported by the founder in the first week after launch.",

    quotesHeading: "In Malik's words",
    quotes: [
      { text: "Quant is like a WhatsApp library, where you can just go inside and get any book you want, right in front of you." },
      { text: "A good idea will just sit there. It can't sell itself." },
      { text: "I believe that in terms of startups, people are more than money at times." },
    ],

    learnedHeading: "What Malik says he learned",
    learned: [
      "Build in public. When people know what you're building, they ask when you're launching, and that pushes you to build faster.",
      "Don't wait for perfect. Trying to perfect everything is what kills some founders, because everything can't be perfect.",
      "People matter more than money. The early user numbers came with no marketing spend.",
      "Know your team. Learn who each person is and adapt to them.",
      "A good idea won't sell itself. You still have to push it out and let people know.",
    ],

    // Where people can actually use it. Add once the founder shares them, e.g.
    // { label: "Try Quant on WhatsApp", href: "https://wa.me/234..." }
    links: [
     
  {
    label: "Visit Quant",
    href: "https://getquant.app",
  },

    ],
    // Set to the story's slug once the full interview is published at /stories/<slug>

  // Set to the story's slug once the full interview is published
  interviewSlug: "building-quant-while-in-university-malik",
  },
];

export default projects.map((p) => ({
  ...p,
  href: p.href || `/projects/${p.slug}`,
}));