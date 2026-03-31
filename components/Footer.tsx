import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 mt-auto">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand & Info */}
          <div className="flex flex-col gap-4">
            <div className="relative w-40 h-16 bg-white p-2 rounded">
              <Image
                src="https://irp.cdn-website.com/bbe51de6/dms3rep/multi/boninvest_15_final-9fadf511-b6cfe50e.png"
                alt="Boninvest Logo"
                fill
                className="object-contain"
                sizes="160px"
              />
            </div>
            <p className="text-gray-300 text-sm mt-2 max-w-xs">
              Boninvest B.V. biedt hoogwaardige langetermijnverhuur op Bonaire. Ontdek ons project Sonrisa di Lac in de rustige en kindvriendelijke wijk Nikiboko.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-heading font-semibold text-brand-sand">Snel naar</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Home</Link>
              <Link href="/algemeen" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Algemeen</Link>
              <Link href="/objecten" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Objecten Longterm</Link>
              <Link href="/huurvoorwaarden" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Huurvoorwaarden</Link>
              <Link href="/contact" className="text-gray-300 hover:text-brand-turquoise transition-colors text-sm">Contact</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-heading font-semibold text-brand-sand">Contact</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:boncao@outlook.com" className="flex items-center gap-3 text-gray-300 hover:text-brand-turquoise transition-colors text-sm">
                <Mail size={18} className="text-brand-turquoise" />
                boncao@outlook.com
              </a>
              <a href="tel:+59996977203" className="flex items-center gap-3 text-gray-300 hover:text-brand-turquoise transition-colors text-sm">
                <Phone size={18} className="text-brand-turquoise" />
                +5999 697 7203
              </a>
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin size={18} className="text-brand-turquoise shrink-0 mt-0.5" />
                <span>
                  Kaya Aleksandrit #14<br />
                  Santa Barbara, Bonaire C.N.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} Boninvest B.V. Alle rechten voorbehouden.
          </p>
          <div className="text-gray-400 text-xs text-center md:text-right">
            Project: Sonrisa di Lac
          </div>
        </div>
      </div>
    </footer>
  );
}
