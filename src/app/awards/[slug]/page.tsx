import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { getAwardCategoryBySlug } from '@/data/awardCategories';

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function AwardCategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getAwardCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="px-6 py-16 md:px-10 md:py-20">
      <div className="mx-auto w-full max-w-[980px] rounded-3xl border border-white/10 bg-slate-900/70 p-6 md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-200">Award Category</p>
        <h1 className="mt-2 font-display text-3xl text-white md:text-5xl">{category.title}</h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">{category.description}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
            <h2 className="text-lg font-semibold text-white">Who should apply</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{category.whoShouldApply}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
            <h2 className="text-lg font-semibold text-white">Timeline</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">{category.timeline}</p>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
          <h2 className="text-lg font-semibold text-white">Judging criteria</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
            {category.judgingCriteria.map((criterion) => (
              <li key={criterion}>{criterion}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild className="bg-amber-300 text-slate-900 hover:bg-amber-200">
            <Link href={`/awards/contact?category=${category.slug}`}>Nominate for this category</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/awards/how-it-works">Review process</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
