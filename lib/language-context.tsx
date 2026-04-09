"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "bn"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.portfolio": "Portfolio",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    
    // Hero Section
    "hero.greeting": "Hello, I'm",
    "hero.name": "Siddiqur Rahman",
    "hero.title": "Digital Marketing Strategist",
    "hero.subtitle": "Helping brands scale with performance marketing and data-driven strategies",
    "hero.cta.hire": "Hire Me",
    "hero.cta.project": "Start Project",
    "hero.cta.contact": "Contact Me",
    "hero.cta.whatsapp": "WhatsApp",
    
    // About
    "about.title": "About Me",
    "about.subtitle": "Digital Marketing Expert & Data Analyst",
    "about.description": "I'm Siddiqur Rahman, Owner & CEO of Boosting Agency BD, a passionate digital marketing strategist with expertise in performance marketing, data analytics, and brand growth strategies. With years of experience in Meta Ads, Google Ads, and comprehensive analytics, I help businesses achieve measurable results and sustainable growth.",
    "about.experience": "Years Experience",
    "about.clients": "Happy Clients",
    "about.projects": "Projects Completed",
    "about.campaigns": "Campaigns Managed",
    
    // Services
    "services.title": "Services",
    "services.subtitle": "Comprehensive Digital Marketing Solutions",
    "services.facebook.title": "Facebook Ads Management",
    "services.facebook.description": "Strategic Facebook advertising campaigns that drive conversions, increase brand awareness, and maximize ROI with advanced targeting.",
    "services.instagram.title": "Instagram Ads",
    "services.instagram.description": "Engaging Instagram ad campaigns designed to capture attention, build community, and drive sales through visual storytelling.",
    "services.lead.title": "Lead Generation Campaigns",
    "services.lead.description": "High-converting lead generation strategies that fill your pipeline with qualified prospects ready to become customers.",
    "services.ecommerce.title": "E-commerce Ads Scaling",
    "services.ecommerce.description": "Scaling e-commerce businesses through data-driven advertising strategies that increase sales and reduce acquisition costs.",
    "services.analytics.title": "Marketing Analytics",
    "services.analytics.description": "Comprehensive analytics and reporting that turn data into actionable insights for better marketing decisions.",
    "services.social.title": "Social Media Growth Strategy",
    "services.social.description": "Organic growth strategies that build engaged communities and establish your brand as an industry authority.",
    "services.google.title": "Google Ads Management",
    "services.google.description": "High-performance Google Ads campaigns including Search, Display, and Shopping that drive qualified traffic and maximize conversions.",
    "services.youtube.title": "YouTube Marketing",
    "services.youtube.description": "Strategic YouTube advertising and content marketing that builds brand awareness and drives engagement through video.",
    "services.aiAutomation.title": "AI Automation",
    "services.aiAutomation.description": "Intelligent automation solutions that streamline your marketing workflows, reduce manual tasks, and boost productivity.",
    "services.aiAgent.title": "AI Agent Build",
    "services.aiAgent.description": "Custom AI agents designed to handle customer inquiries, automate support, and enhance user experience 24/7.",
    "services.website.title": "Website Build",
    "services.website.description": "Modern, high-converting websites built with cutting-edge technology that look stunning and perform exceptionally.",
    "services.cta": "Get Started",
    
    // Portfolio
    "portfolio.title": "Portfolio",
    "portfolio.subtitle": "Case Studies & Success Stories",
    "portfolio.view": "View Case Study",
    
    // Experience
    "experience.title": "Experience",
    "experience.subtitle": "Professional Journey",
    "experience.present": "Present",
    
    // Contact
    "contact.title": "Get in Touch",
    "contact.subtitle": "Let's discuss your project",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.phone.label": "Phone Number",
    "contact.message": "Your Message",
    "contact.send": "Send Message",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.available": "Available",
    "contact.response": "Response Time",
    "contact.response.time": "Within 24 hours",
    
    // Lead Popup
    "popup.title": "Get a Free Marketing Strategy Consultation",
    "popup.subtitle": "Let's discuss how we can grow your business",
    "popup.name": "Your Name",
    "popup.email": "Your Email",
    "popup.business": "Business Type",
    "popup.submit": "Get Free Consultation",
    "popup.close": "Maybe Later",
    
    // Chatbot
    "chatbot.title": "Chat with Us",
    "chatbot.placeholder": "Type your message...",
    "chatbot.welcome": "Hi! I'm here to help you learn about our digital marketing services. How can I assist you today?",
    
    // Footer
    "footer.rights": "All Rights Reserved",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.description": "Digital Marketing Strategist helping brands scale with performance marketing and data-driven strategies.",
    "footer.quicklinks": "Quick Links",
    "footer.connect": "Connect",
    "footer.newsletter": "Newsletter",
    "footer.newsletter.placeholder": "Enter your email",
    "footer.newsletter.subscribe": "Subscribe",
    
    // Booking
    "booking.title": "Schedule a Meeting",
    "booking.subtitle": "Book a free consultation call",
    "booking.cta": "Book Now",
    "booking.description": "Ready to transform your digital presence? Let's discuss your goals and create a strategy tailored to your business.",
    "booking.benefits.1": "Free 30-minute consultation",
    "booking.benefits.2": "Custom strategy recommendations",
    "booking.benefits.3": "No commitment required",
    
    // Stats
    "stats.title": "Marketing Performance",
    "stats.leads": "Leads Generated",
    "stats.roas": "Average ROAS",
    "stats.spend": "Ad Spend Managed",
    "stats.growth": "Revenue Growth",
    
    // About Page
    "about.mystory": "My Story",
    "about.journey": "The Journey So Far",
    "about.story1": "My journey into digital marketing began with a simple curiosity about how online advertising works. What started as an interest quickly became a passion as I discovered the power of data-driven marketing to transform businesses.",
    "about.story2": "Over the years, I've had the privilege of working with businesses of all sizes, from local startups to established brands. Each project has taught me something new and reinforced my belief that great marketing is about understanding people, not just algorithms.",
    "about.story3": "Today, as the Owner & CEO of Boosting Agency BD, I lead a team dedicated to helping businesses achieve their growth goals through strategic, data-driven marketing. We don't just run ads – we build marketing systems that deliver consistent, measurable results.",
    "about.expertise": "Expertise",
    "about.skills": "Skills & Tools",
    "about.skills.desc": "A comprehensive toolkit for modern digital marketing",
    "about.services": "Services",
    "about.whatioffer": "What I Offer",
    "about.values": "Values",
    "about.approach": "My Approach",
    "about.cta.ready": "Ready to Work Together?",
    "about.cta.desc": "Let's discuss how I can help your business achieve its marketing goals.",
    "about.viewwork": "View My Work",
    "about.getintouch": "Get in Touch",
    
    // Experience Page
    "experience.stats.years": "Years Experience",
    "experience.stats.clients": "Happy Clients",
    "experience.stats.campaigns": "Campaigns Managed",
    "experience.stats.adspend": "Ad Spend Managed",
    "experience.professional": "Professional Journey",
    "experience.career": "Career Timeline",
    "experience.education": "Education",
    "experience.certifications": "Certifications",
    "experience.technical": "Technical Stack",
    "experience.cta.ready": "Ready to Add to This Story?",
    "experience.cta.desc": "Let's discuss how my experience can benefit your business.",
    
    // Portfolio Page
    "portfolio.viewcase": "View Case Study",
    "portfolio.featured": "Featured",
    "portfolio.challenge": "The Challenge",
    "portfolio.strategy": "My Strategy",
    "portfolio.execution": "Execution & Key Tactics",
    "portfolio.results": "Results & Key Learnings",
    "portfolio.close": "Close",
    "portfolio.filter.all": "All",
    
    // Services Page
    "services.process": "Process",
    "services.howwork": "How I Work",
    "services.discovery": "Discovery & Strategy",
    "services.discovery.desc": "Understanding your business, goals, and target audience to create a tailored strategy.",
    "services.implementation": "Implementation",
    "services.implementation.desc": "Executing campaigns with precision, optimizing in real-time for best results.",
    "services.analysis": "Analysis & Optimization",
    "services.analysis.desc": "Continuous monitoring and data-driven adjustments to maximize ROI.",
    "services.growth": "Scaling & Growth",
    "services.growth.desc": "Expanding successful strategies to accelerate your business growth.",
    "services.cta.ready": "Ready to Transform Your Marketing?",
    "services.cta.desc": "Let's discuss your goals and create a custom strategy for your business.",
    
    // Contact Page
    "contact.methods": "Contact Methods",
    "contact.methods.desc": "Choose your preferred way to reach out",
    "contact.form.title": "Send a Message",
    "contact.form.desc": "Fill out the form below and I'll get back to you as soon as possible.",
    "contact.availability": "Availability",
    "contact.responsetime": "Response Time",
    "contact.within24": "Within 24 hours",
    "contact.workinghours": "Working Hours",
    "contact.workingdays": "Sun - Thu, 9 AM - 6 PM (BST)",
    "contact.freeconsult": "Free Consultation",
    "contact.30min": "30-minute video call",
    "contact.prefer": "Prefer to Talk?",
    "contact.schedule": "Schedule a call",
  },
  bn: {
    // Navigation
    "nav.home": "হোম",
    "nav.about": "সম্পর্কে",
    "nav.services": "সেবাসমূহ",
    "nav.portfolio": "পোর্টফোলিও",
    "nav.experience": "অভিজ্ঞতা",
    "nav.contact": "যোগাযোগ",
    
    // Hero Section
    "hero.greeting": "হ্যালো, আমি",
    "hero.name": "সিদ্দিকুর রহমান",
    "hero.title": "ডিজিটাল মার্কেটিং স্ট্র্যাটেজিস্ট",
    "hero.subtitle": "পারফরম্যান্স মার্কেটিং এবং ডেটা-চালিত কৌশল দিয়ে ব্র্যান্ড স্কেল করতে সাহায্য করি",
    "hero.cta.hire": "নিয়োগ করুন",
    "hero.cta.project": "প্রজেক্ট শুরু",
    "hero.cta.contact": "যোগাযোগ করুন",
    "hero.cta.whatsapp": "হোয়াটসঅ্যাপ",
    
    // About
    "about.title": "আমার সম্পর্কে",
    "about.subtitle": "ডিজিটাল মার্কেটিং বিশেষজ্ঞ ও ডেটা বিশ্লেষক",
    "about.description": "আমি সিদ্দিকুর রহমান, বুস্টিং এজেন্সি বিডি-এর মালিক ও সিইও। আমি একজন আবেগী ডিজিটাল মার্কেটিং স্ট্র্যাটেজিস্ট যার পারফরম্যান্স মার্কেট���ং, ডেটা অ্যানালিটিক্স এবং ব্র্যান্ড গ্রোথ স্ট্র্যাটেজিতে দক্ষতা রয়েছে। মেটা অ্যাডস, গুগল অ্যাডস এবং ব্যাপক অ্যানালিটিক্সে বছরের অভিজ্ঞতা নিয়ে, আমি ব্যবসাগুলিকে পরিমাপযোগ্য ফলাফল এবং টেকসই বৃদ্ধি অর্জনে সাহায্য করি।",
    "about.experience": "বছরের অভিজ্ঞতা",
    "about.clients": "সন্তুষ্ট ক্লায়েন্ট",
    "about.projects": "সম্পন্ন প্রজেক্ট",
    "about.campaigns": "পরিচালিত ক্যাম্পেইন",
    
    // Services
    "services.title": "সেবাসমূহ",
    "services.subtitle": "সম্পূর্ণ ডিজিটাল মার্কেটিং সমাধান",
    "services.facebook.title": "ফেসবুক অ্যাডস ম্যানেজমেন্ট",
    "services.facebook.description": "কৌশলগত ফেসবুক বিজ্ঞাপন ক্যাম্পেইন যা কনভার্শন বাড়ায়, ব্র্যান্ড সচেতনতা বৃদ্ধি করে এবং উন্নত টার্গেটিং দিয়ে ROI সর্বাধিক করে।",
    "services.instagram.title": "ইনস্টাগ্রাম অ্যাডস",
    "services.instagram.description": "আকর্ষণীয় ইনস্টাগ্রাম বিজ্ঞাপন ক্যাম্পেইন যা মনোযোগ আকর্ষণ করে, কমিউনিটি তৈরি করে এবং ভিজ্যুয়াল স্টোরিটেলিংয়ের মাধ্যমে বিক্রয় বাড়ায়।",
    "services.lead.title": "লিড জেনারেশন ক্যাম্পেইন",
    "services.lead.description": "উচ্চ-রূপান্তরকারী লিড জেনারেশন কৌশল যা আপনার পাইপলাইন যোগ্য সম্ভাব্য গ্রাহকদের দিয়ে পূরণ করে।",
    "services.ecommerce.title": "ই-কমার্স অ্যাডস স্কেলিং",
    "services.ecommerce.description": "ডেটা-চালিত বিজ্ঞাপন কৌশলের মাধ্যমে ই-কমার্স ব্যবসা স্কেলিং যা বিক্রয় বাড়ায় এবং অধিগ্রহণ খরচ কমায়।",
    "services.analytics.title": "মার্কেটিং অ্যানালিটিক্স",
    "services.analytics.description": "ব্যাপক অ্যানালিটিক্স এবং রিপোর্টিং যা ডেটাকে ভালো মার্কেটিং সিদ্ধান্তের জন্য কার্যকরী অন্তর্দৃষ্টিতে পরিণত করে।",
    "services.social.title": "সোশ্যাল মিডিয়া গ্রোথ স্ট্র্যাটেজি",
    "services.social.description": "অর্গানিক গ্রোথ কৌশল যা এনগেজড কমিউনিটি তৈরি করে এবং আপনার ব্র্যান্ডকে ইন্ডাস্ট্রি অথরিটি হিসেবে প্রতিষ্ঠিত করে।",
    "services.google.title": "গুগল অ্যাডস ম্যানেজমেন্ট",
    "services.google.description": "উচ্চ-পারফরম্যান্স গুগল অ্যাডস ক্যাম্পেইন যা সার্চ, ডিসপ্লে এবং শপিং অন্তর্ভুক্ত করে এবং যোগ্য ট্রাফিক আনে।",
    "services.youtube.title": "ইউটিউব মার্কেটিং",
    "services.youtube.description": "কৌশলগত ইউটিউব বিজ্ঞাপন এবং কন্টেন্ট মার্কেটিং যা ভিডিওর মাধ্যমে ব্র্যান্ড সচেতনতা তৈরি করে।",
    "services.aiAutomation.title": "AI অটোমেশন",
    "services.aiAutomation.description": "বুদ্ধিমান অটোমেশন সমাধান যা আপনার মা��্কেটিং ওয়ার্কফ্লো সুগম করে এবং উৎপাদনশীলতা বাড়ায়।",
    "services.aiAgent.title": "AI এজেন্ট বিল্ড",
    "services.aiAgent.description": "কাস্টম AI এজেন্ট যা গ্রাহক জিজ্ঞাসা সামলায়, সাপোর্ট অটোমেট করে এবং ২৪/৭ ইউজার এক্সপেরিয়েন্স উন্নত করে।",
    "services.website.title": "ওয়েবসাইট বিল্ড",
    "services.website.description": "আধুনিক, উচ্চ-রূপান্তরকারী ওয়েবসাইট যা অত্যাধুনিক প্রযুক্তি দিয়ে তৈরি এবং অসাধারণ পারফর্ম করে।",
    "services.cta": "শুরু করুন",
    
    // Portfolio
    "portfolio.title": "পোর্টফোলিও",
    "portfolio.subtitle": "কেস স্টাডি ও সফলতার গল্প",
    "portfolio.view": "কেস স্টাডি দেখুন",
    
    // Experience
    "experience.title": "অভিজ্ঞতা",
    "experience.subtitle": "পেশাদার যাত্রা",
    "experience.present": "বর্তমান",
    
    // Contact
    "contact.title": "যোগাযোগ করুন",
    "contact.subtitle": "আপনার প্রজেক্ট নিয়ে আলোচনা করি",
    "contact.name": "আপনার নাম",
    "contact.email": "আপনার ইমেইল",
    "contact.phone.label": "ফোন নম্বর",
    "contact.message": "আপনার বার্তা",
    "contact.send": "বার্তা পাঠান",
    "contact.phone": "ফোন",
    "contact.location": "ঠিকানা",
    "contact.available": "উপলব্ধ",
    "contact.response": "প্রতিক্রিয়ার সময়",
    "contact.response.time": "২৪ ঘন্টার মধ্যে",
    
    // Lead Popup
    "popup.title": "বিনামূল্যে মার্কেটিং কৌশল পরামর্শ পান",
    "popup.subtitle": "আসুন আলোচনা করি কিভাবে আমরা আপনার ব্যবসা ��াড়াতে পারি",
    "popup.name": "আপনার নাম",
    "popup.email": "আপনার ইমেইল",
    "popup.business": "ব্যবসার ধরন",
    "popup.submit": "বিনামূল্যে পরামর্শ নিন",
    "popup.close": "পরে হবে",
    
    // Chatbot
    "chatbot.title": "আমাদের সাথে চ্যাট করুন",
    "chatbot.placeholder": "আপনার বার্তা লিখুন...",
    "chatbot.welcome": "হ্যালো! আমি আমাদের ডিজিটাল মার্কেটিং সেবা সম্পর্কে জানতে সাহায্য করতে এখানে আছি। আজ আমি কিভাবে আপনাকে সাহায্য করতে পারি?",
    
    // Footer
    "footer.rights": "সর্বস্বত্ব সংরক্ষিত",
    "footer.privacy": "গোপনীয়তা নীতি",
    "footer.terms": "সেবার শর্তাবলী",
    "footer.description": "ডিজিটাল মার্কেটিং স্ট্র্যাটেজিস্ট যিনি পারফরম্যান্স মার্কেটিং এবং ডেটা-চালিত কৌশল দিয়ে ব্র্যান্ড স্কেল করতে সাহায্য করেন।",
    "footer.quicklinks": "দ্রুত লিঙ্ক",
    "footer.connect": "সংযোগ",
    "footer.newsletter": "নিউজলেটার",
    "footer.newsletter.placeholder": "আপনার ইমেইল লিখুন",
    "footer.newsletter.subscribe": "সাবস্ক্রাইব",
    
    // Booking
    "booking.title": "মিটিং শিডিউল করুন",
    "booking.subtitle": "বিনামূল্যে পরামর্শ কল বুক করুন",
    "booking.cta": "এখনই বুক করুন",
    "booking.description": "আপনার ডিজিটাল উপস্থিতি রূপান্তর করতে প্রস্তুত? আসুন আপনার লক্ষ্য নিয়ে আলোচনা করি এবং আপনার ব্যবসার জন্য একটি কাস্টম কৌশল তৈরি করি।",
    "booking.benefits.1": "বিনামূল্যে ৩০ মিনিটের পরামর্শ",
    "booking.benefits.2": "কাস্টম কৌশল সুপারিশ",
    "booking.benefits.3": "কোনো প্রতিশ্রুতি প্রয়োজন নেই",
    
    // Stats
    "stats.title": "মার্কেটিং পারফরম্যান্স",
    "stats.leads": "লিড জেনারেটেড",
    "stats.roas": "গড় ROAS",
    "stats.spend": "অ্যাড স্পেন্ড ম্যানেজড",
    "stats.growth": "রেভিনিউ গ্রোথ",
    
    // About Page
    "about.mystory": "আমার গল্প",
    "about.journey": "এখন পর্যন্ত যাত্রা",
    "about.story1": "ডিজিটাল মার্কেটিংয়ে আমার যাত্রা শুরু হয়েছিল অনলাইন বিজ্ঞাপন কীভাবে কাজ করে তা নিয়ে সাধারণ কৌতূহল থেকে। যা আগ্রহ হিসেবে শুরু হয়েছিল তা দ্রুত আবেগে পরিণত হয়েছে যখন আমি ডেটা-চালিত মার্কেটিংয়ের ব্যবসা রূপান্তরের শক্তি আবিষ্কার করলাম।",
    "about.story2": "বছরের পর বছর ধরে, আমি ছোট স্টার্টআপ থেকে প্রতিষ্ঠিত ব্র্যান্ড পর্যন্ত সব আকারের ব্যবসার সাথে কাজ করার সুযোগ পেয়েছি। প্রতিটি প্রজেক্ট আমাকে নতুন কিছু শিখিয়েছে এবং আমার বিশ্বাসকে শক্তিশালী করেছে যে দুর্দান্ত মার্কেটিং মানুষকে বোঝা, শুধু অ্যালগরিদম নয়।",
    "about.story3": "আজ, বুস্টিং এজেন্সি বিডি-এর মালিক ও সিইও হিসেবে, আমি একটি টিম নেতৃত্ব দিই যা কৌশলগত, ডেটা-চালিত মার্কেটিংয়ের মাধ্যমে ব্যবসাগুলিকে তাদের বৃদ্ধির লক্ষ্য অর্জনে সাহায্য করতে নিবেদিত। আমরা শুধু বিজ্ঞাপন চালাই না – আমরা মার্কেটিং সিস্টেম তৈরি করি যা ধারাবাহিক, পরিমাপযোগ্য ফলাফল প্রদান করে।",
    "about.expertise": "দক্ষতা",
    "about.skills": "দক্ষতা ও সরঞ্জাম",
    "about.skills.desc": "আধুনিক ডিজিটাল মার্কেটিংয়ের জন্য একটি সম্পূর্ণ টুলকিট",
    "about.services": "সেবাসমূহ",
    "about.whatioffer": "আমি যা অফার করি",
    "about.values": "মূল্যবোধ",
    "about.approach": "আমার পদ্ধতি",
    "about.cta.ready": "একসাথে কাজ করতে প্রস্তুত?",
    "about.cta.desc": "আসুন আলোচনা করি কিভাবে আমি আপনার ব্যবসার মার্কেটিং লক্ষ্য অর্জনে সাহায্য করতে পারি।",
    "about.viewwork": "আমার কাজ দেখুন",
    "about.getintouch": "যোগাযোগ করুন",
    
    // Experience Page
    "experience.stats.years": "বছরের অভিজ্ঞতা",
    "experience.stats.clients": "সন্তুষ্ট ক্লায়েন্ট",
    "experience.stats.campaigns": "পরিচালিত ক্যাম্পেইন",
    "experience.stats.adspend": "অ্যাড স্পেন্ড ম্যানেজড",
    "experience.professional": "পেশাদার যাত্রা",
    "experience.career": "ক্যারিয়ার টাইমলাইন",
    "experience.education": "শিক্ষা",
    "experience.certifications": "সার্টিফিকেশন",
    "experience.technical": "টেকনিক্যাল স্ট্যাক",
    "experience.cta.ready": "এই গল্পে যোগ করতে প্রস্তুত?",
    "experience.cta.desc": "আসুন আলোচনা করি কিভাবে আমার অভিজ্ঞতা আপনার ব্যবসার উপকারে আসতে পারে।",
    
    // Portfolio Page
    "portfolio.viewcase": "কেস স্টাডি দেখুন",
    "portfolio.featured": "ফিচার্ড",
    "portfolio.challenge": "চ্যালেঞ্জ",
    "portfolio.strategy": "আমার কৌশল",
    "portfolio.execution": "বাস্তবায়ন ও মূল কৌশল",
    "portfolio.results": "ফলাফল ও মূল শিক্ষা",
    "portfolio.close": "বন্ধ করুন",
    "portfolio.filter.all": "সব",
    
    // Services Page
    "services.process": "প্রক্রিয়া",
    "services.howwork": "আমি কিভাবে কাজ করি",
    "services.discovery": "আবিষ্কার ও কৌশল",
    "services.discovery.desc": "আপনার ব্যবসা, লক্ষ্য এবং টার্গেট অডিয়েন্স বুঝে একটি কাস্টম কৌশল তৈরি করা।",
    "services.implementation": "বাস্তবায়ন",
    "services.implementation.desc": "সেরা ফলাফলের জন্য রিয়েল-টাইমে অপ্টিমাইজ করে নির্ভুলভাবে ক্যাম্পেইন চালানো।",
    "services.analysis": "বিশ্লেষণ ও অপ্টিমাইজেশন",
    "services.analysis.desc": "ROI সর্বাধিক করতে ক্রমাগত মনিটরিং এবং ডেটা-চালিত সমন্বয়।",
    "services.growth": "স্কেলিং ও বৃদ্ধি",
    "services.growth.desc": "আপনার ব্যবসার বৃদ্ধি ত্বরান্বিত করতে সফল কৌশল প্রসারিত করা।",
    "services.cta.ready": "আপনার মার্কেটিং রূপান্তর করতে প্রস্তুত?",
    "services.cta.desc": "আসুন আপনার লক্ষ্য নিয়ে আলোচনা করি এবং আপনার ব্যবসার জন্য একটি কাস্টম কৌশল তৈরি করি।",
    
    // Contact Page
    "contact.methods": "যোগাযোগের মাধ্যম",
    "contact.methods.desc": "যোগাযোগের জন্য আপনার পছন্দের উপায় বেছে নিন",
    "contact.form.title": "একটি বার্তা পাঠান",
    "contact.form.desc": "নিচের ফর্মটি পূরণ করুন এবং আমি যত তাড়াতাড়ি সম্ভব আপনার সাথে যোগাযোগ করব।",
    "contact.availability": "উপলব্ধতা",
    "contact.responsetime": "প্রতিক্রিয়ার সময়",
    "contact.within24": "২৪ ঘন্টার মধ্যে",
    "contact.workinghours": "কাজের সময়",
    "contact.workingdays": "রবি - বৃহস্পতি, সকাল ৯টা - সন্ধ্যা ৬টা (BST)",
    "contact.freeconsult": "বিনামূল্যে পরামর্শ",
    "contact.30min": "৩০ মিনিটের ভিডিও কল",
    "contact.prefer": "কথা বলতে চান?",
    "contact.schedule": "একটি কল শিডিউল করুন",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "en" || saved === "bn")) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
