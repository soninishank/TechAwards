'use client';

import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, Trophy, Users, Vote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
  {
    id: 1,
    title: 'Nominations Open',
    date: 'May 1 - July 15, 2019',
    description: 'Community members, teams, and peers submit nominations across all categories with supporting evidence.',
    icon: Users,
    color: 'bg-blue-500',
  },
  {
    id: 2,
    title: 'Finalist Selection',
    date: 'July 16 - August 20, 2019',
    description: 'Independent judges score nominations using category criteria and publish the finalist slate.',
    icon: CheckCircle2,
    color: 'bg-purple-500',
  },
  {
    id: 3,
    title: 'Community Voting',
    date: 'August 21 - September 10, 2019',
    description: 'Public voting determines community-choice winners while judges complete final rankings.',
    icon: Vote,
    color: 'bg-pink-500',
  },
  {
    id: 4,
    title: 'Awards Function',
    date: 'September 15, 2019',
    description: 'Winners were announced live at the National Technology Excellence Award ceremony at Taj MG Road, Bengaluru.',
    icon: Trophy,
    color: 'bg-yellow-500',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="w-full">
      <section className="relative overflow-hidden bg-slate-900 py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 to-purple-900 opacity-90" />
        <div className="relative z-10 mx-auto w-full max-w-[1920px] px-6 text-center md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-display text-5xl font-medium tracking-tight md:text-7xl"
          >
            How It Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-xl text-slate-200"
          >
            Archived process of the 2019 National Technology Excellence Award, from nomination to awards night.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1920px] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse"
              >
                <div className={`z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-slate-50 text-white shadow-lg dark:border-slate-900 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${step.color}`}>
                  <step.icon className="h-5 w-5" />
                </div>

                <div className="w-[calc(100%-4rem)] rounded-xl border border-slate-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-amber-400/50 md:w-[calc(50%-2.5rem)]">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                    <div className="flex items-center rounded bg-purple-50 px-2 py-1 text-sm font-medium text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                      <Calendar className="mr-1 h-3 w-3" />
                      {step.date}
                    </div>
                  </div>
                  <p className="leading-relaxed text-slate-600 dark:text-slate-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-100 py-20 dark:bg-slate-900">
        <div className="mx-auto w-full max-w-[1920px] px-6 text-center md:px-12">
          <h2 className="mb-6 font-display text-3xl font-medium tracking-tight text-slate-900 dark:text-white md:text-4xl">2019 Program Archive</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Nominations for the 2019 season are closed. Explore the finalists, judging process, and winners.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-cyan-600 text-white hover:bg-cyan-700" asChild>
              <Link href="/awards/selection-criteria">View Selection Criteria</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/awards/faq">Read FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
