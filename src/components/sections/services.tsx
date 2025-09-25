"use client";

import React from 'react';
import { Monitor, Smartphone, Zap, Palette, Code, Search, ShoppingCart, Users, Rocket, Star, Check } from 'lucide-react';

const ServiceCard = ({ children, className, colSpan = 'lg:col-span-1' }: { children: React.ReactNode, className?: string, colSpan?: string }) => {
    return (
        <div className={`bg-card border border-border rounded-xl flex flex-col relative overflow-hidden group min-h-[480px] hover:border-primary/50 transition-all duration-300 ${className} ${colSpan}`}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(0, 122, 255, 0.1) 0%, rgba(0, 122, 255, 0.05) 50%, rgba(0, 122, 255, 0) 100%)' }}></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.15) 0%, rgba(0, 122, 255, 0.05) 50%, rgba(0, 122, 255, 0) 100%)' }}></div>
            <div className="flex-grow p-8 flex flex-col justify-between relative z-10">
                {children}
            </div>
        </div>
    );
};

const StarterPackageCard = () => (
    <ServiceCard className="lg:col-span-1">
        <div className="flex-grow flex flex-col rounded-lg border border-[#282828] bg-[#111111] p-6 text-sm relative overflow-hidden">
            {/* Background Icon */}
            <div className="absolute top-4 right-4 opacity-10">
                <Rocket className="w-16 h-16 text-primary" />
            </div>
            
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">Starter</h3>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-primary">$999</div>
                        <div className="text-xs text-muted-foreground">one-time</div>
                    </div>
                </div>
                
                <p className="text-muted-foreground">Perfect for small businesses and startups who need a professional online presence.</p>
                
                <div className="flex flex-col gap-2 mt-4">
                    {[
                        "5-page responsive website",
                        "Modern, mobile-first design",
                        "Basic SEO optimization",
                        "Contact form integration",
                        "3 rounds of revisions"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            <span className="text-white text-sm">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>
                </div>
        
        <div className="p-8 pt-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-primary" />
                <span>7-day turnaround</span>
            </div>
        </div>
    </ServiceCard>
);

const ProfessionalPackageCard = () => (
    <ServiceCard className="lg:col-span-1">
        <div className="flex-grow flex flex-col rounded-lg border border-[#282828] bg-[#111111] p-6 text-sm relative overflow-hidden">
            {/* Background Icon */}
            <div className="absolute top-4 right-4 opacity-10">
                <Star className="w-16 h-16 text-primary" />
            </div>
            
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-white">Professional</h3>
                        <div className="text-xs text-primary font-medium">MOST POPULAR</div>
            </div>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-primary">$1,999</div>
                        <div className="text-xs text-muted-foreground">one-time</div>
        </div>
                </div>
                
                <p className="text-muted-foreground">For growing businesses that need advanced features and premium design.</p>
                
                <div className="flex flex-col gap-2 mt-4">
                    {[
                        "10-page responsive website",
                        "Custom design & animations",
                        "Advanced SEO optimization",
                        "CMS integration",
                        "Contact forms & analytics",
                        "5 rounds of revisions"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            <span className="text-white text-sm">{feature}</span>
        </div>
                    ))}
                </div>
            </div>
        </div>
        
        <div className="p-8 pt-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-primary" />
                <span>14-day turnaround</span>
            </div>
        </div>
    </ServiceCard>
);

const EnterprisePackageCard = () => (
    <ServiceCard className="lg:col-span-1">
        <div className="flex-grow flex flex-col rounded-lg border border-[#282828] bg-[#111111] p-6 text-sm relative overflow-hidden">
            {/* Background Icon */}
            <div className="absolute top-4 right-4 opacity-10">
                <ShoppingCart className="w-16 h-16 text-primary" />
            </div>
            
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">E-commerce</h3>
                    <div className="text-right">
                        <div className="text-3xl font-bold text-primary">$3,999</div>
                        <div className="text-xs text-muted-foreground">one-time</div>
                    </div>
            </div>
                
                <p className="text-muted-foreground">Full-featured online store with payment processing and inventory management.</p>
                
                <div className="flex flex-col gap-2 mt-4">
                    {[
                        "Custom e-commerce platform",
                        "Payment gateway integration",
                        "Inventory management",
                        "Customer accounts",
                        "Admin dashboard",
                        "Unlimited revisions"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-primary" />
                            <span className="text-white text-sm">{feature}</span>
            </div>
                    ))}
                </div>
            </div>
        </div>
        
        <div className="p-8 pt-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-primary" />
                <span>21-day turnaround</span>
            </div>
        </div>
    </ServiceCard>
);

const ResponsiveDesignCard = () => (
    <ServiceCard className="lg:col-span-2">
        <div className="flex-grow">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">Mobile-First Design</h3>
                    <p className="text-muted-foreground">Responsive across all devices</p>
            </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-[#111111] border border-[#282828] rounded-lg p-4 text-center">
                    <Monitor className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-white">Desktop</div>
                    <div className="text-xs text-muted-foreground">Optimized</div>
                        </div>
                <div className="bg-[#111111] border border-[#282828] rounded-lg p-4 text-center">
                    <Smartphone className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-white">Mobile</div>
                    <div className="text-xs text-muted-foreground">First Priority</div>
                    </div>
                <div className="bg-[#111111] border border-[#282828] rounded-lg p-4 text-center">
                    <Monitor className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-sm font-medium text-white">Tablet</div>
                    <div className="text-xs text-muted-foreground">Perfect Fit</div>
                </div>
            </div>
            
            <p className="text-white">
                Every website we build is designed with mobile users in mind first, then scaled up to larger screens. 
                This ensures optimal performance and user experience across all devices.
            </p>
        </div>
    </ServiceCard>
);

const DesignProcessCard = () => (
    <ServiceCard className="lg:col-span-2">
        <div className="flex-grow">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Palette className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-white">Design Process</h3>
                    <p className="text-muted-foreground">From concept to completion</p>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                {[
                    { step: "1", title: "Discovery", desc: "Understanding your needs" },
                    { step: "2", title: "Design", desc: "Creating visual mockups" },
                    { step: "3", title: "Develop", desc: "Building your website" },
                    { step: "4", title: "Deploy", desc: "Launch & optimization" }
                ].map((item, index) => (
                    <div key={index} className="bg-[#111111] border border-[#282828] rounded-lg p-4">
                        <div className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center mb-2">
                            {item.step}
                        </div>
                        <div className="text-sm font-medium text-white mb-1">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                ))}
            </div>
            
            <p className="text-white">
                We handle the entire process from initial consultation to final launch. 
                You'll see progress at every step with regular updates and preview links.
            </p>
        </div>
    </ServiceCard>
);

const Services = () => {
    return (
        <section id="services" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-b from-white from-45% to-primary bg-clip-text text-transparent">
                            Website Packages
                </span>
            </h2>
                    <p className="text-xl text-muted-foreground">
                        Choose the perfect package for your business needs. All packages include our signature fast turnaround and exceptional design quality.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <StarterPackageCard />
                    <ProfessionalPackageCard />
                    <EnterprisePackageCard />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <ResponsiveDesignCard />
                    <DesignProcessCard />
                </div>

                <div className="text-center mt-16">
                    <p className="text-muted-foreground mb-4">
                        Need something custom? We're flexible with our pricing and packages.
                    </p>
                    <a 
                        href="#contact" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                    >
                        Get Custom Quote
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;