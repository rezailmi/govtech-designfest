"use client"

import { useState, useRef } from "react"
import { highlightSlides } from "@/data/highlights"
import { HighlightSlideComponent } from "./highlight-slide"

export function HighlightsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = highlightSlides.length
  
  // Touch handling
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)
  const isDragging = useRef<boolean>(false)

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    isDragging.current = true
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!isDragging.current) return
    isDragging.current = false
    
    const swipeThreshold = 50
    const swipeDistance = touchStartX.current - touchEndX.current
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        // Swiped left - go to next slide
        nextSlide()
      } else {
        // Swiped right - go to previous slide
        prevSlide()
      }
    }
  }

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div 
        className="overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 24}px))`
          }}
        >
          {highlightSlides.map((slide) => (
            <HighlightSlideComponent key={slide.id} slide={slide} />
          ))}
        </div>
      </div>

      {/* Navigation Controls - Bottom Level */}
      <div className="mt-8 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Previous Arrow */}
        {currentSlide > 0 ? (
          <button
            onClick={prevSlide}
            className="
              w-12 h-12 rounded-full border-2 border-white bg-transparent flex items-center justify-center
              transition-all duration-200 hover:bg-white group
            "
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-white group-hover:text-black transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        ) : (
          <div className="w-12 h-12"></div>
        )}

        {/* Slide Indicators */}
        <div className="flex space-x-2">
          {highlightSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`
                w-3 h-3 rounded-full border-2 border-white transition-all duration-200
                ${index === currentSlide 
                  ? 'bg-white' 
                  : 'bg-transparent hover:bg-white hover:bg-opacity-20'
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Arrow */}
        {currentSlide < totalSlides - 1 ? (
          <button
            onClick={nextSlide}
            className="
              w-12 h-12 rounded-full border-2 border-white bg-transparent flex items-center justify-center
              transition-all duration-200 hover:bg-white group
            "
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-white group-hover:text-black transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <div className="w-12 h-12"></div>
        )}
        </div>
      </div>
    </div>
  )
}