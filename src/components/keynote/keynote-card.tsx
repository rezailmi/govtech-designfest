import Image from "next/image"
import { Keynote } from "@/data/keynotes"

interface KeynoteCardProps {
  keynote: Keynote
}

export function KeynoteCard({ keynote }: KeynoteCardProps) {
  const themeColors = {
    pink: 'bg-pink-500',
    blue: 'bg-blue-500'
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <div className="flex flex-col lg:flex-row">
        {/* Left side - Session Info */}
        <div className="flex-1 p-8 lg:p-12">
          <div className="text-sm text-gray-600 mb-2">
            {keynote.date}, {keynote.time} | {keynote.location}
          </div>
          
          <h3 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            {keynote.title}
          </h3>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {keynote.tags.map((tag, index) => (
              <span 
                key={index}
                className={`${themeColors[keynote.theme]} text-white px-4 py-2 rounded-full text-sm font-medium`}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center">
              Watch recording
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
            <button className="border border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              View details
            </button>
          </div>
        </div>
        
        {/* Right side - Large Speaker Photos */}
        <div className={`${themeColors[keynote.theme]} lg:w-1/2 p-8 lg:p-12 flex flex-col justify-between min-h-[300px]`}>
          {/* Large connected speaker photos */}
          <div className="flex-1 flex">
            {keynote.speakers.map((speaker, index) => (
              <div 
                key={index}
                className={`flex-1 rounded-3xl overflow-hidden ${index < keynote.speakers.length - 1 ? 'mr-4' : ''}`}
              >
                <Image
                  src={speaker.image || "/assets/images/speaker-lillian.png"}
                  alt={speaker.name}
                  width={200}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Speaker info at bottom */}
          <div className="flex gap-4 mt-6">
            {keynote.speakers.map((speaker, index) => (
              <div key={index} className="flex-1">
                <div className="text-white font-bold text-lg mb-1">{speaker.name}</div>
                <div className="text-white/90 text-sm">{speaker.title}</div>
                <div className="text-white/90 text-sm">{speaker.organization}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}