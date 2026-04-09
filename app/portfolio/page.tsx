"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ArrowRight, 
  ExternalLink, 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target,
  Lightbulb,
  Rocket,
  CheckCircle,
  BarChart3,
  X,
  ChevronRight,
  Zap,
  Bot,
  Search,
  Share2,
  Youtube,
  Smartphone,
  FileText,
  MapPin,
  Database,
  ShoppingCart,
  Video,
  Globe
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/language-context"

const categories = {
  en: ["All", "E-commerce", "Lead Gen", "SEO", "AI & Automation", "PPC", "Social Media", "Content", "Analytics", "Mobile"],
  bn: ["সব", "ই-কমার্স", "লিড জেন", "SEO", "AI ও অটোমেশন", "PPC", "সোশ্যাল মিডিয়া", "কন্টেন্ট", "অ্যানালিটিক্স", "মোবাইল"]
}

const projects = [
  {
    id: 1,
    title: "Fashion E-commerce Revenue Explosion",
    subtitle: "From $50K to $500K Monthly Revenue in 90 Days",
    description: "A complete digital transformation for a struggling fashion brand, implementing advanced Facebook and Google Ads strategies with AI-powered audience optimization.",
    image: "/images/portfolio/fashion-store.jpg",
    category: "E-commerce",
    tags: ["Meta Ads", "Google Ads", "E-commerce", "Retargeting"],
    featured: true,
    metrics: [
      { icon: TrendingUp, label: "ROAS", value: "10x", color: "text-green-500" },
      { icon: DollarSign, label: "Revenue", value: "$500K/mo", color: "text-blue-500" },
      { icon: Target, label: "Growth", value: "900%", color: "text-purple-500" },
      { icon: Users, label: "New Customers", value: "15K+", color: "text-cyan-500" },
    ],
    caseStudy: {
      challenge: {
        title: "The Challenge",
        content: "StyleVogue, a mid-tier fashion e-commerce brand, was struggling with stagnant growth despite a quality product line. Their existing campaigns were generating traffic but failing to convert. With a monthly revenue of just $50K and a concerning CAC of $45, they were at a crossroads. The brand faced fierce competition from fast-fashion giants and needed a complete strategic overhaul to survive and thrive in the competitive online fashion space."
      },
      strategy: {
        title: "My Strategy",
        content: "I developed a comprehensive 3-phase funnel strategy. Phase 1 focused on rebuilding their pixel data with micro-conversions and implementing server-side tracking for iOS 14.5+ accuracy. Phase 2 involved creating hyper-segmented custom audiences based on purchase behavior, browse patterns, and engagement levels. I built 15 unique lookalike audiences from their top 1% customers. Phase 3 deployed dynamic creative optimization with AI-generated ad variations tested across 50+ creative combinations."
      },
      execution: {
        title: "Execution & Key Tactics",
        points: [
          "Implemented Advantage+ Shopping campaigns with $500K+ monthly spend optimization",
          "Created 200+ dynamic product ad variations with AI-assisted copywriting",
          "Built automated retargeting sequences with 7-day, 14-day, and 30-day windows",
          "Deployed cross-platform attribution using Meta Conversions API and Google Enhanced Conversions",
          "Established real-time bid adjustments based on inventory levels and profit margins"
        ]
      },
      results: {
        title: "Results & Key Learnings",
        content: "Within 90 days, monthly revenue exploded from $50K to $500K - a 900% increase. ROAS improved from 1.8x to a consistent 10x across all campaigns. Customer acquisition cost dropped by 65% from $45 to $15.75. Average order value increased by 40% through strategic upselling and bundle offers. The brand now dominates their niche with a 23% market share increase.",
        keyMetrics: [
          { label: "Revenue Growth", value: "900%", trend: "up" },
          { label: "ROAS Achievement", value: "10x", trend: "up" },
          { label: "CAC Reduction", value: "65%", trend: "down" },
          { label: "AOV Increase", value: "40%", trend: "up" }
        ]
      }
    }
  },
  {
    id: 2,
    title: "B2B SaaS Lead Generation Machine",
    subtitle: "5,000+ Qualified Leads with 40% Lower CPL",
    description: "Transformed a struggling B2B SaaS company's lead generation with multi-touch attribution, AI-powered lead scoring, and precision-targeted LinkedIn campaigns.",
    image: "/images/portfolio/saas-dashboard.jpg",
    category: "Lead Gen",
    tags: ["LinkedIn Ads", "Meta Ads", "Lead Scoring", "Automation"],
    featured: true,
    metrics: [
      { icon: Users, label: "Qualified Leads", value: "5,000+", color: "text-green-500" },
      { icon: DollarSign, label: "CPL Reduction", value: "40%", color: "text-blue-500" },
      { icon: Target, label: "Conversion Rate", value: "35%", color: "text-purple-500" },
      { icon: TrendingUp, label: "Pipeline Value", value: "$2.5M", color: "text-cyan-500" },
    ],
    caseStudy: {
      challenge: {
        title: "The Challenge",
        content: "CloudMetrics, a B2B analytics SaaS platform, was burning through their $80K monthly ad budget with diminishing returns. Their sales team was overwhelmed with 2,000+ monthly leads, but only 3% were converting to demos. The cost per qualified lead had ballooned to $180, making their unit economics unsustainable. They needed to dramatically improve lead quality while scaling volume."
      },
      strategy: {
        title: "My Strategy",
        content: "I implemented a complete lead qualification overhaul using predictive analytics. First, I analyzed their existing customer data to identify the 15 key attributes that predicted successful conversions. Then, I built custom audiences on LinkedIn targeting decision-makers at companies matching their ideal customer profile. I created a content-led funnel with gated resources that pre-qualified interest and intent before leads reached sales."
      },
      execution: {
        title: "Execution & Key Tactics",
        points: [
          "Deployed LinkedIn Matched Audiences targeting 50K+ decision-makers at ideal companies",
          "Created 12 gated content pieces aligned to each stage of the buyer journey",
          "Built automated lead scoring system with 25+ behavioral and firmographic signals",
          "Implemented multi-touch attribution across LinkedIn, Meta, Google, and organic channels",
          "Established nurture sequences with 45% average open rates and 12% click rates"
        ]
      },
      results: {
        title: "Results & Key Learnings",
        content: "In 6 months, we generated 5,000+ marketing qualified leads while reducing CPL by 40% from $180 to $108. Lead-to-demo conversion rate jumped from 3% to 35%. The sales team reported leads were significantly more educated about the product. Pipeline value increased by $2.5M, and the company closed $800K in new ARR directly attributed to the campaigns.",
        keyMetrics: [
          { label: "MQL Volume", value: "5,000+", trend: "up" },
          { label: "CPL Reduction", value: "40%", trend: "down" },
          { label: "Demo Rate", value: "35%", trend: "up" },
          { label: "New ARR", value: "$800K", trend: "up" }
        ]
      }
    }
  },
  {
    id: 3,
    title: "SEO Transformation: 0 to 500K Organic Traffic",
    subtitle: "Dominating Google Search in a Competitive Niche",
    description: "A comprehensive SEO overhaul that took a finance blog from obscurity to industry authority, ranking #1 for 200+ high-value keywords.",
    image: "/images/portfolio/seo-growth.jpg",
    category: "SEO",
    tags: ["Technical SEO", "Content Strategy", "Link Building", "Analytics"],
    featured: false,
    metrics: [
      { icon: TrendingUp, label: "Organic Traffic", value: "500K/mo", color: "text-green-500" },
      { icon: Target, label: "#1 Rankings", value: "200+", color: "text-blue-500" },
      { icon: DollarSign, label: "Traffic Value", value: "$1.2M/mo", color: "text-purple-500" },
      { icon: Users, label: "Domain Authority", value: "72", color: "text-cyan-500" },
    ],
    caseStudy: {
      challenge: {
        title: "The Challenge",
        content: "FinanceWise, a personal finance education platform, had invested heavily in content but was struggling with only 5,000 monthly organic visitors. Their articles were buried on page 3-5 of Google results. Competitors with inferior content were dominating the SERPs. Technical issues, poor site structure, and a weak backlink profile were holding them back from their true potential."
      },
      strategy: {
        title: "My Strategy",
        content: "I conducted a comprehensive technical audit revealing 847 critical issues. The strategy focused on three pillars: technical excellence, content optimization, and strategic link acquisition. I restructured the entire site architecture using topic clusters, implemented schema markup across 500+ pages, and developed a content refresh program targeting their top 100 underperforming articles with highest potential."
      },
      execution: {
        title: "Execution & Key Tactics",
        points: [
          "Fixed 847 technical SEO issues including Core Web Vitals optimization achieving 95+ scores",
          "Restructured site into 15 topic clusters with proper internal linking architecture",
          "Refreshed and expanded 100+ existing articles with updated data and comprehensive coverage",
          "Acquired 500+ high-quality backlinks through digital PR and strategic partnerships",
          "Implemented advanced schema markup driving 40% increase in SERP click-through rates"
        ]
      },
      results: {
        title: "Results & Key Learnings",
        content: "Within 12 months, organic traffic grew from 5,000 to 500,000 monthly visitors - a 9,900% increase. The site now ranks #1 for 200+ high-value keywords and in top 3 for 1,500+ terms. Monthly traffic value (what it would cost in ads) reached $1.2M. Domain authority improved from 28 to 72. The site is now recognized as the top authority in personal finance education.",
        keyMetrics: [
          { label: "Traffic Growth", value: "9,900%", trend: "up" },
          { label: "#1 Rankings", value: "200+", trend: "up" },
          { label: "Domain Authority", value: "72", trend: "up" },
          { label: "Traffic Value", value: "$1.2M/mo", trend: "up" }
        ]
      }
    }
  },
  {
    id: 4,
    title: "AI-Powered Marketing Automation",
    subtitle: "80% Reduction in Manual Work, 300% More Output",
    description: "Built a custom AI automation ecosystem that transformed a marketing agency's operations, handling everything from content creation to campaign optimization.",
    image: "/images/portfolio/ai-automation.jpg",
    category: "AI & Automation",
    tags: ["AI Agents", "Workflow Automation", "ChatGPT", "Make.com"],
    featured: true,
    metrics: [
      { icon: Zap, label: "Time Saved", value: "80%", color: "text-green-500" },
      { icon: TrendingUp, label: "Output Increase", value: "300%", color: "text-blue-500" },
      { icon: DollarSign, label: "Cost Reduction", value: "$150K/yr", color: "text-purple-500" },
      { icon: Bot, label: "AI Agents", value: "12", color: "text-cyan-500" },
    ],
    caseStudy: {
      challenge: {
        title: "The Challenge",
        content: "GrowthPulse Agency was drowning in repetitive tasks. Their team of 15 was spending 60% of their time on manual reporting, basic content creation, and campaign monitoring. Client capacity was capped at 20 accounts, and quality was suffering as the team stretched thin. They needed to scale without proportionally increasing headcount."
      },
      strategy: {
        title: "My Strategy",
        content: "I designed a comprehensive AI automation ecosystem using a combination of custom GPT agents, Make.com workflows, and Python scripts. The system would handle 80% of routine tasks automatically while maintaining quality control through human-in-the-loop checkpoints. Each automation was designed to learn and improve from team feedback."
      },
      execution: {
        title: "Execution & Key Tactics",
        points: [
          "Built 12 custom AI agents for content writing, ad copy, report generation, and client communication",
          "Created 50+ automated workflows connecting Slack, HubSpot, Meta Ads, Google Ads, and reporting tools",
          "Implemented intelligent campaign monitoring with automatic alerts and optimization suggestions",
          "Developed AI-powered competitive analysis running weekly across all client industries",
          "Built custom dashboard aggregating all client data with AI-generated insights and recommendations"
        ]
      },
      results: {
        title: "Results & Key Learnings",
        content: "The agency reduced manual work by 80%, freeing the team to focus on strategy and client relationships. Content output increased 300% while maintaining quality scores above 90%. The agency scaled from 20 to 50 clients without adding headcount. Annual operational cost savings reached $150K. Employee satisfaction improved as mundane tasks were eliminated.",
        keyMetrics: [
          { label: "Manual Work Reduction", value: "80%", trend: "down" },
          { label: "Content Output", value: "300%", trend: "up" },
          { label: "Client Capacity", value: "2.5x", trend: "up" },
          { label: "Annual Savings", value: "$150K", trend: "up" }
        ]
      }
    }
  },
  {
    id: 5,
    title: "Google Ads: $500K Spend, $5M Revenue",
    subtitle: "10x ROAS on High-Spend PPC Campaigns",
    description: "Managed and optimized a $500K monthly Google Ads budget for an enterprise software company, achieving consistent 10x returns through advanced bidding and audience strategies.",
    image: "/images/portfolio/ppc-campaign.jpg",
    category: "PPC",
    tags: ["Google Ads", "Performance Max", "Search Ads", "YouTube Ads"],
    featured: false,
    metrics: [
      { icon: DollarSign, label: "Monthly Spend", value: "$500K", color: "text-green-500" },
      { icon: TrendingUp, label: "ROAS", value: "10x", color: "text-blue-500" },
      { icon: Target, label: "Revenue", value: "$5M/mo", color: "text-purple-500" },
      { icon: Users, label: "Conversions", value: "2,500+", color: "text-cyan-500" },
    ],
    caseStudy: {
      challenge: {
        title: "The Challenge",
        content: "TechSolutions Enterprise was struggling with their Google Ads despite a $500K monthly budget. ROAS had dropped to 3x, and their previous agency was unable to identify the issues. Competition for enterprise software keywords was fierce, with CPCs averaging $85. They needed an expert to turn their substantial investment into substantial returns."
      },
      strategy: {
        title: "My Strategy",
        content: "I conducted a forensic audit of their account revealing massive waste in broad match keywords and poor negative keyword management. The strategy focused on building a highly structured account with single keyword ad groups for top performers, implementing offline conversion tracking, and leveraging first-party data for smart bidding optimization."
      },
      execution: {
        title: "Execution & Key Tactics",
        points: [
          "Restructured account into 200+ tightly themed ad groups with SKAGs for top 50 keywords",
          "Implemented offline conversion tracking connecting Google Ads to Salesforce CRM",
          "Deployed Performance Max campaigns with high-quality creative assets and audience signals",
          "Built comprehensive negative keyword lists eliminating $80K/month in wasted spend",
          "Created YouTube remarketing sequences targeting high-intent website visitors"
        ]
      },
      results: {
        title: "Results & Key Learnings",
        content: "Within 4 months, ROAS improved from 3x to a consistent 10x. Monthly revenue from Google Ads reached $5M. We identified and eliminated $80K in monthly wasted spend, which was reallocated to top-performing campaigns. Conversion volume increased by 150% while cost per conversion dropped 45%. The account is now a benchmark for enterprise PPC excellence.",
        keyMetrics: [
          { label: "ROAS Improvement", value: "233%", trend: "up" },
          { label: "Monthly Revenue", value: "$5M", trend: "up" },
          { label: "Waste Eliminated", value: "$80K/mo", trend: "down" },
          { label: "CPA Reduction", value: "45%", trend: "down" }
        ]
      }
    }
  },
  {
    id: 6,
    title: "Viral Social Media Growth Campaign",
    subtitle: "0 to 1M Followers in 8 Months",
    description: "Orchestrated a viral growth campaign for a lifestyle brand, leveraging influencer partnerships, trend-jacking, and platform algorithm optimization.",
    image: "/images/portfolio/social-growth.jpg",
    category: "Social Media",
    tags: ["Instagram", "TikTok", "Influencer Marketing", "Viral Content"],
    featured: false,
    metrics: [
      { icon: Users, label: "Followers", value: "1M+", color: "text-green-500" },
      { icon: TrendingUp, label: "Engagement", value: "8.5%", color: "text-blue-500" },
      { icon: Share2, label: "Viral Posts", value: "25+", color: "text-purple-500" },
      { icon: DollarSign, label: "Revenue Impact", value: "$2M", color: "text-cyan-500" },
    ],
    caseStudy: {
      challenge: {
        title: "The Challenge",
        content: "LifeStyle Co., a direct-to-consumer wellness brand, had minimal social media presence with just 5,000 followers across platforms. Their content was generic and failed to resonate with their target Gen-Z and Millennial audience. Competitors with similar products had built massive followings, leaving LifeStyle Co. invisible in the crowded wellness space."
      },
      strategy: {
        title: "My Strategy",
        content: "I developed a platform-native content strategy that prioritized entertainment over promotion. The approach focused on identifying and riding emerging trends within the first 24-48 hours, building authentic relationships with micro-influencers in the wellness space, and creating shareable content formats that encouraged user-generated content."
      },
      execution: {
        title: "Execution & Key Tactics",
        points: [
          "Developed 15 recurring content series optimized for each platform's algorithm",
          "Partnered with 150+ micro-influencers for authentic product integration and reviews",
          "Created trend response system allowing content creation within 4 hours of trend emergence",
          "Built UGC program incentivizing customers to create and share content with brand hashtags",
          "Implemented cross-platform content repurposing maximizing reach from each piece of content"
        ]
      },
      results: {
        title: "Results & Key Learnings",
        content: "In 8 months, total followers grew from 5,000 to over 1 million across Instagram and TikTok. Average engagement rate reached 8.5% - 4x the industry average. 25+ posts achieved viral status with 1M+ views each. The social growth directly contributed to $2M in attributed revenue. The brand is now recognized as a top voice in the wellness space.",
        keyMetrics: [
          { label: "Follower Growth", value: "19,900%", trend: "up" },
          { label: "Engagement Rate", value: "8.5%", trend: "up" },
          { label: "Viral Posts", value: "25+", trend: "up" },
          { label: "Revenue Impact", value: "$2M", trend: "up" }
        ]
      }
    }
  },
  {
    id: 7,
    title: "Technical SEO Site Architecture Overhaul",
    subtitle: "2x Organic Traffic Through Technical Excellence",
    description: "Achieved 200% organic traffic increase by fixing critical site architecture issues, resolving crawl problems, and optimizing Core Web Vitals for a major e-commerce platform.",
    image: "/images/portfolio/technical-seo.jpg",
    category: "SEO",
    tags: ["Technical SEO", "Organic Traffic", "Growth"],
    featured: false,
    metrics: [
      { icon: TrendingUp, label: "Organic Growth", value: "200%", color: "text-green-500" },
      { icon: Target, label: "Top Keywords", value: "150+", color: "text-blue-500" },
      { icon: Search, label: "SEO Score", value: "90%", color: "text-purple-500" },
      { icon: Zap, label: "Page Speed", value: "95+", color: "text-cyan-500" },
    ],
    miniGraph: "growth",
    caseStudy: {
      challenge: {
        title: "The Challenge",
        content: "A major e-commerce platform with 50,000+ product pages was experiencing declining organic traffic despite quality content. Technical SEO audit revealed 1,200+ critical issues including poor URL structure, duplicate content, crawl budget waste, and Core Web Vitals failures. The site was being outranked by competitors with inferior product offerings."
      },
      strategy: {
        title: "My Strategy",
        content: "I developed a phased technical SEO remediation plan prioritizing issues by impact and effort. Phase 1 addressed critical crawl and indexation issues. Phase 2 focused on site architecture restructuring with proper faceted navigation handling. Phase 3 optimized Core Web Vitals through code-level improvements and CDN optimization."
      },
      execution: {
        title: "Execution & Key Tactics",
        points: [
          "Resolved 1,200+ technical SEO issues across crawlability, indexation, and performance",
          "Restructured URL architecture with proper canonicalization and hreflang implementation",
          "Implemented dynamic rendering for JavaScript-heavy pages to ensure proper indexation",
          "Optimized Core Web Vitals achieving 95+ scores across LCP, FID, and CLS",
          "Built comprehensive XML sitemap strategy with priority-based segmentation"
        ]
      },
      results: {
        title: "Results & Key Learnings",
        content: "Within 6 months, organic traffic increased by 200%. The site now ranks #1 for 150+ high-value keywords and achieved a 90% technical SEO score in all major audit tools. Crawl efficiency improved by 75%, and page experience metrics now exceed all Core Web Vitals thresholds. Revenue from organic traffic increased by $1.5M annually.",
        keyMetrics: [
          { label: "Traffic Growth", value: "200%", trend: "up" },
          { label: "#1 Rankings", value: "150+", trend: "up" },
          { label: "SEO Score", value: "90%", trend: "up" },
          { label: "Revenue Lift", value: "$1.5M", trend: "up" }
        ]
      }
    }
  },
  {
    id: 8,
    title: "Cross-Channel PPC Optimization",
    subtitle: "50% Lower CPC with 3x ROAS Across Platforms",
    description: "Lowered cost-per-click by 50% while increasing overall ROAS to 3x through strategic optimization across Google and Meta Ads platforms with unified attribution.",
    image: "/images/portfolio/cross-channel-ppc.jpg",
    category: "PPC",
    tags: ["Google Ads", "Meta Ads", "PPC", "ROI"],
    featured: false,
    metrics: [
      { icon: DollarSign, label: "CPC Reduction", value: "50%", color: "text-green-500" },
      { icon: TrendingUp, label: "Overall ROAS", value: "3x", color: "text-blue-500" },
      { icon: Target, label: "Conversion Rate", value: "25%", color: "text-purple-500" },
      { icon: BarChart3, label: "Monthly Spend", value: "$200K", color: "text-cyan-500" },
    ],
    miniGraph: "comparison",
    caseStudy: {
      challenge: {
        title: "The Challenge",
        content: "A growing DTC brand was running siloed campaigns across Google and Meta with no unified strategy. CPCs had risen to $4.50 on Google and $2.80 on Meta, while ROAS hovered at a barely profitable 1.5x. The $200K monthly budget was being allocated arbitrarily without data-driven optimization, leading to significant waste and missed opportunities."
      },
      strategy: {
        title: "My Strategy",
        content: "I implemented a unified cross-channel strategy with centralized attribution and budget allocation. The approach focused on identifying the optimal role for each platform in the customer journey, implementing proper tracking across channels, and using automated rules for real-time budget shifting based on performance."
      },
      execution: {
        title: "Execution & Key Tactics",
        points: [
          "Implemented unified cross-platform attribution using a custom data warehouse setup",
          "Created channel-specific strategies: Google for high-intent capture, Meta for awareness and retargeting",
          "Built automated budget allocation rules shifting spend to best performers hourly",
          "Developed creative testing framework with 100+ variations across platforms",
          "Established bid strategies optimized for actual profit margins, not just ROAS"
        ]
      },
      results: {
        title: "Results & Key Learnings",
        content: "Within 3 months, CPC dropped by 50% from $4.50 to $2.25 on Google and from $2.80 to $1.40 on Meta. Overall ROAS improved from 1.5x to 3x. Conversion rate increased to 25% through better audience targeting and creative optimization. The brand now profitably scales with clear visibility into cross-channel performance.",
        keyMetrics: [
          { label: "CPC Reduction", value: "50%", trend: "down" },
          { label: "ROAS Improvement", value: "100%", trend: "up" },
          { label: "Conversion Rate", value: "25%", trend: "up" },
          { label: "Profit Margin", value: "35%", trend: "up" }
        ]
      }
    }
  },
  {
    id: 9,
    title: "AI Customer Support Agent",
    subtitle: "70% Query Resolution with 95% Satisfaction",
    description: "Built a custom AI agent that resolves 70% of customer support queries automatically, reducing operational costs by 25% while maintaining 95% customer satisfaction.",
    image: "/images/portfolio/ai-agent-support.jpg",
    category: "AI & Automation",
    tags: ["AI Agents", "Automation", "Efficiency"],
    featured: true,
    metrics: [
      { icon: Bot, label: "Query Resolution", value: "70%", color: "text-green-500" },
      { icon: DollarSign, label: "OpEx Reduction", value: "25%", color: "text-blue-500" },
      { icon: Users, label: "Satisfaction", value: "95%", color: "text-purple-500" },
      { icon: Zap, label: "Response Time", value: "<30s", color: "text-cyan-500" },
    ],
    miniGraph: "volume",
    caseStudy: {
      challenge: {
        title: "The Challenge",
        content: "An e-commerce company was drowning in 5,000+ daily support tickets. The 25-person support team was overwhelmed, response times averaged 8 hours, and customer satisfaction had dropped to 72%. Hiring more agents was cost-prohibitive, and the repetitive nature of most queries (order status, returns, sizing) suggested automation potential."
      },
      strategy: {
        title: "My Strategy",
        content: "I designed a multi-tier AI support system. Tier 1 would be fully automated AI handling routine queries. Tier 2 would be AI-assisted human support for complex issues. The AI would learn from every interaction and continuously improve. Integration with existing systems would ensure the AI had real-time access to order data, inventory, and customer history."
      },
      execution: {
        title: "Execution & Key Tactics",
        points: [
          "Built custom AI agent using GPT-4 with fine-tuning on 50,000+ historical support conversations",
          "Integrated with Shopify, shipping carriers, and CRM for real-time data access",
          "Created intelligent routing system escalating complex issues to human agents with full context",
          "Implemented continuous learning pipeline improving responses based on customer feedback",
          "Deployed across chat, email, and social media channels with consistent experience"
        ]
      },
      results: {
        title: "Results & Key Learnings",
        content: "The AI agent now resolves 70% of all queries without human intervention. Average response time dropped from 8 hours to under 30 seconds. Customer satisfaction improved from 72% to 95%. Operational costs decreased by 25% ($300K annually). The support team now focuses on complex issues and VIP customers, dramatically improving job satisfaction.",
        keyMetrics: [
          { label: "Auto-Resolution", value: "70%", trend: "up" },
          { label: "Response Time", value: "99%", trend: "down" },
          { label: "CSAT Score", value: "95%", trend: "up" },
          { label: "Cost Savings", value: "$300K", trend: "up" }
        ]
      }
    }
  },
  {
    id: 10,
    title: "E-commerce Checkout CRO",
    subtitle: "40% Conversion Lift Through Funnel Optimization",
    description: "Optimized a complex e-commerce checkout funnel, increasing final purchases by 40%, reducing cart abandonment by 15%, and boosting AOV by 20%.",
    image: "/images/portfolio/ecommerce-cro.jpg",
    category: "E-commerce",
    tags: ["CRO", "E-commerce", "Sales"],
    featured: false,
    metrics: [
      { icon: TrendingUp, label: "Conversion Lift", value: "40%", color: "text-green-500" },
      { icon: ShoppingCart, label: "Cart Abandon", value: "-15%", color: "text-blue-500" },
      { icon: DollarSign, label: "AOV Increase", value: "20%", color: "text-purple-500" },
      { icon: Target, label: "Checkout Rate", value: "68%", color: "text-cyan-500" },
    ],
    miniGraph: "funnel",
    caseStudy: {
      challenge: {
        title: "The Challenge",
        content: "A premium home goods e-commerce brand had a checkout completion rate of just 28%. Cart abandonment was at 72%, well above industry average. The 5-step checkout process was causing friction, mobile experience was poor, and payment options were limited. With $2M monthly traffic, even small improvements would yield significant revenue gains."
      },
      strategy: {
        title: "My Strategy",
        content: "I conducted comprehensive checkout analysis using heatmaps, session recordings, and funnel analytics. The strategy focused on reducing steps, removing friction points, optimizing for mobile, and implementing strategic trust signals and urgency elements without being pushy."
      },
      execution: {
        title: "Execution & Key Tactics",
        points: [
          "Consolidated 5-step checkout into streamlined 2-step process with progress indicators",
          "Implemented guest checkout option removing registration friction for new customers",
          "Added Apple Pay, Google Pay, and Buy Now Pay Later options increasing payment flexibility",
          "Redesigned mobile checkout with thumb-friendly buttons and auto-fill optimization",
          "Added strategic trust badges, real-time inventory indicators, and social proof elements"
        ]
      },
      results: {
        title: "Results & Key Learnings",
        content: "Checkout conversion rate improved from 28% to 68% - a 40% lift. Cart abandonment decreased from 72% to 57%. AOV increased by 20% through strategic upsell placement. Mobile conversion specifically improved by 65%. Annual revenue increase of $1.8M directly attributed to the optimization.",
        keyMetrics: [
          { label: "Conversion Lift", value: "40%", trend: "up" },
          { label: "Abandonment Drop", value: "15%", trend: "down" },
          { label: "AOV Increase", value: "20%", trend: "up" },
          { label: "Revenue Impact", value: "$1.8M", trend: "up" }
        ]
      }
    }
  },
  {
    id: 11,
    title: "Local SEO Map Pack Domination",
    subtitle: "3x In-Store Visits Through Local Search",
    description: "Helped a local retail business appear in the top Map Pack for all relevant searches, increasing foot traffic by 3x and generating 100+ monthly reviews.",
    image: "/images/portfolio/local-seo.jpg",
    category: "SEO",
    tags: ["Local SEO", "Local Business", "Traffic"],
    featured: false,
    metrics: [
      { icon: MapPin, label: "In-Store Visits", value: "3x", color: "text-green-500" },
      { icon: Search, label: "Map Views", value: "200%", color: "text-blue-500" },
      { icon: Users, label: "Local Reviews", value: "100+", color: "text-purple-500" },
      { icon: Target, label: "Map Pack", value: "Top 3", color: "text-cyan-500" },
    ],
    miniGraph: "map",
    caseStudy: {
      challenge: {
        title: "The Challenge",
        content: "A family-owned furniture store with 3 locations was invisible in local search. They appeared on page 2 for most searches and never in the Map Pack. Competitors with inferior products dominated local results. With 80% of furniture shoppers researching online before visiting, their digital invisibility was killing foot traffic."
      },
      strategy: {
        title: "My Strategy",
        content: "I developed a comprehensive local SEO strategy focusing on Google Business Profile optimization, local citation consistency, review generation, and local content creation. The goal was Map Pack presence for all high-intent searches within their service areas."
      },
      execution: {
        title: "Execution & Key Tactics",
        points: [
          "Optimized 3 Google Business Profiles with complete information, categories, and attributes",
          "Built 150+ consistent local citations across directories and industry platforms",
          "Implemented automated review request system generating 25+ reviews monthly per location",
          "Created location-specific landing pages with local schema markup and unique content",
          "Developed local link building campaign partnering with community organizations"
        ]
      },
      results: {
        title: "Results & Key Learnings",
        content: "All 3 locations now appear in the Map Pack for primary keywords. Google Business Profile views increased by 200%. Monthly in-store visits grew by 3x as tracked by foot traffic analytics. The business now receives 100+ reviews monthly with a 4.8 average rating. Local market share increased from 12% to 28%.",
        keyMetrics: [
          { label: "Foot Traffic", value: "3x", trend: "up" },
          { label: "Map Views", value: "200%", trend: "up" },
          { label: "Monthly Reviews", value: "100+", trend: "up" },
          { label: "Market Share", value: "28%", trend: "up" }
        ]
      }
    }
  },
  {
    id: 12,
    title: "Content Strategy & Distribution Engine",
    subtitle: "50% More Brand Mentions, 30% Backlink Growth",
    description: "Created a content distribution strategy that increased brand mentions by 50%, grew backlink profile by 30%, and achieved 100K+ organic reach monthly.",
    image: "/images/portfolio/content-strategy.jpg",
    category: "Content",
    tags: ["Content Strategy", "SEO", "Brand Awareness"],
    featured: false,
    metrics: [
      { icon: Share2, label: "Brand Mentions", value: "50%", color: "text-green-500" },
      { icon: Globe, label: "Backlinks", value: "+30%", color: "text-blue-500" },
      { icon: Users, label: "Organic Reach", value: "100K+", color: "text-purple-500" },
      { icon: FileText, label: "Content Pieces", value: "200+", color: "text-cyan-500" },
    ],
    miniGraph: "reach",
    caseStudy: {
      challenge: {
        title: "The Challenge",
        content: "A B2B fintech startup had great products but zero brand awareness. Their domain authority was 15, they had minimal backlinks, and brand searches were non-existent. Competitors with years of content marketing dominated search results. They needed to build authority quickly to support their sales and SEO efforts."
      },
      strategy: {
        title: "My Strategy",
        content: "I designed a content flywheel strategy combining original research, expert contributions, and strategic distribution. The approach prioritized linkable assets that would naturally attract backlinks, while a systematic outreach process amplified reach and generated brand mentions."
      },
      execution: {
        title: "Execution & Key Tactics",
        points: [
          "Created 3 original industry research reports with exclusive data generating significant press coverage",
          "Developed executive thought leadership program placing 50+ guest articles in industry publications",
          "Built content repurposing system turning each pillar piece into 10+ derivative assets",
          "Implemented HARO and journalist outreach process for consistent brand mentions",
          "Established strategic content partnerships with industry influencers and publications"
        ]
      },
      results: {
        title: "Results & Key Learnings",
        content: "Brand mentions increased by 50% within 6 months. Backlink profile grew by 30% with 500+ new referring domains. Monthly organic reach exceeded 100K through combined search and social distribution. Domain authority improved from 15 to 38. The brand is now recognized as a thought leader, supporting both sales and recruiting efforts.",
        keyMetrics: [
          { label: "Brand Mentions", value: "+50%", trend: "up" },
          { label: "New Backlinks", value: "500+", trend: "up" },
          { label: "Domain Authority", value: "38", trend: "up" },
          { label: "Organic Reach", value: "100K+", trend: "up" }
        ]
      }
    }
  },
  {
    id: 13,
    title: "Unified Marketing Analytics Dashboard",
    subtitle: "100+ KPIs Tracked, 50% Faster Reporting",
    description: "Developed a unified data analytics dashboard tracking all marketing channels, eliminating data silos, and reducing reporting time by 50%.",
    image: "/images/portfolio/data-analytics.jpg",
    category: "Analytics",
    tags: ["Data Analytics", "Reporting", "Efficiency"],
    featured: false,
    metrics: [
      { icon: Database, label: "Metrics Tracked", value: "100+", color: "text-green-500" },
      { icon: Zap, label: "Reporting Speed", value: "50%", color: "text-blue-500" },
      { icon: Target, label: "Data Sources", value: "15+", color: "text-purple-500" },
      { icon: TrendingUp, label: "Decision Speed", value: "3x", color: "text-cyan-500" },
    ],
    miniGraph: "usage",
    caseStudy: {
      challenge: {
        title: "The Challenge",
        content: "A mid-size marketing agency was drowning in data spread across 15+ platforms. Weekly reporting took 20+ hours of manual work pulling data from Google Ads, Meta, LinkedIn, GA4, CRM, and more. Insights were delayed by days, and inconsistent data definitions led to conflicting reports and poor decision-making."
      },
      strategy: {
        title: "My Strategy",
        content: "I designed a unified data infrastructure connecting all marketing platforms to a central warehouse with automated ETL pipelines. The dashboard would provide real-time insights with consistent metric definitions, enabling rapid decision-making while eliminating manual reporting entirely."
      },
      execution: {
        title: "Execution & Key Tactics",
        points: [
          "Built data warehouse on BigQuery connecting 15+ marketing platforms via Fivetran",
          "Created standardized metric definitions ensuring consistency across all reports",
          "Developed interactive Looker dashboards with drill-down capabilities for each client",
          "Implemented automated alerts for KPI anomalies and optimization opportunities",
          "Built executive summary generator producing AI-written insights from data"
        ]
      },
      results: {
        title: "Results & Key Learnings",
        content: "The agency now tracks 100+ key metrics in real-time. Weekly reporting time dropped from 20+ hours to under 2 hours - a 90% reduction. Decision-making speed improved 3x with instant access to insights. Data silos were eliminated with a single source of truth. Client satisfaction improved significantly with faster, more insightful reporting.",
        keyMetrics: [
          { label: "Metrics Tracked", value: "100+", trend: "up" },
          { label: "Reporting Time", value: "-90%", trend: "down" },
          { label: "Data Sources", value: "15+", trend: "up" },
          { label: "Decision Speed", value: "3x", trend: "up" }
        ]
      }
    }
  },
  {
    id: 14,
    title: "YouTube Advertising Campaign",
    subtitle: "1M+ Views with 15% Lower CPV",
    description: "Launched a YouTube advertising campaign achieving 1M+ video views with 15% lower cost-per-view and 25% higher engagement than industry benchmarks.",
    image: "/images/portfolio/youtube-ads.jpg",
    category: "PPC",
    tags: ["YouTube Ads", "Video Marketing", "Reach"],
    featured: false,
    metrics: [
      { icon: Youtube, label: "Video Views", value: "1M+", color: "text-green-500" },
      { icon: DollarSign, label: "CPV Reduction", value: "15%", color: "text-blue-500" },
      { icon: TrendingUp, label: "Engagement", value: "+25%", color: "text-purple-500" },
      { icon: Users, label: "Subscribers", value: "50K+", color: "text-cyan-500" },
    ],
    miniGraph: "engagement",
    caseStudy: {
      challenge: {
        title: "The Challenge",
        content: "A consumer electronics brand wanted to launch their new product line with maximum awareness impact. Traditional display and social ads weren't cutting through the noise. Video content existed but wasn't being leveraged effectively. CPV on previous YouTube campaigns averaged $0.08 with low engagement rates."
      },
      strategy: {
        title: "My Strategy",
        content: "I developed a full-funnel YouTube strategy combining awareness-focused bumper ads, consideration-focused TrueView in-stream, and action-focused TrueView for action campaigns. Creative strategy focused on platform-native content with strong hooks in the first 5 seconds."
      },
      execution: {
        title: "Execution & Key Tactics",
        points: [
          "Created 15 video variations optimized for different audience segments and placements",
          "Implemented sequential ad messaging guiding viewers through the awareness-consideration-action funnel",
          "Built custom affinity and in-market audiences based on competitor and category signals",
          "Deployed YouTube remarketing targeting website visitors and engaged video viewers",
          "Optimized bids based on viewability and completion rate data"
        ]
      },
      results: {
        title: "Results & Key Learnings",
        content: "The campaign achieved 1M+ video views across the product launch period. CPV was 15% below industry benchmarks at $0.068. Engagement rate (likes, comments, shares) exceeded benchmarks by 25%. The YouTube channel gained 50K+ new subscribers. Product launch sales exceeded targets by 40%.",
        keyMetrics: [
          { label: "Video Views", value: "1M+", trend: "up" },
          { label: "CPV", value: "-15%", trend: "down" },
          { label: "Engagement", value: "+25%", trend: "up" },
          { label: "Sales Lift", value: "40%", trend: "up" }
        ]
      }
    }
  },
  {
    id: 15,
    title: "B2B Webinar Lead Generation",
    subtitle: "1,000+ Qualified Leads from Single Campaign",
    description: "Generated 1,000+ qualified leads from a targeted webinar campaign for a SaaS client, achieving 25% webinar-to-demo conversion rate.",
    image: "/images/portfolio/webinar-leads.jpg",
    category: "Lead Gen",
    tags: ["Lead Generation", "SaaS", "Content Marketing"],
    featured: false,
    metrics: [
      { icon: Users, label: "Qualified Leads", value: "1,000+", color: "text-green-500" },
      { icon: Target, label: "Conversion Rate", value: "25%", color: "text-blue-500" },
      { icon: TrendingUp, label: "Attendance", value: "65%", color: "text-purple-500" },
      { icon: DollarSign, label: "Pipeline Value", value: "$800K", color: "text-cyan-500" },
    ],
    miniGraph: "leads",
    caseStudy: {
      challenge: {
        title: "The Challenge",
        content: "A B2B SaaS company needed to generate high-quality leads quickly for their sales team. Traditional content downloads were generating volume but poor quality. Previous webinars had low attendance (35%) and minimal conversion. The sales team was wasting time on unqualified leads."
      },
      strategy: {
        title: "My Strategy",
        content: "I designed a webinar campaign focused on value delivery over product pitching. The topic addressed a genuine pain point with actionable takeaways. Promotion strategy targeted decision-makers across multiple channels. Post-webinar nurture would convert attendees to demos."
      },
      execution: {
        title: "Execution & Key Tactics",
        points: [
          "Developed webinar content addressing top industry challenge with exclusive research data",
          "Created multi-channel promotion campaign across LinkedIn, Meta, email, and partner channels",
          "Implemented registration page optimization with 45% conversion rate from landing page",
          "Built automated reminder sequences achieving 65% attendance rate",
          "Designed post-webinar nurture sequence with personalized demo CTAs based on engagement"
        ]
      },
      results: {
        title: "Results & Key Learnings",
        content: "The webinar generated 1,000+ registrants with 65% attendance rate. 25% of attendees converted to demo requests - 10x better than content downloads. Pipeline value from the single webinar reached $800K. The format has been replicated quarterly with consistent results.",
        keyMetrics: [
          { label: "Registrants", value: "1,000+", trend: "up" },
          { label: "Attendance", value: "65%", trend: "up" },
          { label: "Demo Rate", value: "25%", trend: "up" },
          { label: "Pipeline", value: "$800K", trend: "up" }
        ]
      }
    }
  },
  {
    id: 16,
    title: "Mobile App Install Campaign",
    subtitle: "5,000+ Monthly Installs with 40% Lower CPI",
    description: "Managed a mobile app install campaign achieving 5,000+ monthly installs with 40% lower cost-per-install and 25% higher retention than benchmarks.",
    image: "/images/portfolio/app-installs.jpg",
    category: "Mobile",
    tags: ["Mobile App Ads", "User Acquisition", "Growth"],
    featured: false,
    metrics: [
      { icon: Smartphone, label: "Monthly Installs", value: "5K+", color: "text-green-500" },
      { icon: DollarSign, label: "CPI Reduction", value: "40%", color: "text-blue-500" },
      { icon: Users, label: "Retention Lift", value: "25%", color: "text-purple-500" },
      { icon: TrendingUp, label: "ROAS", value: "4x", color: "text-cyan-500" },
    ],
    miniGraph: "installs",
    caseStudy: {
      challenge: {
        title: "The Challenge",
        content: "A fitness app startup needed to scale user acquisition efficiently. Their CPI on Meta and Google App Campaigns averaged $4.50 - unsustainable for their unit economics. Day 7 retention was just 15%, meaning most acquired users churned quickly. They needed quality installs at scale, not just volume."
      },
      strategy: {
        title: "My Strategy",
        content: "I shifted focus from volume to quality by optimizing for post-install events rather than installs. Campaign structure targeted users most likely to engage with the app based on predictive modeling. Creative strategy emphasized the app's unique value proposition with authentic content."
      },
      execution: {
        title: "Execution & Key Tactics",
        points: [
          "Implemented App Events Optimization targeting high-value post-install actions",
          "Built lookalike audiences from top 10% most engaged users for acquisition targeting",
          "Created 50+ video creatives featuring real users and authentic testimonials",
          "Deployed Apple Search Ads with granular keyword bidding for high-intent users",
          "Implemented deep linking for personalized onboarding based on ad creative viewed"
        ]
      },
      results: {
        title: "Results & Key Learnings",
        content: "Monthly installs scaled to 5,000+ while CPI dropped by 40% from $4.50 to $2.70. Day 7 retention improved by 25% to 40% through better targeting and onboarding. ROAS reached 4x when optimizing for subscription starts rather than installs. The app reached profitability on user acquisition.",
        keyMetrics: [
          { label: "Monthly Installs", value: "5K+", trend: "up" },
          { label: "CPI Reduction", value: "40%", trend: "down" },
          { label: "D7 Retention", value: "40%", trend: "up" },
          { label: "ROAS", value: "4x", trend: "up" }
        ]
      }
    }
  },
]

// Mini Graph Component for cards
function MiniGraph({ type }: { type?: string }) {
  const graphData = {
    growth: [20, 35, 45, 40, 55, 65, 75, 90],
    comparison: [60, 45, 40, 35, 30, 28, 25, 22],
    volume: [40, 55, 45, 60, 75, 65, 80, 70],
    funnel: [100, 85, 70, 55, 45, 40, 38, 35],
    map: [30, 45, 55, 70, 65, 80, 85, 90],
    reach: [25, 40, 35, 55, 65, 60, 75, 85],
    usage: [35, 50, 45, 65, 55, 70, 80, 90],
    engagement: [40, 55, 65, 60, 75, 70, 85, 95],
    leads: [20, 35, 50, 45, 65, 75, 70, 90],
    installs: [30, 45, 40, 60, 55, 70, 75, 85],
  }
  
  const data = graphData[type as keyof typeof graphData] || graphData.growth
  const max = Math.max(...data)
  
  return (
    <div className="flex items-end gap-1 h-8 opacity-60 group-hover:opacity-100 transition-opacity">
      {data.map((value, i) => (
        <div
          key={i}
          className="w-1.5 bg-gradient-to-t from-primary/60 to-primary rounded-full transition-all duration-300"
          style={{ 
            height: `${(value / max) * 100}%`,
            animationDelay: `${i * 0.1}s`
          }}
        />
      ))}
    </div>
  )
}

// Animated Counter Hook
function useAnimatedCounter(target: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!startOnView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let startTime: number
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 4)
            setCount(Math.floor(easeOut * target))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration, hasAnimated, startOnView])

  return { count, ref }
}

export default function PortfolioPage() {
  const { language } = useLanguage()
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Map Bengali category back to English for filtering
  const categoryMap: Record<string, string> = {
    "সব": "All", "ই-কমার্স": "E-commerce", "লিড জেন": "Lead Gen", "SEO": "SEO",
    "AI ও অটোমেশন": "AI & Automation", "PPC": "PPC", "সোশ্যাল মিডিয়া": "Social Media",
    "কন্টেন্ট": "Content", "অ্যানালিটিক্স": "Analytics", "মোবাইল": "Mobile"
  }
  
  const filterCategory = categoryMap[activeCategory] || activeCategory
  const filteredProjects = filterCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === filterCategory)

  const openCaseStudy = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeCaseStudy = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'unset'
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <div className="pt-20 sm:pt-24 min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
              {language === "en" ? "Case Studies & Results" : "কেস স্টাডি ও ফলাফল"}
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-fade-in-up text-balance" style={{ animationDelay: '0.1s' }}>
            <span className="gradient-text">{language === "en" ? "Proven Results" : "প্রমাণিত ফলাফল"}</span>
            <br className="hidden sm:block" />
            <span className="text-foreground">{language === "en" ? "That Speak for Themselves" : "যা নিজেই কথা বলে"}</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            {language === "en" 
              ? "Explore detailed case studies showcasing real campaigns, real strategies, and real results. Each project demonstrates the power of data-driven marketing."
              : "প্রকৃত ক্যাম্পেইন, প্রকৃত কৌশল এবং প্রকৃত ফলাফল প্রদর্শন করা বিস্তারিত কেস স্টাডি দেখুন। প্রতিটি প্রজেক্ট ডেটা-চালিত মার্কেটিংয়ের শক্তি প্রদর্শন করে।"
            }
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="pb-6 sm:pb-8 sticky top-16 sm:top-20 z-30 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="container mx-auto px-4">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-1.5 sm:gap-2 h-auto bg-transparent p-2">
              {(language === "en" ? categories.en : categories.bn).map((category, index) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-300 hover:bg-primary/10 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 sm:py-12 pb-16 sm:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={cn(
                  "group overflow-hidden transition-all duration-500 bg-card/80 dark:bg-slate-800/80 backdrop-blur-sm border-border/50 dark:border-slate-700/60 cursor-pointer",
                  "hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/30",
                  "animate-fade-in-up",
                  project.featured && "md:col-span-2 xl:col-span-1"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openCaseStudy(project)}
              >
                {/* Image */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-lg">
                        {language === "en" ? "Featured" : "ফিচার্ড"}
                      </Badge>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                  
                  {/* Quick Stats Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex gap-3 flex-wrap">
                      {project.metrics.slice(0, 2).map((metric, i) => (
                        <div key={i} className="glass-effect rounded-lg px-3 py-1.5 flex items-center gap-2">
                          <metric.icon className={cn("w-4 h-4", metric.color)} />
                          <span className="text-sm font-bold">{metric.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <CardContent className="p-5 sm:p-6 space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors mb-1 line-clamp-1 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary/80 font-medium">
                      {project.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags and Mini Graph */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs px-2 py-0.5">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 2 && (
                        <Badge variant="outline" className="text-xs px-2 py-0.5">
                          +{project.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                    {'miniGraph' in project && <MiniGraph type={project.miniGraph as string} />}
                  </div>

                  {/* View Button */}
                  <Button variant="ghost" className="w-full group/btn justify-between hover:bg-primary/10">
                    <span>{language === "en" ? "View Case Study" : "কেস স্টাডি দেখুন"}</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <div 
          className={cn(
            "fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300",
            isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            onClick={closeCaseStudy}
          />
          
          {/* Modal Content */}
          <div 
            className={cn(
              "relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card dark:bg-slate-900 rounded-2xl border border-border dark:border-slate-700 shadow-2xl transition-all duration-500",
              isModalOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
            )}
          >
            {/* Close Button */}
            <button
              onClick={closeCaseStudy}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors border border-border"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero Image */}
            <div className="relative h-64 sm:h-80">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
                  {selectedProject.category}
                </Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 text-balance dark:text-white">
                  {selectedProject.title}
                </h2>
                <p className="text-lg text-primary/90 font-medium">
                  {selectedProject.subtitle}
                </p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="px-6 sm:px-8 py-6 border-b border-border">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {selectedProject.metrics.map((metric, i) => (
                  <div 
                    key={i} 
                    className="glass-effect dark:bg-slate-800/80 dark:border-slate-700/60 rounded-xl p-4 text-center animate-fade-in-up"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <metric.icon className={cn("w-6 h-6 mx-auto mb-2", metric.color)} />
                    <p className="text-xl sm:text-2xl font-bold dark:text-white">{metric.value}</p>
                    <p className="text-xs text-muted-foreground dark:text-gray-400">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study Content */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Challenge */}
              <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-bold">{selectedProject.caseStudy.challenge.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed pl-13 ml-13">
                  {selectedProject.caseStudy.challenge.content}
                </p>
              </div>

              {/* Strategy */}
              <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold">{selectedProject.caseStudy.strategy.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.caseStudy.strategy.content}
                </p>
              </div>

              {/* Execution */}
              <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold">{selectedProject.caseStudy.execution.title}</h3>
                </div>
                <ul className="space-y-2">
                  {selectedProject.caseStudy.execution.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold">{selectedProject.caseStudy.results.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.caseStudy.results.content}
                </p>
                
                {/* Key Metrics Summary */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                  {selectedProject.caseStudy.results.keyMetrics.map((metric, i) => (
                    <div 
                      key={i} 
                      className="bg-secondary/50 rounded-lg p-3 text-center"
                    >
                      <p className="text-lg sm:text-xl font-bold text-primary">{metric.value}</p>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                      <div className={cn(
                        "text-xs mt-1 font-medium",
                        metric.trend === "up" ? "text-green-500" : "text-blue-500"
                      )}>
                        {metric.trend === "up" ? "Increase" : "Decrease"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                {selectedProject.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary" className="px-3 py-1">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button size="lg" className="flex-1" asChild>
                  <Link href="/contact">
                    Get Similar Results
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="flex-1" asChild>
                  <a href="https://wa.me/8801518961899" target="_blank" rel="noopener noreferrer">
                    Discuss Your Project
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center glass-effect rounded-3xl p-8 sm:p-12 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-balance">
              Ready to Create Your <span className="gradient-text">Success Story?</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Every case study started with a single conversation. Let&apos;s discuss your goals 
              and create a tailored strategy to achieve results like these for your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="group" asChild>
                <a href="https://wa.me/8801518961899" target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
