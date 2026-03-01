import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Selection Criteria | National Technology Excellence Award 2019',
    description: 'Discover the rigorous selection criteria and evaluation metrics used by our expert panel to score and discover the top technology innovators.',
    openGraph: {
        title: 'Selection Criteria | National Technology Excellence Award 2019',
        description: 'Discover the rigorous selection criteria and evaluation metrics used by our expert panel to score and discover the top technology innovators.',
        url: '/awards/selection-criteria',
    },
    alternates: {
        canonical: '/awards/selection-criteria',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
