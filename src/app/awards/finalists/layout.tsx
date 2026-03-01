import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Finalists | National Technology Excellence Award 2019',
    description: 'View the distinguished finalists for the 2019 National Technology Excellence Awards across all technology, product, and enterprise categories.',
    openGraph: {
        title: 'Finalists | National Technology Excellence Award 2019',
        description: 'View the distinguished finalists for the 2019 National Technology Excellence Awards across all technology, product, and enterprise categories.',
        url: '/awards/finalists',
    },
    alternates: {
        canonical: '/awards/finalists',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
