"use client";

import React from 'react';
import { Workflow, Link2, Brain, GitBranch, Database, Zap, ArrowUpRight, Code } from 'lucide-react';

const WorkflowCard = ({
    title,
    description,
    complexity,
    integrations,
    automatedTasks,
    icon: Icon,
    efficiency
}: {
    title: string;
    description: string;
    complexity: string;
    integrations: string[];
    automatedTasks: string[];
    icon: any;
    efficiency: string;
}) => {
    return (
        <div className="bg-card border border-border rounded-xl p-8 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(0, 122, 255, 0.1) 0%, rgba(0, 122, 255, 0.05) 50%, rgba(0, 122, 255, 0) 100%)' }}></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.15) 0%, rgba(0, 122, 255, 0.05) 50%, rgba(0, 122, 255, 0) 100%)' }}></div>

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
                    </div>
                    <span className="px-3 py-1 bg-success-green/20 text-success-green rounded-full text-sm font-medium">
                        {efficiency}
                    </span>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Integrations</h4>
                        <div className="space-y-2">
                            {integrations.map((integration, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <Link2 className="w-4 h-4 text-primary" />
                                    <span className="text-muted-foreground text-sm">{integration}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Automated Tasks</h4>
                        <div className="space-y-2">
                            {automatedTasks.map((task, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-success-green" />
                                    <span className="text-muted-foreground text-sm">{task}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">Complexity: <span className="text-primary font-medium">{complexity}</span></span>
                    <div className="flex items-center gap-2 text-primary">
                        <span className="text-sm font-medium">View Workflow</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const N8nLangchainSection = () => {
    const workflows = [
        {
            title: "AI-Powered Customer Support",
            description: "Intelligent customer support system that automatically categorizes, routes, and responds to customer inquiries using LangChain and GPT models.",
            complexity: "Advanced",
            efficiency: "+85% Efficiency",
            integrations: ["Slack", "Zendesk", "OpenAI API", "PostgreSQL", "Email (SMTP)"],
            automatedTasks: ["Ticket classification", "Auto-responses", "Sentiment analysis", "Priority routing", "Follow-up scheduling"],
            icon: Brain
        },
        {
            title: "Document Processing Pipeline",
            description: "Automated document processing workflow that extracts, analyzes, and indexes content from various file formats using OCR and NLP.",
            complexity: "Expert",
            efficiency: "+92% Efficiency",
            integrations: ["Google Drive", "AWS S3", "Tesseract OCR", "Elasticsearch", "Webhook"],
            automatedTasks: ["Document extraction", "Text recognition", "Content categorization", "Metadata extraction", "Archive management"],
            icon: Database
        },
        {
            title: "Lead Qualification System",
            description: "Intelligent lead scoring and qualification system that analyzes prospect data and automatically nurtures leads through personalized sequences.",
            complexity: "Intermediate",
            efficiency: "+78% Efficiency",
            integrations: ["HubSpot", "LinkedIn API", "Gmail", "Calendly", "Slack"],
            automatedTasks: ["Lead scoring", "Data enrichment", "Email sequences", "Meeting scheduling", "CRM updates"],
            icon: GitBranch
        },
        {
            title: "Content Generation Workflow",
            description: "Automated content creation pipeline that generates, reviews, and publishes content across multiple platforms using AI models.",
            complexity: "Advanced",
            efficiency: "+89% Efficiency",
            integrations: ["WordPress", "Twitter API", "LinkedIn API", "OpenAI", "Grammarly"],
            automatedTasks: ["Content generation", "Grammar checking", "SEO optimization", "Social posting", "Performance tracking"],
            icon: Code
        }
    ];

    return (
        <section id="n8n-langchain" className="container mx-auto px-6 py-20">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                    <span className="bg-gradient-to-b from-white from-45% to-primary bg-clip-text text-transparent">
                        n8n & LangChain Automation
                    </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Sophisticated workflow automations and AI-powered systems that connect your tools intelligently.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {workflows.map((workflow, index) => (
                    <WorkflowCard key={index} {...workflow} />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* n8n Expertise */}
                <div className="bg-card border border-border rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                            <Workflow className="w-8 h-8 text-red-400" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-foreground">
                                n8n Workflow{' '}
                                <span className="bg-gradient-to-r from-[#4A90E2] to-[#2563EB] bg-clip-text text-transparent">
                                    Mastery
                                </span>
                            </h3>
                            <p className="text-muted-foreground">Visual workflow automation</p>
                        </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-success-green" />
                            <span className="text-muted-foreground">500+ custom nodes created</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-success-green" />
                            <span className="text-muted-foreground">Complex branching logic</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-success-green" />
                            <span className="text-muted-foreground">Error handling & monitoring</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-success-green" />
                            <span className="text-muted-foreground">Self-hosted & cloud deployment</span>
                        </li>
                    </ul>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">200+</div>
                        <div className="text-sm text-muted-foreground">Workflows Deployed</div>
                    </div>
                </div>

                {/* LangChain Expertise */}
                <div className="bg-card border border-border rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                            <Brain className="w-8 h-8 text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-foreground">
                                LangChain{' '}
                                <span className="bg-gradient-to-r from-[#4A90E2] to-[#2563EB] bg-clip-text text-transparent">
                                    Integration
                                </span>
                            </h3>
                            <p className="text-muted-foreground">AI-powered automation</p>
                        </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-success-green" />
                            <span className="text-muted-foreground">Custom LLM chains</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-success-green" />
                            <span className="text-muted-foreground">Vector database integration</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-success-green" />
                            <span className="text-muted-foreground">Memory management</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-success-green" />
                            <span className="text-muted-foreground">Multi-modal AI processing</span>
                        </li>
                    </ul>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-1">150+</div>
                        <div className="text-sm text-muted-foreground">AI Agents Built</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default N8nLangchainSection;