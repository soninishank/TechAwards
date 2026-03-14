import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Support | National Technology Excellence Award',
    description: 'Get in touch with us for sponsorships, media inquiries, or support.',
    openGraph: {
        title: 'Contact Support | National Technology Excellence Award',
        description: 'Get in touch with us for sponsorships, media inquiries, or support.',
        url: '/awards/contact',
    },
    alternates: {
        canonical: '/awards/contact',
    },
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
