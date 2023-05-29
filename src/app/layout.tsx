import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google"

import { BREllipse } from "@components/atoms/BREllipse"
import { GrayEllipse } from "@components/atoms/GrayEllipse"
import { TLEllipse } from "@components/atoms/TLEllipse"
import { Footer } from "@components/organisms/Footer"
import { Header } from "@components/organisms/Header"
import { Providers } from "@utils/providers"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`relative bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-50  ${inter.className}`}
      >
        <Providers>
          <main className="relative z-50 flex  min-h-screen flex-col justify-between bg-gray-50 dark:bg-gray-900 dark:bg-opacity-40">
            <Header />
            {children}
            <Footer />
          </main>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
