"use client"

import { Button } from "@/components/ui/button"
import { MarqueeTicker } from "@/components/ui/marquee-ticker"
import { HeroSection } from "@/components/hero/hero-section"
import { KeynoteList } from "@/components/keynote/keynote-list"
import MoreForYou from "@/components/event/MoreForYou"
import { HighlightsSection } from "@/components/event/highlights-section"
import { AgendaSection } from "@/components/agenda/agenda-section"
import { useState, useEffect } from "react"
import Image from "next/image"
import { COLORS, URLS, FONTS, SPACING, FESTIVAL } from "@/lib/constants"

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
      {/* Hero Section */}
      <HeroSection scrollY={scrollY} />

      {/* Marquee Ticker */}
      <MarqueeTicker />

      {/* CTAs Section */}
      <section className={SPACING.sectionPadding} style={{ backgroundColor: COLORS.dark }}>
        <div className={SPACING.containerMaxWidth}>
          {/* Main Heading */}
          <div className="text-center mb-12">
            <h2 className="text-white text-2xl lg:text-3xl font-medium leading-tight tracking-tight" style={{ fontFamily: FONTS.geistMono }}>
              We invite you to attend<br />
              {FESTIVAL.name}
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
                <a href={URLS.slack} className="flex items-center" target="_blank" rel="noopener noreferrer">
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
                <a href={URLS.register} className="flex items-center" target="_blank" rel="noopener noreferrer">
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

