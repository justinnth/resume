import "../globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Inter, Lobster } from "next/font/google"
import Script from "next/script"

import { Footer } from "@components/organisms/Footer"
import { Header } from "@components/organisms/Header"
import { Locale, i18n } from "@utils/locale"
import { Providers } from "@utils/providers"

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" })
const lobster = Lobster({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lobster",
  weight: "400",
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html
      lang={params.lang}
      className={`${inter.variable} ${lobster.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground dark:bg-backgroundDark dark:text-foregroundDark">
        <Providers>
          <main className="flex w-full flex-col p-6">
            <div className="gradient absolute left-[-20px] top-[-50px] bg-gradient-to-t from-gray-50 to-purple-400 dark:from-gray-900 dark:to-purple-600 md:left-[-50px] md:top-[-100px]"></div>
            <Header lang={params.lang} />
            {children}
            <Footer />
          </main>
          <Analytics />
        </Providers>

        {/* Tell the browser to never restore the scroll position on load */}
        <Script
          id="scroll-restoration"
          dangerouslySetInnerHTML={{ __html: `history.scrollRestoration = "manual"` }}
        />
      </body>
    </html>
  )
}
