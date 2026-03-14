import { AwardCategories } from '@/components/sections/AwardCategories';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Award Categories | National Technology Excellence Award',
  description: 'Explore all categories of the National Technology Excellence Award recognizing startups, innovators, and leaders.',
};

export default function AwardsPage() {
    return (
        <div className="min-h-screen w-full bg-slate-950 text-slate-100">
            <AwardCategories />
        </div>
    );
}
