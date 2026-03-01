import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Careers | National Technology Excellence Award 2019',
    description: 'Join the dynamic team behind the National Technology Excellence Awards. Explore career opportunities, open roles, and our workplace culture.',
    openGraph: {
        title: 'Careers | National Technology Excellence Award 2019',
        description: 'Join the dynamic team behind the National Technology Excellence Awards. Explore career opportunities, open roles, and our workplace culture.',
        url: '/careers',
    },
    alternates: {
        canonical: '/careers',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
