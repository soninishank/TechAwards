import Link from 'next/link';
import { Calendar, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95 text-slate-300">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
            <span className="grid h-6 w-6 overflow-hidden md:h-7 md:w-7 place-items-center rounded-full border border-amber-300/50 bg-amber-300/10">
              <Image src="/logo.png" alt="National Technology Excellence Award Logo" width={28} height={28} className="h-full w-full object-cover" />
            </span>
            National Technology Excellence Award
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-slate-400">
            A national-level awards program spotlighting teams, builders, and leaders shaping the next wave of technology.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <h3 className="font-display text-base text-white">Explore</h3>
          <Link href="/awards" className="block hover:text-amber-200">Awards Program</Link>
          <Link href="/awards/how-it-works" className="block hover:text-amber-200">How It Works</Link>
          <Link href="/awards/finalists" className="block hover:text-amber-200">Finalists</Link>
          <Link href="/events" className="block hover:text-amber-200">Community Events</Link>
        </div>

        <div className="space-y-3 text-sm">
          <h3 className="font-display text-base text-white">Get Involved</h3>
          <Link href="/awards/finalists" className="inline-flex items-center gap-2 hover:text-amber-200 transition-colors" aria-label="View finalists from the 2019 awards archive">
            <Mail className="h-4 w-4" aria-hidden="true" /> View 2019 finalists
          </Link>
          <p className="flex items-center gap-2 text-slate-400">
            <Calendar className="h-4 w-4" /> September 15, 2019, 6:00 PM - 10:00 PM IST
          </p>
          <p className="flex items-start gap-2 text-slate-400">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            <span>Taj MG Road, 41/3, Mahatma Gandhi Rd, Bengaluru, Karnataka 560001</span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-500 md:px-10">
        <p>&copy; 2019 National Technology Excellence Award. All rights reserved.</p>
      </div>
    </footer>
  );
}
