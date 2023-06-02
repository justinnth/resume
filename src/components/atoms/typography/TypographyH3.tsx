import { HTMLAttributes, ReactNode } from "react"

type TypographyH3Props = {
  children: ReactNode
} & HTMLAttributes<HTMLHeadingElement>

export const TypographyH3 = ({ children, className, ...props }: TypographyH3Props) => (
  <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`} {...props}>
    {children}
  </h3>
)
