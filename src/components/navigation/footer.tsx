import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top section with links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Event Links */}
          <div>
            <h3 className="text-sm font-semibold mb-6 tracking-wider">EVENT</h3>
            <div className="space-y-4">
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                Event Calendar
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                Why attend
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                Code of conduct
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                Design Week
              </Link>
            </div>
          </div>

          {/* Follow Links */}
          <div>
            <h3 className="text-sm font-semibold mb-6 tracking-wider">FOLLOW</h3>
            <div className="space-y-4">
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                Instagram
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                YouTube
              </Link>
              <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                Slack Channel
              </Link>
            </div>
          </div>
        </div>

        {/* Large decorative text */}
        <div className="mb-16 overflow-hidden">
          <div className="text-center">
            <div className="text-[4rem] lg:text-[8rem] xl:text-[12rem] font-bold leading-none tracking-tight text-white opacity-90">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
                <span>IMPACT</span>
                <span className="text-[2rem] lg:text-[4rem] xl:text-[6rem]">BY</span>
                <span>DESIGN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">© GovTech 2025</p>
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