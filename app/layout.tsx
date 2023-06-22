import { Footer, Navbar } from '@/components'
import './globals.css'

export const metadata = {
  title: 'Mielelvaso',
  description: 'The Best Guild in EpicSeven',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
