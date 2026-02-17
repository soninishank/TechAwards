'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '4,200+', label: 'Community Members Joined' },
  { value: '510', label: 'Nominations Received' },
  { value: '96', label: 'Finalists Announced' },
  { value: '24', label: 'Winning Teams & Individuals' },
];

export function StatsSection() {
  return (
    <section className="px-6 pb-20 md:px-10">
      <div className="mx-auto w-full max-w-[1240px] rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-200">Participation Snapshot</p>
        <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-slate-950/50 p-4"
            >
              <p className="text-2xl font-semibold text-white md:text-3xl">{stat.value}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-400 md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
