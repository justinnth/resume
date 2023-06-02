import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Inter, Lobster } from "next/font/google"

import { Footer } from "@components/organisms/Footer"
import { Header } from "@components/organisms/Header"
import { Providers } from "@utils/providers"

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" })
const lobster = Lobster({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lobster",
  weight: "400",
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${lobster.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
          <main className="flex w-full flex-col p-6">
            <div className="gradient absolute left-[-50px] top-[-100px] bg-gradient-to-t from-gray-50 to-purple-400 dark:from-gray-900 dark:to-purple-600"></div>
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
