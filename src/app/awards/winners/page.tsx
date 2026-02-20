'use client';

import { motion } from 'framer-motion';
import { MapPin, Trophy, Star } from 'lucide-react';
import Image from 'next/image';

const winners = [
  {
    category: 'Best Tech Startup',
    awards: [
      {
        type: "Judges' Choice",
        name: 'Zerodha',
        tagline: 'Bootstrapped trading platform scaling independently',
        city: 'Bengaluru',
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=400',
      },
      {
        type: 'Community Choice',
        name: 'Postman',
        tagline: 'Global standard for API collaboration',
        city: 'Bengaluru',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600&h=400',
      },
    ],
  },
  {
    category: 'Best Tech Manager',
    awards: [
      {
        type: "Judges' Choice",
        name: 'Gaurang Munjhe',
        tagline: 'Engineering Leader driving scalable system architectures',
        city: 'Bengaluru',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=600&h=400',
      },
      {
        type: 'Community Choice',
        name: 'Sneha Desai',
        tagline: 'VP Engineering redefining agile delivery culture',
        city: 'Mumbai',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=400',
      },
    ],
  },
  {
    category: 'Best Tech Work Culture',
    awards: [
      {
        type: "Judges' Choice",
        name: 'CRED',
        tagline: 'High-trust, design-first engineering culture',
        city: 'Bengaluru',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600&h=400',
      },
      {
        type: 'Community Choice',
        name: 'Swiggy',
        tagline: 'Solving massive scale logistics with strong engineering principles',
        city: 'Bengaluru',
        image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600&h=400',
      },
    ],
  },
];

export default function WinnersPage() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <section className="relative overflow-hidden px-6 py-24 text-center md:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/35 via-slate-950 to-cyan-900/40" />
        <div className="relative z-10 mx-auto max-w-[1920px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block rounded-full border border-slate-700 bg-slate-800/50 p-2 backdrop-blur"
          >
            <span className="rounded-full bg-gradient-to-r from-amber-300 to-yellow-500 px-3 py-1 text-xs font-bold tracking-wider text-slate-900">
              2019 HALL OF WINNERS
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text font-display text-5xl font-bold tracking-tight text-transparent md:text-7xl"
          >
            2019 Winners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-2xl text-xl text-slate-300"
          >
            Teams and leaders recognized for outstanding delivery, leadership, and community impact at Taj MG Road, Bengaluru.
          </motion.p>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400">
            Demo data: winners shown here are sample entries for layout preview.
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1920px] space-y-28 px-6 pb-28 pt-10 md:px-12">
        {winners.map((category) => (
          <section key={category.category}>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-14 text-center font-display text-4xl font-bold tracking-tight text-white md:text-5xl"
            >
              {category.category}
            </motion.h2>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              {category.awards.map((award, index) => (
                <motion.div
                  key={`${category.category}-${award.name}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-colors hover:border-slate-700"
                >
                  <div className="relative h-64 w-full">
                    <Image src={award.image} alt={award.name} fill className="object-cover" />
                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
                  </div>

                  <div className="relative bg-slate-900 p-8 text-center">
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                      <span
                        className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-lg ${award.type === "Judges' Choice"
                            ? 'border-cyan-900 bg-slate-950 text-cyan-400'
                            : 'border-purple-900 bg-slate-950 text-purple-400'
                          }`}
                      >
                        {award.type === "Judges' Choice" ? (
                          <Trophy className="-mt-0.5 mr-1 inline h-3 w-3" />
                        ) : (
                          <Star className="-mt-0.5 mr-1 inline h-3 w-3" />
                        )}
                        {award.type}
                      </span>
                    </div>

                    <h3 className="mb-2 mt-4 font-display text-3xl font-bold text-white">{award.name}</h3>
                    <p className="mb-6 text-sm font-medium uppercase tracking-wide text-slate-400">{award.tagline}</p>

                    <div className="flex items-center justify-center text-xs font-bold uppercase tracking-widest text-slate-500">
                      <MapPin className="mr-1 h-3 w-3" />
                      {award.city}
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
