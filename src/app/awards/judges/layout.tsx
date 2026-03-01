import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Judges | National Technology Excellence Award 2019',
    description: 'Meet our esteemed panel of product, design, and engineering leaders who are selecting the winners for the National Technology Excellence Award using transparent criteria.',
    openGraph: {
        title: 'Judges | National Technology Excellence Award 2019',
        description: 'Meet our esteemed panel of product, design, and engineering leaders who are selecting the winners for the National Technology Excellence Award using transparent criteria.',
        url: '/awards/judges',
    },
    alternates: {
        canonical: '/awards/judges',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
