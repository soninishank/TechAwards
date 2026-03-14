import { Metadata } from 'next';

export const metadata: Metadata = {
    title: '2019 Winners | National Technology Excellence Award',
    description: 'Discover the winners across all categories of the 2019 National Technology Excellence Award.',
    openGraph: {
        title: '2019 Winners | National Technology Excellence Award',
        description: 'Discover the winners across all categories of the 2019 National Technology Excellence Award.',
        url: '/awards/winners',
    },
    alternates: {
        canonical: '/awards/winners',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
