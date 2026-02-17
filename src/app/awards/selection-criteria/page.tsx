'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const scorecard = [
  {
    title: 'Impact',
    weight: '35%',
    details: 'Measured customer, business, or ecosystem outcomes attributable to the submitted work.',
  },
  {
    title: 'Execution Quality',
    weight: '25%',
    details: 'Technical depth, product quality, reliability, and delivery discipline.',
  },
  {
    title: 'Innovation',
    weight: '20%',
    details: 'Originality of approach and clarity of problem-solution fit.',
  },
  {
    title: 'Leadership & Team',
    weight: '20%',
    details: 'Decision quality, collaboration, team development, and operating maturity.',
  },
];

const requirements = [
  'Clear problem statement and why it matters',
  'Time-bound outcomes (for example, growth, retention, uptime, or cost impact)',
  'Delivery context: constraints, tradeoffs, and decisions',
  'References or supporting artifacts where available',
];

const guardrails = [
  'Conflict-of-interest declarations are mandatory for all judges',
  'Judges do not evaluate submissions from their own organizations',
  'Each submission is independently scored by multiple judges',
  'Finalist thresholds are decided by score bands, not popularity',
];

export default function SelectionCriteriaPage() {
  return (
    <div className="w-full">
      <section className="relative overflow-hidden bg-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 to-purple-900 opacity-90" />
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 text-center md:px-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-display text-4xl font-medium tracking-tight md:text-6xl"
          >
            Selection Criteria
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-lg text-slate-200"
          >
            Professional judging framework used for the 2019 Tech Award Summit season.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 py-16 md:px-10">
        <h2 className="mb-6 font-display text-3xl text-white">Weighted Scorecard</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {scorecard.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-display text-xl text-white">{item.title}</h3>
                <span className="rounded-full border border-amber-300/50 bg-amber-200/10 px-3 py-1 text-xs font-semibold text-amber-100">
                  {item.weight}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-300">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-6 px-6 pb-16 md:grid-cols-2 md:px-10">
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
          <h3 className="mb-3 font-display text-2xl text-white">Submission Requirements</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            {requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
          <h3 className="mb-3 font-display text-2xl text-white">Governance Guardrails</h3>
          <ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">
            {guardrails.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-6 pb-20 text-center md:px-10">
        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-8">
          <h3 className="font-display text-2xl text-white">Need a category-level rubric?</h3>
          <p className="mt-2 text-sm text-slate-300">
            For category-specific standards, review category pages and the archived process timeline.
          </p>
          <div className="mt-5 flex justify-center gap-3">
            <Button asChild>
              <Link href="/awards">View Categories</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/awards/how-it-works">View Process</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
