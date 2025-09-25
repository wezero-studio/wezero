"use client";

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Basic',
        monthlyPrice: 750,
        description: 'For businesses looking to start with AI and automations.',
        features: [
            '1 developer',
            'Basic chatbots & LLMs',
            '5 monthly workflow automations',
            '50 monhtly content creation requests',
            'Cancel & pause anytime',
        ],
        isRecommended: false,
    },
    {
        name: 'Professional',
        monthlyPrice: 1500,
        description: 'For businesses looking to outperform their competition with AI and automations.',
        features: [
            '2 developers',
            'Custom chatbots & LLMs',
            '15 monthly workflow automations',
            '100 monhtly content creation requests',
            'Cancel & pause anytime',
        ],
        isRecommended: true,
    },
    {
        name: 'Enterprise',
        monthlyPrice: 3000,
        description: 'For businesses looking to fully leverage AI and automations to become an industry leader.',
        features: [
            '3 developers',
            'Custom chatbots & LLMs',
            'Unlimited workflow automations',
            'Unlimited content creation requests',
            'Cancel & pause anytime',
        ],
        isRecommended: false,
    },
];

const PricingSection = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <section id="pricing" className="bg-background py-[80px]">
            <div className="container mx-auto max-w-[1200px] px-6 flex flex-col items-center">
                <div className="text-center">
                    <h2 className="text-[72px] font-bold leading-none tracking-[-1.5px]">
                        <span className="bg-gradient-to-b from-white from-45% to-primary bg-clip-text text-transparent">
                            Subscriptions
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-md mx-auto">
                        Three different subscriptions to match your companies' needs.
                    </p>
                </div>

                <div className="mt-8 inline-flex items-center rounded-lg border border-border bg-card p-1">
                    <button
                        onClick={() => setIsAnnual(false)}
                        className={cn(
                            'px-4 py-1.5 rounded-md text-sm font-medium transition-colors',
                            !isAnnual
                                ? 'bg-[#1f1f1f] text-white'
                                : 'text-muted-foreground hover:text-white'
                        )}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setIsAnnual(true)}
                        className={cn(
                            'px-4 py-1.5 rounded-md text-sm font-medium transition-colors',
                            isAnnual
                                ? 'bg-[#1f1f1f] text-white'
                                : 'text-muted-foreground hover:text-white'
                        )}
                    >
                        Annually (-20% )
                    </button>
                </div>

                <div className="mt-12 grid w-full grid-cols-1 gap-6 lg:grid-cols-3">
                    {plans.map((plan) => {
                        const price = isAnnual ? plan.monthlyPrice * 0.8 : plan.monthlyPrice;
                        const priceString = new Intl.NumberFormat('de-DE').format(price);

                        const cardContent = (
                            <div className="flex h-full flex-col bg-card p-8 rounded-[7px]">
                                <p className="text-lg font-medium text-foreground">{plan.name}</p>
                                <div className="mt-4">
                                    <span className="text-5xl font-semibold tracking-tighter text-foreground">
                                        €{priceString}
                                    </span>
                                    <span className="text-lg text-muted-foreground">/month</span>
                                </div>
                                <p className="mt-4 text-base text-muted-foreground" style={{ minHeight: '6rem' }}>
                                    {plan.description}
                                </p>
                                <ul className="mt-8 space-y-4 flex-grow">
                                    {plan.features.map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-primary" />
                                            </div>
                                            <span className="ml-3 text-base text-foreground">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="#"
                                    className={cn(
                                        'mt-8 block w-full text-center py-3 rounded-md transition-colors text-base',
                                        plan.isRecommended
                                            ? 'bg-primary text-primary-foreground font-semibold hover:bg-primary/90'
                                            : 'border border-border bg-card hover:bg-secondary'
                                    )}
                                >
                                    {plan.isRecommended ? (
                                        <strong>Choose this plan</strong>
                                    ) : (
                                        "Choose this plan"
                                    )}
                                </a>
                            </div>
                        );

                        return plan.isRecommended ? (
                            <div key={plan.name} className="relative rounded-lg p-px bg-gradient-to-b from-blue-500/80 via-blue-500/40 to-transparent">
                                {cardContent}
                            </div>
                        ) : (
                            <div key={plan.name} className="border border-border rounded-lg">
                                {cardContent}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;