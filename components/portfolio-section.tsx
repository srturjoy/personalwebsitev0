"use client"

import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, TrendingUp, Target, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

const projects = [
  {
    title: { en: "E-commerce Growth Campaign", bn: "ই-কমার্স গ্রোথ ক্যাম্পেইন" },
    description: { 
      en: "Scaled an e-commerce brand from $50K to $500K monthly revenue through strategic Facebook and Google Ads campaigns.",
      bn: "কৌশলগত Facebook এবং Google Ads ক্যাম্পেইনের মাধ্যমে একটি ই-কমার্স ব্র্যান্ডকে $50K থেকে $500K মাসিক রাজস্বে স্কেল করা হয়েছে।"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Facebook Ads", "Google Ads", "E-commerce"],
    results: "10x ROAS",
    caseStudy: {
      challenge: {
        en: "The client was struggling with low conversion rates and high customer acquisition costs. Their existing campaigns were generating traffic but not converting visitors into buyers. They needed a complete overhaul of their digital marketing strategy.",
        bn: "ক্লায়েন্ট কম কনভার্শন রেট এবং উচ্চ গ্রাহক অধিগ্রহণ খরচে সংগ্রাম করছিল। তাদের বিদ্যমান ক্যাম্পেইন ট্রাফিক জেনারেট করছিল কিন্তু ভিজিটরদের ক্রেতায় রূপান্তরিত করতে পারছিল না।"
      },
      strategy: {
        en: "I implemented a comprehensive funnel strategy with custom audience segmentation, dynamic product ads, and retargeting sequences. Created look-alike audiences from top customers and optimized bidding for purchase conversions rather than clicks.",
        bn: "আমি কাস্টম অডিয়েন্স সেগমেন্টেশন, ডাইনামিক প্রোডাক্ট অ্যাডস এবং রিটার্গেটিং সিকোয়েন্স সহ একটি ব্যাপক ফানেল কৌশল প্রয়োগ করেছি। শীর্ষ গ্রাহকদের থেকে লুক-এলাইক অডিয়েন্স তৈরি করেছি।"
      },
      result: {
        en: "Achieved 10x ROAS within 3 months, scaling monthly revenue from $50K to $500K. Reduced cost per acquisition by 65% while increasing average order value by 40% through strategic upselling campaigns.",
        bn: "৩ মাসের মধ্যে ১০x ROAS অর্জন করেছি, মাসিক রাজস্ব $50K থেকে $500K-এ স্কেল করেছি। কৌশলগত আপসেলিং ক্যাম্পেইনের মাধ্যমে গড় অর্ডার মান ৪০% বাড়িয়ে প্রতি অধিগ্রহণ খরচ ৬৫% কমিয়েছি।"
      }
    }
  },
  {
    title: { en: "B2B Lead Generation Funnel", bn: "B2B লিড জেনারেশন ফানেল" },
    description: {
      en: "Generated 5,000+ qualified leads for a B2B SaaS company with a 40% reduction in cost per lead.",
      bn: "একটি B2B SaaS কোম্পানির জন্য প্রতি লিড খরচ ৪০% কমিয়ে ৫,০০০+ যোগ্য লিড জেনারেট করা হয়েছে।"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Lead Gen", "Meta Ads", "Automation"],
    results: "5,000+ Leads",
    caseStudy: {
      challenge: {
        en: "The SaaS company was spending heavily on lead generation but the quality of leads was poor. Sales team was overwhelmed with unqualified prospects, leading to low conversion rates and wasted resources.",
        bn: "SaaS কোম্পানি লিড জেনারেশনে প্রচুর খরচ করছিল কিন্তু লিডের গুণমান ছিল খারাপ। সেলস টিম অযোগ্য প্রোস্পেক্টস নিয়ে অভিভূত ছিল।"
      },
      strategy: {
        en: "Developed a multi-touch attribution model and implemented lead scoring based on engagement. Created targeted content for each stage of the buyer journey with LinkedIn Ads, Facebook Lead Ads, and Google Search campaigns working in harmony.",
        bn: "একটি মাল্টি-টাচ অ্যাট্রিবিউশন মডেল তৈরি করেছি এবং এনগেজমেন্টের উপর ভিত্তি করে লিড স্কোরিং প্রয়োগ করেছি। ক্রেতার যাত্রার প্রতিটি পর্যায়ের জন্য টার্গেটেড কন্টেন্ট তৈরি করেছি।"
      },
      result: {
        en: "Generated 5,000+ marketing qualified leads in 6 months with a 40% reduction in CPL. Sales team reported 3x improvement in lead-to-customer conversion rate. Pipeline value increased by $2M.",
        bn: "৬ মাসে CPL ৪০% কমিয়ে ৫,০০০+ মার্কেটিং যোগ্য লিড জেনারেট করেছি। সেলস টিম লিড-টু-কাস্টমার কনভার্শন রেটে ৩x উন্নতি রিপোর্ট করেছে।"
      }
    }
  },
  {
    title: { en: "Brand Awareness Campaign", bn: "ব্র্যান্ড সচেতনতা ক্যাম্পেইন" },
    description: {
      en: "Increased brand reach by 500% and engagement by 300% through targeted social media marketing strategies.",
      bn: "টার্গেটেড সোশ্যাল মিডিয়া মার্কেটিং কৌশলের মাধ্যমে ব্র্যান্ড রিচ ৫০০% এবং এনগেজমেন্ট ৩০০% বাড়ানো হয়েছে।"
    },
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&h=600&fit=crop",
    tags: ["Social Media", "Branding", "Analytics"],
    results: "500% Reach",
    caseStudy: {
      challenge: {
        en: "A new fashion brand needed to establish market presence quickly in a highly competitive space. They had zero brand recognition and limited budget for traditional advertising methods.",
        bn: "একটি নতুন ফ্যাশন ব্র্যান্ডের অত্যন্ত প্রতিযোগিতামূলক স্পেসে দ্রুত বাজার উপস্থিতি স্থাপন করা দরকার ছিল। তাদের ব্র্যান্ড রিকগনিশন শূন্য ছিল।"
      },
      strategy: {
        en: "Leveraged influencer partnerships, user-generated content campaigns, and viral video content. Created a cohesive brand story across Instagram, TikTok, and Facebook with consistent messaging and visual identity.",
        bn: "ইনফ্লুয়েন্সার পার্টনারশিপ, ইউজার-জেনারেটেড কন্টেন্ট ক্যাম্পেইন এবং ভাইরাল ভিডিও কন্টেন্ট ব্যবহার করেছি। সামঞ্জস্যপূর্ণ মেসেজিং সহ একটি সমন্বিত ব্র্যান্ড স্টোরি তৈরি করেছি।"
      },
      result: {
        en: "Achieved 500% increase in brand reach and 300% boost in engagement within 4 months. Built a community of 50K+ followers. The brand became a trending topic in their niche with organic mentions increasing by 800%.",
        bn: "৪ মাসের মধ্যে ব্র্যান্ড রিচে ৫০০% বৃদ্ধি এবং এনগেজমেন্টে ৩০০% বুস্ট অর্জন করেছি। ৫০K+ ফলোয়ারদের একটি কমিউনিটি তৈরি করেছি।"
      }
    }
  },
  {
    title: { en: "Local Business Marketing", bn: "লোকাল বিজনেস মার্কেটিং" },
    description: {
      en: "Helped a local restaurant chain increase foot traffic by 200% through location-based advertising.",
      bn: "লোকেশন-ভিত্তিক বিজ্ঞাপনের মাধ্যমে একটি স্থানীয় রেস্তোরাঁ চেইনের ফুট ট্রাফিক ২০০% বাড়াতে সাহায্য করা হয়েছে।"
    },
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    tags: ["Local Ads", "Google My Business", "Meta"],
    results: "200% Traffic",
    caseStudy: {
      challenge: {
        en: "A restaurant chain with 5 locations was losing customers to competitors. Their online presence was weak, reviews were declining, and they had no strategy for attracting nearby customers through digital channels.",
        bn: "৫টি লোকেশন সহ একটি রেস্তোরাঁ চেইন প্রতিযোগীদের কাছে গ্রাহক হারাচ্ছিল। তাদের অনলাইন উপস্থিতি দুর্বল ছিল, রিভিউ হ্রাস পাচ্ছিল।"
      },
      strategy: {
        en: "Optimized Google My Business profiles, implemented geo-targeted Facebook and Instagram ads, and created a review generation system. Developed time-sensitive offers for lunch and dinner rush hours with location-specific targeting.",
        bn: "Google My Business প্রোফাইল অপটিমাইজ করেছি, জিও-টার্গেটেড Facebook এবং Instagram অ্যাড প্রয়োগ করেছি এবং একটি রিভিউ জেনারেশন সিস্টেম তৈরি করেছি।"
      },
      result: {
        en: "Increased foot traffic by 200% across all locations. Google reviews improved from 3.8 to 4.6 stars. Online orders grew by 350% and the restaurant became the #1 rated in their category locally.",
        bn: "সব লোকেশনে ফুট ট্রাফিক ২০০% বাড়িয়েছি। Google রিভিউ ৩.৮ থেকে ৪.৬ স্টারে উন্নত হয়েছে। অনলাইন অর্ডার ৩৫০% বেড়েছে।"
      }
    }
  },
]

export function PortfolioSection() {
  const { t, language } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {language === "en" ? "Case Studies" : "কেস স্টাডি"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="gradient-text">{t("portfolio.title")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            {t("portfolio.subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={language === "en" ? project.title.en : project.title.bn}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-primary text-primary-foreground font-semibold">
                    {project.results}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-5 sm:p-6 space-y-4">
                <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                  {language === "en" ? project.title.en : project.title.bn}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base line-clamp-2">
                  {language === "en" ? project.description.en : project.description.bn}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" className="group/btn p-0 h-auto text-sm">
                  {t("portfolio.view")}
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10 sm:mt-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" variant="outline" asChild>
            <Link href="/portfolio">
              {language === "en" ? "View All Projects" : "সব প্রজেক্ট দেখুন"}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Case Study Dialog */}
      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl sm:text-2xl">
                {language === "en" ? selectedProject.title.en : selectedProject.title.bn}
              </DialogTitle>
              <DialogDescription>
                {language === "en" ? "Detailed case study breakdown" : "বিস্তারিত কেস স্টাডি বিশ্লেষণ"}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 mt-4">
              <div className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={language === "en" ? selectedProject.title.en : selectedProject.title.bn}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge className="absolute bottom-4 left-4 bg-primary text-primary-foreground">
                  {selectedProject.results}
                </Badge>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-primary">
                    <Lightbulb className="w-5 h-5" />
                    <h4 className="font-semibold">{language === "en" ? "The Challenge" : "চ্যালেঞ্জ"}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                    {language === "en" ? selectedProject.caseStudy.challenge.en : selectedProject.caseStudy.challenge.bn}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-accent">
                    <Target className="w-5 h-5" />
                    <h4 className="font-semibold">{language === "en" ? "My Strategy" : "আমার কৌশল"}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                    {language === "en" ? selectedProject.caseStudy.strategy.en : selectedProject.caseStudy.strategy.bn}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-500">
                    <TrendingUp className="w-5 h-5" />
                    <h4 className="font-semibold">{language === "en" ? "The Growth Result" : "বৃদ্ধির ফলাফল"}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-7">
                    {language === "en" ? selectedProject.caseStudy.result.en : selectedProject.caseStudy.result.bn}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {selectedProject.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
