import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shopia | Modern Storefront',
  description: 'Modern shopping app with curated products and cart experience.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
