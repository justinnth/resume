"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

import { TypographyMuted } from "@components/atoms/typography/TypographyMuted"

export const Footer = () => {
  const { setTheme, systemTheme } = useTheme()

  useEffect(() => {
    setTheme(systemTheme ?? "light")
  }, [systemTheme])

  return (
    <div className="container z-10 mx-auto flex items-center justify-between gap-4">
      <TypographyMuted>2023 - Justin North</TypographyMuted>
    </div>
  )
}
