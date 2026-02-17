'use client';

import { motion } from 'framer-motion';
import { ClipboardCheck, ShieldCheck, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Open Nominations',
    description: 'Peers, leaders, and community members submit nominations for teams and individuals doing standout work.',
  },
  {
    icon: ShieldCheck,
    title: 'Independent Judging',
    description: 'Category-specific judging panels review based on clear criteria across impact, execution, and leadership.',
  },
  {
    icon: Sparkles,
    title: 'Awards Function',
    description: 'Finalists present stories, people vote in select categories, and winners are announced live at the annual function.',
  },
];

export default function MissionSection() {
  return (
    <section className="px-6 pb-24 md:px-10">
      <div className="mx-auto w-full max-w-[1240px] rounded-3xl border border-white/10 bg-slate-900/65 p-6 md:p-10">
        <h2 className="font-display text-3xl text-white md:text-4xl">How the awards function works</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
          This program is designed to be fair, transparent, and community-first so everyone understands how nominees become finalists and winners.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-slate-950/50 p-5"
            >
              <div className="mb-3 inline-flex rounded-full border border-amber-300/40 bg-amber-300/10 p-2 text-amber-200">
                <step.icon className="h-4 w-4" />
              </div>
              <h3 className="text-lg text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
