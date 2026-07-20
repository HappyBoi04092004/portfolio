import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/components/ui/lenis-provider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hanh Phuc Nguyen | Backend & Flutter Architect',
  description: 'Enter a futuristic digital workspace. High-performance backend engineering, clean microservices, cloud systems, and premium cross-platform Flutter experiences.',
  keywords: ['Hanh Phuc Nguyen', 'Backend Developer', 'Flutter Developer', 'Software Engineer', 'Next.js Portfolio', 'ThreeJS Portfolio', 'Vietnam Developer'],
  authors: [{ name: 'Hanh Phuc Nguyen' }],
  openGraph: {
    title: 'Hanh Phuc Nguyen | Backend & Flutter Developer Portfolio',
    description: 'Explore the award-winning interactive 3D portfolio workspace of Hanh Phuc Nguyen, Software Engineer.',
    type: 'website',
    url: 'https://hanhphuc.dev',
    siteName: 'Hanh Phuc Nguyen Workspace',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col selection:bg-indigo-500/35 selection:text-white">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
