import Link from 'next/link';
import { Trophy, Calendar, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95 text-slate-300">
      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-display text-lg font-semibold text-white">
            <Trophy className="h-5 w-5 text-amber-200" />
            Tech Award Summit
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-slate-400">
            A community-led awards program spotlighting teams, builders, and leaders shaping the next wave of technology.
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
          <Link href="/awards/contact" className="inline-flex items-center gap-2 hover:text-amber-200">
            <Mail className="h-4 w-4" /> Submit a nomination
          </Link>
          <p className="flex items-center gap-2 text-slate-400">
            <Calendar className="h-4 w-4" /> Awards Night: September 18, 2026
          </p>
          <p className="flex items-center gap-2 text-slate-400">
            <MapPin className="h-4 w-4" /> Austin, Texas + livestream
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-slate-500 md:px-10">
        <p>&copy; {new Date().getFullYear()} Tech Award Summit. All rights reserved.</p>
      </div>
    </footer>
  );
}
