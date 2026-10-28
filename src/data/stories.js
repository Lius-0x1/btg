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
    interviewee: "Temitope",
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
        reaction: "Ohh really, I want to be your friend also.u",
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

    {
    slug: "first-class-chartered-accountant-at-18-arise-blossom",
    number: "03",
    format: "interview",
    builderSlug: "arise-blossom",
    interviewee: "Arise Blossom",
    href: "/stories/first-class-chartered-accountant-at-18-arise-blossom",
    tag: "BTG Full Interview · University of Ilorin",
    title: "First Class, Chartered Accountant at 18: Arise Blossom's Story",
    subtitle: "The woman behind the achievements",
    excerpt:
      "Arise Blossom graduated with a first class from the University of Ilorin and completed her accounting qualifications at 18. But behind the certificates was a student balancing academics, ICAN, internships, a foundation, ministry, friendships, failure, pressure and the search for a life beyond achievements.",
    meta: "Arise Blossom · University of Ilorin",
    image: "/assets/stories/blossom.jpg",
    imageAlt:
      "Arise Blossom, first-class graduate and chartered accountant from the University of Ilorin",
    heroQuote:
      "Failure is always part of the story.",
    shareText:
      "Read Arise Blossom's story on Before They Graduate",
    footerNote: "Story 03 · The Archive · Before They Graduate",

    intro: [
      "What happens when someone graduates with a first class, becomes a chartered accountant at 18, leads a foundation, builds a ministry and still tries to make room for a life beyond achievements?",
      "That was the conversation I had with Arise Blossom, a first-class Economics graduate of the University of Ilorin.",
      "Behind the certificates was a much more complicated story: starting professional exams in secondary school, failing an ICAN stage, managing an intense academic workload, finding internships, building a support system and learning that achievement alone cannot define a person's life.",
      "This is the conversation with the woman behind the achievements."
    ],

    qa: [
      {
        heading: "Meet Blossom",
        q: "For someone who is just hearing about you for the first time today, who exactly is Blossom? Tell us a little about yourself.",
        a: [
          "My name is Blossom. I am a first-class Economics graduate from the University of Ilorin. Beyond my academic achievements, I also pursued my professional skills, so I'm also a chartered accountant. I finished all my accounting exams at 18.",
          "I also interned at a few places, including KPMG and Credit Direct. I led a foundation called Zoe Foundation while in school, where we helped students who were in need during test and exam seasons.",
          "I'm also a pastor. I built and led a ministry while in school called Wildfire Movement. I'm a very funny person too. I believe I'm hilarious, but it has to be my friends to know that part about me."
        ],
        pull: "“I'm a very funny person.”"
      },

      {
        q: "What were you like growing up, and what were you interested in as a child?",
        a: [
          "I was one of those children who were old in a child's body. At age six or seven, I was already trying to be a mommy. I would take care of my younger sibling like I'm a mother.",
          "I didn't really like toys or playing. I liked serious things, like Yoruba movies and acting mommy and daddy. I was always interested in taking care of children."
        ],
        reaction: "I never expected this part of the story."
      },

      {
        q: "You entered university very young. What was that experience like?",
        a: [
          "I got admission at 14 and entered at 15 because there was a strike, so I graduated later than I should have.",
          "I graduated with my elder brother. We convocated together a few days ago, and he's 21.",
          "There was no pressure in my family. Everybody had their own personal ambitions, and we focused on what we wanted to do while supporting each other."
        ]
      },

      {
        heading: "The girl who started early",
        q: "How did you start pursuing professional qualifications at such a young age?",
        a: [
          "I started my ICAN when I was in SS3. In SS2 I had written my external exams and done well, so SS3 just felt like, what's even the point? Let me find something else to do.",
          "I found out about ICAN and realised I could take a professional exam. I already had the required result, so I started.",
          "I chose Economics because I wanted to continue my ICAN without studying Accounting and repeating the same courses and costs."
        ]
      },

      {
        q: "You eventually failed one of your ICAN stages. What did that experience do to you?",
        a: [
          "I feel like ICAN can humble the smartest people. I failed one stage, and when I retook it, I passed.",
          "That failure was tough. I checked my result on five other people's phones because I couldn't believe it. I cried every single day.",
          "I was asking myself if I wasn't smart or if I didn't know books. But after crying, I wiped my tears, spoke to God about it, and went again.",
          "Now I'm so glad I failed. Failure taught me a lot. I thought I wasn't going to survive it, but now I'm no longer scared to fail."
        ],
        pull: "“Failure is always part of the story.”"
      },

      {
        heading: "What people don't see",
        q: "What did a typical week look like for you while you were balancing school, ICAN, your foundation and your other responsibilities?",
        a: [
          "It was crazy. I don't think anybody wants to live my life.",
          "There were some weeks I was running like a machine. I could go four weeks on a marathon of being busy, running everything, and then spend one week being sick after.",
          "My life was always very chaotic. There were definitely times I would get overwhelmed, block out everything, and go again the next day.",
          "One thing I always did was set structures for my day. I would plan my whole day minute by minute and prioritise by season."
        ]
      },

      {
        q: "What kept you going when everything became overwhelming?",
        a: [
          "I just know that I can't give up.",
          "What kept me going was my goals, God and structure.",
          "As much as you desire something, it's still better to put structures in place, because that's what will save you."
        ],
        pull: "“What kept me going was my goals, God and structure.”"
      },

      {
        q: "How did you decide what deserved your time and what you had to say no to?",
        a: [
          "It was just times and seasons, and understanding that I'm different from everybody.",
          "I realised I didn't particularly have the time every other person had. So I accepted the truth about myself: I'm busier than everybody. Fine. Accept it. Now work with that.",
          "In exam periods, I would fully focus on my books. During more relaxed periods, I could go out, see people and have fun.",
          "I didn't feel like I was missing out because I knew I was doing it for my future."
        ]
      },

      {
        heading: "Opportunity, career and support",
        q: "How did you discover internships and other opportunities?",
        a: [
          "For internships, I had to find those myself. I realised there were a lot of opportunities people were missing out on because they did not have information.",
          "I found friends who were interested in the same things I was interested in. When I went for the internship at KPMG, I went with two of my friends.",
          "We joined groups that shared scholarships and internship opportunities. Whenever I saw an opportunity, I applied.",
          "I joined a lot of groups because I knew I had to be where the information was."
        ],
        pull: "“Information helps you fly.”"
      },

      {
        q: "For a student without connections, where would you advise them to start?",
        a: [
          "They should start by applying for internships and scholarships. That's it.",
          "They should also focus on getting a good CGPA. Even if they're not able to get internships and scholarships in school, if they're able to get a really good CGPA after school, opportunities will open up.",
          "You don't need connections to apply for internships and scholarships. Focus on your CGPA and come out with something good."
        ]
      },

      {
        q: "How important was your support system?",
        a: [
          "I had a group of friends. We are four girls, and the four of us led our department till we graduated.",
          "When one person is down, everybody shows up for that person. When one person is not able to read, everybody shows up and helps.",
          "We are always talking and sharing information. We support one another.",
          "Your support system should be people who have like minds, just like you."
        ],
        reaction: "The right people around you can make a huge difference."
      },

      {
        heading: "The person beyond the achievements",
        q: "Do you ever feel like people see your achievements before they see you as a person?",
        a: [
          "Yes, very normal, and I'm already used to it.",
          "Everybody just sees my achievements and what I do. Many people don't know me, me.",
          "But I have friends who see me for me, so that's totally fine."
        ]
      },

      {
        q: "What's something most people don't know about you?",
        a: [
          "That I'm hilarious. I'm so funny.",
          "I'm just a girl who wants to play most of the time, and I don't take life seriously.",
          "Everything has to be funny. I feel like Nigeria has already had enough, so why should we be holding things to our chest? Let's just laugh about everything."
        ]
      },

      {
        q: "Do you have a quote or principle you live by?",
        a: [
          "I don't think I have a quote I live by. What I always say, and what I actually live by, is: trust God with your life.",
          "Every single day I just know that He runs my life. So everywhere I go, I can never be stranded, because I trust God."
        ],
        pull: "“Trust God with your life.”"
      },

      {
        q: "How do you know when you're being ambitious and when you're putting unnecessary pressure on yourself?",
        a: [
          "I think it's the motive. What's my motive? Why do I want to do what I'm about to do right now?",
          "Is it just because I want to get better at my work and know more, or is it because I'm trying to compare myself with other people and feeling left behind?",
          "The motive is what lets me know whether I'm being ambitious or just putting pressure on myself."
        ]
      },

      {
        q: "Has achieving so much changed how you define success?",
        a: [
          "The more certificates I gather, the more I realise that life is not really about certificates.",
          "They are great, but they are fickle. Everybody celebrates you today, and tomorrow everybody has forgotten about it.",
          "It makes me ambitious, but it also reminds me that there has to be more to life than certificates.",
          "Success is not just about achieving certificates. It's about doing what God would have me do. So it's both of them. It's balance."
        ],
        pull: "“Life is not really about certificates.”"
      },

      {
        q: "If you could go back to your first day in university, would you do anything differently?",
        a: [
          "Maybe in my 200 level I would have put less workload on myself.",
          "I was doing so much in 200 level. That was also the year I failed ICAN. I would have told myself to reduce what I was doing and focus on a few things instead of doing everything at once."
        ]
      },

      {
        heading: "To the person who feels behind",
        q: "If a young person feels behind because people their age seem to be achieving more, what would you want them to understand?",
        a: [
          "Everybody's journey is different.",
          "If at 18 you're just getting admission, that's great. You just work on being the best and doing what you're supposed to do well.",
          "The moment you begin to feel pressure, check it and control it, because we all have different journeys.",
          "Don't compare yourself with anybody. Do better, do your work better, focus on your work, but don't compare yourself with anybody.",
          "And also, you can trust God with your life."
        ]
      },

      {
        q: "What would you tell the younger Blossom who was just starting this journey?",
        a: [
          "I would first tell her how great a woman she was going to become.",
          "I would tell her to never look down on herself, to never give up on God, and to always keep going no matter what."
        ],
        pull: "“Never look down on yourself. Never give up. Always keep going.”"
      }
    ],

    takeawaysHeading: "A few things I took away from this conversation",

    takeaways: [
      "Blossom's story is bigger than a first-class result or a professional qualification. Behind the achievements was a student who had to learn how to manage pressure, failure, responsibility and an unusually busy schedule.",
      "One of the strongest parts of the conversation was her experience with failure. Failing an ICAN stage made her question herself, but eventually changed how she understood failure. Instead of seeing it as something that should define her, she learned to go again.",
      "Her approach to opportunities was also straightforward: find information, join the right communities, apply and keep looking. She believes many students miss opportunities simply because they don't have access to the information.",
      "And perhaps the biggest lesson was about comparison. Blossom's journey started early, but she doesn't believe everyone has to follow the same timeline. Her advice is simple: focus on your own journey and keep moving."
    ],

    takeawaysPull: "“Everybody's journey is different.”",

    outro: [
      "Blossom's story is a reminder that achievements can tell us what someone has done, but they don't always tell us what it took to get there.",
      "There was the first class. The accounting qualification. The internships. The foundation. The ministry. The opportunities.",
      "But there was also failure, pressure, exhaustion, uncertainty, support, faith, friendship and the decision to keep going.",
      "At Before They Graduate, we're interested in the people behind the achievements and the stories behind the milestones.",
      "This is Arise Blossom's story.",
      "And this is Before They Graduate."
    ]
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
