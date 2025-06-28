import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Footer Illustration */}
        <div className="flex justify-center mb-16">
          <Image 
            src="/assets/icons/illustrations/footer-illustration.png" 
            alt="GovTech Design Festival 2025 - Impact by Design" 
            width={600}
            height={200}
            className="max-w-full h-auto"
          />
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <div className="flex items-center">
              <p className="text-gray-400 text-sm">GovTech Design Festival © 2025</p>
            </div>

            {/* Navigation links - horizontal */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link href="#keynotes" className="text-gray-300 hover:text-white transition-colors text-sm">
                Keynote
              </Link>
              <Link href="#agenda" className="text-gray-300 hover:text-white transition-colors text-sm">
                Agenda
              </Link>
              <Link href="#register" className="text-gray-300 hover:text-white transition-colors text-sm">
                Register
              </Link>
              <Link href="#people" className="text-gray-300 hover:text-white transition-colors text-sm">
                People
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 