"use client";

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from "@/lib/utils";

// Main (home) navigation links excluding /portfolio internal sections
const mainNavLinks = [
    { name: 'features', label: 'features', href: '#features' },
    { name: 'FAQ', label: 'FAQ', href: '#faq' },
    { name: 'contact', label: 'contact', href: '#contact' },
];

// Portfolio page specific navigation (anchors within portfolio page)
const portfolioNavLinks = [
    { name: 'introduction', label: 'intro', href: '#introduction' },
    { name: 'cloud-devops', label: 'cloud & devops', href: '#cloud-devops' },
    { name: 'n8n-langchain', label: 'n8n & langchain', href: '#n8n-langchain' },
    { name: 'chatbot', label: 'chatbot', href: '#chatbot' },
    { name: 'workflow-automation', label: 'workflow automation', href: '#workflow-automation' },
    { name: 'contact', label: 'contact', href: '#contact' },
    { name: 'home', label: 'home', href: '/', externalPage: true },
];

const Navigation = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const onPortfolioPage = pathname === '/portfolio';
    const navLinks = onPortfolioPage ? portfolioNavLinks : mainNavLinks;

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="dark fixed top-6 z-50 w-full px-6">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between h-14">
                    <Link href="/" className="flex items-center gap-3 z-10">
                        <img
                            src="/logo/wezero2.svg"
                            alt="wezero Logo"
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                        <span className="text-white text-xl font-semibold -tracking-[0.4px]">wezero</span>
                    </Link>

                    <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
                        {navLinks.map((link) => {
                            const baseClasses = "px-4 py-2 rounded-full text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-colors duration-200 flex items-center gap-1";
                            const label = link.label || link.name;
                            const isExternalPage = !!link.externalPage;
                            // When on home page, portfolio is external-page style; when on portfolio page, home is external-page style
                            if (isExternalPage) {
                                const isPortfolioExternal = link.name === 'portfolio' && !onPortfolioPage;
                                const isHomeExternal = link.name === 'home' && onPortfolioPage;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        target={isPortfolioExternal || isHomeExternal ? '_blank' : undefined}
                                        rel={isPortfolioExternal || isHomeExternal ? 'noopener noreferrer' : undefined}
                                        className={baseClasses}
                                    >
                                        {label}
                                        {(isPortfolioExternal || isHomeExternal) && (
                                            <ArrowUpRight className="w-3.5 h-3.5" />
                                        )}
                                    </Link>
                                );
                            }
                            if (link.href.startsWith('#')) {
                                return (
                                    <a key={link.name} href={link.href} className={baseClasses}>
                                        {label}
                                    </a>
                                );
                            }
                            return (
                                <Link key={link.name} href={link.href} className={baseClasses}>
                                    {label}
                                </Link>
                            );
                        })}
                    </div>

                    <a
                        href="#contact"
                        className="hidden lg:inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black text-[15px] font-semibold hover:bg-neutral-200 transition-colors duration-200"
                    >
                        Contact us
                    </a>

                    <div className="lg:hidden z-10">
                        <button
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                            className="p-2 rounded-full text-white bg-white/10 hover:bg-white/20 transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>
            </div>

            {/* Mobile Menu */}
            <div className={cn(
                "lg:hidden fixed inset-x-0 top-0 bottom-0 bg-background/80 backdrop-blur-lg z-0 transition-opacity duration-300",
                isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="container mx-auto mt-28 flex flex-col items-center gap-6">
                    {navLinks.map((link) => {
                        const label = (link.label || link.name).charAt(0).toUpperCase() + (link.label || link.name).slice(1);
                        const className = "text-2xl font-semibold text-neutral-300 hover:text-white transition-colors flex items-center gap-2";
                        const isExternalPage = !!link.externalPage;
                        const isPortfolioExternal = link.name === 'portfolio' && !onPortfolioPage;
                        const isHomeExternal = link.name === 'home' && onPortfolioPage;
                        if (isExternalPage) {
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    target={isPortfolioExternal || isHomeExternal ? '_blank' : undefined}
                                    rel={isPortfolioExternal || isHomeExternal ? 'noopener noreferrer' : undefined}
                                    onClick={toggleMobileMenu}
                                    className={className}
                                >
                                    {label}
                                    {(isPortfolioExternal || isHomeExternal) && <ArrowUpRight className="w-5 h-5" />}
                                </Link>
                            );
                        }
                        if (link.href.startsWith('#')) {
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={toggleMobileMenu}
                                    className={className}
                                >
                                    {label}
                                </a>
                            );
                        }
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={toggleMobileMenu}
                                className={className}
                            >
                                {label}
                            </Link>
                        );
                    })}
                    <a
                        href="#contact"
                        onClick={toggleMobileMenu}
                        className="mt-4 inline-flex items-center justify-center px-8 py-4 rounded-full bg-white text-black text-lg font-semibold hover:bg-neutral-200 transition-colors duration-200"
                    >
                        Contact us
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navigation;