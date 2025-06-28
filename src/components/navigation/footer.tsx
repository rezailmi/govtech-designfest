import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* CTA Section */}
      <div className="bg-black py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-medium mb-4 leading-tight">
            Are you excited for a month filled with<br />
            engaging events and learning opportunities?
          </h2>
          <p className="text-xl lg:text-2xl mb-8">
            Don&apos;t miss out—register now!
          </p>
          <Button asChild className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg font-medium rounded-md">
            <a href="#register" target="_blank" rel="noopener noreferrer">
              Register
            </a>
          </Button>
        </div>
      </div>

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
      </div>
    </footer>
  )
} 