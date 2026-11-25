'use client'

import { useState, useEffect } from 'react'
import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

const navItems = [
  { label: 'Hero', id: 'hero' },
  { label: 'Problem', id: 'problem' },
  { label: 'Users', id: 'users' },
  { label: 'Journey', id: 'journey' },
  { label: 'Task Flow', id: 'taskflow' },
  { label: 'Features', id: 'features' },
  { label: 'Implementation', id: 'implementation' },
  { label: 'Reflection', id: 'reflection' }
]

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const elements = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[]

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        const id = visible?.target?.id
        if (id) setActiveSection(id)
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35, 0.5],
        rootMargin: '-15% 0px -70% 0px',
      },
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
      setMobileOpen(false)
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-background/85 backdrop-blur-md border-b border-border/60 shadow-sm'
        : 'bg-background/60 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-lg md:text-xl font-semibold tracking-tight text-foreground hover:text-accent transition-colors duration-300"
          >
            CLEAN GO <span className="sr-only">Home</span>
          </button>
          <div className="hidden md:block text-[11px] text-muted-foreground mt-0.5 tracking-wide">
            UX / HCI Case Study
          </div>
        </div>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-all duration-300 pb-2 border-b-2 ${
                activeSection === item.id
                  ? 'text-accent border-accent'
                  : 'text-muted-foreground border-b-2 border-transparent hover:text-foreground hover:border-border/70'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open navigation menu">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <SheetHeader className="border-b border-border/60">
                <SheetTitle>CLEAN GO</SheetTitle>
                <div className="text-xs text-muted-foreground">Case study navigation</div>
              </SheetHeader>
              <div className="p-4">
                <div className="flex flex-col">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors ${
                        activeSection === item.id
                          ? 'bg-accent/10 text-accent'
                          : 'text-foreground hover:bg-secondary/60'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
