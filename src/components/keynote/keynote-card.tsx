import Image from "next/image"
import { Keynote } from "@/data/keynotes"

interface KeynoteCardProps {
  keynote: Keynote
  onViewDetails?: (title: string) => void
}

// Badge component for reusability with theme support
interface Badge {
  text: string
  variant: "keynote" | "outlined"
  theme?: "pink" | "blue"
}

interface BadgeProps {
  badge: Badge
}

function EventBadge({ badge }: BadgeProps) {
  const filledBgColor = badge.theme === 'blue' ? 'bg-blue-400' : 'bg-pink-400'
  
  return (
    <span 
      className={`
        px-2.5 pt-1 pb-0.5 rounded-md text-xs font-semibold leading-4
        ${badge.variant === 'keynote' 
          ? `${filledBgColor} text-black` 
          : 'border border-black text-black bg-transparent'
        }
      `}
      style={{ fontFamily: 'Geist, sans-serif' }}
    >
      {badge.text}
    </span>
  )
}

export function KeynoteCard({ keynote, onViewDetails }: KeynoteCardProps) {
  // Convert keynote tags to badge format - first tag filled, rest outlined
  const badges: Badge[] = keynote.tags.map((tag, index) => ({
    text: tag,
    variant: index === 0 ? "keynote" as const : "outlined" as const,
    theme: keynote.theme
  }))

  // Use appropriate background color based on theme
  const photoBgColor = keynote.theme === 'blue' ? 'bg-blue-400' : 'bg-pink-400'

  return (
    <div className="bg-white rounded-[44px] overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left side - Session Info */}
        <div className="flex-1 p-6 lg:p-8">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {badges.map((badge, index) => (
                <EventBadge key={index} badge={badge} />
              ))}
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-8">
              {keynote.title}
            </h3>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12,6 12,12 16,14"/>
                </svg>
                <span>{keynote.date}, {keynote.time}</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>{keynote.location}</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              {keynote.joinUrl && (
                <a 
                  href={keynote.joinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-sm inline-flex items-center gap-2"
                >
                  Join via SG-Teams
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              <button 
                onClick={() => onViewDetails?.(keynote.title)}
                className="border border-black text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm"
              >
                View details
              </button>
            </div>
          </div>
        </div>
        
        {/* Right side - Compact Speaker Photos */}
        <div className="w-full lg:w-[450px] p-6 lg:p-8 flex flex-col justify-center">
          <div className={`flex gap-2 lg:gap-4 justify-start lg:justify-end`}>
            {keynote.speakers.slice(0, 2).map((speaker, index) => (
              <div 
                key={index}
                className="flex flex-col items-center"
              >
                <div className={`${photoBgColor} rounded-3xl mb-3`}>
                  <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-3xl overflow-hidden">
                    <Image
                      src={speaker.image || "/assets/images/speaker-lillian.png"}
                      alt={speaker.name}
                      width={224}
                      height={224}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Speaker info below each photo */}
                <div className="text-center w-32 sm:w-48 lg:w-56 mt-2">
                  <div className="text-black font-semibold mb-1 leading-tight text-sm sm:text-base lg:text-lg break-words">{speaker.name}</div>
                  <div className="text-gray-600 leading-tight text-xs sm:text-sm lg:text-base break-words">{speaker.title}</div>
                  <div className="text-gray-600 leading-tight text-xs sm:text-sm lg:text-base break-words">{speaker.organization}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}