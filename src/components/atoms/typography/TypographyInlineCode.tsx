import { HTMLAttributes, ReactNode } from "react"

type TypographyInlineCodeProps = {
  children: ReactNode
} & HTMLAttributes<HTMLElement>

export const TypographyInlineCode = ({
  children,
  className,
  ...props
}: TypographyInlineCodeProps) => (
  <code
    className={`bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ${className}`}
    {...props}
  >
    {children}
  </code>
)
