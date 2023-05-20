import "./globals.css"
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
          <GrayEllipse className="absolute top-52" />
          <BREllipse className="absolute bottom-0 right-0" />
          <TLEllipse className="absolute left-0 top-0" />
          <main className="relative z-50 flex  min-h-screen flex-col justify-between bg-gray-50 bg-opacity-40 p-8 backdrop-blur-[250px] dark:bg-gray-900 dark:bg-opacity-40">
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}
