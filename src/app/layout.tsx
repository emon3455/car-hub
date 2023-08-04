import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ThemeProvider from '@/providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'An Website to find, Buy, or Sell your dream car',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark" className='transition-all'>
      <body className={inter.className}>

        <ThemeProvider>
          <Navbar></Navbar>

          {children}

          <Footer></Footer>
        </ThemeProvider>



      </body>
    </html>
  )
}
