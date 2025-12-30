import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { ChatWidget } from './components/ui/ChatWidget'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'OceanzCloud | Premium Cloud Solutions',
  description: 'Next-generation AI/cloud SaaS platform.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <Header />
        {children}
        <ChatWidget />
        <Footer />
      </body>
    </html>
  )
}
