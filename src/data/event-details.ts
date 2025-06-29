export interface EventDetail {
  id: string;
  title: string;
  description?: string;
  synopsis?: string;
  speakerBio?: string;
  agenda?: string[];
  who?: string;
  date?: string;
  time?: string;
  location?: string;
  tags?: string[];
  imageUrl?: string;
  meetingLink?: string;
  keyTakeaways?: string[];
  whoShouldJoin?: string;
  whatToExpect?: string;
}

// Event details extracted from markdown files
export const eventDetails: Record<string, EventDetail> = {
  "An honest account: Using AI in design research": {
    id: "an-honest-account-using-ai-in-design-research",
    title: "An honest account: Using AI in design research",
    who: "Serah Lee",
    date: "16/07/2025",
    time: "12:00 PM (GMT+8)",
    tags: ["12 PM", "🎙️ Talk", "💻 Online", "🔨 Build Craft"],
    meetingLink: "https://go.gov.sg/designfestival-talk12pm",
    location: "Online",
    synopsis: "AI is often framed as a magic wand that can help us work faster and better. Curious to see how AI could (or could not!) augment research work, I explored integrating it into my design research process. In this talk, I will share case studies of how I used AI in research prototyping and synthesis. Along with lessons learned, I hope this presentation helps you navigate your journey of creating an AI-assisted research workflow.",
    speakerBio: "Hello! I'm Serah. I'm passionate about using research to connect businesses and cross-functional teammates with the people we're designing for. Whenever possible, I explore new tools and approaches to make these connections stronger and more meaningful.\n\nI'm currently with GPE, on the Workpal Project."
  },
  "Behavioural Design: Where Behavioural Science Meets Creativity": {
    id: "behavioural-design-where-behavioural-science-meets-creativity",
    title: "Behavioural Design: Where Behavioural Science Meets Creativity",
    who: "MakeIt Lab",
    date: "28/07/2025",
    time: "9:00 AM (GMT+8)",
    tags: ["Course 📚", "In-Person", "🔨 Build Craft"],
    location: "MBC 30 L11 Jupiter Rooms 1+2",
    description: "Learn to design human-centered solutions using the Make It Toolkit through hands-on application of behavioral science principles. This workshop combines creativity with behavioral insights to influence real-world change in products, policies, and services."
  },
  "Closing Session": {
    id: "closing-session",
    title: "Closing Session",
    who: "Eyung, Shalom, Amanda, Joy",
    date: "31/07/2025",
    time: "2:30 PM (GMT+8)",
    tags: ["Get Swag", "Got Food! 🌮", "In-Person", "✳️ Keynote", "🎙️ Talk", "💜 Inclusive Design Week", "🔨 Build Craft"],
    location: "MBC 10 L10 The Big Place",
    description: "Impact by Design Panel Discussion",
    agenda: [
      "2.15pm - Registration @ MBC10 The Big Place",
      "2.30pm - Inclusive Design Week panel",
      "4.20pm - Closing",
      "4.30pm onwards - TGIT drinks and snacks and Design Arcade (optional) + collect your swag!"
    ]
  },
  "Creating a digital engagement platform for the ONE Changi Community": {
    id: "creating-a-digital-engagement-platform-for-the-one-changi-community",
    title: "Creating a digital engagement platform for the ONE Changi Community",
    who: "Brandon Tan",
    date: "10/07/2025",
    time: "12:00 PM (GMT+8)",
    tags: ["12 PM", "🎙️ Talk", "💻 Online", "🔨 Build Craft"],
    meetingLink: "https://go.gov.sg/designfestival-talk12pm",
    location: "Online",
    synopsis: "Ever wonder what it takes to truly connect a large community in the digital age?\n\nJoin us for an insightful session delving into the creation of a brand-new digital engagement platform for the ONE Changi Community. We'll explore the thinking behind this project, starting with a brief overview of our foundational principles: Quality Service Management (QSM) and Collaborative Design (CoDE).\n\nDiscover why ONE Changi 3.0 was initiated, the work involved in its development, and how we successfully co-created a user-centric platform.",
    speakerBio: "Hi I'm Brandon! I am part of a service design team, CoDE (Collaborative Design), that focuses on driving user research and implementing solutions alongside with Changi's partnered agencies."
  },
  "Ctrl + Alt + Design Workshop": {
    id: "ctrl-alt-design-workshop",
    title: "Ctrl + Alt + Design Workshop",
    who: "Design Festival Team",
    date: "04/07/2025",
    time: "2:00 PM (GMT+8)",
    tags: ["In-Person", "Workshop ⚒️"],
    location: "MBC 10 L10 The Big Place",
    description: "Resetting the future - together",
    synopsis: "In this interactive 2.5-hour workshop, we'll explore where design is heading and what it means for us as designers. Through storytelling, provocations, and co-creation, we'll reflect on how our roles are changing - and build a shared vision for the future of design in a rapidly evolving world.",
    whoShouldJoin: "Designers, design enthusiasts, and anyone passionate about shaping how we work, think, and create in the years to come. You don't need to be a UXD - just bring curiosity and imagination.",
    whatToExpect: "🕑 2.5 hours \n\n🙌🏼 In-person Workshop, Highly interactive",
    keyTakeaways: [
      "🌟 Reflect on how far we've come - and what challenges we still face",
      "🌟 Imagine what future-ready designers look like (skills, tools, mindsets)",
      "🌟 Make a personal pledge to shape the future of design"
    ]
  },
  "Data Storytelling": {
    id: "data-storytelling",
    title: "Data Storytelling",
    who: "Kontinentalist",
    date: "08/07/2025",
    time: "9:30 AM (GMT+8)",
    tags: ["Course 📚", "In-Person", "🔨 Build Craft"],
    location: "MBC 30 Jupiter Rooms 1+2",
    description: "In a world inundated with information and where data is priority, knowing how to handle and present it effectively and responsibly is vital. Kontinentalist will take you through the basics of data handling, storytelling, and visual design."
  },
  "Design Arcade (Lunch Provided!)": {
    id: "design-arcade-lunch-provided",
    title: "Design Arcade (Lunch Provided!)",
    date: "01/07/2025",
    time: "11:30 AM (GMT+8)",
    tags: ["Got Food! 🌮", "In-Person"],
    description: "A vibrant, gamified mixer that celebrates the spirit of design - and the people who make it happen. Wander through playful booths where you can express gratitude, share stories, spark fresh ideas, and most of all - have fun. Come with curiosity, leave with smiles (and maybe some swag)!",
    whoShouldJoin: "Design allies, creatives, collaborators, and anyone who's ever supported, shaped, or simply enjoyed the magic of good design. No design background needed - just bring good vibes.",
    whatToExpect: "🕹️ In-person, carnival-style experience\n\n🕑 2–2.5 hours\n\n🎪 Interactive booths, photo zones, and creative quests",
    keyTakeaways: [
      "🌟 Reflect on moments of creative triumph (and breakdown!)",
      "🌟 Co-create ideas, memories, and momentum as a community"
    ]
  },
  "Design Your Life": {
    id: "design-your-life",
    title: "Design Your Life",
    who: "Design Thinking Community",
    date: "11/07/2025",
    time: "2:00 PM (GMT+8)",
    tags: ["Got Food! 🌮", "In-Person", "Workshop ⚒️", "🌱 Build Self"],
    location: "MBC 10 L10 The Big Place",
    description: "Designing your life using Design Thinking",
    synopsis: "Learn practical design thinking tools to prototype different life paths and create a more fulfilling career for yourself through hands-on exercises and interactive activities.",
    whoShouldJoin: "Designers, design enthusiasts, and anyone passionate about shaping how we work, think, and create in the years to come. You don't need to be a UXD - just bring curiosity and imagination.",
    whatToExpect: "🕑 3 hours\n\n🙌🏼 In-person Workshop, Highly interactive",
    keyTakeaways: [
      "🌟 Reflect on what you desire in life",
      "🌟 Prototype different left paths and figure out your Best Theoretical Option and Best Doable Option for what you want in your career"
    ]
  },
  "Driving Product Strategy Through Research: From Paper Forms to Product Roadmap": {
    id: "driving-product-strategy-through-research-from-paper-forms-to-product-roadmap",
    title: "Driving Product Strategy Through Research: From Paper Forms to Product Roadmap",
    who: "Alicia Chong",
    date: "08/07/2025",
    time: "1:00 PM (GMT+8)",
    tags: ["1 PM", "🎙️ Talk", "💻 Online", "🔨 Build Craft"],
    meetingLink: "https://go.gov.sg/designfestival-talk1pm",
    location: "Online",
    synopsis: "\"How many paper forms are left in the Singapore government?\" \n\nTackling this broad and ambitious question, Alicia led a six-month, mixed-methods research project that shaped product strategy and direction on FormSG. She'll share how she designed the research approach, synthesised insights from diverse data sources, and guided the team through critical decisions. \n\nThis talk highlights how design-led research can be used to create clarity, drive alignment, influence the product roadmap, and deliver meaningful impact, while also shedding light on key lessons learned throughout the process.",
    speakerBio: "I'm a Product Designer who thrives on making good things better through thoughtful, intentional design that balances user needs with organisational goals. With strengths in analytical problem solving and cultivating clarity in ambiguity, I bridge research and design with product priorities to create actionable solutions that drive impact. \n\nOGP products I've worked on include RedeemSG, FormSG, and ERP X."
  },
  "Festival Opening (feat. DCE Sau Sheong & Shiao-Yin)": {
    id: "festival-opening-feat-dce-sau-sheong-shiao-yin",
    title: "Festival Opening (feat. DCE Sau Sheong & Shiao-Yin)",
    date: "01/07/2025",
    time: "10:30 AM (GMT+8) → 11:30 AM",
    tags: ["Get Swag", "In-Person", "✳️ Keynote", "🎙️ Talk"],
    location: "MBC 10 - Level 10 (The Big Place)",
    agenda: [
      "10.45am - Registration @ MBC 10 The Big Place",
      "11.00am - Keynote Presentation",
      "Impact Measurement - A Multiverse of Madness by Shiao-Yin Kuik",
      "12.30pm - Opening by DCE Sau Sheong",
      "12.45pm - Lunch and Design Arcade"
    ],
    synopsis: "Culture change strategist Shiao-Yin Kuik shares her insights about making and measuring impact through her team's work in running Common Ground Civic Centre, a 9-year-long partnership with MCCY and a community of purpose-driven organisations.\n\nDCE Sau Sheong shares about his vision for GovTech's Design practice and the design community's impact in public service.",
    description: "Learn. Play. Appreciate.\n\nA vibrant, gamified mixer that celebrates the spirit of design - and the people who make it happen. Wander through playful booths where you can express gratitude, share stories, spark fresh ideas, and most of all - have fun. Come with curiosity, leave with smiles (and maybe some swag)!"
  },
  "Find my center- how our body, emotions & language shape the observer we are": {
    id: "find-my-center--how-our-body-emotions--language-shape-the-observer-we-are",
    title: "Find my center- how our body, emotions & language shape the observer we are",
    who: "Sarah Xu",
    date: "17/07/2025",
    time: "12:00 PM (GMT+8)",
    tags: ["12 PM", "🌱 Build Self", "🎙️ Talk", "💻 Online"],
    meetingLink: "https://go.gov.sg/designfestival-talk12pm",
    location: "Online",
    synopsis: "This talk will be based on learning from Ontological coaching and the model of BEL (Body, Emotions, Language). Understanding the center of these elements and how they interact to shape the kind of observer we are is very helpful for us to expand our capacity to learn, understand others, build relationship s and achieve results.",
    speakerBio: "I am an Industrial/Organisational Psychologist currently in the role of Organisation Development Partner at GovTech supporting the organisation's transformation efforts.\n\nPrior to this, I spent 10+ years in People Analytics and some time in user experience for talent platforms in the private sector."
  },
  "Fireside chat: Why isn't empathy enough?": {
    id: "fireside-chat-why-isnt-empathy-enough",
    title: "Fireside chat: Why isn't empathy enough?",
    who: "MOS Jasmin, ACE Bernard",
    date: "03/07/2025",
    time: "11:30 AM (GMT+8)",
    tags: ["In-Person", "✳️ Keynote", "🎙️ Talk"],
    location: "MBC 10 - Level 10 (The Big Place)",
    agenda: [
      "11am - Registration @ MBC 10 The Big Place",
      "11.15am - Fireside chat: Why isn't empathy enough?",
      "12.30pm - Fireside chat ends"
    ],
    synopsis: "If public officers care deeply about users, why aren't our government service experiences the best they can be, and how can we change this from within? Join us for an intimate session with MOS Jasmin, who will speak candidly about the challenges and opportunities in building truly user-centric digital public services."
  },
  "Fireside Chat with 2PS and Lillian Shieh": {
    id: "fireside-chat-with-2ps-and-lillian-shieh",
    title: "Fireside Chat with 2PS and Lillian Shieh",
    who: "2PS Augustin and Lillian Shieh",
    date: "07/07/2025",
    time: "11:30 AM (GMT+8)",
    tags: ["In-Person", "✳️ Keynote", "🎙️ Talk"],
    location: "MBC 10 L10 The Big Place",
    synopsis: `Join us for a candid Fireside Chat between Augustin Lee, 2nd Permanent Secretary, MDDI, and Lillian Shieh, Head of Design Practice, GovTech, as they explore the role of design in shaping digital government services and outcomes.

In this conversation, we'll dig into:

- What assumptions do policymakers often make about user behaviour?
- Are we designing policies for the ideal citizen, or the real citizen with real constraints?
- How can frontline pain points and lived experiences be surfaced earlier in the policy cycle?
- What does "trust" look like in a digital service—beyond compliance and security?
- Can government really design for trust, dignity, and equity at scale?

This session is for anyone working at the intersection of policy, technology, and service design. It will offer insights and a fresh look at the role design plays in making public services work better for everyone.`
  },
  "Flourishing at All Levels of the System": {
    id: "flourishing-at-all-levels-of-the-system",
    title: "Flourishing at All Levels of the System",
    who: "Dr Douglas O'Loughlin",
    date: "14/07/2025",
    time: "12:00 PM (GMT+8)",
    tags: ["12 PM", "✳️ Keynote", "🌱 Build Self", "🎙️ Talk", "💻 Online", "🔨 Build Craft"],
    meetingLink: "https://go.gov.sg/designfestival-talk12pm",
    location: "Online",
    synopsis: "In this engaging session, we will explore two key concepts. One is that who we are as a person makes a difference in the impact we have beyond the tools we bring, and the other is that it is important for us to pay attention to levels of the system, so we can maximise the effectiveness of what we do.\n\nWe will play with a variety of practical tools, at intrapersonal, partnering with others, and working in complex systems levels. Everyone will walk away with 2-3 ideas that can be implemented right away.",
    speakerBio: "Douglas is originally from New York, and through a series of serendipitous events ended up in Singapore in 1993, and has worked across all sectors and in more than 20 countries. His passion is to support impactful and joyful organisations and communities, where each and all can flourish. \n\nHe has spoken at many conferences, did a TEDx Singapore talk, has written two books, Facilitating Transformation and ANDlightenment: Polarity Thinking from Self to Society, and edited a third, Creating and Holding Spaces.\n\nHe is the Principal of the Dao of Thriving, and an Associate Consultant with Civil Service College"
  },
  "From Blank Slate to Breakthroughs: Learning to Run Focus Group Discussions the Scrappy Way": {
    id: "from-blank-slate-to-breakthroughs-learning-to-run-focus-group-discussions-the-scrappy-way",
    title: "From Blank Slate to Breakthroughs: Learning to Run Focus Group Discussions the Scrappy Way",
    who: "Cathy Chen Sheng & Matthew Ryan Lee",
    date: "16/07/2025",
    time: "1:00 PM (GMT+8)",
    tags: ["1 PM", "🌱 Build Self", "🎙️ Talk", "💻 Online", "🔨 Build Craft"],
    meetingLink: "https://go.gov.sg/designfestival-talk1pm",
    location: "Online",
    synopsis: "A candid reflection on our learnings from conducting focus group discussion – learn about how this method enabled us to dive deep into our users' minds and unlock insights. We take you through 2 different case studies where we put this to practice, from government and citizen research projects.\n\nThis session explores the practical realities of expanding UX research methods, the unique challenges of focus group facilitation, and why this underutilized method deserves a place in our research toolkit.\n\nWe discuss the powers and limitations of this method, and share our practical tips on how and when you should run one.",
    speakerBio: "Hi there! We're Cat and Matt, UX Designers from GatherSG. We build digital products that serve the public and help strengthen communities, providing systems that government officers rely on to better serve citizens at various touchpoints.\nIn our day to day, we collaborate closely with agency officers and the public to validate and iterate on our work."
  },
  "From Insights to Action: Driving Impact": {
    id: "from-insights-to-action-driving-impact",
    title: "From Insights to Action: Driving Impact",
    who: "Ruby Pryor",
    date: "07/07/2025",
    time: "12:00 PM (GMT+8)",
    tags: ["12 PM", "✳️ Keynote", "🌱 Build Self", "🎙️ Talk", "💻 Online", "🔨 Build Craft"],
    meetingLink: "https://go.gov.sg/designfestival-talk12pm",
    location: "Online",
    synopsis: "This talk will outline how you can become a more impactful UX researcher and better communicate the impact your work makes. In this talk you will learn:\n\n- A framework for UX research impact: Understand the four levels of impact that UX research creates inside organisations.\n- How to demonstrate your impact through metrics: Position yourself as a strategic partner by understanding the 4 categories of metrics that UX research impacts.\n- Tips for executive communication and influence: Explore how to ensure your work has influence at the highest levels of organisations.",
    speakerBio: "Ruby Pryor is the founder of Rex, a strategic design and UX research consulting firm. Ruby has worked in Design and Customer Experience for a decade across Australia and Asia, including over 5 years in Singapore. \n\nHer previous experience includes working for Boston Consulting Group, Grab and Nous Group. She is a recognised global expert, has spoken at UX conferences in 7 countries and been interviewed on CNA."
  },
  "Gamification on GPay": {
    id: "gamification-on-gpay",
    title: "Gamification on GPay",
    who: "Chenxi Sun and Peggy Sim",
    date: "18/07/2025",
    time: "1:00 PM (GMT+8)",
    tags: ["1 PM", "🎙️ Talk", "💻 Online", "🔨 Build Craft"],
    meetingLink: "https://go.gov.sg/designfestival-talk1pm",
    location: "Online",
    synopsis: "How we apply gamification design as a means of increasing engagement & building user habit, and make GPay one of the most attractive payment options in India.",
    speakerBio: "Chenxi is currently the UX lead of Growth & Monetisation on GPay. She believes in the gamification design as a means of increasing engagement, simultaneously excite & educate user behaviors. She drove multiple new gamification features launch to drive user acquisition & retention, impacting >100 million MAUs globally."
  },
  "Gatekeeping ________": {
    id: "gatekeeping-",
    title: "Gatekeeping ________",
    who: "Jing Yeen Goh and Jaffry Jalal",
    date: "17/07/2025",
    time: "1:00 PM (GMT+8)",
    tags: ["1 PM", "🌱 Build Self", "🎙️ Talk", "💻 Online", "🔨 Build Craft"],
    meetingLink: "https://go.gov.sg/designfestival-talk1pm",
    location: "Online",
    synopsis: "Building great digital experiences at scale and with speed often requires robust guidelines, structures, toolkits, and roles. And it is wonderful when it all clicks. But what if the gates were keeping out more than we realised?",
    speakerBio: "Jing Yeen brings diverse experience from her roles across CPF Board, spanning service delivery, policy development, and digital services. In her current role, she focuses on expanding design's impact on CPF products while supporting the design team's visibility and contributions.\n\nJaffry is a designer by trade, a people manager by practice, and an optimist by choice. At CPFB, he supports the design team in turning bold ideas into thoughtful outcomes for citizens."
  },
  "Growing with GovTech: A UX Designer's Story of Learning, Leading, and Lasting": {
    id: "growing-with-govtech-a-ux-designers-story-of-learning-leading-and-lasting",
    title: "Growing with GovTech: A UX Designer's Story of Learning, Leading, and Lasting",
    who: "Eunice Chan",
    date: "15/07/2025",
    time: "1:00 PM (GMT+8)",
    tags: ["1 PM", "🌱 Build Self", "🎙️ Talk", "💻 Online"],
    meetingLink: "https://go.gov.sg/designfestival-talk1pm",
    location: "Online",
    synopsis: "Join Eunice as she shares her 10-year journey as a UX designer at GovTech — a story of continuous learning, stepping into leadership, and finding purpose in shaping meaningful government digital services. Growing alongside the maturing UX practice in GovTech, she offers reflections and takeaways to help you navigate your own growth and chart the next steps in your career.",
    speakerBio: "Eunice is a Senior UX Designer in GovTech with over a decade of experience advocating for users and solving their problems. She leads UX for GoWhere and is passionate about improving the lives of citizens through research and design.\n\nShe's currently working at DEP on eGreenGov Project."
  },
  "How Are You, Really?": {
    id: "how-are-you-really",
    title: "How Are You, Really?",
    who: "Tay Jia Eenn",
    date: "18/07/2025",
    time: "12:00 PM (GMT+8)",
    tags: ["12 PM", "🌱 Build Self", "🎙️ Talk", "💻 Online"],
    meetingLink: "https://go.gov.sg/designfestival-talk12pm",
    location: "Online",
    synopsis: `\"How Are You, Really?\"

Most of us answer that question on autopilot. But beneath the surface, many designers quietly wrestle with burnout, self-doubt, or a lingering sense of disconnection–especially in fast-moving, high-impact environments. In this talk, Jia Eenn shares a personal reflection framework that helped bring clarity and intention back into her work and life. Whether you're feeling stretched thin or simply ready to check in with yourself, this is an invitation to pause, reflect, and reconnect.

*P.S. You're encouraged to bring a pen and paper, and to tune in on your earphones if you can.*`,
    speakerBio: "Jia Eenn is a UX designer at GatherSG, where she designs case management systems that are anything but simple. Working in fast-paced teams and complex problem spaces, she has had her fair share of wins and tough days. In this session, she'll share a personal framework that has helped her reflect, reset, and stay grounded when things get intense."
  },
  "How culture influences Design: A Tokyo case study": {
    id: "how-culture-influences-design-a-tokyo-case-study",
    title: "How culture influences Design: A Tokyo case study",
    who: "Amanda Lu",
    date: "11/07/2025",
    time: "12:00 PM (GMT+8)",
    tags: ["12 PM", "🎙️ Talk", "💻 Online", "🔨 Build Craft"],
    meetingLink: "https://go.gov.sg/designfestival-talk12pm",
    location: "Online",
    synopsis: "*Description of talk to be provided later.*",
    speakerBio: "Amanda is a Senior Product Designer & User Researcher at a global tech company in Tokyo, Japan. She empowers software developers, DevOps engineers & other users from specialized domains around the world to enjoy their work a little more by improving their digital enterprise experiences.\n\nFormerly a GovTechie, Amanda was the first UX Lead of SearchSG, where she led end-to-end product design, shaped product strategy and scaled the UX team from 1 to 4. She was also the Project Lead for the Accessibility @ DCube Project, raising maturity levels on accessibility best practices for product research, design & development for the department of 250."
  },
  "IDW - Online": {
    id: "idw---online",
    title: "IDW - Online",
    tags: ["🎙️ Talk", "💜 Inclusive Design Week", "💻 Online"],
    location: "Link to be shared"
  },
  "Inclusive Design Week - Day 1": {
    id: "inclusive-design-week---day-1",
    title: "Inclusive Design Week - Day 1",
    date: "29/07/2025",
    time: "9:00 AM (GMT+8)",
    tags: ["In-Person", "💜 Inclusive Design Week"],
    location: "Enabling Village",
    synopsis: "Join us virtually and/or physically from 29 July to 31 July for Inclusive Design Week 2025 (previously known as A11y week) as part of GovTech's month-long Design Festival. Learn from Design and Accessibility experts, from various government agencies, private industries like Apple, DBS Bank, Figma, National Institute of Education, and Persons with Disabilities (PwDs).\n\nInclusive Design Week is the Government's digital inclusion learning festival for all public officers, especially those making Singapore a Smart (and Inclusive) Nation. We look forward to hosting you as we share best practices, case studies, tools, and resources that enable us to build a more accessible and inclusive Singapore.",
    agenda: [
      "9:00-9:30 am - Registration",
      "9:30-9:40 am - Opening Speech by Mrs Josephine Teo (Minister for Digital Development and Information)",
      "9:40-10:10 am - Digital Inclusivity Tools Showcase",
      "10:10-11:40 am - Panel Discussion on Accessibility and Inclusivity",
      "11:40-1:00 pm - Lunch",
      "1:00-1:40 pm - Digital Accessibility Assessment Tool Showcase",
      "1:40-2.30 pm - Understanding the A11y Playground",
      "2:30-2:40 pm - Break",
      "2:40-3.40 pm - Agency Best Practices Sharing"
    ]
  },
  "Inclusive Design Week - Day 2": {
    id: "inclusive-design-week---day-2",
    title: "Inclusive Design Week - Day 2",
    date: "30/07/2025",
    time: "9:00 AM (GMT+8)",
    tags: ["In-Person", "💜 Inclusive Design Week"],
    location: "Enabling Village",
    synopsis: "Join us virtually and/or physically from 29 July to 31 July for Inclusive Design Week 2025 (previously known as A11y week) as part of GovTech's month-long Design Festival. Learn from Design and Accessibility experts, from various government agencies, private industries like Apple, DBS Bank, Figma, National Institute of Education, and Persons with Disabilities (PwDs).\n\nInclusive Design Week is the Government's digital inclusion learning festival for all public officers, especially those making Singapore a Smart (and Inclusive) Nation. We look forward to hosting you as we share best practices, case studies, tools, and resources that enable us to build a more accessible and inclusive Singapore.",
    agenda: [
      "9:00-9:45 am - What is EMP2030?",
      "9:45-11:15 am - Digital Service Standards Sharing",
      "11:15-12 pm - Accessibility Made Simple with Inspect Plus",
      "12:00-1:00 pm - Lunch",
      "1:00-1:45 pm - Accessibility by Design: How We Built the A11y Playground",
      "1:45-2.30 pm - A11ies in Design",
      "2:30-3:30 pm - How to Work with Persons with Disabilities",
      "3:30-4:30 pm - Inclusive UX Research Methods"
    ]
  },
  "Inclusive Design Week - Day 3": {
    id: "inclusive-design-week---day-3",
    title: "Inclusive Design Week - Day 3",
    date: "31/07/2025",
    time: "9:00 AM (GMT+8)",
    tags: ["In-Person", "💜 Inclusive Design Week"],
    location: "Enabling Village",
    synopsis: "Join us virtually and/or physically from 29 July to 31 July for Inclusive Design Week 2025 (previously known as A11y week) as part of GovTech's month-long Design Festival. Learn from Design and Accessibility experts, from various government agencies, private industries like Apple, DBS Bank, Figma, National Institute of Education, and Persons with Disabilities (PwDs).\n\nInclusive Design Week is the Government's digital inclusion learning festival for all public officers, especially those making Singapore a Smart (and Inclusive) Nation. We look forward to hosting you as we share best practices, case studies, tools, and resources that enable us to build a more accessible and inclusive Singapore.",
    agenda: [
      "9:00-10:00 am - User Journey Mapping",
      "10:00-11:00 am - Prototyping & Testing",
      "11:00-12:00 pm - User Testing Showcase",
      "12:00-1:00 pm - Lunch",
      "1:00-1:45 pm - Designing for Clarity",
      "1:45-2:30 pm - Future of Accessibility",
      "2:30-4:20 pm - Impact by Design Panel Discussion",
      "4:20-4:30 pm - Closing Speech"
    ]
  },
  "Insights That Matter": {
    id: "insights-that-matter",
    title: "Insights That Matter",
    who: "Studio Dojo",
    date: "15/07/2025",
    time: "2:00 PM (GMT+8)",
    tags: ["Course 📚", "In-Person", "🔨 Build Craft"],
    location: "MBC30 L11 Jupiter Rooms 1+2",
    description: "Whether you're a product manager building your research foundations or a seasoned research practitioner looking to become more intentional in your craft, this is a hands-on workshop that delves into the messiness of sense-making, offering you a reflexive space to learn how to analyse and synthesise qualitative data through guided practice."
  },
  "Journeys are not single-use plastics: A sustainable approach to making reusable maps": {
    id: "journeys-are-not-single-use-plastics-a-sustainable-approach-to-making-reusable-maps",
    title: "Journeys are not single-use plastics: A sustainable approach to making reusable maps",
    who: "Darren Yeo",
    date: "15/07/2025",
    time: "12:00 PM (GMT+8)",
    tags: ["12 PM", "🌱 Build Self", "🎙️ Talk", "💻 Online", "🔨 Build Craft"],
    meetingLink: "https://go.gov.sg/designfestival-talk12pm",
    location: "Online",
    synopsis: "Are journey maps like single-use plastics? This was the guiding question that led me on my journey on maps after seeing how often we leave them aside after their key usage, mainly during a presentation to stakeholders after an important decision, never looking at them again. We can definitely change that with some reframing.\n\nExplore how some companies and designers are challenging these conventional norms. Learn how some teams are applying an advanced way of journey mapping. Create new steps for yourself and your team. Let's learn about a sustainable approach to making reusable maps.",
    speakerBio: "Darren is the UX Manager of the ESTL team over at MOE. \n\nMaking journeys, both at work and beyond. Finding new ways to inspire. Facilitating actions on new grounds."
  },
  "Just Trying My Best: A Designer's Journey into Accessibility": {
    id: "just-trying-my-best-a-designers-journey-into-accessibility",
    title: "Just Trying My Best: A Designer's Journey into Accessibility",
    who: "Liting Kway",
    date: "09/07/2025",
    time: "12:00 PM (GMT+8)",
    tags: ["12 PM", "🌱 Build Self", "🎙️ Talk", "💻 Online"],
    meetingLink: "https://go.gov.sg/designfestival-talk12pm",
    location: "Online",
    synopsis: `Accessibility can feel like a big, complex topic — and honestly, it still feels a little intimidating at times. This talk shares how that journey began: attending A11y talks at work, learning the basics, adding annotations to designs, and eventually encouraging the team to start their own learning journeys. It also touches on how AI tools have been used to support this work — not just to save time, but to help us learn and get better at writing accessibility annotations together. 

Some of the topics that will be covered include: 

- Initial thoughts and fears around accessibility as WCAG seemed overwhelming
- Starting with learning the basics (e.g. perceivable, operable, understandable, robust principles)
- Noticing others felt just as unsure, and realising that you didn't need to be an expert to get started
- AI not just as a shortcut, but a tool to upskill and reinforce good accessibility thinking
- Making peace with "still learning" (progress over perfection!)`,
    speakerBio: "Liting is a UX Designer at GovTech, working on both citizen-facing services and internal products. She enjoys making complex systems easier to navigate and has recently been exploring how accessibility and AI can work together to support more inclusive design practices. Her work spans end-to-end design, from research and problem-solving, to crafting intuitive experiences and supporting others in growing their UX skills."
  },
  "Learning Journey: DBS": {
    id: "learning-journey-dbs",
    title: "Learning Journey: DBS",
    who: "Service Design Week",
    date: "21/07/2025",
    time: "9:30 AM (GMT+8)",
    tags: ["In-Person", "Learning Journey 🚌", "🔨 Build Craft", "🔹 Service Design Week"],
    location: "DBS",
    description: "Get a glimpse of the action from DBS Service Designers as they share case studies and examples of how DBS designs journeys that are end-to-end, cross-persona and that go beyond the digital realm. Learn about their Service Design Playbook and how it's played a key role in creating value and impact for the business and their customers.\n\nYou'll participate in a hands-on activity to apply service design and explore ways you can bring this mindset and approach back to your own organisation."
  },
  "Learning Journey: Hilton": {
    id: "learning-journey-hilton",
    title: "Learning Journey: Hilton",
    who: "Service Design Week",
    date: "25/07/2025",
    time: "3:00 PM (GMT+8)",
    tags: ["In-Person", "Learning Journey 🚌", "🔹 Service Design Week"],
    location: "Hilton",
    description: "Discover how Hilton is redefining modern hospitality to meet customer expectations in every step of the guest journey. This session will provide an inside look at Hilton's approach to seamless service design, where intuitive digital tools and thoughtfully crafted in-hotel experiences come together to create effortless stays for every guest. The session will conclude with an exclusive guided hotel tour, offering firsthand insight into how these principles are brought to life across our spaces."
  },
  "Learning Journey: IRAS": {
    id: "learning-journey-iras",
    title: "Learning Journey: IRAS",
    who: "Service Design Week",
    date: "25/07/2025",
    time: "9:30 AM (GMT+8)",
    tags: ["In-Person", "Learning Journey 🚌", "🔹 Service Design Week"],
    location: "IRAS",
    description: "Discover how IRAS is reimagining the taxpayer experience by redesigning spaces, streamlining processes, and refreshing policies - all through the lens of service design. Go behind the scenes of the Taxpayer & Business Service Centre (TBSC) redesign, explore how we're making tax matters more welcoming and accessible, and get an insider's look at our innovative projects for foreigners and the next generation of taxpayers. Experience firsthand how IRAS is shaping a seamless, citizen-centric journey - where every detail, from our service spaces to our digital touchpoints, is designed with taxpayers in mind."
  },
  "Learning Journey: Mandai Wildlife Reserve": {
    id: "learning-journey-mandai-wildlife-reserve",
    title: "Learning Journey: Mandai Wildlife Reserve",
    who: "Service Design Week",
    date: "24/07/2025",
    time: "9:30 AM (GMT+8)",
    tags: ["In-Person", "Learning Journey 🚌", "🔹 Service Design Week"],
    location: "Mandai Wildlife Reserve",
    description: "Crafting Engaging Experiences at Mandai Wildlife Reserve\n\nMandai Wildlife Reserve is thrilled to host a learning journey for GovTech, where we'll share how we create fun and inspiring guest experiences. We'll delve into the design principles and approaches that help us craft memorable moments, connecting our guests with the natural world. Discover our approach to making every interaction"
  },
  "Lightning Talks: Business Track": {
    id: "lightning-talks-business-track",
    title: "Lightning Talks: Business Track",
    who: "Service Design Week",
    date: "23/07/2025",
    time: "12:00 PM (GMT+8)",
    tags: ["12 PM", "🎙️ Talk", "💻 Online", "🔨 Build Craft", "🔹 Service Design Week"],
    description: "[MOM] Reimagining Migrant Worker Dormitories for Well-Being and Resilience\n\n[MSF] Clarity Amongst Chaos: Harmonising Social Services\n\n[SLA] Journey to the West – Insights into the Vendor's Software Development Process\n\n**GovTechies sharing SD Experience from Industry**\n\n[NINJA VAN] Design Is Always About: The Humans Using It"
  },
  "Lightning Talks: Citizen Track": {
    id: "lightning-talks-citizen-track",
    title: "Lightning Talks: Citizen Track",
    who: "Service Design Week",
    date: "24/07/2025",
    time: "12:00 PM (GMT+8)",
    tags: ["12 PM", "🎙️ Talk", "💻 Online", "🔨 Build Craft", "🔹 Service Design Week"],
    description: "[MND] Hacking an inclusive chatbot for everyday Singaporeans\n\n[SPORTSG] Team Singapore's Service Journey: Supporting Athletes, Coaches and the Sports Eco-system\n\n[HTX] Helping Ah Gong and Ah Ma Drive On:\n\nA Licence Renewal Story\n\n**GovTechies sharing SD Experience from Industry**\n\n[Insurance] From Weeks to Days: Streamlining Claims Lodgement for Faster Payout"
  },
  "Lightning Talks: Public Officer Track": {
    id: "lightning-talks-public-officer-track",
    title: "Lightning Talks: Public Officer Track",
    who: "Service Design Week",
    date: "22/07/2025",
    time: "12:00 PM (GMT+8)",
    tags: ["12 PM", "🎙️ Talk", "💻 Online", "🔨 Build Craft", "🔹 Service Design Week"],
    description: "[MOE] From Insight to Impact: Revealing the Hidden Struggles of Teachers\n\n[MDDI] Divide and Design: 'Translating' a complex process into actionable solutions\n\n[GovTech] Empathy in Action: Design Sprint for a better Workspace Experience\n\n**GovTechies sharing SD Experience from Industry**\n\n[Tan Tock Seng Hospital] Redefining Inpatient Experience for Service Excellence"
  },
  "Measuring design value with a numbers prototype": {
    id: "measuring-design-value-with-a-numbers-prototype",
    title: "Measuring design value with a numbers prototype",
    who: "Derrick Ng",
    date: "02/07/2025",
    time: "12:00 PM (GMT+8) → 1:00 PM",
    tags: ["🎙️ Talk", "💻 Online", "🔨 Build Craft"],
    meetingLink: "https://go.gov.sg/designfestival-talk12pm",
    location: "Online",
    synopsis: "The key idea behind this talk is how to turn a piece of design work into numbers, similar to a financial forecast. This serves as a tool to convince others about the value of your design work.",
    speakerBio: "Derrick's a UX designer who spent years gently whispering that good design has ROI — mostly to himself, in dark rooms. Like everyone else, he tiptoed around saying design has value (because, you know, this is a tech company). Then aliens abducted him (true story, don't ask), and now he's back on Earth with a mission: convince just one other non-alien about the business value of design... or worse — spend eternity reading every word in Comic Sans."
  },
  "Prototyping with AI and moderated concept testing": {
    id: "prototyping-with-ai-and-moderated-concept-testing",
    title: "Prototyping with AI and moderated concept testing",
    who: "Rex / Ruby Pryor",
    date: "04/07/2025",
    time: "9:00 AM (GMT+8)",
    tags: ["Course 📚", "In-Person", "🔨 Build Craft"],
    location: "MBC 30 L11 Jupiter Rooms 1+2",
    description: "By the end of this hands-on workshop participants will have developed a high level plan to test their prototype, at least one prototype using AI and a discussion guide to use in customer research sessions. This workshop will be a combination of theory and practice with lots of space for experimentation and learning."
  },
  "Scrappy not crappy: Quick shortcuts to deliver a good product": {
    id: "scrappy-not-crappy-quick-shortcuts-to-deliver-a-good-product",
    title: "Scrappy not crappy: Quick shortcuts to deliver a good product",
    who: "Tara Hirebet",
    date: "03/07/2025",
    time: "12:00 PM (GMT+8)",
    tags: ["🎙️ Talk", "💻 Online", "🔨 Build Craft"],
    synopsis: `Building a startup means moving fast. But that doesn't have to mean cutting corners - especially when understanding your users, or developing and scaling your product. Tara unpacks the art of scrappy (but not at all crappy) research, that you can implement, whatever your background. We'll show you how to approach some of the most common product and user needs, through tried and tested shortcuts that are quick, actionable, and even a little fun 🥳! From how Pixar Stories teach Product Market Fit, to why Breakups are the key to finding your P0 Consumer Metrics to track and fix - think of it as the "Freakonomics of research" - breaking down the complex into memorable, relatable shortcuts that you can easily apply, wherever you are in your product journey.`,
    speakerBio: "Tara Hirebet is the Deputy Director of Research at GovTech's Design Practice. Prior to this, she was based in Silicon Valley with Google, where she worked on Search, Maps, and the Next Billion Users (NBU) initiative. She later joined GOJEK in Indonesia as VP of Research and Insights, where she built the company's first research team and reported directly to the co-founders. Outside of work, Tara is developing an animated series set in Asia and America, in collaboration with a former Pixar animator."
  },
  "Small hands, big barriers: Rethinking login for young learners": {
    id: "small-hands-big-barriers-rethinking-login-for-young-learners",
    title: "Small hands, big barriers: Rethinking login for young learners",
    who: "Chong Ying Leong (Jordan)",
    date: "10/07/2025",
    time: "1:00 PM (GMT+8)",
    tags: ["1 PM", "🎙️ Talk", "💻 Online", "🔨 Build Craft"],
    meetingLink: "https://go.gov.sg/designfestival-talk1pm",
    location: "Online",
    synopsis: `When we talk about accessibility, we often focus on people with disabilities or the elderly — but what about the youngest users in our education systems? In this talk, we'll explore the "forgotten middle" — children who don't have special needs but are still underserved by adult-centric UX.

Drawing from a recent research with over 400 primary school students in Singapore, this session gives us an opportunity to understand unique behaviours, motivations, and struggles of early learners navigating logging in to digital interfaces.

You'll see some surprising moments and interaction patterns that challenge commonly accepted UX principles and discover why these break down for children.

The speaker will share a possible heuristic framework for designing digital systems that support younger learners and call for collaboration to stack more learnings, past / future research to enrich this further together.`,
    speakerBio: "Jordan is a UX Designer at GovTech who turned mid-career uncertainty into purpose, proving it's never too late to design a life you love. He enjoys digging deep into problems and uncovering untold stories from users — it's how he satisfies his hunger for insights and his drive to deliver real impact."
  },
  "The Space Between": {
    id: "the-space-between",
    title: "The Space Between",
    who: "Samuel Lim",
    date: "04/07/2025",
    time: "1:00 PM (GMT+8)",
    tags: ["🌱 Build Self", "🎙️ Talk", "💻 Online"],
    meetingLink: "https://go.gov.sg/designfestival-talk1pm",
    location: "Online",
    synopsis: "Wayfinding isn't just about signs, it's about alignment. Before design makes an impact, we need to ask if we're even navigating the same problem.",
    speakerBio: "Samuel is a wayfinding strategist who helps cities make sense of complex spaces. He led the design of signage and system maps for the Singapore MRT, Doha Metro, and Lusail Tram, and now runs Studio Lucidus, a consultancy that brings clarity to both stakeholders and end users."
  },
  "Theming with design tokens: Flagship Design System": {
    id: "theming-with-design-tokens-flagship-design-system",
    title: "Theming with design tokens: Flagship Design System",
    who: "Vivienne Chong",
    date: "07/07/2025",
    time: "1:00 PM (GMT+8)",
    tags: ["1 PM", "🎙️ Talk", "💻 Online", "🔨 Build Craft"],
    meetingLink: "https://go.gov.sg/designfestival-talk1pm",
    location: "Online",
    synopsis: "In this talk we'll introduce you to design tokens and their benefits, as well as the how behind setting up and structuring tokens in Flagship.",
    speakerBio: "Hi, I'm Viv! I help agencies manage bookings more efficiently. On the side, I delve into design systems and tokens to make Flagship Design System more flexible and easy to use!"
  },
  "User design principles towards our Punggol Digital District move": {
    id: "user-design-principles-towards-our-punggol-digital-district-move",
    title: "User design principles towards our Punggol Digital District move",
    who: "Alan Tan",
    date: "11/07/2025",
    time: "1:00 PM (GMT+8)",
    tags: ["1 PM", "🎙️ Talk", "💻 Online", "🔨 Build Craft"],
    meetingLink: "https://go.gov.sg/designfestival-talk1pm",
    location: "Online",
    synopsis: `Join us as we share how we applied LUMA Design Thinking methods to run Focus Group Discussions (FGDs) that shaped GovTech's move to the Punggol Digital District (PDD).

From Jan to Apr 2025, we engaged GovTechies across divisions to understand their needs and concerns for the new office. Guided by "How Might We" statements, we uncovered key insights around commuting and collaboration spaces. These informed problem statements, sparked ideation, and led to low-fidelity mockups (e.g. storyboards on shuttle services and mission-centric workspaces).

Lastly, we'll share how we engaged and educated GovTechies through roadshows, internal comms, and a dedicated PDD microsite to support a smooth and informed transition.`,
    speakerBio: "Hi I'm Alan and I'm a certified LUMA practitioner, and I use Design Thinking methodologies to facilitate focus groups. One of the more fun sessions were the PDD (Punggol Digital District) focus groups that we delivered, where we dug deeper to understand Govtechies' excitement, wish-lists, pain-points and pushback around the upcoming move to Punggol."
  },
  "UX Growing Pains: Designing in Different Worlds": {
    id: "ux-growing-pains-designing-in-different-worlds",
    title: "UX Growing Pains: Designing in Different Worlds",
    who: "Tasha Yip",
    date: "03/07/2025",
    time: "1:00 PM (GMT+8)",
    tags: ["🌱 Build Self", "🎙️ Talk", "💻 Online", "🔨 Build Craft"],
    meetingLink: "https://go.gov.sg/designfestival-talk1pm",
    location: "Online",
    synopsis: "Behind every polished interface is a messier process, shaped by underlying currents as much as design tools.\n\nThis talk is a reflection on what I've learned working across very different government teams, moving from structured design rituals to working solo in spaces where UX was still unfamiliar.\n\nEach project taught me something about adapting, building trust, and staying steady through ambiguity. I'll share a few stories that stayed with me, and might speak to others navigating their own version of this.",
    speakerBio: "I'm Tasha, a UX designer who's meandered through a range of domains - from complex case management to tourism apps and now AI-powered tools. I believe valuable design starts with listen"
  },
  "Visual Facilitation Lab": {
    id: "visual-facilitation-lab",
    title: "Visual Facilitation Lab",
    who: "Art of Awakening",
    date: "11/07/2025",
    time: "9:00 AM (GMT+8)",
    tags: ["Course 📚", "In-Person", "🌱 Build Self", "🔨 Build Craft"],
    location: "MBC 10 L10 The Big Place",
    description: "In the fast-evolving world of digital GovTechation, UX designers are visual thinkers at heart – but how do we nurture that core creative instinct through pen-on-paper expression?"
  }
};

// Helper function to get event details by title
export function getEventDetailsByTitle(title: string): EventDetail | null {
  return eventDetails[title] || null;
}

// Helper function to check if event has rich content available
export function hasRichContent(title: string): boolean {
  const detail = eventDetails[title];
  return !!detail;
}