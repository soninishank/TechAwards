import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Winners | National Technology Excellence Award 2019',
    description: 'Explore the outstanding winners of the 2019 National Technology Excellence Awards across all technology, startup, and enterprise categories.',
    openGraph: {
        title: 'Winners | National Technology Excellence Award 2019',
        description: 'Explore the outstanding winners of the 2019 National Technology Excellence Awards across all technology, startup, and enterprise categories.',
        url: '/awards/winners',
    },
    alternates: {
        canonical: '/awards/winners',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
