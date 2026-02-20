'use client';

import { motion } from 'framer-motion';

const partners = [
  'Flipkart',
  'Razorpay',
  'Zoho',
  'Postman',
  'CRED',
  'Swiggy',
  'Zerodha',
  'Freshworks',
];

export function PartnersSection() {
  return (
    <section className="px-6 pb-20 md:px-10">
      <div className="mx-auto w-full max-w-[1240px]">
        <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-3xl text-white md:text-4xl">Sponsors, judges, and hiring partners</h2>
          <p className="max-w-lg text-sm text-slate-400 md:text-base">
            Built with companies and local communities who actively support nominations, mentoring, and recognition.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="grid h-20 place-items-center rounded-2xl border border-white/10 bg-slate-900/60 p-6 text-lg font-bold tracking-wide text-slate-300 backdrop-blur-md transition-all hover:border-amber-400/30 hover:bg-slate-800/80 hover:text-amber-200"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
