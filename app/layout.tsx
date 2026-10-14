import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: 'Raul Gonzalez | Master Barber',
  description: 'Premium grooming services by Raul Gonzalez. Precision haircuts, hot towel shaves, and beard sculpting in a refined atmosphere.',
  icons: {
    icon: [
      { url: '/barber-icon.svg', type: 'image/svg+xml' },
      { url: '/barber-icon-32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/barber-apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
