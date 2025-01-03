import type { Metadata } from 'next';
import { Geist, Geist_Mono, Nunito, Playwrite_AU_VIC } from 'next/font/google';
import './globals.css';
import Home from '@/components/layout/Home';
import Skills from '@/components/layout/Skills';
import Work from '@/components/layout/Work';
import Project from '@/components/layout/Project';

const nunito = Nunito({
    variable: '--font-nunito',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
});

const playwriteAUVIC = Playwrite_AU_VIC({
    variable: '--font-playwrite',
    weight: ['400'],
});

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'My Profile',
    description: 'Generated by Nguyen Tuan',
};

//Root Layout
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} ${playwriteAUVIC.variable} antialiased`}
            >
                <Home />
                <Skills />
                <Work />
                <Project />
                {children}
            </body>
        </html>
    );
}
