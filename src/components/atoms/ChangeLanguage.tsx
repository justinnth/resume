"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Locale } from "@utils/locale"

type ChangeLanguageProps = {
  lang: Locale
}

export const ChangeLanguage = ({ lang }: ChangeLanguageProps) => {
  const pathname = usePathname()

  const link = pathname.split("/")
  link[1] = lang === "en" ? "fr" : "en"

  return (
    <div className="flex gap-4">
      <Link href={link.join("/")}>{lang === "en" ? "FR" : "EN"}</Link>
    </div>
  )
}
