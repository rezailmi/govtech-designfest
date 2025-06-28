import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "GovTech DesignFest",
  description: "A modern application built with Next.js, Tailwind CSS v4, and shadcn/ui",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
} 