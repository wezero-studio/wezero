"use client";

import React, { useState, useEffect, useRef } from 'react';

interface ShuffleTextProps {
  text: string;
  duration?: number;
  triggerOnHover?: boolean;
  className?: string;
  chars?: string;
}

const ShuffleText: React.FC<ShuffleTextProps> = ({
  text,
  duration = 0.5,
  triggerOnHover = false,
  className = '',
  chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const shuffle = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    let iterations = 0;
    const maxIterations = text.length;

    intervalRef.current = setInterval(() => {
      setDisplayText(prevText => 
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iterations) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      iterations += 1 / 3;

      if (iterations >= maxIterations) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setDisplayText(text);
        timeoutRef.current = setTimeout(() => {
          setIsAnimating(false);
        }, 100);
      }
    }, (duration * 1000) / maxIterations);
  };

  useEffect(() => {
    if (!triggerOnHover) {
      shuffle();
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (triggerOnHover) {
      shuffle();
    }
  };

  return (
    <span 
      className={className}
      onMouseEnter={handleMouseEnter}
      style={{ cursor: triggerOnHover ? 'pointer' : 'default' }}
    >
      {displayText}
    </span>
  );
};

export default ShuffleText; 