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
    <section className="px-6 py-20 md:px-10">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="mb-10 grid gap-5 rounded-3xl border border-white/10 bg-slate-900/65 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
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
                  <Card className="h-full border-slate-800 bg-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-500/50 hover:bg-slate-800/80 hover:shadow-[0_10px_30px_-15px_rgba(251,191,36,0.3)]">
                    <CardHeader className="flex flex-row items-center justify-between pb-4">
                      <div className="rounded-xl border border-slate-700 bg-slate-800 p-3 transition-colors duration-300 group-hover:border-amber-400/50 group-hover:bg-amber-400/10">
                        <category.icon className="h-6 w-6 text-amber-400 group-hover:text-amber-300" />
                      </div>
                      <CardTitle className="text-xl text-white">{details.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-relaxed text-slate-400">{details.shortDescription}</p>
                      <span className="mt-4 inline-flex items-center text-sm font-medium text-amber-200">
                        View details <ChevronRight className="ml-1 h-4 w-4" />
                      </span>
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
