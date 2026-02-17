'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const navItems = [
    { label: 'Categories', href: '/awards' },
    { label: 'Selection Criteria', href: '/awards/selection-criteria' },
    { label: 'How It Works', href: '/awards/how-it-works' },
    { label: 'Voting', href: '/awards/voting' },
    { label: 'Judges', href: '/awards/judges' },
    { label: 'Finalists', href: '/awards/finalists' },
    { label: 'Winners', href: '/awards/winners' },
    { label: 'FAQ', href: '/awards/faq' },
    { label: 'Contact', href: '/awards/contact' },
];

export function AwardsSubNav() {
    const pathname = usePathname();

    return (
        <div className="sticky top-16 z-40 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur border-b border-slate-200 dark:border-slate-800">
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12">
                <nav className="flex items-center overflow-x-auto no-scrollbar">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "relative flex items-center px-4 py-4 text-sm font-medium whitespace-nowrap transition-colors",
                                    isActive
                                        ? "text-cyan-600 dark:text-cyan-400"
                                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                                )}
                            >
                                {item.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-600 dark:bg-cyan-400"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </div>
    );
}
