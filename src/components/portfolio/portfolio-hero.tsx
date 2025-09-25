"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

const PortfolioHero = () => {
    return (
        <header className="relative flex flex-col items-center justify-center bg-background text-center min-h-screen overflow-hidden">
            {/* Blue radial gradient background - matching home page */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(0,122,255,0.3),transparent_80%)]" />

            <div className="container z-10 flex flex-col items-center gap-6">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-bold tracking-tight lg:-tracking-[2px] text-foreground leading-none">
                    Our{' '}
                    <span className="bg-gradient-to-b from-white from-45% to-primary bg-clip-text text-transparent">
                        Portfolio
                    </span>
                    <span className="bg-gradient-to-r from-[#4A90E2] to-[#007AFF] bg-clip-text text-transparent">.</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl max-w-3xl text-muted-foreground">
                    Custom AI solutions that transform businesses across industries.
                </p>
                <div className="mt-6 flex items-center p-1 rounded-full bg-secondary border border-border">
                    <a
                        href="#cloud-devops"
                        className="px-6 py-2.5 text-sm font-semibold text-foreground bg-[#0F0F0F] rounded-full hover:bg-neutral-800 transition-colors"
                    >
                        explore our work
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-foreground rounded-full hover:bg-neutral-800/50 transition-colors"
                    >
                        <span>start your project</span>
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </div>

            {/* Gradient fade to bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
        </header>
    );
};

export default PortfolioHero;