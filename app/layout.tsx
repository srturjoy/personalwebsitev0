import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/lib/language-context'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { Chatbot } from '@/components/chatbot'
import { LeadPopup } from '@/components/lead-popup'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Turjoy (Siddiqur Rahman) | Digital Marketing Strategist & Performance Marketing Expert',
  description: 'I am Turjoy, helping brands scale with performance marketing and data-driven strategies. Expert in Meta Ads, Google Ads, AI Automation, and Marketing Analytics. Owner & CEO of Boosting Agency BD.',
  keywords: ['Turjoy', 'Siddiqur Rahman', 'Digital Marketing', 'Performance Marketing', 'Meta Ads', 'Google Ads', 'Facebook Ads', 'Lead Generation', 'Marketing Analytics', 'AI Automation', 'Dhaka', 'Bangladesh'],
  authors: [{ name: 'Turjoy (Siddiqur Rahman)' }],
  creator: 'Turjoy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://boostingagencyofficial.site/',
    title: 'Turjoy | Digital Marketing Strategist',
    description: 'I am Turjoy, helping brands scale with performance marketing and data-driven strategies.',
    siteName: 'Turjoy Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Turjoy | Digital Marketing Strategist',
    description: 'I am Turjoy, helping brands scale with performance marketing and data-driven strategies.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0B0F19' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navigation />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
            <WhatsAppButton />
            <Chatbot />
            <LeadPopup />
          </LanguageProvider>
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
