import { HighlightsCarousel } from "./highlights-carousel"
import Image from "next/image"

export function HighlightsSection() {
  return (
    <section id="highlights" style={{ backgroundColor: '#080c1b' }} className="pt-24 pb-12">
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center mb-8">
            <Image
              src="/assets/icons/star-1.svg"
              alt="Star Icon"
              width={40}
              height={40}
              className="mr-3 flex-shrink-0"
            />
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-none" style={{ fontFamily: 'Geist, sans-serif' }}>
              Highlights
            </h2>
          </div>
        </div>
      </div>
      
      <HighlightsCarousel />
    </section>
  )
}