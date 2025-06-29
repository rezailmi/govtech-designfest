"use client"

import { useState, useRef, forwardRef, useImperativeHandle } from "react"
import { highlightSlides } from "@/data/highlights"
import { HighlightSlideComponent } from "./highlight-slide"

export interface HighlightsCarouselRef {
  nextSlide: () => void
  prevSlide: () => void
  currentSlide: number
  totalSlides: number
  canGoNext: boolean
  canGoPrev: boolean
}

export const HighlightsCarousel = forwardRef<HighlightsCarouselRef>((props, ref) => {
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

  // Expose functions to parent component
  useImperativeHandle(ref, () => ({
    nextSlide,
    prevSlide,
    currentSlide,
    totalSlides,
    canGoNext: currentSlide < totalSlides - 1,
    canGoPrev: currentSlide > 0
  }))

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

    </div>
  )
})