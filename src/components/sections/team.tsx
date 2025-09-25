"use client";
import React from 'react';
import Image from 'next/image';

const teamMembers = [
    { name: "Dave Jones", role: "Developer", avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b81afa3b-61ac-4274-ae25-1dd2746d06f7-exerratemplate-framer-website/assets/images/NS0MjC73BwIBZdXwTNCgKOj2H4.png" },
    { name: "Emily Branson", role: "CEO", avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b81afa3b-61ac-4274-ae25-1dd2746d06f7-exerratemplate-framer-website/assets/images/rXlZWevHMULDY8GRL4RNJfD02dQ.png" },
    { name: "Jason Davis", role: "Developer", avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b81afa3b-61ac-4274-ae25-1dd2746d06f7-exerratemplate-framer-website/assets/images/FuLkfY03g6UTvyUgiykCksQ60.png" },
    { name: "Maria Wilson", role: "COO", avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b81afa3b-61ac-4274-ae25-1dd2746d06f7-exerratemplate-framer-website/assets/images/ZSaQbJuFS42W7zu7FI7QlZsxu58.png" },
    { name: "William Bird", role: "CTO", avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/b81afa3b-61ac-4274-ae25-1dd2746d06f7-exerratemplate-framer-website/assets/images/fmoq8UDKlfUrXummW5zaYwxCAZg.png" }
];

const GradientText = ({ children }: { children: React.ReactNode }) => (
    <span className="bg-gradient-to-r from-gradient-blue-light to-gradient-blue-dark bg-clip-text text-transparent">
        {children}
    </span>
);

export default function TeamSection() {
    const duplicatedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

    return (
        <>
            <style>
                {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-100% / 3)); }
          }
          .animate-scrolling {
            animation: scroll 25s linear infinite;
          }
        `}
            </style>
            <section id="team" className="bg-background py-20 overflow-hidden">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h2 className="text-[72px] font-bold tracking-[-1.5px]">
                        Meet our <GradientText>team</GradientText>
                    </h2>
                </div>

                <div
                    className="relative group w-full"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
                    }}>
                    <div className="flex w-max animate-scrolling group-hover:[animation-play-state:paused]">
                        {duplicatedMembers.map((member, index) => (
                            <a key={index} href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 mx-3 group/card">
                                <div className="w-[282px] h-[354px] rounded-lg p-8 flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden group-hover/card:shadow-[0_0_20px_rgba(74,144,226,0.3)] bg-card border border-border">

                                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[rgba(0,122,255,0.1)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                                    <div className="absolute inset-0 border border-transparent group-hover/card:border-primary rounded-lg transition-colors duration-300"></div>

                                    <div className="relative z-10 h-full w-full flex flex-col justify-end items-center">
                                        <div className="w-[120px] h-[120px] mb-6">
                                            <Image
                                                src={member.avatar}
                                                alt={`Memoji ${member.name}`}
                                                width={120}
                                                height={120}
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground text-base leading-tight">{member.role}</p>
                                            <p className="text-foreground font-semibold text-xl leading-tight mt-2">{member.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}