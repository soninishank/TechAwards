'use client';

import { motion } from 'framer-motion';
import { Building2, MapPin, Ticket, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Finalist = {
  name: string;
  city: string;
  image: string;
  imageClass?: string;
  company?: string;
  linkedin?: string;
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
        name: 'Zerodha',
        city: 'Bengaluru',
        image: '/zerodha.png',
        imageClass: 'object-contain bg-white p-8',
        linkedin: 'https://www.linkedin.com/company/zerodha/',
        note: 'Pioneered discount broking and scaled to millions of users without external funding.',
      },
      {
        name: 'CRED',
        city: 'Bengaluru',
        image: '/cred.png',
        imageClass: 'object-contain bg-black p-8',
        linkedin: 'https://www.linkedin.com/company/credapp/',
        note: 'Redefined fintech UX and scaled a high-trust community of creditworthy members.',
      },
      {
        name: 'Swiggy',
        city: 'Bengaluru',
        image: '/swiggy.png',
        imageClass: 'object-contain bg-white p-8',
        linkedin: 'https://www.linkedin.com/company/swiggy-in/',
        note: 'Built an unparalleled logistics fleet and transformed local commerce delivery.',
      },
      {
        name: 'Postman',
        city: 'Bengaluru',
        image: '/postman.png',
        imageClass: 'object-contain bg-white p-8',
        linkedin: 'https://www.linkedin.com/company/postman-platform/',
        note: 'Created the definitive API platform used by millions of developers globally.',
      },
    ],
  },
  {
    title: 'Best Tech Manager',
    description: 'Leaders who combined delivery quality with strong team development.',
    finalists: [
      {
        name: 'Vijay Anand',
        company: 'Walmart',
        city: 'Bengaluru',
        image: '/vijay.png',
        imageClass: 'object-cover object-[center_10%]',
        linkedin: 'https://www.linkedin.com/in/vijay-anand-017b832/',
        note: 'Drove massive retail tech transformations globally from the India development center.',
      },
      {
        name: 'Nipun Shah',
        company: 'Amazon',
        city: 'Bengaluru',
        image: '/nipun.png',
        imageClass: 'object-cover object-[center_10%]',
        linkedin: 'https://www.linkedin.com/in/nipuns/',
        note: 'Head of Engineering - raised engineering predictability and transformed the consumer experience structure.',
      },
      {
        name: 'Ayushi Garg',
        company: 'Flipkart',
        city: 'Bengaluru',
        image: '/ayushi.jpg',
        imageClass: 'object-cover object-[center_15%]',
        linkedin: 'https://www.linkedin.com/in/ayushi-garg-a65595b2/',
        note: 'Engineering Manager - led critical scaling initiatives and mentored high-performing engineering teams.',
      },
      {
        name: 'Pramod Prakash',
        company: 'InMobi',
        city: 'Bengaluru',
        image: '/pramod.png',
        imageClass: 'object-cover object-top',
        linkedin: 'https://www.linkedin.com/in/pramod-prakash-a0540423/',
        note: 'Head of Engineering - scaled deep tech platforms and mentored engineering talent globally.',
      },
    ],
  },
  {
    title: 'Best Tech Work Culture',
    description: 'Organizations proving people-first culture can drive stronger execution.',
    finalists: [
      {
        name: 'Zerodha',
        city: 'Bengaluru',
        image: '/zerodha.png',
        imageClass: 'object-contain bg-white p-8',
        linkedin: 'https://www.linkedin.com/company/zerodha/',
        note: 'Proved that a bootstrapped team can build world-class tech with a focus on long-term value over short-term hype.',
      },
      {
        name: 'CRED',
        city: 'Bengaluru',
        image: '/cred.png',
        imageClass: 'object-contain bg-black p-8',
        linkedin: 'https://www.linkedin.com/company/credapp/',
        note: 'Cultivated a high-trust, design-led engineering culture where ownership and speed are paramount.',
      },
      {
        name: 'Swiggy',
        city: 'Bengaluru',
        image: '/swiggy.png',
        imageClass: 'object-contain bg-white p-8',
        linkedin: 'https://www.linkedin.com/company/swiggy-in/',
        note: 'Fostered a culture of winning together while solving massive logistics challenges at peak scale.',
      },
      {
        name: 'Postman',
        city: 'Bengaluru',
        image: '/postman.png',
        imageClass: 'object-contain bg-white p-8',
        linkedin: 'https://www.linkedin.com/company/postman-platform/',
        note: 'Built a global developer-first culture by empowering engineers to solve complex problems with autonomy.',
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
                  <div className="relative h-56 w-full overflow-hidden border-b border-white/10">
                    <Image
                      src={finalist.image}
                      alt={finalist.name}
                      fill
                      className={`transition-transform duration-500 group-hover:scale-105 ${finalist.imageClass || 'object-cover'}`}
                    />
                  </div>

                  <div className="space-y-3 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-xl text-white">{finalist.name}</h3>
                      {finalist.linkedin && (
                        <Link
                          href={finalist.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-slate-800/80 p-1.5 text-cyan-400 ring-1 ring-white/20 shadow-lg shadow-black/20 transition-all hover:bg-cyan-500 hover:text-white hover:ring-cyan-400"
                        >
                          <Linkedin className="h-4 w-4" />
                        </Link>
                      )}
                    </div>
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
