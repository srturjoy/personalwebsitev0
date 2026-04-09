"use client"

import { useLanguage } from "@/lib/language-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Briefcase, GraduationCap, Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

// Skill icons as SVG components
const MetaIcon = () => (
  <svg viewBox="0 0 36 36" className="w-3.5 h-3.5">
    <path fill="#1877F2" d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z"/>
    <path fill="#FFF" d="M24.5 23.5l.75-4.5h-4.5v-3c0-1.25.6-2.5 2.6-2.5h2v-3.8s-1.85-.3-3.6-.3c-3.7 0-6.1 2.2-6.1 6.2V19h-4v4.5h4v11c.8.15 1.65.2 2.5.2s1.7-.05 2.5-.2v-11h3.35z"/>
  </svg>
)

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
)

const PythonIcon = () => (
  <svg viewBox="0 0 256 255" className="w-3.5 h-3.5">
    <defs>
      <linearGradient id="python-a-about" x1="12.959%" x2="79.639%" y1="12.039%" y2="78.201%">
        <stop offset="0%" stopColor="#387EB8"/>
        <stop offset="100%" stopColor="#366994"/>
      </linearGradient>
      <linearGradient id="python-b-about" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%">
        <stop offset="0%" stopColor="#FFE052"/>
        <stop offset="100%" stopColor="#FFC331"/>
      </linearGradient>
    </defs>
    <path fill="url(#python-a-about)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"/>
    <path fill="url(#python-b-about)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"/>
  </svg>
)

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="#61DAFB">
    <circle cx="12" cy="12" r="2"/>
    <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1"/>
    <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/>
    <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/>
  </svg>
)

const ExcelIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
    <path fill="#21A366" d="M2 4v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2z"/>
    <path fill="#FFF" d="M7 7l2.5 5L7 17h2l1.5-3.5L12 17h2l-2.5-5L14 7h-2l-1.5 3.5L9 7z"/>
  </svg>
)

const SQLIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="#00758F">
    <ellipse cx="12" cy="5" rx="8" ry="3"/>
    <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/>
    <ellipse cx="12" cy="5" rx="8" ry="3" fill="#00A4C7"/>
  </svg>
)

const PowerBIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
    <path fill="#F2C811" d="M10 4h4v16h-4zM4 10h4v10H4zM16 8h4v12h-4z"/>
  </svg>
)

const AIIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18h18M9 17V9m4 8v-6m4 6V5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
)

const ShoppingIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ShareIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
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
  { name: "AI Agents", icon: AIIcon },
  { name: "React", icon: ReactIcon },
  { name: "Social Media", icon: ShareIcon },
  { name: "Lead Gen", icon: TargetIcon },
  { name: "E-commerce", icon: ShoppingIcon },
]

const highlights = [
  {
    icon: Award,
    title: { en: "5+ Years Experience", bn: "৫+ বছরের অভিজ্ঞতা" },
    description: { en: "In digital marketing and performance advertising", bn: "ডিজিটাল মার্কেটিং এবং পারফরম্যান্স বিজ্ঞাপনে" },
  },
  {
    icon: Briefcase,
    title: { en: "CEO & Founder", bn: "সিইও ও প্রতিষ্ঠাতা" },
    description: { en: "Boosting Agency BD - Full-service marketing agency", bn: "বুস্টিং এজেন্সি বিডি - ফুল-সার্ভিস মার্কেটিং এজেন্সি" },
  },
  {
    icon: Target,
    title: { en: "500+ Campaigns", bn: "৫০০+ ক্যাম্পেইন" },
    description: { en: "Successfully managed across various industries", bn: "বিভিন্ন ইন্ডাস্ট্রিতে সফলভাবে পরিচালিত" },
  },
  {
    icon: GraduationCap,
    title: { en: "Certified Expert", bn: "সার্টিফাইড বিশেষজ্ঞ" },
    description: { en: "Meta & Google Ads certified professional", bn: "মেটা ও গুগল অ্যাডস সার্টিফাইড পেশাদার" },
  },
]

// Custom hook for scroll-triggered animations
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

// Parallax hook for image
function useParallax() {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        setOffset((scrollProgress - 0.5) * 30)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return { ref, offset }
}

export function AboutSection() {
  const { t, language } = useLanguage()
  const bioReveal = useScrollReveal()
  const skillsReveal = useScrollReveal()
  const cardsReveal = useScrollReveal()
  const parallax = useParallax()

  return (
    <section className="py-20 sm:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with Parallax */}
          <div className="relative" ref={parallax.ref}>
            <div 
              className="relative aspect-[4/5] max-w-sm sm:max-w-md mx-auto lg:mx-0 transition-transform duration-300 ease-out"
              style={{ transform: `translateY(${parallax.offset}px)` }}
            >
              {/* Background Decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl animate-pulse-glow" />
              
              {/* Main Image */}
              <div className="relative h-full rounded-3xl overflow-hidden border-4 border-primary/10 shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/380336355_1499215867326714_6191628112571812370_n-B7tboe7ZUX0x09pcyLgjrzKwKh0EWh.jpg"
                  alt="Siddiqur Rahman"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 320px, 400px"
                />
              </div>

              {/* Floating Badge with Bounce Animation */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 animate-bounce-gentle">
                <div className="glass-effect rounded-2xl p-3 sm:p-4 shadow-xl border border-primary/20 hover:border-primary/40 transition-colors duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-xl sm:text-2xl gradient-text">100+</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {language === "en" ? "Happy Clients" : "সন্তুষ্ট ক্লায়েন্ট"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Bio Section with Scroll Reveal */}
            <div 
              ref={bioReveal.ref}
              className={`transition-all duration-1000 ease-out ${
                bioReveal.isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
            >
              <Badge className="mb-4">{t("about.title")}</Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">
                <span className="gradient-text">{t("about.subtitle")}</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground dark:text-gray-300 leading-relaxed">
                {language === "en" 
                  ? <>I&apos;m Siddiqur Rahman, Owner &amp; CEO of <a href="https://boostingagencyofficial.site/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Boosting Agency BD</a>, a passionate digital marketing strategist with expertise in performance marketing, data analytics, and brand growth strategies. With a background in Software Engineering and years of experience in Meta Ads, Google Ads, AI automation, and comprehensive analytics, I help businesses achieve measurable results and sustainable growth.</>
                  : <>আমি সিদ্দিকুর রহমান, <a href="https://boostingagencyofficial.site/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">বুস্টিং এজেন্সি বিডি</a>-এর মালিক ও সিইও। আমি একজন আবেগী ডিজিটাল মার্কেটিং স্ট্র্যাটেজিস্ট যার পারফরম্যান্স মার্কেটিং, ডেটা অ্যানালিটিক্স এবং ব্র্যান্ড গ্রোথ স্ট্র্যাটেজিতে দক্ষতা রয়েছে। সফটওয়্যার ইঞ্জিনিয়ারিং ব্যাকগ্রাউন্ড এবং মেটা অ্যাডস, গুগল অ্যাডস, AI অটোমেশন এবং ব্যাপক অ্যানালিটিক্সে বছরের অভিজ্ঞতা নিয়ে, আমি ব্যবসাগুলিকে পরিমাপযোগ্য ফলাফল এবং টেকসই বৃদ্ধি অর্জনে সাহায্য করি।</>
                }
              </p>
            </div>

            {/* Highlights Grid with Staggered Reveal */}
            <div 
              ref={cardsReveal.ref}
              className="grid grid-cols-2 gap-3 sm:gap-4"
            >
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`glass-effect dark:bg-slate-800/80 dark:border-slate-700/60 flex items-start gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl hover:border-primary/30 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 ${
                    cardsReveal.isVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: cardsReveal.isVisible ? `${index * 150}ms` : "0ms" }}
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base dark:text-white">
                      {language === "en" ? item.title.en : item.title.bn}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground dark:text-gray-400">
                      {language === "en" ? item.description.en : item.description.bn}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills with Glassmorphism Pills */}
            <div ref={skillsReveal.ref}>
              <h3 className="font-semibold mb-4 text-sm sm:text-base dark:text-white">
                {language === "en" ? "Skills & Expertise" : "দক্ষতা ও বিশেষজ্ঞতা"}
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {skills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={index}
                      className={`group relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass-effect border border-transparent hover:border-primary/50 transition-all duration-500 ease-out cursor-default hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] ${
                        skillsReveal.isVisible 
                          ? "opacity-100 translate-y-0" 
                          : "opacity-0 translate-y-4"
                      }`}
                      style={{ 
                        transitionDelay: skillsReveal.isVisible ? `${index * 80}ms` : "0ms",
                        animation: skillsReveal.isVisible ? `skill-float 4s ease-in-out ${index * 0.3}s infinite` : "none"
                      }}
                    >
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                      
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                          <Icon />
                        </span>
                        <span className="text-xs sm:text-sm font-medium">{skill.name}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <Button size="lg" className="text-sm sm:text-base group" asChild>
              <Link href="/contact">
                {language === "en" ? "Let's Work Together" : "একসাথে কাজ করি"}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* CSS for skill floating animation */}
      <style jsx>{`
        @keyframes skill-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </section>
  )
}
