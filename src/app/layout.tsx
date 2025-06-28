import type { Metadata } from "next"
import "./globals.css"
import { Footer } from "@/components/navigation/footer"

export const metadata: Metadata = {
  title: "GovTech Design Festival 2025",
  description: "Join our design festival for latest announcements and updates. Register now to save your spot!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className="min-h-screen bg-white font-sans antialiased">
        {children}
        <Footer />
      </body>
    </html>
  )
} 