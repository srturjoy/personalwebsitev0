"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.services", href: "/services" },
  { key: "nav.portfolio", href: "/portfolio" },
  { key: "nav.experience", href: "/experience" },
  { key: "nav.contact", href: "/contact" },
]

// Glowing T Logo Component
function TLogo({ className }: { className?: string }) {
  return (
    <div className={cn("relative group", className)}>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
      
      {/* Logo container */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary via-primary/90 to-accent flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary/30">
        {/* Animated border */}
        <div className="absolute inset-0 rounded-xl border border-white/20 group-hover:border-white/40 transition-colors" />
        
        {/* T letter */}
        <span className="text-white font-bold text-lg sm:text-xl tracking-tight" style={{ 
          textShadow: "0 0 10px rgba(255,255,255,0.5)",
          fontFamily: "system-ui, -apple-system, sans-serif"
        }}>
          T
        </span>
      </div>
    </div>
  )
}

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "bg-transparent py-3"
      )}
    >
      {/* Premium glassmorphism background */}
      <div className={cn(
        "absolute inset-0 transition-all duration-500",
        scrolled 
          ? "bg-background/80 dark:bg-slate-900/90 backdrop-blur-2xl border-b border-border/30 dark:border-slate-700/30 shadow-lg shadow-black/5 dark:shadow-black/20" 
          : "bg-transparent"
      )}>
        {/* Gradient border effect */}
        {scrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        )}
      </div>

      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Logo - Far Left */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <TLogo />
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-base sm:text-lg leading-tight group-hover:text-primary transition-colors dark:text-white">
                {language === "en" ? "Turjoy" : "তুর্জয়"}
              </span>
              <span className="text-[10px] text-muted-foreground leading-none">
                {language === "en" ? "Digital Expert" : "ডিজিটাল বিশেষজ্ঞ"}
              </span>
            </div>
          </Link>

          {/* Navigation Links - Scrollable on Mobile, Centered on Desktop */}
          <nav className="flex-1 overflow-hidden lg:overflow-visible lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            {/* Mobile: Horizontal scrollable container */}
            <div 
              className="lg:hidden overflow-x-auto no-scrollbar"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <div className="flex w-max gap-1.5 py-1 pl-1 pr-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.key}
                    href={link.href}
                    className={cn(
                      "relative px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all duration-300 rounded-full flex-shrink-0",
                      pathname === link.href 
                        ? "text-primary bg-primary/10 dark:bg-primary/20" 
                        : "text-muted-foreground hover:text-foreground dark:hover:text-white hover:bg-secondary/50"
                    )}
                  >
                    {t(link.key)}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop: Centered pill container */}
            <div className="hidden lg:flex items-center gap-0.5 bg-card/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-full px-2 py-1.5 border border-border/30 dark:border-slate-700/30 shadow-lg shadow-black/5">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  href={link.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full group",
                    pathname === link.href 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-foreground dark:hover:text-white"
                  )}
                >
                  <span className="relative z-10">{t(link.key)}</span>
                  <span className={cn(
                    "absolute inset-0 rounded-full bg-primary/10 dark:bg-primary/20 scale-0 transition-transform duration-300 group-hover:scale-100",
                    pathname === link.href && "scale-100"
                  )} />
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </Link>
              ))}
            </div>
          </nav>

          {/* Actions - Far Right */}
          <div className="flex items-center gap-1 shrink-0">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === "en" ? "bn" : "en")}
              className="relative group h-8 w-8 sm:h-10 sm:w-10 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20"
            >
              <Globe className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:rotate-12" />
              <span className="absolute -bottom-0.5 -right-0.5 text-[8px] sm:text-[10px] font-bold bg-primary text-primary-foreground rounded px-0.5 sm:px-1 transition-transform group-hover:scale-110">
                {language.toUpperCase()}
              </span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="group h-8 w-8 sm:h-10 sm:w-10 rounded-full hover:bg-primary/10 dark:hover:bg-primary/20"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:rotate-45" />
              ) : (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:-rotate-12" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
