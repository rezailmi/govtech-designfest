import { HighlightEvent } from "@/data/highlights"
import { Info } from "lucide-react"

interface HighlightEventCardProps {
  event: HighlightEvent
  onViewDetails?: (title: string) => void
}

export function HighlightEventCard({ event, onViewDetails }: HighlightEventCardProps) {
  return (
    <div className="space-y-4">
      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        {event.badges.map((badge, index) => (
          <span 
            key={index}
            className={`
              px-2.5 pt-1 pb-0.5 rounded-md text-xs font-semibold leading-4
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
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
          <span className="text-base font-medium text-black" style={{ fontFamily: 'Geist, sans-serif' }}>
            {event.speakers}
          </span>
        </div>

        {/* Date & Time */}
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12,6 12,12 16,14"/>
          </svg>
          <span className="text-base font-medium text-black" style={{ fontFamily: 'Geist, sans-serif' }}>
            {event.date}, {event.time}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2.5">
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span className="text-base font-medium text-black" style={{ fontFamily: 'Geist, sans-serif' }}>
            {event.location}
            {event.locationDetails && event.location === 'In-Person' && (
              <span> ({event.locationDetails})</span>
            )}
          </span>
        </div>

        {/* Booking Status */}
        {event.fullyBooked && (
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
            </svg>
            <span className="text-base font-bold text-black" style={{ fontFamily: 'Geist, sans-serif' }}>
              Fully booked
            </span>
          </div>
        )}
        {event.almostFull && (
          <div className="flex items-center gap-2.5">
            <Info className="w-5 h-5 text-black" />
            <span className="text-base font-bold text-black" style={{ fontFamily: 'Geist, sans-serif' }}>
              Almost full
            </span>
          </div>
        )}
      </div>

      {/* Action Button */}
      <div className="mt-6">
        <button 
          onClick={() => onViewDetails?.(event.title)}
          className="border border-black text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm"
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          View details
        </button>
      </div>
    </div>
  )
}