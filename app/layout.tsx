import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/site/header';
import { FloatingWhatsApp } from '@/components/site/floating-whatsapp';

export const metadata: Metadata = {
  title: 'Goodwood | Second-hand furniture in Johannesburg',
  description: 'Browse affordable second-hand furniture for your home in Johannesburg and surrounding areas.',
  metadataBase: new URL('https://goodwood.co.app'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
