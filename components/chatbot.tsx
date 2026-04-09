"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bot, Send, X, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  role: "user" | "assistant"
  content: string
}

// Custom AI Chip Icon
function AIChipIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      {/* Chip body */}
      <rect x="6" y="6" width="12" height="12" rx="2" className="fill-current opacity-20" />
      <rect x="6" y="6" width="12" height="12" rx="2" />
      
      {/* Brain/AI pattern inside */}
      <circle cx="10" cy="10" r="1.5" className="fill-current" />
      <circle cx="14" cy="10" r="1.5" className="fill-current" />
      <circle cx="12" cy="14" r="1.5" className="fill-current" />
      <path d="M10 10 L12 14 M14 10 L12 14" strokeWidth="1" />
      
      {/* Connection pins */}
      <line x1="9" y1="6" x2="9" y2="3" />
      <line x1="12" y1="6" x2="12" y2="3" />
      <line x1="15" y1="6" x2="15" y2="3" />
      <line x1="9" y1="18" x2="9" y2="21" />
      <line x1="12" y1="18" x2="12" y2="21" />
      <line x1="15" y1="18" x2="15" y2="21" />
      <line x1="6" y1="9" x2="3" y2="9" />
      <line x1="6" y1="12" x2="3" y2="12" />
      <line x1="6" y1="15" x2="3" y2="15" />
      <line x1="18" y1="9" x2="21" y2="9" />
      <line x1="18" y1="12" x2="21" y2="12" />
      <line x1="18" y1="15" x2="21" y2="15" />
    </svg>
  )
}

const quickResponses: Record<string, string> = {
  services: "I offer comprehensive digital marketing services including Facebook & Instagram Ads Management, Lead Generation Campaigns, E-commerce Ads Scaling, Marketing Analytics, and Social Media Growth Strategies. Would you like to know more about any specific service?",
  pricing: "My pricing varies based on the scope and requirements of each project. I offer flexible packages starting from consultation to full-service management. Would you like to schedule a free consultation to discuss your specific needs?",
  experience: "I have 5+ years of experience in digital marketing. Currently, I'm the Owner & CEO of Boosting Agency BD. I've previously worked with Algonest and Robo Tech Valley, managing campaigns that generated millions in revenue for clients.",
  contact: "You can reach me at turjoy144@gmail.com or call +880 1518 961899. You can also click the WhatsApp button to message me directly!",
  default: "Thank you for your interest! I specialize in performance marketing, data analytics, and brand growth strategies. How can I help you today? You can ask about my services, experience, pricing, or how to get in touch.",
}

export function Chatbot() {
  const { t, language } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: t("chatbot.welcome") },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const getResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase()
    if (message.includes("service") || message.includes("offer") || message.includes("do")) {
      return quickResponses.services
    }
    if (message.includes("price") || message.includes("cost") || message.includes("rate") || message.includes("charge")) {
      return quickResponses.pricing
    }
    if (message.includes("experience") || message.includes("work") || message.includes("background")) {
      return quickResponses.experience
    }
    if (message.includes("contact") || message.includes("reach") || message.includes("email") || message.includes("phone")) {
      return quickResponses.contact
    }
    return quickResponses.default
  }

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsTyping(true)

    // Simulate typing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const response = getResponse(userMessage)
    setIsTyping(false)
    setMessages((prev) => [...prev, { role: "assistant", content: response }])
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Toggle Button - Fixed bottom-right, below WhatsApp */}
<Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed z-50",
          // Fixed to bottom-right corner, below WhatsApp button
          "bottom-6 right-4 sm:right-6",
          "w-14 h-14 rounded-full",
          "bg-gradient-to-br from-primary via-primary to-accent hover:from-primary/90 hover:to-accent/90",
          "shadow-xl hover:shadow-2xl",
          "transition-all duration-300 hover:scale-105",
          "border border-white/20"
        )}
        style={{
          boxShadow: "0 0 25px rgba(59, 130, 246, 0.4)",
        }}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <AIChipIcon className="w-7 h-7" />
        )}
        
        {/* Pulse animation when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
        )}
      </Button>

      {/* Chat Window - Positioned above the buttons */}
      {isOpen && (
        <Card className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100%-2rem)] sm:w-96 max-w-[400px] shadow-2xl border-border/50 dark:border-slate-700/50 bg-card/95 dark:bg-slate-900/95 backdrop-blur-xl">
          <CardHeader className="pb-3 border-b border-border dark:border-slate-700">
            <CardTitle className="flex items-center gap-2 text-lg dark:text-white">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary" />
              </div>
              {language === "en" ? "AI Assistant" : "AI সহকারী"}
              <Sparkles className="w-4 h-4 text-primary ml-auto animate-pulse" />
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex",
                      message.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                        message.role === "user"
                          ? "bg-primary text-primary-foreground rounded-br-none"
                          : "bg-secondary dark:bg-slate-800 text-secondary-foreground dark:text-gray-200 rounded-bl-none"
                      )}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-secondary dark:bg-slate-800 rounded-2xl rounded-bl-none px-4 py-2">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                        <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border dark:border-slate-700">
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={language === "en" ? "Ask me anything..." : "আমাকে কিছু জিজ্ঞাসা করুন..."}
                  className="flex-1 dark:bg-slate-800 dark:border-slate-700"
                />
                <Button size="icon" onClick={handleSend} disabled={!input.trim()}>
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
