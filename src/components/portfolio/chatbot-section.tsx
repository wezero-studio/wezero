"use client";

import React from 'react';
import { MessageCircle, Bot, Zap, Users, BarChart3, ArrowUpRight, Brain, Smartphone } from 'lucide-react';

const ChatbotShowcase = ({
    name,
    industry,
    description,
    features,
    metrics,
    icon: Icon,
    chatPreview
}: {
    name: string;
    industry: string;
    description: string;
    features: string[];
    metrics: { label: string; value: string }[];
    icon: any;
    chatPreview: { user: string; bot: string }[];
}) => {
    return (
        <div className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-all duration-300 relative">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(0, 122, 255, 0.1) 0%, rgba(0, 122, 255, 0.05) 50%, rgba(0, 122, 255, 0) 100%)' }}></div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.15) 0%, rgba(0, 122, 255, 0.05) 50%, rgba(0, 122, 255, 0) 100%)' }}></div>

            <div className="relative z-10">
                {/* Header */}
                <div className="p-6 border-b border-border">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-foreground">{name}</h3>
                            <p className="text-sm text-muted-foreground">{industry}</p>
                        </div>
                        <div className="ml-auto">
                            <ArrowUpRight className="w-5 h-5 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                        </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{description}</p>
                </div>

                {/* Chat Preview */}
                <div className="p-6 bg-background/50">
                    <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Live Preview</h4>
                    <div className="bg-card border border-border rounded-lg p-4 space-y-4 max-h-64 overflow-y-auto">
                        {chatPreview.map((message, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-end">
                                    <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 max-w-xs text-sm">
                                        {message.user}
                                    </div>
                                </div>
                                <div className="flex items-start gap-2">
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        <Bot className="w-3 h-3 text-primary" />
                                    </div>
                                    <div className="bg-muted text-muted-foreground rounded-lg px-3 py-2 max-w-xs text-sm">
                                        {message.bot}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features & Metrics */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Key Features</h4>
                        <ul className="space-y-2">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-success-green" />
                                    <span className="text-muted-foreground text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Performance</h4>
                        <div className="space-y-3">
                            {metrics.map((metric, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <span className="text-muted-foreground text-sm">{metric.label}</span>
                                    <span className="text-primary font-semibold text-sm">{metric.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ChatbotSection = () => {
    const chatbots = [
        {
            name: "FinanceBot Pro",
            industry: "Financial Services",
            description: "AI-powered financial advisor that helps customers with investment advice, account management, and financial planning with real-time market data integration.",
            features: [
                "Investment recommendations",
                "Portfolio analysis",
                "Market alerts",
                "Transaction history",
                "Risk assessment"
            ],
            metrics: [
                { label: "Response Accuracy", value: "97.2%" },
                { label: "Avg Response Time", value: "0.8s" },
                { label: "Customer Satisfaction", value: "94%" },
                { label: "Monthly Active Users", value: "25K+" }
            ],
            icon: BarChart3,

            chatPreview: [
                { user: "What's my portfolio performance this month?", bot: "Your portfolio is up 3.2% this month, outperforming the S&P 500 by 1.1%. Your tech stocks are leading the gains." },
                { user: "Should I buy more Tesla stock?", bot: "Based on current market conditions and your risk profile, Tesla represents 8% of your portfolio. Consider diversification before increasing exposure." }
            ]
        },
        {
            name: "HealthCare Assistant",
            industry: "Healthcare",
            description: "HIPAA-compliant medical chatbot that assists patients with appointment scheduling, medication reminders, and basic health inquiries.",
            features: [
                "Appointment scheduling",
                "Medication reminders",
                "Symptom assessment",
                "Provider directory",
                "Insurance verification"
            ],
            metrics: [
                { label: "HIPAA Compliance", value: "100%" },
                { label: "Appointments Booked", value: "15K/mo" },
                { label: "Patient Satisfaction", value: "96%" },
                { label: "Response Accuracy", value: "98.1%" }
            ],
            icon: MessageCircle,

            chatPreview: [
                { user: "I need to schedule a checkup with Dr. Smith", bot: "I found Dr. Smith has availability next Tuesday at 2:30 PM or Thursday at 10:15 AM. Which works better for you?" },
                { user: "Remind me about my medications", bot: "You have Lisinopril 10mg due at 8 AM and Metformin 500mg with dinner. Would you like me to set daily reminders?" }
            ]
        },
        {
            name: "RetailBot 360",
            industry: "E-commerce",
            description: "Comprehensive shopping assistant that handles product recommendations, order tracking, returns, and personalized customer service.",
            features: [
                "Product recommendations",
                "Order tracking",
                "Size guidance",
                "Return processing",
                "Live agent handoff"
            ],
            metrics: [
                { label: "Conversion Rate", value: "+23%" },
                { label: "Cart Abandonment", value: "-18%" },
                { label: "Avg Order Value", value: "+31%" },
                { label: "Support Tickets", value: "-67%" }
            ],
            icon: Smartphone,

            chatPreview: [
                { user: "I'm looking for running shoes under $150", bot: "I found 12 great options! The Nike Air Zoom Pegasus and Adidas Ultraboost are popular choices. What's your foot type and running style?" },
                { user: "Track my order #12345", bot: "Your order shipped yesterday and is currently in transit. Expected delivery is tomorrow by 3 PM. I'll send updates as it progresses." }
            ]
        },
        {
            name: "EduChat Learning",
            industry: "Education",
            description: "Intelligent tutoring system that provides personalized learning experiences, homework help, and progress tracking for students.",
            features: [
                "Personalized tutoring",
                "Homework assistance",
                "Progress tracking",
                "Learning analytics",
                "Parent notifications"
            ],
            metrics: [
                { label: "Learning Improvement", value: "+45%" },
                { label: "Engagement Rate", value: "89%" },
                { label: "Completion Rate", value: "92%" },
                { label: "Student Satisfaction", value: "94%" }
            ],
            icon: Brain,

            chatPreview: [
                { user: "Help me with algebra: solve 2x + 5 = 13", bot: "Let's solve this step by step! First, subtract 5 from both sides: 2x = 8. Then divide by 2: x = 4. Want to try a similar problem?" },
                { user: "I don't understand photosynthesis", bot: "Photosynthesis is how plants make food using sunlight! Think of it like a recipe: sunlight + water + CO2 = sugar + oxygen. Should we break this down further?" }
            ]
        }
    ];

    return (
        <section id="chatbots" className="container mx-auto px-6 py-20">
            <div className="text-center mb-16">
                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6">
                    <span className="bg-gradient-to-b from-white from-45% to-primary bg-clip-text text-transparent">
                        Custom Chatbot Solutions
                    </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Intelligent chatbots that understand context and provide exceptional user experiences.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {chatbots.map((chatbot, index) => (
                    <ChatbotShowcase key={index} {...chatbot} />
                ))}
            </div>

            {/* Chatbot Capabilities Overview */}
            <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-3xl font-semibold text-foreground mb-6 text-center">
                    Our{' '}
                    <span className="bg-gradient-to-r from-[#4A90E2] to-[#2563EB] bg-clip-text text-transparent">
                        Chatbot
                    </span>{' '}
                    Development Stack
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4">
                            <Brain className="w-8 h-8 text-blue-400" />
                        </div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">AI & NLP</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Advanced language models, sentiment analysis, and context understanding for natural conversations.
                        </p>
                        <div className="mt-4 space-y-1">
                            <div className="text-xs text-muted-foreground">OpenAI GPT • LangChain • Hugging Face</div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4">
                            <MessageCircle className="w-8 h-8 text-green-400" />
                        </div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">Multi-Platform</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Deploy across web, mobile, WhatsApp, Telegram, Slack, and custom platforms with unified logic.
                        </p>
                        <div className="mt-4 space-y-1">
                            <div className="text-xs text-muted-foreground">REST APIs • WebSockets • Webhooks</div>
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8 text-orange-400" />
                        </div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">Enterprise Ready</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            GDPR/HIPAA compliance, SSO integration, analytics dashboard, and white-label solutions.
                        </p>
                        <div className="mt-4 space-y-1">
                            <div className="text-xs text-muted-foreground">Analytics • Security • Scalability</div>
                        </div>
                    </div>
                </div>

                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                        <div className="text-3xl font-bold text-primary mb-1">50+</div>
                        <div className="text-sm text-muted-foreground">Chatbots Deployed</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-1">99.2%</div>
                        <div className="text-sm text-muted-foreground">Uptime Average</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-1">15</div>
                        <div className="text-sm text-muted-foreground">Languages Supported</div>
                    </div>
                    <div>
                        <div className="text-3xl font-bold text-primary mb-1">2M+</div>
                        <div className="text-sm text-muted-foreground">Conversations Handled</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChatbotSection;