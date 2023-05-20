"use client"

import { useTheme } from "next-themes"
import { SVGProps } from "react"

export const BREllipse = (props: SVGProps<SVGSVGElement>) => {
  const { theme } = useTheme()

  const purple = theme === "dark" ? "#4C1D95" : "#A78BFA"

  return (
    <svg
      width="701"
      height="331"
      viewBox="0 0 701 331"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse cx="393" cy="225" rx="393" ry="225" fill={purple} />
    </svg>
  )
}
