"use client";

import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from '@/components/ui/animated-counter';

const metrics = [
    {
        value: 150,
        suffix: "+",
        label: "Websites Delivered",
        description: "Successfully launched projects"
    },
    {
        value: 98,
        suffix: "%",
        label: "Client Satisfaction",
        description: "Happy customers rate"
    },
    {
        value: 12,
        suffix: " Days",
        label: "Average Delivery",
        description: "From start to finish"
    },
    {
        value: 24,
        suffix: "/7",
        label: "Support Available",
        description: "Always here to help"
    }
];



const MetricCard = ({ metric, index }: { metric: typeof metrics[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="text-center"
        >
            {/* Number */}
            <div className="mb-4">
                <AnimatedCounter 
                    value={metric.value} 
                    suffix={metric.suffix}
                    duration={2000}
                    delay={index * 200}
                    className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-white to-primary bg-clip-text text-transparent"
                />
            </div>
            
            {/* Label */}
            <h3 className="text-xl font-bold text-white mb-2">
                {metric.label}
            </h3>
            
            {/* Description */}
            <p className="text-muted-foreground">
                {metric.description}
            </p>
        </motion.div>
    );
};

const MetricsSection = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(0,122,255,0.1)_0%,_transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_rgba(0,122,255,0.1)_0%,_transparent_50%)]" />
            </div>
            
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-b from-white from-45% to-primary bg-clip-text text-transparent">
                            Trusted Results
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Numbers that speak to our commitment to excellence
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <MetricCard key={index} metric={metric} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MetricsSection; 