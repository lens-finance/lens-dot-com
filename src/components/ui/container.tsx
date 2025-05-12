import React from "react"
import { cn } from "../../lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function Container({
  children,
  className,
  as: Component = "div",
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export function SectionContainer({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <Container
      as="section"
      className={cn("py-12 md:py-16 lg:py-24", className)}
      {...props}
    >
      {children}
    </Container>
  )
}