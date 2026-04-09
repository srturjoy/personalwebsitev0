"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState, useRef } from "react"

const PythonIcon = () => (
  <svg viewBox="0 0 256 255" className="w-7 h-7 sm:w-8 sm:h-8">
    <defs>
      <linearGradient id="python-a" x1="12.959%" x2="79.639%" y1="12.039%" y2="78.201%">
        <stop offset="0%" stopColor="#387EB8"/>
        <stop offset="100%" stopColor="#366994"/>
      </linearGradient>
      <linearGradient id="python-b" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%">
        <stop offset="0%" stopColor="#FFE052"/>
        <stop offset="100%" stopColor="#FFC331"/>
      </linearGradient>
    </defs>
    <path fill="url(#python-a)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z"/>
    <path fill="url(#python-b)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z"/>
  </svg>
)

const ExcelIcon = () => (
  <svg viewBox="0 0 96 96" className="w-7 h-7 sm:w-8 sm:h-8">
    <path fill="#21A366" d="M0 18v60a6 6 0 0 0 6 6h42V12H6a6 6 0 0 0-6 6z"/>
    <path fill="#107C41" d="M48 12h42a6 6 0 0 1 6 6v60a6 6 0 0 1-6 6H48z"/>
    <path fill="#33C481" d="M48 42h48v24H48z"/>
    <path fill="#185C37" d="M48 42H0v24h48z"/>
    <path fill="#FFF" d="M16 30l8 18-8 18h8l4-10 4 10h8l-8-18 8-18h-8l-4 10-4-10z"/>
    <path fill="#CFFFF0" d="M60 30v6h24v-6zm0 12v6h24v-6zm0 12v6h24v-6zm0 12v6h24v-6z" opacity=".5"/>
  </svg>
)

const skills = [
  { 
    name: "Meta Ads",
    icon: "meta",
    color: "from-blue-500 to-blue-600",
    level: 98,
  },
  { 
    name: "Google Ads",
    icon: "google",
    color: "from-red-500 via-yellow-500 to-green-500",
    level: 95,
  },
  { 
    name: "Python",
    icon: "python",
    color: "from-yellow-400 to-blue-500",
    level: 90,
  },
  { 
    name: "AI Agents",
    icon: "ai",
    color: "from-purple-500 to-pink-500",
    level: 88,
  },
  { 
    name: "React",
    icon: "react",
    color: "from-cyan-400 to-cyan-600",
    level: 85,
  },
  { 
    name: "Power BI",
    icon: "powerbi",
    color: "from-yellow-500 to-yellow-600",
    level: 92,
  },
  { 
    name: "Excel",
    icon: "excel",
    color: "from-green-500 to-green-600",
    level: 96,
  },
  { 
    name: "SQL",
    icon: "sql",
    color: "from-orange-500 to-red-500",
    level: 88,
  },
]

function SkillIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "meta":
      return (
        <svg viewBox="0 0 36 36" className="w-7 h-7 sm:w-8 sm:h-8">
          <path fill="#1877F2" d="M18 36c9.941 0 18-8.059 18-18S27.941 0 18 0 0 8.059 0 18s8.059 18 18 18z"/>
          <path fill="#FFF" d="M24.5 23.5l.75-4.5h-4.5v-3c0-1.25.6-2.5 2.6-2.5h2v-3.8s-1.85-.3-3.6-.3c-3.7 0-6.1 2.2-6.1 6.2V19h-4v4.5h4v11c.8.15 1.65.2 2.5.2s1.7-.05 2.5-.2v-11h3.35z"/>
        </svg>
      )
    case "google":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      )
    case "python":
      return <PythonIcon />
    case "ai":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case "react":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8" fill="#61DAFB">
          <circle cx="12" cy="12" r="2.5"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1" transform="rotate(120 12 12)"/>
        </svg>
      )
    case "powerbi":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8">
          <path fill="#F2C811" d="M10 4h4v16h-4zM4 10h4v10H4zM16 8h4v12h-4z"/>
        </svg>
      )
    case "excel":
      return <ExcelIcon />
    case "sql":
      return (
        <svg viewBox="0 0 24 24" className="w-7 h-7 sm:w-8 sm:h-8" fill="none">
          <ellipse cx="12" cy="6" rx="8" ry="3" fill="#00758F"/>
          <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="#00758F"/>
          <ellipse cx="12" cy="6" rx="8" ry="3" fill="#00A4C7"/>
          <path d="M20 6c0 1.66-3.58 3-8 3S4 7.66 4 6" fill="none" stroke="#006073" strokeWidth=".5"/>
          <path d="M20 10c0 1.66-3.58 3-8 3s-8-1.34-8-3" fill="none" stroke="#00A4C7" strokeWidth=".5"/>
          <path d="M20 14c0 1.66-3.58 3-8 3s-8-1.34-8-3" fill="none" stroke="#00A4C7" strokeWidth=".5"/>
        </svg>
      )
    default:
      return null
  }
}

function SkillBar({ level, delay }: { level: number; delay: number }) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay * 100)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level, delay])

  return (
    <div ref={ref} className="h-2 bg-secondary rounded-full overflow-hidden">
      <div 
        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

export function SkillsSection() {
  const { language } = useLanguage()

  return (
    <section className="py-20 sm:py-24 bg-secondary/30 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {language === "en" ? "Expertise" : "দক্ষতা"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance dark:text-white">
            {language === "en" ? "Skills & Tools" : "দক্ষতা ও টুলস"}
          </h2>
          <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            {language === "en" 
              ? "Mastering the tools that drive digital success"
              : "ডিজিটাল সাফল্যের চালিকাশক্তি টুলগুলিতে দক্ষতা"
            }
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <Card 
              key={skill.name} 
              className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 bg-card/80 dark:bg-slate-800/80 backdrop-blur-sm border-border/50 dark:border-slate-700/60 overflow-hidden animate-fade-in-up hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-5 sm:p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${skill.color} p-0.5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="w-full h-full bg-card dark:bg-slate-900 rounded-[10px] flex items-center justify-center overflow-hidden">
                      <SkillIcon icon={skill.icon} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm sm:text-base dark:text-white">{skill.name}</h3>
                    <p className="text-xs text-muted-foreground dark:text-gray-400">{skill.level}%</p>
                  </div>
                </div>
                <SkillBar level={skill.level} delay={index} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
