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
          <div className="text-sm text-gray-600 mb-3">
            {keynote.date}, {keynote.time} | {keynote.location}
          </div>
          
          <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
            {keynote.title}
          </h3>
          
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
          
          <div className="flex gap-3">
            <button className="border border-black text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-sm">
              View details
            </button>
          </div>
        </div>
        
        {/* Right side - Compact Speaker Photos */}
        <div className="w-full lg:w-[450px] p-6 lg:p-8 flex flex-col justify-center">
          <div className={`flex gap-2 lg:gap-4 ${keynote.speakers.length === 1 ? 'justify-center' : 'justify-center lg:justify-end'}`}>
            {keynote.speakers.slice(0, 2).map((speaker, index) => (
              <div 
                key={index}
                className="flex flex-col items-center flex-1 lg:flex-none"
              >
                <div className={`${themeColors[keynote.theme]} rounded-3xl mb-3`}>
                  <div className="w-32 h-32 lg:w-56 lg:h-56 rounded-3xl overflow-hidden">
                    <Image
                      src={speaker.image}
                      alt={speaker.name}
                      width={224}
                      height={224}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Speaker info below each photo */}
                <div className="text-center w-32 lg:w-56 mt-2">
                  <div className="text-black font-semibold mb-1 leading-tight text-xs lg:text-sm break-words">{speaker.name}</div>
                  <div className="text-gray-600 leading-tight text-xs lg:text-sm break-words">{speaker.title}</div>
                  <div className="text-gray-600 leading-tight text-xs lg:text-sm break-words">{speaker.organization}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}