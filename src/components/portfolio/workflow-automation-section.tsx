"use client";

import React from 'react';
import { Workflow, Zap, Clock, BarChart3, ArrowUpRight, Settings, Database, Globe } from 'lucide-react';

const AutomationShowcase = ({
    title,
    category,
    description,
    workflow,
    benefits,
    complexity,
    icon: Icon,
    savings
}: {
    title: string;
    category: string;
    description: string;
    workflow: string[];
    benefits: string[];
    complexity: string;
    icon: any;
    savings: { time: string; cost: string; accuracy: string };
}) => {
    return (
        <div className="bg-card border border-border rounded-xl p-8 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(0, 122, 255, 0.1) 0%, rgba(0, 122, 255, 0.05) 50%, rgba(0, 122, 255, 0) 100%)' }}></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.15) 0%, rgba(0, 122, 255, 0.05) 50%, rgba(0, 122, 255, 0) 100%)' }}></div>

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                            <p className="text-sm text-muted-foreground">{category}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium">
                            {complexity}
                        </span>
                        <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

                {/* Workflow Visualization */}
                <div className="bg-background/50 border border-border rounded-lg p-4 mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Workflow Steps</h4>
                    <div className="space-y-3">
                        {workflow.map((step, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <span className="text-xs font-semibold text-primary">{index + 1}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">{step}</span>
                                {index < workflow.length - 1 && (
                                    <div className="ml-auto">
                                        <ArrowUpRight className="w-3 h-3 text-muted-foreground rotate-90" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Key Benefits</h4>
                    <ul className="space-y-2">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-success-green" />
                                <span className="text-muted-foreground text-sm">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Savings */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    <div className="text-center">
                        <div className="text-lg font-bold text-primary mb-1">{savings.time}</div>
                        <div className="text-xs text-muted-foreground">Time Saved</div>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-bold text-primary mb-1">{savings.cost}</div>
                        <div className="text-xs text-muted-foreground">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-bold text-primary mb-1">{savings.accuracy}</div>
                        <div className="text-xs text-muted-foreground">Accuracy</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const WorkflowAutomationSection = () => {

    const automations = [
        {
            title: "Cross-App Zapier Sync Engine",
            category: "Workflow Automation",
            description: "Built a Zapier-based automation system that integrates multiple SaaS tools (Airtable, Gmail, Slack, Google Sheets) to streamline internal requests and communications across departments.",
            workflow: [
                "Trigger: New Airtable record created",
                "Zapier parses and sends email via Gmail",
                "Updates Google Sheet with request status",
                "Slack notification to relevant team channel",
                "Two-way sync with status changes",
                "Monthly logs emailed to operations"
            ],
            benefits: [
                "Zero-code automation for internal teams",
                "Reduced email and task duplication",
                "Live sync across tools",
                "Quick deployment and low maintenance",
                "Improved team coordination"
            ],
            complexity: "Intermediate",
            savings: { time: "70%", cost: "40%", accuracy: "95.6%" },
            icon: Zap,
        },
        {
            title: "Salesforce Deal Flow Tracker",
            category: "Sales Automation",
            description: "Automated the sales pipeline using Salesforce, integrating opportunity stages with email sequences, internal alerts, and performance dashboards for leadership.",
            workflow: [
                "Trigger: New opportunity created in Salesforce",
                "Stage-based email sequence automation",
                "Daily summary reports for sales leads",
                "Forecast dashboards auto-updated",
                "Deal inactivity alerts to reps",
                "Closed-won triggers post-sale checklist"
            ],
            benefits: [
                "Real-time pipeline visibility",
                "Automated follow-ups and nudges",
                "Faster sales cycles",
                "Fewer lost opportunities",
                "Executive-ready reporting"
            ],
            complexity: "Advanced",
            savings: { time: "65%", cost: "50%", accuracy: "97.2%" },
            icon: BarChart3,
        },
        {
            title: "GoHighLevel Lead Capture & Auto Nurture",
            category: "Marketing Automation",
            description: "Built a GoHighLevel funnel for lead generation and nurturing. The system auto-sends follow-ups via SMS/email, books appointments, and tags leads for retargeting.",
            workflow: [
                "Lead enters form on landing page",
                "Auto-SMS + email drip via GHL",
                "Lead is tagged and scored",
                "Appointment calendar sync",
                "Missed call text-back automation",
                "Pipeline status update with sales alerts"
            ],
            benefits: [
                "End-to-end lead funnel",
                "Increased booking rate",
                "No-code SMS/email automation",
                "Smart lead segmentation",
                "Reduced manual sales work"
            ],
            complexity: "Advanced",
            savings: { time: "75%", cost: "55%", accuracy: "96.5%" },
            icon: Workflow,
        },
        {
            title: "Client Onboarding Automation (Zapier + Google Workspace)",
            category: "Operations",
            description: "Automated the client onboarding process for an agency using Zapier to connect Typeform, Google Drive, Gmail, and ClickUp for a seamless start-to-finish workflow.",
            workflow: [
                "Trigger: Client submits onboarding form",
                "Zapier creates client folder in Google Drive",
                "Sends welcome email with login instructions",
                "Creates ClickUp project template",
                "Sends internal Slack alert to team",
                "Follow-up email scheduled in 7 days"
            ],
            benefits: [
                "Frictionless client onboarding",
                "Eliminated manual task setup",
                "Centralized documentation",
                "Faster project kickoffs",
                "Improved first impression"
            ],
            complexity: "Intermediate",
            savings: { time: "80%", cost: "45%", accuracy: "98.1%" },
            icon: Settings,
        },
        {
            title: "Salesforce-Integrated Support Escalation Flow",
            category: "Customer Service",
            description: "Developed an intelligent support flow that syncs support form data with Salesforce, auto-routes based on SLA level, and triggers alerts/escalations.",
            workflow: [
                "Trigger: New support form submitted",
                "Syncs with Salesforce Service Cloud",
                "Looks up customer SLA level",
                "Assigns ticket priority & owner",
                "Triggers SMS/Slack alert if urgent",
                "Auto-updates client case timeline"
            ],
            benefits: [
                "Improved SLA compliance",
                "Auto-prioritized support tickets",
                "Real-time alerting to agents",
                "Better visibility in Salesforce",
                "Higher customer retention"
            ],
            complexity: "Advanced",
            savings: { time: "72%", cost: "50%", accuracy: "97.9%" },
            icon: Clock,
        },
        {
            title: "GoHighLevel Multi-Location Review Funnel",
            category: "Reputation Management",
            description: "Built a review management system in GoHighLevel for a multi-location brand. Sends review invites post-service, routes positive reviews to Google, and captures feedback internally.",
            workflow: [
                "Service completion triggers contact tag",
                "Auto-text/email review request via GHL",
                "Positive feedback links to Google Reviews",
                "Negative feedback routes to internal team",
                "Location-specific dashboards in GHL",
                "Monthly reputation reports auto-sent"
            ],
            benefits: [
                "Increased 5-star reviews",
                "Reduced public complaints",
                "Automated customer feedback loop",
                "Location-wise reputation tracking",
                "Improved local SEO performance"
            ],
            complexity: "Intermediate",
            savings: { time: "68%", cost: "30%", accuracy: "95.4%" },
            icon: Globe,
        }
    ];


    return (
        <section id="workflow-automation" className="container mx-auto px-6 py-20">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                    <span className="bg-gradient-to-b from-white from-45% to-primary bg-clip-text text-transparent">
                        Workflow Automation
                    </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Intelligent automation solutions that streamline processes and eliminate manual tasks.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {automations.map((automation, index) => (
                    <AutomationShowcase key={index} {...automation} />
                ))}
            </div>

            {/* Automation Expertise Overview */}
            <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
                    Automation{' '}
                    <span className="bg-gradient-to-r from-[#4A90E2] to-[#2563EB] bg-clip-text text-transparent">
                        Excellence
                    </span>{' '}
                    Across Industries
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                            <Workflow className="w-8 h-8 text-blue-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Process Design</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Map, analyze, and optimize your business processes for maximum efficiency.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4">
                            <Settings className="w-8 h-8 text-green-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Integration</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Connect all your tools and systems for seamless data flow and operations.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mx-auto mb-4">
                            <BarChart3 className="w-8 h-8 text-orange-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Analytics</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Real-time monitoring and insights to continuously improve your workflows.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-4">
                            <Zap className="w-8 h-8 text-purple-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Optimization</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Continuous improvement through AI-driven optimization and learning.
                        </p>
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-8">
                    <div>
                        <div className="text-3xl font-bold text-primary mb-1">300+</div>
                        <div className="text-sm text-muted-foreground">Workflows Automated</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-1">78%</div>
                        <div className="text-sm text-muted-foreground">Avg Time Savings</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-1">52%</div>
                        <div className="text-sm text-muted-foreground">Avg Cost Reduction</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-1">97.8%</div>
                        <div className="text-sm text-muted-foreground">Process Accuracy</div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default WorkflowAutomationSection;