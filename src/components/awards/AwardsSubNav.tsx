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
    { label: 'Nominate', href: '/awards/nominate' },
    { label: 'Contact', href: '/awards/contact' },
];

export function AwardsSubNav() {
    const pathname = usePathname();

    return (
        <div className="sticky top-16 z-40 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
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
                                        ? "text-cyan-300"
                                        : "text-slate-400 hover:text-slate-200"
                                )}
                            >
                                {item.label}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
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
