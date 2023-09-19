import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import grid_bg from "../../public/images/grid_bg.png";
import sean_logo from '../../public/images/sean_logo.png';
import seans from '../../public/images/seans.png';

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Sean Oneil Rosario',
  description: 'Web Developer',
  icons: sean_logo.src,
  assets: seans.src
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='layout'>
      <img className='fixed left-0 top-0 w-full h-full z-[-1]' src={grid_bg.src} />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
