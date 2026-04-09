"use client"

import { useLanguage } from "@/lib/language-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Facebook, Instagram, LineChart, Target, Users, CheckCircle, Sparkles, TrendingUp, ShoppingCart, Search, PenTool, Youtube, Bot, Cpu, Globe, Zap } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Facebook,
    title: { en: "Facebook Ads Management", bn: "ফেসবুক অ্যাডস ম্যানেজমেন্ট" },
    description: { 
      en: "Strategic Facebook advertising campaigns that drive conversions, increase brand awareness, and maximize ROI with advanced targeting and optimization.",
      bn: "কৌশলগত ফেসবুক বিজ্ঞাপন ক্যাম্পেইন যা কনভার্শন বাড়ায়, ব্র্যান্ড সচেতনতা বৃদ্ধি করে এবং উন্নত টার্গেটিং দিয়ে ROI সর্বাধিক করে।"
    },
    features: {
      en: ["Campaign strategy & planning", "Audience research & targeting", "Ad creative development", "A/B testing & optimization", "Performance tracking & reporting", "Budget management"],
      bn: ["ক্যাম্পেইন কৌশল ও পরিকল্পনা", "অডিয়েন্স রিসার্চ ও টার্গেটিং", "অ্যাড ক্রিয়েটিভ ডেভেলপমেন্ট", "A/B টেস্টিং ও অপ্টিমাইজেশন", "পারফরম্যান্স ট্র্যাকিং ও রিপোর্টিং", "বাজেট ম্যানেজমেন্ট"]
    },
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Instagram,
    title: { en: "Instagram Ads", bn: "ইনস্টাগ্রাম অ্যাডস" },
    description: {
      en: "Engaging Instagram ad campaigns designed to capture attention, build community, and drive sales through visual storytelling and targeted reach.",
      bn: "আকর্ষণীয় ইনস্টাগ্রাম বিজ্ঞাপন ক্যাম্পেইন যা মনোযোগ আকর্ষণ করে, কমিউনিটি তৈরি করে এবং ভিজ্যুয়াল স্টোরিটেলিংয়ের মাধ্যমে বিক্রয় বাড়ায়।"
    },
    features: {
      en: ["Story & Reel ads", "Shopping integration", "Influencer collaboration", "Visual content strategy", "Engagement optimization", "Cross-platform campaigns"],
      bn: ["স্টোরি ও রিল অ্যাডস", "শপিং ইন্টিগ্রেশন", "ইনফ্লুয়েন্সার কোলাবোরেশন", "ভিজ্যুয়াল কন্টেন্ট কৌশল", "এনগেজমেন্ট অপ্টিমাইজেশন", "ক্রস-প্ল্যাটফর্ম ক্যাম্পেইন"]
    },
    color: "from-pink-500 to-purple-600",
  },
  {
    icon: Target,
    title: { en: "Lead Generation Campaigns", bn: "লিড জেনারেশন ক্যাম্পেইন" },
    description: {
      en: "High-converting lead generation strategies that fill your pipeline with qualified prospects ready to become customers.",
      bn: "উচ্চ-রূপান্তরকারী লিড জেনারেশন কৌশল যা আপনার পাইপলাইন যোগ্য সম্ভাব্য গ্রাহকদের দিয়ে পূরণ করে।"
    },
    features: {
      en: ["Landing page optimization", "Lead magnet creation", "Form optimization", "Lead scoring & qualification", "Email sequence setup", "CRM integration"],
      bn: ["ল্যান্ডিং পেজ অপ্টিমাইজেশন", "লিড ম্যাগনেট তৈরি", "ফর্ম অপ্টিমাইজেশন", "লিড স্কোরিং ও কোয়ালিফিকেশন", "ইমেইল সিকোয়েন্স সেটআপ", "CRM ইন্টিগ্রেশন"]
    },
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: ShoppingCart,
    title: { en: "E-commerce Ads Scaling", bn: "ই-কমার্স অ্যাডস স্কেলিং" },
    description: {
      en: "Scaling e-commerce businesses through data-driven advertising strategies that increase sales and reduce acquisition costs.",
      bn: "ডেটা-চালিত বিজ্ঞাপন কৌশলের মাধ্যমে ই-কমার্স ব্যবসা স্কেলিং যা বিক্রয় বাড়ায় এবং অধিগ্রহণ খরচ কমায়।"
    },
    features: {
      en: ["Product feed optimization", "Dynamic retargeting", "Shopping campaigns", "ROAS optimization", "Abandoned cart recovery", "Seasonal campaign management"],
      bn: ["প্রোডাক্ট ফিড অপ্টিমাইজেশন", "ডাইনামিক রিটার্গেটিং", "শপিং ক্যাম্পেইন", "ROAS অপ্টিমাইজেশন", "পরিত্যক্ত কার্ট রিকভারি", "সিজনাল ক্যাম্পেইন ম্যানেজমেন্ট"]
    },
    color: "from-orange-500 to-red-600",
  },
  {
    icon: BarChart3,
    title: { en: "Marketing Analytics", bn: "মার্কেটিং অ্যানালিটিক্স" },
    description: {
      en: "Comprehensive analytics and reporting that turn data into actionable insights for better marketing decisions.",
      bn: "ব্যাপক অ্যানালিটিক্স এবং রিপোর্টিং যা ডেটাকে ভালো মার্কেটিং সিদ্ধান্তের জন্য কার্যকরী অন্তর্দৃষ্টিতে পরিণত করে।"
    },
    features: {
      en: ["Dashboard setup", "Custom reporting", "Attribution modeling", "Conversion tracking", "ROI analysis", "Competitor analysis"],
      bn: ["ড্যাশবোর্ড সেটআপ", "কাস্টম রিপোর্টিং", "অ্যাট্রিবিউশন মডেলিং", "কনভার্শন ট্র্যাকিং", "ROI বিশ্লেষণ", "প্রতিযোগী বিশ্লেষণ"]
    },
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Users,
    title: { en: "Social Media Growth Strategy", bn: "সোশ্যাল মিডিয়া গ্রোথ স্ট্র্যাটেজি" },
    description: {
      en: "Organic growth strategies that build engaged communities and establish your brand as an industry authority.",
      bn: "অর্গানিক গ্রোথ কৌশল যা এনগেজড কমিউনিটি তৈরি করে এবং আপনার ব্র্যান্ডকে ইন্ডাস্ট্রি অথরিটি হিসেবে প্রতিষ্ঠিত করে।"
    },
    features: {
      en: ["Content calendar planning", "Community management", "Engagement strategies", "Brand voice development", "Hashtag research", "Growth tactics"],
      bn: ["কন্টেন্ট ক্যালেন্ডার প্ল্যানিং", "কমিউনিটি ম্যানেজমেন্ট", "এনগেজমেন্ট কৌশল", "ব্র্যান্ড ভয়েস ডেভেলপমেন্ট", "হ্যাশট্যাগ রিসার্চ", "গ্রোথ ট্যাকটিক্স"]
    },
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: Search,
    title: { en: "Google Ads Management", bn: "গুগল অ্যাডস ম্যানেজমেন্ট" },
    description: {
      en: "High-performance Google Ads campaigns including Search, Display, and Shopping that drive qualified traffic and maximize conversions.",
      bn: "উচ্চ-পারফরম্যান্স গুগল অ্যাডস ক্যাম্পেইন যা সার্চ, ডিসপ্লে এবং শপিং অন্তর্ভুক্ত করে এবং যোগ্য ট্রাফিক আনে।"
    },
    features: {
      en: ["Keyword research & strategy", "Search campaign optimization", "Display network targeting", "Shopping feed management", "Quality score improvement", "Conversion tracking setup"],
      bn: ["কীওয়ার্ড রিসার্চ ও কৌশল", "সার্চ ক্যাম্পেইন অপ্টিমাইজেশন", "ডিসপ্লে নেটওয়ার্ক টার্গেটিং", "শপিং ফিড ম্যানেজমেন্ট", "কোয়ালিটি স্কোর উন্নতি", "কনভার্শন ট্র্যাকিং সেটআপ"]
    },
    color: "from-red-500 to-yellow-500",
  },
  {
    icon: Youtube,
    title: { en: "YouTube Marketing", bn: "ইউটিউব মার্কেটিং" },
    description: {
      en: "Strategic YouTube advertising and content marketing that builds brand awareness and drives engagement through video.",
      bn: "কৌশলগত ইউটিউব বিজ্ঞাপন এবং কন্টেন্ট মার্কেটিং যা ভিডিওর মাধ্যমে ব্র্যান্ড সচেতনতা তৈরি করে।"
    },
    features: {
      en: ["YouTube Ads campaigns", "Video content strategy", "Channel optimization", "Audience targeting", "TrueView & Bumper ads", "Performance analytics"],
      bn: ["ইউটিউব অ্যাডস ক্যাম্পেইন", "ভিডিও কন্টেন্ট কৌশল", "চ্যানেল অপ্টিমাইজেশন", "অডিয়েন্স টার্গেটিং", "TrueView ও Bumper অ্যাডস", "পারফরম্যান্স অ্যানালিটিক্স"]
    },
    color: "from-red-600 to-red-500",
  },
  {
    icon: Bot,
    title: { en: "AI Automation", bn: "AI অটোমেশন" },
    description: {
      en: "Intelligent automation solutions that streamline your marketing workflows, reduce manual tasks, and boost productivity.",
      bn: "বুদ্ধিমান অটোমেশন সমাধান যা আপনার মার্কেটিং ওয়ার্কফ্লো সুগম করে এবং উৎপাদনশীলতা বাড়ায়।"
    },
    features: {
      en: ["Marketing automation setup", "AI-powered chatbots", "Email sequence automation", "Lead scoring systems", "Workflow optimization", "Custom integrations"],
      bn: ["মার্কেটিং অটোমেশন সেটআপ", "AI-চালিত চ্যাটবট", "ইমেইল সিকোয়েন্স অটোমেশন", "লিড স্কোরিং সিস্টেম", "ওয়ার্কফ্লো অপ্টিমাইজেশন", "কাস্টম ইন্টিগ্রেশন"]
    },
    color: "from-purple-500 to-indigo-600",
  },
  {
    icon: Cpu,
    title: { en: "AI Agent Build", bn: "AI এজেন্ট বিল্ড" },
    description: {
      en: "Custom AI agents designed to handle customer inquiries, automate support, and enhance user experience 24/7.",
      bn: "কাস্টম AI এজেন্ট যা গ্রাহক জিজ্ঞাসা সামলায়, সাপোর্ট অটোমেট করে এবং ২৪/৭ ইউজার এক্সপেরিয়েন্স উন্নত করে।"
    },
    features: {
      en: ["Custom AI agent development", "Natural language processing", "Multi-platform deployment", "Knowledge base integration", "Conversation flow design", "Continuous learning setup"],
      bn: ["কাস্টম AI এজেন্ট ডেভেলপমেন্ট", "ন্যাচারাল ল্যাঙ্গুয়েজ প্রসেসিং", "মাল্টি-প্ল্যাটফর্ম ডেপ্লয়মেন্ট", "নলেজ বেস ইন্টিগ্রেশন", "কনভার্সেশন ফ্লো ডিজাইন", "কন্টিনিউয়াস লার্নিং সেটআপ"]
    },
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Globe,
    title: { en: "Website Build", bn: "ওয়েবসাইট বিল্ড" },
    description: {
      en: "Modern, high-converting websites built with cutting-edge technology that look stunning and perform exceptionally.",
      bn: "আধুনিক, উচ্চ-রূপান্তরকারী ওয়েবসাইট যা অত্যাধুনিক প্রযুক্তি দিয়ে তৈরি এবং অসাধারণ পারফর্ম করে।"
    },
    features: {
      en: ["Custom website development", "Responsive design", "SEO optimization", "Performance optimization", "CMS integration", "Ongoing maintenance"],
      bn: ["কাস্টম ওয়েবসাইট ডেভেলপমেন্ট", "রেসপন্সিভ ডিজাইন", "SEO অপ্টিমাইজেশন", "পারফরম্যান্স অপ্টিমাইজেশন", "CMS ইন্টিগ্রেশন", "চলমান রক্ষণাবেক্ষণ"]
    },
    color: "from-sky-500 to-blue-600",
  },
]

const process = [
  {
    step: "01",
    title: { en: "Discovery", bn: "আবিষ্কার" },
    description: { 
      en: "We start by understanding your business, goals, target audience, and current marketing efforts.",
      bn: "আমরা আপনার ব্যবসা, লক্ষ্য, টার্গেট অডিয়েন্স এবং বর্তমান মার্কেটিং প্রচেষ্টা বুঝে শুরু করি।"
    },
  },
  {
    step: "02",
    title: { en: "Strategy", bn: "কৌশল" },
    description: {
      en: "Based on our findings, we develop a customized marketing strategy aligned with your objectives.",
      bn: "আমাদের ফলাফলের ভিত্তিতে, আমরা আপনার উদ্দেশ্যের সাথে সামঞ্জস্যপূর্ণ একটি কাস্টম মার্কেটিং কৌশল তৈরি করি।"
    },
  },
  {
    step: "03",
    title: { en: "Execution", bn: "বাস্তবায়ন" },
    description: {
      en: "We implement the strategy, launching campaigns with precision and attention to detail.",
      bn: "আমরা কৌশল বাস্তবায়ন করি, নির্ভুলতা এবং বিস্তারিত মনোযোগ দিয়ে ক্যাম্পেইন চালু করি।"
    },
  },
  {
    step: "04",
    title: { en: "Optimization", bn: "অপ্টিমাইজেশন" },
    description: {
      en: "Continuous monitoring and optimization to maximize performance and ROI.",
      bn: "পারফরম্যান্স এবং ROI সর্বাধিক করতে ক্রমাগত মনিটরিং এবং অপ্টিমাইজেশন।"
    },
  },
]

export default function ServicesPage() {
  const { t, language } = useLanguage()

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4">{language === "en" ? "Services" : "সেবাসমূহ"}</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">{t("services.subtitle")}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {language === "en" 
              ? "From strategy to execution, I provide end-to-end digital marketing services that help your business grow and succeed in the digital landscape."
              : "কৌশল থেকে বাস্তবায়ন পর্যন্ত, আমি সম্পূর্ণ ডিজিটাল মার্কেটিং সেবা প্রদান করি যা আপনার ব্যবসাকে ডিজিটাল ল্যান্ডস্কেপে বৃদ্ধি ও সফল হতে সাহায্য করে।"
            }
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                {language === "en" ? "Get Started" : "শুরু করুন"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">
                {language === "en" ? "View Case Studies" : "কেস স্টাডি দেখুন"}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-secondary/30 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 bg-card/80 dark:bg-slate-800/80 backdrop-blur-sm border-border/50 dark:border-slate-700/60 overflow-hidden animate-fade-in-up hover:border-primary/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <Sparkles className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardTitle className="text-2xl mt-4 dark:text-white">
                    {language === "en" ? service.title.en : service.title.bn}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed dark:text-gray-300">
                    {language === "en" ? service.description.en : service.description.bn}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid sm:grid-cols-2 gap-2 mb-6">
                    {(language === "en" ? service.features.en : service.features.bn).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        <span className="text-muted-foreground dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full group/btn" asChild>
                    <Link href="/contact">
                      {language === "en" ? "Get Started" : "শুরু করুন"}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">{language === "en" ? "Process" : "প্রক্রিয়া"}</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">{language === "en" ? "How I Work" : "আমি কিভাবে কাজ করি"}</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "en" 
                ? "A proven process that delivers consistent results for every project"
                : "একটি প্রমাণিত প্রক্রিয়া যা প্রতিটি প্রজেক্টের জন্য ধারাবাহিক ফলাফল প্রদান করে"
              }
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                )}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 dark:text-white">
                    {language === "en" ? item.title.en : item.title.bn}
                  </h3>
                  <p className="text-muted-foreground dark:text-gray-400">
                    {language === "en" ? item.description.en : item.description.bn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/30 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-effect dark:bg-slate-800/90 dark:border-slate-700/60 rounded-3xl p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              {language === "en" ? "Ready to " : "আপনার মার্কেটিং "}
              <span className="gradient-text">
                {language === "en" ? "Transform Your Marketing?" : "রূপান্তর করতে প্রস্তুত?"}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === "en" 
                ? "Let's discuss your goals and create a customized strategy that delivers real results for your business."
                : "আসুন আপনার লক্ষ্য নিয়ে আলোচনা করি এবং আপনার ব্যবসার জন্য একটি কাস্টম কৌশল তৈরি করি যা প্রকৃত ফলাফল প্রদান করে।"
              }
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  {language === "en" ? "Schedule a Consultation" : "পরামর্শের জন্য সময় নির্ধারণ করুন"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://wa.me/8801518961899" target="_blank" rel="noopener noreferrer">
                  {language === "en" ? "Chat on WhatsApp" : "হোয়াটসঅ্যাপে চ্যাট করুন"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
