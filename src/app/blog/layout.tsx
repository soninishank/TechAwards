import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog | National Technology Excellence Award 2019',
    description: 'Read the latest news, updates, winner interviews, and insights from the National Technology Excellence Awards 2019.',
    openGraph: {
        title: 'Blog | National Technology Excellence Award 2019',
        description: 'Read the latest news, updates, winner interviews, and insights from the National Technology Excellence Awards 2019.',
        url: '/blog',
    },
    alternates: {
        canonical: '/blog',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
