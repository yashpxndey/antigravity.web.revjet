import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'RevJet | Revenue Operations Engine',
    description: 'RevJet unifies your revenue operations into a single high-performance system. Eliminate leakage, optimize pipeline, and forecast with confidence.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark scroll-smooth">
            <body>{children}</body>
        </html>
    );
}
