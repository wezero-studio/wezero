import type { Metadata } from 'next'
import React from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Wezero Studios',
  description: 'Wezero Studios - Creative digital solutions',
  generator: 'wezero',
  icons: {

    icon: '/logos/wezero2.svg',
    shortcut: '/logos/wezero2.svg',
    apple: '/logos/wezero2.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
