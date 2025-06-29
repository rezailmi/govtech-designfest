export interface AgendaItem {
  week: string;
  date: string;
  day: string;
  time: string;
  title: string;
  topics: string[];
  speakers: Array<{
    name: string;
    role?: string;
    company?: string;
  }>;
  location: string;
  locationDetails?: string;
}

// Helper function to parse date and determine week
function parseDate(dateStr: string): { date: string; day: string; time: string; week: string } {
  if (dateStr.includes('→')) {
    // Handle date ranges or prep periods
    if (dateStr.includes('weeks to Design Festival') || dateStr.includes('day to Design Festival')) {
      return { date: '', day: '', time: '', week: 'prep' };
    }
  }

  // Parse individual dates like "01/07/2025 10:30 AM (GMT+8) → 11:30 AM"
  const match = dateStr.match(/(\d{2})\/(\d{2})\/(\d{4})\s+(\d{1,2}:\d{2}\s+[AP]M)/);
  if (match) {
    const [, day, month, year, time] = match;
    const date = new Date(`${year}-${month}-${day}`);
    
    // Get day name
    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
    
    // Format date as "Jul 1, 2025"
    const formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    
    // Determine week based on date
    const dayOfMonth = parseInt(day);
    let week = '';
    if (dayOfMonth >= 1 && dayOfMonth <= 4) week = 'week1';
    else if (dayOfMonth >= 7 && dayOfMonth <= 11) week = 'week2';
    else if (dayOfMonth >= 14 && dayOfMonth <= 18) week = 'week3';
    else if (dayOfMonth >= 21 && dayOfMonth <= 25) week = 'week4';
    else if (dayOfMonth >= 28 && dayOfMonth <= 31) week = 'week5';
    else week = 'week1'; // default
    
    return {
      date: formattedDate,
      day: dayName,
      time: time.replace('(GMT+8)', '').trim(),
      week
    };
  }
  
  return { date: '', day: '', time: '', week: 'week1' };
}

// Helper function to parse location
function parseLocation(locationStr: string): string {
  if (!locationStr || locationStr === '-') return 'Online';
  if (locationStr.includes('MBC') || locationStr.includes('Enabling Village') || locationStr.includes('DBS') || locationStr.includes('IRAS') || locationStr.includes('Hilton') || locationStr.includes('Mandai')) {
    return 'In-Person';
  }
  if (locationStr.includes('Teams:') || locationStr.includes('Online')) {
    return 'Online';
  }
  return locationStr.trim() ? 'In-Person' : 'Online';
}

// Helper function to parse topics from tags
function parseTopics(tagsStr: string): string[] {
  if (!tagsStr || tagsStr === '-') return [];
  
  const topics = tagsStr.split(',').map(tag => {
    // Remove emojis and clean up
    return tag.replace(/[^\w\s-]/g, '').trim();
  }).filter(topic => topic.length > 0);
  
  return topics;
}

// Helper function to parse speakers
function parseSpeakers(whoStr: string): Array<{ name: string; role?: string; company?: string }> {
  if (!whoStr || whoStr === '-' || whoStr.trim() === '') {
    return [{ name: 'Design Festival Team', role: 'Event Organizers', company: 'GovTech Singapore' }];
  }
  
  const speakerNames = whoStr.split(',').map(name => name.trim()).filter(name => name.length > 0);
  
  return speakerNames.map(name => ({
    name,
    role: 'Speaker',
    company: 'GovTech Singapore'
  }));
}

// Raw CSV data transformed into agenda items
export const agendaItems: AgendaItem[] = [
  {
    week: 'week1',
    date: 'Jul 1, 2025',
    day: 'Tuesday',
    time: '10:30 AM',
    title: 'Festival Opening (feat. DCE Sau Sheong & Shiao-Yin)',
    topics: ['Get Swag', 'In-Person', 'Keynote', 'Talk'],
    speakers: [
      { name: 'DCE Sau Sheong', role: 'Deputy Chief Executive', company: 'GovTech Singapore' },
      { name: 'Shiao-Yin Kuik', role: 'Executive Director', company: 'Common Ground Civic Centre' }
    ],
    location: 'In-Person',
    locationDetails: 'MBC 10 - Level 10 (The Big Place)'
  },
  {
    week: 'week1',
    date: 'Jul 1, 2025',
    day: 'Tuesday',
    time: '11:30 AM',
    title: 'Design Arcade (Lunch Provided!)',
    topics: ['Got Food', 'In-Person'],
    speakers: [{ name: 'Design Festival Team', role: 'Event Organizers', company: 'GovTech Singapore' }],
    location: 'In-Person',
    locationDetails: 'MBC 10 - Level 10 (The Big Place)'
  },
  {
    week: 'week1',
    date: 'Jul 2, 2025',
    day: 'Wednesday',
    time: '12:00 PM',
    title: 'Measuring design value with a numbers prototype',
    topics: ['Talk', 'Online', 'Build Craft'],
    speakers: [{ name: 'Derrick Ng', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week1',
    date: 'Jul 3, 2025',
    day: 'Thursday',
    time: '11:30 AM',
    title: 'Fireside chat: Why isn\'t empathy enough?',
    topics: ['In-Person', 'Keynote', 'Talk'],
    speakers: [
      { name: 'MOS Jasmin', role: 'Minister of State', company: 'GovTech Singapore' },
      { name: 'ACE Bernard', role: 'Assistant Chief Executive', company: 'GovTech Singapore' }
    ],
    location: 'In-Person',
    locationDetails: 'MBC 10 - Level 10 (The Big Place)'
  },
  {
    week: 'week1',
    date: 'Jul 3, 2025',
    day: 'Thursday',
    time: '12:00 PM',
    title: 'Scrappy not crappy: Quick shortcuts to deliver a good product',
    topics: ['Talk', 'Online', 'Build Craft'],
    speakers: [{ name: 'Tara Hirebet', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week1',
    date: 'Jul 3, 2025',
    day: 'Thursday',
    time: '1:00 PM',
    title: 'UX Growing Pains: Designing in Different Worlds',
    topics: ['Build Self', 'Talk', 'Online', 'Build Craft'],
    speakers: [{ name: 'Tasha Yip', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week1',
    date: 'Jul 4, 2025',
    day: 'Friday',
    time: '9:00 AM',
    title: 'Prototyping with AI and moderated concept testing',
    topics: ['Course', 'In-Person', 'Build Craft'],
    speakers: [
      { name: 'Ruby Pryor', role: 'Founder', company: 'Rex' }
    ],
    location: 'In-Person',
    locationDetails: 'MBC 30 L11 Jupiter Rooms 1+2'
  },
  {
    week: 'week1',
    date: 'Jul 4, 2025',
    day: 'Friday',
    time: '1:00 PM',
    title: 'The Space Between',
    topics: ['Build Self', 'Talk', 'Online'],
    speakers: [{ name: 'Samuel Lim', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week1',
    date: 'Jul 4, 2025',
    day: 'Friday',
    time: '2:00 PM',
    title: 'Ctrl + Alt + Design Workshop',
    topics: ['In-Person', 'Workshop'],
    speakers: [{ name: 'Design Festival Team', role: 'Workshop Leaders', company: 'GovTech Singapore' }],
    location: 'In-Person',
    locationDetails: 'MBC 10 L10 The Big Place'
  },
  {
    week: 'week2',
    date: 'Jul 7, 2025',
    day: 'Monday',
    time: '11:30 AM',
    title: 'Fireside Chat with 2PS and Lillian Shieh',
    topics: ['In-Person', 'Keynote', 'Talk'],
    speakers: [
      { name: '2PS Augustin', role: 'Speaker', company: 'GovTech Singapore' },
      { name: 'Lillian Shieh', role: 'Speaker', company: 'GovTech Singapore' }
    ],
    location: 'In-Person',
    locationDetails: 'MBC 10 L10 The Big Place'
  },
  {
    week: 'week2',
    date: 'Jul 7, 2025',
    day: 'Monday',
    time: '12:00 PM',
    title: 'From Insights to Action: Driving Impact',
    topics: ['12 PM', 'Keynote', 'Build Self', 'Talk', 'Online', 'Build Craft'],
    speakers: [{ name: 'Ruby Pryor', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week2',
    date: 'Jul 7, 2025',
    day: 'Monday',
    time: '1:00 PM',
    title: 'Theming with design tokens: Flagship Design System',
    topics: ['1 PM', 'Talk', 'Online', 'Build Craft'],
    speakers: [{ name: 'Vivienne Chong', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week2',
    date: 'Jul 8, 2025',
    day: 'Tuesday',
    time: '9:30 AM',
    title: 'Data Storytelling',
    topics: ['Course', 'In-Person', 'Build Craft'],
    speakers: [{ name: 'Kontinentalist', role: 'Instructor', company: 'Kontinentalist' }],
    location: 'In-Person',
    locationDetails: 'MBC 30 Jupiter Rooms 1+2'
  },
  {
    week: 'week2',
    date: 'Jul 8, 2025',
    day: 'Tuesday',
    time: '1:00 PM',
    title: 'Driving Product Strategy Through Research: From Paper Forms to Product Roadmap',
    topics: ['1 PM', 'Talk', 'Online', 'Build Craft'],
    speakers: [{ name: 'Alicia Chong', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week2',
    date: 'Jul 9, 2025',
    day: 'Wednesday',
    time: '12:00 PM',
    title: 'Just Trying My Best: A Designer\'s Journey into Accessibility',
    topics: ['12 PM', 'Build Self', 'Talk', 'Online'],
    speakers: [{ name: 'Liting Kway', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week2',
    date: 'Jul 10, 2025',
    day: 'Thursday',
    time: '12:00 PM',
    title: 'Creating a digital engagement platform for the ONE Changi Community',
    topics: ['12 PM', 'Talk', 'Online', 'Build Craft'],
    speakers: [{ name: 'Brandon Tan', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week2',
    date: 'Jul 10, 2025',
    day: 'Thursday',
    time: '1:00 PM',
    title: 'Small hands, big barriers: Rethinking login for young learners',
    topics: ['1 PM', 'Talk', 'Online', 'Build Craft'],
    speakers: [{ name: 'Chong Ying Leong (Jordan)', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week2',
    date: 'Jul 11, 2025',
    day: 'Friday',
    time: '9:00 AM',
    title: 'Visual Facilitation Lab',
    topics: ['Course', 'In-Person', 'Build Self', 'Build Craft'],
    speakers: [{ name: 'Art of Awakening', role: 'Instructor', company: 'Art of Awakening' }],
    location: 'In-Person',
    locationDetails: 'MBC 10 L10 The Big Place'
  },
  {
    week: 'week2',
    date: 'Jul 11, 2025',
    day: 'Friday',
    time: '12:00 PM',
    title: 'How culture influences Design: A Tokyo case study',
    topics: ['12 PM', 'Talk', 'Online', 'Build Craft'],
    speakers: [{ name: 'Amanda Lu', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week2',
    date: 'Jul 11, 2025',
    day: 'Friday',
    time: '1:00 PM',
    title: 'User design principles towards our Punggol Digital District move',
    topics: ['1 PM', 'Talk', 'Online', 'Build Craft'],
    speakers: [{ name: 'Alan Tan', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week2',
    date: 'Jul 11, 2025',
    day: 'Friday',
    time: '2:00 PM',
    title: 'Design Your Life',
    topics: ['Got Food', 'In-Person', 'Workshop', 'Build Self'],
    speakers: [{ name: 'Design Thinking Community', role: 'Workshop Leaders', company: 'GovTech Singapore' }],
    location: 'In-Person',
    locationDetails: 'MBC 10 L10 The Big Place'
  },
  {
    week: 'week3',
    date: 'Jul 14, 2025',
    day: 'Monday',
    time: '12:00 PM',
    title: 'Flourishing at All Levels of the System',
    topics: ['12 PM', 'Keynote', 'Build Self', 'Talk', 'Online', 'Build Craft'],
    speakers: [{ name: 'Dr Douglas O\'Loughlin', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week3',
    date: 'Jul 15, 2025',
    day: 'Tuesday',
    time: '12:00 PM',
    title: 'Journeys are not single-use plastics: A sustainable approach to making reusable maps',
    topics: ['12 PM', 'Build Self', 'Talk', 'Online', 'Build Craft'],
    speakers: [{ name: 'Darren Yeo', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week3',
    date: 'Jul 15, 2025',
    day: 'Tuesday',
    time: '1:00 PM',
    title: 'Growing with GovTech: A UX Designer\'s Story of Learning, Leading, and Lasting',
    topics: ['1 PM', 'Build Self', 'Talk', 'Online'],
    speakers: [{ name: 'Eunice Chan', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week3',
    date: 'Jul 15, 2025',
    day: 'Tuesday',
    time: '2:00 PM',
    title: 'Insights That Matter',
    topics: ['Course', 'In-Person', 'Build Craft'],
    speakers: [{ name: 'Studio Dojo', role: 'Instructor', company: 'Studio Dojo' }],
    location: 'In-Person',
    locationDetails: 'MBC30 L11 Jupiter Rooms 1+2'
  },
  {
    week: 'week3',
    date: 'Jul 16, 2025',
    day: 'Wednesday',
    time: '12:00 PM',
    title: 'An honest account: Using AI in design research',
    topics: ['12 PM', 'Talk', 'Online', 'Build Craft'],
    speakers: [{ name: 'Serah Lee', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week3',
    date: 'Jul 16, 2025',
    day: 'Wednesday',
    time: '1:00 PM',
    title: 'From Blank Slate to Breakthroughs: Learning to Run Focus Group Discussions the Scrappy Way',
    topics: ['1 PM', 'Build Self', 'Talk', 'Online', 'Build Craft'],
    speakers: [
      { name: 'Cathy Chen Sheng', role: 'Speaker', company: 'GovTech Singapore' },
      { name: 'Matthew Ryan Lee', role: 'Speaker', company: 'GovTech Singapore' }
    ],
    location: 'Online'
  },
  {
    week: 'week3',
    date: 'Jul 17, 2025',
    day: 'Thursday',
    time: '12:00 PM',
    title: 'Find my center- how our body, emotions & language shape the observer we are',
    topics: ['12 PM', 'Build Self', 'Talk', 'Online'],
    speakers: [{ name: 'Sarah Xu', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week3',
    date: 'Jul 17, 2025',
    day: 'Thursday',
    time: '1:00 PM',
    title: 'Gatekeeping ________',
    topics: ['1 PM', 'Build Self', 'Talk', 'Online', 'Build Craft'],
    speakers: [
      { name: 'Jing Yeen Goh', role: 'Speaker', company: 'GovTech Singapore' },
      { name: 'Jaffry Jalal', role: 'Speaker', company: 'GovTech Singapore' }
    ],
    location: 'Online'
  },
  {
    week: 'week3',
    date: 'Jul 18, 2025',
    day: 'Friday',
    time: '12:00 PM',
    title: 'How Are You, Really?',
    topics: ['12 PM', 'Build Self', 'Talk', 'Online'],
    speakers: [{ name: 'Tay Jia Eenn', role: 'Speaker', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week3',
    date: 'Jul 18, 2025',
    day: 'Friday',
    time: '1:00 PM',
    title: 'Gamification on GPay',
    topics: ['1 PM', 'Talk', 'Online', 'Build Craft'],
    speakers: [
      { name: 'Chenxi Sun', role: 'Speaker', company: 'GovTech Singapore' },
      { name: 'Peggy Sim', role: 'Speaker', company: 'GovTech Singapore' }
    ],
    location: 'Online'
  },
  {
    week: 'week4',
    date: 'Jul 21, 2025',
    day: 'Monday',
    time: '9:30 AM',
    title: 'Learning Journey: DBS',
    topics: ['In-Person', 'Learning Journey', 'Build Craft', 'Service Design Week'],
    speakers: [{ name: 'Service Design Week', role: 'Organizers', company: 'GovTech Singapore' }],
    location: 'In-Person',
    locationDetails: 'DBS'
  },
  {
    week: 'week4',
    date: 'Jul 22, 2025',
    day: 'Tuesday',
    time: '12:00 PM',
    title: 'Lightning Talks: Public Officer Track',
    topics: ['12 PM', 'Talk', 'Online', 'Build Craft', 'Service Design Week'],
    speakers: [{ name: 'Service Design Week', role: 'Organizers', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week4',
    date: 'Jul 22, 2025',
    day: 'Tuesday',
    time: '2:00 PM',
    title: 'Ctrl + Alt + Design Workshop',
    topics: ['In-Person', 'Workshop', 'Build Craft'],
    speakers: [{ name: 'Design Festival Team', role: 'Workshop Leaders', company: 'GovTech Singapore' }],
    location: 'In-Person',
    locationDetails: 'MBC 30 L11 Jupiter Rooms 1+2'
  },
  {
    week: 'week4',
    date: 'Jul 23, 2025',
    day: 'Wednesday',
    time: '12:00 PM',
    title: 'Lightning Talks: Business Track',
    topics: ['12 PM', 'Talk', 'Online', 'Build Craft', 'Service Design Week'],
    speakers: [{ name: 'Service Design Week', role: 'Organizers', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week4',
    date: 'Jul 24, 2025',
    day: 'Thursday',
    time: '9:30 AM',
    title: 'Learning Journey: Mandai Wildlife Reserve',
    topics: ['In-Person', 'Learning Journey', 'Service Design Week'],
    speakers: [{ name: 'Service Design Week', role: 'Organizers', company: 'GovTech Singapore' }],
    location: 'In-Person',
    locationDetails: 'Mandai Wildlife Reserve'
  },
  {
    week: 'week4',
    date: 'Jul 24, 2025',
    day: 'Thursday',
    time: '12:00 PM',
    title: 'Lightning Talks: Citizen Track',
    topics: ['12 PM', 'Talk', 'Online', 'Build Craft', 'Service Design Week'],
    speakers: [{ name: 'Service Design Week', role: 'Organizers', company: 'GovTech Singapore' }],
    location: 'Online'
  },
  {
    week: 'week4',
    date: 'Jul 25, 2025',
    day: 'Friday',
    time: '9:30 AM',
    title: 'Learning Journey: IRAS',
    topics: ['In-Person', 'Learning Journey', 'Service Design Week'],
    speakers: [{ name: 'Service Design Week', role: 'Organizers', company: 'GovTech Singapore' }],
    location: 'In-Person',
    locationDetails: 'IRAS'
  },
  {
    week: 'week4',
    date: 'Jul 25, 2025',
    day: 'Friday',
    time: '3:00 PM',
    title: 'Learning Journey: Hilton',
    topics: ['In-Person', 'Learning Journey', 'Service Design Week'],
    speakers: [{ name: 'Service Design Week', role: 'Organizers', company: 'GovTech Singapore' }],
    location: 'In-Person',
    locationDetails: 'Hilton'
  },
  {
    week: 'week5',
    date: 'Jul 28, 2025',
    day: 'Monday',
    time: '9:00 AM',
    title: 'Behavioural Design: Where Behavioural Science Meets Creativity',
    topics: ['Course', 'In-Person', 'Build Craft'],
    speakers: [{ name: 'MakeIt Lab', role: 'Instructor', company: 'MakeIt Lab' }],
    location: 'In-Person',
    locationDetails: 'MBC 30 L11 Jupiter Rooms 1+2'
  },
  {
    week: 'week5',
    date: 'Jul 29, 2025',
    day: 'Tuesday',
    time: '9:00 AM',
    title: 'Inclusive Design Week - Day 1',
    topics: ['In-Person', 'Inclusive Design Week'],
    speakers: [{ name: 'Design Festival Team', role: 'Organizers', company: 'GovTech Singapore' }],
    location: 'In-Person',
    locationDetails: 'Enabling Village'
  },
  {
    week: 'week5',
    date: 'Jul 30, 2025',
    day: 'Wednesday',
    time: '9:00 AM',
    title: 'Inclusive Design Week - Day 2',
    topics: ['In-Person', 'Inclusive Design Week'],
    speakers: [{ name: 'Design Festival Team', role: 'Organizers', company: 'GovTech Singapore' }],
    location: 'In-Person',
    locationDetails: 'Enabling Village'
  },
  {
    week: 'week5',
    date: 'Jul 31, 2025',
    day: 'Thursday',
    time: '9:00 AM',
    title: 'Inclusive Design Week - Day 3',
    topics: ['In-Person', 'Inclusive Design Week'],
    speakers: [{ name: 'Design Festival Team', role: 'Organizers', company: 'GovTech Singapore' }],
    location: 'In-Person',
    locationDetails: 'Enabling Village'
  },
  {
    week: 'week5',
    date: 'Jul 31, 2025',
    day: 'Thursday',
    time: '2:30 PM',
    title: 'Closing Session',
    topics: ['Get Swag', 'Got Food', 'In-Person', 'Keynote', 'Talk', 'Inclusive Design Week', 'Build Craft'],
    speakers: [
      { name: 'Eyung', role: 'Speaker', company: 'GovTech Singapore' },
      { name: 'Shalom', role: 'Speaker', company: 'GovTech Singapore' },
      { name: 'Amanda', role: 'Speaker', company: 'GovTech Singapore' },
      { name: 'Joy', role: 'Speaker', company: 'GovTech Singapore' }
    ],
    location: 'In-Person',
    locationDetails: 'MBC 10 L10 The Big Place'
  }
];