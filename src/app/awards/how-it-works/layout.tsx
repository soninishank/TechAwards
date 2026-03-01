import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How It Works | National Technology Excellence Award 2019',
    description: 'Learn about the nomination, selection, and voting process for the National Technology Excellence Awards, showcasing our rigorous un-biased review mechanism.',
    openGraph: {
        title: 'How It Works | National Technology Excellence Award 2019',
        description: 'Learn about the nomination, selection, and voting process for the National Technology Excellence Awards, showcasing our rigorous un-biased review mechanism.',
        url: '/awards/how-it-works',
    },
    alternates: {
        canonical: '/awards/how-it-works',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
