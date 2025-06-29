"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MarqueeTicker } from "@/components/ui/marquee-ticker"
import { KeynoteList } from "@/components/keynote/keynote-list"
import MoreForYou from "@/components/event/MoreForYou"
import { HighlightsSection } from "@/components/event/highlights-section"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { agendaItems } from "@/data/agenda"

// Draggable Sticker Component
function DraggableSticker({ 
  children, 
  initialX, 
  initialY, 
  className = "",
  style = {},
  onPositionChange
}: {
  children: React.ReactNode
  initialX: number
  initialY: number
  className?: string
  style?: React.CSSProperties
  onPositionChange?: (x: number, y: number) => void
}) {
  const [position, setPosition] = useState({ x: initialX, y: initialY })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const stickerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    
    const newX = e.clientX - dragStart.x
    const newY = e.clientY - dragStart.y
    
    setPosition({ x: newX, y: newY })
    onPositionChange?.(newX, newY)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0]
    setIsDragging(true)
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y
    })
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    
    const touch = e.touches[0]
    const newX = touch.clientX - dragStart.x
    const newY = touch.clientY - dragStart.y
    
    setPosition({ x: newX, y: newY })
    onPositionChange?.(newX, newY)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  return (
    <div
      ref={stickerRef}
      className={`absolute select-none ${isDragging ? 'cursor-grabbing z-50' : 'cursor-grab z-40'} ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0) ${isDragging ? 'scale(1.05)' : 'scale(1)'}`,
        transition: isDragging ? 'none' : 'transform 0.2s ease-out',
        ...style
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </div>
  )
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Overscroll Background - purple hero color */}
      <div className="fixed inset-0 -z-10" style={{backgroundColor: '#70094E'}} />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden" style={{backgroundColor: '#70094E'}}>
        {/* Background Hero Illustration with Parallax */}
        <div 
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <Image 
            src="/assets/icons/illustrations/hero-illustration.png" 
            alt="GovTech Design Festival Hero Illustration" 
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Header Container */}
        <div className="absolute top-0 left-0 right-0 p-4 md:p-8">
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
              <div className="hidden md:flex items-center gap-8 text-white flex-1">
                <button onClick={() => document.getElementById('keynotes')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-pink-300 transition-colors">Keynotes</button>
                <button onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-pink-300 transition-colors">Agenda</button>
              </div>
              
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
                <a href="#people" className="hover:text-pink-300 transition-colors" target="_blank" rel="noopener noreferrer">
                  People
                </a>
                <Button asChild className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-lg font-semibold">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDiP5lcryP4mjwD49vUiuTZWw01ZMgw4ISNpM3kgfYfLCKHA/viewform" className="flex items-center" target="_blank" rel="noopener noreferrer">
                    Register
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </Button>
              </div>
              
              {/* Mobile Navigation - All links in a row */}
              <div className="flex md:hidden items-center justify-between gap-2 text-white text-sm w-full px-2">
                <button onClick={() => document.getElementById('keynotes')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-pink-300 transition-colors flex-1 text-center">Keynotes</button>
                <button onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-pink-300 transition-colors flex-1 text-center">Agenda</button>
                <a href="#people" className="hover:text-pink-300 transition-colors text-center flex-1" target="_blank" rel="noopener noreferrer">
                  People
                </a>
                <Button asChild className="bg-black text-white hover:bg-gray-800 px-2 py-1.5 rounded-lg font-semibold text-sm flex-1">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDiP5lcryP4mjwD49vUiuTZWw01ZMgw4ISNpM3kgfYfLCKHA/viewform" className="flex items-center justify-center" target="_blank" rel="noopener noreferrer">
                    Register
                    <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Draggable Festival Stickers */}
        
        {/* Date Sticker */}
        <DraggableSticker initialX={-12} initialY={177}>
          <div className="relative">
            <div className="bg-white text-black px-4 py-3 lg:px-6 lg:py-4 rounded-xl transform -rotate-6 font-black text-base lg:text-lg shadow-lg border-4 border-white" style={{filter: 'drop-shadow(0 0 0 2px white)'}}>
              1-31 JULY
            </div>
            <div className="absolute top-0 left-0 -z-10 w-full h-full bg-pink-300 rounded-xl transform -rotate-6 translate-x-2 translate-y-2"></div>
          </div>
        </DraggableSticker>
        
        {/* Year Sticker */}
        <DraggableSticker initialX={-63} initialY={225}>
          <div className="bg-[#2563EB] text-white px-4 py-2 lg:px-6 lg:py-3 rounded-2xl transform rotate-3 font-black text-xl lg:text-2xl shadow-lg border-4 border-white" style={{filter: 'drop-shadow(0 0 0 2px white)'}}>
            2025
          </div>
        </DraggableSticker>
        
        {/* For Everyone By Designers Sticker */}
        <DraggableSticker initialX={66} initialY={227}>
          <div className="bg-[#6CB4EE] text-black px-2 py-1 lg:px-3 lg:py-2 rounded-lg transform -rotate-3 font-black shadow-lg border-4 border-white" style={{filter: 'drop-shadow(0 0 0 2px white)'}}>
            <div className="text-[6px] lg:text-[10px] font-semibold leading-normal">FOR</div>
            <div className="text-xs lg:text-sm font-black leading-snug">EVERYONE</div>
            <div className="text-[6px] lg:text-[10px] font-semibold leading-normal">BY</div>
            <div className="text-xs lg:text-sm font-black leading-snug">DESIGNERS</div>
          </div>
        </DraggableSticker>

        {/* Draggable Star Icon */}
        <DraggableSticker initialX={99} initialY={178}>
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
        </DraggableSticker>

        {/* Draggable Lightning Icon */}
        <DraggableSticker initialX={-121} initialY={246}>
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
        </DraggableSticker>
      </section>

      {/* Marquee Ticker */}
      <MarqueeTicker />

      {/* CTAs Section */}
      <section className="py-16 px-6" style={{ backgroundColor: '#080c1b' }}>
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h2 className="text-white text-2xl lg:text-3xl font-medium leading-tight tracking-tight" style={{ fontFamily: 'Geist Mono, monospace' }}>
              We invite you to attend<br />
              GovTech Design Festival 2025
            </h2>
          </div>

          {/* Two Column CTAs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
            
            {/* Join Us CTA */}
            <div className="flex flex-col items-center text-center">
              {/* Join Us Illustration */}
              <div className="mb-6 h-[280px] flex items-center justify-center">
                <Image
                  src="/assets/icons/illustrations/illustration-join.png"
                  alt="Join Us"
                  width={280}
                  height={280}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h3 className="text-white text-lg lg:text-xl font-semibold mb-6 leading-tight min-h-[3rem] flex items-center justify-center">
                Latest announcements and updates
              </h3>
              
              <Button asChild className="bg-white text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                <a href="https://govtech.enterprise.slack.com/archives/C08UP6M33J5" className="flex items-center" target="_blank" rel="noopener noreferrer">
                  Join Slack channel
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </Button>
            </div>

            {/* Save Your Spot CTA */}
            <div className="flex flex-col items-center text-center">
              {/* Save Your Spot Illustration */}
              <div className="mb-6 h-[280px] flex items-center justify-center">
                <Image
                  src="/assets/icons/illustrations/illustration-register.png"
                  alt="Save your spot"
                  width={280}
                  height={280}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h3 className="text-white text-lg lg:text-xl font-semibold mb-6 leading-tight min-h-[3rem] flex items-center justify-center">
                Register now to attend
              </h3>
              
              <Button asChild className="bg-white text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDiP5lcryP4mjwD49vUiuTZWw01ZMgw4ISNpM3kgfYfLCKHA/viewform" className="flex items-center" target="_blank" rel="noopener noreferrer">
                  Register
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Keynote Section */}
      <section id="keynotes" className="bg-gray-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-8">
            <Image
              src="/assets/icons/star-1.svg"
              alt="Star Icon"
              width={40}
              height={40}
              className="mr-3 flex-shrink-0"
            />
            <h2 className="text-4xl lg:text-5xl font-bold text-black leading-none">Keynote</h2>
          </div>
          
          {/* Keynote Sessions List */}
          <KeynoteList />
        </div>
      </section>

      {/* Highlights Section */}
      <HighlightsSection />

      {/* Full Agenda Section */}
      <AgendaSection />

      {/* More For You Section */}
      <MoreForYou />

    </div>
  )
}

// Agenda Section Component
function AgendaSection() {


  // Helper function to group items by date
  const groupItemsByDate = (items: typeof agendaItems) => {
    return items.reduce((groups, item) => {
      const dateKey = `${item.day}, ${item.date}`;
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(item);
      return groups;
    }, {} as Record<string, typeof agendaItems>);
  }

  // Helper function to render agenda cards for a week
  const renderWeekContent = (weekKey: string) => {
    const filteredItems = agendaItems.filter(item => item.week === weekKey)
    const groupedItems = groupItemsByDate(filteredItems)

  return (
      <div className="space-y-8">
        {Object.entries(groupedItems).map(([dateKey, items]) => (
          <div key={dateKey} className="space-y-4">
            {/* Day Section Title */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-300">{dateKey}</h3>
        </div>

            {/* Items for this day */}
        <div className="space-y-6">
              {items.map((item, index) => {
                // Helper function to determine badges
                const getBadges = () => {
                  const badges = []
                  
                  // Session type badges
                  if (item.topics.some(topic => topic.toLowerCase().includes('keynote'))) {
                    badges.push({ text: 'Keynote', variant: 'keynote' })
                  } else if (item.topics.some(topic => topic.toLowerCase().includes('workshop'))) {
                    badges.push({ text: 'Workshop', variant: 'keynote' })
                  } else if (item.topics.some(topic => topic.toLowerCase().includes('course'))) {
                    badges.push({ text: 'Course', variant: 'keynote' })
                  } else {
                    badges.push({ text: 'Talk', variant: 'keynote' })
                  }
                  
                  // Location badge
                  if (item.location === 'In-Person') {
                    badges.push({ text: 'In-person', variant: 'outlined' })
                  } else {
                    badges.push({ text: 'Online', variant: 'outlined' })
                  }
                  
                  return badges
                }

                const badges = getBadges()

                return (
            <div 
              key={index} 
              className="bg-gray-800 rounded-xl p-8"
            >
              <div className="space-y-4">
                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {badges.map((badge, badgeIndex) => (
                    <span 
                      key={badgeIndex}
                      className={`
                        px-2.5 py-0.5 rounded-md text-xs font-semibold leading-4
                        ${badge.variant === 'keynote' 
                          ? 'bg-pink-400 text-black' 
                          : 'border border-gray-400 text-gray-300 bg-transparent'
                        }
                      `}
                      style={{ fontFamily: 'Geist, sans-serif' }}
                    >
                      {badge.text}
                    </span>
                  ))}
                </div>

                {/* Event Title */}
                <h4 className="text-xl lg:text-2xl font-bold text-white" style={{ fontFamily: 'Geist, sans-serif' }}>
                  {item.title}
                </h4>

                {/* Event Details */}
                <div className="space-y-3">
                  {/* Speaker */}
                  <div className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    <span className="text-base font-medium text-white" style={{ fontFamily: 'Geist, sans-serif' }}>
                      {item.speakers.map(speaker => speaker.name).join(', ')}
                    </span>
                  </div>

                  {/* Date & Time */}
                  <div className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12,6 12,12 16,14"/>
                    </svg>
                    <span className="text-base font-medium text-white" style={{ fontFamily: 'Geist, sans-serif' }}>
                      {item.date}, {item.time}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2.5">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span className="text-base font-medium text-white" style={{ fontFamily: 'Geist, sans-serif' }}>
                      {item.location === 'Online' 
                        ? 'Online'
                        : `In person${item.locationDetails ? ` (${item.locationDetails})` : ''}`
                      }
                    </span>
                  </div>

                  {/* Action buttons */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {/* Join button for online sessions */}
                    {item.location === 'Online' && (() => {
                      let joinUrl = ''
                      if (item.time.includes('12:00 PM')) {
                        joinUrl = 'https://go.gov.sg/designfestival-talk12pm'
                      } else if (item.time.includes('1:00 PM')) {
                        joinUrl = 'https://go.gov.sg/designfestival-talk1pm'
                      }
                      
                      return joinUrl ? (
                        <a 
                          href={joinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white text-black px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm inline-flex items-center gap-2"
                        >
                          Join via SG-Teams
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : null
                    })()}
                    
                    {/* View details button for all items */}
                    <button className="border border-gray-400 text-gray-300 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-700 hover:border-gray-300 transition-colors text-sm">
                      View details
                    </button>
                  </div>
                </div>
              </div>
            </div>
                )
              })}
        </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section id="agenda" style={{ backgroundColor: '#080c1b' }} className="pt-12 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <Image
            src="/assets/icons/zap-1.svg"
            alt="Zap Icon"
            width={32}
            height={32}
            className="mr-3 flex-shrink-0"
          />
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-none">Agenda</h2>
        </div>
        
        {/* Week Tabs */}
        <Tabs defaultValue="week1" className="mb-8">
          <div className="overflow-x-auto sm:overflow-x-visible mb-8 scrollbar-hide">
            <TabsList className="h-12 bg-transparent gap-2 p-0 w-fit flex">
              <TabsTrigger value="week1" className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-white data-[state=inactive]:border data-[state=inactive]:border-gray-500 data-[state=inactive]:text-gray-300 h-10 px-3 sm:px-6 text-sm sm:text-base font-medium cursor-pointer whitespace-nowrap flex-shrink-0">Week 1</TabsTrigger>
              <TabsTrigger value="week2" className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-white data-[state=inactive]:border data-[state=inactive]:border-gray-500 data-[state=inactive]:text-gray-300 h-10 px-3 sm:px-6 text-sm sm:text-base font-medium cursor-pointer whitespace-nowrap flex-shrink-0">Week 2</TabsTrigger>
              <TabsTrigger value="week3" className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-white data-[state=inactive]:border data-[state=inactive]:border-gray-500 data-[state=inactive]:text-gray-300 h-10 px-3 sm:px-6 text-sm sm:text-base font-medium cursor-pointer whitespace-nowrap flex-shrink-0">Week 3</TabsTrigger>
              <TabsTrigger value="week4" className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-white data-[state=inactive]:border data-[state=inactive]:border-gray-500 data-[state=inactive]:text-gray-300 h-10 px-3 sm:px-6 text-sm sm:text-base font-medium cursor-pointer whitespace-nowrap flex-shrink-0">Week 4</TabsTrigger>
              <TabsTrigger value="week5" className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-white data-[state=inactive]:border data-[state=inactive]:border-gray-500 data-[state=inactive]:text-gray-300 h-10 px-3 sm:px-6 text-sm sm:text-base font-medium cursor-pointer whitespace-nowrap flex-shrink-0">Week 5</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="week1">
            {renderWeekContent('week1')}
          </TabsContent>
          
          <TabsContent value="week2">
            {renderWeekContent('week2')}
          </TabsContent>
          
          <TabsContent value="week3">
            {renderWeekContent('week3')}
          </TabsContent>
          
          <TabsContent value="week4">
            {renderWeekContent('week4')}
          </TabsContent>
          
          <TabsContent value="week5">
            {renderWeekContent('week5')}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
