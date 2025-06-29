import { agendaItems, type AgendaItem } from './agenda'

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

// Filter agenda items for workshops and courses
function getWorkshopsAndCourses(): AgendaItem[] {
  return agendaItems.filter(item => 
    item.topics.some(topic => 
      topic.toLowerCase() === 'workshop' || topic.toLowerCase() === 'course'
    )
  )
}

// Transform agenda item to highlight event format
function transformToHighlightEvent(item: AgendaItem, index: number): HighlightEvent {
  const badges: Array<{ text: string; variant: 'keynote' | 'outlined' }> = []
  
  // Add content type badge
  if (item.topics.some(topic => topic.toLowerCase() === 'course')) {
    badges.push({ text: 'Course', variant: 'keynote' })
  } else if (item.topics.some(topic => topic.toLowerCase() === 'workshop')) {
    badges.push({ text: 'Workshop', variant: 'keynote' })
  }
  
  // Add location badge
  if (item.location === 'In-Person') {
    badges.push({ text: 'In-person', variant: 'outlined' })
  } else if (item.location === 'Online') {
    badges.push({ text: 'Online', variant: 'outlined' })
  }
  
  // Add special feature badges
  if (item.topics.includes('Got Food')) {
    badges.push({ text: 'Got Food', variant: 'outlined' })
  }
  if (item.topics.includes('Get Swag')) {
    badges.push({ text: 'Get swag', variant: 'outlined' })
  }
  if (item.topics.includes('Build Craft')) {
    badges.push({ text: 'Build Craft', variant: 'outlined' })
  }
  if (item.topics.includes('Build Self')) {
    badges.push({ text: 'Build Self', variant: 'outlined' })
  }
  
  return {
    id: `event-${index + 1}`,
    badges,
    title: item.title,
    speakers: item.speakers.map(speaker => speaker.name).join(', '),
    date: item.date,
    time: item.time,
    location: item.location,
    // Mark Visual Facilitation Lab as sold out (based on original data)
    soldOut: item.title === 'Visual Facilitation Lab'
  }
}

// Helper function to split items into chunks of maximum 2 items
function chunkItems<T>(items: T[], maxPerChunk: number = 2): T[][] {
  const chunks: T[][] = []
  for (let i = 0; i < items.length; i += maxPerChunk) {
    chunks.push(items.slice(i, i + maxPerChunk))
  }
  return chunks
}

// Generate highlight slides grouped by content type
function generateHighlightSlides(): HighlightSlide[] {
  const workshopsAndCourses = getWorkshopsAndCourses()
  
  // Separate courses and workshops
  const courses = workshopsAndCourses.filter(item => 
    item.topics.some(topic => topic.toLowerCase() === 'course')
  )
  const workshops = workshopsAndCourses.filter(item => 
    item.topics.some(topic => topic.toLowerCase() === 'workshop')
  )
  
  const slides: HighlightSlide[] = []
  let eventIdCounter = 1
  
  // Create course slides (maximum 2 items per slide)
  if (courses.length > 0) {
    const courseChunks = chunkItems(courses, 2)
    courseChunks.forEach((chunk, chunkIndex) => {
      slides.push({
        id: `courses-slide-${chunkIndex + 1}`,
        events: chunk.map((course) => {
          const event = transformToHighlightEvent(course, eventIdCounter - 1)
          eventIdCounter++
          return event
        })
      })
    })
  }
  
  // Create workshop slides (maximum 2 items per slide)
  if (workshops.length > 0) {
    const workshopChunks = chunkItems(workshops, 2)
    workshopChunks.forEach((chunk, chunkIndex) => {
      slides.push({
        id: `workshops-slide-${chunkIndex + 1}`,
        events: chunk.map((workshop) => {
          const event = transformToHighlightEvent(workshop, eventIdCounter - 1)
          eventIdCounter++
          return event
        })
      })
    })
  }
  
  return slides
}

export const highlightSlides: HighlightSlide[] = generateHighlightSlides()