import React from 'react';

const statsData = [
    {
        title: 'Projects completed',
        value: '93+',
        description: "We've successfully completed 93 top-tier projects.",
    },
    {
        title: 'Satisfied customers',
        value: '100%',
        description: 'We ensure a 100% satisfaction level for our clients.',
    },
    {
        title: 'Hours saved per day',
        value: '3h',
        description: 'Our solutions save our clients an average of 3 hours of work per day.',
    },
    {
        title: 'Cost saved per month',
        value: '80k',
        description: 'Our solutions save our clients an average of $80.000 per month.',
    },
];

const StatisticsSection = () => {
    return (
        <section className="bg-background py-20 lg:py-[120px]">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-5xl font-bold -tracking-[1px] lg:text-[72px] lg:leading-none lg:-tracking-[1.5px]">
                        <span className="bg-gradient-to-b from-white from-45% to-primary bg-clip-text text-transparent">
                            Our statistics
                        </span>
                    </h2>
                </div>
                <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-10 md:gap-y-20 lg:grid-cols-4 lg:gap-10">
                    {statsData.map((stat) => (
                        <div key={stat.title} className="text-center">
                            <h3 className="text-lg font-semibold leading-[1.3] text-white md:text-xl">
                                {stat.title}
                            </h3>
                            <h2 className="mt-2.5 text-5xl font-bold -tracking-[1px] leading-none text-white md:text-7xl md:-tracking-[1.5px]">
                                {stat.value}
                            </h2>
                            <p className="mt-2.5 mx-auto max-w-[250px] text-base text-muted-foreground">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatisticsSection;