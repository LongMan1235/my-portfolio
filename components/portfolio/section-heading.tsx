interface SectionHeadingProps {
  children: React.ReactNode
  level?: "h2" | "h3" | "h4"
  className?: string
}

export function SectionHeading({
  children,
  level = "h2",
  className = "",
}: SectionHeadingProps) {
  const baseClasses = "font-semibold tracking-tight text-foreground"

  const levelClasses = {
    h2: "text-2xl md:text-3xl mb-4 mt-10 first:mt-0",
    h3: "text-xl md:text-2xl mb-3 mt-8",
    h4: "text-lg md:text-xl mb-2 mt-6",
  }

  const Tag = level

  return (
    <Tag className={`${baseClasses} ${levelClasses[level]} ${className}`}>
      {children}
    </Tag>
  )
}
