import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nominate a Builder | National Technology Excellence Award',
    description: 'Submit a nomination for an outstanding tech leader, startup, or product.',
    openGraph: {
        title: 'Nominate a Builder | National Technology Excellence Award',
        description: 'Submit a nomination for an outstanding tech leader, startup, or product.',
        url: '/awards/nominate',
    },
    alternates: {
        canonical: '/awards/nominate',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
