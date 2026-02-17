import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Briefcase, ArrowRight } from 'lucide-react';

export default function CareersPage() {
  return (
    <div className="w-full py-16 md:py-24">
      <div className="mx-auto flex max-w-2xl flex-col items-center rounded-2xl border border-white/10 bg-slate-900/60 p-12 text-center">
        <div className="mb-6 rounded-full bg-primary/10 p-4 text-primary">
          <Briefcase className="h-10 w-10" />
        </div>
        <h1 className="mb-4 text-4xl font-bold">Job Board Coming Soon</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          We are building a curated board for engineering, product, and design roles from our community partners.
        </p>
        <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/">
              Return Home
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/awards/contact">
              Notify Me When Live <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Are you a recruiter?{' '}
          <Link href="/awards/contact" className="text-primary underline hover:text-primary/80">
            Partner with us
          </Link>
        </p>
      </div>
    </div>
  );
}
