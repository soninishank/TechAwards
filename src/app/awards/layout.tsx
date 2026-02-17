import { AwardsSubNav } from '@/components/awards/AwardsSubNav';

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
