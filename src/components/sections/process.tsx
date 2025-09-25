import Image from 'next/image';
import { ArrowUp, Search, BarChart3, Zap, Target, Brain, Cog, TrendingUp } from 'lucide-react';
import { FC, ReactNode } from 'react';

const AnalyzeVisual: FC = () => (
    <div className="relative flex h-[260px] w-full items-center justify-center overflow-hidden">
        {/* Floating Analysis Icons */}
        <div className="absolute inset-0">
            <div className="absolute left-4 top-4 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center animate-pulse">
                <Search className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute right-4 top-6 w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center animate-pulse delay-300">
                <BarChart3 className="w-7 h-7 text-blue-400" />
            </div>
            <div className="absolute bottom-4 left-[15%] w-13 h-13 rounded-lg bg-green-500/20 flex items-center justify-center animate-pulse delay-500">
                <Target className="w-6 h-6 text-green-400" />
            </div>
            <div className="absolute bottom-6 right-[25%] w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center animate-pulse delay-700">
                <Brain className="w-5 h-5 text-purple-400" />
            </div>
        </div>
        
        {/* Central Analysis Display */}
        <div className="relative z-10 w-64 h-40 bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Search className="w-4 h-4 text-primary" />
                </div>
                <h4 className="text-sm font-semibold text-foreground">Workflow Analysis</h4>
            </div>
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Efficiency</span>
                    <span className="text-xs text-green-400">+67%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-1.5">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '67%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Automation Potential</span>
                    <span className="text-xs text-blue-400">+89%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-1.5">
                    <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '89%' }}></div>
                </div>
            </div>
        </div>
    </div>
);

const BuildVisual: FC = () => (
    <div className="flex h-[260px] w-full items-center justify-center p-4">
        <div className="w-full max-w-sm rounded-lg border border-border bg-[rgba(20,20,20,0.7)] backdrop-blur-sm">
            <div className="flex items-center gap-2 border-b border-border bg-zinc-900/50 px-3 py-2">
                <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
                    <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
                </div>
                <div className="flex flex-1 justify-center gap-1 text-xs">
                    <button className="rounded bg-secondary px-3 py-1 text-white">AI Code</button>
                    <button className="rounded px-3 py-1 text-muted-foreground">React</button>
                    <button className="rounded px-3 py-1 text-muted-foreground">Python</button>
                </div>
            </div>
            <div className="relative p-4 h-40 bg-gray-900 rounded-b-lg">
                {/* Code simulation */}
                <div className="space-y-2 font-mono text-xs">
                    <div className="flex items-center gap-2">
                        <Cog className="w-3 h-3 text-blue-400" />
                        <span className="text-blue-400">def</span>
                        <span className="text-green-400">optimize_workflow</span>
                        <span className="text-white">(data):</span>
                    </div>
                    <div className="ml-4 space-y-1">
                        <div className="flex items-center gap-2">
                            <Brain className="w-3 h-3 text-purple-400" />
                            <span className="text-gray-400"># AI-powered analysis</span>
                        </div>
                        <div className="text-orange-400">ai_model.predict(data)</div>
                        <div className="text-green-400">return optimized_result</div>
                    </div>
                </div>
                
                {/* Floating icons */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-primary animate-pulse" />
                </div>
                
                <div className="absolute bottom-4 left-4 rounded border-2 border-primary bg-primary/20 px-2 py-1 text-xs text-white flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Building...
                </div>
            </div>
        </div>
    </div>
);

const MaintainVisual: FC = () => {
    const metrics = [
        { label: "Software speed", value: "+38%", color: "text-green-500", icon: Zap },
        { label: "Workflow efficiency", value: "+25%", color: "text-green-500", icon: TrendingUp },
        { label: "Operational cost", value: "-11%", color: "text-red-500", icon: BarChart3 },
        { label: "Security", value: "+8%", color: "text-green-500", icon: Target },
    ];
    return (
        <div className="flex h-[260px] w-full items-center justify-center p-4">
            <div className="w-full max-w-sm space-y-3 rounded-lg border border-border bg-[rgba(20,20,20,0.7)] p-4 backdrop-blur-sm">
                <div className="flex items-center justify-between rounded-md bg-zinc-900/50 p-2 text-sm">
                    <div className="flex items-center gap-2">
                        <Cog className="w-4 h-4 text-blue-400 animate-spin" />
                        <span>Update available</span>
                    </div>
                    <button className="flex items-center gap-1 rounded-sm bg-green-500 px-2 py-0.5 text-xs text-white hover:bg-green-600 transition-colors">
                        Update <ArrowUp className="h-3 w-3" />
                    </button>
                </div>
                {metrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                        <div key={index} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                                <IconComponent className="w-4 h-4 text-muted-foreground" />
                                <span className="text-muted-foreground">{metric.label}</span>
                            </div>
                            <span className={metric.color}>{metric.value}</span>
                        </div>
                    );
                })}
                
                {/* Floating maintenance indicator */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
            </div>
        </div>
    );
};

interface ProcessCardProps {
    step: string;
    title: string;
    description: string;
    children: ReactNode;
}

const ProcessCard: FC<ProcessCardProps> = ({ step, title, description, children }) => (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-secondary p-8">
        <div className="pointer-events-none absolute left-0 top-0 h-1/2 w-full bg-[radial-gradient(ellipse_50%_100%_at_50%_0%,rgba(0,122,255,0.15),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
        {children}
        <div className="mt-6 flex flex-col">
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-border text-lg font-semibold text-foreground">
                {step}
            </div>
            <h3 className="text-[32px] font-semibold leading-none tracking-tight text-foreground">{title}</h3>
            <p className="mt-3 text-lg text-muted-foreground">{description}</p>
        </div>
    </div>
);

const ProcessSection = () => {
    return (
        <section id="process" className="w-full bg-background py-20">
            <div className="container mx-auto px-6">
                <h2 className="mb-16 text-center text-6xl font-bold tracking-tighter lg:text-[72px]">
                    <span className="bg-gradient-to-b from-white from-45% to-primary bg-clip-text text-transparent">
                        The process
                    </span>
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <ProcessCard
                        step="1"
                        title="Analyze"
                        description="We start with a thorough analysis of your current workflows to see how AI could improve your processes."
                    >
                        <AnalyzeVisual />
                    </ProcessCard>
                    <ProcessCard
                        step="2"
                        title="Build & Implement"
                        description="Then, our developers will start crafting custom AI-solutions for your company, continuously prioritising quality and safety."
                    >
                        <BuildVisual />
                    </ProcessCard>
                    <ProcessCard
                        step="3"
                        title="Maintain & improve"
                        description="After deployment, our team will keep working hard by providing support and continuously improving the implemented solutions."
                    >
                        <MaintainVisual />
                    </ProcessCard>
                </div>
            </div>
        </section>
    );
};


export default ProcessSection;