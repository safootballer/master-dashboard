import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SA Footballer — Master Dashboard',
  description: 'The South Australian Footballer — All Services',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
