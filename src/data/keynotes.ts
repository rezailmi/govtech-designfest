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
}

export const keynotes: Keynote[] = [
  {
    id: 'festival-opening',
    title: 'Festival opening!',
    date: '03 Jul 2025',
    time: '11:30 AM',
    location: 'MBC 10, Level 10 (The Big Place)',
    speakers: [
      {
        name: 'Jasmin LAU',
        title: 'Minister of State',
        organization: 'MDDI and MOE'
      },
      {
        name: 'Bernard TOH',
        title: 'Asst Chief Executive',
        organization: 'Strategy, Corporate, Governance, GovTech'
      }
    ],
    theme: 'pink',
    tags: ['KEYNOTE']
  },
  {
    id: 'empathy-fireside',
    title: 'Fireside chat — Why isn\'t empathy enough?',
    date: '03 Jul 2025',
    time: '11:30 AM',
    location: 'MBC 10, Level 10 (The Big Place)',
    speakers: [
      {
        name: 'Jasmin LAU',
        title: 'Minister of State',
        organization: 'MDDI and MOE'
      },
      {
        name: 'Bernard TOH',
        title: 'Asst Chief Executive',
        organization: 'Strategy, Corporate, Governance, GovTech'
      }
    ],
    theme: 'blue',
    tags: ['KEYNOTE']
  },
  {
    id: 'policy-impact-fireside',
    title: 'Fireside chat — From policy to impact: Design\'s role in government',
    date: '03 Jul 2025',
    time: '11:30 AM',
    location: 'MBC 10, Level 10 (The Big Place)',
    speakers: [
      {
        name: 'Jasmin LAU',
        title: 'Minister of State',
        organization: 'MDDI and MOE'
      },
      {
        name: 'Bernard TOH',
        title: 'Asst Chief Executive',
        organization: 'Strategy, Corporate, Governance, GovTech'
      }
    ],
    theme: 'pink',
    tags: ['KEYNOTE']
  },
  {
    id: 'design-systems-scale',
    title: 'Building Design Systems for Government Scale',
    date: '14 Jul 2025',
    time: '2:00 PM',
    location: 'Design Stage: Building at scale',
    speakers: [
      {
        name: 'Ruby Pryor',
        title: 'Senior Design Researcher',
        organization: 'GovTech Singapore'
      }
    ],
    theme: 'blue',
    tags: ['KEYNOTE', 'DESIGN SYSTEMS']
  },
  {
    id: 'inclusive-design',
    title: 'Designing Inclusive Government Services',
    date: '14 Jul 2025',
    time: '12:00 PM',
    location: 'Accessibility Stage: Inclusive design',
    speakers: [
      {
        name: 'Dr Douglas O\'Loughlin',
        title: 'Accessibility Expert',
        organization: 'International Consultant'
      }
    ],
    theme: 'pink',
    tags: ['KEYNOTE', 'ACCESSIBILITY']
  },
  {
    id: 'digital-government',
    title: 'Digital-First Government: The Singapore Story',
    date: '21 Jul 2025',
    time: '3:00 PM',
    location: 'Innovation Stage: Digital government',
    speakers: [
      {
        name: 'MOS Jasmin Bernard',
        title: 'Minister of State',
        organization: 'Ministry of Communications'
      }
    ],
    theme: 'blue',
    tags: ['KEYNOTE', 'DIGITAL TRANSFORMATION']
  }
]