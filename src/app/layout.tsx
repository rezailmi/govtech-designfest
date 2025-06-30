import type { Metadata } from "next"
import "./globals.css"
import { Footer } from "@/components/navigation/footer"
import { ModalProvider } from "@/contexts/modal-context"
import { GlobalModals } from "@/components/global-modals"

export const metadata: Metadata = {
  title: "GovTech Design Festival 2025",
  description: "GovTech Singapore's first design festival. We're bringing together diverse perspectives and disciplines to tackle real-world challenges and create meaningful change. Discover how we can shape better experiences and make lives better in Singapore.",
  icons: {
    icon: [
      { url: "/assets/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon/favicon.ico", sizes: "any" }
    ],
    apple: [
      { url: "/assets/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { url: "/assets/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <body className="min-h-screen bg-white font-sans antialiased">
        <ModalProvider>
          {children}
          <Footer />
          <GlobalModals />
        </ModalProvider>
      </body>
    </html>
  )
} 