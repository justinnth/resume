"use client"

import { useTheme } from "next-themes"
import { SVGProps } from "react"

export const GrayEllipse = (props: SVGProps<SVGSVGElement>) => {
  const { theme } = useTheme()

  const gray = theme === "dark" ? "#262626" : "#F5F5F5"

  return (
    <svg
      width="635"
      height="477"
      viewBox="0 0 635 477"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse cx="228.5" cy="238.5" rx="406.5" ry="238.5" fill={gray} />
    </svg>
  )
}
