'use client';

import { motion } from 'framer-motion';
import { Linkedin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const judges = [
    {
        name: "Arylee McSweaney",
        title: "Director of Engineering",
        company: "Etsy",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        name: "Dr. Anita Jindal",
        title: "Senior Director of Engineering",
        company: "VMware",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        name: "Ziyun Liang",
        title: "Senior Product Designer",
        company: "The New York Times",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        name: "Tanvi S Hungund",
        title: "Senior Manager",
        company: "AWS",
        image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        name: "Rohan Gupta",
        title: "VP of Engineering",
        company: "Flipkart",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        name: "Sarah Chen",
        title: "Head of Product",
        company: "Zomato",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        name: "Michael Chang",
        title: "Chief Technology Officer",
        company: "Razorpay",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
    },
    {
        name: "Priya Sharma",
        title: "Director of AI",
        company: "Ola Electric",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400&h=400"
    }
];

export default function JudgesPage() {
    return (
        <div className="w-full bg-slate-50 dark:bg-slate-950">
            {/* Hero Section */}
            <section className="py-20 text-center px-6 md:px-12 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-[1920px] mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-6 text-slate-900 dark:text-white"
                    >
                        Meet Our Judges
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
                    >
                        An esteemed panel of industry leaders, technologists, and innovators who select the best of the best in the Indian tech ecosystem.
                    </motion.p>
                </div>
            </section>

            {/* Judges Grid */}
            <section className="py-20 w-full max-w-[1920px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                    {judges.map((judge, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center group"
                        >
                            {/* Circular Image */}
                            <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-300 ring-4 ring-slate-100 dark:ring-slate-800 group-hover:ring-cyan-400 dark:group-hover:ring-cyan-500">
                                <Image
                                    src={judge.image}
                                    alt={judge.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1">
                                {judge.name}
                            </h3>
                            <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 min-h-[3rem] flex flex-col items-center justify-start w-full px-2 text-center leading-snug">
                                <span className="block">{judge.title}</span>
                                <span className="block font-semibold text-slate-700 dark:text-slate-300 mt-1">@ {judge.company}</span>
                            </div>

                            {/* LinkedIn Icon */}
                            <Link href="#" className="p-1.5 text-slate-400 hover:text-[#0077b5] hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors mb-3">
                                <Linkedin className="w-5 h-5" />
                            </Link>

                            {/* Read Bio Link */}
                            <Link href="#" className="inline-flex items-center text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:underline">
                                Read Bio <ChevronRight className="w-4 h-4 ml-0.5" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-slate-100 dark:bg-slate-900 w-full">
                <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 text-center">
                    <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight mb-6 text-slate-900 dark:text-white">
                        Interested in Judging?
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
                        Share your expertise and help recognize the next generation of tech talent.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                            <Link href="/awards/contact">
                                Apply to Judge
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
