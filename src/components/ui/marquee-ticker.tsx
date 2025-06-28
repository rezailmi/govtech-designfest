import { cn } from "@/lib/utils"

interface MarqueeTickerProps {
  className?: string
  content?: string
  speed?: number
}

export function MarqueeTicker({ 
  className, 
  content = "JULY 1-31, 2025 • GovTech Design Festival 2025 • ", 
  speed = 30 
}: MarqueeTickerProps) {
  return (
    <div 
      className={cn("w-full overflow-hidden", className)}
      style={{ backgroundColor: '#FF4DC3' }}
      role="banner"
      aria-label="Event information ticker"
    >
      <div 
        className="flex whitespace-nowrap"
        style={{
          animation: `scroll-left ${speed}s linear infinite`,
        }}
      >
        {/* Duplicate content multiple times for seamless loop */}
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="flex items-center px-5 py-5 text-black text-sm font-medium leading-[1.73]"
            style={{ fontFamily: 'Geist Mono, monospace' }}
          >
            {content}
          </div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  )
}