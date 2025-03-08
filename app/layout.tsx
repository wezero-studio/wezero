import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Wezero Studio",
  description: "Affordable solutions to power your business",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

