"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MagicBentoProps {
  children: React.ReactNode;
  className?: string;
  spotlightRadius?: number;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  particleCount?: number;
  glowColor?: string;
  enableMagnetism?: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocityX: number;
  velocityY: number;
}

const MagicBento: React.FC<MagicBentoProps> = ({
  children,
  className = '',
  spotlightRadius = 400,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  particleCount = 12,
  glowColor = '0, 122, 255',
  enableMagnetism = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationFrameRef = useRef<number>();

  // Initialize particles
  useEffect(() => {
    if (!enableStars) return;

    const newParticles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 800,
        y: Math.random() * 600,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        velocityX: (Math.random() - 0.5) * 0.5,
        velocityY: (Math.random() - 0.5) * 0.5,
      });
    }
    setParticles(newParticles);
  }, [enableStars, particleCount]);

  // Animate particles
  useEffect(() => {
    if (!enableStars || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setParticles(prevParticles => 
        prevParticles.map(particle => {
          let newX = particle.x + particle.velocityX;
          let newY = particle.y + particle.velocityY;

          // Magnetism effect
          if (enableMagnetism && isHovered) {
            const dx = mousePosition.x - newX;
            const dy = mousePosition.y - newY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              const force = (100 - distance) / 100 * 0.01;
              newX += dx * force;
              newY += dy * force;
            }
          }

          // Bounce off edges
          if (newX <= 0 || newX >= canvas.width) {
            particle.velocityX *= -1;
          }
          if (newY <= 0 || newY >= canvas.height) {
            particle.velocityY *= -1;
          }

          // Keep particles in bounds
          newX = Math.max(0, Math.min(canvas.width, newX));
          newY = Math.max(0, Math.min(canvas.height, newY));

          // Draw particle
          ctx.beginPath();
          ctx.arc(newX, newY, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${glowColor}, ${particle.opacity})`;
          ctx.fill();

          return { ...particle, x: newX, y: newY };
        })
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [enableStars, enableMagnetism, isHovered, mousePosition, glowColor]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Update canvas size
  useEffect(() => {
    const updateCanvasSize = () => {
      if (!canvasRef.current || !containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      canvasRef.current.width = rect.width;
      canvasRef.current.height = rect.height;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={enableMagnetism ? { scale: 1.01 } : {}}
      transition={{ duration: 0.3 }}
    >
      {/* Spotlight effect */}
      {enableSpotlight && isHovered && (
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(${spotlightRadius}px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(${glowColor}, 0.3), transparent 70%)`,
          }}
        />
      )}

      {/* Border glow */}
      {enableBorderGlow && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div 
            className="absolute inset-[1px] rounded-inherit"
            style={{
              background: `linear-gradient(90deg, rgba(${glowColor}, 0.1), rgba(${glowColor}, 0.3), rgba(${glowColor}, 0.1))`,
            }}
          />
        </div>
      )}

      {/* Stars canvas */}
      {enableStars && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default MagicBento; 