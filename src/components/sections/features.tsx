"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
    Zap, 
    Palette, 
    Shield, 
    Clock, 
    Smartphone, 
    TrendingUp,
    ArrowRight,
    CheckCircle
} from 'lucide-react';
import SpotlightCard from '@/components/ui/spotlight-card';
import ShuffleText from '@/components/ui/shuffle-text';
import MagicBento from '@/components/ui/magic-bento';

const features = [
    {
        icon: Zap,
        title: "Lightning Fast",
        description: "Optimized for speed with modern web technologies",
        stats: "< 3s load time",
        color: "from-yellow-400 to-orange-500"
    },
    {
        icon: Palette,
        title: "Custom Design",
        description: "Unique designs tailored to your brand identity",
        stats: "100% custom",
        color: "from-purple-400 to-pink-500"
    },
    {
        icon: Smartphone,
        title: "Mobile First",
        description: "Perfect experience across all devices",
        stats: "Mobile optimized",
        color: "from-blue-400 to-cyan-500"
    },
    {
        icon: Shield,
        title: "Secure & Reliable",
        description: "Built with security and performance in mind",
        stats: "99.9% uptime",
        color: "from-green-400 to-emerald-500"
    },
    {
        icon: Clock,
        title: "Quick Delivery",
        description: "From concept to launch in record time",
        stats: "7-21 days",
        color: "from-indigo-400 to-purple-500"
    },
    {
        icon: TrendingUp,
        title: "Growth Focused",
        description: "Designed to convert visitors into customers",
        stats: "+40% conversion",
        color: "from-red-400 to-pink-500"
    }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative h-full"
        >
            <SpotlightCard 
                className="p-8 group h-full flex flex-col"
                spotlightColor={`rgba(${feature.color.includes('yellow') ? '255, 193, 7' : 
                                       feature.color.includes('purple') ? '168, 85, 247' : 
                                       feature.color.includes('blue') ? '59, 130, 246' : 
                                       feature.color.includes('green') ? '34, 197, 94' : 
                                       feature.color.includes('indigo') ? '99, 102, 241' : 
                                       '239, 68, 68'}, 0.25)`}
            >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                        <ShuffleText 
                            text={feature.title}
                            triggerOnHover={true}
                            duration={0.3}
                        />
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                        {feature.description}
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{feature.stats}</span>
                    </div>
                </div>
                
                {/* Hover arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5 text-primary" />
                </div>
            </SpotlightCard>
        </motion.div>
    );
};

const FeaturesSection = () => {
    return (
        <section id="features" className="py-24 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
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
                            <ShuffleText 
                                text="Why Choose wezero"
                                duration={0.8}
                                triggerOnHover={false}
                            />
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        We don't just build websites - we create digital experiences that drive results
                    </p>
                </motion.div>

                <MagicBento 
                    className="rounded-3xl"
                    spotlightRadius={500}
                    enableStars={true}
                    enableSpotlight={true}
                    enableBorderGlow={true}
                    particleCount={8}
                    glowColor="0, 122, 255"
                    enableMagnetism={true}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 items-stretch">
                        {features.map((feature, index) => (
                            <FeatureCard key={index} feature={feature} index={index} />
                        ))}
                    </div>
                </MagicBento>
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <a 
                        href="#services" 
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 group"
                    >
                        <span>See Our Packages</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturesSection; 