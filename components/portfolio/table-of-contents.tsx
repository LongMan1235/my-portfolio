'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { List, ChevronRight } from 'lucide-react'

interface TocItem {
  id: string
  label: string
  level: number
}

interface TableOfContentsProps {
  items: TocItem[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const [isExpanded, setIsExpanded] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-100px 0px -70% 0px',
        threshold: 0,
      }
    )

    items.forEach((item) => {
      const element = document.getElementById(item.id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [items])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 140
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="sticky top-36 hidden xl:block">
      <div className="rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden animate-fade-in-right delay-300">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center gap-2 p-4 text-sm font-semibold text-foreground hover:bg-secondary/50 transition-colors"
        >
          <List className="size-4 text-primary" />
          <span>On This Page</span>
          <ChevronRight
            className={cn(
              'size-4 ml-auto transition-transform duration-200',
              isExpanded && 'rotate-90'
            )}
          />
        </button>

        {isExpanded && (
          <nav className="px-4 pb-4">
            <ul className="space-y-1">
              {items.map((item, index) => (
                <li
                  key={item.id}
                  style={{ animationDelay: `${(index + 1) * 50}ms` }}
                  className="animate-fade-in opacity-0"
                >
                  <button
                    onClick={() => handleClick(item.id)}
                    className={cn(
                      'w-full text-left text-sm py-1.5 px-3 rounded-md border-l-2 border-transparent transition-all duration-200 hover:bg-secondary/50 hover:text-foreground',
                      item.level === 2 && 'font-medium',
                      item.level === 3 && 'pl-6 text-muted-foreground',
                      activeId === item.id
                        ? 'text-primary border-l-primary bg-primary/5 font-medium'
                        : 'text-muted-foreground'
                    )}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  )
}
