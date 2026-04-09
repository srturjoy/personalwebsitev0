"use client"

import { useLanguage } from "@/lib/language-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ArrowRight, 
  Building2, 
  Calendar, 
  MapPin, 
  Award, 
  GraduationCap, 
  Briefcase, 
  Star,
  Code,
  Bot,
  TrendingUp,
  Users,
  Rocket,
  Cpu
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

// Animated Counter Hook
function useAnimatedCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return
    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOut * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return { count, ref }
}

// Parallax Hook
function useParallax(speed: number = 0.3) {
  const [offset, setOffset] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrolled = window.innerHeight - rect.top
        setOffset(scrolled * speed * 0.1)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  return { ref, offset }
}

const experiences = [
  {
    title: "Owner & CEO",
    company: "Boosting Agency BD",
    companyLink: "https://boostingagencyofficial.site/",
    location: "Dhaka, Bangladesh",
    period: "2021 - Present",
    yearsCount: 4,
    icon: Briefcase,
    iconColor: "from-blue-500 to-cyan-500",
    description: "Leading a full-service digital marketing agency specializing in performance marketing, social media management, and data-driven advertising strategies. Managing a team of marketing professionals and overseeing campaigns for clients across various industries including e-commerce, SaaS, and local businesses.",
    achievements: [
      "Scaled agency revenue by 400% in 3 years",
      "Built and led a team of 10+ marketing specialists",
      "Managed $500K+ in ad spend with average 5x ROAS",
      "Served 100+ clients across multiple industries",
    ],
    skills: ["Strategic Planning", "Team Leadership", "Client Relations", "Business Development", "Performance Marketing"],
    current: true,
  },
  {
    title: "Software Engineer & AI Automation Specialist",
    company: "Tech Innovations Ltd",
    location: "Dhaka, Bangladesh",
    period: "2022 - 2023",
    yearsCount: 1,
    icon: Code,
    iconColor: "from-purple-500 to-pink-500",
    description: "Developed custom software solutions and AI-powered automation tools for marketing workflows. Built intelligent systems that streamlined campaign management, automated reporting, and enhanced data analysis capabilities for enterprise clients.",
    achievements: [
      "Built AI chatbot reducing support tickets by 60%",
      "Developed marketing automation platform serving 50+ brands",
      "Created custom analytics dashboards with real-time data",
      "Implemented Python-based data pipelines for performance tracking",
    ],
    skills: ["Python", "React", "AI/ML", "Automation", "API Development", "Data Engineering"],
    current: false,
  },
  {
    title: "Senior Social Media Marketer & Brand Strategist",
    company: "Algonest",
    location: "Remote",
    period: "2020 - 2021",
    yearsCount: 1,
    icon: TrendingUp,
    iconColor: "from-green-500 to-emerald-500",
    description: "Developed and executed comprehensive social media strategies for multiple clients across different industries. Led brand development initiatives and managed cross-functional teams to deliver integrated marketing campaigns.",
    achievements: [
      "Increased client engagement rates by average 250%",
      "Launched 50+ successful brand campaigns",
      "Managed social media presence for 20+ brands",
      "Developed brand guidelines for multiple startups",
    ],
    skills: ["Social Media Strategy", "Brand Development", "Content Marketing", "Analytics", "Team Management"],
    current: false,
  },
  {
    title: "Digital Marketing Specialist",
    company: "Robo Tech Valley",
    location: "Dhaka, Bangladesh",
    period: "2019 - 2020",
    yearsCount: 1,
    icon: Rocket,
    iconColor: "from-orange-500 to-red-500",
    description: "Managed digital marketing campaigns across multiple platforms, with a focus on Meta Ads and Google Ads. Implemented data-driven optimization strategies to improve campaign performance and ROI.",
    achievements: [
      "Achieved 300% improvement in conversion rates",
      "Reduced cost per acquisition by 40%",
      "Implemented marketing automation workflows",
      "Created comprehensive analytics dashboards",
    ],
    skills: ["Meta Ads", "Google Ads", "SEO", "Data Analysis", "Marketing Automation"],
    current: false,
  },
]

const certifications = [
  {
    title: "Meta Blueprint Certified",
    issuer: "Meta",
    year: "2023",
    icon: Award,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Google Ads Certified",
    issuer: "Google",
    year: "2022",
    icon: Award,
    color: "from-red-500 to-yellow-500",
  },
  {
    title: "Data Analytics Professional",
    issuer: "Google",
    year: "2022",
    icon: GraduationCap,
    color: "from-green-500 to-teal-500",
  },
  {
    title: "HubSpot Marketing Software",
    issuer: "HubSpot",
    year: "2021",
    icon: Award,
    color: "from-orange-500 to-pink-500",
  },
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science and Engineering (B.Sc in CSE)",
    school: "Bangladesh University of Business and Technology (BUBT)",
    year: "2024",
    focus: "Software Engineering & Data Science",
  },
]

const stats = [
  { label: "Years Experience", value: 5, suffix: "+", icon: Calendar },
  { label: "Clients Served", value: 100, suffix: "+", icon: Users },
  { label: "Campaigns Launched", value: 500, suffix: "+", icon: Rocket },
  { label: "Ad Spend Managed", value: 500, suffix: "K+", prefix: "$", icon: TrendingUp },
]

export default function ExperiencePage() {
  const { t } = useLanguage()
  const parallax = useParallax(0.2)

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                {t("experience.title")}
              </Badge>
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up text-balance"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="gradient-text">{t("experience.subtitle")}</span>
              </h1>
              <p 
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-pretty animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                Over 5 years of experience in digital marketing, software engineering, and AI automation. 
                From technical specialist to agency CEO, combining code and creativity to deliver exceptional results.
              </p>
              <div 
                className="flex flex-wrap gap-4 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <Button size="lg" className="group" asChild>
                  <Link href="/contact">
                    Work With Me
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/resume.pdf" download>
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Profile Image with Parallax */}
            <div 
              ref={parallax.ref}
              className="relative animate-fade-in-up"
              style={{ 
                animationDelay: "0.5s",
                transform: `translateY(${parallax.offset}px)` 
              }}
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-3xl blur-3xl animate-pulse" />
                
                {/* Image Container */}
                <div className="relative h-full rounded-3xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-06%20at%2001.12.44-HT18Qe3TZc6qZTfmFsxojcWSWVzas1.jpeg"
                    alt="Siddiqur Rahman - Digital Marketing Expert & Software Engineer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass-effect rounded-2xl p-4 shadow-xl animate-bounce-gentle">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">CSE Graduate</p>
                      <p className="text-sm text-muted-foreground">BUBT 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const counter = useAnimatedCounter(stat.value)
              return (
                <div 
                  key={index}
                  ref={counter.ref}
                  className="glass-effect dark:bg-slate-800/80 dark:border-slate-700/60 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-bold gradient-text">
                    {stat.prefix}{counter.count}{stat.suffix}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-secondary/30 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4">Work History</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Professional Experience</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A journey combining technical expertise with marketing mastery
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/50" />

              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-start mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline Dot with Icon */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${exp.iconColor} flex items-center justify-center shadow-lg`}>
                      <exp.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Year Badge (opposite side) */}
                  <div 
                    className={`hidden md:block absolute md:left-1/2 transform ${
                      index % 2 === 0 ? "md:translate-x-8" : "md:-translate-x-full md:-ml-8"
                    } top-2`}
                  >
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {exp.period.split(" - ")[0]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-[45%] ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                    <Card className="group glass-effect dark:bg-slate-800/90 dark:border-slate-700/60 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 border-border/50 overflow-hidden hover:border-primary/30">
                      {/* Gradient Border Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <CardHeader className="relative">
                        <div className="flex items-start justify-between flex-wrap gap-2">
                          <div>
                            <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors dark:text-white">
                              {exp.title}
                            </CardTitle>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Building2 className="w-4 h-4" />
                              {exp.companyLink ? (
                                <a 
                                  href={exp.companyLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-medium text-primary hover:underline"
                                >
                                  {exp.company}
                                </a>
                              ) : (
                                <span className="font-medium text-primary">{exp.company}</span>
                              )}
                            </div>
                          </div>
                          {exp.current && (
                            <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
                              Current
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="relative space-y-4">
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                        </div>
                        <CardDescription className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                          {exp.description}
                        </CardDescription>
                        
                        {/* Achievements */}
                        <div>
                          <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                            <Star className="w-4 h-4 text-primary" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-1.5">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li 
                                key={achIndex} 
                                className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <Badge 
                              key={skillIndex} 
                              variant="secondary" 
                              className="text-xs bg-secondary/80"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <Badge className="mb-4">Credentials</Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">Education & Certifications</span>
            </h2>
          </div>

          {/* Education - Prominent Display */}
          <div className="max-w-3xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {education.map((edu, index) => (
              <Card key={index} className="glass-effect dark:bg-slate-800/90 dark:border-slate-700/60 border-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                <CardContent className="relative p-8">
                  <div className="flex flex-col sm:flex-row items-start gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 shadow-lg">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl sm:text-2xl mb-2 text-balance dark:text-white">{edu.degree}</h3>
                      <p className="text-lg text-primary font-medium mb-1">{edu.school}</p>
                      <p className="text-muted-foreground dark:text-gray-400">{edu.focus} • Graduated {edu.year}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-4xl font-bold gradient-text">{edu.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="group glass-effect dark:bg-slate-800/80 dark:border-slate-700/60 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden animate-fade-in-up hover:border-primary/30"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <CardContent className="relative pt-8 pb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <cert.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Highlight */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <Badge className="mb-4">Technical Stack</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">Where Code Meets Marketing</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Unique blend of software engineering and marketing expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Software Engineering */}
            <Card className="glass-effect overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">Software Engineering</CardTitle>
                <CardDescription>Building scalable solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["Python", "React", "Next.js", "Node.js", "SQL", "REST APIs", "Git", "Docker"].map((skill, i) => (
                    <Badge key={i} className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI & Automation */}
            <Card className="glass-effect overflow-hidden animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                  <Bot className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl">AI & Automation</CardTitle>
                <CardDescription>Intelligent systems & workflows</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["OpenAI API", "LangChain", "GPT Agents", "Automation", "Chatbots", "Data Pipelines", "ML Models", "NLP"].map((skill, i) => (
                    <Badge key={i} className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-effect rounded-3xl p-12 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {"Let's"} <span className="gradient-text">Work Together</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Ready to leverage my unique blend of technical expertise and marketing mastery for your business growth? 
              {"Let's"} discuss how I can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  Get in Touch
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
