'use client';

import { useState } from 'react';
import Navigation from '@/components/sections/navigation';
import LoadingAnimation from '@/components/ui/loading-animation';
import PortfolioHero from '@/components/portfolio/portfolio-hero';
import PortfolioIntro from '@/components/portfolio/portfolio-intro';
import CloudDevOpsSection from '@/components/portfolio/cloud-devops-section';
import N8nLangchainSection from '@/components/portfolio/n8n-langchain-section';
import ChatbotSection from '@/components/portfolio/chatbot-section';
import WorkflowAutomationSection from '@/components/portfolio/workflow-automation-section';
import ContactSection from '@/components/sections/contact';

const PortfolioContent = () => {
    const [isLoading, setIsLoading] = useState(true);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
            <div
                className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
            >
                <Navigation />
                <section id="hero">
                    <PortfolioHero />
                </section>
                <section id="introduction">
                    <PortfolioIntro />
                </section>
                <section id="cloud-devops">
                    <CloudDevOpsSection />
                </section>
                <section id="n8n-langchain">
                    <N8nLangchainSection />
                </section>
                <section id="chatbot">
                    <ChatbotSection />
                </section>
                <section id="workflow-automation">
                    <WorkflowAutomationSection />
                </section>
                <section id="contact">
                    <ContactSection />
                </section>
            </div>
        </>
    );
};

export default PortfolioContent;