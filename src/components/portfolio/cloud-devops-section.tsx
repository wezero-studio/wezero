"use client";

import React from 'react';
import { Cloud, Server, Shield, Database, Globe, Zap, ArrowUpRight } from 'lucide-react';

const CaseStudyCard = ({
    title,
    description,
    techStack,
    results,
    icon: Icon,
    image
}: {
    title: string;
    description: string;
    techStack: string[];
    results: string[];
    icon: any;
    image?: string;
}) => {
    return (
        <div className="bg-card border border-border rounded-xl p-8 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(0, 122, 255, 0.1) 0%, rgba(0, 122, 255, 0.05) 50%, rgba(0, 122, 255, 0) 100%)' }}></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.15) 0%, rgba(0, 122, 255, 0.05) 50%, rgba(0, 122, 255, 0) 100%)' }}></div>

            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech, index) => (
                            <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Results</h4>
                    <ul className="space-y-2">
                        {results.map((result, index) => (
                            <li key={index} className="flex items-center gap-2 text-muted-foreground">
                                <Zap className="w-4 h-4 text-success-green" />
                                {result}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </div>
            </div>
        </div>
    );
};

const CloudDevOpsSection = () => {
    const caseStudies = [
        {
            title: "Cloud Migration & Deployment for HazenAI",
            description: "Migrated and deployed HazenAI’s traffic analytics dashboard to AWS Cloud, transforming their legacy setup into a scalable, cloud-native environment.",
            techStack: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
            results: [
                "99.9% uptime post-migration",
                "Streamlined analytics performance",
                "Fully automated deployment pipeline",
                "Improved system reliability and scalability"
            ],
            icon: Cloud
        },
        {
            title: "Microservices Deployment for Ticket Booking Platform",
            description: "Designed and deployed a microservices-based ticket booking platform using EC2 and Kubernetes on AWS, featuring full auto-scaling and production-ready readiness.",
            techStack: ["AWS", "EC2", "Kubernetes", "Docker", "Terraform"],
            results: [
                "10x increase in scalability",
                "Auto-scaling under peak loads",
                "High availability with zero-downtime deployments",
                "Production-ready deployment on AWS"
            ],
            icon: Server
        },
        {
            title: "Scalable Static Hosting on Azure",
            description: "Engineered a robust hosting solution on Azure for hundreds of static websites, using Azure DevOps and Bicep to automate deployments, subdomain mapping, and custom routing rules at scale.",
            techStack: ["Azure", "Azure DevOps", "Bicep", "Terraform", "YAML Pipelines"],
            results: [
                "Centralized management of hundreds of static sites",
                "Automated subdomain mapping and custom routing",
                "Single pipeline for large-scale deployments",
                "Highly maintainable and scalable infrastructure"
            ],
            icon: Shield
        },
        {
            title: "Database Optimization & Migration",
            description: "Optimized and migrated critical databases for a fintech startup, improving performance and ensuring data integrity.",
            techStack: ["PostgreSQL", "Redis", "MongoDB", "AWS RDS", "DataDog"],
            results: [
                "300% query performance improvement",
                "Zero data loss during migration",
                "Reduced database costs by 45%",
                "24/7 monitoring implemented"
            ],
            icon: Database
        }
    ];

    return (
        <section id="cloud-devops" className="container mx-auto px-6 py-20">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                    <span className="bg-gradient-to-b from-white from-45% to-primary bg-clip-text text-transparent">
                        Cloud & DevOps Excellence
                    </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Robust cloud infrastructure solutions that scale with your business needs.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {caseStudies.map((study, index) => (
                    <CaseStudyCard key={index} {...study} />
                ))}
            </div>

            <div className="mt-16 text-center">
                <div className="bg-card border border-border rounded-2xl p-8 max-w-4xl mx-auto">
                    <h3 className="text-3xl font-semibold text-foreground mb-4">
                        Our Cloud & DevOps{' '}
                        <span className="bg-gradient-to-r from-[#4A90E2] to-[#2563EB] bg-clip-text text-transparent">
                            Expertise
                        </span>
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                        From cloud migration to infrastructure automation, we deliver comprehensive solutions that optimize performance, reduce costs, and enhance reliability.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="text-3xl font-bold text-primary mb-1">50+</div>
                            <div className="text-sm text-muted-foreground">Cloud Migrations</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
                            <div className="text-sm text-muted-foreground">Average Uptime</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-1">60%</div>
                            <div className="text-sm text-muted-foreground">Cost Reduction</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                            <div className="text-sm text-muted-foreground">Monitoring</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CloudDevOpsSection;