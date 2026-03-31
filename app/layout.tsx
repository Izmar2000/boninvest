import type {Metadata} from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Sonrisa di Lac | Boninvest B.V.',
  description: 'Long-term verhuur van woningen en studio\'s op Bonaire. Ontdek Sonrisa di Lac, een moderne en kindvriendelijke woonwijk.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable} smooth-scroll`}>
      <body className="flex flex-col min-h-screen bg-brand-warm-white text-brand-dark antialiased">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
