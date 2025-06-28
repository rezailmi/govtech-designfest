"use client"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            {/* Lightning bolt icon */}
            <div className="text-6xl mb-6">⚡</div>
            
            {/* Main Title */}
            <h1 className="text-[8rem] lg:text-[12rem] font-bold leading-none tracking-tight mb-8">
              GovTech
            </h1>
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Design Festival 2025
            </h2>
          </div>
          
          {/* Call to action buttons */}
          <div className="text-center space-y-4">
            <div className="bg-purple-100 p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-lg mb-4">💡 Join our <strong>Festival Slack Channel</strong> for latest announcements and updates 🤩</p>
              <p className="text-lg mb-4">🎯 <strong>Register now</strong> to save your spot!</p>
              <p className="text-lg">Looking for the <strong>full event calendar</strong>? Click here! 👈</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Tagline Section */}
      <section className="bg-[#CCFF66] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-5xl lg:text-6xl font-bold leading-tight">
            Join Singapore's premier design festival bringing together government designers, developers, and innovators.
          </h3>
        </div>
      </section>

      {/* Featured Keynotes Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="text-3xl mr-4">⭐</div>
            <h2 className="text-4xl lg:text-5xl font-bold">Featured Keynotes</h2>
          </div>
          
          <p className="text-xl text-gray-600 mb-16 max-w-4xl">
            Explore sessions from people shaping the future of government innovation and design
          </p>

          {/* Featured Keynote Speakers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            
            {/* Opening Address & Keynote */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-6 text-white">
              <div className="aspect-square bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-4xl">🎤</div>
              </div>
              <div className="mb-4">
                <span className="bg-green-500 px-3 py-1 rounded-full text-xs font-semibold">Keynote</span>
              </div>
              <h3 className="font-bold text-lg mb-4">Opening Address & Design Innovation Keynote</h3>
              <div className="space-y-2">
                <div className="font-semibold">DGE Sau Sheong</div>
                <div className="text-sm opacity-90">Deputy Government Engineer</div>
                <div className="text-sm opacity-90">GovTech Singapore</div>
                <div className="font-semibold mt-3">Shiao-Yin Kuik</div>
                <div className="text-sm opacity-90">Design Director</div>
                <div className="text-sm opacity-90">GovTech Singapore</div>
              </div>
            </div>

            {/* Government Design Strategy */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg p-6 text-white">
              <div className="aspect-square bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-4xl">🏛️</div>
              </div>
              <div className="mb-4">
                <span className="bg-green-500 px-3 py-1 rounded-full text-xs font-semibold">Keynote</span>
                <span className="bg-orange-500 px-3 py-1 rounded-full text-xs font-semibold ml-2">Strategy</span>
              </div>
              <h3 className="font-bold text-lg mb-4">From Policy to Impact: Design's Role in Government</h3>
              <div className="space-y-2">
                <div className="font-semibold">2PS Augustin</div>
                <div className="text-sm opacity-90">Second Permanent Secretary</div>
                <div className="text-sm opacity-90">Smart Nation Group</div>
                <div className="font-semibold mt-3">Lillian Shieh</div>
                <div className="text-sm opacity-90">Director, Design</div>
                <div className="text-sm opacity-90">GovTech Singapore</div>
              </div>
            </div>

            {/* Design Systems & Innovation */}
            <div className="bg-gradient-to-br from-teal-500 to-green-500 rounded-lg p-6 text-white">
              <div className="aspect-square bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-4xl">🎨</div>
              </div>
              <div className="mb-4">
                <span className="bg-green-500 px-3 py-1 rounded-full text-xs font-semibold">Keynote</span>
                <span className="bg-blue-500 px-3 py-1 rounded-full text-xs font-semibold ml-2">Design Systems</span>
              </div>
              <h3 className="font-bold text-lg mb-4">Building Design Systems for Government Scale</h3>
              <div className="space-y-2">
                <div className="font-semibold">Ruby Pryor</div>
                <div className="text-sm opacity-90">Senior Design Researcher</div>
                <div className="text-sm opacity-90">GovTech Singapore</div>
              </div>
            </div>

            {/* Inclusive Design */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg p-6 text-white">
              <div className="aspect-square bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-4xl">♿</div>
              </div>
              <div className="mb-4">
                <span className="bg-green-500 px-3 py-1 rounded-full text-xs font-semibold">Keynote</span>
                <span className="bg-purple-600 px-3 py-1 rounded-full text-xs font-semibold ml-2">Accessibility</span>
              </div>
              <h3 className="font-bold text-lg mb-4">Designing Inclusive Government Services</h3>
              <div className="space-y-2">
                <div className="font-semibold">Dr Douglas O'Loughlin</div>
                <div className="text-sm opacity-90">Accessibility Expert</div>
                <div className="text-sm opacity-90">International Consultant</div>
              </div>
            </div>

            {/* Digital Transformation */}
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg p-6 text-white">
              <div className="aspect-square bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-4xl">🚀</div>
              </div>
              <div className="mb-4">
                <span className="bg-green-500 px-3 py-1 rounded-full text-xs font-semibold">Keynote</span>
                <span className="bg-blue-600 px-3 py-1 rounded-full text-xs font-semibold ml-2">Digital Transformation</span>
              </div>
              <h3 className="font-bold text-lg mb-4">Digital-First Government: The Singapore Story</h3>
              <div className="space-y-2">
                <div className="font-semibold">MOS Jasmin Bernard</div>
                <div className="text-sm opacity-90">Minister of State</div>
                <div className="text-sm opacity-90">Ministry of Communications</div>
              </div>
            </div>

            {/* User Research */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-6 text-white">
              <div className="aspect-square bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-4xl">🔍</div>
              </div>
              <div className="mb-4">
                <span className="bg-green-500 px-3 py-1 rounded-full text-xs font-semibold">Keynote</span>
                <span className="bg-yellow-600 px-3 py-1 rounded-full text-xs font-semibold ml-2">Research</span>
              </div>
              <h3 className="font-bold text-lg mb-4">Understanding Citizens: Research in Government</h3>
              <div className="space-y-2">
                <div className="font-semibold">Senior UX Researcher</div>
                <div className="text-sm opacity-90">Central UX Team</div>
                <div className="text-sm opacity-90">GovTech Singapore</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Agenda Section */}
      <AgendaSection />

      {/* Why Attend Section */}
      <section className="bg-white py-24 px-6 border-t">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-xl font-medium mb-16">Why attend Design Festival</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Learn from Leaders */}
            <div>
              <h4 className="text-2xl font-bold mb-6">Learn from Government Leaders</h4>
              <p className="text-gray-700 leading-relaxed">
                Hear directly from senior government officials, design leaders, and policy makers
                about the future of design in government and public service innovation.
              </p>
            </div>

            {/* Connect with Community */}
            <div>
              <h4 className="text-2xl font-bold mb-6">Connect with Design Community</h4>
              <p className="text-gray-700 leading-relaxed">
                Network with designers, developers, and innovators working across government
                agencies. Share experiences and learn from diverse perspectives in public service design.
              </p>
            </div>

            {/* Practical Insights */}
            <div>
              <h4 className="text-2xl font-bold mb-6">Gain Practical Insights</h4>
              <p className="text-gray-700 leading-relaxed">
                Take away actionable strategies for designing inclusive, accessible, and impactful
                government services that truly serve citizens' needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Sections */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Slack Channel */}
        <div className="bg-[#CCFF66] p-12 lg:p-16">
          <div className="max-w-lg">
            <p className="text-lg mb-4 font-medium">💬 Stay Connected</p>
            <h3 className="text-4xl font-bold mb-6 leading-tight">
              Join our Festival Slack Channel
            </h3>
            <p className="text-lg mb-8 leading-relaxed">
              Get the latest announcements, updates, and connect with
              fellow attendees. Join our community for real-time discussions
              and networking opportunities.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800">
              Join Slack Channel
            </Button>
          </div>
        </div>

        {/* Registration */}
        <div className="bg-purple-500 p-12 lg:p-16 text-white">
          <div className="max-w-lg">
            <p className="text-lg mb-4 font-medium">🎯 Registration</p>
            <h3 className="text-4xl font-bold mb-6 leading-tight">
              Register now to save your spot!
            </h3>
            <p className="text-lg mb-8 leading-relaxed">
              Don't miss out on Singapore's premier design festival.
              Secure your place at keynotes, workshops, and networking
              sessions with government design leaders.
            </p>
            <Button className="bg-white text-purple-500 hover:bg-gray-100">
              Register Now
            </Button>
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
      title: 'Fireside chat: Why isn\'t empathy enough?',
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
      title: 'Just Trying My Best: A Designer\'s Journey into Accessibility',
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
      title: 'Growing with GovTech: A UX Designer\'s Story of Learning, Leadin...',
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
