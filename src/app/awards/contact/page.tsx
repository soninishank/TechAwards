'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useSearchParams } from 'next/navigation';

const locations = ['Austin', 'Dallas', 'Houston', 'Denver', 'Chicago', 'Seattle', 'Remote', 'Other'];

export default function ContactPage() {
  const searchParams = useSearchParams();
  const selectedCategory = searchParams.get('category');

  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950">
      <section className="border-b border-slate-100 bg-white px-6 py-20 text-center dark:border-slate-800 dark:bg-slate-900 md:px-12">
        <div className="mx-auto max-w-[1920px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 font-display text-4xl font-medium tracking-tight text-slate-900 dark:text-white md:text-6xl"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-xl text-slate-600 dark:text-slate-400"
          >
            Get in touch with the Tech Award Summit team.
          </motion.p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1920px] px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-24">
          <div className="space-y-8 lg:col-span-2">
            <div>
              <h2 className="mb-4 font-display text-3xl font-bold text-slate-900 dark:text-white">Get in Touch</h2>
              <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
                For general inquiries or questions about nominations, finalists, voting, or judging, fill the form below.
              </p>
              {selectedCategory && (
                <p className="mt-4 inline-flex rounded-full border border-cyan-300/60 bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700 dark:border-cyan-700 dark:bg-cyan-900/20 dark:text-cyan-300">
                  Selected category: {selectedCategory}
                </p>
              )}
            </div>

            <form className="space-y-6 rounded-xl border border-slate-200 bg-white p-8 text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input id="firstName" placeholder="Jane" className="bg-white text-slate-900 placeholder:text-slate-500 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input id="lastName" placeholder="Doe" className="bg-white text-slate-900 placeholder:text-slate-500 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="jane@company.com" className="bg-white text-slate-900 placeholder:text-slate-500 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400" required />
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Acme Labs" className="bg-white text-slate-900 placeholder:text-slate-500 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input id="jobTitle" placeholder="Product Manager" className="bg-white text-slate-900 placeholder:text-slate-500 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400" />
                </div>
              </div>

              <div className="space-y-4">
                <Label>Location(s) of Interest</Label>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {locations.map((loc) => (
                    <div key={loc} className="flex items-center space-x-2">
                      <Checkbox id={`loc-${loc}`} className="border-slate-400" />
                      <Label htmlFor={`loc-${loc}`} className="cursor-pointer font-normal text-slate-700 dark:text-slate-300">
                        {loc}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px] bg-white text-slate-900 placeholder:text-slate-500 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400" />
              </div>

              <Button type="submit" size="lg" className="w-full bg-cyan-600 text-white hover:bg-cyan-700 md:w-auto">
                Submit
              </Button>
            </form>
          </div>

          <aside className="space-y-8">
            <div className="rounded-xl border border-purple-100 bg-purple-50 p-8 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="mb-4 font-display text-xl font-bold text-slate-900 dark:text-white">Resources</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/awards/how-it-works" className="block font-medium text-purple-600 hover:underline dark:text-purple-400">
                    How it Works &rarr;
                  </Link>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Everything you need to know about the process.</span>
                </li>
                <li>
                  <Link href="/awards/faq" className="block font-medium text-purple-600 hover:underline dark:text-purple-400">
                    FAQ &rarr;
                  </Link>
                  <span className="text-sm text-slate-500 dark:text-slate-400">Answers to common questions.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-100 p-8 dark:border-slate-800 dark:bg-slate-900">
              <h3 className="mb-4 font-display text-xl font-bold text-slate-900 dark:text-white">Sponsorship</h3>
              <p className="mb-4 text-slate-600 dark:text-slate-400">Interested in sponsoring Tech Award Summit?</p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/awards/contact">Contact Sponsorship Team</Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
