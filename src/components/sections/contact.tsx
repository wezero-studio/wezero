"use client";

import React from "react";
import { Calendar, ArrowUpRight } from "lucide-react";
import CalendlyButton from "@/components/ui/calendly-button";

// Contact section simplified to match global heading/text styles and use the exact Calendly wrapper format requested.
const ContactSection = () => {
    return (
        <section id="contact" className="bg-background py-40 px-6 lg:px-8">
            {/* Heading + Intro (constrained width) */}
            <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-10">
                <h2 className="text-center text-7xl font-bold tracking-[-1.5px]">
                    <span className="bg-gradient-to-b from-white from-45% to-primary bg-clip-text text-transparent">
                        Let's Build Together
                    </span>
                </h2>
                <p className="max-w-2xl text-center text-lg leading-relaxed text-muted-foreground">
                    Ready to transform your online presence? Book a free consultation to discuss your project, get a custom quote, and see how we can bring your vision to life.
                </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
                <CalendlyButton
                    url="https://calendly.com/infowezerostudio/30min"
                    className="group flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                    <Calendar className="w-5 h-5" />
                    <span>Schedule a Consultation with wezero studio</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </CalendlyButton>
                
                <a
                    href="mailto:infowezerostudio@gmail.com"
                    className="flex items-center gap-3 px-8 py-4 bg-secondary border border-border text-white rounded-full font-semibold text-lg hover:bg-secondary/80 transition-colors duration-300"
                >
                    <span>Send Email Instead</span>
                </a>
            </div>

            {/* Additional info */}
            <div className="mx-auto mt-8 max-w-xl">
                <p className="text-center text-sm text-muted-foreground">
                    Free consultation • No commitment • Quick response guaranteed
                </p>
                <p className="text-center text-xs text-muted-foreground mt-2">
                    Or email us directly at <a href="mailto:infowezerostudio@gmail.com" className="text-primary hover:underline">infowezerostudio@gmail.com</a>
                </p>
            </div>
        </section>
    );
};

export default ContactSection;
