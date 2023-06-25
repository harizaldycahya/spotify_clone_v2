import './globals.css'
import '../public/fontawesome/css/fontawesome.css'
import '../public/fontawesome/css/brands.css'
import '../public/fontawesome/css/solid.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    
      <html lang="en">
        <body className={inter.className + " text-white bg-black"}>{children}</body>
      </html>
    </>
  )
}
