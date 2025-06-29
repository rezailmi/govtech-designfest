"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white">


      {/* Main Footer */}
      <div className="pt-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Footer Illustration */}
          <div className="flex justify-center">
          <Image 
            src="/assets/icons/illustrations/footer-illustration.png" 
            alt="GovTech Design Festival 2025 - Impact by Design" 
            width={900}
            height={300}
            className="w-full max-w-4xl h-auto"
          />
        </div>

          {/* Bottom section */}
          <div className="border-t border-gray-800 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              {/* Copyright */}
              <div className="flex items-center">
                <p className="text-gray-400 text-sm">GovTech Design Festival © 2025</p>
              </div>

              {/* Navigation links - horizontal */}
              <div className="flex flex-wrap items-center justify-center gap-6">
                <button onClick={() => document.getElementById('keynotes')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Keynote
                </button>
                <button onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-white transition-colors text-sm">
                  Agenda
                </button>
                <Link href="/people" className="text-gray-300 hover:text-white transition-colors text-sm">
                  People
                </Link>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDiP5lcryP4mjwD49vUiuTZWw01ZMgw4ISNpM3kgfYfLCKHA/viewform" className="text-gray-300 hover:text-white transition-colors text-sm flex items-center" target="_blank" rel="noopener noreferrer">
                  Register
                  <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 