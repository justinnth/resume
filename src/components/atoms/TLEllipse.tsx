"use client"

import { useTheme } from "next-themes"
import { SVGProps } from "react"

export const TLEllipse = (props: SVGProps<SVGSVGElement>) => {
  const { theme } = useTheme()

  const purple = theme === "dark" ? "#4C1D95" : "#A78BFA"

  return (
    <svg
      width="767"
      height="450"
      viewBox="0 0 767 450"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <ellipse cx="374" cy="225" rx="393" ry="225" fill={purple} />
    </svg>
  )
}
