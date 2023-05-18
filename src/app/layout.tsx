import "./globals.css"
import { Inter } from "next/font/google"

import { Footer } from "@components/organisms/Footer"
import { Header } from "@components/organisms/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Justin North",
  description: "Développeur fullstack",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
