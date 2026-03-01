import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | National Technology Excellence Award 2019',
    description: 'Contact the organizers of the National Technology Excellence Award for any inquiries about the 2019 event, judging process, or sponsorships.',
    openGraph: {
        title: 'Contact | National Technology Excellence Award 2019',
        description: 'Contact the organizers of the National Technology Excellence Award for any inquiries about the 2019 event, judging process, or sponsorships.',
        url: '/awards/contact',
    },
    alternates: {
        canonical: '/awards/contact',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
