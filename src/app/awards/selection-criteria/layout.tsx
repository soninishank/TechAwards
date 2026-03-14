import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Selection Criteria | National Technology Excellence Award',
    description: 'Learn about the metrics and criteria judges use to evaluate participants.',
    openGraph: {
        title: 'Selection Criteria | National Technology Excellence Award',
        description: 'Learn about the metrics and criteria judges use to evaluate participants.',
        url: '/awards/selection-criteria',
    },
    alternates: {
        canonical: '/awards/selection-criteria',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
