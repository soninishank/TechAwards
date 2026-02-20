'use client';

import { motion } from 'framer-motion';
import { Star, Users, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const winners = [
    {
        name: 'Gaurang Munjhe',
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
                            <Card className="h-full border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:bg-slate-800/80 hover:shadow-[0_10px_30px_-15px_rgba(251,191,36,0.3)]">
                                <CardHeader className="pb-4">
                                    <div className="mb-3 inline-flex rounded-xl border border-slate-700 bg-slate-800 p-3 transition-colors duration-300 group-hover:border-amber-400/50 group-hover:bg-amber-400/10">
                                        <winner.icon className="h-6 w-6 text-amber-400 group-hover:text-amber-300" />
                                    </div>
                                    <CardTitle className="text-xl text-white">{winner.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="font-medium text-amber-200">{winner.category} <span className="text-slate-500">({winner.year})</span></p>
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
