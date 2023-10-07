import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Auth using NextAuth.js',
  description: ' Next.js 13 Authentication using NextAuth.js, GitHub Sign-In & Tailwind CSS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='max-w-5xl  mx-auto h-screen bg-white'>
        <Navbar/>
        {children}
        </div>
        </body>
    </html>
  )
}
