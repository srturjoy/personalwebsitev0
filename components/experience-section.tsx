"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: { en: "Owner & CEO", bn: "মালিক ও সিইও" },
    company: "Boosting Agency BD",
    companyLink: "https://boostingagencyofficial.site/",
    location: { en: "Dhaka, Bangladesh", bn: "ঢাকা, বাংলাদেশ" },
    period: { en: "2021 - Present", bn: "২০২১ - বর্তমান" },
    description: { 
      en: "Leading a full-service digital marketing agency specializing in performance marketing, social media management, and data-driven advertising strategies for businesses across various industries.",
      bn: "বিভিন্ন ইন্ডাস্ট্রির ব্যবসার জন্য পারফরম্যান্স মার্কেটিং, সোশ্যাল মিডিয়া ম্যানেজমেন্ট এবং ডেটা-চালিত বিজ্ঞাপন কৌশলে বিশেষজ্ঞ একটি ফুল-সার্ভিস ডিজিটাল মার্কেটিং এজেন্সি পরিচালনা করছি।"
    },
    skills: ["Strategic Planning", "Team Leadership", "Client Relations", "Business Development"],
    current: true,
  },
  {
    title: { en: "Senior Social Media Marketer & Brand Strategist", bn: "সিনিয়র সোশ্যাল মিডিয়া মার্কেটার ও ব্র্যান্ড স্ট্র্যাটেজিস্ট" },
    company: "Algonest",
    location: { en: "Remote", bn: "রিমোট" },
    period: { en: "2020 - 2021", bn: "২০২০ - ২০২১" },
    description: { 
      en: "Developed and executed comprehensive social media strategies for multiple clients, increasing engagement rates by an average of 250% and driving significant revenue growth.",
      bn: "একাধিক ক্লায়েন্টের জন্য ব্যাপক সোশ্যাল মিডিয়া কৌশল তৈরি এবং বাস্তবায়ন করেছি, গড়ে ২৫০% এনগেজমেন্ট রেট বাড়িয়েছি এবং উল্লেখযোগ্য রাজস্ব বৃদ্ধি চালিত করেছি।"
    },
    skills: ["Social Media Strategy", "Brand Development", "Content Marketing", "Analytics"],
    current: false,
  },
  {
    title: { en: "Digital Marketing Specialist", bn: "ডিজিটাল মার্কেটিং স্পেশালিস্ট" },
    company: "Robo Tech Valley",
    location: { en: "Dhaka, Bangladesh", bn: "ঢাকা, বাংলাদেশ" },
    period: { en: "2019 - 2020", bn: "২০১৯ - ২০২০" },
    description: { 
      en: "Managed digital marketing campaigns across multiple platforms, optimizing ad spend and improving conversion rates through data analysis and A/B testing.",
      bn: "একাধিক প্ল্যাটফর্মে ডিজিটাল মার্কেটিং ক্যাম্পেইন পরিচালনা করেছি, ডেটা বিশ্লেষণ এবং A/B টেস্টিংয়ের মাধ্যমে বিজ্ঞাপন খরচ অপটিমাইজ এবং কনভার্শন রেট উন্নত করেছি।"
    },
    skills: ["Meta Ads", "Google Ads", "SEO", "Data Analysis"],
    current: false,
  },
]

export function ExperienceSection() {
  const { t, language } = useLanguage()

  return (
    <section className="py-20 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {language === "en" ? "My Journey" : "আমার যাত্রা"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="gradient-text">{t("experience.title")}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("experience.subtitle")}
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start mb-8 sm:mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary border-4 border-background z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"}`}>
                  <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card/80 backdrop-blur-sm border-border/50">
                    <CardHeader className="pb-3 sm:pb-4">
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div>
                          <CardTitle className="text-lg sm:text-xl mb-1">
                            {language === "en" ? exp.title.en : exp.title.bn}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building2 className="w-4 h-4 shrink-0" />
                            {exp.companyLink ? (
                              <a 
                                href={exp.companyLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="font-medium text-primary hover:underline text-sm sm:text-base"
                              >
                                {exp.company}
                              </a>
                            ) : (
                              <span className="font-medium text-primary text-sm sm:text-base">{exp.company}</span>
                            )}
                          </div>
                        </div>
                        {exp.current && (
                          <Badge className="bg-green-500/10 text-green-500 border-green-500/20 text-xs">
                            {t("experience.present")}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3 sm:space-y-4">
                      <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          {language === "en" ? exp.period.en : exp.period.bn}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          {language === "en" ? exp.location.en : exp.location.bn}
                        </div>
                      </div>
                      <CardDescription className="text-sm sm:text-base leading-relaxed">
                        {language === "en" ? exp.description.en : exp.description.bn}
                      </CardDescription>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-[10px] sm:text-xs">
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
  )
}
