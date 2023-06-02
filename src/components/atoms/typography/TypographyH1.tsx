import { HTMLAttributes, ReactNode } from "react"

type TypographyH1Props = {
  children: ReactNode
} & HTMLAttributes<HTMLHeadingElement>

export const TypographyH1 = ({ children, className, ...props }: TypographyH1Props) => (
  <h1
    className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}
    {...props}
  >
    {children}
  </h1>
)
