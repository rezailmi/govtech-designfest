"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MarqueeTicker } from "@/components/ui/marquee-ticker"
import { KeynoteList } from "@/components/keynote/keynote-list"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

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
      {/* Top Overscroll Background */}
      <div className="fixed top-0 left-0 right-0 h-screen -z-10" style={{backgroundColor: '#70094E'}} />
      
      {/* Bottom Overscroll Background */}
      <div className="fixed bottom-0 left-0 right-0 h-screen -z-10 bg-black" />
      
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            
            {/* GovTech Logo */}
            <div className="flex justify-center md:justify-start">
              <Image 
                src="/assets/icons/logos/gdf-logo.svg" 
                alt="GovTech Design Festival" 
                width={120}
                height={48}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </div>

            {/* Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-3 sm:gap-4 md:gap-8 text-white">
              <a href="#keynotes" className="hover:text-pink-300 transition-colors">Keynotes</a>
              <a href="#agenda" className="hover:text-pink-300 transition-colors">Agenda</a>
              <a href="#people" className="hover:text-pink-300 transition-colors flex items-center" target="_blank" rel="noopener noreferrer">
                People 
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Button asChild className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-lg font-semibold">
                <a href="#register" className="flex items-center" target="_blank" rel="noopener noreferrer">
                  Register
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </Button>
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
              
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-base font-medium rounded-md">
                Join Slack channel
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
                Reservation sessions
              </h3>
              
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-base font-medium rounded-md">
                Register
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Keynote Section */}
      <section className="bg-gray-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-8">
            <Image
              src="/assets/icons/star-1.svg"
              alt="Star Icon"
              width={24}
              height={24}
              className="mr-3"
            />
            <h2 className="text-3xl font-bold text-black">Keynote</h2>
          </div>
          
          {/* Keynote Sessions List */}
          <KeynoteList />
        </div>
      </section>

      {/* Full Agenda Section */}
      <AgendaSection />

    </div>
  )
}

// Agenda Section Component
function AgendaSection() {

  const agendaItems = [
    {
      week: 'week1',
      date: 'Jul 1, 2025',
      day: 'Tuesday',
      time: '10:30 AM',
      title: 'Festival Opening (feat. Shiao-Yin & DCE Sau Sheong)',
      theme: 'Keynote',
      topics: ['Get Swag', 'Talk'],
      speakers: [
        { name: 'Shiao-Yin Kuik', role: 'Design Director', company: 'GovTech Singapore' },
        { name: 'DCE Sau Sheong', role: 'Deputy Chief Executive', company: 'GovTech Singapore' }
      ],
      location: 'In-Person'
    },
    {
      week: 'week1',
      date: 'Jul 1, 2025',
      day: 'Tuesday',
      time: '11:30 AM',
      title: 'Design Arcade (Lunch Provided!)',
      theme: 'Design craft',
      topics: ['Got Food!'],
      speakers: [
        { name: 'Design Festival Team', role: 'Event Organizers', company: 'GovTech Singapore' }
      ],
      location: 'In-Person'
    },
    {
      week: 'week1',
      date: 'Jul 2, 2025',
      day: 'Wednesday',
      time: '12:00 PM',
      title: 'Measuring design value with a numbers prototype',
      theme: 'Design craft',
      topics: ['Online', 'Talk', 'Build Craft'],
      speakers: [
        { name: 'Data Design Specialist', role: 'Senior Analyst', company: 'GovTech Singapore' }
      ],
      location: 'Online'
    },
    {
      week: 'week1',
      date: 'Jul 3, 2025',
      day: 'Thursday',
      time: '11:30 AM',
      title: 'Fireside chat: Why isn&apos;t empathy enough?',
      theme: 'Keynote',
      topics: ['Talk'],
      speakers: [
        { name: 'Senior UX Researcher', role: 'Design Lead', company: 'GovTech Singapore' }
      ],
      location: 'In-Person'
    },
    {
      week: 'week1',
      date: 'Jul 3, 2025',
      day: 'Thursday',
      time: '12:00 PM',
      title: 'Scrappy not crappy: Quick shortcuts to deliver a good product',
      theme: 'Design craft',
      topics: ['Online', 'Talk', 'Build Craft'],
      speakers: [
        { name: 'Tara Hirebet', role: 'Product Designer', company: 'Design Consultant' }
      ],
      location: 'Online'
    },
    {
      week: 'week1',
      date: 'Jul 3, 2025',
      day: 'Thursday',
      time: '1:00 PM',
      title: 'UX Growing Pains: Designing in Different Worlds',
      theme: 'Design craft',
      topics: ['Online', 'Talk', 'Build Self', 'Build Craft'],
      speakers: [
        { name: 'Tasha Yip', role: 'UX Designer', company: 'Government Agency' }
      ],
      location: 'Online'
    },
    {
      week: 'week1',
      date: 'Jul 4, 2025',
      day: 'Friday',
      time: '9:00 AM',
      title: 'Prototyping with AI and moderated concept testing',
      theme: 'Design craft',
      topics: ['Course', 'Build Craft'],
      speakers: [
        { name: 'Rex / Ruby Pryor', role: 'Design Researcher', company: 'GovTech Singapore' }
      ],
      location: 'In-Person'
    },
    {
      week: 'week1',
      date: 'Jul 4, 2025',
      day: 'Friday',
      time: '1:00 PM',
      title: 'The Space Between',
      theme: 'Design craft',
      topics: ['Online', 'Talk', 'Build Self'],
      speakers: [
        { name: 'Samuel Lim', role: 'Design Strategist', company: 'Independent' }
      ],
      location: 'Online'
    },
    {
      week: 'week1',
      date: 'Jul 4, 2025',
      day: 'Friday',
      time: '2:00 PM',
      title: 'Ctrl + Alt + Design Workshop',
      theme: 'Design craft',
      topics: ['Workshop'],
      speakers: [
        { name: 'Design Festival Team', role: 'Workshop Facilitators', company: 'GovTech Singapore' }
      ],
      location: 'In-Person'
    },
    // Week 2: July 7-11, 2025
    {
      week: 'week2',
      date: 'Jul 7, 2025',
      day: 'Monday',
      time: '11:30 AM',
      title: 'Fireside Chat with 2PS and Lillian Shieh',
      theme: 'Keynote',
      topics: ['In-Person', 'Keynote', 'Talk'],
      speakers: [
        { name: '2PS Augustin', role: 'Second Permanent Secretary', company: 'Smart Nation Group' },
        { name: 'Lillian Shieh', role: 'Director, Design', company: 'GovTech Singapore' }
      ],
      location: 'In-Person'
    },
    {
      week: 'week2',
      date: 'Jul 8, 2025',
      day: 'Tuesday',
      time: '9:30 AM',
      title: 'Data Storytelling',
      theme: 'Design craft',
      topics: ['In-Person', 'Course', 'Build Craft'],
      speakers: [
        { name: 'Kontinentalist', role: 'Data Storytelling Team', company: 'Kontinentalist' }
      ],
      location: 'In-Person'
    },
    {
      week: 'week2',
      date: 'Jul 9, 2025',
      day: 'Wednesday',
      time: '12:00 PM',
      title: 'Just Trying My Best: A Designer&apos;s Journey into Accessibility',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '12 PM', 'Build Self'],
      speakers: [
        { name: 'Liting Kway', role: 'UX Designer', company: 'Government Agency' }
      ],
      location: 'Online'
    },
    {
      week: 'week2',
      date: 'Jul 10, 2025',
      day: 'Thursday',
      time: '12:00 PM',
      title: 'Creating a digital engagement platform for the ONE...',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '12 PM', 'Build Craft'],
      speakers: [
        { name: 'Brandon Tan', role: 'Digital Product Designer', company: 'GovTech Singapore' }
      ],
      location: 'Online'
    },
    {
      week: 'week2',
      date: 'Jul 11, 2025',
      day: 'Friday',
      time: '9:00 AM',
      title: 'Visual Facilitation Lab',
      theme: 'Design craft',
      topics: ['In-Person', 'Course', 'Build Craft'],
      speakers: [
        { name: 'Art of Awakening', role: 'Visual Facilitation Team', company: 'Art of Awakening' }
      ],
      location: 'In-Person'
    },
    {
      week: 'week2',
      date: 'Jul 9, 2025',
      day: 'Wednesday',
      time: '12:00 PM',
      title: 'From Insights to Action: Driving Impact',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '12 PM', 'Keynote'],
      speakers: [
        { name: 'Ruby Pryor', role: 'Senior Design Researcher', company: 'GovTech Singapore' }
      ],
      location: 'Online'
    },
    {
      week: 'week2',
      date: 'Jul 8, 2025',
      day: 'Tuesday',
      time: '1:00 PM',
      title: 'Driving Product Strategy Through Research: From Paper Form...',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '1 PM', 'Build Craft'],
      speakers: [
        { name: 'Alicia Chong', role: 'Product Strategist', company: 'GovTech Singapore' }
      ],
      location: 'Online'
    },
    {
      week: 'week2',
      date: 'Jul 10, 2025',
      day: 'Thursday',
      time: '1:00 PM',
      title: 'Small hands, big barriers: Rethinking login for young learners',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '1 PM', 'Build Craft'],
      speakers: [
        { name: 'Chong Ying Leong (Jordan)', role: 'UX Designer', company: 'GovTech Singapore' }
      ],
      location: 'Online'
    },
    {
      week: 'week2',
      date: 'Jul 11, 2025',
      day: 'Friday',
      time: '12:00 PM',
      title: 'How culture influences Design: A Tokyo case study',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '12 PM', 'Build Craft'],
      speakers: [
        { name: 'Amanda Lu', role: 'Design Researcher', company: 'Independent' }
      ],
      location: 'Online'
    },
    {
      week: 'week2',
      date: 'Jul 9, 2025',
      day: 'Wednesday',
      time: '1:00 PM',
      title: 'Theming with design tokens: Flagship Design System',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '1 PM', 'Build Craft'],
      speakers: [
        { name: 'Vivienne Chong', role: 'Design System Lead', company: 'GovTech Singapore' }
      ],
      location: 'Online'
    },
    {
      week: 'week2',
      date: 'Jul 11, 2025',
      day: 'Friday',
      time: '1:00 PM',
      title: 'User design principles towards our Punggol Digital District...',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '1 PM', 'Build Craft'],
      speakers: [
        { name: 'Alan Tan', role: 'Digital District Designer', company: 'GovTech Singapore' }
      ],
      location: 'Online'
    },
    {
      week: 'week2',
      date: 'Jul 11, 2025',
      day: 'Friday',
      time: '2:00 PM',
      title: 'Design Your Life',
      theme: 'Design craft',
      topics: ['In-Person', 'Got Food!', 'Workshop'],
      speakers: [
        { name: 'Design Thinking Community', role: 'Workshop Facilitators', company: 'Design Thinking Community' }
      ],
      location: 'In-Person'
    },
    
    // Week 3: July 14-18, 2025
    {
      week: 'week3',
      date: 'Jul 14, 2025',
      day: 'Monday',
      time: '12:00 PM',
      title: 'Flourishing at All Levels of the System',
      theme: 'Keynote',
      topics: ['Online', 'Talk', '12 PM', 'Keynote'],
      speakers: [
        { name: 'Dr Douglas O\'Loughlin', role: 'Accessibility Expert', company: 'International Consultant' }
      ],
      location: 'Online'
    },
    {
      week: 'week3',
      date: 'Jul 15, 2025',
      day: 'Tuesday',
      time: '12:00 PM',
      title: 'Journeys are not single-use plastics: A sustainable approach to...',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '12 PM', 'Build Craft'],
      speakers: [
        { name: 'Darren Yeo', role: 'Sustainability Designer', company: 'GovTech Singapore' }
      ],
      location: 'Online'
    },
    {
      week: 'week3',
      date: 'Jul 16, 2025',
      day: 'Wednesday',
      time: '12:00 PM',
      title: 'An honest account: Using AI in design research',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '12 PM', 'Build Craft'],
      speakers: [
        { name: 'Serah Lee', role: 'AI Research Designer', company: 'GovTech Singapore' }
      ],
      location: 'Online'
    },
    {
      week: 'week3',
      date: 'Jul 17, 2025',
      day: 'Thursday',
      time: '12:00 PM',
      title: 'Find my center- how our body, emotions & language shape th...',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '12 PM', 'Build Self'],
      speakers: [
        { name: 'Sarah Xu', role: 'Behavioral Designer', company: 'Independent' }
      ],
      location: 'Online'
    },
    {
      week: 'week3',
      date: 'Jul 18, 2025',
      day: 'Friday',
      time: '12:00 PM',
      title: 'How Are You, Really?',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '12 PM', 'Build Self'],
      speakers: [
        { name: 'Tay Jia Enn', role: 'Wellness Designer', company: 'Independent' }
      ],
      location: 'Online'
    },
    {
      week: 'week3',
      date: 'Jul 15, 2025',
      day: 'Tuesday',
      time: '1:00 PM',
      title: 'Growing with GovTech: A UX Designer&apos;s Story of Learning, Leadin...',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '1 PM', 'Build Self'],
      speakers: [
        { name: 'Eunice Chan', role: 'Senior UX Designer', company: 'GovTech Singapore' }
      ],
      location: 'Online'
    },
    {
      week: 'week3',
      date: 'Jul 16, 2025',
      day: 'Wednesday',
      time: '1:00 PM',
      title: 'From Blank Slate to Breakthroughs: Learning to Run Foc...',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '1 PM', 'Build Craft'],
      speakers: [
        { name: 'Cathy Chen Sheng', role: 'UX Researcher', company: 'GovTech Singapore' },
        { name: 'Matthew Ryan Lee', role: 'Product Designer', company: 'GovTech Singapore' }
      ],
      location: 'Online'
    },
    {
      week: 'week3',
      date: 'Jul 17, 2025',
      day: 'Thursday',
      time: '1:00 PM',
      title: 'Gatekeeping _______',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '1 PM', 'Build Craft'],
      speakers: [
        { name: 'Jing Yen Goh', role: 'Design Strategist', company: 'GovTech Singapore' },
        { name: 'Jaffry Jalal', role: 'Product Designer', company: 'GovTech Singapore' }
      ],
      location: 'Online'
    },
    {
      week: 'week3',
      date: 'Jul 18, 2025',
      day: 'Friday',
      time: '1:00 PM',
      title: 'Gamification on GPay',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '1 PM', 'Build Craft'],
      speakers: [
        { name: 'Chenxi Sun', role: 'Product Designer', company: 'Google Pay' },
        { name: 'Peggy Sim', role: 'UX Designer', company: 'Google Pay' }
      ],
      location: 'Online'
    },
    {
      week: 'week3',
      date: 'Jul 15, 2025',
      day: 'Tuesday',
      time: '2:00 PM',
      title: 'Insights That Matter',
      theme: 'Design craft',
      topics: ['In-Person', 'Course', 'Build Craft'],
      speakers: [
        { name: 'Studio Dojo', role: 'Design Research Team', company: 'Studio Dojo' }
      ],
      location: 'In-Person'
    },

    // Week 4: July 21-25, 2025
    {
      week: 'week4',
      date: 'Jul 21, 2025',
      day: 'Monday',
      time: '9:30 AM',
      title: 'Learning Journey: DBS',
      theme: 'Design craft',
      topics: ['In-Person', 'Service Design Week', 'Learning Journey'],
      speakers: [
        { name: 'Service Design Week', role: 'Learning Journey Host', company: 'DBS Bank' }
      ],
      location: 'In-Person'
    },
    {
      week: 'week4',
      date: 'Jul 22, 2025',
      day: 'Tuesday',
      time: '12:00 PM',
      title: 'Lightning Talks: Public Officer Pack',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '12 PM', 'Service Design Week'],
      speakers: [
        { name: 'Service Design Week', role: 'Lightning Talk Speakers', company: 'Various Government Agencies' }
      ],
      location: 'Online'
    },
    {
      week: 'week4',
      date: 'Jul 23, 2025',
      day: 'Wednesday',
      time: '12:00 PM',
      title: 'Lightning Talks: Business Track',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '12 PM', 'Service Design Week'],
      speakers: [
        { name: 'Service Design Week', role: 'Lightning Talk Speakers', company: 'Various Organizations' }
      ],
      location: 'Online'
    },
    {
      week: 'week4',
      date: 'Jul 24, 2025',
      day: 'Thursday',
      time: '9:30 AM',
      title: 'Learning Journey: Mandai Wildlife Reserve',
      theme: 'Design craft',
      topics: ['In-Person', 'Service Design Week', 'Learning Journey'],
      speakers: [
        { name: 'Service Design Week', role: 'Learning Journey Host', company: 'Mandai Wildlife Reserve' }
      ],
      location: 'In-Person'
    },
    {
      week: 'week4',
      date: 'Jul 25, 2025',
      day: 'Friday',
      time: '9:30 AM',
      title: 'Learning Journey: IRAS',
      theme: 'Design craft',
      topics: ['In-Person', 'Service Design Week', 'Learning Journey'],
      speakers: [
        { name: 'Service Design Week', role: 'Learning Journey Host', company: 'IRAS' }
      ],
      location: 'In-Person'
    },
    {
      week: 'week4',
      date: 'Jul 22, 2025',
      day: 'Tuesday',
      time: '2:00 PM',
      title: 'Ctrl + Alt + Design Workshop',
      theme: 'Design craft',
      topics: ['In-Person', 'Workshop', 'Build Craft'],
      speakers: [
        { name: 'Design Festival Team', role: 'Workshop Facilitators', company: 'GovTech Singapore' }
      ],
      location: 'In-Person'
    },
    {
      week: 'week4',
      date: 'Jul 24, 2025',
      day: 'Thursday',
      time: '12:00 PM',
      title: 'Lightning Talks: Citizen Track',
      theme: 'Design craft',
      topics: ['Online', 'Talk', '12 PM', 'Service Design Week'],
      speakers: [
        { name: 'Service Design Week', role: 'Lightning Talk Speakers', company: 'Citizen Representatives' }
      ],
      location: 'Online'
    },
    {
      week: 'week4',
      date: 'Jul 25, 2025',
      day: 'Friday',
      time: '3:00 PM',
      title: 'Learning Journey: Hilton',
      theme: 'Design craft',
      topics: ['In-Person', 'Service Design Week', 'Learning Journey'],
      speakers: [
        { name: 'Service Design Week', role: 'Learning Journey Host', company: 'Hilton Hotels' }
      ],
      location: 'In-Person'
    },

    // Week 5: July 28-31, 2025
    {
      week: 'week5',
      date: 'Jul 28, 2025',
      day: 'Monday',
      time: '9:00 AM',
      title: 'Behavioural Design: Where Behavioural Science Meets Creativity',
      theme: 'Design craft',
      topics: ['In-Person', 'Course', 'Build Craft'],
      speakers: [
        { name: 'MakeIt Lab', role: 'Behavioral Design Team', company: 'MakeIt Lab' }
      ],
      location: 'In-Person'
    },
    {
      week: 'week5',
      date: 'Jul 29, 2025',
      day: 'Tuesday',
      time: '9:00 AM',
      title: 'Inclusive Design Week - Day 1',
      theme: 'Design craft',
      topics: ['Inclusive Design Week', 'In-Person'],
      speakers: [
        { name: 'Inclusive Design Week Team', role: 'Workshop Facilitators', company: 'Various Organizations' }
      ],
      location: 'In-Person'
    },
    {
      week: 'week5',
      date: 'Jul 30, 2025',
      day: 'Wednesday',
      time: '9:00 AM',
      title: 'Inclusive Design Week - Day 2',
      theme: 'Design craft',
      topics: ['Inclusive Design Week', 'In-Person'],
      speakers: [
        { name: 'Inclusive Design Week Team', role: 'Workshop Facilitators', company: 'Various Organizations' }
      ],
      location: 'In-Person'
    },
    {
      week: 'week5',
      date: 'Jul 31, 2025',
      day: 'Thursday',
      time: '9:00 AM',
      title: 'Inclusive Design Week - Day 3',
      theme: 'Design craft',
      topics: ['Inclusive Design Week', 'In-Person'],
      speakers: [
        { name: 'Inclusive Design Week Team', role: 'Workshop Facilitators', company: 'Various Organizations' }
      ],
      location: 'In-Person'
    },
    {
      week: 'week5',
      date: 'Jul 31, 2025',
      day: 'Thursday',
      time: '2:30 PM',
      title: 'Closing Session',
      theme: 'Keynote',
      topics: ['In-Person', 'Get Swag', 'Got Food!', 'Talk'],
      speakers: [
        { name: 'Eyung', role: 'Festival Organizer', company: 'GovTech Singapore' },
        { name: 'Shalom', role: 'Festival Organizer', company: 'GovTech Singapore' },
        { name: 'Amanda', role: 'Festival Organizer', company: 'GovTech Singapore' },
        { name: 'Joy', role: 'Festival Organizer', company: 'GovTech Singapore' }
      ],
      location: 'In-Person'
    }
  ]

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
              <h3 className="text-lg font-semibold text-gray-700">{dateKey}</h3>
        </div>

            {/* Items for this day */}
        <div className="space-y-4">
              {items.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-600 font-medium">{item.time}</span>
                  </div>
                  
                      <h4 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-black transition-colors">
                    {item.title}
                      </h4>
                  
                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                      item.theme === 'Keynote' 
                        ? 'bg-green-100 text-green-800 group-hover:bg-green-200' 
                        : 'bg-blue-100 text-blue-800 group-hover:bg-blue-200'
                    }`}>
                      {item.theme}
                    </span>
                    {item.topics.map((topic, topicIndex) => (
                      <span 
                        key={topicIndex} 
                        className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    {item.speakers.map((speaker, speakerIndex) => (
                      <div key={speakerIndex} className="border-l-4 border-gray-200 pl-4 group-hover:border-gray-400 transition-colors">
                        <div className="font-semibold text-gray-900">{speaker.name}</div>
                        <div className="text-sm text-gray-600">{speaker.role}</div>
                        <div className="text-sm text-gray-500">{speaker.company}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:text-right flex flex-col items-end gap-3">
                  <div className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-lg font-medium">
                    {item.location}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover:bg-black hover:text-white hover:border-black transition-all duration-200 font-medium"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">Agenda</h2>
        
        {/* Week Tabs */}
        <div className="mb-8">
          <Tabs defaultValue="week1">
            <TabsList className="h-12 bg-transparent gap-2 p-0">
              <TabsTrigger value="week1" className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-black data-[state=inactive]:border data-[state=inactive]:border-gray-300 h-10 px-6 text-base font-medium cursor-pointer">Week 1</TabsTrigger>
              <TabsTrigger value="week2" className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-black data-[state=inactive]:border data-[state=inactive]:border-gray-300 h-10 px-6 text-base font-medium cursor-pointer">Week 2</TabsTrigger>
              <TabsTrigger value="week3" className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-black data-[state=inactive]:border data-[state=inactive]:border-gray-300 h-10 px-6 text-base font-medium cursor-pointer">Week 3</TabsTrigger>
              <TabsTrigger value="week4" className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-black data-[state=inactive]:border data-[state=inactive]:border-gray-300 h-10 px-6 text-base font-medium cursor-pointer">Week 4</TabsTrigger>
              <TabsTrigger value="week5" className="data-[state=active]:bg-black data-[state=active]:text-white data-[state=active]:border-black data-[state=inactive]:border data-[state=inactive]:border-gray-300 h-10 px-6 text-base font-medium cursor-pointer">Week 5</TabsTrigger>
            </TabsList>
          
          <TabsContent value="week1" className="mt-8">
            {renderWeekContent('week1')}
          </TabsContent>
          
          <TabsContent value="week2" className="mt-8">
            {renderWeekContent('week2')}
          </TabsContent>
          
          <TabsContent value="week3" className="mt-8">
            {renderWeekContent('week3')}
          </TabsContent>
          
          <TabsContent value="week4" className="mt-8">
            {renderWeekContent('week4')}
          </TabsContent>
          
                    <TabsContent value="week5" className="mt-8">
            {renderWeekContent('week5')}
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </section>
  )
}
