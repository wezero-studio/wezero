"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Palette, Paintbrush, Users, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-background pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full max-w-full translate-x-1/2 transform sm:block lg:inset-y-0"
            width={480}
            height={784}
            fill="none"
            viewBox="0 0 480 784"
          >
            <defs>
              <pattern
                id="de316486-4a29-4316-b05b-74f3cd94c645"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={480} height={784} fill="url(#de316486-4a29-4316-b05b-74f3cd94c645)" />
          </svg>

          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div className="flex w-full items-center justify-between lg:w-auto">
                <Link className="flex items-center space-x-2 font-bold" href="/">
                  <Palette className="h-6 w-6 text-cyan-400" />
                  <span>Wezero</span>
                </Link>
                <div className="-mr-2 flex items-center lg:hidden">{/** rest of code here */}</div>
              </div>
              <div className="hidden space-x-8 lg:flex lg:justify-start">
                {/** rest of code here */}
                <Link className="hidden text-sm hover:text-cyan-400 sm:block" href="/portfolio">
                  Portfolio
                </Link>
              </div>
              <div className="hidden lg:flex lg:items-center lg:justify-end">
                <Button className="bg-gradient-to-r from-cyan-400 to-violet-500 text-black hover:from-cyan-500 hover:to-violet-600">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>

          <main className="mx-auto mt-8 max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Design That Drives Results
              </h1>
              <p className="mx-auto max-w-2xl text-muted text-gray-400 sm:text-xl">
                We create stunning digital experiences that elevate your online presence with design that drives results
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button className="bg-gradient-to-r from-cyan-400 to-violet-500 text-lg text-black hover:from-cyan-500 hover:to-violet-600">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button
                    variant="outline"
                    className="border-white/10 text-lg text-white hover:bg-white/10 bg-transparent"
                  >
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
      <div className="bg-black py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose wezero?</h2>
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
      </div>
      <div className="bg-zinc-900 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Transform Your Brand?</h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Join hundreds of satisfied clients who trust Wezero to bring their vision to life with exceptional design.
            </p>
          </div>
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
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-center">
            <div className="rounded-md shadow">
              <Button className="mt-8 bg-gradient-to-r from-cyan-400 to-violet-500 text-lg text-black hover:from-cyan-500 hover:to-violet-600">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-zinc-950 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <Palette className="h-6 w-6 text-cyan-400" />
              <span className="font-bold">Wezero</span>
            </div>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Wezero. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
