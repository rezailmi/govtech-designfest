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
  locationDetails?: string
  fullyBooked?: boolean
  almostFull?: boolean
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
    locationDetails: item.locationDetails,
    // Mark all items as fully booked except Visual Facilitation Lab (which is almost full)
    fullyBooked: item.title !== 'Visual Facilitation Lab',
    almostFull: item.title === 'Visual Facilitation Lab'
  }
}

// Helper function to split items into chunks with widow prevention
function chunkItems<T>(items: T[], maxPerChunk: number = 2): T[][] {
  if (items.length === 0) return []
  if (items.length <= maxPerChunk) return [items]
  
  const chunks: T[][] = []
  let remainingItems = [...items]
  
  while (remainingItems.length > 0) {
    // If we have exactly maxPerChunk + 1 items left, split them as 2 chunks to avoid widow
    if (remainingItems.length === maxPerChunk + 1) {
      const midpoint = Math.ceil(remainingItems.length / 2)
      chunks.push(remainingItems.slice(0, midpoint))
      chunks.push(remainingItems.slice(midpoint))
      break
    }
    // Otherwise, take maxPerChunk items
    else {
      chunks.push(remainingItems.slice(0, maxPerChunk))
      remainingItems = remainingItems.slice(maxPerChunk)
    }
  }
  
  return chunks
}

// Generate highlight slides combining workshops and courses
function generateHighlightSlides(): HighlightSlide[] {
  const workshopsAndCourses = getWorkshopsAndCourses()
  
  // Sort by type (workshops first, then courses) and then by date
  const sortedItems = workshopsAndCourses.sort((a, b) => {
    // First, sort by type (workshops before courses)
    const aIsWorkshop = a.topics.some(topic => topic.toLowerCase() === 'workshop')
    const bIsWorkshop = b.topics.some(topic => topic.toLowerCase() === 'workshop')
    
    if (aIsWorkshop && !bIsWorkshop) return -1
    if (!aIsWorkshop && bIsWorkshop) return 1
    
    // If same type, sort by date
    const aDate = new Date(a.date)
    const bDate = new Date(b.date)
    return aDate.getTime() - bDate.getTime()
  })
  
  // Split into chunks of maximum 2 items
  const chunks = chunkItems(sortedItems, 2)
  
  const slides: HighlightSlide[] = []
  let eventIdCounter = 1
  
  // Create slides with sorted content (maximum 2 items per slide)
  chunks.forEach((chunk, chunkIndex) => {
    slides.push({
      id: `highlights-slide-${chunkIndex + 1}`,
      events: chunk.map((item) => {
        const event = transformToHighlightEvent(item, eventIdCounter - 1)
        eventIdCounter++
        return event
      })
    })
  })
  
  return slides
}

export const highlightSlides: HighlightSlide[] = generateHighlightSlides()