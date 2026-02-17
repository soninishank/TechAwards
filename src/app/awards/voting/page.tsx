'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Clock, ShieldCheck, Trophy, Bell } from 'lucide-react';

export default function VotingPage() {
    return (
        <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <section className="py-24 text-center px-6 md:px-12 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-transparent to-purple-500/5 opactiy-50" />
                <div className="max-w-[1920px] mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 mb-6"
                    >
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-semibold uppercase tracking-wide">Status: Voting Closed</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-6 text-slate-900 dark:text-white"
                    >
                        Community Voting
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
                    >
                        Help us decide who takes home the Community Choice Award!
                    </motion.p>
                </div>
            </section>

            {/* Content Container */}
            <div className="w-full max-w-4xl mx-auto px-6 md:px-12 py-20 space-y-16">

                {/* Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6">
                            <Trophy className="w-6 h-6" />
                        </div>
                        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3">
                            The Community Choice Award
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            While judges select the technical winners, the Community Choice award is entirely up to you. It celebrates the companies and leaders with the strongest community support.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-3">
                            Voting Rules
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            To ensure fairness, voting is limited to one vote per person per day. We monitor for bot activity and fraudulent votes to keep the playing field level.
                        </p>
                    </div>
                </div>

                {/* Newsletter / Notification CTA */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10">
                        <Bell className="w-64 h-64 -mr-20 -mt-20 transform rotate-12" />
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="font-display text-3xl font-bold mb-4">
                            Do not miss the next voting round
                        </h2>
                        <p className="text-slate-300 mb-8 text-lg">
                            Voting for the 2024 awards has closed. Sign up to get notified when nominations and voting open for the 2025 season.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg shadow-cyan-500/25" asChild>
                                <Link href="/awards/contact">
                                    Notify Me
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white" asChild>
                                <Link href="/awards/winners">
                                    View 2024 Winners
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
