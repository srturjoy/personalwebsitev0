"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Facebook, Instagram, LineChart, Target, Users, Search, Youtube, Bot, Cpu, Globe } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

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

const services = [
  {
    icon: Facebook,
    titleKey: "services.facebook.title",
    descKey: "services.facebook.description",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Instagram,
    titleKey: "services.instagram.title",
    descKey: "services.instagram.description",
    color: "from-pink-500 to-purple-600",
  },
  {
    icon: Target,
    titleKey: "services.lead.title",
    descKey: "services.lead.description",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: LineChart,
    titleKey: "services.ecommerce.title",
    descKey: "services.ecommerce.description",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: BarChart3,
    titleKey: "services.analytics.title",
    descKey: "services.analytics.description",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Users,
    titleKey: "services.social.title",
    descKey: "services.social.description",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Search,
    titleKey: "services.google.title",
    descKey: "services.google.description",
    color: "from-red-500 to-yellow-500",
  },
  {
    icon: Youtube,
    titleKey: "services.youtube.title",
    descKey: "services.youtube.description",
    color: "from-red-600 to-red-500",
  },
  {
    icon: Bot,
    titleKey: "services.aiAutomation.title",
    descKey: "services.aiAutomation.description",
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: Cpu,
    titleKey: "services.aiAgent.title",
    descKey: "services.aiAgent.description",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Globe,
    titleKey: "services.website.title",
    descKey: "services.website.description",
    color: "from-sky-500 to-blue-600",
  },
]

export function ServicesSection() {
  const { t, language } = useLanguage()
  const headerReveal = useScrollReveal()
  const cardsReveal = useScrollReveal()

  return (
    <section className="py-20 sm:py-24 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div 
          ref={headerReveal.ref}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ease-out ${
            headerReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {language === "en" ? "What I Offer" : "আমি কী অফার করি"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance dark:text-white">
            <span className="gradient-text">{t("services.title")}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div ref={cardsReveal.ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 bg-card/80 dark:bg-slate-800/80 backdrop-blur-sm border-border/50 dark:border-slate-700/60 overflow-hidden hover:border-primary/30 ${
                cardsReveal.isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: cardsReveal.isVisible ? `${index * 80}ms` : "0ms",
                transitionProperty: "all"
              }}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl dark:text-white">{t(service.titleKey)}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-sm sm:text-base leading-relaxed dark:text-gray-300">
                  {t(service.descKey)}
                </CardDescription>
                <Button variant="ghost" className="group/btn p-0 h-auto text-sm" asChild>
                  <Link href="/contact">
                    {t("services.cta")}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
