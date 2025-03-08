"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

// Dynamically import InfiniteMenu with no SSR since it uses browser APIs
const InfiniteMenu = dynamic(() => import("../../src/blocks/Components/InfiniteMenu/InfiniteMenu"), { ssr: false })

const items = [
  {
    image: "/placeholder.svg?height=600&width=600",
    link: "https://project1.com/",
    title: "Client One",
    description: "Innovative web solutions for a growing tech startup.",
  },
  {
    image: "/placeholder.svg?height=600&width=600",
    link: "https://project2.com/",
    title: "Client Two",
    description: "E-commerce platform with seamless user experience.",
  },
  {
    image: "/placeholder.svg?height=600&width=600",
    link: "https://project3.com/",
    title: "Client Three",
    description: "Custom CRM system for improved business operations.",
  },
  {
    image: "/placeholder.svg?height=600&width=600",
    link: "https://project4.com/",
    title: "Client Four",
    description: "Mobile-first web application with real-time features.",
  },
]

export default function OurWork() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section id="work" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Work</h2>
          <div className="h-[600px] bg-muted/20 rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Loading showcase...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="work" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Our Work</h2>
        <div className="h-[600px] relative rounded-lg overflow-hidden">
          <InfiniteMenu items={items} />
        </div>
      </div>
    </section>
  )
}

