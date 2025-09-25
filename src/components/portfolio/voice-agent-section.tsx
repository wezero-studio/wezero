"use client";

import React from 'react';
import { Mic, Phone, Headphones, Volume2, Zap, ArrowUpRight, Brain, PhoneCall } from 'lucide-react';

const VoiceAgentCard = ({
    name,
    useCase,
    description,
    capabilities,
    performance,
    icon: Icon,
    gradient,
    audioFeatures
}: {
    name: string;
    useCase: string;
    description: string;
    capabilities: string[];
    performance: { label: string; value: string }[];
    icon: any;
    gradient: string;
    audioFeatures: string[];
}) => {
    return (
        <div className="bg-card border border-border rounded-xl p-8 group hover:border-primary/50 transition-all duration-300 relative overflow-hidden">
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${gradient}`}></div>

            <div className="relative z-10">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-foreground">{name}</h3>
                            <p className="text-sm text-muted-foreground">{useCase}</p>
                        </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

                {/* Audio Visualization */}
                <div className="bg-background/50 border border-border rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="w-8 h-8 rounded-full bg-success-green/20 flex items-center justify-center">
                            <Volume2 className="w-4 h-4 text-success-green" />
                        </div>
                        <span className="text-sm font-medium text-foreground">Voice Analysis Active</span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={i}
                                className="w-1 bg-primary rounded-full animate-pulse"
                                style={{
                                    height: `${Math.random() * 24 + 8}px`,
                                    animationDelay: `${i * 0.1}s`
                                }}
                            />
                        ))}
                    </div>
                    <div className="text-xs text-muted-foreground">Real-time speech processing and natural language understanding</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Capabilities</h4>
                        <ul className="space-y-2">
                            {capabilities.map((capability, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-success-green" />
                                    <span className="text-muted-foreground text-sm">{capability}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Performance</h4>
                        <div className="space-y-3">
                            {performance.map((metric, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <span className="text-muted-foreground text-sm">{metric.label}</span>
                                    <span className="text-primary font-semibold text-sm">{metric.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Audio Features */}
                <div className="border-t border-border pt-4">
                    <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Audio Features</h4>
                    <div className="flex flex-wrap gap-2">
                        {audioFeatures.map((feature, index) => (
                            <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const VoiceAgentSection = () => {
    const voiceAgents = [
        {
            name: "CallCenter AI Pro",
            useCase: "Customer Service",
            description: "Advanced voice agent that handles customer inquiries, processes orders, and provides technical support with human-like conversation capabilities.",
            capabilities: [
                "Natural conversation flow",
                "Sentiment detection",
                "Call routing",
                "Order processing",
                "Technical troubleshooting"
            ],
            performance: [
                { label: "Call Resolution", value: "87%" },
                { label: "Avg Call Duration", value: "3.2min" },
                { label: "Customer Satisfaction", value: "92%" },
                { label: "Cost Reduction", value: "65%" }
            ],
            audioFeatures: ["Noise Cancellation", "Multi-Language", "Emotion Recognition", "Voice Cloning"],
            icon: PhoneCall,
            gradient: "bg-gradient-to-br from-blue-500/10 to-purple-500/10"
        },
        {
            name: "SalesBot Voice",
            useCase: "Lead Qualification",
            description: "Intelligent sales assistant that conducts initial prospect calls, qualifies leads, and schedules appointments with your sales team.",
            capabilities: [
                "Lead qualification",
                "Appointment scheduling",
                "CRM integration",
                "Follow-up sequences",
                "Sales script adaptation"
            ],
            performance: [
                { label: "Lead Qualification", value: "94%" },
                { label: "Conversion Rate", value: "+34%" },
                { label: "Meetings Booked", value: "450/mo" },
                { label: "Response Time", value: "<0.5s" }
            ],
            audioFeatures: ["Dynamic Scripts", "Real-time Analytics", "A/B Testing", "Voice Personalization"],
            icon: Mic,
            gradient: "bg-gradient-to-br from-green-500/10 to-blue-500/10"
        },
        {
            name: "MedAssist Voice",
            useCase: "Healthcare Support",
            description: "HIPAA-compliant voice assistant for healthcare facilities that handles appointment scheduling, medication reminders, and patient inquiries.",
            capabilities: [
                "Appointment booking",
                "Medication reminders",
                "Symptom assessment",
                "Insurance verification",
                "Emergency routing"
            ],
            performance: [
                { label: "HIPAA Compliance", value: "100%" },
                { label: "Appointment Success", value: "89%" },
                { label: "Patient Satisfaction", value: "96%" },
                { label: "Staff Time Saved", value: "40%" }
            ],
            audioFeatures: ["Medical Terminology", "Privacy Protection", "Emergency Detection", "Multi-Provider"],
            icon: Headphones,
            gradient: "bg-gradient-to-br from-orange-500/10 to-red-500/10"
        },
        {
            name: "RestaurantBot Voice",
            useCase: "Food Service",
            description: "Voice ordering system that takes reservations, processes orders, and provides menu information with natural conversation flow.",
            capabilities: [
                "Order taking",
                "Reservation management",
                "Menu recommendations",
                "Special requests",
                "Payment processing"
            ],
            performance: [
                { label: "Order Accuracy", value: "96%" },
                { label: "Avg Order Value", value: "+18%" },
                { label: "Wait Time Reduction", value: "45%" },
                { label: "Customer Return", value: "+23%" }
            ],
            audioFeatures: ["Menu Integration", "Order Customization", "Allergy Detection", "Multi-Location"],
            icon: Phone,
            gradient: "bg-gradient-to-br from-purple-500/10 to-pink-500/10"
        }
    ];

    return (
        <section id="voice-agents" className="container mx-auto px-6 py-20">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 via-white mb-6">
                    Voice Agent Solutions
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Sophisticated voice agents that understand natural speech and deliver human-like experiences.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {voiceAgents.map((agent, index) => (
                    <VoiceAgentCard key={index} {...agent} />
                ))}
            </div>

            {/* Voice Technology Stack */}
            <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
                    Voice Technology Excellence
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                            <Brain className="w-8 h-8 text-blue-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Speech Recognition</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Advanced ASR with noise cancellation and multi-language support.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4">
                            <Volume2 className="w-8 h-8 text-green-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Text-to-Speech</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Natural voice synthesis with emotion and personality customization.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mx-auto mb-4">
                            <Mic className="w-8 h-8 text-orange-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Real-time Processing</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Ultra-low latency voice processing for natural conversations.
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mx-auto mb-4">
                            <PhoneCall className="w-8 h-8 text-purple-400" />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-2">Telephony Integration</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Seamless integration with existing phone systems and platforms.
                        </p>
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                        <div className="text-3xl font-bold text-primary mb-1">35+</div>
                        <div className="text-sm text-muted-foreground">Voice Agents Deployed</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-1">98.5%</div>
                        <div className="text-sm text-muted-foreground">Speech Recognition</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-1">0.3s</div>
                        <div className="text-sm text-muted-foreground">Response Latency</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-1">25+</div>
                        <div className="text-sm text-muted-foreground">Languages Supported</div>
                    </div>
                </div>

                {/* Technology Partners */}

            </div>
        </section>
    );
};

export default VoiceAgentSection;