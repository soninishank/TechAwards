'use client';

import { motion } from 'framer-motion';
import { Building2, MapPin, Sparkles, Ticket } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Finalist = {
  name: string;
  city: string;
  image: string;
  company?: string;
  note: string;
};

type Category = {
  title: string;
  description: string;
  finalists: Finalist[];
};

const categories: Category[] = [
  {
    title: 'Best Tech Startup',
    description: 'Early-stage teams with clear customer outcomes and strong product momentum.',
    finalists: [
      {
        name: 'SignalFoundry',
        city: 'Bengaluru',
        image:
          'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600&h=450',
        note: 'Built a production-grade AI workflow in under 8 months.',
      },
      {
        name: 'Northline AI',
        city: 'Mumbai',
        image:
          'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600&h=450',
        note: 'Scaled monthly active users consistently through 2019.',
      },
      {
        name: 'Patchgrid Labs',
        city: 'Hyderabad',
        image:
          'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600&h=450',
        note: 'Shipped enterprise pilots with repeatable deployment playbook.',
      },
      {
        name: 'OrbitLedger',
        city: 'Pune',
        image:
          'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600&h=450',
        note: 'Demonstrated high reliability under peak transaction periods.',
      },
    ],
  },
  {
    title: 'Best Tech Manager',
    description: 'Leaders who combined delivery quality with strong team development.',
    finalists: [
      {
        name: 'Jordan Lee',
        company: 'Stack Harbor',
        city: 'Bengaluru',
        image:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=450',
        note: 'Led cross-functional delivery during a high-growth quarter.',
      },
      {
        name: 'Maya Patel',
        company: 'Railcore',
        city: 'Delhi NCR',
        image:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600&h=450',
        note: 'Raised engineering predictability with clear execution standards.',
      },
      {
        name: 'Carlos Bennett',
        company: 'Verity Cloud',
        city: 'Chennai',
        image:
          'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=450',
        note: 'Built a mentorship ladder that improved internal promotion rates.',
      },
      {
        name: 'Nina Ross',
        company: 'Kiteframe',
        city: 'Pune',
        image:
          'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600&h=450',
        note: 'Improved planning quality across product and engineering teams.',
      },
    ],
  },
  {
    title: 'Best Tech Work Culture',
    description: 'Organizations proving people-first culture can drive stronger execution.',
    finalists: [
      {
        name: 'HarborStack',
        city: 'Bengaluru',
        image:
          'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600&h=450',
        note: 'Maintained high retention through transparent team rituals.',
      },
      {
        name: 'Lumenloop',
        city: 'Hyderabad',
        image:
          'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=600&h=450',
        note: 'Scaled hiring while preserving onboarding quality and trust.',
      },
      {
        name: 'Pinebyte',
        city: 'Mumbai',
        image:
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=450',
        note: 'Created measurable growth plans for engineers at all levels.',
      },
      {
        name: 'MetricForge',
        city: 'Chennai',
        image:
          'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=600&h=450',
        note: 'Established inclusive team practices tied to delivery outcomes.',
      },
    ],
  },
];

export default function FinalistsPage() {
  return (
    <div className="w-full bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10 px-6 py-20 md:px-12 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.22),transparent_38%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.2),transparent_35%)]" />
        <div className="relative mx-auto grid w-full max-w-[1240px] gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
              2019 Awards Archive
            </p>
            <h1 className="font-display text-4xl leading-[1.04] text-white md:text-6xl">
              2019 National Technology Excellence Award Finalists
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              Finalist slate from the awards function held on September 15, 2019 at Taj MG Road, Bengaluru.
            </p>
            <p className="mt-3 text-sm text-slate-400">
              Demo data: finalist names and companies below are representative sample profiles.
            </p>
          </div>

          <div className="grid gap-3 rounded-2xl border border-white/10 bg-slate-900/75 p-5">
            <div className="rounded-xl border border-white/10 bg-slate-950/70 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Finalist Summary</p>
              <p className="mt-1 text-3xl font-semibold text-white">12</p>
              <p className="text-xs text-slate-400">profiles across 3 core categories</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3">
                <p className="text-slate-300">Venue</p>
                <p className="mt-1 font-medium text-white">Taj MG Road</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-slate-950/50 p-3">
                <p className="text-slate-300">City</p>
                <p className="mt-1 font-medium text-white">Bengaluru</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1240px] space-y-14 px-6 py-14 md:px-10 md:py-18">
        {categories.map((category, catIndex) => (
          <section key={category.title}>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.14em] text-cyan-200">Category {String(catIndex + 1).padStart(2, '0')}</p>
                <h2 className="font-display text-3xl text-white md:text-4xl">{category.title}</h2>
              </div>
              <p className="max-w-xl text-sm text-slate-300 md:text-base">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              {category.finalists.map((finalist, index) => (
                <motion.article
                  key={`${category.title}-${finalist.name}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: index * 0.06 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-slate-900/65"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={finalist.image}
                      alt={finalist.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent" />
                    <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full border border-white/25 bg-slate-950/60 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-200">
                      <Sparkles className="h-3 w-3" /> Finalist
                    </span>
                  </div>

                  <div className="space-y-3 p-4">
                    <h3 className="font-display text-xl text-white">{finalist.name}</h3>
                    {finalist.company && (
                      <p className="flex items-center gap-2 text-sm text-slate-300">
                        <Building2 className="h-4 w-4 text-cyan-300" /> {finalist.company}
                      </p>
                    )}
                    <p className="flex items-center gap-2 text-sm text-slate-300">
                      <MapPin className="h-4 w-4 text-amber-200" /> {finalist.city}
                    </p>
                    <p className="rounded-lg border border-white/10 bg-slate-950/50 p-3 text-xs leading-relaxed text-slate-300">
                      {finalist.note}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-white/10 px-6 py-12 md:px-10">
        <div className="mx-auto flex w-full max-w-[1240px] flex-wrap items-center justify-between gap-4 rounded-2xl border border-cyan-300/20 bg-cyan-400/5 p-5">
          <p className="flex items-center gap-2 text-sm text-slate-200">
            <Ticket className="h-4 w-4 text-cyan-300" /> Looking for scoring details? See the selection criteria and judging framework.
          </p>
          <Link href="/awards/selection-criteria" className="rounded-full border border-cyan-300/45 px-4 py-2 text-sm font-medium text-cyan-200 hover:bg-cyan-300/10">
            View Criteria
          </Link>
        </div>
      </section>
    </div>
  );
}
