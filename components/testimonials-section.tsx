"use client"

import { useLanguage } from "@/lib/language-context"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState, useCallback } from "react"

// Scroll reveal hook for staggered animations
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

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: { en: "CEO, TechStart Inc.", bn: "সিইও, টেকস্টার্ট ইনক." },
    country: { en: "USA", bn: "যুক্তরাষ্ট্র" },
    flag: "US",
    content: {
      en: "Turjoy transformed our digital presence completely. Our ROAS increased by 320% within just 3 months. His data-driven approach and strategic thinking are unmatched.",
      bn: "তুর্জয় আমাদের ডিজিটাল উপস্থিতি সম্পূর্ণরূপে রূপান্তরিত করেছেন। আমাদের ROAS মাত্র ৩ মাসে ৩২০% বেড়েছে। তার ডেটা-চালিত পদ্ধতি এবং কৌশলগত চিন্তাভাবনা অতুলনীয়।"
    },
    rating: 5,
  },
  {
    name: "Mohammad Karim",
    role: { en: "Founder, BDShop", bn: "প্রতিষ্ঠাতা, বিডিশপ" },
    country: { en: "Bangladesh", bn: "বাংলাদেশ" },
    flag: "BD",
    content: {
      en: "Working with Turjoy was a game-changer for our e-commerce business. He scaled our ad spend from $5K to $50K monthly while maintaining profitability. Highly recommend!",
      bn: "তুর্জয়ের সাথে কাজ করা আমাদের ই-কমার্স ব্যবসার জন্য গেম-চেঞ্জার ছিল। তিনি লাভজনকতা বজায় রেখে আমাদের বিজ্ঞাপন খরচ মাসিক $৫K থেকে $৫০K-এ স্কেল করেছেন।"
    },
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: { en: "Marketing Director, GrowthHub", bn: "মার্কেটিং ডিরেক্টর, গ্রোথহাব" },
    country: { en: "UK", bn: "যুক্তরাজ্য" },
    flag: "GB",
    content: {
      en: "Turjoy's expertise in Meta Ads is exceptional. He helped us generate over 10,000 qualified leads in 6 months. His analytical skills and creative approach set him apart.",
      bn: "মেটা অ্যাডসে তুর্জয়ের দক্ষতা অসাধারণ। তিনি আমাদের ৬ মাসে ১০,০০০+ যোগ্য লিড তৈরি করতে সাহায্য করেছেন। তার বিশ্লেষণাত্মক দক্ষতা এবং সৃজনশীল পদ্ধতি তাকে আলাদা করে।"
    },
    rating: 5,
  },
  {
    name: "James Wilson",
    role: { en: "Owner, Maple Leaf Ventures", bn: "মালিক, ম্যাপল লিফ ভেঞ্চার্স" },
    country: { en: "Canada", bn: "কানাডা" },
    flag: "CA",
    content: {
      en: "The best digital marketing specialist I've worked with. Turjoy doesn't just run ads; he builds comprehensive strategies that deliver sustainable growth.",
      bn: "আমি যার সাথে কাজ করেছি সেরা ডিজিটাল মার্কেটিং বিশেষজ্ঞ। তুর্জয় শুধু বিজ্ঞাপন চালান না; তিনি টেকসই বৃদ্ধি প্রদানকারী ব্যাপক কৌশল তৈরি করেন।"
    },
    rating: 5,
  },
  {
    name: "Olivia Chen",
    role: { en: "CMO, AussieRetail", bn: "সিএমও, অসিরিটেইল" },
    country: { en: "Australia", bn: "অস্ট্রেলিয়া" },
    flag: "AU",
    content: {
      en: "Turjoy helped us expand into new markets with his targeted advertising strategies. Our international sales grew by 200% in the first quarter alone.",
      bn: "তুর্জয় তার লক্ষ্যভিত্তিক বিজ্ঞাপন কৌশল দিয়ে নতুন বাজারে প্রসারিত হতে সাহায্য করেছেন। শুধুমাত্র প্রথম প্রান্তিকে আমাদের আন্তর্জাতিক বিক্রয় ২০০% বেড়েছে।"
    },
    rating: 5,
  },
  {
    name: "Patrick O'Brien",
    role: { en: "Director, Dublin Digital", bn: "পরিচালক, ডাবলিন ডিজিটাল" },
    country: { en: "Ireland", bn: "আয়ারল্যান্ড" },
    flag: "IE",
    content: {
      en: "Professional, knowledgeable, and results-oriented. Turjoy's work on our lead generation campaigns exceeded all expectations. A true expert in performance marketing.",
      bn: "পেশাদার, জ্ঞানী এবং ফলাফল-ভিত্তিক। আমাদের লিড জেনারেশন ক্যাম্পেইনে তুর্জয়ের কাজ সব প্রত্যাশা ছাড়িয়ে গেছে। পারফরম্যান্স মার্কেটিংয়ে একজন সত্যিকারের বিশেষজ্ঞ।"
    },
    rating: 5,
  },
]

const flagEmoji: Record<string, string> = {
  US: "🇺🇸",
  BD: "🇧🇩",
  GB: "🇬🇧",
  CA: "🇨🇦",
  AU: "🇦🇺",
  IE: "🇮🇪",
}

export function TestimonialsSection() {
  const { language } = useLanguage()
  const headerReveal = useScrollReveal()
  const cardsReveal = useScrollReveal()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Number of visible cards based on screen size
  const getVisibleCards = () => {
    if (typeof window === "undefined") return 3
    if (window.innerWidth < 768) return 1
    if (window.innerWidth < 1024) return 2
    return 3
  }

  const [visibleCards, setVisibleCards] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards())
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - visibleCards)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={headerReveal.ref}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ease-out ${
            headerReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {language === "en" ? "Testimonials" : "প্রশংসাপত্র"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance dark:text-white">
            {language === "en" ? "What Clients Say" : "ক্লায়েন্টরা কী বলেন"}
          </h2>
          <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            {language === "en" 
              ? "Trusted by businesses across 6 countries worldwide"
              : "বিশ্বব্যাপী ৬টি দেশের ব্যবসায়ীদের দ্বারা বিশ্বস্ত"
            }
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          ref={cardsReveal.ref}
          className={`relative transition-all duration-1000 ease-out ${
            cardsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card/90 dark:bg-slate-800/90 backdrop-blur-sm border-border/50 dark:border-slate-700/60 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-card/90 dark:bg-slate-800/90 backdrop-blur-sm border-border/50 dark:border-slate-700/60 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </Button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-6 sm:mx-10" ref={carouselRef}>
            <div 
              className="flex gap-4 sm:gap-6 transition-transform duration-500 ease-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className={`group flex-shrink-0 hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 bg-card/80 dark:bg-slate-800/80 backdrop-blur-sm border-border/50 dark:border-slate-700/60 overflow-hidden hover:border-primary/30 ${
                    cardsReveal.isVisible 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ 
                    width: `calc(${100 / visibleCards}% - ${(visibleCards - 1) * 24 / visibleCards}px)`,
                    transitionDelay: cardsReveal.isVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <CardContent className="p-6 relative">
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
                    
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-muted-foreground dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base line-clamp-4">
                      {language === "en" ? testimonial.content.en : testimonial.content.bn}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12 border-2 border-primary/20">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-semibold text-sm dark:text-white">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground dark:text-gray-400">
                          {language === "en" ? testimonial.role.en : testimonial.role.bn}
                        </p>
                      </div>
                      <div className="text-2xl" title={language === "en" ? testimonial.country.en : testimonial.country.bn}>
                        {flagEmoji[testimonial.flag]}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "w-6 bg-primary" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
