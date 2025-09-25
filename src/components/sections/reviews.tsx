"use client";

import React from 'react';
import { Star } from 'lucide-react';

interface ReviewProps {
    quote: string;
    author: string;
    title: string;
    company: string;
    image: string;
}

const reviews: ReviewProps[] = [
    {
        quote: "wezero delivered our website faster than we ever imagined possible. The design exceeded our expectations and the whole process was seamless.",
        author: "Sarah Chen",
        title: "Marketing Director",
        company: "TechFlow Solutions",
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    },
    {
        quote: 'Our new website has significantly increased our conversion rate. The mobile-first approach really paid off for our business.',
        author: 'Marcus Johnson',
        title: 'CEO',
        company: 'Local Fitness Co',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
        quote: "The pricing was unbeatable and the quality was exceptional. wezero handled all the technical stuff so we could focus on our business.",
        author: 'Emily Rodriguez',
        title: 'Founder',
        company: 'Artisan Bakery',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    {
        quote: 'From concept to launch in just 10 days. wezero is a game-changer for any business looking to establish a strong online presence.',
        author: 'David Park',
        title: 'Operations Manager',
        company: 'Green Energy Plus',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
];

const ReviewCard = ({ review }: { review: ReviewProps }) => {
    return (
        <div className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-colors duration-300">
            <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
            </div>
            <blockquote className="text-white text-lg leading-relaxed mb-6">
                    "{review.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
                <img
                        src={review.image}
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                    <div className="font-semibold text-white">{review.author}</div>
                    <div className="text-sm text-muted-foreground">
                        {review.title} at {review.company}
                    </div>
                </div>
            </div>
        </div>
    );
};

const ReviewsSection = () => {
    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6">
                    <span className="bg-gradient-to-b from-white from-45% to-primary bg-clip-text text-transparent">
                            What Our Clients Say
                    </span>
                </h2>
                    <p className="text-xl text-muted-foreground">
                        Don't just take our word for it. Here's what business owners say about working with wezero.
                    </p>
            </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                    ))}
                </div>

                <div className="text-center mt-16">
                    <p className="text-muted-foreground mb-4">
                        Ready to join our satisfied clients?
                    </p>
                    <a 
                        href="#contact" 
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
                    >
                        Start Your Project
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ReviewsSection;