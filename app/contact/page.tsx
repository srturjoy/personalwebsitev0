"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { Mail, MapPin, Phone, Send, MessageCircle, ExternalLink, Clock, Calendar, Video, CheckCircle, Globe } from "lucide-react"
import Link from "next/link"

const contactMethods = [
  {
    icon: Mail,
    title: { en: "Email", bn: "ইমেইল" },
    value: "turjoy144@gmail.com",
    href: "mailto:turjoy144@gmail.com",
    description: { en: "Best for detailed inquiries", bn: "বিস্তারিত জিজ্ঞাসার জন্য সেরা" },
  },
  {
    icon: Phone,
    title: { en: "Phone", bn: "ফোন" },
    value: "+880 1518 961899",
    href: "tel:+8801518961899",
    description: { en: "Available during business hours", bn: "কাজের সময়ে উপলব্ধ" },
  },
  {
    icon: MessageCircle,
    title: { en: "WhatsApp", bn: "হোয়াটসঅ্যাপ" },
    value: "+880 1518 961899",
    href: "https://wa.me/8801518961899",
    description: { en: "Quick responses guaranteed", bn: "দ্রুত প্রতিক্রিয়া নিশ্চিত" },
  },
  {
    icon: Globe,
    title: { en: "Website", bn: "ওয়েবসাইট" },
    value: "boostingagencyofficial.site",
    href: "https://boostingagencyofficial.site/",
    description: { en: "Visit my agency website", bn: "আমার এজেন্সি ওয়েবসাইট দেখুন" },
  },
]

const services = {
  en: [
    "Facebook Ads Management",
    "Instagram Ads",
    "Lead Generation",
    "E-commerce Scaling",
    "Marketing Analytics",
    "Social Media Strategy",
    "Brand Development",
    "Other",
  ],
  bn: [
    "ফেসবুক অ্যাডস ম্যানেজমেন্ট",
    "ইনস্টাগ্রাম অ্যাডস",
    "লিড জেনারেশন",
    "ই-কমার্স স্কেলিং",
    "মার্কেটিং অ্যানালিটিক্স",
    "সোশ্যাল মিডিয়া স্ট্র্যাটেজি",
    "ব্র্যান্ড ডেভেলপমেন্ট",
    "অন্যান্য",
  ]
}

const budgetRanges = {
  en: [
    "Under $500",
    "$500 - $1,000",
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
  ],
  bn: [
    "$৫০০ এর নিচে",
    "$৫০০ - $১,০০০",
    "$১,০০০ - $২,৫০০",
    "$২,৫০০ - $৫,০০০",
    "$৫,০০০ - $১০,০০০",
    "$১০,০০০+",
  ]
}

export default function ContactPage() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4">{t("contact.title")}</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">
              {language === "en" ? "Let's Start Something Great" : "চলুন দুর্দান্ত কিছু শুরু করি"}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "en" 
              ? "Ready to take your marketing to the next level? I'd love to hear about your project and discuss how we can work together to achieve your goals."
              : "আপনার মার্কেটিংকে পরবর্তী স্তরে নিয়ে যেতে প্রস্তুত? আপনার প্রজেক্ট সম্পর্কে শুনতে এবং কিভাবে আমরা একসাথে কাজ করে আপনার লক্ষ্য অর্জন করতে পারি তা আলোচনা করতে চাই।"
            }
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 hover:border-primary/30 bg-card/80 dark:bg-slate-800/80 backdrop-blur-sm border-border/50 dark:border-slate-700/60">
                <CardContent className="p-6">
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <method.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1 dark:text-white">
                      {language === "en" ? method.title.en : method.title.bn}
                    </h3>
                    <p className="text-primary text-sm mb-1 group-hover:underline">{method.value}</p>
                    <p className="text-xs text-muted-foreground dark:text-gray-400">
                      {language === "en" ? method.description.en : method.description.bn}
                    </p>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-secondary/30 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="bg-card/80 dark:bg-slate-800/80 backdrop-blur-sm border-border/50 dark:border-slate-700/60">
                <CardHeader>
                  <CardTitle className="text-2xl dark:text-white">
                    {language === "en" ? "Send a Message" : "একটি বার্তা পাঠান"}
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    {language === "en" 
                      ? "Fill out the form below and I'll get back to you within 24 hours."
                      : "নিচের ফর্মটি পূরণ করুন এবং আমি ২৪ ঘন্টার মধ্যে আপনার সাথে যোগাযোগ করব।"
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        {language === "en" ? "Message Sent!" : "বার্তা পাঠানো হয়েছে!"}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {language === "en" 
                          ? "Thank you for reaching out. I'll respond to your inquiry as soon as possible."
                          : "যোগাযোগ করার জন্য ধন্যবাদ। আমি যত তাড়াতাড়ি সম্ভব আপনার জিজ্ঞাসার উত্তর দেব।"
                        }
                      </p>
                      <Button onClick={() => {
                        setSubmitted(false)
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          service: "",
                          budget: "",
                          message: "",
                        })
                      }}>
                        {language === "en" ? "Send Another Message" : "আরেকটি বার্তা পাঠান"}
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Field>
                          <FieldLabel>{language === "en" ? "Your Name *" : "আপনার নাম *"}</FieldLabel>
                          <Input
                            placeholder={language === "en" ? "John Doe" : "আপনার নাম"}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </Field>
                        <Field>
                          <FieldLabel>{language === "en" ? "Email Address *" : "ইমেইল ঠিকানা *"}</FieldLabel>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </Field>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <Field>
                          <FieldLabel>{language === "en" ? "Phone Number" : "ফোন নম্বর"}</FieldLabel>
                          <Input
                            placeholder="+880 1XXX XXXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </Field>
                        <Field>
                          <FieldLabel>{language === "en" ? "Company Name" : "কোম্পানির নাম"}</FieldLabel>
                          <Input
                            placeholder={language === "en" ? "Your Company" : "আপনার কোম্পানি"}
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          />
                        </Field>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <Field>
                          <FieldLabel>{language === "en" ? "Service Needed *" : "প্রয়োজনীয় সেবা *"}</FieldLabel>
                          <Select
                            value={formData.service}
                            onValueChange={(value) => setFormData({ ...formData, service: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder={language === "en" ? "Select a service" : "একটি সেবা নির্বাচন করুন"} />
                            </SelectTrigger>
                            <SelectContent>
                              {(language === "en" ? services.en : services.bn).map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </Field>
                        <Field>
                          <FieldLabel>{language === "en" ? "Monthly Budget" : "মাসিক বাজেট"}</FieldLabel>
                          <Select
                            value={formData.budget}
                            onValueChange={(value) => setFormData({ ...formData, budget: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder={language === "en" ? "Select budget range" : "বাজেট পরিসীমা নির্বাচন করুন"} />
                            </SelectTrigger>
                            <SelectContent>
                              {(language === "en" ? budgetRanges.en : budgetRanges.bn).map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </Field>
                      </div>

                      <Field>
                        <FieldLabel>{language === "en" ? "Project Details *" : "প্রজেক্টের বিবরণ *"}</FieldLabel>
                        <Textarea
                          placeholder={language === "en" 
                            ? "Tell me about your project, goals, and timeline..."
                            : "আপনার প্রজেক্ট, লক্ষ্য এবং সময়সীমা সম্পর্কে বলুন..."
                          }
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </Field>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          language === "en" ? "Sending..." : "পাঠানো হচ্ছে..."
                        ) : (
                          <>
                            <Send className="mr-2 w-4 h-4" />
                            {language === "en" ? "Send Message" : "বার্তা পাঠান"}
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Contact */}
              <Card className="bg-card/80 dark:bg-slate-800/80 backdrop-blur-sm border-border/50 dark:border-slate-700/60">
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    {language === "en" ? "Prefer to Talk?" : "কথা বলতে চান?"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" size="lg" className="w-full justify-start" asChild>
                    <a href="https://wa.me/8801518961899" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-3 w-5 h-5 text-green-500" />
                      {language === "en" ? "Chat on WhatsApp" : "হোয়াটসঅ্যাপে চ্যাট করুন"}
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start" asChild>
                    <a href="tel:+8801518961899">
                      <Phone className="mr-3 w-5 h-5 text-primary" />
                      {language === "en" ? "Call +880 1518 961899" : "কল করুন +৮৮০ ১৫১৮ ৯৬১৮৯৯"}
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full justify-start" asChild>
                    <a href="https://www.facebook.com/profile.php?id=100087737575645" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-3 w-5 h-5 text-blue-500" />
                      {language === "en" ? "Message on Facebook" : "ফেসবুকে মেসেজ করুন"}
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-card/80 dark:bg-slate-800/80 backdrop-blur-sm border-border/50 dark:border-slate-700/60">
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    {language === "en" ? "Availability" : "উপলব্ধতা"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium dark:text-white">
                        {language === "en" ? "Response Time" : "প্রতিক্রিয়ার সময়"}
                      </p>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">
                        {language === "en" ? "Within 24 hours" : "২৪ ঘন্টার মধ্যে"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium dark:text-white">
                        {language === "en" ? "Working Hours" : "কাজের সময়"}
                      </p>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">
                        {language === "en" ? "Sun - Thu, 9 AM - 6 PM (BST)" : "রবি - বৃহস্পতি, সকাল ৯টা - সন্ধ্যা ৬টা"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium dark:text-white">
                        {language === "en" ? "Free Consultation" : "বিনামূল্যে পরামর্শ"}
                      </p>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">
                        {language === "en" ? "30-minute video call" : "৩০ মিনিটের ভিডিও কল"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Location */}
              <Card className="bg-card/80 dark:bg-slate-800/80 backdrop-blur-sm border-border/50 dark:border-slate-700/60">
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    {language === "en" ? "Location" : "অবস্থান"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium dark:text-white">
                        {language === "en" ? "Dhaka, Bangladesh" : "ঢাকা, বাংলাদেশ"}
                      </p>
                      <p className="text-sm text-muted-foreground dark:text-gray-400">
                        {language === "en" 
                          ? "Serving clients globally with remote collaboration"
                          : "রিমোট কোলাবোরেশনের মাধ্যমে বিশ্বব্যাপী ক্লায়েন্টদের সেবা প্রদান"
                        }
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="gradient-text">
                {language === "en" ? "Ready to Get Started?" : "শুরু করতে প্রস্তুত?"}
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {language === "en" 
                ? "Don't wait to start growing your business. Reach out today and let's discuss how we can work together to achieve your marketing goals."
                : "আপনার ব্যবসা বৃদ্ধি করতে অপেক্ষা করবেন না। আজই যোগাযোগ করুন এবং আসুন আলোচনা করি কিভাবে আমরা একসাথে কাজ করে আপনার মার্কেটিং লক্ষ্য অর্জন করতে পারি।"
              }
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a href="https://wa.me/8801518961899" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" />
                  {language === "en" ? "Start WhatsApp Chat" : "হোয়াটসঅ্যাপ চ্যাট শুরু করুন"}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">
                  {language === "en" ? "View My Work First" : "প্রথমে আমার কাজ দেখুন"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
