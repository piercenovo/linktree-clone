import '@/app/globals.css'
import { Footer } from '@/components/Footer'
import { Poppins as poppins } from 'next/font/google'

export const font = poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

export const metadata = {
  title: 'Pierce Novoa Portfolio, Github & Linkedin Links | Linktree',
  description: "View Pierce Novoa's Linktree. My Portfolio • GitHub (Get All Source Code) • My Spotify. 🚀"
}

export default function RootLayout({
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
