"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Sparkles, Briefcase, Heart, Rocket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

const titles = [
  { en: "Digital Marketing Expert", bn: "ডিজিটাল মার্কেটিং বিশেষজ্ঞ" },
  { en: "Software Engineer", bn: "সফটওয়্যার ইঞ্জিনিয়ার" },
  { en: "AI & Automation Specialist", bn: "এআই ও অটোমেশন বিশেষজ্ঞ" },
  { en: "Business Analyst", bn: "বিজনেস অ্যানালিস্ট" },
  { en: "Data-Driven Strategist", bn: "ডেটা-চালিত কৌশলবিদ" },
]

function useTypewriter(texts: string[], typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState("")
  const [textIndex, setTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  useEffect(() => {
    const currentText = texts[textIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)
    
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime])
  
  return displayText
}

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const startTime = Date.now()
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(easeOut * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          animate()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration, hasAnimated])

  return <span ref={ref}>{count}{suffix}</span>
}

export function HeroSection() {
  const { t, language } = useLanguage()
  const typingTexts = titles.map(title => language === "en" ? title.en : title.bn)
  const typedText = useTypewriter(typingTexts)

  return (
    <section className="min-h-screen flex items-center pt-16 sm:pt-20 pb-8 sm:pb-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-shimmer">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                {language === "en" ? "CEO of" : "সিইও,"}{" "}
                <a 
                  href="https://boostingagencyofficial.site/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline hover:text-accent transition-colors"
                >
                  Boosting Agency BD
                </a>
              </span>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">{t("hero.greeting")}</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="gradient-text">{t("hero.name")}</span>
              </h1>
              <h2 className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-foreground dark:text-gray-200 h-8 sm:h-10 lg:h-12 whitespace-nowrap overflow-hidden">
                <span className="border-r-2 border-primary pr-1">{typedText}</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground dark:text-gray-300 max-w-xl leading-relaxed">
              {language === "en" 
                ? "Hi, I'm Turjoy! I help brands scale using data-driven performance marketing strategies. With a background in Software Engineering and expertise in AI & Automation, I deliver measurable results that transform businesses."
                : "হাই, আমি তুর্জয়! আমি ডেটা-চালিত পারফরম্যান্স মার্কেটিং কৌশল ব্যবহার করে ব্র্যান্ডগুলিকে স্কেল করতে সাহায্য করি। সফটওয়্যার ইঞ্জিনিয়ারিং ব্যাকগ্রাউন্ড এবং AI ও অটোমেশনে দক্ষতার সাথে, আমি পরিমাপযোগ্য ফলাফল প্রদান করি যা ব্যবসাকে রূপান্তরিত করে।"
              }
            </p>

            {/* Buttons - Mobile optimized layout */}
            <div className="flex flex-col gap-2 sm:gap-3">
              {/* Hire Me + Start Project - Side by side */}
              <div className="flex gap-2 sm:gap-3">
                <Button size="sm" className="group flex-1 sm:flex-none text-xs sm:text-sm px-3 sm:px-4 h-9 sm:h-10" asChild>
                  <Link href="/contact">
                    {t("hero.cta.hire")}
                    <ArrowRight className="ml-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="sm" variant="outline" className="flex-1 sm:flex-none text-xs sm:text-sm px-3 sm:px-4 h-9 sm:h-10" asChild>
                  <Link href="/services">
                    {t("hero.cta.project")}
                  </Link>
                </Button>
              </div>
              {/* WhatsApp - Below */}
              <Button
                size="sm"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white text-xs sm:text-sm px-3 sm:px-4 h-9 sm:h-10 w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://wa.me/8801518961899"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {t("hero.cta.whatsapp")}
                </a>
              </Button>
            </div>

            {/* Quick Stats - Glassmorphism Cards */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6">
              <div className="glass-effect dark:bg-slate-800/80 dark:border-slate-700/60 rounded-xl p-3 sm:p-4 text-center hover:scale-105 hover:shadow-primary/20 hover:shadow-lg transition-all duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1.5 sm:mb-2 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">
                  <AnimatedCounter target={5} suffix="+" />
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground dark:text-gray-400 leading-tight">{t("about.experience")}</p>
              </div>
              <div className="glass-effect dark:bg-slate-800/80 dark:border-slate-700/60 rounded-xl p-3 sm:p-4 text-center hover:scale-105 hover:shadow-accent/20 hover:shadow-lg transition-all duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1.5 sm:mb-2 rounded-lg bg-accent/20 flex items-center justify-center">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">
                  <AnimatedCounter target={100} suffix="+" />
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground dark:text-gray-400 leading-tight">{t("about.clients")}</p>
              </div>
              <div className="glass-effect dark:bg-slate-800/80 dark:border-slate-700/60 rounded-xl p-3 sm:p-4 text-center hover:scale-105 hover:shadow-green-500/20 hover:shadow-lg transition-all duration-300">
                <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-1.5 sm:mb-2 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">
                  <AnimatedCounter target={500} suffix="+" />
                </p>
                <p className="text-[10px] sm:text-xs text-muted-foreground dark:text-gray-400 leading-tight">{t("about.campaigns")}</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl scale-90 animate-pulse-glow" />
              
              {/* Main Image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-primary/20 animate-float shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-06%20at%2015.00.40-hyCowbSIAOYNzmSTjg8BlNxfVB1WHL.jpeg"
                  alt="Siddiqur Rahman - Digital Marketing Expert"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 288px, (max-width: 1024px) 320px, 420px"
                />
              </div>

              {/* Floating Badges with staggered animations */}
              <div className="absolute -top-2 right-0 sm:-top-4 sm:-right-4 glass-effect dark:bg-slate-800/90 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full animate-float-slow shadow-lg border border-primary/20" style={{ animationDelay: "0s" }}>
                <span className="text-xs sm:text-sm font-medium dark:text-white">{language === "en" ? "Meta Ads Expert" : "মেটা অ্যাডস বিশেষজ্ঞ"}</span>
              </div>
              <div className="absolute -bottom-2 left-0 sm:-bottom-4 sm:-left-4 glass-effect dark:bg-slate-800/90 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full animate-float-medium shadow-lg border border-accent/20" style={{ animationDelay: "2s" }}>
                <span className="text-xs sm:text-sm font-medium dark:text-white">{language === "en" ? "Data Analytics" : "ডেটা অ্যানালিটিক্স"}</span>
              </div>
              <div className="absolute top-1/2 -right-2 sm:-right-8 glass-effect dark:bg-slate-800/90 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full animate-bounce-gentle shadow-lg border border-green-500/20 hidden sm:block" style={{ animationDelay: "1s" }}>
                <span className="text-xs sm:text-sm font-medium dark:text-white">{language === "en" ? "AI Specialist" : "AI বিশেষজ্ঞ"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
