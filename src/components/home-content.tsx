'use client';

import { useState } from 'react';
import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero';
import FeaturesSection from '@/components/sections/features';
import MetricsSection from '@/components/sections/metrics';
import CTASection from '@/components/sections/cta-section';
import FaqSection from '@/components/sections/faq';
import ContactSection from '@/components/sections/contact';
import LoadingAnimation from '@/components/ui/loading-animation';

const HomeContent = () => {
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
                <HeroSection />
                <FeaturesSection />
                <MetricsSection />
                <CTASection />
                <FaqSection />
                <ContactSection />
            </div>
        </>
    );
};

export default HomeContent;