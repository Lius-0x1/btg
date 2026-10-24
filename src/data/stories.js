// Single source of truth for stories. Add a new story by adding one entry here:
//  - format "origin"    -> has its own hand-built page folder (src/app/stories/<slug>)
//  - format "interview" -> rendered automatically at /stories/<slug> by src/app/stories/[slug]/page.js
// The stories list, search index and sitemap all read from this file.

const stories = [
  {
    slug: "how-it-started",
    number: "01",
    format: "origin",
    href: "/stories/how-it-started",
    tag: "✦ Origin Story · By Ayinde · October 2025",
    title: 'How "Before They Graduate" Started',
    excerpt:
      "Funny thing is, Before They Graduate wasn't even planned. It started when Akorede, a 500-level student from the same department, saw a YouTube video Ayinde made with his father and dropped a comment. That comment became a conversation. That conversation became the first episode. No plan, no big idea, no proper setup just a mic, a borrowed camera, and a friend who said yes. This is the origin story of the series, in the creator's own words.",
    meta: "Ayinde (Creator) · FUTA · October 2025",
    externalUrl: "https://soburayinde.substack.com/p/how-before-they-graduate-started",
    externalLabel: "or read on Substack",
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

  {
    slug: "how-i-lose-my-hope-for-first-class",
    number: "02",
    format: "interview",
    href: "/stories/how-i-lose-my-hope-for-first-class",
    builderSlug: "temmy",
    tag: "BTG Quick Conversation · University of Ilorin",
    title: "The Surgery That nearly made me lose my hope for First Class: Temitope Ajagbe's Story",
    subtitle: "Behind the First Class — A BTG Quick Conversation",
    excerpt:
      "Sometimes, you see someone graduating with a first class, and the first thing that comes to mind is how brilliant they must be. But there's often more to the story. We talked about how she became determined to graduate with a first class, the difficult moments she experienced during university, the role of money and support in her journey, and the things she learned along the way.",
    meta: "Temitope Ajagbe · University of Ilorin",
    image: "/assets/stories/temmy.jpeg",
    imageAlt: "Temitope Ajagbe in graduation cap and gown, University of Ilorin",
    heroQuote: "I believe anyone can attain it. It's based on YOU.",
    shareText: "Read Temitope Ajagbe's story on Before They Graduate",
    footerNote: "Story 02 · The Archive · Before They Graduate",

    intro: [
      "Sometimes, you see someone graduating with a first class, and the first thing that comes to mind is how brilliant they must be, how well they must have studied, or how easy everything must have been for them academically.",
      "But there's often more to the story.",
      "For this BTG Quick Conversation, I spoke with Temitope Mary Ajagbe, a first-class graduate of the Department of Religions, Comparative Religious Studies, University of Ilorin, Ilorin, Nigeria. We talked about how she became determined to graduate with a first class, the difficult moments she experienced during university, the role of money and support in her journey, and the things she learned along the way.",
      "And honestly, some of her answers made me pause.",
    ],

    qa: [
      {
        pull: "“After my 100L results were uploaded, I knew I could graduate with it.”",
        q: "Hi, what's your name, and which department are you graduating from?",
        a: [
          "Good evening to you.",
          "I'm Temitope Mary Ajagbe, a first-class graduate from the Department of Religions, Comparative Religious Studies to be precise, University of Ilorin, Ilorin, Nigeria.",
        ],
        reaction: "Ouuu, nice ",
      },
      {
        q: "When you first entered university, what kind of student were you, and at what point did graduating with a first class become a real goal for you?",
        a: [
          "A determined student, I will say. After my 100L results were uploaded, I knew I could graduate with it. That made me more determined.",
        ],
        reaction: "This is very beautiful, I can't lie.",
      },
      {
        q: "The result doesn't tell us everything. What's one difficult experience you went through in university that someone looking at your academic record would never guess?",
        a: [
          "Thank you so much.",
          "I think depression.",
          "I was depressed at a particular time in my four-year journey, yet still kept on with the smile and energy.",
          "A lot, they say, goes on behind the scenes.",
          "But God came through for me.",
        ],
        reaction: "I'm sorry you had to go through that. God really came through. ",
      },
      {
        pull: "“I wasn't able to explore, even though I'm not the social type.”",
        q: "Let's talk about money. How much did your financial circumstances influence your university experience, from getting learning materials and accessing opportunities to meeting your everyday needs?",
        a: [
          "Hmmm.",
          "Well, it influenced my experience a bit because I wasn't able to explore, even though I'm not the social type.",
          "But it has its effect.",
          "In terms of learning materials, we rarely buy books except when it's necessary for our usage.",
          "We make use of learning materials online and recommended sites, as the case may be.",
          "That makes learning easy for me and others.",
        ],
        reaction: "I'm so sorry. I can't believe I'm seeing water in my eyes already.",
      },
      {
        heading: "The semesters that tested her",
        q: "The semester that tested you. Was there ever a point when you genuinely doubted whether you could maintain your grades? What was happening at the time, and how did you respond?",
        a: [
          "Thank you for this question.",
          "It was actually two semesters.",
          "One semester was during my 200 level. It was a course that focused on women in Africa, and I really struggled with the comprehension. I cried a lot during those periods while still reading it.",
          "I had to do more research and be open-minded towards it and the lecturer in charge because it actually looked like hell. In all, I passed the course, and God is glorified.",
          "The second one was my final year. I resumed 400L one week after surgery. It was a lot.",
          "I couldn't cope academically and really lagged behind at that particular time. I had to meet up with one of my coursemates to explain a particular course when I wasn't meeting up like I should.",
          "It was the semester I cried the most because I felt I wasn't doing well enough and was mentally not stable. I was just pushing through.",
          "At the end, I found strength in God and braced up back.",
          "I responded positively because there was a determined outcome I wanted regarding my academic journey.",
          "It took resilience, hard work and a focused mind to bounce back.",
          "And yes, God helped.",
        ],
        reaction: "Oh my God, you really deserve this first class.",
      },
      {
        heading: "What studying actually looked like",
        q: "What did studying actually look like? Forget the usual advice to be consistent. Walk me through how you prepared for exams, especially when you didn't understand a course or had very little time left.",
        a: [
          "Hmmm.",
          "Studying is not easy, but along the line, I always find it sweet to read. That's when my mind is really prepared for it.",
          "It depends on the mindset, actually.",
          "Whenever I have forthcoming exams or tests or anything, I prepare my mind ahead of my reading schedules, days before, and plan towards how I will go about it.",
          "Either two topics a day or one. I split it and have intensive reading until I'm cleared on it before moving to the next.",
          "I've had experiences of little time to prepare. It's not always easy, even though most students do that.",
          "I recommend early preparation, even before the announcement of tests or exams. It really helps and aids one's learning.",
          "This really helped me during my 100L days. I prepared so much that, at a point, I was so confident I could pass all, even if we had an impromptu test or exam.",
          "The confidence was because I had prepared earlier.",
          "The comprehension and the preparedness ahead do really work.",
          "On not understanding a course, I speak to people who understand better than I do and also research more on it to get a better understanding of it.",
        ],
        reaction: "Seems being confident is one of the keys to achieving whatever you want. ",
      },
      {
        pull: "“I don't think I gave up anything extreme.”",
        q: "Let's talk about the things you had to give up. What did pursuing a first class demand from you that people might not realise? Were there friendships, opportunities, habits or experiences you had to sacrifice?",
        a: [
          "Not really. In terms of friendships, I move with people of like minds, so we gear one another up for academic excellence.",
          "I don't think I gave up anything extreme.",
          "I make use of my time and know how to manage it for other things I want to be involved in too.",
        ],
        reaction: "Ohh really, I want to be your friend also. 🌚",
        reply: "You are welcome. ",
      },
      {
        heading: "The people who helped her along the way",
        q: "What kind of support made the biggest difference in your journey, and were there opportunities you had to work harder to access because of your circumstances?",
        a: [
          "Family and friends' support, emotional and financial support too.",
          "All these really helped in the journey.",
          "Hmmm, not really, except me writing an article and going through an interview because I wanted access to an internship, which I later got, by the way.",
        ],
        reaction: "This is inspiring.",
      },
      {
        q: "Do you mean you have articles published? How do you think people can have access to it?",
        a: ["No.", "Wasn't a published one.", "Just for an entry application."],
      },
      {
        pull: "“I believe anyone can attain it.”",
        heading: "The truth about first class",
        q: "What's one thing people believe about first-class students that your own experience has taught you isn't necessarily true?",
        a: [
          "Some people believe it's meant for some certain people, which I don't agree with.",
          "I believe anyone can attain it.",
          "It's based on YOU.",
        ],
        reaction: "YOU. ",
      },
      {
        q: "Is there a quote you've always lived by and you'd love to pass to the person reading this?",
        a: ["No, I don't."],
        reaction: "Thank you.",
      },
      {
        q: "My final question. What would you tell the student you used to be? If you could sit with yourself on your first day in 100 level, knowing everything you know now, what would you tell that version of yourself about academics, money, opportunities and life?",
        a: [
          "Whatever you put your mind to, you can achieve.",
          "Do not neglect any part of your life for one. Improve in all.",
          "I will take bold steps towards my dreams.",
          "And explore opportunities. You can never tell which one will work out for you or not.",
          "And start now. Don't wait for the “best time” before you do what you purposed to do.",
          "Time waits for no one.",
        ],
      },
    ],

    takeawaysHeading: "A few things I took away from this conversation",
    takeaways: [
      "Temitope's journey reminded me that an academic result can tell us what someone achieved, but it doesn't tell us everything they experienced to get there.",
      "She spoke about depression, crying over a difficult course, returning to university one week after surgery, and struggling to catch up academically. She also spoke about researching more, asking people for help, preparing ahead of exams, receiving support from family and friends, and finding strength in God.",
      "One thing I appreciated was that she didn't describe her journey as one where she had to give up everything else for academics. She spoke about managing her time, keeping friends who encouraged academic excellence, and making room for other things she wanted to do.",
      "And when I asked what people misunderstand about first-class students, her answer was simple: she doesn't believe a first class is meant for only certain people.",
    ],
    takeawaysPull: "“It's based on YOU.”",
    outro: [
      "I won't pretend this conversation answers every question about what it takes to graduate with a first class. Every student's circumstances are different. But it gave me a chance to hear one student's experience in her own words, including the parts that don't show up on a result sheet.",
      "And that's why I wanted to have this conversation.",
      "At Before They Graduate, we're interested in the people behind the achievements, the experiences behind the milestones, and the stories that deserve to be documented while these students are still on their journeys.",
      "This is Temitope Mary Ajagbe's story.",
      "And this is Before They Graduate.",
    ],
  },
];

// Every story gets a flat `paragraphs` array for the search index.
// Interview stories build it automatically from their questions and answers.
const withSearchText = stories.map((s) => ({
  ...s,
  href: s.href || `/stories/${s.slug}`,
  paragraphs:
    s.paragraphs ||
    [
      ...(s.intro || []),
      ...(s.qa || []).flatMap((item) => [item.q, ...item.a]),
      ...(s.takeaways || []),
      ...(s.outro || []),
    ],
}));

export default withSearchText;
