import { HTMLAttributes, ReactNode } from "react"

type TypographyMutedProps = {
  children: ReactNode
} & HTMLAttributes<HTMLParagraphElement>

export const TypographyMuted = ({ children, className, ...props }: TypographyMutedProps) => (
  <p className={`text-sm text-muted-foreground ${className}`} {...props}>
    {children}
  </p>
)
