"use client"

import { useEffect, useRef } from "react"

interface TextPressureProps {
  text: string
  flex?: boolean
  alpha?: boolean
  stroke?: boolean
  width?: boolean
  weight?: boolean
  italic?: boolean
  textColor?: string
  strokeColor?: string
  minFontSize?: number
}

export default function TextPressure({
  text,
  flex = true,
  alpha = false,
  stroke = false,
  width = true,
  weight = true,
  italic = true,
  textColor = "#ffffff",
  strokeColor = "#ff0000",
  minFontSize = 36,
}: TextPressureProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !textRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height

      const centerX = 0.5
      const centerY = 0.5

      const distanceX = x - centerX
      const distanceY = y - centerY

      if (flex) {
        const fontSize = minFontSize + Math.abs(distanceX * 50)
        textRef.current.style.fontSize = `${fontSize}px`
      }

      if (width) {
        const stretchFactor = 1 + Math.abs(distanceX) * 0.5
        textRef.current.style.fontStretch = `${stretchFactor * 100}%`
      }

      if (weight) {
        const weightValue = 100 + Math.abs(distanceY) * 800
        textRef.current.style.fontWeight = String(Math.floor(weightValue))
      }

      if (italic) {
        const italicValue = distanceX * 90
        textRef.current.style.fontStyle = `oblique ${italicValue}deg`
      }

      if (alpha) {
        const opacity = 0.5 + Math.abs(distanceX) * 0.5
        textRef.current.style.opacity = String(opacity)
      }

      if (stroke) {
        const strokeWidth = Math.abs(distanceY) * 2
        textRef.current.style.webkitTextStroke = `${strokeWidth}px ${strokeColor}`
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [flex, alpha, stroke, width, weight, italic, strokeColor, minFontSize])

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center">
      <div
        ref={textRef}
        style={{
          color: textColor,
          fontSize: `${minFontSize}px`,
          transition: "all 0.1s ease-out",
        }}
        className="font-bold"
      >
        {text}
      </div>
    </div>
  )
}

