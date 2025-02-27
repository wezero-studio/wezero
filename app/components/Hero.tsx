"use client"

import { motion } from "framer-motion"
import dynamic from "next/dynamic"

// Dynamically import TextPressure with no SSR since it uses browser APIs
const TextPressure = dynamic(() => import("../components/TextPressure").then((mod) => mod.default), { ssr: false })

// Dynamically import MetaBalls with no SSR since it uses browser APIs
const MetaBalls = dynamic(() => import("../components/MetaBalls").then((mod) => mod.default), { ssr: false })

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background min-h-[80vh]">
      <div className="absolute inset-0">
        <MetaBalls
          color="#4a90e2"
          cursorBallColor="#ffffff"
          cursorBallSize={2}
          ballCount={15}
          animationSize={30}
          enableMouseInteraction={true}
          enableTransparency={true}
          hoverSmoothness={0.05}
          clumpFactor={1}
          speed={0.3}
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <div style={{ position: "relative", height: "300px" }} className="mb-8">
            <TextPressure
              text="Solvo"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={36}
            />
          </div>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where minimal design meets innovation. We craft elegant experiences that inspire and elevate your space.
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="#work" className="apple-button">
              Explore Our Work
            </a>
            <a href="#about" className="text-sm font-semibold leading-6 text-foreground">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

