"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect } from "react"

export const Footer = () => {
  const { theme, setTheme, systemTheme } = useTheme()

  const toggleDarkMode = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }

  useEffect(() => {
    setTheme(systemTheme ?? "light")
  }, [systemTheme])

  return (
    <div
      className="items -center
    flex justify-end gap-4"
    >
      <Link href="uses">EN</Link>
      <button onClick={toggleDarkMode}>{theme === "dark" ? <SunIcon /> : <MoonIcon />}</button>
    </div>
  )
}
