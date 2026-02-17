'use client';

import { motion } from 'framer-motion';
import { Linkedin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const judges = [
  {
    name: 'Arylee McSweaney',
    title: 'Director of Engineering',
    company: 'Etsy',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Dr. Anita Jindal',
    title: 'Senior Director of Engineering',
    company: 'VMware',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Ziyun Liang',
    title: 'Senior Product Designer',
    company: 'The New York Times',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Tanvi S Hungund',
    title: 'Senior Manager',
    company: 'AWS',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Rohan Gupta',
    title: 'VP of Engineering',
    company: 'Flipkart',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Sarah Chen',
    title: 'Head of Product',
    company: 'Zomato',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Michael Chang',
    title: 'Chief Technology Officer',
    company: 'Razorpay',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400',
  },
  {
    name: 'Priya Sharma',
    title: 'Director of AI',
    company: 'Ola Electric',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400&h=400',
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
            An esteemed panel of industry leaders, technologists, and innovators selecting the best of the best.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1920px] grid-cols-1 gap-x-8 gap-y-12 px-6 py-20 md:px-12 sm:grid-cols-2 lg:grid-cols-4">
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
              <Image src={judge.image} alt={judge.name} fill className="object-cover" />
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
              Read Bio <ChevronRight className="ml-0.5 h-4 w-4" />
            </Link>
          </motion.div>
        ))}
      </section>

      <section className="w-full bg-slate-100 py-20 dark:bg-slate-900">
        <div className="mx-auto w-full max-w-[1920px] px-6 text-center md:px-12">
          <h2 className="mb-6 font-display text-3xl font-medium tracking-tight text-slate-900 dark:text-white md:text-4xl">
            Interested in Judging?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Share your expertise and help recognize the next generation of tech talent.
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
