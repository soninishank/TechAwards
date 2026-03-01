import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About | National Technology Excellence Award 2019',
    description: 'Learn about the mission, vision, and legacy of the National Technology Excellence Awards, recognizing outstanding achievements in tech since 2019.',
    openGraph: {
        title: 'About | National Technology Excellence Award 2019',
        description: 'Learn about the mission, vision, and legacy of the National Technology Excellence Awards, recognizing outstanding achievements in tech since 2019.',
        url: '/about',
    },
    alternates: {
        canonical: '/about',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
