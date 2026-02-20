'use client';

import { motion } from 'framer-motion';
import { Award, Star, Users, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const winners = [
    {
        name: 'Nishank Soni',
        category: 'Rising Star',
        company: 'Tech Innovators Inc.',
        year: '2019',
        icon: Star,
    },
    {
        name: 'Sarah Chen',
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
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-white/10 bg-slate-900/40 text-slate-100 transition-all hover:bg-slate-900/60 hover:border-cyan-300/30">
                                <CardHeader className="pb-4">
                                    <div className="mb-3 inline-flex rounded-xl border border-cyan-300/20 bg-cyan-400/10 p-2 text-cyan-200">
                                        <winner.icon className="h-5 w-5" />
                                    </div>
                                    <CardTitle className="text-lg text-white">{winner.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-medium text-amber-200">{winner.category} ({winner.year})</p>
                                    <p className="mt-1 text-sm text-slate-400">{winner.company}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
