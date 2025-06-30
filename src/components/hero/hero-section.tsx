"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DraggableSticker } from "@/components/ui/draggable-sticker"
import { COLORS, URLS, FESTIVAL } from "@/lib/constants"

// Sticker configuration for easier maintenance
const STICKER_CONFIG = [
  {
    id: 'date',
    initialX: -12,
    initialY: 177,
    content: (
      <div className="relative">
        <div className="bg-white text-black px-4 py-3 lg:px-6 lg:py-4 rounded-xl transform -rotate-6 font-black text-base lg:text-lg shadow-lg border-4 border-white" style={{filter: 'drop-shadow(0 0 0 2px white)'}}>
          {FESTIVAL.dates}
        </div>
        <div className="absolute top-0 left-0 -z-10 w-full h-full bg-pink-300 rounded-xl transform -rotate-6 translate-x-2 translate-y-2"></div>
      </div>
    )
  },
  {
    id: 'year',
    initialX: -63,
    initialY: 225,
    content: (
      <div className="text-white px-4 py-2 lg:px-6 lg:py-3 rounded-2xl transform rotate-3 font-black text-xl lg:text-2xl shadow-lg border-4 border-white" style={{backgroundColor: COLORS.blue, filter: 'drop-shadow(0 0 0 2px white)'}}>
        {FESTIVAL.year}
      </div>
    )
  },
  {
    id: 'for-everyone',
    initialX: 66,
    initialY: 227,
    content: (
      <div className="text-black px-2 py-1 lg:px-3 lg:py-2 rounded-lg transform -rotate-3 font-black shadow-lg border-4 border-white" style={{backgroundColor: COLORS.lightBlue, filter: 'drop-shadow(0 0 0 2px white)'}}>
        <div className="text-[6px] lg:text-[10px] font-semibold leading-normal">FOR</div>
        <div className="text-xs lg:text-sm font-black leading-snug">EVERYONE</div>
        <div className="text-[6px] lg:text-[10px] font-semibold leading-normal">BY</div>
        <div className="text-xs lg:text-sm font-black leading-snug">DESIGNERS</div>
      </div>
    )
  },
  {
    id: 'star',
    initialX: 99,
    initialY: 178,
    content: (
      <div className="w-9 h-9 lg:w-12 lg:h-12 transform rotate-12">
        <Image
          src="/assets/icons/star-1.svg"
          alt="Star Icon"
          width={48}
          height={48}
          className="w-full h-full pointer-events-none"
          draggable={false}
        />
      </div>
    )
  },
  {
    id: 'lightning',
    initialX: -121,
    initialY: 246,
    content: (
      <div className="w-9 h-9 lg:w-12 lg:h-12 transform rotate-12">
        <Image
          src="/assets/icons/zap-1.svg"
          alt="Lightning Icon"
          width={48}
          height={48}
          className="w-full h-full pointer-events-none"
          draggable={false}
        />
      </div>
    )
  }
] as const

// Navigation items configuration
const NAV_ITEMS = [
  { id: 'keynotes', label: 'Keynotes' },
  { id: 'agenda', label: 'Agenda' }
] as const

interface HeroSectionProps {
  scrollY: number
}

// External link icon component for reusability
function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

// Scroll to section function
function scrollToSection(sectionId: string) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
}

export function HeroSection({ scrollY }: HeroSectionProps) {
  return (
    <>
      {/* Overscroll Background - purple hero color */}
      <div className="fixed inset-0 -z-10" style={{backgroundColor: COLORS.hero}} />
      
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden" 
        style={{backgroundColor: COLORS.hero}}
        aria-label={`${FESTIVAL.name} Hero Section`}
      >
        {/* Background Hero Illustration with Parallax */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
          aria-hidden="true"
        >
          <Image 
            src="/assets/icons/illustrations/hero-illustration.png" 
            alt="" 
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Header Container */}
        <header className="absolute top-0 left-0 right-0 p-4 md:p-8">
          <div className="flex flex-col gap-6 md:gap-4">
            {/* Mobile: Logo centered at top */}
            <div className="flex md:hidden justify-center">
              <Image 
                src="/assets/icons/logos/gdf-logo.svg" 
                alt="GovTech Design Festival" 
                width={120}
                height={48}
                className="h-10 w-auto"
                priority
              />
            </div>
            
            {/* Desktop: Three column layout */}
            <div className="flex items-center justify-between">
              {/* Left Navigation - Keynotes, Agenda */}
              <nav className="hidden md:flex items-center gap-8 text-white flex-1" aria-label="Main navigation">
                {NAV_ITEMS.map((item) => (
                  <button 
                    key={item.id}
                    onClick={() => scrollToSection(item.id)} 
                    className="hover:text-pink-300 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-300 rounded px-2 py-1"
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              
              {/* Center Logo - Desktop only */}
              <div className="hidden md:flex justify-center">
                <Image 
                  src="/assets/icons/logos/gdf-logo.svg" 
                  alt="GovTech Design Festival" 
                  width={120}
                  height={48}
                  className="h-12 w-auto"
                  priority
                />
              </div>
              
              {/* Right Navigation - People, Register */}
              <div className="hidden md:flex items-center justify-end gap-8 text-white flex-1">
                <a 
                  href="/people" 
                  className="hover:text-pink-300 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-300 rounded px-2 py-1"
                  aria-label="View people page"
                >
                  People
                </a>
                <Button asChild className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-lg font-semibold focus:ring-2 focus:ring-pink-300 focus:ring-offset-2">
                  <a 
                    href={URLS.register} 
                    className="flex items-center" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Register for ${FESTIVAL.name} (opens in new tab)`}
                  >
                    Register
                    <ExternalLinkIcon className="ml-1 w-4 h-4" />
                  </a>
                </Button>
              </div>
              
              {/* Mobile Navigation - All links in a row */}
              <nav className="flex md:hidden items-center justify-between gap-2 text-white text-sm w-full px-2" aria-label="Mobile navigation">
                {NAV_ITEMS.map((item) => (
                  <button 
                    key={`mobile-${item.id}`}
                    onClick={() => scrollToSection(item.id)} 
                    className="hover:text-pink-300 transition-colors flex-1 text-center focus:outline-none focus:ring-2 focus:ring-pink-300 rounded px-1 py-1"
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {item.label}
                  </button>
                ))}
                <a 
                  href="/people" 
                  className="hover:text-pink-300 transition-colors text-center flex-1 focus:outline-none focus:ring-2 focus:ring-pink-300 rounded px-1 py-1"
                  aria-label="View people page"
                >
                  People
                </a>
                <Button asChild className="bg-black text-white hover:bg-gray-800 px-2 py-1.5 rounded-lg font-semibold text-sm flex-1 focus:ring-2 focus:ring-pink-300 focus:ring-offset-1">
                  <a 
                    href={URLS.register} 
                    className="flex items-center justify-center" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Register for ${FESTIVAL.name} (opens in new tab)`}
                  >
                    Register
                    <ExternalLinkIcon className="ml-1 w-3 h-3" />
                  </a>
                </Button>
              </nav>
            </div>
          </div>
        </header>

        {/* Draggable Festival Stickers */}
        {STICKER_CONFIG.map((sticker) => (
          <DraggableSticker 
            key={sticker.id}
            initialX={sticker.initialX} 
            initialY={sticker.initialY}
          >
            {sticker.content}
          </DraggableSticker>
        ))}
      </section>
    </>
  )
}