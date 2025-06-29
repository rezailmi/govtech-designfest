import { HighlightSlide } from "@/data/highlights"
import { HighlightEventCard } from "./highlight-event-card"

interface HighlightSlideProps {
  slide: HighlightSlide
}

export function HighlightSlideComponent({ slide }: HighlightSlideProps) {
  return (
    <div className="w-full flex-shrink-0 px-6">
      <div className="max-w-7xl mx-auto">
        <div 
          className="relative rounded-[44px] p-12 w-full"
          style={{ backgroundColor: '#3B82F6' }}
        >
      <div className="space-y-12">
        {slide.events.map((event, index) => (
          <div key={event.id}>
            <HighlightEventCard event={event} />
            
            {/* Separator Line - only if not the last event */}
            {index < slide.events.length - 1 && (
              <div className="mt-12">
                <div className="h-px bg-black opacity-20"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  )
}