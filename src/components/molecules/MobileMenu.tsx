"use client"

import Link from "next/link"
import { useState } from "react"

import { ChangeLanguage } from "@components/atoms/ChangeLanguage"
import { Locale } from "@utils/locale"

type MobileMenuProps = {
  lang: Locale
}

export const MobileMenu = ({ lang }: MobileMenuProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <section className="flex justify-between ease-out md:hidden">
      <div onClick={() => setIsNavOpen((prev) => !prev)} className="space-y-2">
        <span className="block h-0.5 w-8 bg-foreground dark:bg-foregroundDark"></span>
        <span className="block h-0.5 w-8 bg-foreground dark:bg-foregroundDark"></span>
        <span className="block h-0.5 w-8 bg-foreground dark:bg-foregroundDark"></span>
      </div>

      <div
        className={
          isNavOpen
            ? "absolute left-0 top-0 flex h-full w-full flex-col p-6 backdrop-blur-3xl transition duration-150 ease-out"
            : "hidden"
        }
        onClick={() => setIsNavOpen(false)}
      >
        <div className="container flex justify-between">
          <Link className="font-lobster text-2xl" href={`/${lang}`}>
            Justin.
          </Link>
          <svg
            className="h-8 w-8 cursor-pointer text-foreground dark:text-foregroundDark"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>

        <div className="container flex flex-1 flex-col justify-center gap-10">
          <Link href={`/${lang}/uses`}>Uses</Link>
          <ChangeLanguage lang={lang} />
        </div>
      </div>
    </section>
  )
}
