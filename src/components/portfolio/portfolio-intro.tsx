"use client";

import React from 'react';

const PortfolioIntro = () => {
    return (
        <section className="container mx-auto px-6 py-20 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-6">
                    Transforming businesses with 
                    <span className="bg-gradient-to-r from-[#4A90E2] to-[#007AFF] bg-clip-text text-transparent"> AI-powered solutions</span>
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    From cloud infrastructure to intelligent automation, we deliver comprehensive solutions that drive efficiency, reduce costs, and accelerate growth across industries.
                </p>
            </div>
        </section>
    );
};

export default PortfolioIntro; 