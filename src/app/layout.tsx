import type { Metadata } from 'next';
import { Inter, Archivo } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://nationaltechexcellence.in'),
  title: 'National Technology Excellence Award 2019 Archive',
  description:
    'Official archive of the 2019 National Technology Excellence Award with finalists, judges, winners, and event timeline.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'National Technology Excellence Award 2019 Archive',
    description:
      'Official archive of the 2019 National Technology Excellence Award with finalists, judges, winners, and event timeline.',
    url: '/',
    siteName: 'National Technology Excellence Award',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'National Technology Excellence Award 2019 Archive',
    description:
      'Official archive of the 2019 National Technology Excellence Award with finalists, judges, winners, and event timeline.',
  },
  icons: {
    icon: '/globe.svg',
    shortcut: '/globe.svg',
    apple: '/globe.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${archivo.variable} font-sans min-h-screen flex flex-col bg-slate-950 text-slate-100`}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
