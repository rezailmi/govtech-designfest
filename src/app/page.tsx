"use client"

import { Button } from "@/components/ui/button"
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
  const [selectedWeek, setSelectedWeek] = useState('week1')

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
    {
      week: 'week2',
      date: 'Jan 13-17, 2025',
      day: 'Week 2',
      time: '11:20AM – 12:00PM SGT',
      title: 'From Policy to Impact: Design\'s Role in Government',
      theme: 'Design craft',
      topics: ['Strategy', 'Policy'],
      speakers: [
        { name: '2PS Augustin', role: 'Second Permanent Secretary', company: 'Smart Nation Group' },
        { name: 'Lillian Shieh', role: 'Director, Design', company: 'GovTech Singapore' }
      ],
      location: 'MBC 10 L10 The Big Place'
    },
    {
      week: 'week2',
      date: 'Jan 13-17, 2025',
      day: 'Week 2',
      time: '12:00PM – 12:20PM SGT',
      title: 'User Research in Government: Understanding Citizens',
      theme: 'Design craft',
      topics: ['UX Research', 'User-centered design'],
      speakers: [
        { name: 'Ruby Pryor', role: 'Senior Design Researcher', company: 'GovTech Singapore' }
      ],
      location: 'Online via SG-Teams'
    },
    {
      week: 'week3',
      date: 'Jan 20-24, 2025',
      day: 'Week 3',
      time: '1:30PM – 1:50PM SGT',
      title: 'Designing for Accessibility in Government Services',
      theme: 'Design craft',
      topics: ['Accessibility', 'Inclusive design'],
      speakers: [
        { name: 'Dr Douglas O\'Loughlin', role: 'Accessibility Expert', company: 'International Consultant' }
      ],
      location: 'Hybrid Session'
    },
    {
      week: 'week4',
      date: 'Jan 27-31, 2025',
      day: 'Week 4',
      time: '2:10PM – 2:30PM SGT',
      title: 'Digital Transformation in Public Service',
      theme: 'Design craft',
      topics: ['Digital transformation', 'Service design'],
      speakers: [
        { name: 'MOS Jasmin Bernard', role: 'Minister of State', company: 'Ministry of Communications' }
      ],
      location: 'MBC 10 - Level 10 (The Big Place)'
    },
    {
      week: 'week5',
      date: 'Feb 3-7, 2025',
      day: 'Week 5',
      time: '3:15PM – 3:35PM SGT',
      title: 'The Future of Government Design',
      theme: 'Keynote',
      topics: ['Future trends', 'Innovation'],
      speakers: [
        { name: 'Panel Discussion', role: 'Various Leaders', company: 'GovTech Singapore' }
      ],
      location: 'Main Auditorium'
    }
  ]

  const filteredItems = agendaItems.filter(item => item.week === selectedWeek)

  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-8">Full Agenda</h2>
        
        {/* Week Filter */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6 text-gray-900">Filter by week:</h3>
          <div className="flex flex-wrap gap-2">
            {[
              { key: 'week1', label: 'Week 1' },
              { key: 'week2', label: 'Week 2' },
              { key: 'week3', label: 'Week 3' },
              { key: 'week4', label: 'Week 4' },
              { key: 'week5', label: 'Week 5' }
            ].map((week) => (
              <Button
                key={week.key}
                variant={selectedWeek === week.key ? "default" : "ghost"}
                onClick={() => setSelectedWeek(week.key)}
                className={`
                  relative px-6 py-3 font-medium transition-all duration-200 ease-in-out
                  ${selectedWeek === week.key 
                    ? 'bg-black text-white shadow-lg transform scale-105 hover:bg-gray-800' 
                    : 'text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-900 hover:shadow-md'
                  }
                  focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2
                `}
              >
                {week.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Agenda Items */}
        <div className="space-y-4">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 ease-in-out hover:-translate-y-1"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm text-gray-600 font-medium bg-gray-100 px-3 py-1 rounded-full">
                      {item.day}, {item.date}
                    </span>
                    <span className="text-sm text-gray-400">•</span>
                    <span className="text-sm text-gray-600 font-medium">{item.time}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-black transition-colors">
                    {item.title}
                  </h3>
                  
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
    </section>
  )
}
