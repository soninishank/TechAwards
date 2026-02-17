'use client';

import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Trophy, Users, Vote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
    {
        id: 1,
        title: "Nominations Open",
        date: "March 1st - May 30th",
        description: "The community nominates the best tech companies and leaders across various categories. Self-nominations are encouraged!",
        icon: Users,
        color: "bg-blue-500"
    },
    {
        id: 2,
        title: "Finalist Selection",
        date: "June 1st - June 15th",
        description: "Our panel of expert judges reviews all nominations to select the top finalists for each city and category.",
        icon: CheckCircle2,
        color: "bg-purple-500"
    },
    {
        id: 3,
        title: "Community Voting",
        date: "July 1st - July 31st",
        description: "It's all up to you! The tech community votes for their favorites to decide the 'Community Choice' winners.",
        icon: Vote,
        color: "bg-pink-500"
    },
    {
        id: 4,
        title: "Awards Ceremony",
        date: "October 2025",
        description: "Winners are announced live at the Shikhar Awards Gala, a night of celebration, networking, and recognition.",
        icon: Trophy,
        color: "bg-yellow-500"
    }
];

export default function HowItWorksPage() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 to-purple-900 opacity-90" />
                <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-5xl md:text-7xl font-medium tracking-tight mb-6"
                    >
                        How It Works
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-200 max-w-2xl mx-auto"
                    >
                        Everything you need to know about the Shikhar Awards process, from nomination to celebration.
                    </motion.p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 w-full max-w-[1920px] mx-auto px-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}
                            >
                                {/* Icon/Dot */}
                                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${step.color} shadow-lg z-10 text-white`}>
                                    <step.icon className="w-5 h-5" />
                                </div>

                                {/* Content Card */}
                                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-100 dark:border-slate-800">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                                        <div className="flex items-center text-sm font-medium text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {step.date}
                                        </div>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-100 dark:bg-slate-900 w-full">
                <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 text-center">
                    <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-6 text-slate-900 dark:text-white">
                        Ready to shine?
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                        Do not miss your chance to be recognized among the best in the industry. Nominations are free and take only a few minutes.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-white" asChild>
                            <Link href="/awards/contact">
                                Nominate Now
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/awards/faq">
                                Read FAQ
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
