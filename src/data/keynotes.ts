export interface Speaker {
  name: string
  title: string
  organization: string
  image?: string
}

export interface Keynote {
  id: string
  title: string
  date: string
  time: string
  location: string
  speakers: Speaker[]
  theme: 'pink' | 'blue'
  tags: string[]
  joinUrl?: string
}

export const keynotes: Keynote[] = [
  {
    id: 'festival-opening',
    title: 'Festival Opening (feat. DCE Sau Sheong & Shiao-Yin)',
    date: '01 Jul 2025',
    time: '10:30 AM → 11:30 AM',
    location: 'MBC 10 - Level 10 (The Big Place)',
    speakers: [
      {
        name: 'DCE Sau Sheong',
        title: 'Deputy Chief Executive',
        organization: 'GovTech Singapore',
        image: '/assets/images/speaker-dce-sau-sheong.png'
      },
      {
        name: 'Shiao-Yin Kuik',
        title: 'Executive Director',
        organization: 'Common Ground Civic Centre',
        image: '/assets/images/speaker-shiao-yin.png'
      }
    ],
    theme: 'blue',
    tags: ['Get Swag', 'In-Person', 'Keynote', 'Talk']
  },
  {
    id: 'empathy-fireside',
    title: 'Fireside chat: Why isn\'t empathy enough?',
    date: '03 Jul 2025',
    time: '11:30 AM',
    location: 'MBC 10 - Level 10 (The Big Place)',
    speakers: [
      {
        name: 'MOS Jasmin',
        title: 'Minister of State',
        organization: 'MDDI and MOE',
        image: '/assets/images/speaker-jasmin.png'
      },
      {
        name: 'ACE Bernard',
        title: 'Asst Chief Executive',
        organization: 'GovTech Singapore',
        image: '/assets/images/speaker-bernard.png'
      }
    ],
    theme: 'blue',
    tags: ['In-Person', 'Keynote', 'Talk']
  },
  {
    id: 'policy-impact-fireside',
    title: 'Fireside Chat with 2PS and Lillian Shieh',
    date: '07 Jul 2025',
    time: '11:30 AM',
    location: 'MBC 10 - Level 10 (The Big Place)',
    speakers: [
      {
        name: '2PS Augustin',
        title: 'Second Permanent Secretary',
        organization: 'Smart Nation Group',
        image: '/assets/images/speaker-2ps-augustin-lee.png'
      },
      {
        name: 'Lillian Shieh',
        title: 'Head, Design Practice',
        organization: 'GovTech Singapore',
        image: '/assets/images/speaker-lillian.png'
      }
    ],
    theme: 'blue',
    tags: ['In-Person', 'Keynote', 'Talk']
  },
  {
    id: 'insights-action',
    title: 'From Insights to Action: Driving Impact',
    date: '07 Jul 2025',
    time: '12:00 PM',
    location: 'Online (SG-Teams)',
    speakers: [
      {
        name: 'Ruby Pryor',
        title: 'Founder',
        organization: 'Rex',
        image: '/assets/images/speaker-ruby.png'
      }
    ],
    theme: 'pink',
    tags: ['12 PM', 'Keynote', 'Build Self', 'Talk', 'Online', 'Build Craft'],
    joinUrl: 'https://go.gov.sg/designfestival-talk12pm'
  },
  {
    id: 'flourishing-system',
    title: 'Flourishing at All Levels of the System',
    date: '14 Jul 2025',
    time: '12:00 PM',
    location: 'Online (SG-Teams)',
    speakers: [
      {
        name: 'Dr Douglas O\'Loughlin',
        title: 'Accessibility Expert',
        organization: 'International Consultant',
        image: '/assets/images/speaker-douglas.png'
      }
    ],
    theme: 'pink',
    tags: ['12 PM', 'Keynote', 'Build Self', 'Talk', 'Online', 'Build Craft'],
    joinUrl: 'https://go.gov.sg/designfestival-talk12pm'
  },
]