import { Button } from "@/components/ui/button"
import Link from "next/link"

export function TopNavigation() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Announcement */}
        <div className="flex items-center space-x-4">
          <div className="bg-black text-white px-3 py-1 rounded text-sm">
            ⚡ Join our Festival Slack Channel for latest announcements and updates 🤩
          </div>
          <Button variant="ghost" size="sm">
            ⏸️
          </Button>
        </div>

        {/* Right side - Navigation */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" className="text-black font-medium">
            Keynotes
          </Button>
          <Button variant="ghost" className="text-black font-medium">
            Event Calendar
          </Button>
          <Button variant="ghost" className="text-black font-medium">
            Speakers
          </Button>
          <Button variant="ghost" className="text-black font-medium">
            Design Week
          </Button>
          <Button variant="ghost" className="text-black font-medium">
            Slack Channel
          </Button>
          <Button asChild className="bg-black text-white hover:bg-gray-800">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDiP5lcryP4mjwD49vUiuTZWw01ZMgw4ISNpM3kgfYfLCKHA/viewform" className="flex items-center" target="_blank" rel="noopener noreferrer">
              Register Now
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
} 