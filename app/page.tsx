"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { PositionStatement } from "@/components/portfolio/position-statement"
import { ProjectTheft } from "@/components/portfolio/project-theft"
import { ProjectBridge } from "@/components/portfolio/project-bridge"
import { ProjectSwim } from "@/components/portfolio/project-swim"
import { References } from "@/components/portfolio/references"
import {
  User,
  Shield,
  Building2,
  Waves,
  BookOpen,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const tabs = [
  {
    value: "position",
    label: "Position Statement",
    shortLabel: "Position",
    icon: User,
  },
  {
    value: "theft",
    label: "Project 1: Theft Prevention",
    shortLabel: "Theft",
    icon: Shield,
  },
  {
    value: "bridge",
    label: "Project 2: Bridge Optimization",
    shortLabel: "Bridge",
    icon: Building2,
  },
  {
    value: "swim",
    label: "Project 3: Swim Resistance",
    shortLabel: "Swim",
    icon: Waves,
  },
  {
    value: "references",
    label: "References",
    shortLabel: "Refs",
    icon: BookOpen,
  },
]

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("position")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-5xl px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-foreground">
                Rithik Sreekumar
              </h1>
              <p className="text-sm text-muted-foreground mt-0.5">
                ESC102 Praxis II | Engineering Design Portfolio
              </p>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <Tabs
        value={activeTab}
        onValueChange={(value) => {
          setActiveTab(value)
          setMobileMenuOpen(false)
        }}
        className="flex flex-col"
      >
        {/* Desktop Navigation */}
        <nav className="hidden md:block sticky top-[73px] z-40 border-b border-border bg-background/80 backdrop-blur-md">
          <div className="mx-auto max-w-5xl px-4">
            <TabsList className="h-12 w-full justify-start bg-transparent p-0 gap-0">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="relative h-12 rounded-none border-b-2 border-transparent px-4 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none bg-transparent transition-all duration-200 hover:text-primary/80"
                >
                  <tab.icon className="size-4 mr-2 transition-transform duration-200 group-hover:scale-110" />
                  <span className="hidden lg:inline">{tab.label}</span>
                  <span className="lg:hidden">{tab.shortLabel}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden border-b border-border bg-card">
            <div className="px-4 py-2 space-y-1">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="w-full justify-start h-11 px-4 rounded-lg data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
                >
                  <tab.icon className="size-4 mr-3" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </div>
          </nav>
        )}

        {/* Main Content */}
        <main className="flex-1">
          <ScrollArea className="h-[calc(100vh-145px)]">
            <div className="mx-auto max-w-3xl xl:max-w-4xl px-4 py-8 md:py-12">
              <TabsContent value="position" className="mt-0 focus-visible:outline-none animate-fade-in">
                <PositionStatement />
              </TabsContent>

              <TabsContent value="theft" className="mt-0 focus-visible:outline-none animate-fade-in">
                <ProjectTheft />
              </TabsContent>

              <TabsContent value="bridge" className="mt-0 focus-visible:outline-none animate-fade-in">
                <ProjectBridge />
              </TabsContent>

              <TabsContent value="swim" className="mt-0 focus-visible:outline-none animate-fade-in">
                <ProjectSwim />
              </TabsContent>

              <TabsContent value="references" className="mt-0 focus-visible:outline-none animate-fade-in">
                <References />
              </TabsContent>
            </div>

            {/* Footer */}
            <footer className="border-t border-border mt-12">
              <div className="mx-auto max-w-3xl px-4 py-8 text-center">
                <p className="text-sm text-muted-foreground">
                  Rithik Sreekumar | Engineering Design Portfolio
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  ESC102 Praxis II | University of Toronto | 2025-2026
                </p>
              </div>
            </footer>
          </ScrollArea>
        </main>
      </Tabs>
    </div>
  )
}
