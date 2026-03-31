'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Algemeen', href: '/algemeen' },
  { name: 'Objecten Longterm', href: '/objecten' },
  { name: 'Huurvoorwaarden', href: '/huurvoorwaarden' },
  { name: 'Verkoop', href: '/verkoop' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-32 h-12">
              <Image
                src="https://irp.cdn-website.com/bbe51de6/dms3rep/multi/boninvest_15_final-9fadf511-b6cfe50e.png"
                alt="Boninvest Logo"
                fill
                className="object-contain"
                sizes="128px"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-brand-turquoise ${
                  pathname === link.href ? 'text-brand-turquoise' : 'text-brand-dark'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-dark"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <nav className="flex flex-col py-4 px-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium uppercase tracking-wider p-2 transition-colors hover:text-brand-turquoise hover:bg-gray-50 rounded ${
                    pathname === link.href ? 'text-brand-turquoise bg-gray-50' : 'text-brand-dark'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
