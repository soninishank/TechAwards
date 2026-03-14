import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Judges & Jury | National Technology Excellence Award',
    description: 'Meet the esteemed panel of judges evaluating the nominations for the National Technology Excellence Award.',
    openGraph: {
        title: 'Judges & Jury | National Technology Excellence Award',
        description: 'Meet the esteemed panel of judges evaluating the nominations for the National Technology Excellence Award.',
        url: '/awards/judges',
    },
    alternates: {
        canonical: '/awards/judges',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
