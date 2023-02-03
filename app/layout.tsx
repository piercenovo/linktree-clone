import '@/styles/globals.css'
import { font } from './font'
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}
