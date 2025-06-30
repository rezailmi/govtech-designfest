"use client"

import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { agendaItems, type AgendaItem } from "@/data/agenda"
import { getEventDetailsByTitle } from "@/data/event-details"
import { useEventDetailModal } from "@/contexts/modal-context"
import { COLORS, URLS } from "@/lib/constants"

// Constants for better maintainability
const WEEK_TABS = [
  { value: "week1", label: "Week 1" },
  { value: "week2", label: "Week 2" },
  { value: "week3", label: "Week 3" },
  { value: "week4", label: "Week 4" },
  { value: "week5", label: "Week 5" },
] as const

const JOIN_URLS = {
  "12:00 PM": URLS.meetingTalk12pm,
  "1:00 PM": URLS.meetingTalk1pm,
} as const

// Badge configuration for better maintainability
const BADGE_CONFIG = {
  keynote: { text: "Keynote", variant: "keynote" as const },
  workshop: { text: "Workshop", variant: "keynote" as const },
  course: { text: "Course", variant: "keynote" as const },
  talk: { text: "Talk", variant: "keynote" as const },
  inPerson: { text: "In-person", variant: "outlined" as const },
  online: { text: "Online", variant: "outlined" as const },
} as const

interface Badge {
  text: string
  variant: "keynote" | "outlined"
}

// Helper function to determine badges for an agenda item
function getBadges(item: AgendaItem): Badge[] {
  const badges: Badge[] = []
  
  // Session type badges
  if (item.topics.some(topic => topic.toLowerCase().includes('keynote'))) {
    badges.push(BADGE_CONFIG.keynote)
  } else if (item.topics.some(topic => topic.toLowerCase().includes('workshop'))) {
    badges.push(BADGE_CONFIG.workshop)
  } else if (item.topics.some(topic => topic.toLowerCase().includes('course'))) {
    badges.push(BADGE_CONFIG.course)
  } else {
    badges.push(BADGE_CONFIG.talk)
  }
  
  // Location badge
  if (item.location === 'In-Person') {
    badges.push(BADGE_CONFIG.inPerson)
  } else {
    badges.push(BADGE_CONFIG.online)
  }
  
  return badges
}

// Helper function to get join URL for online sessions
function getJoinUrl(time: string): string {
  for (const [timeKey, url] of Object.entries(JOIN_URLS)) {
    if (time.includes(timeKey)) {
      return url
    }
  }
  return ""
}

// Badge component for reusability
interface BadgeProps {
  badge: Badge
}

function EventBadge({ badge }: BadgeProps) {
  return (
    <span 
      className={`
        px-2.5 py-0.5 rounded-md text-xs font-semibold leading-4
        ${badge.variant === 'keynote' 
          ? 'bg-pink-400 text-black' 
          : 'border border-gray-400 text-gray-300 bg-transparent'
        }
      `}
      style={{ fontFamily: 'Geist, sans-serif' }}
    >
      {badge.text}
    </span>
  )
}

// Event card component for better organization
interface EventCardProps {
  item: AgendaItem
  onViewDetails: (title: string) => void
}

function EventCard({ item, onViewDetails }: EventCardProps) {
  const badges = getBadges(item)
  const joinUrl = item.location === 'Online' ? getJoinUrl(item.time) : ""

  return (
    <div className="bg-gray-800 rounded-[44px] p-8">
      <div className="space-y-4">
        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, badgeIndex) => (
            <EventBadge key={badgeIndex} badge={badge} />
          ))}
        </div>

        {/* Event Title */}
        <h4 className="text-xl lg:text-2xl font-bold text-white" style={{ fontFamily: 'Geist, sans-serif' }}>
          {item.title}
        </h4>

        {/* Event Details */}
        <div className="space-y-3">
          {/* Speaker */}
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
            </svg>
            <span className="text-base font-medium text-white" style={{ fontFamily: 'Geist, sans-serif' }}>
              {item.speakers.map(speaker => speaker.name).join(', ')}
            </span>
          </div>

          {/* Date & Time */}
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
            <span className="text-base font-medium text-white" style={{ fontFamily: 'Geist, sans-serif' }}>
              {item.date}, {item.time}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="text-base font-medium text-white" style={{ fontFamily: 'Geist, sans-serif' }}>
              {item.location === 'Online' 
                ? 'Online'
                : `In person${item.locationDetails ? ` (${item.locationDetails})` : ''}`
              }
            </span>
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            {/* Join button for online sessions */}
            {joinUrl && (
              <a 
                href={joinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm inline-flex items-center gap-2"
                aria-label={`Join ${item.title} via SG-Teams`}
              >
                Join via SG-Teams
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            
            {/* View details button for all items */}
            <button 
              onClick={() => onViewDetails(item.title)}
              className="border border-gray-400 text-gray-300 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-700 hover:border-gray-300 transition-colors text-sm"
              aria-label={`View details for ${item.title}`}
            >
              View details
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Main AgendaSection component
export function AgendaSection() {
  const { open } = useEventDetailModal()

  const handleViewDetails = (title: string) => {
    const eventDetail = getEventDetailsByTitle(title)
    if (eventDetail) {
      open(eventDetail)
    }
  }

  // Helper function to group items by date
  const groupItemsByDate = (items: AgendaItem[]) => {
    return items.reduce((groups, item) => {
      const dateKey = `${item.day}, ${item.date}`
      if (!groups[dateKey]) {
        groups[dateKey] = []
      }
      groups[dateKey].push(item)
      return groups
    }, {} as Record<string, AgendaItem[]>)
  }

  // Helper function to render agenda cards for a week
  const renderWeekContent = (weekKey: string) => {
    const filteredItems = agendaItems.filter(item => item.week === weekKey)
    const groupedItems = groupItemsByDate(filteredItems)

    return (
      <div className="space-y-8">
        {Object.entries(groupedItems).map(([dateKey, items]) => (
          <div key={dateKey} className="space-y-4">
            {/* Day Section Title */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-300">{dateKey}</h3>
            </div>

            {/* Items for this day */}
            <div className="space-y-6">
              {items.map((item, index) => (
                <EventCard 
                  key={`${dateKey}-${index}`} 
                  item={item} 
                  onViewDetails={handleViewDetails}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section id="agenda" style={{ backgroundColor: COLORS.dark }} className="pt-12 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Image
            src="/assets/icons/zap-1.svg"
            alt=""
            width={32}
            height={32}
            className="mr-3 flex-shrink-0"
            aria-hidden="true"
          />
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-none">Agenda</h2>
        </div>
        
        {/* Week Tabs */}
        <Tabs defaultValue="week1" className="mb-8">
          <div className="sticky top-0 z-40 overflow-x-auto sm:overflow-x-visible mb-8 scrollbar-hide relative" style={{ backgroundColor: COLORS.dark }}>
            {/* Full width bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-600" aria-hidden="true"></div>
            <TabsList 
              className="h-12 bg-transparent gap-4 sm:gap-8 p-0 w-fit flex rounded-none relative"
              aria-label="Select week to view agenda"
            >
              {WEEK_TABS.map(({ value, label }) => (
                <TabsTrigger 
                  key={value}
                  value={value} 
                  className="relative h-12 px-4 bg-transparent border-0 rounded-none text-white data-[state=active]:bg-transparent data-[state=active]:text-white hover:text-pink-300 text-base font-medium cursor-pointer whitespace-nowrap flex-shrink-0 transition-colors duration-200 data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:right-0 data-[state=active]:after:h-1 data-[state=active]:after:bg-pink-400 data-[state=active]:after:content-['']"
                >
                  {label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {WEEK_TABS.map(({ value }) => (
            <TabsContent key={value} value={value}>
              {renderWeekContent(value)}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}