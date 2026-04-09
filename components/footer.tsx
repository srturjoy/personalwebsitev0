"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react"
import { useState } from "react"

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100087737575645", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
]

const navLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.services", href: "/services" },
  { key: "nav.portfolio", href: "/portfolio" },
  { key: "nav.experience", href: "/experience" },
  { key: "nav.contact", href: "/contact" },
]

const services = [
  { en: "Facebook Ads Management", bn: "ফেসবুক অ্যাডস ম্যানেজমেন্ট" },
  { en: "Instagram Ads", bn: "ইনস্টাগ্রাম অ্যাডস" },
  { en: "Lead Generation", bn: "লিড জেনারেশন" },
  { en: "E-commerce Scaling", bn: "ই-কমার্স স্কেলিং" },
  { en: "Marketing Analytics", bn: "মার্কেটিং অ্যানালিটিক্স" },
]

export function Footer() {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setEmail("")
  }

  return (
    <footer className="bg-secondary/50 dark:bg-slate-900/80 border-t border-border dark:border-slate-800">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              {/* Glowing T Logo */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary rounded-xl blur-md opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-primary/90 to-accent flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg shadow-primary/30">
                  <span className="text-white font-bold text-xl" style={{ textShadow: "0 0 10px rgba(255,255,255,0.5)" }}>T</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg sm:text-xl dark:text-white leading-tight">
                  {language === "en" ? "Turjoy" : "তুর্জয়"}
                </span>
                <span className="text-xs text-muted-foreground">
                  {language === "en" ? "Siddiqur Rahman" : "সিদ্দিকুর রহমান"}
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground dark:text-gray-400 leading-relaxed text-sm sm:text-base">
              {t("footer.description")}
            </p>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-card hover:bg-primary/10 flex items-center justify-center transition-all duration-300 group hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4 dark:text-white">{t("footer.quicklinks")}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {t(link.key)}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4 dark:text-white">{t("services.title")}</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {language === "en" ? service.en : service.bn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="col-span-2 md:col-span-1 space-y-6">
            <div>
              <h3 className="font-semibold text-base sm:text-lg mb-4 dark:text-white">{t("contact.title")}</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:turjoy144@gmail.com"
                    className="flex items-start gap-2 sm:gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0" />
                    turjoy144@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+8801518961899"
                    className="flex items-start gap-2 sm:gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0" />
                    +880 1518 961899
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-2 sm:gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0" />
                    {language === "en" ? "Dhaka, Bangladesh" : "ঢাকা, বাংলাদেশ"}
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-sm mb-3 dark:text-white">{t("footer.newsletter")}</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder={t("footer.newsletter.placeholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-9 text-sm"
                  required
                />
                <Button type="submit" size="icon" className="h-9 w-9 shrink-0">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} Turjoy (Siddiqur Rahman). {t("footer.rights")}.
          </p>
          <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
