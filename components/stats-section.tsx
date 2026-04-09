"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, DollarSign, Target, BarChart3, Zap } from "lucide-react"
import { useEffect, useState, useRef } from "react"

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    labelKey: "stats.leads",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: TrendingUp,
    value: 5.2,
    suffix: "x",
    labelKey: "stats.roas",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    decimals: 1,
  },
  {
    icon: DollarSign,
    value: 500,
    prefix: "$",
    suffix: "K+",
    labelKey: "stats.spend",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Target,
    value: 300,
    suffix: "%",
    labelKey: "stats.growth",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
]

function AnimatedCounter({ 
  target, 
  suffix = "", 
  prefix = "",
  decimals = 0,
  duration = 2000 
}: { 
  target: number
  suffix?: string
  prefix?: string
  decimals?: number
  duration?: number 
}) {
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
            setCount(easeOut * target)
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

  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}{suffix}
    </span>
  )
}

export function StatsSection() {
  const { t, language } = useLanguage()

  return (
    <section className="py-20 sm:py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {language === "en" ? "Impact" : "প্রভাব"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t("stats.title")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50 group animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6 sm:pt-8 pb-5 sm:pb-6 px-4">
                <div className={`w-14 h-14 sm:w-16 sm:h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-7 h-7 sm:w-8 sm:h-8 ${stat.color}`} />
                </div>
                <p className="text-3xl sm:text-4xl font-bold mb-2">
                  <AnimatedCounter 
                    target={stat.value} 
                    suffix={stat.suffix} 
                    prefix={stat.prefix || ""}
                    decimals={stat.decimals || 0}
                  />
                </p>
                <p className="text-sm text-muted-foreground">{t(stat.labelKey)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
