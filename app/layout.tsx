import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'Raul Gonzalez | Master Barber',
  description: 'Premium grooming services by Raul Gonzalez. Precision haircuts, hot towel shaves, and beard sculpting in a refined atmosphere.',
  icons: {
    icon: [
      { url: '/barber-favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/barber-favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/barber-apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="raulbarber-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
