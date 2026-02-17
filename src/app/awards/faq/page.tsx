'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqData = [
    {
        category: "Nominations",
        questions: [
            {
                q: "Can I enter in more than one category?",
                a: "Absolutely! We encourage you to enter for as many of our categories that you deem appropriate for your company. There is no limit to the number of categories you can participate in."
            },
            {
                q: "Can I edit my nomination after submitting it?",
                a: "Yes, you can edit or add additional categories to your submission up until the nomination deadline on May 30th. Simply log in to your account to make changes."
            },
            {
                q: "What is the time commitment involved?",
                a: "The submission of your nomination takes ~10-30 minutes to complete. We've designed the process to be straightforward while allowing you enough space to tell your story."
            },
            {
                q: "Is there a fee to nominate?",
                a: "No, nominating for the Shikhar Awards is completely free. We believe in accessible recognition for all deserving innovators."
            }
        ]
    },
    {
        category: "Judging",
        questions: [
            {
                q: "Who are the judges?",
                a: "Our judging panel consists of esteemed technology leaders, executives, and innovators from top companies across the Indian tech ecosystem. You can view our full list on the Judges page."
            },
            {
                q: "Is it possible to receive the judges' rating for my submission?",
                a: "Due to the high volume of entries, we strictly do not offer individual comments or ratings to entrants. The judges' decisions are final."
            },
            {
                q: "How are finalists selected?",
                a: "Finalists are selected based on a scoring system that evaluates innovation, impact, and contribution to the tech community. The top scoring nominations in each city/category move forward."
            }
        ]
    },
    {
        category: "Voting",
        questions: [
            {
                q: "How does Community Voting work?",
                a: "For the 'Community Choice' awards, the winner is decided publicly by the tech community. Voting opens in July and you can vote once per day for your favorites."
            },
            {
                q: "Can I vote for myself or my company?",
                a: "Yes! We encourage you to rally your network, employees, and customers to vote. However, the use of bots or automated voting scripts is strictly prohibited."
            }
        ]
    }
];

export default function FAQPage() {
    return (
        <div className="w-full bg-white dark:bg-slate-950 min-h-screen">
            {/* Hero Section */}
            <section className="py-20 text-center px-6 md:px-12 bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800">
                <div className="max-w-[1920px] mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-display text-4xl md:text-6xl font-medium tracking-tight mb-6 text-slate-900 dark:text-white"
                    >
                        Frequently Asked Questions
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
                    >
                        Everything you need to know about the Shikhar Awards process.
                    </motion.p>
                </div>
            </section>

            {/* FAQ Content */}
            <div className="w-full max-w-4xl mx-auto px-6 md:px-12 py-20 space-y-20">
                {faqData.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                        <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b-2 border-slate-100 dark:border-slate-800 pb-4 inline-block">
                            {section.category}
                        </h2>
                        <div className="space-y-0">
                            {section.questions.map((item, index) => (
                                <FAQItem key={index} question={item.q} answer={item.a} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-200 dark:border-slate-800">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className={`text-lg font-medium pr-8 transition-colors ${isOpen ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400'}`}>
                    {question}
                </span>
                <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-600 dark:text-cyan-400' : ''}`}
                />
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
            >
                <p className="pb-8 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                    {answer}
                </p>
            </motion.div>
        </div>
    );
}
