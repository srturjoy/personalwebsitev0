"use client"

import { useLanguage } from "@/lib/language-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Award, Briefcase, GraduationCap, Target, Users, TrendingUp, Zap, Heart, DollarSign, Rocket } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

// Skill icons
const MetaIcon = () => (
  <svg viewBox="0 0 36 36" className="w-4 h-4">
    <path fill="#1877F2" d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z"/>
    <path fill="#FFF" d="M24.5 23.5l.75-4.5h-4.5v-3c0-1.25.6-2.5 2.6-2.5h2v-3.8s-1.85-.3-3.6-.3c-3.7 0-6.1 2.2-6.1 6.2V19h-4v4.5h4v11c.8.15 1.65.2 2.5.2s1.7-.05 2.5-.2v-11h3.35z"/>
  </svg>
)

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

const PythonIcon = () => (
  <svg viewBox="0 0 256 255" className="w-4 h-4">
    <defs>
      <linearGradient id="py-a" x1="12.959%" x2="79.639%" y1="12.039%" y2="78.201%">
        <stop offset="0%" stopColor="#387EB8"/><stop offset="100%" stopColor="#366994"/>
      </linearGradient>
      <linearGradient id="py-b" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%">
        <stop offset="0%" stopColor="#FFE052"/><stop offset="100%" stopColor="#FFC331"/>
      </linearGradient>
    </defs>
    <path fill="url(#py-a)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"/>
    <path fill="url(#py-b)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"/>
  </svg>
)

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#61DAFB">
    <circle cx="12" cy="12" r="2"/>
    <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1"/>
    <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/>
  </svg>
)

const ExcelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <path fill="#21A366" d="M2 4v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z"/>
    <path fill="#FFF" d="M7 7l2.5 5L7 17h2l1.5-3.5L12 17h2l-2.5-5L14 7h-2l-1.5 3.5L9 7z"/>
  </svg>
)

const SQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#00758F">
    <ellipse cx="12" cy="5" rx="8" ry="3"/>
    <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/>
    <ellipse cx="12" cy="5" rx="8" ry="3" fill="#00A4C7"/>
  </svg>
)

const PowerBIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4">
    <path fill="#F2C811" d="M10 4h4v16h-4zM4 10h4v10H4zM16 8h4v12h-4z"/>
  </svg>
)

const AIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18h18M9 17V9m4 8v-6m4 6V5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const TargetIconSvg = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
)

const ShoppingIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
)

const AutomationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" strokeLinecap="round"/>
  </svg>
)

const BrandIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ContentIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
  </svg>
)

const skills = [
  { name: "Meta Ads", icon: MetaIcon },
  { name: "Google Ads", icon: GoogleIcon },
  { name: "Data Analytics", icon: ChartIcon },
  { name: "Power BI", icon: PowerBIIcon },
  { name: "Excel", icon: ExcelIcon },
  { name: "Python", icon: PythonIcon },
  { name: "SQL", icon: SQLIcon },
  { name: "Social Media", icon: ShareIcon },
  { name: "Lead Gen", icon: TargetIconSvg },
  { name: "E-commerce", icon: ShoppingIcon },
  { name: "Brand Strategy", icon: BrandIcon },
  { name: "Content Marketing", icon: ContentIcon },
  { name: "Marketing Automation", icon: AutomationIcon },
  { name: "AI Agents", icon: AIIcon },
  { name: "React", icon: ReactIcon },
]

const values = [
  {
    icon: Target,
    title: "Strategic Planning",
    description: "Every strategy is designed with clear goals and measurable KPIs for maximum ROI.",
  },
  {
    icon: Zap,
    title: "Precision Targeting",
    description: "Laser-focused audience targeting to reach your ideal customers efficiently.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Optimization",
    description: "Data-driven decisions with continuous A/B testing and performance optimization.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    description: "Scalable strategies that evolve with your business for sustainable growth.",
  },
]

const stats = [
  { value: 5, suffix: "+", label: "Years Experience", icon: Briefcase },
  { value: "CEO", suffix: "", label: "Boosting Agency BD", icon: Award, isText: true },
  { value: 500, suffix: "+", label: "Campaigns Managed", icon: Rocket },
  { value: 500, suffix: "K+", label: "Ad Spend Managed", icon: DollarSign, prefix: "$" },
]

// Animated counter hook
function useAnimatedCounter(target: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * target))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [target, duration, shouldStart])

  return count
}

// Scroll reveal hook
function useScrollReveal(threshold: number = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

// Animated stat component
function AnimatedStat({ stat, index, isVisible }: { stat: typeof stats[0], index: number, isVisible: boolean }) {
  const count = useAnimatedCounter(
    stat.isText ? 0 : (stat.value as number), 
    2000, 
    isVisible
  )
  const Icon = stat.icon

  return (
    <div
      className={`glass-effect dark:bg-slate-800/80 dark:border-slate-700/60 text-center p-4 sm:p-6 rounded-2xl hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
      </div>
      <p className="text-2xl sm:text-3xl font-bold gradient-text">
        {stat.isText ? stat.value : `${stat.prefix || ""}${count}${stat.suffix}`}
      </p>
      <p className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
    </div>
  )
}

export default function AboutPage() {
  const { t, language } = useLanguage()
  const heroReveal = useScrollReveal()
  const storyReveal = useScrollReveal()
  const skillsReveal = useScrollReveal()
  const valuesReveal = useScrollReveal()
  const statsReveal = useScrollReveal()

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl animate-pulse" />
                <div className="relative h-full rounded-3xl overflow-hidden border-4 border-primary/10 shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/380336355_1499215867326714_6191628112571812370_n-B7tboe7ZUX0x09pcyLgjrzKwKh0EWh.jpg"
                    alt="Siddiqur Rahman"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 448px"
                    priority
                  />
                </div>
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 animate-bounce-gentle">
                  <div className="glass-effect dark:bg-slate-800/90 dark:border-slate-700/60 rounded-2xl p-3 sm:p-4 shadow-xl border border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-bold text-xl sm:text-2xl gradient-text">100+</p>
                        <p className="text-xs sm:text-sm text-muted-foreground dark:text-gray-400">Happy Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div 
              ref={heroReveal.ref}
              className={`space-y-6 order-1 lg:order-2 transition-all duration-1000 ease-out ${
                heroReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <Badge className="mb-4">{t("about.title")}</Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
                  <span className="gradient-text">{t("hero.name")}</span>
                </h1>
                <h2 className="text-xl sm:text-2xl font-semibold text-muted-foreground mb-6">
                  {t("about.subtitle")}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-pretty">
                  {t("about.description")}
                </p>
              </div>

              {/* Stats with animated counters */}
              <div ref={statsReveal.ref} className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {stats.map((stat, index) => (
                  <AnimatedStat key={index} stat={stat} index={index} isVisible={statsReveal.isVisible} />
                ))}
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <Button size="lg" className="group" asChild>
                  <Link href="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View My Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Story */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div 
            ref={storyReveal.ref}
            className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
              storyReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Badge className="mb-4">My Story</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              <span className="gradient-text">The Journey So Far</span>
            </h2>
            <div className="space-y-6 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p className="text-pretty">
                My journey into digital marketing began with a simple curiosity about how online advertising works. 
                What started as an interest quickly became a passion as I discovered the power of data-driven marketing 
                to transform businesses.
              </p>
              <p className="text-pretty">
                Over the years, I&apos;ve had the privilege of working with businesses of all sizes, from local startups 
                to established brands. Each project has taught me something new and reinforced my belief that great 
                marketing is about understanding people, not just algorithms.
              </p>
              <p className="text-pretty">
                Today, as the Owner &amp; CEO of{" "}
                <a 
                  href="https://boostingagencyofficial.site/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Boosting Agency BD
                </a>
                , I lead a team dedicated to helping businesses achieve 
                their growth goals through strategic, data-driven marketing. We don&apos;t just run ads – we build 
                marketing systems that deliver consistent, measurable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills - Glassmorphism Pills */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Expertise</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Skills &amp; Tools</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive toolkit for modern digital marketing
            </p>
          </div>

          <div ref={skillsReveal.ref} className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <div
                  key={index}
                  className={`group relative px-4 py-2.5 sm:px-5 sm:py-3 rounded-full glass-effect dark:bg-slate-800/80 dark:border-slate-700/50 border border-transparent hover:border-primary/50 cursor-default transition-all duration-500 ease-out hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:-translate-y-1 ${
                    skillsReveal.isVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ 
                    transitionDelay: skillsReveal.isVisible ? `${index * 60}ms` : "0ms",
                  }}
                >
                  {/* Gradient border glow on hover */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-md" />
                  
                  <div className="flex items-center gap-2">
                    <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                      <Icon />
                    </span>
                    <span className="text-sm sm:text-base font-medium">{skill.name}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Tools Visual */}
          <div className="mt-16 relative">
            <div className="relative max-w-4xl mx-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-06%20at%2015.00.40-hyCowbSIAOYNzmSTjg8BlNxfVB1WHL.jpeg"
                alt="Marketing Tools and Expertise"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl mx-auto w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What I Offer - Service Cards */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Services</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">What I Offer</span>
            </h2>
          </div>

          <div ref={valuesReveal.ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className={`group text-center bg-card/80 dark:bg-slate-800/80 dark:border-slate-700/50 border border-transparent hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500 ease-out ${
                  valuesReveal.isVisible 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: valuesReveal.isVisible ? `${index * 100}ms` : "0ms" }}
              >
                <CardContent className="pt-8 pb-6 px-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-effect dark:bg-slate-800/90 dark:border-slate-700/60 rounded-3xl p-8 sm:p-12 border border-primary/10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Grow Your Business?</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {"Let's discuss how data-driven marketing strategies can help you achieve your business goals."}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  Start a Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/8801518961899" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
