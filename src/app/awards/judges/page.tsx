'use client';

import { motion } from 'framer-motion';
import { Linkedin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const judges = [
  {
    name: 'Kunal Shah',
    title: 'Founder',
    company: 'CRED',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Neha Narkhede',
    title: 'Co-creator',
    company: 'Confluent',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Nithin Kamath',
    title: 'Founder & CEO',
    company: 'Zerodha',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Padmasree Warrior',
    title: 'Former CTO',
    company: 'Cisco',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Vijay Shekhar Sharma',
    title: 'Founder & CEO',
    company: 'Paytm',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Gaurang Munjhe',
    title: 'Engineering Leader',
    company: 'Swiggy',
    image: '/gaurang.png',
    position: 'object-[center_20%]',
  },
  {
    name: 'Sneha Desai',
    title: 'VP Engineering',
    company: 'Postman',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Kailash Nadh',
    title: 'CTO',
    company: 'Zerodha',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400',
  },
];

export default function JudgesPage() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-950">
      <section className="border-b border-slate-100 bg-white px-6 py-20 text-center dark:border-slate-800 dark:bg-slate-900 md:px-12">
        <div className="mx-auto max-w-[1920px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-display text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-6xl"
          >
            Meet Our Judges
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-xl text-slate-600 dark:text-slate-400"
          >
            A panel of product, design, and engineering leaders selecting winners using transparent criteria.
          </motion.p>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-slate-500 dark:text-slate-400">
            Demo data: judge profiles on this page are illustrative placeholders.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1920px] grid-cols-1 gap-x-8 gap-y-12 px-6 py-20 sm:grid-cols-2 md:px-12 lg:grid-cols-4">
        {judges.map((judge, index) => (
          <motion.div
            key={judge.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group flex flex-col items-center text-center"
          >
            <div className="relative mb-6 h-48 w-48 overflow-hidden rounded-full ring-4 ring-slate-100 transition-all duration-300 group-hover:ring-cyan-400 dark:ring-slate-800 dark:group-hover:ring-cyan-500">
              <Image src={judge.image} alt={judge.name} fill className={`object-cover ${judge.position || ''}`} />
            </div>

            <h3 className="mb-1 font-display text-xl font-bold text-slate-900 dark:text-white">{judge.name}</h3>
            <div className="mb-4 flex min-h-[3rem] w-full flex-col items-center justify-start px-2 text-center text-sm font-medium leading-snug text-slate-500 dark:text-slate-400">
              <span className="block">{judge.title}</span>
              <span className="mt-1 block font-semibold text-slate-700 dark:text-slate-300">@ {judge.company}</span>
            </div>

            <Link
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 rounded p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-[#0077b5] dark:hover:bg-slate-800"
            >
              <Linkedin className="h-5 w-5" />
            </Link>

            <Link href="/awards/how-it-works" className="inline-flex items-center text-sm font-semibold text-cyan-600 hover:underline dark:text-cyan-400">
              Read Criteria <ChevronRight className="ml-0.5 h-4 w-4" />
            </Link>
          </motion.div>
        ))}
      </section>

      <section className="w-full bg-slate-100 py-20 dark:bg-slate-900">
        <div className="mx-auto w-full max-w-[1920px] px-6 text-center md:px-12">
          <h2 className="mb-6 font-display text-3xl font-medium tracking-tight text-slate-900 dark:text-white md:text-4xl">Interested in Judging?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Share your expertise and help us recognize teams doing outstanding work.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700" asChild>
              <Link href="/awards/contact">Apply to Judge</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
