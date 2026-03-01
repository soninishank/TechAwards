import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Events | National Technology Excellence Award 2019',
    description: 'Discover upcoming events, timelines, ceremonies, and key dates associated with the 2019 National Technology Excellence Awards.',
    openGraph: {
        title: 'Events | National Technology Excellence Award 2019',
        description: 'Discover upcoming events, timelines, ceremonies, and key dates associated with the 2019 National Technology Excellence Awards.',
        url: '/events',
    },
    alternates: {
        canonical: '/events',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
