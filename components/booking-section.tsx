"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { Calendar, Clock, Video, CheckCircle, Check } from "lucide-react"

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
]

const benefits = [
  { en: "Free 30-minute consultation", bn: "বিনামূল্যে ৩০ মিনিটের পরামর্শ" },
  { en: "Custom strategy recommendations", bn: "কাস্টম কৌশল সুপারিশ" },
  { en: "No commitment required", bn: "কোনো প্রতিশ্রুতি প্রয়োজন নেই" },
]

export function BookingSection() {
  const { t, language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section className="py-20 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Info */}
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  {language === "en" ? "Book a Call" : "কল বুক করুন"}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">
                  <span className="gradient-text">{t("booking.title")}</span>
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground">
                  {t("booking.description")}
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Video className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">
                      {language === "en" ? "Free Video Consultation" : "বিনামূল্যে ভিডিও পরামর্শ"}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {language === "en" ? "30-minute strategy call" : "৩০ মিনিটের কৌশল কল"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">
                      {language === "en" ? "Flexible Scheduling" : "নমনীয় শিডিউলিং"}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {language === "en" ? "Pick a time that works for you" : "আপনার জন্য উপযুক্ত সময় বেছে নিন"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base">
                      {language === "en" ? "Quick Response" : "দ্রুত প্রতিক্রিয়া"}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {language === "en" ? "Confirmation within 24 hours" : "২৪ ঘন্টার মধ্যে নিশ্চিতকরণ"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Benefits List */}
              <div className="space-y-2">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                    <span>{language === "en" ? benefit.en : benefit.bn}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <Card className="bg-card/80 backdrop-blur-sm border-border/50 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg sm:text-xl">{t("booking.cta")}</CardTitle>
                <CardDescription className="text-sm">
                  {language === "en" ? "Fill in your details and preferred time" : "আপনার বিবরণ এবং পছন্দের সময় পূরণ করুন"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-6 sm:py-8">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">
                      {language === "en" ? "Booking Requested!" : "বুকিং অনুরোধ করা হয়েছে!"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === "en" 
                        ? "I'll confirm your meeting time within 24 hours."
                        : "আমি ২৪ ঘন্টার মধ্যে আপনার মিটিংয়ের সময় নিশ্চিত করব।"
                      }
                    </p>
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
                        <FieldLabel className="text-sm">
                          {language === "en" ? "Preferred Date" : "পছন্দের তারিখ"}
                        </FieldLabel>
                        <Input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="h-10"
                        />
                      </Field>
                      <Field>
                        <FieldLabel className="text-sm">
                          {language === "en" ? "Preferred Time" : "পছন্দের সময়"}
                        </FieldLabel>
                        <Select
                          value={formData.time}
                          onValueChange={(value) => setFormData({ ...formData, time: value })}
                        >
                          <SelectTrigger className="h-10">
                            <SelectValue placeholder={language === "en" ? "Select time slot" : "সময় স্লট নির্বাচন করুন"} />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </Field>
                    </FieldGroup>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting 
                        ? (language === "en" ? "Submitting..." : "জমা দেওয়া হচ্ছে...") 
                        : t("booking.cta")
                      }
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
