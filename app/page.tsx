"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Palette, Paintbrush, Users, Zap } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ClickSpark from "../src/Animations/ClickSpark/ClickSpark"
import SplitText from "../src/TextAnimations/SplitText/SplitText"
import ScrollFloat from "../src/TextAnimations/ScrollFloat/ScrollFloat"
import CardSwap, { Card } from "../src/Components/CardSwap/CardSwap"
import SpotlightCard from "../src/Components/SpotlightCard/SpotlightCard"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

export default function Home() {
  // Card image paths
  const cardImages = [
    { src: "/images/maisongourmet.png", alt: "Maison Gourmet", title: "Maison Gourmet" },
    { src: "/images/khg.png", alt: "Karachi Hazara Group", title: "Karachi Hazara Group" },
    { src: "/images/bilingual.png", alt: "Billingual Stories", title: "Billingual Stories" },
  ];

  // BasicCard for mobile
  function BasicCard({ src, alt, title }: { src: string; alt: string; title: string }) {
    return (
      <div className="bg-black rounded-xl border border-white/20 mb-6 overflow-hidden">
        <div className="border-b border-white/20 bg-gradient-to-t from-[#271E37] to-[#060606]">
          <h3 className="text-lg font-semibold p-3 text-white">{title}</h3>
        </div>
        <div className="relative p-2 flex justify-center items-center bg-black">
          <img
            src={src}
            alt={alt}
            className="rounded-lg object-cover object-top w-full h-40 max-w-full"
          />
        </div>
      </div>
    );
  }

  // Socials popup content
  const socialsPopup = (
    <DialogContent className="bg-black border border-cyan-400/30 text-white">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-cyan-400">Let's Connect</DialogTitle>
        <DialogDescription className="text-base text-gray-300 mt-2">
          <div className="mb-4">Reach out to us on our socials:</div>
          <div className="flex flex-col gap-3">
            <div>
              <span className="font-semibold text-cyan-400">Instagram:</span> <a href="https://instagram.com/wezero.studio" target="_blank" rel="noopener noreferrer" className="hover:underline">@wezero.studio</a>
            </div>
            <div>
              <span className="font-semibold text-cyan-400">Email:</span> <a href="mailto:infowezerostudio@gmail.com" className="hover:underline">infowezerostudio@gmail.com</a>
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
  return (
    <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between px-4">
            <Link className="flex items-center font-bold" href="/">
              <img src="/logos/wezero.svg" alt="Wezero Logo" className="h-6 w-auto object-contain align-middle sm:h-9" />
          </Link>
          <div className="flex items-center space-x-4">
            <Link className="hidden text-sm hover:text-cyan-400 sm:block" href="#clients">
              Portfolio
            </Link>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-cyan-400 to-violet-500 text-black hover:from-cyan-500 hover:to-violet-600 text-sm sm:text-base px-3 sm:px-4">
                    Get Started
                  </Button>
                </DialogTrigger>
                {socialsPopup}
              </Dialog>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Curved Lines */}
          <svg className="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Top Curves */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                repeatDelay: 1,
              }}
              d="M 100 100 Q 300 0 500 100 T 900 100"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="1"
            />
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                repeatDelay: 1,
                delay: 0.5,
              }}
              d="M 0 200 Q 200 100 400 200 T 800 200"
              fill="none"
              stroke="url(#grad2)"
              strokeWidth="1"
            />
            {/* Bottom Curves */}
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                repeatDelay: 1,
                delay: 1,
              }}
              d="M 100 600 Q 300 500 500 600 T 900 600"
              fill="none"
              stroke="url(#grad1)"
              strokeWidth="1"
            />
          </svg>

          {/* Straight Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ x: "100%", opacity: 0 }}
                animate={{
                  x: "-100%",
                  opacity: [0, 0.7, 0.7, 0],
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "linear",
                }}
                className="absolute right-0"
                style={{
                  top: `${15 + i * 10}%`,
                  height: "1px",
                  width: "100%",
                  background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? "#22d3ee" : "#8b5cf6"}60, transparent)`,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 z-[1]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute -right-1/4 top-1/2 h-96 w-96 rounded-full bg-violet-500/30 blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="container relative z-[3] px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mx-auto max-w-3xl space-y-8"
          >
              {/* Replace the h1 with SplitText for animated heading */}
              <SplitText
                text="Design That Drives Results"
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="words"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={() => {}}
              />
            <p className="mx-auto max-w-2xl text-muted text-gray-400 sm:text-xl">
              We create stunning digital experiences that elevate your online presence with design that drives results

            </p>
            <div className="flex justify-center space-x-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-cyan-400 to-violet-500 text-base sm:text-lg text-black hover:from-cyan-500 hover:to-violet-600">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                  {socialsPopup}
                </Dialog>
                <Button variant="outline" className="border-white/10 text-base sm:text-lg text-white hover:bg-white/10 bg-transparent" asChild>
                <a href="#clients">View Portfolio</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 border-t border-white/10 bg-black py-24">
        <div className="container px-4">
          <div className="mb-16 text-center">
              <div className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <ScrollFloat
                  animationDuration={1}
                  ease="back.inOut(2)"
                  scrollStart="center bottom+=50%"
                  scrollEnd="bottom bottom-=40%"
                  stagger={0.03}
                >
                  Why Choose wezero?
                </ScrollFloat>
              </div>
            <p className="mt-4 text-gray-400">Experience design that works for your business</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-cyan-400/50"
            >
              <Zap className="mb-4 h-12 w-12 text-cyan-400" />
              <h3 className="mb-2 text-xl font-bold">No Upfront Payments</h3>
              <p className="text-gray-400">
                We're confident in our work. Pay only when you're satisfied with our milestone-based system that keeps
                you in control throughout the project.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-violet-400/50"
            >
              <Paintbrush className="mb-4 h-12 w-12 text-violet-400" />
              <h3 className="mb-2 text-xl font-bold">Flexible Pricing</h3>
              <p className="text-gray-400">
                Adaptable pricing options that align with your budget. We collaborate to find solutions that meet your
                needs without financial strain.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-cyan-400/50"
            >
              <Users className="mb-4 h-12 w-12 text-cyan-400" />
              <h3 className="mb-2 text-xl font-bold">Guaranteed Satisfaction</h3>
              <p className="text-gray-400">
                We're dedicated to your satisfaction. Unlimited revisions and refinements until the final product meets
                or exceeds your expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Responsive CardSwap/BasicCard Section */}
        <div id="clients" className="flex justify-center w-full py-8">
          {/* Desktop/tablet: CardSwap */}
          <SpotlightCard className="custom-spotlight-card w-full max-w-5xl mx-auto px-2 sm:px-6 md:px-8 hidden sm:block" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full h-full p-4 sm:p-6">
              {/* Client text section */}
              <div className="w-full md:w-1/3 text-center md:text-left flex-shrink-0">
                <h3 className="text-3xl font-bold mb-2">Our Clients</h3>
                <p className="text-gray-400 text-base md:text-lg">
                  Don't take our word for it. Experience the power of our work firsthand.
                </p>
              </div>
              {/* CardSwap section */}
              <div className="w-full md:w-2/3" style={{ height: '400px', position: 'relative' }}>
                <CardSwap
                  cardDistance={60}
                  verticalDistance={30}
                  delay={5000}
                  pauseOnHover={true}
                >
                  {cardImages.map((img, idx) => (
                    <Card key={img.title} customClass={`card-${idx}`}>
                      <div className="border-b border-white/20 bg-gradient-to-t from-[#271E37] to-[#060606] rounded-t-xl">
                        <h3 className="text-lg font-semibold p-3 text-white">{img.title}</h3>
                      </div>
                      <div className="relative p-2 flex justify-center items-center bg-black rounded-b-xl">
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="rounded-lg object-cover object-top w-full h-48 sm:h-56 md:h-64 max-w-full"
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </div>
          </SpotlightCard>
          {/* Mobile: BasicCard list */}
          <SpotlightCard className="custom-spotlight-card w-full max-w-5xl mx-auto px-2 sm:px-6 md:px-8 block sm:hidden" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="flex flex-col items-center justify-center w-full h-full p-4">
              <div className="w-full text-center mb-6">
                <h3 className="text-3xl font-bold mb-2">Our Clients</h3>
                <p className="text-gray-400 text-base">
                  Don't take our word for it. Experience the power of our work firsthand.
                </p>
              </div>
              {cardImages.map((img) => (
                <BasicCard key={img.title} {...img} />
              ))}
            </div>
          </SpotlightCard>
        </div>

      {/* CTA Section */}
      <section className="relative z-10 bg-black py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-950/50 to-violet-950/50 p-8 text-center backdrop-blur-sm md:p-12 lg:p-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Transform Your Brand?</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Join hundreds of satisfied clients who trust Wezero to bring their vision to life with exceptional design.
            </p>
            <ul className="mx-auto mt-8 flex max-w-xl flex-col gap-4 text-left">
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                <span>No upfront costs or hidden fees</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                <span>Dedicated project manager</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-cyan-400" />
                <span>Unlimited revisions until satisfied</span>
              </li>
            </ul>
              <Button className="mt-8 bg-gradient-to-r from-cyan-400 to-violet-500 text-base sm:text-lg text-black hover:from-cyan-500 hover:to-violet-600">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-8">
        <div className="container flex flex-col items-center justify-between space-y-4 px-4 md:flex-row md:space-y-0">
            <div className="flex items-center">
              <img src="/logos/wezero.svg" alt="Wezero Logo" className="h-7 w-auto object-contain align-middle" />
          </div>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Wezero. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link className="text-sm text-gray-400 hover:text-cyan-400" href="#">
                Privacy
            </Link>
            <Link className="text-sm text-gray-400 hover:text-cyan-400" href="#">
                Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
    </ClickSpark>
  )
}
