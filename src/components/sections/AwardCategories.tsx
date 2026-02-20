'use client';

import { motion } from 'framer-motion';
import {
  ChevronRight,
  Rocket,
  Users,
  Trophy,
  Lightbulb,
  Star,
  Target,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { awardCategoryDetails } from '@/data/awardCategories';

type Category = {
  slug: string;
  icon: LucideIcon;
};

const categories: Category[] = [
  { slug: 'best-tech-startup', icon: Rocket },
  { slug: 'best-tech-work-culture', icon: Users },
  { slug: 'best-tech-manager', icon: Target },
  { slug: 'best-enterprise-tech', icon: Trophy },
  { slug: 'tech-for-good', icon: Lightbulb },
  { slug: 'rising-star', icon: Star },
];

export function AwardCategories() {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(251,191,36,0.1),transparent_40%),radial-gradient(circle_at_100%_100%,rgba(34,211,238,0.08),transparent_40%)]" />
      <div className="relative mx-auto w-full max-w-[1240px]">
        <div className="mb-12 grid gap-6 rounded-3xl border border-white/10 bg-slate-900/40 p-8 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-md md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">Awards Program</p>
            <h2 className="mt-2 font-display text-3xl text-white md:text-4xl">Categories for teams, leaders, and builders</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              Nominations are reviewed by category judges and shortlisted before the final awards function. Multiple winners are announced live.
            </p>
          </div>
          <Link
            href="/awards/selection-criteria"
            className="inline-flex items-center justify-center rounded-full border border-amber-300/50 px-5 py-2 text-sm font-medium text-amber-100 hover:bg-amber-200/10"
          >
            Review Criteria
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const details = awardCategoryDetails.find((item) => item.slug === category.slug);
            if (!details) return null;

            return (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/awards/${category.slug}`} className="group block h-full">
                  <Card className="relative h-full overflow-hidden border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/30 hover:bg-slate-800/80 hover:shadow-[0_20px_40px_-15px_rgba(251,191,36,0.15)] group-hover:before:opacity-100 before:absolute before:inset-0 before:bg-gradient-to-br before:from-amber-400/10 before:via-transparent before:to-transparent before:opacity-0 before:transition-opacity before:duration-500">
                    <CardHeader className="relative flex flex-row items-center justify-between pb-6 pt-6">
                      <div className="rounded-2xl border border-slate-700 bg-slate-800/80 p-3.5 shadow-inner transition-all duration-300 group-hover:scale-110 group-hover:border-amber-400/50 group-hover:bg-amber-400/10 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                        <category.icon className="h-6 w-6 text-amber-400 transition-colors duration-300 group-hover:text-amber-300" />
                      </div>
                      <CardTitle className="text-2xl font-bold tracking-tight text-white">{details.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative flex h-[calc(100%-88px)] flex-col justify-between">
                      <p className="mb-6 text-sm leading-relaxed text-slate-300">{details.shortDescription}</p>

                      <div className="mt-auto border-t border-slate-800 pt-4 transition-colors duration-300 group-hover:border-slate-700/80">
                        <span className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-amber-200 transition-colors group-hover:text-amber-300">
                          View details <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
