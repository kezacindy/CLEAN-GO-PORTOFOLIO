'use client'

import { useEffect, useMemo, useState } from 'react'
import { MenuIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

type NavItem = { label: string; id: string }

export default function Navbar() {
  const navItems: NavItem[] = useMemo(
    () => [
      { label: 'Overview', id: 'hero' },
      { label: 'Research', id: 'research' },
      { label: 'Problem', id: 'problem' },
      { label: 'System', id: 'system-overview' },
      { label: 'Personas', id: 'personas' },
      { label: 'Journey', id: 'journey' },
      { label: 'Task flow', id: 'taskflow' },
      { label: 'Features', id: 'features' },
      { label: 'Implementation', id: 'implementation' },
      { label: 'Evaluation', id: 'evaluation' },
      { label: 'Ethics', id: 'ethics' },
      { label: 'Reflection', id: 'reflection' },
    ],
    [],
  )

  const [activeSection, setActiveSection] = useState(navItems[0]?.id ?? 'hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 4)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
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
        threshold: [0.2, 0.35, 0.5],
        rootMargin: '-15% 0px -70% 0px',
      },
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [navItems])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth' })
    setActiveSection(id)
    setMobileOpen(false)
  }

  return (
    <nav
      className={[
        'fixed top-0 inset-x-0 z-50',
        'border-b border-border/60',
        'bg-background/90 backdrop-blur-sm',
        isScrolled ? 'shadow-sm' : 'shadow-none',
      ].join(' ')}
      aria-label="Case study navigation"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12 py-4 flex items-center justify-between gap-6">
        <div className="min-w-0">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-sm md:text-base font-semibold tracking-tight text-foreground hover:text-accent"
          >
            CLEAN GO
          </button>
          <div className="hidden md:block text-[11px] text-muted-foreground mt-0.5">
            UX / HCI case study portfolio
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-6 overflow-x-auto">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={[
                'text-sm font-medium whitespace-nowrap',
                'border-b-2 pb-2 -mb-2',
                activeSection === item.id
                  ? 'text-foreground border-accent'
                  : 'text-muted-foreground border-transparent hover:text-foreground hover:border-border/80',
              ].join(' ')}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open navigation menu">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <SheetHeader className="border-b border-border/60">
                <SheetTitle>CLEAN GO</SheetTitle>
                <div className="text-xs text-muted-foreground">Case study sections</div>
              </SheetHeader>
              <div className="p-3">
                <div className="flex flex-col">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={[
                        'w-full rounded-lg px-3 py-3 text-left text-sm font-medium',
                        activeSection === item.id
                          ? 'bg-accent/10 text-foreground'
                          : 'text-foreground hover:bg-secondary/60',
                      ].join(' ')}
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

