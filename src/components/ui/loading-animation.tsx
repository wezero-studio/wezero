'use client';

import { useEffect, useState } from 'react';

interface LoadingAnimationProps {
    onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
    const [stage, setStage] = useState<'initial' | 'text-reveal' | 'fade-out' | 'complete'>('initial');

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setStage('text-reveal');
        }, 500);

        const timer2 = setTimeout(() => {
            setStage('fade-out');
        }, 3000);

        const timer3 = setTimeout(() => {
            setStage('complete');
            onComplete();
        }, 4000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [onComplete]);

    if (stage === 'complete') return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-1000 ${stage === 'fade-out' ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {/* Background with the same gradient as hero */}
            <div className="absolute inset-0 bg-background">
                <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(0,122,255,0.3),transparent_80%)]" />
            </div>

            {/* Floating design elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating circles */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/10 animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-500/10 animate-pulse delay-1000"></div>
                <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-primary/15 animate-pulse delay-500"></div>
                
                {/* Floating particles */}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-primary/30"
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + (i % 2) * 40}%`,
                            animation: stage === 'text-reveal' ? `float 3s ease-in-out infinite ${i * 0.5}s` : 'none',
                        }}
                    />
                ))}
            </div>

            {/* wezero Text Animation */}
            <div className="relative z-10 text-center">
                <div className="relative">
                    {/* Subtle glow effect behind text */}
                    <div className="absolute inset-0 blur-2xl opacity-50">
                        <h1 className="text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-bold tracking-tight bg-gradient-to-b from-white from-45% to-primary bg-clip-text text-transparent">
                            wezero
                        </h1>
                    </div>
                    
                    {/* Main text */}
                    <h1
                        className={`relative text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-bold tracking-tight transition-all duration-2000 ease-out ${stage === 'text-reveal'
                                ? 'opacity-100 scale-100 blur-0'
                                : 'opacity-0 scale-110 blur-sm'
                            }`}
                    >
                        <span className="bg-gradient-to-b from-white from-45% to-primary bg-clip-text text-transparent">
                            wezero
                        </span>
                    </h1>
                </div>

                {/* Enhanced loading indicator */}
                <div
                    className={`flex flex-col items-center mt-12 transition-opacity duration-1000 ${stage === 'text-reveal' ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {/* Loading bar */}
                    <div className="w-48 h-1 bg-border rounded-full overflow-hidden mb-4">
                        <div 
                            className="h-full bg-gradient-to-r from-primary to-blue-600 rounded-full origin-left"
                            style={{
                                animation: stage === 'text-reveal' ? 'loadingBar 2.5s ease-in-out infinite' : 'none',
                            }}
                        />
                    </div>
                    
                    {/* Animated dots */}
                    <div className="flex justify-center space-x-3">
                        {[0, 1, 2].map((i) => (
                            <div
                                key={i}
                                className="w-2.5 h-2.5 rounded-full bg-primary/80"
                                style={{
                                    animation: stage === 'text-reveal' ? `bounce 1.4s ease-in-out infinite ${i * 0.16}s` : 'none',
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes bounce {
                    0%, 80%, 100% {
                        transform: scale(0);
                    }
                    40% {
                        transform: scale(1);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                        opacity: 0.7;
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                        opacity: 1;
                    }
                }

                @keyframes loadingBar {
                    0% {
                        transform: scaleX(0);
                    }
                    50% {
                        transform: scaleX(0.7);
                    }
                    100% {
                        transform: scaleX(1);
                    }
                }
            `}</style>
        </div>
    );
};

export default LoadingAnimation;