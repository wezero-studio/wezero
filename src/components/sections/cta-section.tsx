"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
    ArrowRight, 
    MessageCircle, 
    Calendar, 
    Mail, 
    Phone,
    Sparkles,
    Rocket
} from 'lucide-react';

const BentoCard = ({ 
    children, 
    className = "", 
    gradient = "from-primary/10 to-blue-500/5"
}: { 
    children: React.ReactNode, 
    className?: string,
    gradient?: string 
}) => {
    return (
        <motion.div
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
            className={`relative group bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 ${className}`}
        >
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative z-10 h-full">
                {children}
            </div>
        </motion.div>
    );
};

const CTASection = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/3 rounded-full blur-3xl" />
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
                            Ready to Get Started?
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Choose how you'd like to begin your journey with wezero
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {/* Main CTA - spans 2 columns on lg */}
                    <BentoCard className="lg:col-span-2 p-8" gradient="from-primary/10 to-purple-500/10">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 h-full">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                                        <Rocket className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Launch Your Website</h3>
                                </div>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Get a professional website that converts visitors into customers. 
                                    Fast delivery, custom design, unbeatable pricing.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="#contact"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 group"
                                    >
                                        <Calendar className="w-4 h-4" />
                                        <span>Book Consultation</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </a>
                                    <a
                                        href="mailto:hello@wezero.studio"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-secondary border border-border text-white rounded-full font-semibold hover:bg-secondary/80 transition-colors duration-300"
                                    >
                                        <Mail className="w-4 h-4" />
                                        <span>Send Email</span>
                                    </a>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                                    <Sparkles className="w-16 h-16 text-primary" />
                                </div>
                            </div>
                        </div>
                    </BentoCard>

                    {/* Quick Contact */}
                    <BentoCard className="p-6" gradient="from-green-500/10 to-emerald-500/10">
                        <div className="text-center h-full flex flex-col justify-center">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                                <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Message us on Instagram</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                Follow us and send a DM for quick responses
                            </p>
                            <a
                                href="https://www.instagram.com/wezero.studio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium hover:bg-green-500/30 transition-colors duration-300"
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>@wezero.studio</span>
                            </a>
                        </div>
                    </BentoCard>

                    {/* Emergency Contact */}
                    <BentoCard className="p-6" gradient="from-orange-500/10 to-red-500/10">
                        <div className="text-center h-full flex flex-col justify-center">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Urgent Project?</h3>
                            <p className="text-muted-foreground text-sm mb-4">
                                Need it fast? We offer rush delivery options
                            </p>
                            <a
                                href="tel:+1234567890"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium hover:bg-orange-500/30 transition-colors duration-300"
                            >
                                <Phone className="w-4 h-4" />
                                <span>Call Now</span>
                            </a>
                        </div>
                    </BentoCard>

                    {/* Support */}
                    <BentoCard className="lg:col-span-2 p-6" gradient="from-blue-500/10 to-cyan-500/10">
                        <div className="flex items-center gap-6 h-full">
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    Get ongoing support, maintenance, and updates for your website
                                </p>
                                <a
                                    href="#faq"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium hover:bg-blue-500/30 transition-colors duration-300"
                                >
                                    <span>View FAQ</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                            </div>
                        </div>
                    </BentoCard>
                </div>
            </div>
        </section>
    );
};

export default CTASection; 