import Image from "next/image"
import { Keynote } from "@/data/keynotes"

interface KeynoteCardProps {
  keynote: Keynote
}

export function KeynoteCard({ keynote }: KeynoteCardProps) {
  const themeColors = {
    pink: 'bg-[#FF4DC3]',
    blue: 'bg-[#4D8EFF]'
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <div className="flex flex-col lg:flex-row">
        {/* Left side - Session Info */}
        <div className="flex-1 p-6 lg:p-8">
          <div className="max-w-2xl">
            <div className="flex flex-wrap gap-2 mb-6">
              {keynote.tags.map((tag, index) => (
                <span 
                  key={index}
                  className={`${themeColors[keynote.theme]} text-white px-3 py-1.5 rounded-full text-xs font-medium`}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-8">
              {keynote.title}
            </h3>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{keynote.date}, {keynote.time}</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
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
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
              <button className="border border-black text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm">
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
                <div className={`${themeColors[keynote.theme]} rounded-3xl mb-3`}>
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