'use client';

import { motion } from 'framer-motion';
import { MapPin, Trophy, Star } from 'lucide-react';
import Image from 'next/image';

const winners = [
    {
        category: "Best Tech Startup",
        awards: [
            {
                type: "Judges' Choice",
                name: "NeuroPixel AI",
                tagline: "Revolutionizing computer vision for retail",
                city: "Bangalore",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=400",
                width: "col-span-1 md:col-span-2 lg:col-span-1"
            },
            {
                type: "Community Choice",
                name: "BlueSky Analytics",
                tagline: "Satellite data for climate action",
                city: "Gurgaon",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=400",
                width: "col-span-1 md:col-span-2 lg:col-span-1"
            }
        ]
    },
    {
        category: "Best Tech Manager",
        awards: [
            {
                type: "Judges' Choice",
                name: "Anjali Sud",
                tagline: "Vimeo (Ex)",
                city: "Mumbai",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=400",
                width: "col-span-1"
            },
            {
                type: "Community Choice",
                name: "Deepinder Goyal",
                tagline: "Zomato",
                city: "Gurgaon",
                image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600&h=400",
                width: "col-span-1"
            }
        ]
    },
    {
        category: "Best Tech Work Culture",
        awards: [
            {
                type: "Judges' Choice",
                name: "Cred",
                tagline: "Trust based financial platform",
                city: "Bangalore",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600&h=400",
                width: "col-span-1"
            },
            {
                type: "Community Choice",
                name: "Swiggy",
                tagline: "Delivering convenience",
                city: "Bangalore",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600&h=400",
                width: "col-span-1"
            }
        ]
    }
];

export default function WinnersPage() {
    return (
        <div className="w-full bg-slate-950 min-h-screen text-white">
            {/* Hero Section with confetti-like background */}
            <section className="relative py-24 text-center px-6 md:px-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-slate-950 to-cyan-900/50" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="relative z-10 max-w-[1920px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block p-2 rounded-full bg-slate-800/50 backdrop-blur border border-slate-700 mb-6"
                    >
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-xs font-bold tracking-wider">
                            2024 HALL OF FAME
                        </span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400"
                    >
                        2024 Winners
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-300 max-w-2xl mx-auto"
                    >
                        Celebrating the visionaries and innovators who defined excellence in the past year.
                    </motion.p>
                </div>
            </section>

            {/* Winners List */}
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 py-12 space-y-32 pb-32">
                {winners.map((category, catIndex) => (
                    <section key={catIndex}>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-display text-4xl md:text-5xl font-bold text-center tracking-tight text-white mb-16 uppercase"
                        >
                            {category.category}
                        </motion.h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                            {category.awards.map((award, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 group hover:border-slate-700 transition-colors"
                                >
                                    {/* Image Section */}
                                    <div className="relative h-64 w-full">
                                        <Image
                                            src={award.image}
                                            alt={award.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8 text-center bg-slate-900 relative">
                                        {/* Award Type Badge */}
                                        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                                            <span className={`px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg border ${award.type === "Judges' Choice"
                                                    ? "bg-slate-950 text-cyan-400 border-cyan-900"
                                                    : "bg-slate-950 text-purple-400 border-purple-900"
                                                }`}>
                                                {award.type === "Judges' Choice" ? <Trophy className="w-3 h-3 inline mr-1 -mt-0.5" /> : <Star className="w-3 h-3 inline mr-1 -mt-0.5" />}
                                                {award.type}
                                            </span>
                                        </div>

                                        <h3 className="font-display text-3xl font-bold text-white mb-2 mt-4">
                                            {award.name}
                                        </h3>
                                        <p className="text-slate-400 text-sm font-medium uppercase tracking-wide mb-6">
                                            {award.tagline}
                                        </p>

                                        <div className="flex items-center justify-center text-xs font-bold text-slate-500 tracking-widest uppercase">
                                            <MapPin className="w-3 h-3 mr-1" />
                                            {award.city}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
