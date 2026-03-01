import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Nominate | National Technology Excellence Award 2019',
    description: 'Nominate your company, team, or product for the 2019 National Technology Excellence Awards. Review categories and submission guidelines.',
    openGraph: {
        title: 'Nominate | National Technology Excellence Award 2019',
        description: 'Nominate your company, team, or product for the 2019 National Technology Excellence Awards. Review categories and submission guidelines.',
        url: '/awards/nominate',
    },
    alternates: {
        canonical: '/awards/nominate',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
