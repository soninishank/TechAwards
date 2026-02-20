'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqData = [
  {
    category: 'Nominations',
    questions: [
      {
        q: 'Can I submit in more than one category?',
        a: 'Yes. You can submit to multiple categories as long as each submission clearly matches that category’s criteria.',
      },
      {
        q: 'Can I update my nomination after submission?',
        a: 'Yes. In the 2019 season, nominations could be edited until the deadline on July 15, 2019.',
      },
      {
        q: 'How long does a nomination take?',
        a: 'Most nominations take 10 to 15 minutes, depending on how much supporting evidence you include.',
      },
      {
        q: 'Is there a nomination fee?',
        a: 'No. Nominations for the National Technology Excellence Award are free.',
      },
    ],
  },
  {
    category: 'Judging',
    questions: [
      {
        q: 'Who are the judges?',
        a: 'Judges are senior operators across engineering, product, and design from high-growth and enterprise teams.',
      },
      {
        q: 'Will I receive detailed scoring feedback?',
        a: 'Due to submission volume, we do not provide individual score breakdowns. Finalist and winner decisions are final.',
      },
      {
        q: 'How are finalists selected?',
        a: 'Finalists are selected using a weighted rubric across impact, execution quality, leadership, and category fit.',
      },
    ],
  },
  {
    category: 'Voting',
    questions: [
      {
        q: 'How does community voting work?',
        a: 'In the 2019 season, community voting ran during the public voting window with one verified vote per person per category.',
      },
      {
        q: 'Can teams campaign for votes?',
        a: 'Yes. Teams can share voting links with their networks. Automated voting or fraudulent activity leads to disqualification.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-slate-950">
      <section className="relative overflow-hidden bg-slate-900 py-20 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 to-amber-900 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1920px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-display text-4xl font-medium tracking-tight md:text-6xl"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-xl text-slate-200"
          >
            Everything you need to know about nominations, judging, and voting for the National Technology Excellence Award.
          </motion.p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-4xl space-y-20 px-6 py-20 md:px-12">
        {faqData.map((section) => (
          <div key={section.category}>
            <h2 className="mb-8 inline-block border-b-2 border-slate-100 pb-4 font-display text-2xl font-bold text-slate-900 dark:border-slate-800 dark:text-white">
              {section.category}
            </h2>
            <div className="space-y-0">
              {section.questions.map((item) => (
                <FAQItem key={item.q} question={item.q} answer={item.a} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex w-full items-center justify-between py-6 text-left focus:outline-none"
      >
        <span
          className={`pr-8 text-lg font-medium transition-colors ${isOpen
            ? 'text-cyan-600 dark:text-cyan-400'
            : 'text-slate-900 group-hover:text-cyan-600 dark:text-white dark:group-hover:text-cyan-400'
            }`}
        >
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-600 dark:text-cyan-400' : ''
            }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <p className="pb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{answer}</p>
      </motion.div>
    </div>
  );
}
