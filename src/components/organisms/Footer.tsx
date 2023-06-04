"use client"

import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
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
      <div className="flex gap-2 transition-colors">
        <a href="https://github.com/justinnth">
          <GitHubLogoIcon
            width={16}
            height={16}
            className="hover:text-purple-900 dark:hover:text-purple-400"
          />
        </a>
        <a href="https://www.linkedin.com/in/justin-north/">
          <LinkedInLogoIcon
            width={16}
            height={16}
            className="hover:text-purple-900 dark:hover:text-purple-400"
          />
        </a>
      </div>
    </div>
  )
}
