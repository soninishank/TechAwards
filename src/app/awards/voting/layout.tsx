import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Voting Process | National Technology Excellence Award 2019',
    description: 'Understand the public and jury voting processes for the National Technology Excellence Awards 2019. See how winners are selected.',
    openGraph: {
        title: 'Voting Process | National Technology Excellence Award 2019',
        description: 'Understand the public and jury voting processes for the National Technology Excellence Awards 2019. See how winners are selected.',
        url: '/awards/voting',
    },
    alternates: {
        canonical: '/awards/voting',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
