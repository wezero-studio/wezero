import React from 'react';

const IntroSection = () => {
    return (
        <section
            id="about"
            className="relative flex w-full flex-col items-center justify-center bg-background py-40 px-6 overflow-hidden"
        >
            {/* Background Text */}
            <div
                className="absolute inset-0 z-0 flex select-none items-center justify-center"
                aria-hidden="true"
            >
                <p
                    className="text-center font-bold"
                    style={{
                        fontSize: '320px',
                        lineHeight: 1,
                        letterSpacing: '-0.02em',
                        color: 'rgba(255, 255, 255, 0.03)',
                    }}
                >
                    wezero
                </p>
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center gap-12">
                <h3 className="max-w-[900px] text-center text-[48px] font-semibold leading-[1.2] -tracking-[1px] text-foreground">
                    We're wezero. We create{' '}
                    <span className="bg-gradient-to-r from-[--color-gradient-blue-light] to-[--color-gradient-blue-dark] bg-clip-text text-transparent">
                        stunning websites
                    </span>{' '}
                    for growing{' '}
                    <span className="bg-gradient-to-r from-[--color-gradient-blue-light] to-[--color-gradient-blue-dark] bg-clip-text text-transparent">
                        businesses
                    </span>
                    .
                </h3>

                <a
                    href="#contact"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg"
                >
                    <div className="absolute inset-0 rounded-lg bg-secondary shadow-[inset_0_0_0_1px_var(--color-border)] transition-shadow duration-200 group-hover:shadow-[inset_0_0_0_1px_var(--color-primary)]"></div>
                    <div className="relative z-10 px-6 py-4">
                        <h4 className="text-sm font-semibold leading-tight text-foreground">
                            Start your project
                        </h4>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default IntroSection;