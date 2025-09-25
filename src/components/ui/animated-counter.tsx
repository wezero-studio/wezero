"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
  delay?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  duration = 2000,
  suffix = '',
  className = '',
  delay = 0,
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now() + delay;
    const startValue = 0;
    const endValue = value;

    const updateValue = () => {
      const now = Date.now();
      const elapsed = now - startTime;

      if (elapsed < 0) {
        requestAnimationFrame(updateValue);
        return;
      }

      if (elapsed < duration) {
        const progress = elapsed / duration;
        // Easing function - ease out cubic
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = startValue + (endValue - startValue) * easedProgress;
        setDisplayValue(Math.floor(currentValue));
        requestAnimationFrame(updateValue);
      } else {
        setDisplayValue(endValue);
      }
    };

    requestAnimationFrame(updateValue);
  }, [isInView, value, duration, delay]);

  const formatValue = (num: number) => {
    // Add commas for thousands
    return num.toLocaleString();
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className={className}
    >
      <span className="tabular-nums">
        {formatValue(displayValue)}{suffix}
      </span>
    </motion.div>
  );
};

export default AnimatedCounter; 