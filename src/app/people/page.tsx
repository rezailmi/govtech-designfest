"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const volunteers = [
  "Alicia Lee", "Amalina Rashid", "Bing Qian Goh", "Charlene Chua",
  "Charlotte Tan", "Chee Hong Wong", "Clara Boo", "Dex Tan",
  "Eida Tan", "Edwin Lau", "Eileen David", "Fala Sharil",
  "Felicia Liew", "Huda", "Immanuel Goh", "Jasper Phang",
  "Jia Eenn Tay", "Jian Ye Tan", "Jing Qian Ho", "Joy Ng",
  "Lilian Lee", "Ling Lui", "Michelle Chen", "Nicole Li",
  "Pink Lim", "Premika Posaw", "Rae Zhang", "Rakhi",
  "Reza Ilmi", "Shaheed Ibnu Mohamed Hassan", "Shanshan Lu", "Shawn Kong",
  "Shi Hui Tong", "Si Qing Phang", "Timothy WB Loh", "Tze Yuan Lee",
  "Winnie Kwan", "Wondo Jeong", "Yurong Zheng"
]

function VolunteerName({ name }: { name: string }) {
  return (
    <div className="text-center py-2">
      <span className="text-lg text-white font-medium whitespace-nowrap">{name}</span>
    </div>
  )
}

export default function PeoplePage() {
  return (
    <>
      <style jsx global>{`
        body {
          background-color: #000000;
        }
      `}</style>
      <div className="min-h-screen bg-black">
      {/* Header with Navigation */}
      <header className="relative bg-black border-b border-gray-800">
        <div className="p-4 md:p-8">
          <div className="flex flex-col gap-6 md:gap-4">
            {/* Mobile: Logo centered at top */}
            <div className="flex md:hidden justify-center">
              <Link href="/">
                <Image 
                  src="/assets/icons/logos/gdf-logo.svg" 
                  alt="GovTech Design Festival" 
                  width={120}
                  height={48}
                  className="h-10 w-auto cursor-pointer"
                  priority
                />
              </Link>
            </div>
            
            {/* Desktop: Three column layout */}
            <div className="flex items-center justify-between">
              {/* Left Navigation - Keynotes, Agenda */}
              <div className="hidden md:flex items-center gap-8 text-white flex-1">
                <button onClick={() => window.location.href = '/#keynotes'} className="hover:text-pink-300 transition-colors">Keynotes</button>
                <button onClick={() => window.location.href = '/#agenda'} className="hover:text-pink-300 transition-colors">Agenda</button>
              </div>
              
              {/* Center Logo - Desktop only */}
              <div className="hidden md:flex justify-center">
                <Link href="/">
                  <Image 
                    src="/assets/icons/logos/gdf-logo.svg" 
                    alt="GovTech Design Festival" 
                    width={120}
                    height={48}
                    className="h-12 w-auto cursor-pointer"
                    priority
                  />
                </Link>
              </div>
              
              {/* Right Navigation - People, Register */}
              <div className="hidden md:flex items-center justify-end gap-8 text-white flex-1">
                <span className="text-pink-300 font-semibold">People</span>
                <Button asChild className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-lg font-semibold">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDiP5lcryP4mjwD49vUiuTZWw01ZMgw4ISNpM3kgfYfLCKHA/viewform" className="flex items-center" target="_blank" rel="noopener noreferrer">
                    Register
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </Button>
              </div>
              
              {/* Mobile Navigation - All links in a row */}
              <div className="flex md:hidden items-center justify-between gap-2 text-white text-sm w-full px-2">
                <button onClick={() => window.location.href = '/#keynotes'} className="hover:text-pink-300 transition-colors flex-1 text-center">Keynotes</button>
                <button onClick={() => window.location.href = '/#agenda'} className="hover:text-pink-300 transition-colors flex-1 text-center">Agenda</button>
                <span className="text-pink-300 font-semibold flex-1 text-center">People</span>
                <Button asChild className="bg-black text-white hover:bg-gray-800 px-2 py-1.5 rounded-lg font-semibold text-sm flex-1">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDiP5lcryP4mjwD49vUiuTZWw01ZMgw4ISNpM3kgfYfLCKHA/viewform" className="flex items-center justify-center" target="_blank" rel="noopener noreferrer">
                    Register
                    <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 md:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-medium text-white mb-4">
                Deepest thanks to the passionate team of 39 volunteers who brought the Festival to life.
              </h1>
            </div>
          </div>
          
          {/* Volunteers List - Movie Credits Style */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
              {volunteers.map((name) => (
                <VolunteerName key={name} name={name} />
              ))}
            </div>
          </div>
          
          {/* Special Shoutout */}
          <div className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl font-medium text-white">
                Special shoutout to Alicia and Immanuel from the Design Practice for leading the charge with heart and grace, to Edwin for the vibrant brand graphics, and to Wondo and Reza for their generosity and magic in bringing the site to life at the eleventh hour.
              </p>
            </div>
          </div>
          
          {/* Back to Home Button */}
          <div className="text-center">
            <Button asChild className="bg-[#70094E] text-white hover:bg-[#5a0741] px-12 py-6 rounded-lg font-semibold text-xl">
              <Link href="/" className="flex items-center justify-center">
                <svg className="mr-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
    </>
  )
} 