'use client';

import { useEffect, useRef, useState } from 'react';

const CursorFollow = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Use refs to store current position for smooth animation
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });
    const trailPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]');
            setIsHovering(!!isInteractive);
        };

        // Smooth animation loop using requestAnimationFrame
        const animateCursor = () => {
            // Smooth interpolation for main cursor (faster)
            cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
            cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;

            // Smooth interpolation for trail (slower)
            trailPos.current.x += (mousePos.current.x - trailPos.current.x) * 0.05;
            trailPos.current.y += (mousePos.current.y - trailPos.current.y) * 0.05;

            // Update cursor position
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - 20}px, ${cursorPos.current.y - 20}px, 0)`;
            }

            // Update trail position
            if (trailRef.current) {
                trailRef.current.style.transform = `translate3d(${trailPos.current.x - 30}px, ${trailPos.current.y - 30}px, 0)`;
            }

            // Update dot position (follows mouse exactly)
            if (dotRef.current) {
                dotRef.current.style.transform = `translate3d(${mousePos.current.x - 2}px, ${mousePos.current.y - 2}px, 0)`;
            }

            requestAnimationFrame(animateCursor);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseover', handleMouseOver);

        // Start animation loop
        const animationId = requestAnimationFrame(animateCursor);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handleMouseOver);
            cancelAnimationFrame(animationId);
        };
    }, [isVisible]);

    return (
        <>
            {/* Main cursor glow */}
            <div
                ref={cursorRef}
                className={`fixed pointer-events-none z-50 transition-all duration-300 will-change-transform ${isVisible ? 'opacity-100' : 'opacity-0'
                    } ${isHovering ? 'scale-150' : 'scale-100'}`}
                style={{ left: 0, top: 0 }}
            >
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#007AFF] blur-sm transition-all duration-300 ${isHovering ? 'opacity-40' : 'opacity-20'
                    }`} />
            </div>

            {/* Trailing cursor */}
            <div
                ref={trailRef}
                className={`fixed pointer-events-none z-40 transition-all duration-700 ease-out will-change-transform ${isVisible ? 'opacity-40' : 'opacity-0'
                    } ${isHovering ? 'scale-125' : 'scale-100'}`}
                style={{ left: 0, top: 0 }}
            >
                <div className="w-15 h-15 rounded-full bg-gradient-to-r from-[#4A90E2]/10 to-[#007AFF]/10 blur-md" />
            </div>

            {/* Small center dot */}
            <div
                ref={dotRef}
                className={`fixed pointer-events-none z-50 transition-all duration-200 will-change-transform ${isVisible ? 'opacity-100' : 'opacity-0'
                    } ${isHovering ? 'scale-0' : 'scale-100'}`}
                style={{ left: 0, top: 0 }}
            >
                <div className="w-1 h-1 rounded-full bg-[#007AFF]" />
            </div>
        </>
    );
};

export default CursorFollow;