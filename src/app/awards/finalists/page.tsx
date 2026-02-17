'use client';

import { motion } from 'framer-motion';
import { MapPin, Building2 } from 'lucide-react';
import Image from 'next/image';

type Finalist = {
    name: string;
    city: string;
    image: string;
    company?: string;
};

const categories = [
    {
        title: "Best Tech Startup",
        description: "Recognizing startups that have disrupted the market with innovative products and rapid growth.",
        finalists: [
            { name: "NeuroPixel AI", city: "Bangalore", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400&h=300" },
            { name: "BlueSky Analytics", city: "Gurgaon", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400&h=300" },
            { name: "Detect Technologies", city: "Chennai", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=300" },
            { name: "Pixxel", city: "Bangalore", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400&h=300" },
            { name: "Ultrahuman", city: "Bangalore", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=400&h=300" },
        ]
    },
    {
        title: "Best Tech Manager",
        description: "Honoring leaders who inspire their teams, drive technical excellence, and mentor the next generation.",
        finalists: [
            { name: "Anjali Sud", company: "Vimeo (Ex)", city: "Mumbai", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Nithin Kamath", company: "Zerodha", city: "Bangalore", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Deepinder Goyal", company: "Zomato", city: "Gurgaon", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400" },
            { name: "Falguni Nayar", company: "Nykaa", city: "Mumbai", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400" },
        ]
    },
    {
        title: "Best Tech Work Culture",
        description: "Celebrating companies that foster innovation, inclusivity, and employee well-being.",
        finalists: [
            { name: "Swiggy", city: "Bangalore", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400&h=300" },
            { name: "Cred", city: "Bangalore", image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=400&h=300" },
            { name: "Razorpay", city: "Bangalore", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=300" },
            { name: "Freshworks", city: "Chennai", image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=400&h=300" },
        ]
    }
];

export default function FinalistsPage() {
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
                        2025 Shikhar Awards Finalists
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
                    >
                        Meet the innovators and leaders who are shaping the future of technology in India.
                    </motion.p>
                </div>
            </section>

            {/* Finalists Groups */}
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 py-20 space-y-24">
                {categories.map((category, catIndex) => (
                    <section key={catIndex}>
                        <div className="mb-10 border-l-4 border-cyan-500 pl-6">
                            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-slate-900 dark:text-white mb-2">
                                {category.title}
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400">
                                {category.description}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {category.finalists.map((finalist: Finalist, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 dark:border-slate-800 group"
                                >
                                    {/* Image */}
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <Image
                                            src={finalist.image}
                                            alt={finalist.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white mb-1">
                                            {finalist.name}
                                        </h3>
                                        {'company' in finalist && (
                                            <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
                                                <Building2 className="w-3.5 h-3.5 mr-1" />
                                                {finalist.company}
                                            </div>
                                        )}
                                        <div className="flex items-center text-sm font-medium text-cyan-600 dark:text-cyan-400 mt-2">
                                            <MapPin className="w-3.5 h-3.5 mr-1" />
                                            {finalist.city}
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
