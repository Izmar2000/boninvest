'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BedDouble, Bath, Maximize, Check, ArrowLeft, Mail, Info } from 'lucide-react';
import { use } from 'react';

// Mock data based on the prompt
const properties = [
  {
    id: 'type-a',
    title: 'Type A — Appartement',
    type: 'appartement',
    available: 2,
    furnished: true,
    images: [
      'https://irp.cdn-website.com/bbe51de6/dms3rep/multi/Sonrisa-di-Lac-Type-A-voorgevel.jpeg',
      'https://irp.cdn-website.com/bbe51de6/dms3rep/multi/A---3.jpeg',
      'https://irp.cdn-website.com/bbe51de6/dms3rep/multi/A---1.jpeg',
    ],
    description: 'Luxe, volledig gemeubileerd appartement. Direct instapklaar voor een comfortabel verblijf op Bonaire. Dit appartement is perfect voor stellen of kleine gezinnen die op zoek zijn naar een moderne en zorgeloze woonruimte.',
    specs: {
      area: '88 m²',
      bedrooms: 2,
      bathrooms: 2,
    },
    rooms: [
      { name: 'Woonkamer', area: '25 m²' },
      { name: 'Keuken / eetruimte', area: '20 m²' },
      { name: 'Slaapkamer 1', area: '15 m²' },
      { name: 'Badkamer 1', area: '4 m²' },
      { name: 'Slaapkamer 2', area: '15 m²' },
      { name: 'Badkamer 2', area: '4 m²' },
      { name: 'Gang', area: '4 m²' },
    ]
  },
  {
    id: 'type-b',
    title: 'Type B — Appartement',
    type: 'appartement',
    available: 1,
    furnished: true,
    images: [
      'https://irp.cdn-website.com/bbe51de6/dms3rep/multi/B---2.jpeg',
      'https://irp.cdn-website.com/bbe51de6/dms3rep/multi/1-0b8c8f8e.jpg',
      'https://irp.cdn-website.com/bbe51de6/dms3rep/multi/44-9b447749.jpg',
    ],
    description: 'Ruim en sfeervol gemeubileerd appartement met een moderne afwerking en hoogwaardige meubels. Ideaal voor grotere gezinnen of mensen die extra ruimte nodig hebben voor werk of hobby.',
    specs: {
      area: '86 m²',
      bedrooms: 3,
      bathrooms: 3,
    },
    rooms: [
      { name: 'TV-kamer / lounge', area: '25 m²' },
      { name: 'Slaapkamer 3', area: '15 m²' },
      { name: 'Badkamer 3', area: '4 m²' },
      { name: 'Slaapkamer 4', area: '15 m²' },
      { name: 'Badkamer 4', area: '4 m²' },
      { name: 'Slaapkamer 5', area: '15 m²' },
      { name: 'Badkamer 5', area: '4 m²' },
      { name: 'Gang', area: '4 m²' },
    ]
  },
  {
    id: 'type-c',
    title: 'Type C — Appartement',
    type: 'appartement',
    available: 3,
    furnished: false,
    images: [
      'https://irp.cdn-website.com/bbe51de6/dms3rep/multi/C---1-3bb6a4a8.jpeg',
      'https://irp.cdn-website.com/bbe51de6/dms3rep/multi/C---1.jpeg',
      'https://irp.cdn-website.com/bbe51de6/dms3rep/multi/1.jpg',
    ],
    description: 'Prachtige, ruime appartementen die u volledig naar eigen smaak en wens kunt inrichten. Een blanco canvas om uw droomhuis op Bonaire te creëren.',
    specs: {
      area: '88 m²',
      bedrooms: 2,
      bathrooms: 2,
    },
    rooms: [
      { name: 'Woonkamer', area: '25 m²' },
      { name: 'Keuken / eetruimte', area: '20 m²' },
      { name: 'Slaapkamer 1', area: '15 m²' },
      { name: 'Badkamer 1', area: '4 m²' },
      { name: 'Slaapkamer 2', area: '15 m²' },
      { name: 'Badkamer 2', area: '4 m²' },
      { name: 'Gang', area: '4 m²' },
    ]
  },
  {
    id: 'kavel-5',
    title: 'Kavel 5 — Woning',
    type: 'woning',
    available: 1,
    furnished: true,
    images: [
      'https://irp.cdn-website.com/bbe51de6/dms3rep/multi/01-Front-View-Kavel-5-with-logo-1a8ef4aa.jpg',
      'https://irp.cdn-website.com/bbe51de6/dms3rep/multi/01-Front-View-Kavel-5-with-logo.jpg',
      'https://irp.cdn-website.com/bbe51de6/dms3rep/multi/44.jpg',
    ],
    description: 'Prachtige vrijstaande woning op Kavel 5. Ideaal voor gezinnen die op zoek zijn naar ruimte en comfort in een rustige en kindvriendelijke omgeving.',
    specs: {
      area: '120 m²',
      bedrooms: 3,
      bathrooms: 2,
    },
    rooms: [
      { name: 'Woonkamer', area: '35 m²' },
      { name: 'Keuken / eetruimte', area: '25 m²' },
      { name: 'Slaapkamer 1', area: '20 m²' },
      { name: 'Badkamer 1', area: '6 m²' },
      { name: 'Slaapkamer 2', area: '15 m²' },
      { name: 'Slaapkamer 3', area: '15 m²' },
      { name: 'Badkamer 2', area: '4 m²' },
    ],
    shared: false
  }
];

export default function ObjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const property = properties.find(p => p.id === resolvedParams.id);

  if (!property) {
    return (
      <div className="flex flex-col min-h-screen pt-24 items-center justify-center">
        <h1 className="text-3xl font-bold text-brand-dark mb-4">Object niet gevonden</h1>
        <Link href="/objecten" className="text-brand-turquoise hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Terug naar overzicht
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Header */}
      <section className="bg-brand-warm-white py-8 border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <Link href="/objecten" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-turquoise transition-colors mb-6 text-sm font-medium">
            <ArrowLeft size={16} /> Terug naar overzicht
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-brand-dark text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  {property.available} Beschikbaar
                </span>
                <span className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-wider ${
                  property.furnished ? 'bg-brand-turquoise text-white' : 'bg-brand-sand text-brand-dark'
                }`}>
                  {property.furnished ? 'Gemeubileerd' : 'Ongemeubileerd'}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark">
                {property.title}
              </h1>
            </div>
            <div className="text-left md:text-right">
              <span className="block text-sm text-gray-500 uppercase tracking-wider mb-1">Huurprijs</span>
              <span className="text-3xl font-bold text-brand-turquoise">Op aanvraag</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-8 bg-brand-warm-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px] md:h-[500px]">
            <div className="md:col-span-2 relative h-full rounded-xl overflow-hidden shadow-sm">
              <Image
                src={property.images[0]}
                alt={`${property.title} - Foto 1`}
                fill
                className="object-cover"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="hidden md:flex flex-col gap-4 h-full">
              <div className="relative h-1/2 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={property.images[1]}
                  alt={`${property.title} - Foto 2`}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative h-1/2 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src={property.images[2]}
                  alt={`${property.title} - Foto 3`}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-12 bg-white flex-grow">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-6">Over dit object</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {property.description}
              </p>

              {property.shared && (
                <div className="bg-brand-sand-light p-4 rounded-lg mb-8 flex items-start gap-4 border border-brand-sand/30">
                  <Info className="text-brand-turquoise shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="font-bold text-brand-dark mb-1">Gedeelde Voorzieningen</h3>
                    <p className="text-gray-700 text-sm">
                      Let op: Dit type object maakt gebruik van een gemeenschappelijke woonkamer en keuken die gedeeld wordt met medebewoners. U huurt een privé slaapkamer en badkamer.
                    </p>
                  </div>
                </div>
              )}

              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-6">Ruimteoverzicht</h2>
              <div className="bg-brand-warm-white rounded-xl p-6 border border-gray-100 mb-12">
                <ul className="divide-y divide-gray-200">
                  {property.rooms.map((room, index) => (
                    <li key={index} className="py-3 flex justify-between items-center">
                      <span className="text-gray-700 font-medium">{room.name}</span>
                      <span className="text-brand-dark font-bold">{room.area}</span>
                    </li>
                  ))}
                  <li className="py-4 mt-2 border-t-2 border-brand-dark flex justify-between items-center">
                    <span className="text-brand-dark font-bold text-lg">Totaal (ca.)</span>
                    <span className="text-brand-turquoise font-bold text-lg">{property.specs.area}</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-6">Huurvoorwaarden</h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="text-brand-turquoise shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Langetermijnhuur — minimaal 1 jaar</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-brand-turquoise shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Geen huisdieren toegestaan</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-brand-turquoise shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Inkomenseis van toepassing</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-brand-turquoise shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">Huurprijs op aanvraag</span>
                </li>
              </ul>
              <Link href="/huurvoorwaarden" className="text-brand-turquoise hover:underline font-medium text-sm">
                Lees alle huurvoorwaarden
              </Link>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-brand-dark text-white rounded-xl p-8 sticky top-32">
                <h3 className="text-xl font-heading font-bold mb-6">Specificaties</h3>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm mb-1">Oppervlakte</span>
                    <div className="flex items-center gap-2">
                      <Maximize size={18} className="text-brand-turquoise" />
                      <span className="font-bold text-lg">{property.specs.area}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm mb-1">Slaapkamers</span>
                    <div className="flex items-center gap-2">
                      <BedDouble size={18} className="text-brand-turquoise" />
                      <span className="font-bold text-lg">{property.specs.bedrooms}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm mb-1">Badkamers</span>
                    <div className="flex items-center gap-2">
                      <Bath size={18} className="text-brand-turquoise" />
                      <span className="font-bold text-lg">{property.specs.bathrooms}</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-400 text-sm mb-1">Interieur</span>
                    <span className="font-bold text-sm mt-1">{property.furnished ? 'Gemeubileerd' : 'Ongemeubileerd'}</span>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-8">
                  <h3 className="text-xl font-heading font-bold mb-4">Interesse?</h3>
                  <p className="text-gray-300 text-sm mb-6">
                    Neem contact met ons op voor de huurprijs en beschikbaarheid van dit object.
                  </p>
                  <Link 
                    href={`/contact?type=${encodeURIComponent(property.title)}`}
                    className="w-full py-4 bg-brand-turquoise hover:bg-brand-turquoise-dark text-white rounded-md font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <Mail size={18} /> Aanvraag doen
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
