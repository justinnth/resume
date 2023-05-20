"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { useTheme } from "next-themes"

export const Footer = () => {
  const { theme, setTheme } = useTheme()

  const toggleDarkMode = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  return (
    <div className="flex items-center justify-end gap-4">
      <Link href="uses">EN</Link>
      <button onClick={toggleDarkMode}>{theme === "dark" ? <SunIcon /> : <MoonIcon />}</button>
    </div>
  )
}
