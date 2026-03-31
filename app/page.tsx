import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Home, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://irp.cdn-website.com/bbe51de6/dms3rep/multi/01-Front-View-Kavel-5-with-logo-1a8ef4aa.jpg"
            alt="Sonrisa di Lac Bonaire"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-dark/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-turquoise/80 text-white text-sm font-medium tracking-wider uppercase mb-6">
            Long-term Verhuur Bonaire
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 drop-shadow-lg">
            Sonrisa di Lac
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-10 font-light drop-shadow-md">
            Modern en comfortabel wonen in de rustige, kindvriendelijke wijk Nikiboko.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/objecten" 
              className="px-8 py-4 bg-brand-turquoise hover:bg-brand-turquoise-dark text-white rounded font-medium transition-all flex items-center justify-center gap-2"
            >
              Bekijk Aanbod <ArrowRight size={20} />
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white rounded font-medium transition-all flex items-center justify-center"
            >
              Neem Contact Op
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-brand-warm-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
                Welkom bij Sonrisa di Lac
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Sonrisa di Lac is een nieuwe, moderne en goed onderhouden woonwijk op Bonaire. 
                Gelegen in Nikiboko, nabij Kaminda di Lac, biedt dit project de perfecte balans 
                tussen rust en bereikbaarheid.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <MapPin className="text-brand-turquoise shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Slechts 5 minuten rijden van het centrum van Kralendijk, supermarkten en scholen.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Home className="text-brand-turquoise shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Nabij het populaire windsurfgebied Sorobon.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-turquoise shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Kindvriendelijke omgeving met gemeenschappelijke voorzieningen.</span>
                </li>
              </ul>
              <Link 
                href="/algemeen" 
                className="inline-flex items-center gap-2 text-brand-turquoise font-medium hover:text-brand-turquoise-dark transition-colors"
              >
                Lees meer over de wijk <ArrowRight size={18} />
              </Link>
            </div>
            <div className="md:w-1/2 relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://irp.cdn-website.com/bbe51de6/dms3rep/multi/1-0b8c8f8e.jpg"
                alt="Sonrisa di Lac Wijk"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Teaser Aanbod */}
      <section className="py-20 bg-brand-sand-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4">
              Ons Aanbod
            </h2>
            <p className="text-gray-700">
              Wij bieden diverse huurwoningen aan voor langetermijnverhuur (minimaal 1 jaar). 
              Kies uit gemeubileerde appartementen, ongemeubileerde woningen of studio&apos;s.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://irp.cdn-website.com/bbe51de6/dms3rep/multi/Sonrisa-di-Lac-Type-A-voorgevel.jpeg"
                  alt="Type A Appartement"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-sm font-medium text-brand-dark">
                  Type A
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Type A Appartementen</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Luxe, volledig gemeubileerde appartementen. Direct instapklaar voor een comfortabel verblijf op Bonaire.
                </p>
                <Link href="/objecten?type=appartement" className="text-brand-turquoise font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Bekijk details <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://irp.cdn-website.com/bbe51de6/dms3rep/multi/B---2.jpeg"
                  alt="Type B & C Appartement"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-sm font-medium text-brand-dark">
                  Type B & C
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Type B & C Appartementen</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Ruime appartementen, zowel gemeubileerd als ongemeubileerd beschikbaar. Ideaal voor wie ruimte zoekt.
                </p>
                <Link href="/objecten?type=appartement" className="text-brand-turquoise font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Bekijk details <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="https://irp.cdn-website.com/bbe51de6/dms3rep/multi/01-Front-View-Kavel-5-with-logo.jpg"
                  alt="Kavel 5 Woning"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-sm font-medium text-brand-dark">
                  Kavel 5
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-2">Vrijstaande Woning</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Prachtige vrijstaande woning op Kavel 5. Ideaal voor gezinnen die op zoek zijn naar ruimte en comfort.
                </p>
                <Link href="/objecten?type=woning" className="text-brand-turquoise font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Bekijk details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/objecten" 
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-dark hover:bg-gray-800 text-white rounded font-medium transition-colors"
            >
              Bekijk Alle Objecten
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
