'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-24 md:px-10 md:pt-30">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute right-6 top-16 h-56 w-56 rounded-full bg-cyan-400/15 blur-2xl" />
      </div>

      <div className="mx-auto grid w-full max-w-[1240px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/30 bg-amber-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100"
          >
            2019 Tech Awards
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="max-w-3xl font-display text-4xl leading-[1.05] text-white sm:text-5xl md:text-7xl"
          >
            Celebrate the teams and people building what’s next.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg"
          >
            One awards function, hundreds of nominations, and thousands of community members joining in-person to honor product, engineering, and culture leadership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="bg-amber-300 text-slate-900 hover:bg-amber-200">
              <Link href="/awards/contact">
                Submit Nomination <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-slate-300/50 bg-transparent text-slate-100 hover:bg-slate-900/50">
              <Link href="/events">See Event Timeline</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="grid gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-6 backdrop-blur"
        >
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
            <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Awards Night</p>
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-200"><Calendar className="h-4 w-4 text-amber-200" /> September 15, 2019</p>
            <p className="mt-1 flex items-center gap-2 text-sm text-slate-300"><MapPin className="h-4 w-4 text-cyan-300" /> Taj MG Road, Bengaluru</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-2xl font-semibold text-white">4,200+</p>
              <p className="mt-1 text-xs text-slate-400">attendees joined last year</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
              <p className="text-2xl font-semibold text-white">38</p>
              <p className="mt-1 text-xs text-slate-400">cities represented</p>
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-300/25 bg-cyan-400/8 p-4 text-sm text-slate-200">
            <p className="flex items-center gap-2 font-medium text-cyan-200"><Users className="h-4 w-4" /> Event archive</p>
            <p className="mt-2 text-slate-300">Explore finalists, judges, winners, and highlights from the 2019 awards function.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
