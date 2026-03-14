import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '2019 Finalists | National Technology Excellence Award',
    description: 'Meet the individuals and teams selected as finalists for the 2019 Technology Excellence Award.',
    openGraph: {
        title: '2019 Finalists | National Technology Excellence Award',
        description: 'Meet the individuals and teams selected as finalists for the 2019 Technology Excellence Award.',
        url: '/awards/finalists',
    },
    alternates: {
        canonical: '/awards/finalists',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
