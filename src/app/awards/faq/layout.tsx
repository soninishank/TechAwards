import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'FAQ | National Technology Excellence Award 2019',
    description: 'Frequently Asked Questions about the National Technology Excellence Award 2019. Find answers about nominations, judging, and the award ceremony.',
    openGraph: {
        title: 'FAQ | National Technology Excellence Award 2019',
        description: 'Frequently Asked Questions about the National Technology Excellence Award 2019. Find answers about nominations, judging, and the award ceremony.',
        url: '/awards/faq',
    },
    alternates: {
        canonical: '/awards/faq',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
