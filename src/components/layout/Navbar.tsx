'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu, X, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/events', label: 'Events' },
  { href: '/awards', label: 'Awards' },
  { href: '/awards/finalists', label: 'Finalists' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 w-full max-w-[1240px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-white">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-amber-300/50 bg-amber-300/10 text-amber-200">
            <Trophy className="h-4 w-4" />
          </span>
          Tech Award Summit
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-200 transition-colors hover:text-amber-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button asChild variant="outline" className="border-amber-300/60 bg-transparent text-amber-100 hover:bg-amber-200/10">
            <Link href="/awards/contact">Nominate</Link>
          </Button>
          <Button asChild className="bg-amber-300 text-slate-900 hover:bg-amber-200">
            <Link href="/events">Join Event</Link>
          </Button>
        </div>

        <button
          className="inline-flex rounded-md p-2 text-slate-100 md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-200"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 bg-amber-300 text-slate-900 hover:bg-amber-200">
              <Link href="/awards/contact" onClick={() => setIsOpen(false)}>
                Nominate a Company
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
