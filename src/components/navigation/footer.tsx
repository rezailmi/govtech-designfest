import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top section with links */}
        <div className="mb-16">
          {/* Event Links */}
          <div>
            <h3 className="text-sm font-semibold mb-6 tracking-wider">EVENT</h3>
            <div className="space-y-4">
              <Link href="#keynotes" className="block text-gray-300 hover:text-white transition-colors">
                Keynote
              </Link>
              <Link href="#agenda" className="block text-gray-300 hover:text-white transition-colors">
                Agenda
              </Link>
              <Link href="#register" className="block text-gray-300 hover:text-white transition-colors">
                Register
              </Link>
              <Link href="#people" className="block text-gray-300 hover:text-white transition-colors">
                People
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Illustration */}
        <div className="flex justify-center">
          <Image 
            src="/assets/icons/illustrations/footer-illustration.png" 
            alt="GovTech Design Festival 2025 - Impact by Design" 
            width={600}
            height={200}
            className="max-w-full h-auto"
          />
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">GovTech Design Festival © 2025</p>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Event Terms
            </Link>
          </div>
          <div className="text-gray-400 text-sm">
            GovTech
          </div>
        </div>
      </div>
    </footer>
  )
} 