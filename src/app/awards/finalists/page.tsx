'use client';

import { motion } from 'framer-motion';
import { MapPin, Building2 } from 'lucide-react';
import Image from 'next/image';

type Finalist = {
  name: string;
  city: string;
  image: string;
  company?: string;
};

const categories = [
  {
    title: 'Best Tech Startup',
    description: 'Early-stage teams shipping clear customer value and strong execution velocity.',
    finalists: [
      { name: 'SignalFoundry', city: 'Austin', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400&h=300' },
      { name: 'Northline AI', city: 'Dallas', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400&h=300' },
      { name: 'Patchgrid Labs', city: 'Houston', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400&h=300' },
      { name: 'OrbitLedger', city: 'Denver', image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=400&h=300' },
    ],
  },
  {
    title: 'Best Tech Manager',
    description: 'Leaders who scale teams, deliver outcomes, and invest deeply in mentorship.',
    finalists: [
      { name: 'Jordan Lee', company: 'Stack Harbor', city: 'Austin', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400' },
      { name: 'Maya Patel', company: 'Railcore', city: 'Chicago', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400' },
      { name: 'Carlos Bennett', company: 'Verity Cloud', city: 'Seattle', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400' },
      { name: 'Nina Ross', company: 'Kiteframe', city: 'Boston', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400' },
    ],
  },
  {
    title: 'Best Tech Work Culture',
    description: 'Organizations proving that great culture and strong product execution can co-exist.',
    finalists: [
      { name: 'HarborStack', city: 'Austin', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400&h=300' },
      { name: 'Lumenloop', city: 'Denver', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=400&h=300' },
      { name: 'Pinebyte', city: 'San Diego', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=400&h=300' },
      { name: 'MetricForge', city: 'Houston', image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=400&h=300' },
    ],
  },
];

export default function FinalistsPage() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950">
      <section className="border-b border-slate-100 bg-white px-6 py-20 text-center dark:border-slate-800 dark:bg-slate-900 md:px-12">
        <div className="mx-auto max-w-[1920px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-display text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-6xl"
          >
            2026 Tech Award Summit Finalists
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-xl text-slate-600 dark:text-slate-400"
          >
            Meet the builders and teams selected by our judging panel for the 2026 season.
          </motion.p>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-500 dark:text-slate-400">
            Demo data: finalist names and companies below are representative sample profiles.
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1920px] space-y-24 px-6 py-20 md:px-12">
        {categories.map((category) => (
          <section key={category.title}>
            <div className="mb-10 border-l-4 border-cyan-500 pl-6">
              <h2 className="mb-2 font-display text-3xl font-medium tracking-tight text-slate-900 dark:text-white md:text-4xl">{category.title}</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.finalists.map((finalist: Finalist, index) => (
                <motion.div
                  key={`${category.title}-${finalist.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={finalist.image}
                      alt={finalist.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="p-6">
                    <h3 className="mb-1 font-display text-xl font-bold text-slate-900 dark:text-white">{finalist.name}</h3>
                    {finalist.company && (
                      <div className="mb-2 flex items-center text-sm text-slate-500 dark:text-slate-400">
                        <Building2 className="mr-1 h-3.5 w-3.5" />
                        {finalist.company}
                      </div>
                    )}
                    <div className="mt-2 flex items-center text-sm font-medium text-cyan-600 dark:text-cyan-400">
                      <MapPin className="mr-1 h-3.5 w-3.5" />
                      {finalist.city}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
