import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How It Works | National Technology Excellence Award',
    description: 'Understand the complete timeline, application, and selection process for the awards.',
    openGraph: {
        title: 'How It Works | National Technology Excellence Award',
        description: 'Understand the complete timeline, application, and selection process for the awards.',
        url: '/awards/how-it-works',
    },
    alternates: {
        canonical: '/awards/how-it-works',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
