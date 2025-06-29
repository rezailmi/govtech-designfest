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
  "Festival Opening (feat. DCE Sau Sheong & Shiao-Yin)": {
    id: "festival-opening",
    title: "Festival Opening (feat. DCE Sau Sheong & Shiao-Yin)",
    description: "Join us for the grand opening of GovTech Design Festival 2025",
    synopsis: "Culture change strategist Shiao-Yin Kuik shares her insights about making and measuring impact through her team's work in running Common Ground Civic Centre, a 9-year-long partnership with MCCY and a community of purpose-driven organisations",
    agenda: [
      "10.45am - Registration @ MBC 10 The Big Place",
      "11.00am - Keynote Presentation: Impact Measurement - A Multiverse of Madness by Shiao-Yin Kuik",
      "12.30pm - Opening by DCE Sau Sheong: Vision for GovTech Design",
      "12.45pm - Lunch and Design Arcade"
    ],
    date: "01/07/2025",
    time: "10:30 AM - 11:30 AM (GMT+8)",
    location: "MBC 10 - Level 10 (The Big Place)",
    tags: ["Get Swag", "In-Person", "✳️ Keynote", "🎙️ Talk"]
  },
  
  "Behavioural Design: Where Behavioural Science Meets Creativity": {
    id: "behavioural-design",
    title: "Behavioural Design: Where Behavioural Science Meets Creativity",
    description: "Learn to design human-centered solutions using the Make It Toolkit through hands-on application of behavioral science principles.",
    synopsis: "This workshop combines creativity with behavioral insights to influence real-world change in products, policies, and services.",
    who: "MakeIt Lab",
    date: "28/07/2025",
    time: "9:00 AM - 1:00 PM (GMT+8)",
    location: "MBC 30 L11 Jupiter Rooms 1+2",
    tags: ["Course 📚", "In-Person", "🔨 Build Craft"]
  },

  "Data Storytelling": {
    id: "data-storytelling",
    title: "Data Storytelling",
    description: "In a world inundated with information and where data is priority, knowing how to handle and present it effectively and responsibly is vital.",
    synopsis: "Kontinentalist will take you through the basics of data handling, storytelling, and visual design.",
    who: "Kontinentalist",
    date: "08/07/2025",
    time: "9:30 AM - 1:00 PM (GMT+8)",
    location: "MBC 30 Jupiter Rooms 1+2",
    tags: ["Course 📚", "In-Person", "🔨 Build Craft"]
  },

  "Design Arcade (Lunch Provided!)": {
    id: "design-arcade",
    title: "Design Arcade (Lunch Provided!)",
    description: "A vibrant, gamified mixer that celebrates the spirit of design - and the people who make it happen.",
    synopsis: "Learn. Play. Appreciate. Wander through playful booths where you can express gratitude, share stories, spark fresh ideas, and most of all - have fun. Come with curiosity, leave with smiles (and maybe some swag)!",
    tags: ["Got Food", "In-Person"]
  },

  "Measuring design value with a numbers prototype": {
    id: "measuring-design-value",
    title: "Measuring design value with a numbers prototype",
    synopsis: "The key idea behind this talk is how to turn a piece of design work into numbers, similar to a financial forecast. This serves as a tool to convince others about the value of your design work.",
    who: "Derrick Ng",
    speakerBio: "Derrick's a UX designer who spent years gently whispering that good design has ROI — mostly to himself, in dark rooms. Like everyone else, he tiptoed around saying design has value (because, you know, this is a tech company). Then aliens abducted him (true story, don't ask), and now he's back on Earth with a mission: convince just one other non-alien about the business value of design... or worse — spend eternity reading every word in Comic Sans.",
    date: "02/07/2025",
    time: "12:00 PM - 1:00 PM (GMT+8)",
    meetingLink: "https://go.gov.sg/designfestival-talk12pm",
    tags: ["🎙️ Talk", "💻 Online", "🔨 Build Craft"]
  },

  "Fireside chat: Why isn't empathy enough?": {
    id: "fireside-empathy",
    title: "Fireside chat: Why isn't empathy enough?",
    description: "An intimate conversation exploring the limitations of empathy in design and what goes beyond understanding.",
    who: "MOS Jasmin, ACE Bernard",
    tags: ["In-Person", "Keynote", "Talk"]
  },

  "Scrappy not crappy: Quick shortcuts to deliver a good product": {
    id: "scrappy-not-crappy",
    title: "Scrappy not crappy: Quick shortcuts to deliver a good product",
    synopsis: "Building a startup means moving fast. But that doesn't have to mean cutting corners - especially when understanding your users, or developing and scaling your product. Tara unpacks the art of scrappy (but not at all crappy) research, that you can implement, whatever your background. We'll show you how to approach some of the most common product and user needs, through tried and tested shortcuts that are quick, actionable, and even a little fun 🥳! From how Pixar Stories teach Product Market Fit, to why Breakups are the key to finding your P0 Consumer Metrics to track and fix - think of it as the \"Freakonomics of research\" - breaking down the complex into memorable, relatable shortcuts that you can easily apply, wherever you are in your product journey.",
    who: "Tara Hirebet",
    speakerBio: "Tara Hirebet is the Deputy Director of Research at GovTech's Design Practice. Prior to this, she was based in Silicon Valley with Google, where she worked on Search, Maps, and the Next Billion Users (NBU) initiative. She later joined GOJEK in Indonesia as VP of Research and Insights, where she built the company's first research team and reported directly to the co-founders. Outside of work, Tara is developing an animated series set in Asia and America, in collaboration with a former Pixar animator.",
    date: "03/07/2025",
    time: "12:00 PM (GMT+8)",
    tags: ["🎙️ Talk", "💻 Online", "🔨 Build Craft"]
  },

  "UX Growing Pains: Designing in Different Worlds": {
    id: "ux-growing-pains",
    title: "UX Growing Pains: Designing in Different Worlds",
    synopsis: "Behind every polished interface is a messier process, shaped by underlying currents as much as design tools. This talk is a reflection on what I've learned working across very different government teams, moving from structured design rituals to working solo in spaces where UX was still unfamiliar. Each project taught me something about adapting, building trust, and staying steady through ambiguity. I'll share a few stories that stayed with me, and might speak to others navigating their own version of this.",
    who: "Tasha Yip",
    speakerBio: "I'm Tasha, a UX designer who's meandered through a range of domains - from complex case management to tourism apps and now AI-powered tools. I believe valuable design starts with listening.",
    date: "03/07/2025",
    time: "1:00 PM (GMT+8)",
    meetingLink: "https://go.gov.sg/designfestival-talk1pm",
    tags: ["🌱 Build Self", "🎙️ Talk", "💻 Online", "🔨 Build Craft"]
  },

  "Prototyping with AI and moderated concept testing": {
    id: "prototyping-ai",
    title: "Prototyping with AI and moderated concept testing",
    description: "By the end of this hands-on workshop participants will have developed a high level plan to test their prototype, at least one prototype using AI and a discussion guide to use in customer research sessions. This workshop will be a combination of theory and practice with lots of space for experimentation and learning.",
    who: "Rex / Ruby Pryor",
    date: "04/07/2025",
    time: "9:00 AM - 1:00 PM (GMT+8)",
    location: "MBC 30 L11 Jupiter Rooms 1+2",
    tags: ["Course 📚", "In-Person", "🔨 Build Craft"]
  },

  "The Space Between": {
    id: "space-between",
    title: "The Space Between",
    synopsis: "Wayfinding isn't just about signs, it's about alignment. Before design makes an impact, we need to ask if we're even navigating the same problem.",
    who: "Samuel Lim",
    speakerBio: "Samuel is a wayfinding strategist who helps cities make sense of complex spaces. He led the design of signage and system maps for the Singapore MRT, Doha Metro, and Lusail Tram, and now runs Studio Lucidus, a consultancy that brings clarity to both stakeholders and end users.",
    date: "04/07/2025",
    time: "1:00 PM (GMT+8)",
    meetingLink: "https://go.gov.sg/designfestival-talk1pm",
    tags: ["🌱 Build Self", "🎙️ Talk", "💻 Online"]
  },

  "Ctrl + Alt + Design Workshop": {
    id: "ctrl-alt-design",
    title: "Ctrl + Alt + Design Workshop",
    description: "Interactive workshop exploring alternative approaches to design thinking and problem-solving.",
    who: "Design Festival Team",
    tags: ["In-Person", "Workshop"]
  },

  "Fireside Chat with 2PS and Lillian Shieh": {
    id: "fireside-2ps-lillian",
    title: "Fireside Chat with 2PS and Lillian Shieh",
    description: "Join us for a candid Fireside Chat between Augustin Lee, 2nd Permanent Secretary, MDDI, and Lillian Shieh, Head of Design Practice, GovTech.",
    synopsis: "As they explore the role of design in shaping digital government services and outcomes. This session is for anyone working at the intersection of policy, technology, and service design.",
    agenda: [
      "What assumptions do policymakers often make about user behaviour?",
      "Are we designing policies for the ideal citizen, or the real citizen with real constraints?", 
      "How can frontline pain points and lived experiences be surfaced earlier in the policy cycle?",
      "What does \"trust\" look like in a digital service—beyond compliance and security?",
      "Can government really design for trust, dignity, and equity at scale?"
    ],
    who: "2PS Augustin and Lillian Shieh",
    date: "07/07/2025",
    time: "11:30 AM (GMT+8)",
    location: "MBC 10 L10 The Big Place",
    tags: ["In-Person", "✳️ Keynote", "🎙️ Talk"],
    imageUrl: "/assets/datasource/Fireside Chat with 2PS and Lillian Shieh 21b9181c6cdb805785faf4bd21bff639/fs2-.png"
  },

  "From Insights to Action: Driving Impact": {
    id: "insights-to-action",
    title: "From Insights to Action: Driving Impact",
    synopsis: "This talk will outline how you can become a more impactful UX researcher and better communicate the impact your work makes.",
    agenda: [
      "A framework for UX research impact: Understand the four levels of impact that UX research creates inside organisations.",
      "How to demonstrate your impact through metrics: Position yourself as a strategic partner by understanding the 4 categories of metrics that UX research impacts.",
      "Tips for executive communication and influence: Explore how to ensure your work has influence at the highest levels of organisations."
    ],
    who: "Ruby Pryor",
    speakerBio: "Ruby Pryor is the founder of Rex, a strategic design and UX research consulting firm. Ruby has worked in Design and Customer Experience for a decade across Australia and Asia, including over 5 years in Singapore. Her previous experience includes working for Boston Consulting Group, Grab and Nous Group. She is a recognised global expert, has spoken at UX conferences in 7 countries and been interviewed on CNA.",
    date: "07/07/2025",
    time: "12:00 PM (GMT+8)",
    meetingLink: "https://go.gov.sg/designfestival-talk12pm",
    tags: ["12 PM", "✳️ Keynote", "🌱 Build Self", "🎙️ Talk", "💻 Online", "🔨 Build Craft"],
    imageUrl: "/assets/datasource/From Insights to Action Driving Impact 2189181c6cdb80deb8f6c64609dce70b/Frame_70.png"
  },

  "Theming with design tokens: Flagship Design System": {
    id: "theming-design-tokens",
    title: "Theming with design tokens: Flagship Design System",
    description: "Deep dive into design system architecture using design tokens for scalable and consistent theming.",
    who: "Vivienne Chong",
    tags: ["1 PM", "Talk", "Online", "Build Craft"]
  },

  "Visual Facilitation Lab": {
    id: "visual-facilitation",
    title: "Visual Facilitation Lab",
    description: "In the fast-evolving world of digital GovTechation, UX designers are visual thinkers at heart – but how do we nurture that core creative instinct through pen-on-paper expression?",
    who: "Art of Awakening",
    date: "11/07/2025",
    time: "9:00 AM - 1:00 PM (GMT+8)",
    location: "MBC 10 L10 The Big Place",
    tags: ["Course 📚", "In-Person", "🌱 Build Self", "🔨 Build Craft"]
  },

  "Design Your Life": {
    id: "design-your-life",
    title: "Design Your Life",
    description: "Designing your life using Design Thinking",
    synopsis: "Learn practical design thinking tools to prototype different life paths and create a more fulfilling career for yourself through hands-on exercises and interactive activities.",
    who: "Design Thinking Community",
    whoShouldJoin: "Designers, design enthusiasts, and anyone passionate about shaping how we work, think, and create in the years to come. You don't need to be a UXD - just bring curiosity and imagination.",
    whatToExpect: "🕑 3 hours 🙌🏼 In-person Workshop, Highly interactive",
    keyTakeaways: [
      "🌟 Reflect on what you desire in life",
      "🌟 Prototype different left paths and figure out your Best Theoretical Option and Best Doable Option for what you want in your career"
    ],
    date: "11/07/2025",
    time: "2:00 PM (GMT+8)",
    location: "MBC 10 L10 The Big Place",
    tags: ["Got Food! 🌮", "In-Person", "Workshop ⚒️", "🌱 Build Self"]
  },

  "Insights That Matter": {
    id: "insights-that-matter",
    title: "Insights That Matter",
    description: "Whether you're a product manager building your research foundations or a seasoned research practitioner looking to become more intentional in your craft, this is a hands-on workshop that delves into the messiness of sense-making, offering you a reflexive space to learn how to analyse and synthesise qualitative data through guided practice.",
    who: "Studio Dojo",
    date: "15/07/2025",
    time: "2:00 PM - 6:00 PM (GMT+8)",
    location: "MBC30 L11 Jupiter Rooms 1+2",
    tags: ["Course 📚", "In-Person", "🔨 Build Craft"]
  },

  "How Are You, Really?": {
    id: "how-are-you-really",
    title: "How Are You, Really?",
    synopsis: "Most of us answer that question on autopilot. But beneath the surface, many designers quietly wrestle with burnout, self-doubt, or a lingering sense of disconnection–especially in fast-moving, high-impact environments. In this talk, Jia Eenn shares a personal reflection framework that helped bring clarity and intention back into her work and life. Whether you're feeling stretched thin or simply ready to check in with yourself, this is an invitation to pause, reflect, and reconnect. *P.S. You're encouraged to bring a pen and paper, and to tune in on your earphones if you can.*",
    who: "Tay Jia Eenn",
    speakerBio: "Jia Eenn is a UX designer at GatherSG, where she designs case management systems that are anything but simple. Working in fast-paced teams and complex problem spaces, she has had her fair share of wins and tough days. In this session, she'll share a personal framework that has helped her reflect, reset, and stay grounded when things get intense.",
    date: "18/07/2025",
    time: "12:00 PM (GMT+8)",
    meetingLink: "https://go.gov.sg/designfestival-talk12pm",
    tags: ["12 PM", "🌱 Build Self", "🎙️ Talk", "💻 Online"]
  },

  "Just Trying My Best: A Designer's Journey into Accessibility": {
    id: "designer-accessibility-journey",
    title: "Just Trying My Best: A Designer's Journey into Accessibility",
    description: "Personal insights and practical lessons learned on the journey to creating more accessible design experiences.",
    who: "Liting Kway",
    tags: ["12 PM", "Build Self", "Talk", "Online"]
  },

  "Inclusive Design Week - Day 1": {
    id: "idw-day-1",
    title: "Inclusive Design Week - Day 1",
    description: "Building an inclusive Smart Nation starts with us",
    synopsis: "Join us virtually and/or physically from 29 July to 31 July for Inclusive Design Week 2025 (previously known as A11y week) as part of GovTech's month-long Design Festival. Learn from Design and Accessibility experts, from various government agencies, private industries like Apple, DBS Bank, Figma, National Institute of Education, and Persons with Disabilities (PwDs). Inclusive Design Week is the Government's digital inclusion learning festival for all public officers, especially those making Singapore a Smart (and Inclusive) Nation.",
    agenda: [
      "9:00-9:30 am - Registration",
      "9:30-9:40 am - Opening Speech by Mrs Josephine Teo (Minister for Digital Development and Information)",
      "9:40-10:10 am - Digital Inclusivity Tools Showcase",
      "10:10-11:40 am - Panel Discussion on Accessibility and Inclusivity",
      "11:40-1:00 pm - Lunch",
      "1:00-1:40 pm - Digital Accessibility Assessment Tool Showcase",
      "1:40-2:30 pm - Understanding the A11y Playground",
      "2:30-2:40 pm - Break",
      "2:40-3:40 pm - Agency Best Practices Sharing"
    ],
    who: "Design Festival Team",
    date: "29/07/2025",
    time: "9:00 AM - 4:00 PM (GMT+8)",
    location: "Enabling Village, UOB Ability Hub, 20 Lengkok Bahru, Singapore 159053",
    tags: ["In-Person", "💜 Inclusive Design Week"],
    imageUrl: "/assets/datasource/Inclusive Design Week - Day 1 21c9181c6cdb8001a78acfd62ba52976/image.png"
  },

  "Inclusive Design Week - Day 2": {
    id: "idw-day-2", 
    title: "Inclusive Design Week - Day 2",
    description: "Continue exploring inclusive design through hands-on activities and real-world case studies.",
    who: "Design Festival Team",
    tags: ["In-Person", "Inclusive Design Week"]
  },

  "Inclusive Design Week - Day 3": {
    id: "idw-day-3",
    title: "Inclusive Design Week - Day 3",
    description: "Final day of Inclusive Design Week featuring presentations, reflection, and next steps for implementation.",
    who: "Design Festival Team", 
    tags: ["In-Person", "Inclusive Design Week"]
  },

  "Closing Session": {
    id: "closing-session",
    title: "Closing Session",
    description: "Impact by Design Panel Discussion",
    synopsis: "Join us for the festival finale celebrating achievements, connections made, and looking ahead to the future of design.",
    agenda: [
      "2.15pm - Registration @ MBC10 The Big Place",
      "2.30pm - Inclusive Design Week panel",
      "4.20pm - Closing",
      "4.30pm onwards - TGIT drinks and snacks and Design Arcade (optional) + collect your swag!"
    ],
    who: "Eyung, Shalom, Amanda, Joy",
    date: "31/07/2025",
    time: "2:30 PM (GMT+8)",
    location: "MBC 10 L10 The Big Place",
    tags: ["Get Swag", "Got Food! 🌮", "In-Person", "✳️ Keynote", "🎙️ Talk", "💜 Inclusive Design Week", "🔨 Build Craft"],
    imageUrl: "/assets/datasource/Closing Session 21c9181c6cdb80fabbbad2535a91de3b/Frame_71.png"
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