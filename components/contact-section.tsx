"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"

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
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { Mail, MapPin, Phone, Send, MessageCircle, ExternalLink, Clock, CheckCircle } from "lucide-react"

export function ContactSection() {
  const { t, language } = useLanguage()
  const headerReveal = useScrollReveal()
  const cardsReveal = useScrollReveal()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div 
          ref={headerReveal.ref}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ease-out ${
            headerReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {language === "en" ? "Get in Touch" : "যোগাযোগ করুন"}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance dark:text-white">
            <span className="gradient-text">{t("contact.title")}</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div 
            ref={cardsReveal.ref}
            className={`space-y-4 sm:space-y-6 transition-all duration-1000 ease-out ${
              cardsReveal.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="bg-card/80 dark:bg-slate-800/80 backdrop-blur-sm border-border/50 dark:border-slate-700/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base dark:text-white">Email</h3>
                    <a
                      href="mailto:turjoy144@gmail.com"
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      turjoy144@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 dark:bg-slate-800/80 backdrop-blur-sm border-border/50 dark:border-slate-700/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base dark:text-white">{t("contact.phone")}</h3>
                    <a
                      href="tel:+8801518961899"
                      className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      +880 1518 961899
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 dark:bg-slate-800/80 backdrop-blur-sm border-border/50 dark:border-slate-700/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base dark:text-white">{t("contact.location")}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {language === "en" ? "Dhaka, Bangladesh" : "ঢাকা, বাংলাদেশ"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/80 dark:bg-slate-800/80 backdrop-blur-sm border-border/50 dark:border-slate-700/60 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base dark:text-white">{t("contact.response")}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{t("contact.response.time")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <div className="flex gap-3 sm:gap-4">
              <Button variant="outline" size="lg" className="flex-1 text-sm sm:text-base" asChild>
                <a
                  href="https://wa.me/8801518961899"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" className="flex-1 text-sm sm:text-base" asChild>
                <a
                  href="https://www.facebook.com/profile.php?id=100087737575645"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Facebook
                </a>
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/80 dark:bg-slate-800/80 backdrop-blur-sm border-border/50 dark:border-slate-700/60 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <CardHeader className="pb-4">
              <CardTitle className="text-lg sm:text-xl dark:text-white">
                {language === "en" ? "Send a Message" : "��কটি বার্তা পাঠান"}
              </CardTitle>
              <CardDescription className="text-sm">
                {language === "en" 
                  ? "Fill out the form below and I'll get back to you as soon as possible."
                  : "নিচের ফর্মটি পূরণ করুন এবং আমি যত তাড়াতাড়�� সম্ভব আপনার সাথে যোগাযোগ করব।"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">
                    {language === "en" ? "Message Sent!" : "বার্তা পাঠানো হয়েছে!"}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {language === "en" 
                      ? "Thank you for reaching out. I'll respond within 24 hours."
                      : "যোগাযোগ করার জন্য ধন্যবাদ। আমি ২৪ ঘন্টার মধ্যে উত্তর দেব।"
                    }
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => setSubmitted(false)}
                  >
                    {language === "en" ? "Send Another Message" : "আরেকটি বার্তা পাঠান"}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <FieldGroup>
                    <Field>
                      <FieldLabel className="text-sm">{t("contact.name")}</FieldLabel>
                      <Input
                        placeholder={language === "en" ? "John Doe" : "আপনার নাম"}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-10"
                      />
                    </Field>
                    <Field>
                      <FieldLabel className="text-sm">{t("contact.email")}</FieldLabel>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="h-10"
                      />
                    </Field>
                    <Field>
                      <FieldLabel className="text-sm">{t("contact.phone.label")}</FieldLabel>
                      <Input
                        type="tel"
                        placeholder="+880 1XXX XXXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-10"
                      />
                    </Field>
                    <Field>
                      <FieldLabel className="text-sm">{t("contact.message")}</FieldLabel>
                      <Textarea
                        placeholder={language === "en" ? "Tell me about your project..." : "আপনার প্রজেক্ট সম্পর্কে বলুন..."}
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </Field>
                  </FieldGroup>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      language === "en" ? "Sending..." : "পাঠানো হচ্ছে..."
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        {t("contact.send")}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
