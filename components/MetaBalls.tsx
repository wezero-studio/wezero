"use client"

import { useEffect, useRef } from "react"

interface MetaBallsProps {
  color?: string
  cursorBallColor?: string
  cursorBallSize?: number
  ballCount?: number
  animationSize?: number
  enableMouseInteraction?: boolean
  enableTransparency?: boolean
  hoverSmoothness?: number
  clumpFactor?: number
  speed?: number
}

export default function MetaBalls({
  color = "#ffffff",
  cursorBallColor = "#ffffff",
  cursorBallSize = 2,
  ballCount = 15,
  animationSize = 30,
  enableMouseInteraction = true,
  enableTransparency = true,
  hoverSmoothness = 0.05,
  clumpFactor = 1,
  speed = 0.3,
}: MetaBallsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const balls = useRef<Array<{ x: number; y: number; vx: number; vy: number; radius: number }>>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initBalls()
    }

    const initBalls = () => {
      balls.current = []
      for (let i = 0; i < ballCount; i++) {
        balls.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          radius: Math.random() * 10 + 5,
        })
      }
    }

    const draw = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update ball positions
      balls.current.forEach((ball) => {
        ball.x += ball.vx
        ball.y += ball.vy

        // Bounce off walls
        if (ball.x < 0 || ball.x > canvas.width) ball.vx *= -1
        if (ball.y < 0 || ball.y > canvas.height) ball.vy *= -1

        // Mouse interaction
        if (enableMouseInteraction) {
          const dx = mousePos.current.x - ball.x
          const dy = mousePos.current.y - ball.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < animationSize) {
            ball.x += (dx / distance) * hoverSmoothness * clumpFactor
            ball.y += (dy / distance) * hoverSmoothness * clumpFactor
          }
        }
      })

      // Draw metaballs
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2,
      )

      gradient.addColorStop(0, color)
      gradient.addColorStop(1, enableTransparency ? "transparent" : color)

      ctx.fillStyle = gradient
      ctx.beginPath()

      // Draw balls
      balls.current.forEach((ball) => {
        ctx.moveTo(ball.x + ball.radius, ball.y)
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
      })

      // Draw cursor ball
      if (enableMouseInteraction) {
        ctx.moveTo(mousePos.current.x + cursorBallSize, mousePos.current.y)
        ctx.arc(mousePos.current.x, mousePos.current.y, cursorBallSize, 0, Math.PI * 2)
      }

      ctx.fill()
    }

    const animate = () => {
      draw()
      requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    window.addEventListener("resize", resize)
    canvas.addEventListener("mousemove", handleMouseMove)

    resize()
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [
    color,
    cursorBallSize,
    ballCount,
    animationSize,
    enableMouseInteraction,
    enableTransparency,
    hoverSmoothness,
    clumpFactor,
    speed,
  ])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

