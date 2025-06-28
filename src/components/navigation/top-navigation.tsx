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
          <Button className="bg-black text-white hover:bg-gray-800">
            Register Now
          </Button>
        </div>
      </div>
    </nav>
  )
} 