import './globals.css'
import { Footer } from '@/components/Footer'
import { Poppins } from 'next/font/google'
import React from 'react'

const font = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export const metadata = {
  title: 'Pierce Novoa Portfolio, Github & Linkedin Links | Linktree',
  description: "View Pierce Novoa's Linktree. My Portfolio • GitHub (Get All Source Code) • My Spotify. 🚀"
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
