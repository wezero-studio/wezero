"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "How quickly can you deliver my website?",
        answer: "Our turnaround times depend on the package you choose. Starter packages are delivered in 7 days, Professional packages in 14 days, and E-commerce solutions in 21 days. We prioritize speed without compromising on quality."
    },
    {
        question: "What's included in the pricing?",
        answer: "All packages include design, development, mobile optimization, basic SEO, and hosting setup. Professional and E-commerce packages include additional features like CMS integration, advanced SEO, and ongoing support."
    },
    {
        question: "Do I need to provide content and images?",
        answer: "While we can work with your existing content, we also offer content creation and professional photography services. We'll guide you through what's needed and can handle everything from copywriting to image sourcing."
    },
    {
        question: "Will my website work on mobile devices?",
        answer: "Absolutely! All our websites are built with a mobile-first approach. This means your site will look and perform perfectly on smartphones, tablets, and desktop computers."
    },
    {
        question: "Can you help with ongoing maintenance?",
        answer: "Yes! We offer maintenance packages for updates, security monitoring, and performance optimization. We'll also train you on how to make basic updates yourself if you prefer."
    },
    {
        question: "What if I need changes after the website is live?",
        answer: "Each package includes revision rounds during development. After launch, we offer additional revision packages or can discuss ongoing design partnership for continuous improvements."
    },
    {
        question: "Do you work with small businesses?",
        answer: "We specialize in working with small to medium businesses! Our packages are specifically designed to give smaller companies access to professional web design at affordable prices."
    },
    {
        question: "What technologies do you use?",
        answer: "We use modern, proven technologies including React, Next.js, and other industry-standard tools. This ensures your website is fast, secure, and easy to maintain."
    }
];

const FAQItem = ({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) => {
    return (
        <div className="border border-border rounded-xl bg-card self-start">
            <button
                onClick={onToggle}
                className="w-full p-6 text-left hover:bg-card/80 transition-colors duration-200 flex items-center justify-between"
            >
                <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
                <ChevronDown
                    className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                    }`}
                />
            </button>
            <div 
                className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'opacity-100' : 'opacity-0 max-h-0'
                }`}
                style={{
                    maxHeight: isOpen ? '300px' : '0px',
                    overflow: 'hidden'
                }}
            >
                <div className="border-t border-border px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed pt-4">{item.answer}</p>
                </div>
            </div>
        </div>
    );
};

const FaqSection = () => {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section id="faq" className="py-24 bg-background">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-b from-white from-45% to-primary bg-clip-text text-transparent">
                            Frequently Asked Questions
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Got questions? We've got answers. Here are the most common questions we get about our website packages.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                        {faqData.map((item, index) => (
                            <FAQItem
                                key={index}
                                item={item}
                                isOpen={openItems.includes(index)}
                                onToggle={() => toggleItem(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="text-center mt-16">
                    <p className="text-muted-foreground mb-4">
                        Have a different question?
                    </p>
                    <a 
                        href="#contact" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                    >
                        Ask Us Anything
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;