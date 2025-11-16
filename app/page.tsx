"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
        <div className="absolute left-1/2 top-[-120px] -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-3xl bg-brand-300/40 animate-pulse-soft" />
        <div className="absolute right-[-100px] top-20 h-[320px] w-[320px] rounded-full blur-3xl bg-brand-200/50 animate-float" />
      </div>

      <header className="container-responsive flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-brand-600 grid place-content-center text-white shadow-glow">
            <Sparkles className="h-5 w-5" />
          </div>
          <span className="font-extrabold text-lg tracking-tight">Rojgar AI</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
          <Link href="/jobs" className="hover:text-brand-700">Jobs</Link>
          <Link href="/eligibility" className="hover:text-brand-700">Eligibility</Link>
          <Link href="/about" className="hover:text-brand-700">About</Link>
        </nav>
        <Link href="/jobs" className="btn-primary text-sm sm:text-base">Find Jobs</Link>
      </header>

      <section className="container-responsive grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-10 sm:py-16">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight"
          >
            Smart Government Job Discovery for India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-slate-600 text-base sm:text-lg"
          >
            Explore curated Sarkari Naukri openings and get eligibility-based matching with a smooth, mobile-first experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-col sm:flex-row gap-3"
          >
            <Link href="/jobs" className="btn-primary">
              <Search className="h-4 w-4" /> Browse Jobs
            </Link>
            <Link
              href="/eligibility"
              className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium border border-slate-200 hover:border-brand-300 hover:text-brand-700 transition-colors"
            >
              <Sparkles className="h-4 w-4" /> Check Eligibility
            </Link>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { k: "Jobs", v: "120+" },
              { k: "Categories", v: "18" },
              { k: "States", v: "28" },
              { k: "Avg Match", v: "82%" },
            ].map((i) => (
              <div key={i.k} className="glass rounded-xl p-4">
                <div className="text-2xl font-bold text-brand-700">{i.v}</div>
                <div className="text-xs text-slate-500 mt-1">{i.k}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="glass rounded-2xl p-4 sm:p-6 lg:p-8"
        >
          <div className="rounded-xl overflow-hidden border border-slate-100">
            <video
              className="w-full h-auto"
              muted
              autoPlay
              playsInline
              loop
              poster="/hero-poster.png"
            >
              <source src="/hero.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="text-xs text-slate-500 mt-3">
            Visual preview of the Rojgar AI experience.
          </p>
        </motion.div>
      </section>

      <footer className="container-responsive mt-12 sm:mt-20 pb-10">
        <div className="glass rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="font-bold">Rojgar AI</div>
            <div className="text-slate-500 text-sm">Smart government job discovery & matching</div>
          </div>
          <Link href="/about" className="inline-flex items-center gap-2 text-brand-700 font-medium">
            Learn about the founder <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </footer>
    </main>
  );
}
