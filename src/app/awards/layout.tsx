import { Metadata } from 'next';
import { AwardsSubNav } from '@/components/awards/AwardsSubNav';

export const metadata: Metadata = {
    title: 'Awards | National Technology Excellence Award 2019',
    description: 'Explore the 2019 National Technology Excellence Awards. View finalists, winners, and learn more about our rigorous selection process and distinguished judges.',
    openGraph: {
        title: 'Awards | National Technology Excellence Award 2019',
        description: 'Explore the 2019 National Technology Excellence Awards. View finalists, winners, and learn more about our rigorous selection process and distinguished judges.',
        url: '/awards',
    },
    alternates: {
        canonical: '/awards',
    },
};

export default function AwardsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <AwardsSubNav />
            {children}
        </div>
    );
}
