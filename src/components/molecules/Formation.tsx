import { ReactNode } from "react"

import { TypographyMuted } from "@components/atoms/typography/TypographyMuted"

type FormationProps = {
  date: string
  title: string
  school: string
  children?: ReactNode
}

export const Formation = ({ date, title, school, children }: FormationProps) => {
  return (
    <div className="pt-10">
      <TypographyMuted className="-mb-0.5">{date}</TypographyMuted>
      <p className="-mb-0.5 text-lg font-semibold">{title}</p>
      <p className="text-purple-500 dark:text-purple-400">{school}</p>
      {children}
    </div>
  )
}
