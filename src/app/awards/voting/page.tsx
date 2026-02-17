'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Clock, ShieldCheck, Trophy, Bell } from 'lucide-react';

export default function VotingPage() {
  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950">
      <section className="relative overflow-hidden border-b border-slate-100 bg-white px-6 py-24 text-center dark:border-slate-800 dark:bg-slate-900 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-purple-500/5" />
        <div className="relative z-10 mx-auto max-w-[1920px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          >
            <Clock className="h-4 w-4" />
            <span className="text-sm font-semibold uppercase tracking-wide">Status: Voting Closed (2019 Edition)</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-display text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-6xl"
          >
            Community Voting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-xl text-slate-600 dark:text-slate-400"
          >
            Community voting for the 2019 season is now closed.
          </motion.p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-4xl space-y-16 px-6 py-20 md:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
              <Trophy className="h-6 w-6" />
            </div>
            <h3 className="mb-3 font-display text-xl font-bold text-slate-900 dark:text-white">The Community Choice Track</h3>
            <p className="leading-relaxed text-slate-600 dark:text-slate-400">
              Judges select technical winners while community votes determine Community Choice winners in select categories.
            </p>
          </div>

          <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="mb-3 font-display text-xl font-bold text-slate-900 dark:text-white">Voting Rules</h3>
            <p className="leading-relaxed text-slate-600 dark:text-slate-400">
              One verified vote per person per category. Automated voting and fraud are monitored and removed.
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-center text-white md:p-12">
          <div className="absolute right-0 top-0 p-12 opacity-10">
            <Bell className="-mr-20 -mt-20 h-64 w-64 rotate-12 transform" />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="mb-4 font-display text-3xl font-bold">Voting archive</h2>
            <p className="mb-8 text-lg text-slate-300">
              Voting concluded on September 10, 2019. Browse finalist and winner pages for the complete results.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-cyan-500 font-semibold text-white shadow-lg shadow-cyan-500/25 hover:bg-cyan-600"
                asChild
              >
                <Link href="/awards/finalists">View Finalists</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white"
                asChild
              >
                <Link href="/awards/winners">View 2019 Winners</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
