import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Public Voting | National Technology Excellence Award',
    description: 'Participate in the community voting phase to select the people\'s choice winners.',
    openGraph: {
        title: 'Public Voting | National Technology Excellence Award',
        description: 'Participate in the community voting phase to select the people\'s choice winners.',
        url: '/awards/voting',
    },
    alternates: {
        canonical: '/awards/voting',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
