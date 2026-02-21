'use client';

import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const judges = [
  {
    name: 'Amit Kumar Sharma',
    title: 'Senior Manager',
    company: 'Amazon',
    linkedin: 'https://www.linkedin.com/in/amitkumar5268857/',
    image: '/amit.png',
  },
  {
    name: 'Sundar S Sankaran',
    title: 'Director of Engineering',
    company: '[24]7.ai',
    linkedin: 'https://www.linkedin.com/in/sundarssankaran/',
    image: '/sundar.jpg',
  },
  {
    name: 'Pranav Tiwari',
    title: 'VP Engineering',
    company: 'Ola',
    linkedin: 'https://www.linkedin.com/in/pranav-tiwari-3204085/',
    image: '/pranav.png',
  },
  {
    name: 'Varsha Mahadevan',
    title: 'Associate VP',
    company: 'BankBazaar',
    linkedin: 'https://www.linkedin.com/in/varsha-mahadevan-425969111/',
    image: '/varsha.png',
    imageClass: 'brightness-110 contrast-[1.05]',
  },
  {
    name: 'Saketh Sabbineni',
    title: 'Senior Program Manager',
    company: 'Microsoft',
    linkedin: 'https://www.linkedin.com/in/sakeths/',
    image: '/saketh.png',
  },
  {
    name: 'Ankit Chaudhary',
    title: 'Group Product Manager',
    company: 'Microsoft',
    linkedin: 'https://www.linkedin.com/in/ankch/',
    image: '/ankit.jpg',
  },
  {
    name: 'Anshumani Ruddra',
    title: 'VP of Product',
    company: 'Hotstar',
    linkedin: 'https://www.linkedin.com/in/anshumani/',
    image: '/anshumani.jpg',
  },
  {
    name: 'Siddhartha Roy',
    title: 'Director of Product',
    company: 'JioSaavn',
    linkedin: 'https://www.linkedin.com/in/sidroy-1989/',
    image: '/siddhartha.png',
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

        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[1920px] flex-wrap justify-center gap-x-8 gap-y-12 px-6 py-20 md:px-12">
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
              <Image src={judge.image} alt={judge.name} fill className={`object-cover ${('position' in judge && judge.position) ? judge.position : ''}`} />
            </div>

            <h3 className="mb-1 font-display text-xl font-bold text-slate-900 dark:text-white">{judge.name}</h3>
            <div className="mb-4 flex min-h-[3rem] w-full flex-col items-center justify-start px-2 text-center text-sm font-medium leading-snug text-slate-500 dark:text-slate-400">
              <span className="block">{judge.title}</span>
              <span className="mt-1 block font-semibold text-slate-700 dark:text-slate-300">{judge.company}</span>
            </div>

            <Link
              href={('linkedin' in judge && typeof judge.linkedin === 'string') ? judge.linkedin : "https://www.linkedin.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 rounded p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-[#0077b5] dark:hover:bg-slate-800"
            >
              <Linkedin className="h-5 w-5" />
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
              <Link href="mailto:judging@nationaltechexcellence.in?subject=Judge%20Application%202019">Contact for Judging</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
