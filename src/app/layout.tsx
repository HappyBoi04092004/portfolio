import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import LenisProvider from '@/components/ui/lenis-provider';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const display = Plus_Jakarta_Sans({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Hanh Phuc Nguyen | Backend & Flutter Developer',
  description:
    'Portfolio của Hanh Phuc Nguyen — Backend, Flutter và kiến trúc cloud. Dự án, kinh nghiệm và liên hệ.',
  keywords: [
    'Hanh Phuc Nguyen',
    'Backend Developer',
    'Flutter Developer',
    'Software Engineer',
    'Vietnam Developer',
  ],
  authors: [{ name: 'Hanh Phuc Nguyen' }],
  openGraph: {
    title: 'Hanh Phuc Nguyen | Portfolio',
    description: 'Backend, Flutter và hệ thống cloud — portfolio cá nhân.',
    type: 'website',
    url: 'https://hanhphuc.dev',
    siteName: 'Hanh Phuc Nguyen',
    locale: 'vi_VN',
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
    <html lang="vi" className={`${inter.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col selection:bg-indigo-500/30 selection:text-white">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
