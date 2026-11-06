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
    contributorSlug: "Ayinde Abdulsobur",
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
   contributorSlug: "Ayinde Abdulsobur",
  href: "/stories/first-class-chartered-accountant-at-18-arise-blossom",
  tag: "BTG Full Interview · University of Ilorin",
  title: "First Class, Chartered Accountant at 18: The Full Story of Arise Blossom",
  subtitle: "Family, faith, failure, ambition, love and the journey behind the achievements",
  excerpt:
    "She became a first-class Economics graduate and completed her accounting exams at 18. But behind the achievements is a story of family support, failure, pressure, friendship, faith, love and learning when to slow down.",
  image: "/assets/stories/blossom.jpg",
   heroQuote: "Failure is always part of the story.",
  imageAlt: "Arise Blossom",
  video: {
    youtubeId: "s7CZ1pDf6Jk",
    url: "https://youtu.be/s7CZ1pDf6Jk?si=t8yHNMyJNkc7S19k",
    embedUrl: "https://www.youtube.com/embed/s7CZ1pDf6Jk"
  },

  intro: [
    "When people hear about Arise Blossom, they hear the achievements first: a first-class degree in Economics, a professional accounting qualification completed at 18, internships, leadership and ministry.",
    "But achievement is only one part of a person's story. Behind the certificates are the people who shaped her, the expectations she placed on herself, the exam that made her question her ability, the friendships that carried her through university, and the love she found while still pursuing her goals.",
    "In this conversation with Before They Graduate, Blossom opens up about growing up in a family of professors, entering university at 15, failing ICAN, learning to manage an unusually demanding life, falling in love before final year, and redefining what success means to her.",
    "This is not just a story about being ahead. It is a story about what it takes to keep going, what failure can teach you, and why your life must mean more than the achievements people see."
  ],

  qa: [
    {
      heading: "The family behind the journey",
      q: "Before we talk about your achievements, who is Blossom, and where does your story begin?",
      a: [
        "My name is Blossom. I'm from Ondo State. My mum is from Akure, and my dad is from Akoko.",
        "I'm a first-class Economics graduate, and I'm also a chartered accountant. I finished all my accounting exams at 18. I interned at KPMG and Credit Direct, led Zoe Foundation, and built and led Wildfire Movement while I was in school.",
        "I'm also a pastor. Beyond all of that, I'm a very funny person. I'm just a fun person who likes to enjoy life."
      ],
      reaction:
        "The list of achievements is impressive, but Blossom is clear that she is more than her academic record."
    },
    {
      q: "Both your parents are professors. What was growing up in that kind of home like?",
      a: [
        "My parents did their best for us. We went to good schools, and we always had lesson teachers from primary school to secondary school.",
        "But there was never pressure of 'this is what you must study' or 'this is what you must do.' My parents allowed us to express ourselves.",
        "My elder brother studied computer engineering, but he's also an artist and takes his art seriously. My parents allowed us to explore other parts of our lives while still encouraging us to do our best academically."
      ],
      reaction:
        "Her parents provided educational support without insisting that all their children follow the same path."
    },
    {
      q: "Did the freedom your parents gave you ever become pressure of its own?",
      a: [
        "True. I think that's correct, actually. The pressure for me was coming from the fact that these people allowed me to do other things.",
        "I was running a community, running a foundation, running a mission. I cannot become a pastor and be failing in school. My parents are professors working in this same school, and I have their reputation to keep.",
        "They weren't saying I must do all these things, but I wanted them to know they hadn't made a mistake by allowing me. I wanted to show that I could handle the responsibilities I had taken on."
      ],
      pull:
        "“I wanted them to know they did not make a mistake by allowing me.”"
    },
    {
      q: "How did your family handle differences in achievement between you and your siblings?",
      a: [
        "We all have our personal ambitions in this house, and everybody is just focused on what they want to do while supporting one another.",
        "There's no bad energy in my house at all. There's no way anybody feels like one person is doing better than another. There's no pressure. I think my parents also play a large role in that."
      ],
      reaction:
        "For Blossom, family support means having room to pursue different ambitions without turning life into a competition."
    },

    {
      heading: " The girl who started early",
      q: "What were you like as a child?",
      a: [
        "I was one of those children who are old in a child's body. At age six or seven, I was already trying to be a mommy, taking care of my younger sibling and wanting to cook for her.",
        "Everybody liked cartoons. You know what I liked? Yoruba mommy-and-daddy movies. I would watch them so that I could learn how to be a mommy.",
        "I didn't like toys. I loved acting mommy and daddy and taking care of children. But now I'm even more playful than I was when I was a child."
      ],
      reaction:
        "Her childhood interests were different from those of many children around her, and she still sees herself as someone with a playful side."
    },
    {
      q: "You gained admission at 14 and entered university at 15. What was that transition like?",
      a: [
        "I got admission at 14. I entered at 15 because there was a strike, so I graduated later than I should have.",
        "I graduated with my elder brother. We convocated together, and he was 21."
      ],
      reaction:
        "Starting university so young shaped her experience, but she would later learn that being young could bring both opportunities and challenges."
    },
    {
      q: "Did your early achievements create competition or pressure within your family?",
      a: [
        "I don't think so. My elder brother doesn't really care, and my younger sister doesn't really care. We all have our personal ambitions, and everybody is focused on what they want to do while supporting one another.",
        "There's no pressure. I think my parents also play a large role in that. They don't pressure us."
      ]
    },
    {
      q: "How did you begin your ICAN journey while you were still in secondary school?",
      a: [
        "I started my ICAN when I was in SS3. In SS2, I had written my external exams and done well, so SS3 just felt like, what's even the point? Let me find something else to do.",
        "I found out about ICAN and saw that I could do a professional exam. Since I was already doing ICAN, I thought it was better to study Economics instead of Accounting so that I wouldn't have the same courses twice or the same cost."
      ],
      reaction:
        "She began pursuing a professional qualification before entering university, setting herself on a demanding path early."
    },

    {
      heading: " The failure behind the success",
      q: "Your plan was to become a chartered accountant at 17. What happened?",
      a: [
        "Out of my five stages, I only failed one stage, and when I retook it, I passed.",
        "My initial plan was to be chartered at 17, not 18, but that one failure slowed me down. In ICAN, if you fail a paper, it's like an extra six months added to your ICAN journey.",
        "Even by the time I wrote my final exams, I was actually still 17. It was when the results came out that I had clocked 18. So that's how my plan failed. But it was all good."
      ],
      pull: "“ICAN can humble the smartest people.”"
    },
    {
      q: "What did failing ICAN feel like at the time?",
      a: [
        "It was my first academic failure in the whole of university. I was like, 'God, this cannot be my result.' I checked my result on five other people's phones. I was like, 'No, there has to be a mix-up somewhere.'",
        "I cried every single day. I said, 'Oh my God, I'm not smart. I don't know books. How did this happen? What did I do wrong?'",
        "My second-semester results came out, and they were the opposite of what I had in the first semester. My CGPA dropped a lot. At that period of my life, I was like, what am I supposed to start from?"
      ],
      reaction:
        "The failure affected more than her professional timeline. It challenged the way she saw herself as a student."
    },
    {
      q: "How did you find the strength to try again?",
      a: [
        "After crying, I wiped my tears, I spoke to God about it, and I went again.",
        "It was very hard rereading courses you've already taken. Every time I opened the books to read again, I'd be like, 'But I read this thing,' and I would just start crying. But I continued.",
        "I would cry with God, and I would go again, because I needed to do my before and after. What's the point of staying down and not going again? There's literally no point."
      ],
      pull: "“Failure is always part of the story.”"
    },
    {
      q: "Looking back, how did that failure change you?",
      a: [
        "Now I'm so glad I failed. Failure taught me a lot. I thought I wasn't going to be able to survive it, but now I'm no longer scared to fail.",
        "It made me learn a lot. It made me stronger. It made me braver. Now I can take on bold opportunities and not be scared about it, even though I might fail.",
        "Sometimes, to not be scared of things, you have to face them."
      ],
      reaction:
        "The experience did not erase the disappointment, but it changed her relationship with failure. She learned that a setback did not have to become her identity."
    },
    {
      q: "Would you do anything differently if you could return to your 200 level?",
      a: [
        "Maybe in my 200 level I would have put less workload on myself. I was doing so much in 200 level. That was the year I also failed ICAN, and I was in too much school work.",
        "I would have told myself to reduce what I was doing and focus on a few things instead of doing everything at once."
      ],
      reaction:
        "Her reflection is not simply about working harder. It is also about recognising limits and choosing where to put her energy."
    },

    {
      heading: "The cost of doing so much",
      q: "What did a typical week look like while you were balancing school, ICAN, ministry and the foundation?",
      a: [
        "It's crazy. I don't think anybody wants to live my life. There were some weeks I was running like a machine.",
        "I could go four weeks on a marathon of being busy, running everything, but I knew I would spend one week being sick after. I've landed in the hospital a number of times.",
        "My life was always very chaotic. There were definitely times I would get overwhelmed, block out everything, and go again the next day."
      ]
    },
    {
      q: "How did you organise your time when so many people needed you?",
      a: [
        "One thing I always did was set structures for my day. I would literally plan my whole day minute by minute. I knew what I was doing every minute, and I prioritised by season.",
        "In my final year, I started reading from the first day of class. Whatever the teacher taught on the first day, I would read it before the next class.",
        "I realised I didn't particularly have the time every other person had. So I accepted the truth about myself: 'Okay, I'm busier than everybody. Fine. Accept it. Now work with that.'"
      ],
      pull:
        "“What kept me going on top of all this was my goals, God and structure.”"
    },
    {
      q: "Did you ever feel you were missing out on the usual university experience?",
      a: [
        "There are seasons. In exam period, I don't take nonsense. Even people saying they want to see me about one life issue or the other, I would tell them, 'I'm reading, come back later.'",
        "There are also seasons that are more lenient, because, having been reading since the beginning of the semester, maybe in the middle of the semester I can say, 'Oh, I can go out. I can see people. I can have a little fun. I can relax.'",
        "I won't feel like I'm missing out, because I know I'm doing it for my future."
      ]
    },
    {
      q: "What did carrying so many responsibilities teach you about ambition?",
      a: [
        "I think it's the motive. What's my motive? Why do I want to do what I'm about to do right now?",
        "Is it just because I want to get better at my work and know more, or is it because I'm trying to compare myself with other people and feeling left behind? The motive is what lets me know whether I'm being ambitious or just putting pressure on myself."
      ],
      reaction:
        "For Blossom, ambition becomes unhealthy when it is driven by comparison rather than a genuine desire to grow."
    },

    {
      heading: "5. Love, timing and her mother's comment",
      q: "Did you fall in love while you were in university?",
      a: [
        "Oh yes, I did. And I feel like it was one of the things that even helped me. I believe love is beautiful.",
        "I fell in love in July, at the end of my 300 level, when I was about to enter final year. I was still writing ICAN then, my professional papers. I'm glad I did.",
        "He's a nice guy, and he has supported me all the way till now. He helped me pass my exams, because he would get me nice things, support me, encourage me, encourage me, encourage me."
      ],
      pull: "“I believe love is beautiful.”"
    },
    {
      q: "How did being in a relationship fit into a life that was already so busy?",
      a: [
        "I feel like it was one of the things that even helped me. He supported me and encouraged me while I was still writing my professional papers.",
        "So I think love is even one of the things that help."
      ],
      reaction:
        "In Blossom's account, her relationship was a source of support during a demanding period rather than something she described only as a distraction."
    },
    {
      q: "You mentioned that your mother used to comment on dating during university. What did she say?",
      a: [
        "My mom used to say, 'Four years in school, zero man? It's not good.'"
      ],
      reaction:
        "It is a memorable line from the interview. Blossom shared it while explaining her own experience of falling in love near the end of university."
    },
    {
      q: "Did your parents set rules about dating, or make a decision about when you could be in a relationship?",
      a: [
        "The interview records Blossom's comment about her mother's view, but it does not establish whether her parents set a formal rule, gave permission, or made a specific decision about her relationship."
      ],
      editorialNote:
        "Follow up with Blossom before publishing an answer to this question. Do not present a parental rule or approval as fact without her confirmation."
    },
    {
      q: "What would you say to students who are wondering whether they should date while in university?",
      a: [
        "I don't advise it in the early years, but if you're almost graduating or entering final year, it's not a bad thing to consider."
      ],
      reaction:
        "That is Blossom's personal view from her own experience, not a rule that every student needs to follow."
    },

    {
      heading: "The work and purpose beyond her degree",
      q: "What did Zoe Foundation do while you were in school?",
      a: [
        "I led a foundation called Zoe Foundation. While in school, I built and led the foundation. We helped students who were in need during test and exam seasons. We gave them money and foodstuff, basically money, when they needed it."
      ],
      reaction:
        "Alongside her own studies, she created space to help other students facing financial need during demanding academic periods."
    },
    {
      q: "You also built and led Wildfire Movement. How does ministry fit into your life?",
      a: [
        "I'm also a pastor. I built and led a ministry while in school called Wildfire Movement. It clocked two years in September at the time of the interview.",
        "I think knowing God at an early age really influenced my life decisions. There's a sense of purpose that knowing God came with. God is the greatest influence of my life, honestly."
      ]
    },
    {
      q: "What role did faith play when things did not go according to plan?",
      a: [
        "I just know that I can't give up. God was always there rooting for me: 'Okay, girl, you have to go again. This is the goal. You have not reached where you are going.'",
        "What kept me going was my goals, God and structure."
      ]
    },
    {
      q: "How did you discover internships and other opportunities?",
      a: [
        "For internships, I had to find those myself. I realised there were a lot of opportunities people were missing out on because they did not have information.",
        "I found friends who were interested in what I was interested in. When I went for the internship at KPMG, I went with two of my friends. Only three of us were from our university, and all three of us applied: me, Zanab and Josephine.",
        "We joined WhatsApp groups that sent links for scholarships and internships. I joined a lot, so whenever I saw any opportunity, I just applied."
      ],
      reaction:
        "Her experience highlights the value of information, peer networks and applying consistently rather than waiting for opportunities to arrive."
    },
    {
      q: "What would you advise a student who has no connections or anyone to guide them?",
      a: [
        "They should start by applying for internships and scholarships. That's it. And they should focus on getting a good CGPA.",
        "For someone who doesn't have any connections, still apply to internships and scholarships by yourself. You don't need connections for that."
      ]
    },
    {
      q: "How important were your friends during university?",
      a: [
        "We are four girls, and the four of us led our department till we graduated: Toby, Zanab, me and Aobi.",
        "We have our group. We have our meetings. When one person is down, everybody shows up for that one person. When one person is not able to read, everybody shows up for that one person and helps put the book in their head.",
        "We're always talking, always sharing information. From my OG team, we always support one another, so it's very important."
      ],
      reaction:
        "Her journey was not a solo achievement. Friendship brought encouragement, accountability and shared access to opportunities."
    },

    {
      heading: " The person people do not always see",
      q: "Do people sometimes see your achievements before they see you as a person?",
      a: [
        "Yes, very normal, and I'm already used to it. Everybody just sees my achievements and what I do, and also the fact that, 'Oh, woman of God.' Many people don't know me, me.",
        "But I have friends who see me for me, so that's totally fine."
      ]
    },
    {
      q: "What is something people might not expect about you?",
      a: [
        "That I'm hilarious. I'm so funny. I'm just a girl who wants to play most of the time, and I don't take life seriously.",
        "Every single thing has to be funny. I feel like Nigeria has already had enough, so why should we be holding things to our chest? Let's just laugh about everything."
      ]
    },
    {
      q: "Has being young ever made people underestimate you?",
      a: [
        "A lot of people don't believe my age. A lot. Even when I was younger, people didn't believe me.",
        "People sometimes look at you in a weird way, overlook the things you say, or don't take you seriously. People just think, 'Oh, you're young. What are you saying?'"
      ],
      reaction:
        "Being young helped her reach milestones early, but it also meant having to deal with people who questioned her age or took her less seriously."
    },
    {
      q: "How do you deal with criticism and the pressure to keep achieving?",
      a: [
        "There's definitely pressure from every side, every angle. Everybody has advice about what I should do next.",
        "But I don't live in pressure. I live in the will of God for my life. I've learned to block out the noise. At the end of the day, they can only advise me. They can't live my life for me."
      ]
    },
    {
      q: "You have also talked about an interest in acting and filmmaking. Where did that come from?",
      a: [
        "I remember that when I was younger I used to watch Yoruba mommy-and-daddy movies a lot, and I used to act every single day.",
        "I entered a creative competition in my 300 level by mistake. I was doing spoken word, but I was also acting it out by myself. I kept thinking I would drop out because I entered by mistake, but I never dropped.",
        "I realised I was good at it. I can think of stories, write scripts and act. It's something I'm really interested in, and I believe I'll venture into it very soon."
      ],

    video: {
    youtubeId: "s7CZ1pDf6Jk",
    title: "Blossom talks about her love for acting",
},
    },

    {
      heading: " What success means now",
      q: "Has achieving so much changed how you define success?",
      a: [
        "The more certificates I gather, the more I realise that life is not really about certificates. They are great, but it is so fickle. Everybody celebrates you today, and tomorrow everybody has forgotten about it.",
        "Success is not just about achieving certificates. It's about doing what God would have me do. So it's both of them. It's balance."
      ],
      pull:
        "“Success is not just about achieving certificates. It's about doing what God would have me do.”"
    },
    {
      q: "How do you know when you're being ambitious and when you're putting unnecessary pressure on yourself?",
      a: [
        "What's my motive? Why do I want to do what I'm about to do right now?",
        "Is it just because I want to get better at my work and know more, or is it because I'm trying to compare myself with other people and feeling left behind?"
      ]
    },
    {
      q: "What would you tell someone who feels behind because other people their age seem to be achieving more?",
      a: [
        "Everybody's journey is different. You're not me. I'm not you either.",
        "If at 18 you're just getting admission, that's great. You just work on being the best and doing what you're supposed to do well.",
        "Don't compare yourself with anybody. You can trust God with your life. Trust God for favour, for speed, for grace, for mercy."
      ],
      pull: "“Everybody's journey is different.”"
    },
    {
      q: "What would you tell your younger self?",
      a: [
        "I would first tell her how great a woman she was going to become. I would tell her to never look down on herself, to never give up on God, and to always keep going no matter what."
      ],
      pull:
        "“Never look down on yourself, never give up on God, and always keep going.”"
    }
  ],

  takeawaysHeading: "What Blossom's journey reminds us",
  takeaways: [
    "A supportive family can encourage ambition without forcing everyone to follow the same path.",
    "A failure can delay a plan without ending the journey.",
    "Doing too much has a cost. Focus and rest matter alongside ambition.",
    "A supportive relationship can be part of someone's journey, but timing and personal circumstances differ.",
    "Information, networks and consistent applications can help students find opportunities.",
    "Friendship is powerful when people genuinely show up for one another.",
    "Achievements are part of a person's story, not the whole story.",
    "Your timeline does not have to look like anybody else's."
  ],

  takeawaysPull: "“Everybody's journey is different.”",

  outro: [
    "Blossom's story is full of milestones, but the most revealing moments are not only the ones that went according to plan. They are the moments she cried over an exam, reconsidered the workload she had placed on herself, accepted support from friends, and learned that one failure did not have to define her.",
    "Her story also reminds us that there is a person behind every achievement: someone with a family, friendships, love, faith, interests and ambitions that may not fit neatly into a CV.",
    "For students still finding their way, her message is simple: stop measuring your life against someone else's timeline. Keep doing your work, build the right structures, ask for help when you need it, and keep going."
  ]
},

  {
    slug: "oluwapelumi-aikomo",
    number: "04",
    format: "interview",
    interviewee: "Oluwapelumi Aikomo",

    // Keep these two values if you already have different ones in your
    // existing Story 04 setup.
    href: "/stories/oluwapelumi-aikomo",
    builderSlug: "oluwapelumi-aikomo",
    contributorSlug: "Ayinde Abdulsobur",

    tag: "BTG Full Interview · Surveying & Geoinformatics",

    title: "The Long Road: The Full Story of Oluwapelumi Aikomo",

    subtitle:
      "Surveying, setbacks, loss, leadership, research, faith and the journey behind the graduate",

    excerpt:
      "Oluwapelumi Aikomo's journey into surveying was not exactly the plan. From wanting to study architecture to finding herself at the Federal School of Surveying, moving from ND to a BSc through Direct Entry, surviving surgery, losing people she loved, presenting research internationally and leading students, her university journey was shaped by uncertainty, resilience, people and opportunity.",

    image: "/assets/stories/pelumi.jpg",
    imageAlt: "Oluwapelumi Aikomo",

    heroQuote: "Always make sure you learn, unlearn and relearn.",

    shareText:
      "Read Oluwapelumi Aikomo's story on Before They Graduate",

    footerNote:
      "Story 04 · The Archive · Before They Graduate",

    intro: [
      "Oluwapelumi Aikomo's journey through higher education did not begin with a perfectly planned career path. She once wanted to study architecture, but family circumstances redirected her towards surveying. What began as a course of study she was not initially excited about eventually became a field through which she discovered research, leadership, international opportunities and more about herself.",

      "Her journey took her from the Federal School of Surveying to Ajayi Crowther University, where she entered at 200 level through Direct Entry. The transition was not easy. She had to adjust to a new environment and different approaches to computation while carrying the weight of a demanding academic programme.",

      "There were also moments that had nothing to do with grades. In 300 level, she underwent surgery and returned to school just days later because examinations were approaching. In 500 level, she experienced the loss of her aunt and later lost a close friend from the Federal School of Surveying. At the same time, she was preparing for FIG, completing her project and trying to finish her degree.",

      "Yet the story is not only about surviving difficult seasons. It is also about the opportunities that came afterwards: presenting research, travelling for an international conference, meeting people from different countries, discovering what surveying means beyond measuring land, taking on student leadership and learning how to make opportunities work for her.",

      "This is Oluwapelumi's story in her own words — a story about changing direction, surviving difficult seasons, learning from rejection, finding support and continuing to move forward."
    ],

    qa: [
      {
        heading: " Meet Oluwapelumi",

        q: "Before we get into everything that happened, who is Oluwapelumi Aikomo?",

        a: [
          "I'm a graduate. I studied Surveying and Geoinformatics.",

          "I'm interested in research and writing content. I'm not really into video."
        ],

        reaction:
          "A simple introduction, but there is much more behind the person and the degree."
      },

      {
        heading: " The career she originally wanted",

        q: "When you were younger, what did you originally want to become?",

        a: [
          "I wanted to study architecture.",

          "But my mother didn't really support the idea. I eventually got admission into LAUTECH to study Urban and Regional Planning.",

          "But my family redirected me towards the Federal School of Surveying because I liked technical drawing.",

          "That was actually how I started getting introduced to surveying."
        ],

        reaction:
          "Architecture was the original plan. Surveying was the direction life eventually pushed her towards."
      },

      {
        q: "How did you actually discover surveying at the Federal School of Surveying?",

        a: [
          "I learned more about surveying from a woman at the Federal School of Surveying.",

          "At first, I didn't really like the school because the campus was small. I was still thinking about architecture.",

          "But I stayed. Eventually, I became more comfortable with surveying and continued with it."
        ],

        pull:
          "“I liked technical drawing, but I eventually realised surveying was what I preferred.”"
      },

      {
        heading: " The ND that took longer than expected",

        q: "What was your experience at the Federal School of Surveying like?",

        a: [
          "My ND was supposed to take two years, but it ended up taking three years because of the strike.",

          "After finishing there, I continued my education by starting a BSc at Ajayi Crowther University in 2022 through Direct Entry at 200 level."
        ],

        reaction:
          "The route was longer than expected, but it eventually opened the door to a second university experience."
      },

      {
        q: "What was it like moving from the Federal School of Surveying into university at 200 level?",

        a: [
          "200 level was very tough.",

          "I was entering a completely new environment and some of the computation was different from what I had already learnt at the Federal School of Surveying.",

          "I had to reach out to people and ask for help. I remember reaching out to friends, including Stella Bolu.",

          "I started with a 4-point CGPA, and that encouraged me because it showed me that I could actually do well in the new environment."
        ],

        pull:
          "“I started with a four point, and that encouraged me.”"
      },

      {
        heading: " 300 level — when school continued despite surgery",

        q: "You went through surgery during your university journey. What happened?",

        a: [
          "I had surgery in 300 level.",

          "I returned to school on a Friday after having surgery earlier that same week because examinations were starting.",

          "It was not something I could simply pause school for. I had to return and continue."
        ],

        reaction:
          "That was one of those moments where university life did not wait for you to recover."
      },

      {
        q: "What helped you get through that period?",

        a: [
          "My roommates supported me.",

          "The department and faculty also supported me.",

          "There was a particular friend who would walk me from class back to the hostel. Other people also helped me with food.",

          "Those things mattered because I was dealing with recovery while still trying to keep up with school."
        ],

        reaction:
          "Some of the most important parts of university life are the people who show up when things become difficult."
      },

      {
        heading: "400 level — research, conference and new opportunities",

        q: "What changed when you got to 400 level?",

        a: [
          "I was excited about getting an internship.",

          "I also attended my first conference in Enugu and had my first experience presenting a research paper.",

          "People like Peter Jola and Clementina supported me through that period."
        ],

        reaction:
          "By 400 level, the story was becoming bigger than simply passing courses."
      },

      {
        q: "What did those opportunities mean to you?",

        a: [
          "They exposed me to a different side of surveying and research.",

          "It was my first conference experience and my first time presenting research in that kind of environment.",

          "It made me realise that there were opportunities outside the normal classroom experience."
        ]
      },

      {
        heading: " 500 level — the hardest chapter",

        q: "You described 500 level as the toughest part of your university journey. Why?",

        a: [
          "500 level was really tough.",

          "I had planned to attend FIG and I also wanted a research topic that would not make the final year unnecessarily stressful.",

          "Then, in December, I lost my aunt while I was preparing for examinations.",

          "In the second semester, I also lost a very close friend from the Federal School of Surveying who was studying at Ajayi Crowther University with me.",

          "He was my classmate and reading partner, and we were very close. Losing him affected me deeply."
        ],

        pull:
          "“Education became a very toxic relationship for me.”"
      },

      {
        q: "What made that period even harder?",

        a: [
          "At the same time, I was dealing with FIG, the application and grant process, travel preparations, final examinations and my project.",

          "There were so many things happening at once.",

          "I had even taken books with me to South Africa, but I didn't really read them because I was focused on preparing for my presentation.",

          "When I returned, I defended my project within days. My examinations were the following week.",

          "It was a lot to handle at once."
        ],

        reaction:
          "This was not simply a demanding academic semester. It was grief, travel, research, project work and examinations happening almost together."
      },

      {
        q: "After everything you went through in 500 level, how did you finally finish?",

        a: [
          "I returned and defended my project within days.",

          "Then I had my examinations the following week.",

          "Eventually, I got a meaningful CGPA, and I was grateful to my department for everything."
        ],

        reaction:
          "She did not describe the ending as perfect. She described it as something she was grateful to have survived."
      },

      {
        heading: " Why she ended up liking surveying",

        q: "Looking back, do you think surveying was the wrong choice compared with architecture?",

        a: [
          "My mother probably understood my personality better than I did at the time.",

          "Architecture looked like a very creative field, and I didn't think I was creative. My sister is the creative one.",

          "I liked technical drawing, but looking back now, I think I actually preferred surveying."
        ],

        pull:
          "“I liked technical drawing, but I preferred surveying.”"
      },

      {
        q: "What does surveying mean to you now?",

        a: [
          "Surveying is more than just measuring land.",

          "I see it as something connected to the earth generally, including areas like public health, space and land management.",

          "The more I learnt about the profession, the more I realised how broad it actually is."
        ],

        reaction:
          "Her understanding of surveying expanded far beyond the traditional idea of simply measuring land."
      },

      {
        heading: " FIG and seeing surveying from another perspective",

        q: "What stood out to you about FIG?",

        a: [
          "FIG exposed me to an international conference environment.",

          "There were breakout rooms, working groups and conversations around research.",

          "I met people from different institutions and different nationalities.",

          "I also learnt that surveying is not exactly the same everywhere. Different countries and institutions approach parts of the profession differently."
        ]
      },

      {
        q: "What was it like meeting surveyors and students from other countries?",

        a: [
          "I met a lady from South Africa who was studying mining surveying.",

          "I also met people from places like Zimbabwe and people from different institutions.",

          "It was interesting seeing how broad the surveying profession is and how many different directions people can take within it."
        ],

        reaction:
          "The conference turned surveying from a university course into something much larger and more international."
      },

      {
        heading: " Rejection and finally getting the FIG opportunity",

        q: "Have you experienced rejection during your journey?",

        a: [
          "I applied for FIG mentorship opportunities several times.",

          "I applied around 2023, 2024 and 2025, and there were times I kept getting rejected.",

          "Eventually, I stopped applying for a while."
        ],

        reaction:
          "Sometimes rejection doesn't just hurt once. Repeated rejection can make you stop trying."
      },

      {
        q: "What was it like when your FIG presentation was finally accepted?",

        a: [
          "I had a feeling that something good had happened.",

          "Before opening the email, I was shaking.",

          "When I finally saw the acceptance, I cried because I was so happy.",

          "I thanked God."
        ],

        pull:
          "“I was shaking before I opened the email.”"
      },

      {
        heading: " What university taught her beyond academics",

        q: "Apart from academics, what has surveying and university taught you about yourself?",

        a: [
          "Surveying helped me meet people.",

          "It helped me discover myself and also discover opportunities I didn't know existed.",

          "The people I met and the experiences I had helped me understand more about what I could do."
        ]
      },

      {
        q: "If you could advise yourself before entering university, what would you say?",

        a: [
          "Study hard.",

          "You can start with a four point, and you should aim for a first class if that's what you want.",

          "But don't become too comfortable with your current position."
        ],

        pull:
          "“Don't be too comfortable.”"
      },

      {
        q: "You started strongly academically, but you didn't finish with the exact outcome you initially wanted. How do you see that now?",

        a: [
          "I started with a four point, but I didn't finish with a first class.",

          "For me, that is part of the journey. It taught me not to become too comfortable and to keep working."
        ]
      },

      {
        heading: "How she balances academics, politics and everything else",

        q: "How did you manage academics while also being involved in politics, social media and other things?",

        a: [
          "I do academics, politics, social media and other things.",

          "I discovered that I don't necessarily need hours and hours before I can focus. Sometimes ten minutes of serious reading can work for me.",

          "Ten to twenty minutes of focused reading can be enough for me to understand or retain something.",

          "I also post about GIS because it helps me retain some of what I have learnt academically."
        ],

        reaction:
          "Her approach was not about pretending she had unlimited time. It was about finding a system that worked for her."
      },

      {
        q: "What role does your phone and social media play in your life?",

        a: [
          "I'm always on my phone and generally available.",

          "Social media has also become a way for me to share what I am learning, especially things around GIS."
        ]
      },

      {
        heading: "Money, private university and opportunity",

        q: "How much did money affect your university experience?",

        a: [
          "Private university costs millions of naira, so money is obviously part of the experience.",

          "Food was one of the main things that money went towards.",

          "My parents and other people also supported me, especially when opportunities like conferences required additional money."
        ],

        reaction:
          "Academic opportunities are not always only about qualification. Sometimes there is a financial barrier attached to simply being able to attend."
      },

      {
        heading: "The uncertainty that started long before university",

        q: "Did you always see yourself as a brilliant student?",

        a: [
          "No. As a child, I wasn't the child everyone considered particularly bright.",

          "At one point, my parents were even asked to allow me to repeat a primary school class, but my father refused."
        ]
      },

      {
        q: "What was secondary school and WAEC like for you?",

        a: [
          "WAEC came with a lot of anxiety.",

          "I prayed that I would not be the first person in my family to have to write it twice."
        ]
      },

      {
        q: "Did your family have a particular career path they wanted for you?",

        a: [
          "My parents wanted me to go into the commercial class and study something like accounting.",

          "My grandmother told me to pray about whether I should go towards science or accounting.",

          "I believed God was telling me I should become an architect."
        ],

        reaction:
          "Ironically, architecture did not happen — and surveying became the path she eventually embraced."
      },

      {
        q: "Was there already an architecture connection in your family?",

        a: [
          "My grandfather, who was actually my mother's cousin but whom we called grandpa, was an architect.",

          "My grandmother studied civil engineering.",

          "My grandfather even gave me an architectural table."
        ]
      },

      {
        heading: " Leadership and the pressure that comes with it",

        q: "You also took on leadership responsibilities. What was that experience like?",

        a: [
          "I didn't really experience discrimination because I was a woman.",

          "But student leadership, especially Southwest coordination, was stressful.",

          "There were times I considered giving up.",

          "People could send messages at 3 a.m. You had to keep your data on and remain available.",

          "You also had to learn how to control your emotions because people were always coming to you with different issues."
        ],

        reaction:
          "Leadership taught her that being responsible for people can demand a different kind of emotional discipline."
      },

      {
        heading: "15. The question she answered very quickly",

        q: "And what about love in university?",

        a: [
          "No, there's no love in that school.",

          "Don't even bother looking for it."
        ],

        reaction:
          "That answer did not need much explanation."
      },

      {
        heading: " The advice she wishes students would hear earlier",

        q: "What advice would you give students who are still in university?",

        a: [
          "Don't be shy.",

          "Start being vocal on social media early.",

          "Don't care too much about what people are going to say about you. Be yourself and be authentic.",

          "Keep trying even after rejection. I'm still trying things myself."
        ]
      },

      {
        q: "What made you keep trying after people told you that you hadn't achieved the things you said you would?",

        a: [
          "Someone once told me that I hadn't achieved what I said I would achieve.",

          "But I kept going. I wrote a book and finished it.",

          "Sometimes you just have to keep working even when the people around you don't see the result yet."
        ],

        reaction:
          "The point was not that everything worked immediately. It was that she kept moving."
      },

      {
        q: "What should students do during school breaks if they are unsure about their career direction?",

        a: [
          "Use the breaks to explore different career options.",

          "Get experience in engineering projects or cadastral work.",

          "Try different areas of the profession instead of waiting until graduation before finding out what you actually like.",

          "There are areas I haven't tried myself, like hydrography, partly because I'm scared of water and I live in Ibadan."
        ]
      },

      {
        q: "How important is the kind of people you surround yourself with?",

        a: [
          "Surround yourself with the right people.",

          "You also need to understand the difference between a classmate and a friend.",

          "Your friends may be people who want scholarships, want to leave the country, want to create content or want to pursue different opportunities.",

          "The important thing is having people around you who are also trying to become better."
        ],

        pull:
          "“Know the difference between a classmate and a friend.”"
      },

      {
        heading: " Her final message",

        q: "If you could leave one message for students coming behind you, what would it be?",

        a: [
          "Always make sure you learn, unlearn and relearn."
        ],

        pull:
          "“Always make sure you learn, unlearn and relearn.”"
      },

      {
        q: "Is there anything else you are working on that people should look forward to?",

        a: [
          "I'm working on a book.",

          "It will be released as an ebook, and the link will be attached when it is available."
        ]
      }
    ],

    takeawaysHeading: "What Oluwapelumi's journey reminds us",

    takeaways: [
      "A career path does not always begin with certainty. Oluwapelumi wanted architecture, but surveying became the path she eventually embraced.",

      "Changing direction does not automatically mean choosing the wrong path. Sometimes the path you did not initially plan for becomes the one you eventually understand and appreciate.",

      "Academic success is not a straight line. Her journey included a strong start, difficult semesters, surgery, grief, examinations, research, project work and moments of uncertainty.",

      "Support matters. Friends, roommates, classmates, lecturers, departments and family members all played different roles at different points in her journey.",

      "Opportunities often require persistence. Her repeated FIG applications and eventual acceptance show that rejection does not necessarily mean the opportunity is not for you.",

      "International exposure can change how you understand your profession. FIG allowed her to see surveying through the experiences of people from different countries and institutions.",

      "Students should not wait until graduation before exploring their profession. Internships, engineering projects, cadastral work, research, conferences and other experiences can help reveal what direction actually fits.",

      "Leadership comes with a cost. Being available for people, handling messages at odd hours and suppressing emotional reactions can become part of the responsibility.",

      "Your university journey is not only about your CGPA. It is also about the people you meet, the opportunities you discover, the failures you survive and the person you become.",

      "The lesson she leaves behind is simple: keep learning, keep adjusting and keep growing."
    ],

    takeawaysPull: "“Always make sure you learn, unlearn and relearn.”",

    outro: [
      "Oluwapelumi's story is not a straight success story. It is a story of changing direction, struggling with transition, surviving difficult academic seasons, losing people she loved and still finding reasons to keep moving.",

      "She entered surveying through a path she did not originally choose. Years later, that same profession took her into research, conferences, international conversations and opportunities she could not have seen at the beginning.",

      "There were moments when things did not work out: the ND that took longer than expected, the difficult transition to university, surgery, grief, rejection and the pressure of finishing everything at once.",

      "But there were also people who showed up, opportunities that eventually opened, and experiences that helped her understand herself better.",

      "For students still trying to figure things out, perhaps the most important part of her story is that the path does not have to make perfect sense from the beginning.",

      "You can change direction. You can fail. You can be rejected. You can discover something new about yourself halfway through the journey.",

      "What matters is that you keep learning, unlearning and relearning.",

      "This is Oluwapelumi Aikomo's story.",

      "And this is Before They Graduate."
    ]
  },

  
{
  slug: "building-quant-while-in-university-malik",
  number: "05",
  format: "interview",
  interviewee: "Malik",
  href: "/stories/building-quant-while-in-university-malik",
  builderSlug: "malik",
  contributorSlug: "Ayinde Abdulsobur",
  tag: "BTG Full Interview · Lagos State University",
  title: "The Idea That Couldn't Sell Itself:How Malik on Building Quant While in University",
  subtitle: "Building a startup, finding the right people, and learning to make an idea visible",
  
  excerpt:
    "Malik is a 400-level Electronics and Computer Engineering student at LASU and a founder of Quant. He is not the technical person behind the product. Instead, he leads its brand design and product direction. We spoke about the student problem that inspired Quant, building with limited funds, managing a team, handling rejection, and why even a good idea needs someone willing to push it into the world.",
  meta: "Malik · Lagos State University",
  image: "/assets/stories/malik.jpg",
  imageAlt: "Malik, founder of Quant and undergraduate at Lagos State University",
  heroQuote: "A good idea will just sit there. It can't sell itself.",
  shareText: "Read Malik's story on Before They Graduate",
  footerNote: "Story 05 · The Archive · Before They Graduate",

  intro: [
    "Not every founder writes code. Not every person building a product is the one developing its technical features. Sometimes, the person helping to move an idea forward is the one thinking about how people experience it, how it is presented, and how to make it useful.",
    "Malik is a 400-level student of Electronics and Computer Engineering at Lagos State University (LASU), a freelance brand designer, and a co-founder of Quant.",
    "The idea behind Quant came from a problem he and his roommate experienced as students: getting academic information and learning materials often depended on knowing the right people and being comfortable enough to ask. They wanted to make that process easier.",
    "In this conversation, Malik talks about building a product without being its technical developer, working with a team of students, balancing university with a startup, and learning that having a good idea is only the beginning."
  ],

  qa: [
    {
      heading: "The problem that started Quant",
      pull: "“How can we solve this and make it simpler?”",
      q: "Let's start with you. Who is Malik, and what are you currently doing at university?",
      a: [
        "My name is Malik. I'm a 400-level student at Lagos State University (LASU), in the Department of Electronics and Computer Engineering."
      ],
      reaction: "And alongside engineering, you're building a startup. That's already a lot to carry."
    },
    {
      q: "Where did the idea for Quant come from? What problem were you trying to solve?",
      a: [
        "The whole idea started with me and my friend, my roommate, who is also a co-founder. We're both introverted, and talking to people was something we had in common.",
        "In our early university days, we had issues with talking to people and getting updates. It affected us academically. We started thinking about how we could get academic information and materials without always having to talk to somebody.",
        "We could get updates through WhatsApp, but getting materials was different. You either knew people or had to go and meet them.",
        "We also noticed that students struggled with monthly subscriptions and navigating different apps. So we thought about how to make the whole process simpler. That's why we started Quant."
      ],
      reaction: "So the idea came from a problem you had personally experienced, not just a random business idea."
    },
    {
      heading: "Not the technical founder",
      pull: "“I'm the brand designer, and I'm also the product manager.”",
      q: "You're building a technology product, but you mentioned that you're not the technical person. What exactly is your role?",
      a: [
        "I'm the brand designer, and I'm also the product manager.",
        "Even if I'm not technical, I still decide the flow of things, like student registration. I make decisions on how to make things easier because our goal is to help students get things faster.",
        "Apart from being a designer, I'm the product manager, so I make decisions about how the product should work. I'm also in charge of the brand design and most of the designs."
      ],
      reaction: "That's an important distinction. You don't have to be the person writing the code to have a meaningful role in building a product."
    },
    {
      q: "Before Quant, what were you doing, and how did those experiences prepare you for this?",
      a: [
        "Apart from Quant, I'm a designer. I'm a freelancer. Design is something I'm comfortable with.",
        "I've worked with different startups before Quant. Through those experiences, I've learned from some of their mistakes. Sometimes, I attended their stand-up meetings and listened to how things were done. I've been able to implement some of those processes."
      ],
      reaction: "So some of what you're applying now came from observing how other teams operated."
    },
    {
      heading: "From an idea to a public launch",
      pull: "“The whole concept is just to build fast and also make people know what you're doing.”",
      q: "You spoke about founders delaying things because they want everything to be perfect. What do you think they get wrong?",
      a: [
        "The mistake I feel founders make is trying to delay and perfect everything. The fact is that everything can't be perfect.",
        "When you're trying to get everything to 100%, another person may already be thinking about the same idea.",
        "When you build a presence, you're letting people know what you're building. People become familiar with it. Building in public can also make you want to build faster because people keep asking when you're going to launch.",
        "The whole concept is just to build fast and also make people know what you're doing."
      ],
      reaction: "There's a difference between preparing properly and using perfection as an excuse not to launch."
    },
    {
      q: "At the time of this conversation, Quant had recently launched. What was that experience like, and what kind of response had you received?",
      a: [
        "I'm not the technical person, but there have been many mistakes, bugs, complaints and comments. And that's just for the development part. There's still the marketing part, so it's a lot.",
        "We launched on Monday. At the time of this conversation, it had been about five to six days. We had over 500 early signups, and 200 students had started using it."
      ],
      reaction: "A launch is exciting, but the work clearly doesn't stop once people start signing up."
    },
    {
      q: "What has been more meaningful to you: seeing the number of signups or hearing from people who have actually used Quant?",
      a: [
        "You might see the 500 users, but for me, I count things from small.",
        "Once I do something and it's actually working, or I watch something and try it and it works, that's a big achievement for me.",
        "We launched Quant, people used it, and they gave us positive feedback. We also got some negative feedback, but that's more about making small changes.",
        "When people use it and it actually works, that's a lot to me. I think that's the biggest achievement."
      ],
      reaction: "That's a better way to look at early traction. Signups matter, but actual use tells you whether you're solving a problem."
    },
    {
      pull: "“The material is delivered immediately, without any friction.”",
      q: "Have you received feedback that showed you the product was genuinely helping someone?",
      a: [
        "Yes. There's somebody who is always reading ahead of class. He's my junior.",
        "He said he was surprised that when he asked for a material, it was delivered immediately, without any friction. He liked the fact that he could get it easily.",
        "That also made me understand that there's still more to how we can organise materials in one place and help students get things faster."
      ],
      reaction: "That's the kind of feedback that can help a product become better. It shows you what users value and what else they need."
    },
    {
      heading: "Building with people, not just money",
      q: "How have you managed the financial side of building Quant?",
      a: [
        "I believe that in terms of startups, people are more than money at times. When you have people, development becomes easier.",
        "The people I've worked with, volunteered with, and met through communities have contributed a lot to Quant. There are people who, even if they don't believe in my idea, will still want to help me because of the kind of help I've given them before.",
        "We had not spent any money on marketing at the time we got those early users. I still believe that with little or no money, you can build something, but you have to have the right people."
      ],
      reaction: "Money can make things easier, but your relationships and the trust you've built can also open doors."
    },
    {
      q: "What has building a team taught you about working with different people?",
      a: [
        "Being able to speak with your team is something people should consider. You're not the one who is going to build everything. There are people you have to talk to.",
        "Most of the people in my team, apart from my co-founder, are my seniors. I made some mistakes earlier while trying to relate with them. From those mistakes, I learned how to communicate better.",
        "For example, our CTO doesn't really like online meetings. I've noticed that he doesn't contribute much during meetings, so I take the minutes of what we discussed and send them to him. Sometimes, he sends a voice note explaining what he's done.",
        "You should know the people you're dealing with for who they are and try to adapt to them. You're the one who found them, so you still have to change your behaviour and learn how to relate with them."
      ],
      reaction: "That's a lesson many first-time founders learn late: managing people is not the same as managing tasks."
    },
    {
      heading: "The student behind the startup",
      q: "What has building Quant changed about your experience as an undergraduate?",
      a: [
        "Building Quant has improved me academically.",
        "When we started, I became more intentional. I used to be a very active gamer, but I stopped doing many of those things because I realised I needed to be intentional.",
        "I started planning myself. If I do this, I still have to read for this course. Building it has made me plan my daily routine better. Apart from school, I still have other engagements, so it has made me more intentional."
      ],
      reaction: "It sounds like the startup has also forced you to become more deliberate about how you use your time."
    },
    {
      q: "Have you ever felt that being shy or being a student made it harder to get people to believe in what you were building?",
      a: [
        "Before I started this, I was a very shy person. When I tried to explain things to people, they didn't really understand me.",
        "There's a way you pitch something to people, and they automatically believe your idea is nothing, or that it's not something they can use.",
        "I don't know if I wasn't able to pitch well or if they just didn't buy the idea, but I still believe in what I have in mind. There have been many rejections."
      ],
      reaction: "Not everyone will understand what you're trying to build at the beginning. But rejection should also make you examine how you're communicating the idea."
    },
    {
      q: "Do you think being a student has limited the growth of Quant?",
      a: [
        "I don't think so. As a student, I have more ways to increase Quant's publicity and make students know about it.",
        "I've volunteered in different associations in school, so I know people through those experiences.",
        "If I don't start now and wait until I graduate, I might not have the same opportunities for Quant's publicity and development that I have now."
      ],
      reaction: "That's a useful way to see university: not just as a place to study, but also as an environment where you can test ideas and meet people."
    },
    {
      heading: "What comes next",
      q: "If someone asked you to explain Quant to a ten-year-old, how would you describe it?",
      a: [
        "I'll say Quant is like a WhatsApp library, where you can just go inside and get any book you want, right in front of you."
      ],
      reaction: "A WhatsApp library. Simple enough to understand."
    },
    {
      pull: "“A good idea will just sit there. It can't sell itself.”",
      q: "What's one belief about building a business that you disagree with?",
      a: [
        "I believe many people think that a good idea will sell itself.",
        "No matter how good the idea is, no matter how strategic you think you are or how well you think it solves a problem, you still have to push it out.",
        "You have to let people know. You have to increase the publicity. A good idea will just sit there. It can't sell itself."
      ],
      reaction: "That might be one of the most important lessons from this conversation."
    },
    {
      q: "If you could start your undergraduate journey again, would you choose the same course?",
      a: [
        "No, I would have studied Computer Science. The stress engineering is giving me is a lot, though it's challenging me.",
        "I believe I'd connect with more technical people. I would also have started thinking of an idea to build around campus in 100 level.",
        "I feel that if I were a Computer Science student at LASU, I'd have more opportunities and more people to connect with."
      ],
      reaction: "It sounds less like rejecting engineering and more like recognising the kind of environment you think would have helped you build earlier."
    },
    {
      pull: "“There's nothing I cannot do once I put my mind to it.”",
      q: "What's a personal principle you try to live by?",
      a: [
        "I believe there's nothing I cannot do once I put my mind to it. I don't think there's something I cannot do, except if I'm not interested in it.",
        "Once I put my interest in it, there's nothing I cannot do, and I don't mind what people say about it. I'll try to do it."
      ],
      reaction: "Thank you for sharing your story, Malik."
    }
  ],

  takeawaysHeading: "A few things I took away from this conversation",
  takeaways: [
    "A founder does not have to be the technical person. Malik's role in Quant shows how product thinking, brand design and understanding the user can contribute to building a technology product.",
    "Some useful ideas begin with ordinary problems. Quant came from the difficulty Malik and his roommate experienced when trying to access academic information and materials.",
    "Building in public can help people become familiar with a product, create accountability and encourage a team to move towards launch. But visibility must be backed by a product that works.",
    "Early signups are encouraging, but actual use and honest feedback tell a founder much more about whether a product is helping people.",
    "A team is made up of different people with different working styles. Good leadership involves understanding those differences and adapting communication instead of expecting everyone to work the same way.",
    "Relationships can be valuable resources when money is limited. Malik's experience shows how volunteering, design work and community involvement helped him build a network.",
    "University does not have to be a waiting room before real work begins. It can be an environment to test ideas, meet collaborators and build something useful."
  ],
  takeawaysPull: "A good idea needs people willing to build it, communicate it and put it in front of the world.",

  outro: [
    "Malik's story is still unfolding. Quant is at an early stage, and there is no reason to pretend that a launch or a few hundred early users means the hard part is over. There are bugs to fix, feedback to understand, people to coordinate and a product that still has room to improve.",
    "What stood out to me was not simply that a student had started a company. It was how he had found a role in building something despite not being its technical developer, how he was learning to work with people, and how he was using the environment around him to move an idea forward.",
    "He also left us with a reminder worth taking seriously: having an idea is not the same as building something people know about and can use. You have to do the work, communicate it and keep improving it.",
    "This is Malik's story, and this is Before They Graduate."
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