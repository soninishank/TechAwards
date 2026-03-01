'use client';

import { motion } from 'framer-motion';
import { Star, Users, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const winners = [
    {
        name: 'Gaurang Munje',
        category: 'Rising Star',
        company: 'Tech Innovators Inc.',
        year: '2019',
        icon: Star,
    },
    {
        name: 'Sneha Desai',
        category: 'Best Tech Manager',
        company: 'CloudScale',
        year: '2018',
        icon: Users,
    },
    {
        name: 'Raj Patel',
        category: 'Best Enterprise Tech',
        company: 'Fintech Solutions',
        year: '2018',
        icon: Briefcase,
    },
];

export function PreviousWinnersSection() {
    return (
        <section className="px-6 py-20 md:px-10">
            <div className="mx-auto w-full max-w-[1240px]">
                <div className="mb-10 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Hall of Fame</p>
                    <h2 className="mt-2 font-display text-3xl text-white md:text-4xl">Previous Year Winners</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
                        Recognizing the exceptional individuals and teams who set the benchmark for technology excellence in previous years.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {winners.map((winner, index) => (
                        <motion.div
                            key={winner.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group h-full block"
                        >
                            <Card className="relative h-full overflow-hidden border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/30 hover:bg-slate-800/80 hover:shadow-[0_20px_40px_-15px_rgba(251,191,36,0.15)] group-hover:before:opacity-100 before:absolute before:inset-0 before:bg-gradient-to-br before:from-amber-400/10 before:via-transparent before:to-transparent before:opacity-0 before:transition-opacity before:duration-500">
                                <CardHeader className="relative pb-4 pt-6">
                                    <div className="mb-4 inline-flex rounded-2xl border border-slate-700 bg-slate-800/80 p-3.5 shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:border-amber-400/50 group-hover:bg-amber-400/10 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                                        <winner.icon className="h-6 w-6 text-amber-400 transition-colors duration-300 group-hover:text-amber-300" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold tracking-tight text-white">{winner.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="relative">
                                    <p className="mb-6 font-medium tracking-wide text-amber-200">{winner.category} <span className="opacity-50">({winner.year})</span></p>

                                    <div className="mt-auto border-t border-slate-800 pt-4 transition-colors duration-300 group-hover:border-slate-700/80">
                                        <p className="text-sm font-semibold uppercase tracking-wider text-slate-400 group-hover:text-slate-300">
                                            {winner.company}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
