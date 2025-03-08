"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import dynamic from "next/dynamic"

// Dynamically import SpotlightCard with no SSR since it uses browser APIs
const SpotlightCard = dynamic(() => import("../../src/blocks/Components/SpotlightCard/SpotlightCard"), { ssr: false })

const features = [
  {
    title: "No Upfront Payments",
    description:
      "We believe in our work. Pay only when you're satisfied with the results. Our milestone-based payment system ensures you're always in control.",
  },
  {
    title: "Your Prices",
    description:
      "Flexible pricing options tailored to your budget. We work with you to find a solution that meets your needs without breaking the bank.",
  },
  {
    title: "Guaranteed Satisfaction",
    description:
      "Your satisfaction is our priority. We'll revise and refine until you're completely happy with the final product.",
  },
]

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8" ref={containerRef}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className="h-full p-8" spotlightColor="rgba(0, 229, 255, 0.2)">
                <h3 className="text-xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

