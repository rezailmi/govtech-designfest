import { HighlightEvent } from "@/data/highlights"

interface HighlightEventCardProps {
  event: HighlightEvent
}

export function HighlightEventCard({ event }: HighlightEventCardProps) {
  return (
    <div className="space-y-4">
      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {event.badges.map((badge, index) => (
          <span 
            key={index}
            className={`
              px-2.5 py-0.5 rounded-md text-xs font-semibold leading-4
              ${badge.variant === 'keynote' 
                ? 'bg-pink-400 text-black' 
                : 'border border-black text-black bg-transparent'
              }
            `}
            style={{ fontFamily: 'Geist, sans-serif' }}
          >
            {badge.text}
          </span>
        ))}
      </div>

      {/* Event Title */}
      <h3 className="text-xl lg:text-2xl font-bold text-black" style={{ fontFamily: 'Geist, sans-serif' }}>
        {event.title}
      </h3>

      {/* Event Details */}
      <div className="space-y-3">
        {/* Speaker */}
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          <span className="text-base font-medium text-black" style={{ fontFamily: 'Geist, sans-serif' }}>
            {event.speakers}
          </span>
        </div>

        {/* Date & Time */}
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12,6 12,12 16,14"/>
          </svg>
          <span className="text-base font-medium text-black" style={{ fontFamily: 'Geist, sans-serif' }}>
            {event.date}, {event.time}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span className="text-base font-medium text-black" style={{ fontFamily: 'Geist, sans-serif' }}>
            {event.location}
          </span>
          {event.soldOut && (
            <span className="ml-2 px-2 py-0.5 bg-red-500 text-white text-xs font-semibold rounded-md" style={{ fontFamily: 'Geist, sans-serif' }}>
              SOLD OUT
            </span>
          )}
        </div>
      </div>
    </div>
  )
}