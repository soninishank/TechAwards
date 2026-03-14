import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Frequently Asked Questions | National Technology Excellence Award',
    description: 'Find answers to common questions about judging, nominations, and the award process.',
    openGraph: {
        title: 'Frequently Asked Questions | National Technology Excellence Award',
        description: 'Find answers to common questions about judging, nominations, and the award process.',
        url: '/awards/faq',
    },
    alternates: {
        canonical: '/awards/faq',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
