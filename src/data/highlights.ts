export interface HighlightEvent {
  id: string
  badges: Array<{
    text: string
    variant: 'keynote' | 'outlined'
  }>
  title: string
  speakers: string
  date: string
  time: string
  location: string
  soldOut?: boolean
}

export interface HighlightSlide {
  id: string
  events: HighlightEvent[]
}

export const highlightSlides: HighlightSlide[] = [
  {
    id: 'slide-1',
    events: [
      {
        id: 'event-1',
        badges: [
          { text: 'Keynote', variant: 'keynote' },
          { text: 'In-person', variant: 'outlined' },
          { text: 'Get swag', variant: 'outlined' }
        ],
        title: 'Ctrl + Alt + Design Workshop',
        speakers: 'MOS Jasmin, ACE Bernard',
        date: '03 Jul 2025',
        time: '11:30 AM',
        location: 'MBC 10, Level 10 (The Big Place)',
        soldOut: true
      },
      {
        id: 'event-2',
        badges: [
          { text: 'Keynote', variant: 'keynote' },
          { text: 'In-person', variant: 'outlined' },
          { text: 'Get swag', variant: 'outlined' }
        ],
        title: 'Closing Session',
        speakers: 'Joy Ng, Amanda Yip, Eyung Lim, Shalom Lim',
        date: '31 Jul 2025',
        time: '2:30 PM',
        location: 'MBC 10, Level 10 (The Big Place)'
      }
    ]
  },
  {
    id: 'slide-2',
    events: [
      {
        id: 'event-3',
        badges: [
          { text: 'Keynote', variant: 'keynote' },
          { text: 'Online', variant: 'outlined' },
          { text: 'Build Craft', variant: 'outlined' }
        ],
        title: 'Fireside Chat with 2PS and Lillian Shieh',
        speakers: '2PS Augustin, Lillian Shieh',
        date: '07 Jul 2025',
        time: '11:30 AM',
        location: 'In-Person'
      },
      {
        id: 'event-4',
        badges: [
          { text: 'Design craft', variant: 'keynote' },
          { text: 'In-person', variant: 'outlined' },
          { text: 'Course', variant: 'outlined' }
        ],
        title: 'Data Storytelling',
        speakers: 'Kontinentalist Team',
        date: '08 Jul 2025',
        time: '9:30 AM',
        location: 'In-Person'
      }
    ]
  },
  {
    id: 'slide-3',
    events: [
      {
        id: 'event-5',
        badges: [
          { text: 'Design craft', variant: 'keynote' },
          { text: 'In-person', variant: 'outlined' },
          { text: 'Workshop', variant: 'outlined' }
        ],
        title: 'Visual Facilitation Lab',
        speakers: 'Art of Awakening Team',
        date: '11 Jul 2025',
        time: '9:00 AM',
        location: 'In-Person',
        soldOut: true
      },
      {
        id: 'event-6',
        badges: [
          { text: 'Keynote', variant: 'keynote' },
          { text: 'Online', variant: 'outlined' },
          { text: 'Talk', variant: 'outlined' }
        ],
        title: 'Flourishing at All Levels of the System',
        speakers: 'Dr Douglas O\'Loughlin',
        date: '14 Jul 2025',
        time: '12:00 PM',
        location: 'Online'
      }
    ]
  }
]