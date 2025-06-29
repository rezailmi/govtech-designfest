"use client"

import { HighlightsCarousel, HighlightsCarouselRef } from "./highlights-carousel"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"

export function HighlightsSection() {
  const carouselRef = useRef<HighlightsCarouselRef>(null)
  const [navigationState, setNavigationState] = useState({
    canGoPrev: false,
    canGoNext: true
  })

  // Update navigation state when carousel changes
  useEffect(() => {
    const updateNavigationState = () => {
      if (carouselRef.current) {
        setNavigationState({
          canGoPrev: carouselRef.current.canGoPrev,
          canGoNext: carouselRef.current.canGoNext
        })
      }
    }
    
    // Initial update
    updateNavigationState()
    
    // Set up interval to check for changes
    const interval = setInterval(updateNavigationState, 100)
    
    return () => clearInterval(interval)
  }, [])
  return (
    <section id="highlights" style={{ backgroundColor: '#080c1b' }} className="pt-24 pb-12">
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
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
            
            {/* Navigation Controls */}
            <div className="flex items-center space-x-3">
              {/* Previous Arrow */}
              <button
                onClick={() => carouselRef.current?.prevSlide()}
                disabled={!navigationState.canGoPrev}
                className="
                  w-12 h-12 rounded-full border-2 border-white bg-transparent flex items-center justify-center
                  transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed
                  enabled:hover:bg-white
                "
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 text-white group-enabled:group-hover:text-black transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Arrow */}
              <button
                onClick={() => carouselRef.current?.nextSlide()}
                disabled={!navigationState.canGoNext}
                className="
                  w-12 h-12 rounded-full border-2 border-white bg-transparent flex items-center justify-center
                  transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed
                  enabled:hover:bg-white
                "
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 text-white group-enabled:group-hover:text-black transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <HighlightsCarousel ref={carouselRef} />
    </section>
  )
}