"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{backgroundColor: '#70094E'}}>
        {/* Background Hero Illustration */}
        <div className="absolute inset-0">
          <Image 
            src="/assets/icons/illustrations/hero-illustration.png" 
            alt="GovTech Design Festival Hero Illustration" 
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* GovTech Logo - Top Left */}
        <div className="absolute top-8 left-8">
          <Image 
            src="/assets/icons/logos/gdf-logo.svg" 
            alt="GovTech Design Festival" 
            width={120}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </div>

        {/* Navigation - Top Right */}
        <div className="absolute top-8 right-8 flex items-center space-x-8 text-white">
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

        {/* Festival Stickers - positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="flex justify-center items-center gap-4 lg:gap-8">
            {/* Date Sticker */}
            <div className="relative">
              <div className="bg-white text-black px-6 py-3 lg:px-10 lg:py-5 rounded-2xl transform -rotate-6 font-black text-2xl lg:text-3xl shadow-xl">
                1-31 JULY
              </div>
              <div className="absolute top-0 left-0 -z-10 w-full h-full bg-pink-300 rounded-2xl transform -rotate-6 translate-x-1 translate-y-1"></div>
            </div>
            
            {/* Year Sticker */}
            <div className="relative">
              <div className="bg-[#6CB4EE] text-black px-10 py-5 lg:px-16 lg:py-8 rounded-3xl transform rotate-3 font-black text-4xl lg:text-6xl shadow-xl">
                2025
              </div>
              <div className="absolute -top-2 -right-2 text-white">
                <svg className="w-8 h-8 lg:w-12 lg:h-12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.09 8.26L20.93 8.91L16.11 13.17L17.53 19.93L12 16.47L6.47 19.93L7.89 13.17L3.07 8.91L9.91 8.26L12 2Z"/>
                </svg>
              </div>
            </div>
            
            {/* For Everyone By Designers Sticker */}
            <div className="relative">
              <div className="bg-[#6CB4EE] text-black px-6 py-4 lg:px-8 lg:py-6 rounded-2xl transform -rotate-3 font-black shadow-xl">
                <div className="text-sm lg:text-base">FOR</div>
                <div className="text-2xl lg:text-3xl -my-1">EVERYONE</div>
                <div className="text-sm lg:text-base">BY</div>
                <div className="text-xl lg:text-2xl">DESIGNERS</div>
              </div>
              <div className="absolute -bottom-2 -left-2 text-white transform rotate-12">
                <svg className="w-6 h-6 lg:w-8 lg:h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M13 2L3 14l9 2 2 9 10-12-9-2-2-9z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Cards */}
      <section className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Slack Channel Card */}
            <div className="bg-[#CCFF66] rounded-2xl p-8 lg:p-12">
              <div className="max-w-lg">
                <p className="text-lg mb-4 font-medium">💬 Stay Connected</p>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                  Join our Festival Slack Channel
                </h3>
                <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-lg font-semibold">
                  Join Slack Channel
                </Button>
              </div>
            </div>

            {/* Registration Card */}
            <div className="bg-purple-500 rounded-2xl p-8 lg:p-12 text-white">
              <div className="max-w-lg">
                <p className="text-lg mb-4 font-medium">🎯 Registration</p>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                  Register now to save your spot!
                </h3>
                <Button className="bg-white text-purple-500 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  Register Now
                </Button>
              </div>
            </div>

            {/* View Agenda Card */}
            <div className="bg-blue-500 rounded-2xl p-8 lg:p-12 text-white">
              <div className="max-w-lg">
                <p className="text-lg mb-4 font-medium">📅 Full Schedule</p>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                  View full event agenda
                </h3>
                <Button className="bg-white text-blue-500 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
                  View Agenda
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers Section */}
      <section className="bg-black text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-16">Keynote</h2>
          
          {/* Featured Speakers List */}
          <div className="space-y-8">
            
            {/* Keynote 1 - Opening Address & Design Innovation */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                {/* Left side - Session Info */}
                <div className="flex-1 p-8 lg:p-12">
                  <div className="text-gray-600 text-sm mb-4">Jul 1, 2025 10:30 AM - 11:30 AM PDT | Main Stage: Opening ceremony</div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">Opening Address & Design Innovation Keynote</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="bg-[#20B2AA] px-4 py-2 rounded-full text-sm font-semibold text-black">KEYNOTE</span>
                    <span className="bg-gray-200 px-4 py-2 rounded-full text-sm font-semibold text-black">OPENING</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                      Join
                    </button>
                    <button className="border border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      View details
                    </button>
                  </div>
                </div>
                {/* Right side - Speakers */}
                <div className="bg-[#20B2AA] p-8 lg:p-12 lg:w-1/2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-black/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="text-2xl text-black/60">👤</div>
                      </div>
                      <h4 className="font-bold text-lg text-black">DGE Sau Sheong</h4>
                      <p className="text-sm text-black/80">Deputy Government Engineer</p>
                      <p className="text-sm text-black/80">GovTech Singapore</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-black/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="text-2xl text-black/60">👤</div>
                      </div>
                      <h4 className="font-bold text-lg text-black">Shiao-Yin Kuik</h4>
                      <p className="text-sm text-black/80">Design Director</p>
                      <p className="text-sm text-black/80">GovTech Singapore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keynote 2 - Government Design Strategy */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-8 lg:p-12">
                  <div className="text-gray-600 text-sm mb-4">Jul 7, 2025 11:30 AM - 12:30 PM PDT | Main Stage: Policy meets design</div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">From Policy to Impact: Design&apos;s Role in Government</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="bg-[#20B2AA] px-4 py-2 rounded-full text-sm font-semibold text-black">KEYNOTE</span>
                    <span className="bg-orange-200 px-4 py-2 rounded-full text-sm font-semibold text-black">STRATEGY</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                      Join
                    </button>
                    <button className="border border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      View details
                    </button>
                  </div>
                </div>
                <div className="bg-[#20B2AA] p-8 lg:p-12 lg:w-1/2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-black/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="text-2xl text-black/60">👤</div>
                      </div>
                      <h4 className="font-bold text-lg text-black">2PS Augustin</h4>
                      <p className="text-sm text-black/80">Second Permanent Secretary</p>
                      <p className="text-sm text-black/80">Smart Nation Group</p>
                    </div>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-black/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="text-2xl text-black/60">👤</div>
                      </div>
                      <h4 className="font-bold text-lg text-black">Lillian Shieh</h4>
                      <p className="text-sm text-black/80">Director, Design</p>
                      <p className="text-sm text-black/80">GovTech Singapore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keynote 3 - Design Systems */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-8 lg:p-12">
                  <div className="text-gray-600 text-sm mb-4">Jul 14, 2025 2:00 PM - 3:00 PM PDT | Design Stage: Building at scale</div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">Building Design Systems for Government Scale</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="bg-[#20B2AA] px-4 py-2 rounded-full text-sm font-semibold text-black">KEYNOTE</span>
                    <span className="bg-blue-200 px-4 py-2 rounded-full text-sm font-semibold text-black">DESIGN SYSTEMS</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                      Join
                    </button>
                    <button className="border border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      View details
                    </button>
                  </div>
                </div>
                <div className="bg-[#20B2AA] p-8 lg:p-12 lg:w-1/2">
                  <div className="flex justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-black/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="text-2xl text-black/60">👤</div>
                      </div>
                      <h4 className="font-bold text-lg text-black">Ruby Pryor</h4>
                      <p className="text-sm text-black/80">Senior Design Researcher</p>
                      <p className="text-sm text-black/80">GovTech Singapore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keynote 4 - Inclusive Design */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-8 lg:p-12">
                  <div className="text-gray-600 text-sm mb-4">Jul 14, 2025 12:00 PM - 1:00 PM PDT | Accessibility Stage: Inclusive design</div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">Designing Inclusive Government Services</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="bg-[#20B2AA] px-4 py-2 rounded-full text-sm font-semibold text-black">KEYNOTE</span>
                    <span className="bg-purple-200 px-4 py-2 rounded-full text-sm font-semibold text-black">ACCESSIBILITY</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                      Join
                    </button>
                    <button className="border border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      View details
                    </button>
                  </div>
                </div>
                <div className="bg-[#20B2AA] p-8 lg:p-12 lg:w-1/2">
                  <div className="flex justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-black/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="text-2xl text-black/60">👤</div>
                      </div>
                      <h4 className="font-bold text-lg text-black">Dr Douglas O&apos;Loughlin</h4>
                      <p className="text-sm text-black/80">Accessibility Expert</p>
                      <p className="text-sm text-black/80">International Consultant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keynote 5 - Digital Transformation */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-8 lg:p-12">
                  <div className="text-gray-600 text-sm mb-4">Jul 21, 2025 3:00 PM - 4:00 PM PDT | Innovation Stage: Digital government</div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">Digital-First Government: The Singapore Story</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="bg-[#20B2AA] px-4 py-2 rounded-full text-sm font-semibold text-black">KEYNOTE</span>
                    <span className="bg-blue-300 px-4 py-2 rounded-full text-sm font-semibold text-black">DIGITAL TRANSFORMATION</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                      Join
                    </button>
                    <button className="border border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      View details
                    </button>
                  </div>
                </div>
                <div className="bg-[#20B2AA] p-8 lg:p-12 lg:w-1/2">
                  <div className="flex justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-black/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="text-2xl text-black/60">👤</div>
                      </div>
                      <h4 className="font-bold text-lg text-black">MOS Jasmin Bernard</h4>
                      <p className="text-sm text-black/80">Minister of State</p>
                      <p className="text-sm text-black/80">Ministry of Communications</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Keynote 6 - User Research */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="flex-1 p-8 lg:p-12">
                  <div className="text-gray-600 text-sm mb-4">Jul 28, 2025 1:00 PM - 2:00 PM PDT | Research Stage: Understanding citizens</div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">Understanding Citizens: Research in Government</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="bg-[#20B2AA] px-4 py-2 rounded-full text-sm font-semibold text-black">KEYNOTE</span>
                    <span className="bg-yellow-200 px-4 py-2 rounded-full text-sm font-semibold text-black">RESEARCH</span>
                  </div>
                  <div className="flex gap-4">
                    <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                      Join
                    </button>
                    <button className="border border-black text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      View details
                    </button>
                  </div>
                </div>
                <div className="bg-[#20B2AA] p-8 lg:p-12 lg:w-1/2">
                  <div className="flex justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-black/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <div className="text-2xl text-black/60">👤</div>
                      </div>
                      <h4 className="font-bold text-lg text-black">Senior UX Researcher</h4>
                      <p className="text-sm text-black/80">Central UX Team</p>
                      <p className="text-sm text-black/80">GovTech Singapore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Agenda Section */}
      <AgendaSection />

      {/* Why attend Govtech design festival Section */}
      <section className="bg-white py-24 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl lg:text-5xl font-bold mb-8">Why attend Govtech design festival</h3>
          <p className="text-xl text-gray-600 mb-16 max-w-4xl">
            Embark on a learning adventure through three exciting tracks:
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Inner Compass (Self) */}
            <div>
              <h4 className="text-2xl font-bold mb-6">Inner Compass (Self)</h4>
              <p className="text-gray-700 leading-relaxed">
                Build habits, mindsets, and resources to excel as designers, teammates, and change agents
              </p>
            </div>

            {/* Journey Kits (Craft) */}
            <div>
              <h4 className="text-2xl font-bold mb-6">Journey Kits (Craft)</h4>
              <p className="text-gray-700 leading-relaxed">
                Adopt innovative practices and tools to improve quality and maintain relevance
              </p>
            </div>

            {/* Impact Stories */}
            <div>
              <h4 className="text-2xl font-bold mb-6">Impact Stories</h4>
              <p className="text-gray-700 leading-relaxed">
                Learn from real successes that created tangible impact for stakeholders
              </p>
            </div>
          </div>
        </div>
      </section>


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
