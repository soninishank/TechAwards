'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const locations = [
    "Bangalore", "Delhi NCR", "Mumbai", "Hyderabad", "Chennai", "Pune", "Remote", "Other"
];

export default function ContactPage() {
    return (
        <div className="w-full bg-slate-50 dark:bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <section className="py-20 text-center px-6 md:px-12 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-[1920px] mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-6 text-slate-900 dark:text-white"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
                    >
                        Get in touch with the Shikhar Awards team.
                    </motion.p>
                </div>
            </section>

            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 py-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">

                    {/* Main Content / Form */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                Get in Touch
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                                For general inquires or questions about nominations, finalist section, voting or judging, please fill out the form below. Someone from our team will be in touch.
                            </p>
                        </div>

                        <form className="space-y-6 bg-white dark:bg-slate-900 p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name *</Label>
                                    <Input id="firstName" placeholder="Jane" required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name *</Label>
                                    <Input id="lastName" placeholder="Doe" required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email *</Label>
                                <Input id="email" type="email" placeholder="jane@company.com" required />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="company">Company</Label>
                                    <Input id="company" placeholder="Tech Corp" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="jobTitle">Job Title</Label>
                                    <Input id="jobTitle" placeholder="Product Manager" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <Label>Location(s) of Interest</Label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {locations.map((loc) => (
                                        <div key={loc} className="flex items-center space-x-2">
                                            <Checkbox id={`loc-${loc}`} />
                                            <Label htmlFor={`loc-${loc}`} className="font-normal cursor-pointer">
                                                {loc}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" />
                            </div>

                            <Button type="submit" size="lg" className="w-full md:w-auto bg-cyan-600 hover:bg-cyan-700 text-white">
                                Submit
                            </Button>
                        </form>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8">
                        <div className="bg-purple-50 dark:bg-slate-900 p-8 rounded-xl border border-purple-100 dark:border-slate-800">
                            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-4">
                                Resources
                            </h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link href="/awards/how-it-works" className="text-purple-600 dark:text-purple-400 hover:underline font-medium block">
                                        How it Works &rarr;
                                    </Link>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">Everything you need to know about the process.</span>
                                </li>
                                <li>
                                    <Link href="/awards/faq" className="text-purple-600 dark:text-purple-400 hover:underline font-medium block">
                                        FAQ &rarr;
                                    </Link>
                                    <span className="text-sm text-slate-500 dark:text-slate-400">Answers to common questions.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-slate-100 dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800">
                            <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-4">
                                Sponsorship
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Interested in sponsoring the Shikhar Awards?
                            </p>
                            <Button variant="outline" className="w-full" asChild>
                                <Link href="/awards/contact">
                                    Contact Sponsorship Team
                                </Link>
                            </Button>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
