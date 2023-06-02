import { HTMLAttributes, ReactNode } from "react"

type TypographyPProps = {
  children: ReactNode
} & HTMLAttributes<HTMLParagraphElement>

export const TypographyP = ({ children, className, ...props }: TypographyPProps) => (
  <p className={`leading-7 [&:not(:first-child)]:mt-6 ${className}`} {...props}>
    {children}
  </p>
)
