
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Trophy } from 'lucide-react';

export default function NominatePage() {
  return (
    <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950">
      <section className="relative overflow-hidden bg-slate-900 py-20 text-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 to-amber-900 opacity-90" />
        <div className="relative z-10 mx-auto max-w-[1920px]">
          <h1 className="mb-6 font-display text-4xl font-medium tracking-tight md:text-6xl">
            Nominations Closed
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-slate-200">
            The nomination period for the 2019 National Technology Excellence Award has concluded.
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-3xl px-6 py-20 text-center md:px-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-10 shadow-sm dark:border-slate-800 dark:bg-slate-900/60 dark:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]">
          <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-slate-700 bg-slate-800 shadow-inner">
            <Trophy className="h-8 w-8 text-amber-400" />
          </div>
          <h2 className="mb-4 font-display text-2xl font-bold text-slate-900 dark:text-white">Thank You To All Participants</h2>
          <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            We received an incredible response this year. The judging panel has reviewed all submissions, and the finalists have been announced. Thank you to everyone who submitted a nomination and helped us recognize outstanding technology leadership.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-cyan-600 text-white hover:bg-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300 dark:border dark:border-cyan-500/50 dark:hover:bg-cyan-500/30">
              <Link href="/awards/finalists">View the Finalists</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-slate-300 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
              <Link href="/awards/winners">See Previous Winners</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
