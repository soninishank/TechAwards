'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useState, type FormEvent } from 'react';

const locations = ['Bengaluru', 'Mumbai', 'Delhi NCR', 'Hyderabad', 'Chennai', 'Pune', 'Remote', 'Other'];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;
  message: string;
  selectedLocations: string[];
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    message: '',
    selectedLocations: [],
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!formData.firstName.trim()) nextErrors.firstName = 'First name is required.';
    if (!formData.lastName.trim()) nextErrors.lastName = 'Last name is required.';
    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.';
    }
    if (formData.selectedLocations.length === 0) {
      nextErrors.selectedLocations = 'Select at least one location.';
    }
    if (!formData.message.trim()) {
      nextErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 15) {
      nextErrors.message = 'Message should be at least 15 characters.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(false);

    if (!validate()) return;

    setSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      jobTitle: '',
      message: '',
      selectedLocations: [],
    });
    setErrors({});
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleLocation = (location: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      selectedLocations: checked
        ? [...prev.selectedLocations, location]
        : prev.selectedLocations.filter((loc) => loc !== location),
    }));
  };

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
            Get in touch with the National Technology Excellence Award team.
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
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-6 rounded-xl border border-slate-200 bg-white p-8 text-slate-900 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
            >
              {submitted && (
                <p className="rounded-md border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">
                  Thanks, your message has been validated and is ready to be sent.
                </p>
              )}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    placeholder="Jane"
                    value={formData.firstName}
                    onChange={(event) => updateField('firstName', event.target.value)}
                    aria-invalid={!!errors.firstName}
                    className="bg-white text-slate-900 placeholder:text-slate-500 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400"
                  />
                  {errors.firstName && <p className="text-sm text-red-600 dark:text-red-400">{errors.firstName}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(event) => updateField('lastName', event.target.value)}
                    aria-invalid={!!errors.lastName}
                    className="bg-white text-slate-900 placeholder:text-slate-500 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400"
                  />
                  {errors.lastName && <p className="text-sm text-red-600 dark:text-red-400">{errors.lastName}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={(event) => updateField('email', event.target.value)}
                  aria-invalid={!!errors.email}
                  className="bg-white text-slate-900 placeholder:text-slate-500 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400"
                />
                {errors.email && <p className="text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input
                    id="company"
                    placeholder="Acme Labs"
                    value={formData.company}
                    onChange={(event) => updateField('company', event.target.value)}
                    className="bg-white text-slate-900 placeholder:text-slate-500 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <Input
                    id="jobTitle"
                    placeholder="Product Manager"
                    value={formData.jobTitle}
                    onChange={(event) => updateField('jobTitle', event.target.value)}
                    className="bg-white text-slate-900 placeholder:text-slate-500 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label>Location(s) of Interest</Label>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {locations.map((loc) => (
                    <div key={loc} className="flex items-center space-x-2">
                      <Checkbox
                        id={`loc-${loc}`}
                        checked={formData.selectedLocations.includes(loc)}
                        onCheckedChange={(checked) => toggleLocation(loc, checked === true)}
                        className="border-slate-400"
                      />
                      <Label htmlFor={`loc-${loc}`} className="cursor-pointer font-normal text-slate-700 dark:text-slate-300">
                        {loc}
                      </Label>
                    </div>
                  ))}
                </div>
                {errors.selectedLocations && <p className="text-sm text-red-600 dark:text-red-400">{errors.selectedLocations}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(event) => updateField('message', event.target.value)}
                  aria-invalid={!!errors.message}
                  className="min-h-[150px] bg-white text-slate-900 placeholder:text-slate-500 dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400"
                />
                {errors.message && <p className="text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
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
              <p className="mb-4 text-slate-600 dark:text-slate-400">Interested in sponsoring the National Technology Excellence Award?</p>
              <Button variant="outline" className="w-full" asChild>
                <Link href="mailto:sponsorship@nationaltechexcellence.in?subject=National%20Technology%20Excellence%20Award%202019%20Sponsorship%20Inquiry">
                  Contact Sponsorship Team
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
