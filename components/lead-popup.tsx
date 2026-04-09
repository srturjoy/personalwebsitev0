"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field"
import { X, Sparkles, Gift } from "lucide-react"
import { cn } from "@/lib/utils"

export function LeadPopup() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Show popup after 10 seconds if not already shown in this session
    const hasShown = sessionStorage.getItem("leadPopupShown")
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        sessionStorage.setItem("leadPopupShown", "true")
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => {
      setIsOpen(false)
      setSubmitted(false)
      setFormData({ name: "", email: "", businessType: "" })
    }, 3000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Popup */}
      <Card className="relative w-full max-w-md shadow-2xl border-border/50 bg-card/95 backdrop-blur-xl animate-in fade-in zoom-in duration-300">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-4 h-4" />
        </Button>

        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl">
            <span className="gradient-text">{t("popup.title")}</span>
          </CardTitle>
          <CardDescription className="text-base">
            {t("popup.subtitle")}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-green-500" />
              </div>
              <p className="text-lg font-semibold">Thank you!</p>
              <p className="text-muted-foreground">We&apos;ll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <FieldGroup>
                <Field>
                  <FieldLabel>{t("popup.name")}</FieldLabel>
                  <Input
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel>{t("popup.email")}</FieldLabel>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel>{t("popup.business")}</FieldLabel>
                  <Select
                    value={formData.businessType}
                    onValueChange={(value) => setFormData({ ...formData, businessType: value })}
                  >
                    <SelectTrigger className="relative z-[101]">
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent className="z-[200]" position="popper" sideOffset={4}>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="realestate">Real Estate</SelectItem>
                      <SelectItem value="local">Local Business</SelectItem>
                      <SelectItem value="saas">Tech / SaaS</SelectItem>
                      <SelectItem value="agency">Agency</SelectItem>
                      <SelectItem value="personal">Personal Brand</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </FieldGroup>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : t("popup.submit")}
              </Button>

              <Button
                type="button"
                variant="ghost"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                {t("popup.close")}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
