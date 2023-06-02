import { TypographyMuted } from "@components/atoms/typography/TypographyMuted"
import { TypographyP } from "@components/atoms/typography/TypographyP"

type FormationProps = {
  date: string
  title: string
  school: string
  description?: string
}

export const Formation = ({ date, title, school, description }: FormationProps) => {
  return (
    <div className="py-10">
      <TypographyMuted className="-mb-0.5">{date}</TypographyMuted>
      <p className="-mb-0.5 text-lg font-semibold">{title}</p>
      <p className="text-purple-500 dark:text-purple-400">{school}</p>
      {description && <TypographyP>{description}</TypographyP>}
    </div>
  )
}
